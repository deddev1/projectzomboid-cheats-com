#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const packageName = JSON.parse(readFileSync('package.json', 'utf8')).name;
let commit = 'unknown';

try {
	commit = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
} catch {
	// Ignore outside git checkouts.
}

console.log(`[verify-build] commit=${commit} package=${packageName}`);

if (packageName === 'warframe-cheats') {
	console.error(
		'[verify-build] Cloudflare is building a stale Warframe commit. Cancel retry and deploy latest main (228547e or newer).',
	);
	process.exit(1);
}

if (!existsSync('src/components/ZomboidAuthorityLinks.astro')) {
	console.error(
		'[verify-build] Missing src/components/ZomboidAuthorityLinks.astro. Deploy latest main instead of retrying an old failed build.',
	);
	process.exit(1);
}
