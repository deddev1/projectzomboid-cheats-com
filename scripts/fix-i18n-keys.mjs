#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Warzone Cheats', 'Warframe Cheats'],
	['Warzone cheats', 'Warframe cheats'],
	['Warzone Cheats', 'Warframe Cheats'],
	['Call of Duty: Warzone', 'Warframe'],
	['Call of Duty Warzone', 'Warframe'],
	['Call of Duty', 'Warframe'],
	['Warzone PC', 'Warframe PC'],
	['for Warzone', 'for Warframe'],
	['Warzone ', 'Warframe '],
	['warzone ', 'rust '],
	['Ricochet maintenance', 'anti-cheat maintenance'],
	['Ricochet anti-cheat', 'Digital Extremes anti-cheat (EAC)'],
	['Ricochet', 'Digital Extremes anti-cheat (EAC)'],
	['operatorEsp', 'playerEsp'],
	['gulagFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['operators', 'players'],
	['operator', 'player'],
	['Operators', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Warframe'],
	['Verdansk', 'Warframe'],
	['Resurgence', 'mission objectives'],
	['gulag', 'control point'],
	['warzonescheats.net', 'warframecheats.net'],
	['Trucos Warzone', 'Trucos Warframe'],
	['Triches Warzone', 'Triches Warframe'],
	['Cheats Warzone', 'Cheats Warframe'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en eac key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\teac: \{/, "\t'eac-bypass': {");
pagesEn = pagesEn.replace(/Warframe Warzone/g, 'Warframe');
pagesEn = pagesEn.replace(/for Warframe Warzone/g, 'for Warframe');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'ricochet'/g, "'eac-bypass'");
pagesI18n = pagesI18n.replace(/ricochet:/g, "'eac-bypass':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
