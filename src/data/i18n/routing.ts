import { siteConfig } from '../site';
import {
	defaultLocale,
	localeCodes,
	type LocaleCode,
	locales,
} from './locales';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'project-zomboid-esp'
	| 'project-zomboid-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac-bypass'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'project-zomboid-esp': '/project-zomboid-esp/',
	'project-zomboid-aimbot': '/project-zomboid-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/project-zomboid-cheats/',
	wallhack: '/project-zomboid-wallhack/',
	radar: '/project-zomboid-radar/',
	'eac-bypass': '/project-zomboid-cheats/',
	'cheats-2026': '/project-zomboid-cheats/',
	hacks: '/project-zomboid-cheats/',
	'cheat-download': '/pricing/',
	'mod-menu': '/features/',
	'soft-aim': '/project-zomboid-aimbot/',
	'best-cheats': '/project-zomboid-cheats/',
	'aimbot-hack': '/project-zomboid-aimbot/',
	'esp-hack': '/project-zomboid-esp/',
	'unlock-all': '/features/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Core English pages for sitemap.xml — focused project-zomboid-cheats URLs only.
 * Thin keyword-duplicate landings redirect to these canonical pages.
 */
export const sitemapPageIds: PageId[] = [
	'home',
	'hacks',
	'project-zomboid-esp',
	'project-zomboid-aimbot',
	'wallhack',
	'radar',
	'features',
	'pricing',
	'setup',
	'updates',
	'faq',
	'support',
	'privacy',
	'refund',
	'terms',
];

/** Thin keyword landings that canonicalize to a core page (see sitemapPageIds). */
export const canonicalPageAlias: Partial<Record<PageId, PageId>> = {
	undetected: 'hacks',
	'eac-bypass': 'hacks',
	'cheats-2026': 'hacks',
	'best-cheats': 'hacks',
	'cheat-download': 'pricing',
	'mod-menu': 'features',
	'unlock-all': 'features',
	'soft-aim': 'project-zomboid-aimbot',
	'aimbot-hack': 'project-zomboid-aimbot',
	'esp-hack': 'project-zomboid-esp',
};

export function getCanonicalPageId(pageId: PageId): PageId {
	return canonicalPageAlias[pageId] ?? pageId;
}

/** English path → canonical sitemap pageId (one owner per URL). */
const englishPathOwners: Record<string, PageId> = Object.fromEntries(
	sitemapPageIds.map((id) => [englishPaths[id], id]),
) as Record<string, PageId>;

/** Non-home pages included in per-locale sitemaps. */
export const localeSitemapPageIds: PageId[] = sitemapPageIds.filter((id) => id !== 'home');

/**
 * Short URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales share compact slugs per pageId.
 */
const shortLocalizedSlug: Record<PageId, string> = {
	home: '',
	'project-zomboid-esp': 'esp',
	'project-zomboid-aimbot': 'aimbot',
	features: 'features',
	pricing: 'pricing',
	setup: 'setup',
	updates: 'updates',
	faq: 'faq',
	support: 'support',
	undetected: 'undetected',
	wallhack: 'wallhack',
	radar: 'radar',
	'eac-bypass': 'eac',
	'cheats-2026': '2026',
	hacks: 'cheats',
	'cheat-download': 'download',
	'mod-menu': 'menu',
	'soft-aim': 'soft-aim',
	'best-cheats': 'best',
	'aimbot-hack': 'aimbot-hack',
	'esp-hack': 'esp-hack',
	'unlock-all': 'unlock',
	privacy: 'privacy',
	refund: 'refund',
	terms: 'terms',
};

function buildLocalizedSlugRecord(slug: string): Record<LocaleCode, string> {
	return Object.fromEntries(localeCodes.map((code) => [code, slug])) as Record<LocaleCode, string>;
}

export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = Object.fromEntries(
	(Object.keys(englishPaths) as PageId[]).map((pageId) => [
		pageId,
		buildLocalizedSlugRecord(shortLocalizedSlug[pageId]),
	]),
) as Record<PageId, Record<LocaleCode, string>>;

export const pageIds = Object.keys(englishPaths) as PageId[];

/** Short breadcrumb label — avoids repeating the full SEO h1 in the banner trail. */
export function getBreadcrumbLabelForPage(
	pageId: PageId | undefined,
	labels: Record<string, string>,
	fallbackHeading: string,
): string {
	if (!pageId) return fallbackHeading;

	const byPage: Partial<Record<PageId, string | undefined>> = {
		home: labels.home,
		features: labels.features,
		pricing: labels.pricing,
		setup: labels.setup,
		updates: labels.updates,
		faq: labels.faq,
		hacks: labels.cheats ?? 'Cheats',
		'project-zomboid-esp': labels.esp,
		'project-zomboid-aimbot': labels.aimbot,
		support: 'Support',
		undetected: 'Undetected',
		wallhack: 'Wallhack',
		radar: 'Radar',
		'eac-bypass': 'EAC Bypass',
		'cheats-2026': 'Cheats 2026',
		'cheat-download': 'Download',
		'mod-menu': 'Mod Menu',
		'soft-aim': 'Soft Aim',
		'best-cheats': 'Best Cheats',
		'aimbot-hack': 'Aimbot Hack',
		'esp-hack': 'ESP Hack',
		'unlock-all': 'Unlock All',
		privacy: 'Privacy',
		refund: 'Refund',
		terms: 'Terms',
	};

	const label = byPage[pageId];
	if (label) return label;

	const dash = fallbackHeading.indexOf(' — ');
	if (dash > 0) {
		const after = fallbackHeading.slice(dash + 3).trim();
		if (after.length > 0 && after.length <= 36) return after;
	}

	const brandPrefix = 'Project Zomboid Cheats ';
	if (fallbackHeading.startsWith(brandPrefix)) {
		const rest = fallbackHeading.slice(brandPrefix.length);
		const restDash = rest.indexOf(' — ');
		if (restDash > 0) return rest.slice(0, restDash).trim();
		if (rest.length <= 32) return rest;
	}

	if (dash > 0) return fallbackHeading.slice(0, dash).trim();

	return fallbackHeading;
}

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			return getLocalizedPath(pageId, locale);
		}
	}
	return href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return new URL(getLocalizedPath(pageId, locale), siteConfig.url).href;
}

/**
 * Canonical path for SEO — each locale page canonicalizes to its own localized URL.
 */
export function getCanonicalPath(pageId: PageId, locale: LocaleCode = defaultLocale): string {
	return getLocalizedPath(pageId, locale);
}

export function absoluteCanonicalUrl(pageId: PageId, locale: LocaleCode = defaultLocale): string {
	return absoluteLocalizedUrl(pageId, locale);
}

/** Full hreflang cluster — all locales plus x-default (English). */
export function getHreflangAlternates(pageId: PageId) {
	const canonicalId = getCanonicalPageId(pageId);
	return [
		...locales.map((locale) => ({
			hreflang: locale.hreflang,
			href: absoluteLocalizedUrl(canonicalId, locale.code),
		})),
		{ hreflang: 'x-default' as const, href: absoluteLocalizedUrl(canonicalId, defaultLocale) },
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	return englishPathOwners[normalized];
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const blogHref = locale === defaultLocale ? '/blog/' : `/${locale}/blog/`;
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.cheats ?? 'Cheats', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
		{ label: labels.blog ?? 'Blog', href: blogHref },
		{ label: labels.reviews ?? 'Reviews', href: '/reviews/' },
	];
	return items;
}
