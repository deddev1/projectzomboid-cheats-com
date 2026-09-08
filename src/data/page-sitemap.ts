import { siteConfig } from './site';
import { zomboidImages } from './zomboid';
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
		img(zomboidImages.hero, 'Project Zomboid Cheats', 'Project Zomboid Cheats homepage hero'),
		img(zomboidImages.espWallhack, 'Project Zomboid ESP', 'Project Zomboid ESP wallhack overlay'),
		img(zomboidImages.aimbotCombat, 'Project Zomboid Aimbot', 'Project Zomboid Aimbot combat preview'),
	],
	hacks: [
		img(zomboidImages.battleRoyaleCombat, 'Project Zomboid Cheats', 'Project Zomboid cheats survival run fight preview'),
		img(zomboidImages.espWallhack, 'Project Zomboid Cheats ESP', 'Project Zomboid wallhack ESP on zombies, survivors, and special infected'),
	],
	'project-zomboid-esp': [
		img(zomboidImages.espWallhack, 'Project Zomboid ESP', 'Project Zomboid ESP wallhack overlay'),
		img(zomboidImages.playerEsp, 'Project Zomboid Zombie ESP', 'Project Zomboid Zombie ESP markers'),
	],
	'project-zomboid-aimbot': [
		img(zomboidImages.aimbotCombat, 'Project Zomboid Aimbot', 'Project Zomboid Aimbot combat preview'),
		img(zomboidImages.squadFight, 'Project Zomboid Aimbot group fight', 'Project Zomboid Aimbot in squad combat'),
	],
	wallhack: [
		img(zomboidImages.espWallhack, 'Project Zomboid Wallhack', 'Project Zomboid wallhack ESP view'),
		img(zomboidImages.cover, 'Project Zomboid Wallhack overlay', 'Project Zomboid ESP boxes through terrain'),
	],
	radar: [
		img(zomboidImages.radarHack, 'Project Zomboid Radar Hack', 'Project Zomboid radar hack minimap overlay'),
		img(zomboidImages.rebootFight, 'Project Zomboid Radar Hack overlay', 'Project Zomboid 2D radar for flank detection'),
	],
	features: [
		img(zomboidImages.hero, 'Project Zomboid Cheats Features', 'Project Zomboid Cheats feature overview'),
		img(zomboidImages.loadoutBuilder, 'Project Zomboid Cheats menu', 'Project Zomboid Cheats in-client controls'),
	],
	pricing: [
		img(zomboidImages.cover, 'Project Zomboid Cheats Pricing', 'Project Zomboid Cheats license plans'),
		img(zomboidImages.cheatsPackage, 'Project Zomboid Cheats package', 'Project Zomboid Cheats product package'),
	],
	setup: [
		img(zomboidImages.squadFight, 'Project Zomboid Cheats Setup', 'Project Zomboid Cheats installation guide'),
	],
	updates: [
		img(zomboidImages.hero, 'Project Zomboid Cheats Updates', 'Project Zomboid Cheats patch status'),
	],
	faq: [
		img(zomboidImages.loadoutBuilder, 'Project Zomboid Cheats FAQ', 'Project Zomboid Cheats frequently asked questions'),
	],
	support: [
		img(zomboidImages.headerArt, 'Project Zomboid Cheats Support', 'Project Zomboid Cheats help center'),
	],
	privacy: [
		img(zomboidImages.cover, 'Project Zomboid Cheats Privacy Policy', 'Project Zomboid Cheats privacy policy'),
	],
	refund: [
		img(zomboidImages.cover, 'Project Zomboid Cheats Refund Policy', 'Project Zomboid Cheats refund policy'),
	],
	terms: [
		img(zomboidImages.squadFight, 'Project Zomboid Cheats Terms', 'Project Zomboid Cheats terms of use'),
	],
};

for (const pageId of sitemapPageIds) {
	if (!sitemapImagesByPageId[pageId]?.length) {
		throw new Error(`[sitemap] No images configured for sitemap pageId: ${pageId}`);
	}
}

/** Canonical English sitemap entries — core project-zomboid-cheats URLs only. */
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
export const imageSitemapEntries: SitemapImage[] = zomboidImages.sitemap.map((entry) =>
	img(entry.src, entry.title, entry.caption),
);

export function absolutePageUrl(path: string): string {
	return abs(path);
}

export function absoluteAssetUrl(path: string): string {
	return abs(path);
}
