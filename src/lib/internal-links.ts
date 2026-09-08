import type { PageId } from '../data/i18n';
import { getLocalizedPath } from '../data/i18n/routing';
import type { LocaleCode } from '../data/i18n/locales';

export type InternalLink = {
	label: string;
	href: string;
};

type NavLabels = {
	esp: string;
	aimbot: string;
	features: string;
	setup: string;
	pricing: string;
	updates: string;
	faq: string;
};

/** Core product funnel links reused across pricing, reviews, and blog CTAs. */
export function getProductRelatedLinks(locale: LocaleCode, labels: NavLabels): InternalLink[] {
	return [
		{ label: labels.esp, href: getLocalizedPath('warframe-esp', locale) },
		{ label: labels.aimbot, href: getLocalizedPath('warframe-aimbot', locale) },
		{ label: labels.features, href: getLocalizedPath('features', locale) },
		{ label: labels.setup, href: getLocalizedPath('setup', locale) },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale) },
	];
}

/** Homepage explore hub — deep links not duplicated in the primary navbar. */
export function getHomeExploreLinks(locale: LocaleCode): InternalLink[] {
	return [
		{ label: 'Warframe Cheats guide', href: getLocalizedPath('hacks', locale) },
		{ label: 'Warframe ESP', href: getLocalizedPath('warframe-esp', locale) },
		{ label: 'Warframe Aimbot', href: getLocalizedPath('warframe-aimbot', locale) },
		{ label: 'Warframe wallhack', href: getLocalizedPath('wallhack', locale) },
		{ label: 'Warframe radar', href: getLocalizedPath('radar', locale) },
		{ label: 'Setup guide', href: getLocalizedPath('setup', locale) },
		{ label: 'Guides hub', href: '/guides/' },
		{ label: 'Warframe blog', href: '/blog/' },
	];
}

/** Blog and review footer product shortcuts. */
export function getBlogProductLinks(locale: LocaleCode, labels: NavLabels): InternalLink[] {
	return [
		{ label: 'Warframe Cheats', href: getLocalizedPath('hacks', locale) },
		{ label: labels.features, href: getLocalizedPath('features', locale) },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale) },
		{ label: 'Reviews', href: '/reviews/' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale) },
		{ label: labels.updates, href: getLocalizedPath('updates', locale) },
	];
}

/** Map review tags to the most relevant product or support page. */
export const reviewTagLinks: Record<string, string> = {
	'Soft aim': '/warframe-aimbot/',
	Extraction: '/warframe-esp/',
	'Open World': '/warframe-esp/',
	'Steel Path': '/warframe-aimbot/',
	'Cloud DMA': '/warframe-cheats/',
	Controller: '/warframe-aimbot/',
	Setup: '/setup/',
	Ranked: '/warframe-aimbot/',
	Squads: '/warframe-radar/',
	Updates: '/updates/',
};

export function getReviewTagHref(tag: string | undefined): string | undefined {
	if (!tag) return undefined;
	return reviewTagLinks[tag];
}

/** Contextual related links for inner pages — extends the core funnel where relevant. */
export function getPageRelatedLinks(
	pageId: PageId,
	locale: LocaleCode,
	labels: NavLabels,
): InternalLink[] {
	const core = getProductRelatedLinks(locale, labels);
	const extras: Partial<Record<PageId, InternalLink[]>> = {
		hacks: [
			{ label: 'Wallhack', href: getLocalizedPath('wallhack', locale) },
			{ label: 'Radar', href: getLocalizedPath('radar', locale) },
			{ label: 'Reviews', href: '/reviews/' },
		],
		'warframe-esp': [
			{ label: 'Wallhack', href: getLocalizedPath('wallhack', locale) },
			{ label: 'Radar', href: getLocalizedPath('radar', locale) },
			{ label: 'Reviews', href: '/reviews/' },
		],
		'warframe-aimbot': [
			{ label: 'Soft aim', href: getLocalizedPath('soft-aim', locale) },
			{ label: 'ESP', href: getLocalizedPath('warframe-esp', locale) },
			{ label: 'Reviews', href: '/reviews/' },
		],
		wallhack: [
			{ label: 'ESP', href: getLocalizedPath('warframe-esp', locale) },
			{ label: 'Radar', href: getLocalizedPath('radar', locale) },
		],
		radar: [
			{ label: 'ESP', href: getLocalizedPath('warframe-esp', locale) },
			{ label: 'Wallhack', href: getLocalizedPath('wallhack', locale) },
		],
		features: [{ label: 'Reviews', href: '/reviews/' }, { label: 'Blog', href: '/blog/' }],
		pricing: [
			{ label: labels.faq, href: getLocalizedPath('faq', locale) },
			{ label: 'Reviews', href: '/reviews/' },
		],
		setup: [
			{ label: labels.updates, href: getLocalizedPath('updates', locale) },
			{ label: 'Support', href: getLocalizedPath('support', locale) },
		],
		updates: [
			{ label: 'Undetected guide', href: getLocalizedPath('undetected', locale) },
			{ label: 'Support', href: getLocalizedPath('support', locale) },
		],
		faq: [
			{ label: 'Warframe guides', href: '/blog/' },
			{ label: 'Support', href: getLocalizedPath('support', locale) },
			{ label: 'Reviews', href: '/reviews/' },
		],
		support: [
			{ label: labels.faq, href: getLocalizedPath('faq', locale) },
			{ label: 'Refund policy', href: getLocalizedPath('refund', locale) },
		],
	};

	const merged = [...core, ...(extras[pageId] ?? [])];
	const seen = new Set<string>();
	return merged.filter((link) => {
		if (seen.has(link.href)) return false;
		seen.add(link.href);
		return true;
	});
}
