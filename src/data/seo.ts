/**
 * Site-wide SEO keyword cluster — optimized for projectzomboidcheats.com
 */
export const primaryKeyword = 'Project Zomboid Cheats';

export const siteBrand = 'Project Zomboid Cheats';
export const siteDomain = 'projectzomboidcheats.com';
export const siteOrigin = `https://${siteDomain}`;

/** Core keyword targets (title, meta, schema). */
export const metaKeywords = [
	'Project Zomboid Cheats',
	'project-zomboid cheats',
	'project-zomboid hacks',
	'project-zomboid hack',
	'project zomboid esp',
	'project zomboid aimbot',
	'project zomboid wallhack',
	'project-zomboid radar hack',
	'undetected project zomboid cheats',
	'project zomboid cheats 2026',
	'project-zomboid cheats pc',
	'project-zomboid soft aim',
	'project-zomboid mod menu',
	'buy project-zomboid cheats',
] as const;

export const metaKeywordsContent = metaKeywords.join(', ');

export const defaultTitle = 'Project Zomboid Cheats 2026 | ESP, Aimbot & Hacks for PC';
export const defaultDescription =
	'Project Zomboid cheats for Windows PC — ESP, aimbot, wallhack & radar. $35/mo or $150 lifetime. Setup guides, patch updates & buyer reviews.';

/** Append brand + domain to page titles when under the SEO limit. */
export function buildPageTitle(topic: string): string {
	const withBrand = `${topic} | Project Zomboid Cheats`;
	if (withBrand.length <= 60) return withBrand;
	const short = `${topic} | projectzomboidcheats.com`;
	return short.length <= 60 ? short : topic.slice(0, 60);
}

/** Clamp meta description with primary keyword near the front. */
export function buildPageDescription(body: string): string {
	const lead = body.trim();
	if (lead.toLowerCase().includes('project-zomboid')) return lead.slice(0, 160);
	return `Project Zomboid cheats — ${lead}`.slice(0, 160);
}
