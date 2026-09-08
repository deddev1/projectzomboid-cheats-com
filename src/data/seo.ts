/**
 * Site-wide SEO keyword cluster — optimized for warframecheats.net
 */
export const primaryKeyword = 'Warframe Cheats';

export const siteBrand = 'Warframe Cheats';
export const siteDomain = 'warframecheats.net';
export const siteOrigin = `https://${siteDomain}`;

/** Core keyword targets (title, meta, schema). */
export const metaKeywords = [
	'Warframe Cheats',
	'warframe cheats',
	'warframe hacks',
	'warframe hack',
	'warframe esp',
	'warframe aimbot',
	'warframe wallhack',
	'warframe radar hack',
	'undetected warframe cheats',
	'warframe cheats 2026',
	'warframe cheats pc',
	'warframe soft aim',
	'warframe mod menu',
	'buy warframe cheats',
] as const;

export const metaKeywordsContent = metaKeywords.join(', ');

export const defaultTitle = 'Warframe Cheats 2026 | ESP, Aimbot & Hacks for PC';
export const defaultDescription =
	'Warframe cheats for Windows PC — ESP, aimbot, wallhack & radar. $35/mo or $150 lifetime. Setup guides, patch updates & buyer reviews.';

/** Append brand + domain to page titles when under the SEO limit. */
export function buildPageTitle(topic: string): string {
	const withBrand = `${topic} | Warframe Cheats`;
	if (withBrand.length <= 60) return withBrand;
	const short = `${topic} | warframecheats.net`;
	return short.length <= 60 ? short : topic.slice(0, 60);
}

/** Clamp meta description with primary keyword near the front. */
export function buildPageDescription(body: string): string {
	const lead = body.trim();
	if (lead.toLowerCase().includes('warframe')) return lead.slice(0, 160);
	return `Warframe cheats — ${lead}`.slice(0, 160);
}
