#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Warzone source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['warzone-esp', 'project-zomboid-esp'],
	['warzone-aimbot', 'project-zomboid-aimbot'],
	["'ricochet'", "'eac-bypass'"],
	['ricochet-bypass', 'eac-bypass-project-zomboid'],
	['undetected-warzone-cheats', 'undetected-project-zomboid-cheats'],
	['warzone-wallhack', 'project-zomboid-wallhack'],
	['warzone-radar-hack', 'project-zomboid-radar-hack'],
	['warzone-cheats-2026', 'project-zomboid-cheats-2026'],
	['call-of-duty-warzone-cheats', 'project-zomboid-cheats'],
	['call-of-duty-warzone', 'rust'],
	['Call of Duty: Warzone', 'Project Zomboid'],
	['Call of Duty Warzone', 'Project Zomboid'],
	['Warzone Cheats', 'Project Zomboid Cheats'],
	['Warzone cheats', 'Project Zomboid cheats'],
	['Warzone cheat', 'Project Zomboid cheat'],
	['Warzone ESP', 'Project Zomboid ESP'],
	['Warzone Aimbot', 'Project Zomboid Aimbot'],
	['Warzone wallhack', 'Project Zomboid wallhack'],
	['Warzone radar', 'Project Zomboid radar'],
	['Warzone firefights', 'Project Zomboid combat'],
	['Warzone combat', 'Project Zomboid combat'],
	['Warzone patches', 'Project Zomboid patches'],
	['Warzone updates', 'Project Zomboid updates'],
	['Warzone setup', 'Project Zomboid setup'],
	['Warzone license', 'Project Zomboid license'],
	['Warzone licenses', 'Project Zomboid licenses'],
	['Warzone sessions', 'Project Zomboid sessions'],
	['in Warzone', 'in Project Zomboid'],
	['for Warzone', 'for Project Zomboid'],
	['Warzone on', 'Project Zomboid on'],
	['Warzone or', 'Project Zomboid or'],
	['Warzone\'s', 'Project Zomboid\'s'],
	['Warzone ', 'Project Zomboid '],
	['Ricochet anti-cheat', 'Project Zomboid anti-cheat (EAC)'],
	['Ricochet maintenance', 'anti-cheat maintenance'],
	['Ricochet bypass', 'anti-cheat bypass'],
	['Ricochet Bypass', 'EAC Bypass'],
	['Ricochet', 'Project Zomboid anti-cheat (EAC)'],
	['ricochet', 'eac'],
	['support@warzonescheats.net', 'support@projectzomboidcheats.com'],
	['Verdansk, Urzikstan, and Rebirth Island', 'loot objectives, extraction routes, and ranked seasons'],
	['Verdansk, Urzikstan and Rebirth Island', 'loot objectives, extraction routes and ranked seasons'],
	['gulag fights', 'map rotations'],
	['gulag fight', 'extraction route fight'],
	['gulag rounds', 'rehorde spawn rounds'],
	['gulag', 'control point'],
	['operators', 'players'],
	['operator', 'player'],
	['Operators', 'Players'],
	['Operator', 'Player'],
	['UAV', 'supply drop'],
	['Resurgence and loot runs', 'loot objectives and raids'],
	['BR and Resurgence', 'Knox County exploration and loot runs'],
	['BR & Resurgence', 'PVE & PVP'],
	['loadout drops', 'loot chests'],
	['loadout drop', 'loot chest'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Embark\''],
	['Call of Duty combat pace', 'Project Zomboid combat pace'],
	['COD', 'Project Zomboid'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Project Zomboid Cheats',
	game: 'Project Zomboid',
	checkout: 'Zadeyo',
	eac: 'Project Zomboid anti-cheat (EAC)',
};`,
);
phrases = phrases.replace(/KW\.ricochet/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'loot objectives, extraction routes, and ranked seasons'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
