import type { PageSection } from '../data/i18n/content.generated';
import type { PageId } from '../data/i18n/routing';

/** Pages that should not show the generic product screenshot gallery. */
export const pagesWithoutGallery = new Set<PageId>([
	'faq',
	'support',
	'setup',
	'updates',
	'privacy',
	'refund',
	'terms',
	'pricing',
	'features',
]);

export function shouldShowPageGallery(pageId: PageId): boolean {
	return !pagesWithoutGallery.has(pageId);
}

/** Which i18n sections to render after special page components. */
export function getRenderableSections(pageId: PageId, sections: PageSection[]): PageSection[] {
	if (pageId === 'faq') return [];
	if (pageId === 'features') return sections.slice(-1);
	return sections;
}
