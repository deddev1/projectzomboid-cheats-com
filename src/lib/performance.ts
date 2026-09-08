import { zomboidImages } from '../data/zomboid';
import { isExternalImage } from './responsive-images';

export const SUPABASE_CDN_ORIGIN = 'https://boqgsoiwnpbisvrxulbe.supabase.co';

/**
 * Inner pages default to heavy Supabase JPG/PNG heroes — swap to the local
 * responsive WebP stack so banner/LCP stays on-origin and cacheable.
 */
export function bannerHeroSrc(pageHero: string | undefined): string {
	if (!pageHero || isExternalImage(pageHero)) return zomboidImages.hero;
	return pageHero;
}
