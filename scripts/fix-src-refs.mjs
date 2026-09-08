#!/usr/bin/env node
/** Final pass: fix remaining Warzone references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['warzoneImages', 'zomboidImages'],
	["from '../data/warzone'", "from '../data/zomboid'"],
	["from './warzone'", "from './zomboid'"],
	['/undetected-warzone-cheats/', '/project-zomboid-cheats/'],
	['/warzone-wallhack/', '/project-zomboid-wallhack/'],
	['/warzone-radar-hack/', '/project-zomboid-radar/'],
	['/ricochet-bypass/', '/project-zomboid-cheats/'],
	['/warzone-cheats-2026/', '/project-zomboid-cheats/'],
	['/warzone-aimbot/', '/project-zomboid-aimbot/'],
	['/warzone-esp/', '/project-zomboid-esp/'],
	['/warzone-hacks/', '/project-zomboid-esp/'],
	['Warzone Cheats', 'Project Zomboid Cheats'],
	['Warzone cheats', 'Project Zomboid cheats'],
	['Warzone wallhack', 'Project Zomboid wallhack'],
	['Warzone radar', 'Project Zomboid radar'],
	['Warzone Aimbot', 'Project Zomboid Aimbot'],
	['Warzone ESP', 'Project Zomboid ESP'],
	['Call of Duty: Warzone', 'Project Zomboid'],
	['Ricochet', 'Project Zomboid anti-cheat (EAC)'],
	['ricochet', 'eac'],
	['warzonescheats.net', 'projectzomboidcheats.com'],
	['operatorEsp', 'playerEsp'],
	['gulagFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
