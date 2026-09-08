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
	['warzone-esp', 'warframe-esp'],
	['warzone-aimbot', 'warframe-aimbot'],
	["'ricochet'", "'eac-bypass'"],
	['ricochet-bypass', 'eac-bypass-warframe'],
	['undetected-warzone-cheats', 'undetected-warframe-cheats'],
	['warzone-wallhack', 'warframe-wallhack'],
	['warzone-radar-hack', 'warframe-radar-hack'],
	['warzone-cheats-2026', 'warframe-cheats-2026'],
	['call-of-duty-warzone-cheats', 'warframe-cheats'],
	['call-of-duty-warzone', 'rust'],
	['Call of Duty: Warzone', 'Warframe'],
	['Call of Duty Warzone', 'Warframe'],
	['Warzone Cheats', 'Warframe Cheats'],
	['Warzone cheats', 'Warframe cheats'],
	['Warzone cheat', 'Warframe cheat'],
	['Warzone ESP', 'Warframe ESP'],
	['Warzone Aimbot', 'Warframe Aimbot'],
	['Warzone wallhack', 'Warframe wallhack'],
	['Warzone radar', 'Warframe radar'],
	['Warzone firefights', 'Warframe firefights'],
	['Warzone combat', 'Warframe combat'],
	['Warzone patches', 'Warframe patches'],
	['Warzone updates', 'Warframe updates'],
	['Warzone setup', 'Warframe setup'],
	['Warzone license', 'Warframe license'],
	['Warzone licenses', 'Warframe licenses'],
	['Warzone sessions', 'Warframe sessions'],
	['in Warzone', 'in Warframe'],
	['for Warzone', 'for Warframe'],
	['Warzone on', 'Warframe on'],
	['Warzone or', 'Warframe or'],
	['Warzone\'s', 'Warframe\'s'],
	['Warzone ', 'Warframe '],
	['Ricochet anti-cheat', 'Digital Extremes anti-cheat (EAC)'],
	['Ricochet maintenance', 'anti-cheat maintenance'],
	['Ricochet bypass', 'anti-cheat bypass'],
	['Ricochet Bypass', 'EAC Bypass'],
	['Ricochet', 'Digital Extremes anti-cheat (EAC)'],
	['ricochet', 'eac'],
	['support@warzonescheats.net', 'support@warframecheats.net'],
	['Verdansk, Urzikstan, and Rebirth Island', 'mission objectives, extraction routes, and ranked seasons'],
	['Verdansk, Urzikstan and Rebirth Island', 'mission objectives, extraction routes and ranked seasons'],
	['gulag fights', 'map rotations'],
	['gulag fight', 'extraction route fight'],
	['gulag rounds', 'respawn rounds'],
	['gulag', 'control point'],
	['operators', 'players'],
	['operator', 'player'],
	['Operators', 'Players'],
	['Operator', 'Player'],
	['UAV', 'supply drop'],
	['Resurgence and Steel Path missions', 'mission objectives and raids'],
	['BR and Resurgence', 'open world missions and Steel Path missions'],
	['BR & Resurgence', 'PVE & PVP'],
	['loadout drops', 'loot chests'],
	['loadout drop', 'loot chest'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Embark\''],
	['Call of Duty combat pace', 'Warframe combat pace'],
	['COD', 'Warframe'],
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
	product: 'Warframe Cheats',
	game: 'Warframe',
	checkout: 'Zadeyo',
	eac: 'Digital Extremes anti-cheat (EAC)',
};`,
);
phrases = phrases.replace(/KW\.ricochet/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'mission objectives, extraction routes, and ranked seasons'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
