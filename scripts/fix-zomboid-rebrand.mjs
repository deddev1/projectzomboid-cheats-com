#!/usr/bin/env node
/** Fix broken identifiers and content after bulk rebrand. */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const TEXT_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md']);
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro', 'rebrand-warframe.mjs', 'rebrand-project-zomboid.mjs']);

const FIXES = [
	// Broken imports / identifiers
	["from '../data/project-zomboid'", "from '../data/zomboid'"],
	["from './project-zomboid'", "from './zomboid'"],
	['project-zomboidImages', 'zomboidImages'],
	['project-zomboidHeroImage', 'zomboidHeroImage'],
	['project-zomboidScreenshots', 'zomboidScreenshots'],
	['Project ZomboidScreenshot', 'ZomboidScreenshot'],
	['project-zomboidHeroVideo', 'zomboidHeroVideo'],
	['project-zomboidVideo', 'zomboidVideo'],
	// Warplayer typo from Frame ESP replacement
	['Warplayer ESP', 'Project Zomboid ESP'],
	['Warplayer esp', 'Project Zomboid esp'],
	['Warplayer', 'Project Zomboid'],
	// Wrong URLs
	['https://www.digitalextremes.com/', 'https://projectzomboid.com/'],
	['digitalextremes.com', 'projectzomboid.com'],
	['forums.projectzomboid.com', 'projectzomboid.com/blog'],
	// Remaining Warframe faction names
	['Grineer, Corpus, and special infected', 'zombies, survivors, and special infected'],
	['Grineer and Corpus units', 'zombies and survivors'],
	['Grineer, Corpus', 'zombies, survivors'],
	['Grineer heavy unit', 'special infected'],
	['Corpus-heavy', 'special infected-heavy'],
	['Corpus MOAs', 'zombie runners'],
	['Infested runners', 'zombie crawlers'],
	['hero boxes', 'zombie boxes'],
	['hero skeleton', 'zombie skeleton'],
	['hero health', 'zombie health'],
	['ult tracking', 'status tracking'],
	['final-circle scrims', 'horde clusters'],
	['The Indie Stone\'', "The Indie Stone's"],
	// Image path consistency (zomboid-* not project-zomboid-* for filenames)
	['/images/project-zomboid-cheats-', '/images/zomboid-cheats-'],
	['/images/project-zomboid-esp-', '/images/zomboid-esp-'],
	['/images/project-zomboid-aimbot-', '/images/zomboid-aimbot-'],
	['/images/project-zomboid-radar-', '/images/zomboid-radar-'],
	['/images/project-zomboid-esp-overlay', '/images/zomboid-esp-overlay'],
];

function walk(dir, files = []) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = join(dir, entry.name);
		if (entry.isDirectory()) walk(full, files);
		else files.push(full);
	}
	return files;
}

function apply(content) {
	let result = content;
	for (const [from, to] of FIXES) {
		if (result.includes(from)) result = result.split(from).join(to);
	}
	return result;
}

let changed = 0;
for (const file of walk(root)) {
	if (!TEXT_EXTENSIONS.has(extname(file))) continue;
	const original = readFileSync(file, 'utf8');
	const updated = apply(original);
	if (updated !== original) {
		writeFileSync(file, updated);
		changed++;
	}
}
console.log(`Fixed ${changed} files`);
