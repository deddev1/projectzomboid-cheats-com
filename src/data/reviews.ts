import { customerReviews, siteConfig } from './site';
import { zomboidImages } from './zomboid';

export const reviewsBasePath = '/reviews/';

export function getReviewPath(slug: string): string {
	return `${reviewsBasePath}${slug}/`;
}

export function absoluteReviewUrl(slug?: string): string {
	return new URL(slug ? getReviewPath(slug) : reviewsBasePath, siteConfig.url).href;
}

/** Unique Project Zomboid screenshots for each review sitemap entry. */
const reviewImagePaths = [
	zomboidImages.espWallhack,
	zomboidImages.aimbotCombat,
	zomboidImages.radarHack,
	zomboidImages.cover,
	zomboidImages.loadoutBuilder,
	zomboidImages.playerEsp,
	zomboidImages.squadFight,
	zomboidImages.headerArt,
	zomboidImages.cheatsPackage,
	zomboidImages.battleRoyaleCombat,
] as const;

const reviewIndexOgImage = {
	url: new URL(siteConfig.defaultOgImage, siteConfig.url).href,
	title: 'Project Zomboid Cheats customer reviews',
	caption: 'Project Zomboid Cheats buyer reviews for ESP, aimbot, radar, and cloud DMA',
};

function reviewImageForIndex(index: number) {
	const path = reviewImagePaths[index % reviewImagePaths.length];
	return {
		url: new URL(path, siteConfig.url).href,
		title: 'Project Zomboid Cheats review screenshot',
		caption: 'Project Zomboid Cheats ESP, aimbot, and radar preview from buyer reviews',
	};
}

/** English review routes for sitemap.xml — /reviews/ index + one URL per review. */
export function getReviewSitemapEntries() {
	const indexLastmod = customerReviews.reduce(
		(max, review) => (review.date > max ? review.date : max),
		customerReviews[0]?.date ?? new Date().toISOString().slice(0, 10),
	);

	const entries: {
		path: string;
		lastmod: string;
		priority: number;
		changefreq: 'daily' | 'weekly' | 'monthly';
		images: { url: string; title: string; caption: string }[];
	}[] = [
		{
			path: reviewsBasePath,
			lastmod: indexLastmod,
			priority: 0.85,
			changefreq: 'weekly',
			images: [reviewIndexOgImage, reviewImageForIndex(0)],
		},
	];

	customerReviews.forEach((review, index) => {
		const image = reviewImageForIndex(index);
		entries.push({
			path: getReviewPath(review.slug),
			lastmod: review.date,
			priority: 0.75,
			changefreq: 'monthly',
			images: [
				{
					url: image.url,
					title: `Project Zomboid Cheats review by @${review.handle}`,
					caption: review.seoDescription,
				},
			],
		});
	});

	return entries;
}
