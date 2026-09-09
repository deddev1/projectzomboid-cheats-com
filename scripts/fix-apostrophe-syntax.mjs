#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const files = [
	'scripts/i18n-data/ui-strings-part1.mjs',
	'scripts/i18n-data/ui-strings-part2.mjs',
	'scripts/generate-blog-posts.mjs',
];

for (const rel of files) {
	const file = join(root, rel);
	let content = readFileSync(file, 'utf8');
	content = content
		.replace(/The Indie Stone['\u2019]s/g, 'The Indie Stone')
		.replace(/project-zomboid:/g, 'game:')
		.replace(/EXT\.project-zomboid/g, 'EXT.game');
	writeFileSync(file, content);
	console.log('Patched', rel);
}
