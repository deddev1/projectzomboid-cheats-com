#!/usr/bin/env node
import { buildManifest } from './external-guides-manifest.mjs';
import { RAW_PROVIDED_URLS } from './external-guides-url-data.mjs';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const manifest = buildManifest();
const postsPath = join(__dirname, '..', 'src', 'data', 'guides', 'posts.generated.ts');
const postsContent = readFileSync(postsPath, 'utf8');
const slugMatches = [...postsContent.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);

console.log(`Total Provided (raw list): ${RAW_PROVIDED_URLS.length}`);
console.log(`Total Unique URLs: ${manifest.length}`);
console.log(`Dedicated Pages Created: ${slugMatches.length}`);
console.log(`Missing: ${manifest.length - slugMatches.length}`);
console.log('');

const urls = manifest.map((e) => e.url);
const dupCheck = new Set(urls);
console.log(`Duplicates in manifest: ${urls.length - dupCheck.size}`);
console.log('');

console.log('| Provided URL | Game/Niche | Created Page Path | IGN Image Used | Anchor Text Used |');
console.log('| --- | --- | --- | --- | --- |');
for (const entry of manifest) {
	const pagePath = `/guides/${entry.slug}/`;
	const ignImage = `/images/guides/${entry.gameId}.webp`;
	console.log(`| ${entry.url} | ${entry.gameName} | ${pagePath} | ${ignImage} | ${entry.anchorText} |`);
}
