import { siteConfig } from './site';
import { warframeImages } from './warframe';
import { englishPaths, sitemapPageIds, type PageId } from './i18n/routing';
import { pageSitemapMeta } from './sitemap-meta';

export type SitemapImage = {
	url: string;
	title: string;
	caption: string;
};

export type PageSitemapEntry = {
	path: string;
	priority: number;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	lastmod: string;
	images: SitemapImage[];
};

const abs = (path: string) => new URL(path, siteConfig.url).href;

const img = (path: string, title: string, caption: string): SitemapImage => ({
	url: abs(path),
	title,
	caption,
});

/** Sitemap image assignments for indexable pages only (see sitemapPageIds in routing.ts). */
const sitemapImagesByPageId: Partial<Record<PageId, SitemapImage[]>> = {
	home: [
		img(warframeImages.hero, 'Warframe Cheats', 'Warframe Cheats homepage hero'),
		img(warframeImages.espWallhack, 'Warframe ESP', 'Warframe ESP wallhack overlay'),
		img(warframeImages.aimbotCombat, 'Warframe Aimbot', 'Warframe Aimbot combat preview'),
	],
	hacks: [
		img(warframeImages.battleRoyaleCombat, 'Warframe Cheats', 'Warframe cheats Steel Path mission fight preview'),
		img(warframeImages.espWallhack, 'Warframe Cheats ESP', 'Warframe wallhack ESP on Grineer, Corpus, and Sentient units'),
	],
	'warframe-esp': [
		img(warframeImages.espWallhack, 'Warframe ESP', 'Warframe ESP wallhack overlay'),
		img(warframeImages.playerEsp, 'Warframe Enemy ESP', 'Warframe Enemy ESP markers'),
	],
	'warframe-aimbot': [
		img(warframeImages.aimbotCombat, 'Warframe Aimbot', 'Warframe Aimbot combat preview'),
		img(warframeImages.squadFight, 'Warframe Aimbot squad fight', 'Warframe Aimbot in squad combat'),
	],
	wallhack: [
		img(warframeImages.espWallhack, 'Warframe Wallhack', 'Warframe wallhack ESP view'),
		img(warframeImages.cover, 'Warframe Wallhack overlay', 'Warframe ESP boxes through terrain'),
	],
	radar: [
		img(warframeImages.radarHack, 'Warframe Radar Hack', 'Warframe radar hack minimap overlay'),
		img(warframeImages.rebootFight, 'Warframe Radar Hack overlay', 'Warframe 2D radar for flank detection'),
	],
	features: [
		img(warframeImages.hero, 'Warframe Cheats Features', 'Warframe Cheats feature overview'),
		img(warframeImages.loadoutBuilder, 'Warframe Cheats menu', 'Warframe Cheats in-client controls'),
	],
	pricing: [
		img(warframeImages.cover, 'Warframe Cheats Pricing', 'Warframe Cheats license plans'),
		img(warframeImages.cheatsPackage, 'Warframe Cheats package', 'Warframe Cheats product package'),
	],
	setup: [
		img(warframeImages.squadFight, 'Warframe Cheats Setup', 'Warframe Cheats installation guide'),
	],
	updates: [
		img(warframeImages.hero, 'Warframe Cheats Updates', 'Warframe Cheats patch status'),
	],
	faq: [
		img(warframeImages.loadoutBuilder, 'Warframe Cheats FAQ', 'Warframe Cheats frequently asked questions'),
	],
	support: [
		img(warframeImages.headerArt, 'Warframe Cheats Support', 'Warframe Cheats help center'),
	],
	privacy: [
		img(warframeImages.cover, 'Warframe Cheats Privacy Policy', 'Warframe Cheats privacy policy'),
	],
	refund: [
		img(warframeImages.cover, 'Warframe Cheats Refund Policy', 'Warframe Cheats refund policy'),
	],
	terms: [
		img(warframeImages.squadFight, 'Warframe Cheats Terms', 'Warframe Cheats terms of use'),
	],
};

for (const pageId of sitemapPageIds) {
	if (!sitemapImagesByPageId[pageId]?.length) {
		throw new Error(`[sitemap] No images configured for sitemap pageId: ${pageId}`);
	}
}

/** Canonical English sitemap entries — core warframe-cheats URLs only. */
export const pageSitemapEntries: PageSitemapEntry[] = sitemapPageIds.map((pageId) => {
	const meta = pageSitemapMeta[pageId];
	return {
		path: englishPaths[pageId],
		priority: meta.priority,
		changefreq: meta.changefreq,
		lastmod: meta.lastmod,
		images: sitemapImagesByPageId[pageId]!,
	};
});

/** Unique keyword images for the dedicated image sitemap. */
export const imageSitemapEntries: SitemapImage[] = warframeImages.sitemap.map((entry) =>
	img(entry.src, entry.title, entry.caption),
);

export function absolutePageUrl(path: string): string {
	return abs(path);
}

export function absoluteAssetUrl(path: string): string {
	return abs(path);
}
