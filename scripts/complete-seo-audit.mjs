#!/usr/bin/env node
/**
 * Completes warframe-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'warframe-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'warframe-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'warframe-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'warframe-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-warframe-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'warframe-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'warframe-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'warframe-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/warzone-warzone/g, 'rust'],
	[/eac-bypass-warframe-warzone/g, 'eac-bypass-warframe'],
	[/Call of Duty: Warzone/g, 'Warframe'],
	[/Call of Duty Warzone/g, 'Warframe'],
	[/Call of Duty/g, 'Warframe'],
	[/Warzone Wallhack/g, 'Warframe Wallhack'],
	[/Warzone Radar Hack/g, 'Warframe Radar Hack'],
	[/Warzone Cheat Features/g, 'Warframe Cheat Features'],
	[/Warzone Cheat Pricing/g, 'Warframe Cheat Pricing'],
	[/Warzone Cheat Setup/g, 'Warframe Cheat Setup'],
	[/Warzone Cheat Status/g, 'Warframe Cheat Status'],
	[/Warzone Cheat Support/g, 'Warframe Cheat Support'],
	[/Warzone squad fight/g, 'Warframe squad fight'],
	[/Warzone squad builder/g, 'Warframe loadout builder'],
	[/Warzone store header/g, 'Warframe header'],
	[/Warzone wasteland combat/g, 'Warframe Steel Path missions combat'],
	[/Warzone loadout builder/g, 'Warframe loadout builder'],
	[/Warzone pricing/g, 'Warframe pricing'],
	[/Warzone Digital Extremes anti-cheat/g, 'Warframe Digital Extremes anti-cheat'],
	[/on Warzone/g, 'on Warframe'],
	[/for Warzone/g, 'for Warframe'],
	[/Warzone guides/g, 'Warframe guides'],
	[/Warzone guide/g, 'Warframe guide'],
	[/Warzone hileleri/g, 'Warframe hileleri'],
	[/Warzone hile/g, 'Warframe hile'],
	[/Warzone hileleri/g, 'Warframe hileleri'],
	[/cheatów Warzone/g, 'cheatów Warframe'],
	[/cheat Warzone/g, 'cheat Warframe'],
	[/cheats Warzone/g, 'cheats Warframe'],
	[/trucos Warzone/g, 'trucos Warframe'],
	[/triche Warzone/g, 'triche Warframe'],
	[/trucchi Warzone/g, 'trucchi Warframe'],
	[/Wallhack Warzone/g, 'Warframe Wallhack'],
	[/cheat Warzone undetected/g, 'cheat Warframe undetected'],
	[/cheats Warzone undetected/g, 'cheats Warframe undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/Resurgence room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Warframe and mission objectives'],
	[/Verdansk, Urzikstan/g, 'Warframe, mission objectives'],
	[/Steel Path missions and Resurgence/g, 'Steel Path missions and mission objectives'],
	[/Activision's anti-cheat/g, "Embark' anti-cheat"],
	[/Activision anti-cheat/g, 'Embark anti-cheat'],
	[/Activision ships/g, 'Embark ships'],
	[/Activision security/g, 'Embark security'],
	[/Activision bans/g, 'Embark bans'],
	[/Activision/g, 'Embark'],
	[/ricochet/gi, 'eac'],
	[/Ricochet/g, 'Digital Extremes anti-cheat (EAC)'],
	[/call-of-duty-warzone-cheats/g, 'warframe-cheats'],
	[/call-of-duty-warzone/g, 'rust'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Warframe'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Warframe anti-cheat'],
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
		.replace(/Buy on Zadeyo/g, 'Buy Warframe Cheats')
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
	content = content.replace(/Warzone guides/g, 'Warframe guides');
	content = content.replace(/Warzone guide/g, 'Warframe guide');
	content = content.replace(/Warzone hileleri/g, 'Warframe hileleri');
	content = content.replace(/Warzone hile/g, 'Warframe hile');
	content = content.replace(/cheat Warzone/g, 'cheat Warframe');
	content = content.replace(/cheats Warzone/g, 'cheats Warframe');
	content = content.replace(/trucos Warzone/g, 'trucos Warframe');
	content = content.replace(/triche Warzone/g, 'triche Warframe');
	content = content.replace(/trucchi Warzone/g, 'trucchi Warframe');
	content = content.replace(/cheatów Warzone/g, 'cheatów Warframe');
	content = content.replace(/читов Warzone/g, 'читов Warframe');
	content = content.replace(/читів Warzone/g, 'читів Warframe');
	content = content.replace(/Warzoneチート/g, 'Warframeチート');
	content = content.replace(/Warzone 치트/g, 'Warframe 치트');
	content = content.replace(/Warzone作弊/g, 'Warframe作弊');
	content = content.replace(/Warzone rehberleri/g, 'Warframe rehberleri');
	content = content.replace(/Warzone gidsen/g, 'Warframe gidsen');
	content = content.replace(/Warzone průvodce/g, 'Warframe průvodce');
	content = content.replace(/Warzone guider/g, 'Warframe guider');
	content = content.replace(/Warzone related/g, 'Warframe related');
	content = content.replace(/Warzone ガイド/g, 'Warframe ガイド');
	content = content.replace(/Warzone 가이드/g, 'Warframe 가이드');
	content = content.replace(/Warzone指南/g, 'Warframe指南');
	content = content.replace(/Warzone गाइड/g, 'Warframe गाइड');
	content = content.replace(/Warzone panduan/g, 'Warframe panduan');
	content = content.replace(/Warzone คู่มือ/g, 'Warframe คู่มือ');
	content = content.replace(/Warzone hướng dẫn/g, 'Warframe hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Warframe Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
