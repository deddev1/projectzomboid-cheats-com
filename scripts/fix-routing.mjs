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
	['warzone-esp', 'project-zomboid-esp'],
	['warzone-aimbot', 'project-zomboid-aimbot'],
	['ricochet', 'eac-bypass'],
	['undetected-warzone-cheats', 'undetected-project-zomboid-cheats'],
	['warzone-wallhack', 'project-zomboid-wallhack'],
	['warzone-radar-hack', 'project-zomboid-radar-hack'],
	['warzone-cheats-2026', 'project-zomboid-cheats-2026'],
	['ricochet-bypass', 'eac-bypass-project-zomboid'],
	['warzonescheats.net', 'projectzomboidcheats.com'],
	['trucos-warzone', 'trucos-zomboid'],
	['triche-warzone', 'triche-zomboid'],
	['warzone-cheats', 'project-zomboid-cheats'],
	['cheats-warzone', 'cheats-zomboid'],
	['trucchi-warzone', 'trucchi-zomboid'],
	['cheaty-warzone', 'cheaty-zomboid'],
	['chity-warzone', 'chity-zomboid'],
	['chitov-warzone', 'chitov-zomboid'],
	['chitiv-warzone', 'chitiv-overwatch'],
	['cheatow-warzone', 'cheatow-zomboid'],
	['hile-warzone', 'hile-zomboid'],
	['warzone-hile', 'zomboid-hile'],
	['warzone-esp-chity', 'project-zomboid-esp-chity'],
	['warzone-aimbot-chity', 'project-zomboid-aimbot-chity'],
	['unentdeckte-warzone-cheats', 'unentdeckte-project-zomboid-cheats'],
	['cheats-warzone-indetectaveis', 'cheats-zomboid-indetectaveis'],
	['trucchi-warzone-indetectabili', 'trucchi-zomboid-indetectabili'],
	['niewykrywalne-cheats-warzone', 'niewykrywalne-cheats-zomboid'],
	['nedecektiruemye-chity-warzone', 'nedecektiruemye-chity-zomboid'],
	['tespit-edilemeyen-warzone-hileleri', 'tespit-edilemeyen-zomboid-hileleri'],
	['nedecektovani-chity-warzone', 'nedecektovani-chity-zomboid'],
	['cheats-warzone-nedetectabile', 'cheats-zomboid-nedetectabile'],
	['basta-warzone-cheats', 'basta-project-zomboid-cheats'],
	['eac-bypass-project-zomboid-trucos-warzone', 'eac-bypass-project-zomboid-trucos-zomboid'],
	['eac-bypass-project-zomboid-triche-warzone', 'eac-bypass-project-zomboid-triche-zomboid'],
	['eac-bypass-project-zomboid-cheats-warzone', 'eac-bypass-project-zomboid-cheats-zomboid'],
	['eac-bypass-project-zomboid-chity-warzone', 'eac-bypass-project-zomboid-chity-zomboid'],
	['eac-bypass-project-zomboid-warzone', 'eac-bypass-project-zomboid'],
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
	const heroImages = `/** Hero image per page topic — keyword-rich project-zomboid-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/zomboid-cheats-hero.webp',
	'project-zomboid-esp': '/images/zomboid-cheats-esp-wallhack.webp',
	'project-zomboid-aimbot': '/images/zomboid-cheats-aimbot-combat.webp',
	features: '/images/zomboid-cheats-package.webp',
	pricing: '/images/zomboid-cheats-cover.webp',
	setup: '/images/zomboid-loadout-builder.webp',
	updates: '/images/zomboid-header-art.webp',
	faq: '/images/zomboid-squad-fight.webp',
	support: '/images/zomboid-cheats-package.webp',
	undetected: '/images/zomboid-battle-royale-combat.webp',
	wallhack: '/images/zomboid-cheats-esp-wallhack.webp',
	radar: '/images/zomboid-player-esp.webp',
	'eac-bypass': '/images/zomboid-reboot-van-fight.webp',
	'cheats-2026': '/images/zomboid-cheats-hero.webp',
	privacy: '/images/zomboid-cheats-aimbot-combat.webp',
	refund: '/images/zomboid-cheats-cover.webp',
	terms: '/images/zomboid-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'project-zomboid-esp', 'project-zomboid-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac-bypass',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'project-zomboid-esp' | 'project-zomboid-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac-bypass' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/gulagFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
