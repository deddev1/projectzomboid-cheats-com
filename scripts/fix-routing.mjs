#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Warzone source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['warzone-esp', 'warframe-esp'],
	['warzone-aimbot', 'warframe-aimbot'],
	['ricochet', 'eac-bypass'],
	['undetected-warzone-cheats', 'undetected-warframe-cheats'],
	['warzone-wallhack', 'warframe-wallhack'],
	['warzone-radar-hack', 'warframe-radar-hack'],
	['warzone-cheats-2026', 'warframe-cheats-2026'],
	['ricochet-bypass', 'eac-bypass-warframe'],
	['warzonescheats.net', 'warframecheats.net'],
	['trucos-warzone', 'trucos-warframe'],
	['triche-warzone', 'triche-warframe'],
	['warzone-cheats', 'warframe-cheats'],
	['cheats-warzone', 'cheats-warframe'],
	['trucchi-warzone', 'trucchi-warframe'],
	['cheaty-warzone', 'cheaty-warframe'],
	['chity-warzone', 'chity-warframe'],
	['chitov-warzone', 'chitov-warframe'],
	['chitiv-warzone', 'chitiv-overwatch'],
	['cheatow-warzone', 'cheatow-warframe'],
	['hile-warzone', 'hile-warframe'],
	['warzone-hile', 'warframe-hile'],
	['warzone-esp-chity', 'warframe-esp-chity'],
	['warzone-aimbot-chity', 'warframe-aimbot-chity'],
	['unentdeckte-warzone-cheats', 'unentdeckte-warframe-cheats'],
	['cheats-warzone-indetectaveis', 'cheats-warframe-indetectaveis'],
	['trucchi-warzone-indetectabili', 'trucchi-warframe-indetectabili'],
	['niewykrywalne-cheats-warzone', 'niewykrywalne-cheats-warframe'],
	['nedecektiruemye-chity-warzone', 'nedecektiruemye-chity-warframe'],
	['tespit-edilemeyen-warzone-hileleri', 'tespit-edilemeyen-warframe-hileleri'],
	['nedecektovani-chity-warzone', 'nedecektovani-chity-warframe'],
	['cheats-warzone-nedetectabile', 'cheats-warframe-nedetectabile'],
	['basta-warzone-cheats', 'basta-warframe-cheats'],
	['eac-bypass-warframe-trucos-warzone', 'eac-bypass-warframe-trucos-warframe'],
	['eac-bypass-warframe-triche-warzone', 'eac-bypass-warframe-triche-warframe'],
	['eac-bypass-warframe-cheats-warzone', 'eac-bypass-warframe-cheats-warframe'],
	['eac-bypass-warframe-chity-warzone', 'eac-bypass-warframe-chity-warframe'],
	['eac-bypass-warframe-warzone', 'eac-bypass-warframe'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac-bypass': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich warframe-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/warframe-cheats-hero.webp',
	'warframe-esp': '/images/warframe-cheats-esp-wallhack.webp',
	'warframe-aimbot': '/images/warframe-cheats-aimbot-combat.webp',
	features: '/images/warframe-cheats-package.webp',
	pricing: '/images/warframe-cheats-cover.webp',
	setup: '/images/warframe-loadout-builder.webp',
	updates: '/images/warframe-header-art.webp',
	faq: '/images/warframe-squad-fight.webp',
	support: '/images/warframe-cheats-package.webp',
	undetected: '/images/warframe-battle-royale-combat.webp',
	wallhack: '/images/warframe-cheats-esp-wallhack.webp',
	radar: '/images/warframe-player-esp.webp',
	'eac-bypass': '/images/warframe-reboot-van-fight.webp',
	'cheats-2026': '/images/warframe-cheats-hero.webp',
	privacy: '/images/warframe-cheats-aimbot-combat.webp',
	refund: '/images/warframe-cheats-cover.webp',
	terms: '/images/warframe-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'warframe-esp', 'warframe-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac-bypass',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'warframe-esp' | 'warframe-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac-bypass' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/gulagFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
