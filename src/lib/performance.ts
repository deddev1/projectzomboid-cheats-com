import { isExternalImage, isSiteHeroImage } from './responsive-images';

export const SUPABASE_CDN_ORIGIN = 'https://boqgsoiwnpbisvrxulbe.supabase.co';

/**
 * Resolve inner-page banner art — never the homepage LCP hero.
 * Returns undefined when only the site hero is available (text-only banner).
 */
export function bannerHeroSrc(pageHero: string | undefined): string | undefined {
	if (!pageHero || isSiteHeroImage(pageHero)) return undefined;
	return pageHero;
}

export function isBannerHeroExternal(pageHero: string | undefined): boolean {
	const src = bannerHeroSrc(pageHero);
	return Boolean(src && isExternalImage(src));
}
