#!/usr/bin/env node
/**
 * Completes project-zomboid-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'project-zomboid-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'zomboid-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'zomboid-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'project-zomboid-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-project-zomboid-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'project-zomboid-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'project-zomboid-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'zomboid-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/warzone-warzone/g, 'rust'],
	[/eac-bypass-project-zomboid-warzone/g, 'eac-bypass-project-zomboid'],
	[/Call of Duty: Warzone/g, 'Project Zomboid'],
	[/Call of Duty Warzone/g, 'Project Zomboid'],
	[/Call of Duty/g, 'Project Zomboid'],
	[/Warzone Wallhack/g, 'Project Zomboid Wallhack'],
	[/Warzone Radar Hack/g, 'Project Zomboid Radar Hack'],
	[/Warzone Cheat Features/g, 'Project Zomboid Cheat Features'],
	[/Warzone Cheat Pricing/g, 'Project Zomboid Cheat Pricing'],
	[/Warzone Cheat Setup/g, 'Project Zomboid Cheat Setup'],
	[/Warzone Cheat Status/g, 'Project Zomboid Cheat Status'],
	[/Warzone Cheat Support/g, 'Project Zomboid Cheat Support'],
	[/Warzone group fight/g, 'Project Zomboid group fight'],
	[/Warzone squad builder/g, 'Project Zomboid loadout builder'],
	[/Warzone store header/g, 'Project Zomboid header'],
	[/Warzone wasteland combat/g, 'Project Zomboid loot runs combat'],
	[/Warzone loadout builder/g, 'Project Zomboid loadout builder'],
	[/Warzone pricing/g, 'Project Zomboid pricing'],
	[/Warzone Project Zomboid anti-cheat/g, 'Project Zomboid Project Zomboid anti-cheat'],
	[/on Warzone/g, 'on Project Zomboid'],
	[/for Warzone/g, 'for Project Zomboid'],
	[/Warzone guides/g, 'Project Zomboid guides'],
	[/Warzone guide/g, 'Project Zomboid guide'],
	[/Warzone hileleri/g, 'Project Zomboid hileleri'],
	[/Warzone hile/g, 'Project Zomboid hile'],
	[/Warzone hileleri/g, 'Project Zomboid hileleri'],
	[/cheatów Warzone/g, 'cheatów Project Zomboid'],
	[/cheat Warzone/g, 'cheat Project Zomboid'],
	[/cheats Warzone/g, 'cheats Project Zomboid'],
	[/trucos Warzone/g, 'trucos Project Zomboid'],
	[/triche Warzone/g, 'triche Project Zomboid'],
	[/trucchi Warzone/g, 'trucchi Project Zomboid'],
	[/Wallhack Warzone/g, 'Project Zomboid Wallhack'],
	[/cheat Warzone undetected/g, 'cheat Project Zomboid undetected'],
	[/cheats Warzone undetected/g, 'cheats Project Zomboid undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/Resurgence room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Project Zomboid and loot objectives'],
	[/Verdansk, Urzikstan/g, 'Project Zomboid, loot objectives'],
	[/loot runs and Resurgence/g, 'loot runs and loot objectives'],
	[/Activision's anti-cheat/g, "Embark' anti-cheat"],
	[/Activision anti-cheat/g, 'Embark anti-cheat'],
	[/Activision ships/g, 'Embark ships'],
	[/Activision security/g, 'Embark security'],
	[/Activision bans/g, 'Embark bans'],
	[/Activision/g, 'Embark'],
	[/ricochet/gi, 'eac'],
	[/Ricochet/g, 'Project Zomboid anti-cheat (EAC)'],
	[/call-of-duty-warzone-cheats/g, 'project-zomboid-cheats'],
	[/call-of-duty-warzone/g, 'rust'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Project Zomboid'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Project Zomboid anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Project Zomboid Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Warzone guides/g, 'Project Zomboid guides');
	content = content.replace(/Warzone guide/g, 'Project Zomboid guide');
	content = content.replace(/Warzone hileleri/g, 'Project Zomboid hileleri');
	content = content.replace(/Warzone hile/g, 'Project Zomboid hile');
	content = content.replace(/cheat Warzone/g, 'cheat Project Zomboid');
	content = content.replace(/cheats Warzone/g, 'cheats Project Zomboid');
	content = content.replace(/trucos Warzone/g, 'trucos Project Zomboid');
	content = content.replace(/triche Warzone/g, 'triche Project Zomboid');
	content = content.replace(/trucchi Warzone/g, 'trucchi Project Zomboid');
	content = content.replace(/cheatów Warzone/g, 'cheatów Project Zomboid');
	content = content.replace(/читов Warzone/g, 'читов Project Zomboid');
	content = content.replace(/читів Warzone/g, 'читів Project Zomboid');
	content = content.replace(/Warzoneチート/g, 'Project Zomboidチート');
	content = content.replace(/Warzone 치트/g, 'Project Zomboid 치트');
	content = content.replace(/Warzone作弊/g, 'Project Zomboid作弊');
	content = content.replace(/Warzone rehberleri/g, 'Project Zomboid rehberleri');
	content = content.replace(/Warzone gidsen/g, 'Project Zomboid gidsen');
	content = content.replace(/Warzone průvodce/g, 'Project Zomboid průvodce');
	content = content.replace(/Warzone guider/g, 'Project Zomboid guider');
	content = content.replace(/Warzone related/g, 'Project Zomboid related');
	content = content.replace(/Warzone ガイド/g, 'Project Zomboid ガイド');
	content = content.replace(/Warzone 가이드/g, 'Project Zomboid 가이드');
	content = content.replace(/Warzone指南/g, 'Project Zomboid指南');
	content = content.replace(/Warzone गाइड/g, 'Project Zomboid गाइड');
	content = content.replace(/Warzone panduan/g, 'Project Zomboid panduan');
	content = content.replace(/Warzone คู่มือ/g, 'Project Zomboid คู่มือ');
	content = content.replace(/Warzone hướng dẫn/g, 'Project Zomboid hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Project Zomboid Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
