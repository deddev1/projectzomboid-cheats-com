/** Page-specific FAQ clusters for FAQ rich results on pillar landing pages. */
import { productInfo, siteConfig, customerReviewStats } from './site';
import type { PageId } from './i18n/routing';
import { getCanonicalPageId, sitemapPageIds } from './i18n/routing';

export const pageFaqClusters: Partial<
	Record<PageId, ReadonlyArray<{ question: string; answer: string }>>
> = {
	hacks: [
		{
			question: 'What are Project Zomboid cheats?',
			answer:
				'Project Zomboid cheats are Windows PC tools for Project Zomboid with ESP, wallhack, and aimbot controls. Project Zomboid Cheats licenses include anti-cheat maintenance updates and setup support.',
		},
		{
			question: 'Are Project Zomboid cheats permanently undetected?',
			answer:
				'No package can promise that. We rebuild after anti-cheat and game patches and post status on Updates. Check there before you load in.',
		},
		{
			question: 'What is included in the Project Zomboid Cheats package?',
			answer:
				'Zombie ESP, medical supply markers, radar cues, and configurable aimbot in one license. See Features, ESP, and Aimbot for control detail.',
		},
	],
	'project-zomboid-esp': [
		{
			question: 'What is a Project Zomboid wallhack?',
			answer:
				'A Project Zomboid wallhack is an ESP overlay that shows zombies, survivors, and loot through cover. Project Zomboid Cheats wallhack includes distance readouts, team colours, and toggleable categories for survival and Knox County looting.',
		},
		{
			question: 'Does Project Zomboid Cheats include a radar hack?',
			answer:
				'Yes. Project Zomboid Cheats includes 2D radar-style overlays that highlight nearby threats outside your direct view — useful for reading flanks during team pushes.',
		},
		{
			question: 'Does this fit survival and Knox County loot runs?',
			answer:
				'Yes. ESP and radar help you read nearby enemies and loot; aimbot covers the firefight. Tuned for solo and team push play.',
		},
	],
	'project-zomboid-aimbot': [
		{
			question: 'What is Project Zomboid aimbot?',
			answer:
				'Project Zomboid aimbot is configurable aim assist with smoothness, FOV, and head priority controls. It ships bundled with ESP and radar in the Project Zomboid Cheats license for Windows PC.',
		},
		{
			question: 'Can I use Project Zomboid aimbot with a controller?',
			answer:
				'Yes. Project Zomboid Cheats supports controller play on Windows PC. Tune FOV and smoothness per weapon profile after setup.',
		},
		{
			question: 'Are Project Zomboid cheats permanently undetected?',
			answer:
				'No package can promise that. We rebuild after anti-cheat and game patches and post status on Updates. Check there before you load in.',
		},
	],
	pricing: [
		{
			question: 'How are Project Zomboid Cheats licenses delivered?',
			answer:
				'Digitally after payment confirmation. Timing can vary by payment method — keep your order confirmation if you contact support.',
		},
		{
			question: 'What does the $35/month plan include?',
			answer:
				'The monthly license includes ESP, wallhack overlays, radar, and aimbot controls with anti-cheat maintenance updates for Project Zomboid on Windows PC.',
		},
		{
			question: 'Is the $150 lifetime license worth it?',
			answer:
				'Lifetime pays off if you play Project Zomboid across multiple seasons. It includes the same feature stack as monthly with long-term maintenance after patches.',
		},
	],
	features: [
		{
			question: 'What is included in Project Zomboid Cheats?',
			answer:
				'Zombie ESP, medical supply markers, radar cues, and configurable aimbot in one license. See Features, ESP, and Aimbot for control detail.',
		},
		{
			question: 'Does Project Zomboid Cheats work on Windows PC?',
			answer:
				'Yes — Project Zomboid Cheats is built for Project Zomboid on Windows 10 and 11 with in-client toggles for ESP, radar, and aimbot.',
		},
		{
			question: 'How does anti-cheat affect Project Zomboid Cheats?',
			answer:
				'Anti-cheat monitors Project Zomboid on Windows PC. Project Zomboid Cheats publishes maintenance notes after patches that may require a rebuild. Read the maintenance guide page for how updates are handled.',
		},
	],
	updates: [
		{
			question: 'When should I check Project Zomboid Cheats updates?',
			answer:
				'Check the Updates page before launching after any Project Zomboid patch or anti-cheat maintenance from The Indie Stone. Patch-day queues are when outdated ESP, aimbot, or radar builds matter most.',
		},
		{
			question: 'What happens after a Project Zomboid patch?',
			answer:
				'We review ESP wallhack, radar, and aimbot modules against the new build, publish status on this page, and ship rebuilt packages to active monthly and lifetime licenses.',
		},
		{
			question: 'Do monthly and lifetime licenses get rebuilds?',
			answer:
				'Yes. Active monthly ($35) and lifetime ($150) licenses include maintenance rebuilds when anti-cheat or game updates require them. See Pricing for plan details.',
		},
	],
};

const priceValidUntil = '2027-12-31';

/** Plain text for FAQ rich results — schema.org Answer.text must not contain HTML. */
function stripHtml(html: string): string {
	return html
		.replace(/<[^>]+>/g, '')
		.replace(/&nbsp;/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

export function buildAggregateOffer(canonicalURL: string) {
	return {
		'@type': 'AggregateOffer',
		lowPrice: Math.min(...productInfo.plans.map((p) => p.price)).toFixed(2),
		highPrice: Math.max(...productInfo.plans.map((p) => p.price)).toFixed(2),
		priceCurrency: productInfo.currency,
		offerCount: productInfo.plans.length,
		url: canonicalURL,
		offers: productInfo.plans.map((plan) => ({
			'@type': 'Offer',
			name: `${productInfo.name} ${plan.label}`,
			price: plan.price.toFixed(2),
			priceCurrency: productInfo.currency,
			priceValidUntil,
			availability: 'https://schema.org/InStock',
			url: siteConfig.checkoutUrl,
			seller: { '@id': `${siteConfig.url}/#organization` },
		})),
	};
}

export function buildSoftwareApplicationSchema(canonicalURL: string, heroImage: string) {
	return {
		'@type': 'SoftwareApplication',
		'@id': `${canonicalURL}#software`,
		name: productInfo.name,
		applicationCategory: 'GameApplication',
		operatingSystem: 'Windows',
		description: productInfo.summary,
		url: canonicalURL,
		image: heroImage,
		brand: { '@type': 'Brand', name: productInfo.brand },
		offers: buildAggregateOffer(canonicalURL),
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: customerReviewStats.averageRating.toFixed(1),
			reviewCount: customerReviewStats.totalCount,
			bestRating: '5',
			worstRating: '1',
		},
	};
}

/** Site-wide Product node — referenced by review schema via @id. */
export function buildSiteProductSchema(heroImage: string) {
	return {
		'@type': 'Product',
		'@id': `${siteConfig.url}/#product`,
		name: productInfo.name,
		description: productInfo.summary,
		image: heroImage,
		brand: { '@type': 'Brand', name: productInfo.brand },
		url: `${siteConfig.url}/`,
		offers: buildAggregateOffer(`${siteConfig.url}/`),
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: customerReviewStats.averageRating.toFixed(1),
			reviewCount: customerReviewStats.totalCount,
			bestRating: '5',
			worstRating: '1',
		},
	};
}

export function buildFaqSchemaNode(
	canonicalURL: string,
	faqs: ReadonlyArray<{ question: string; answer: string }>,
) {
	return {
		'@type': 'FAQPage',
		'@id': `${canonicalURL}#faq`,
		mainEntity: faqs.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: { '@type': 'Answer', text: stripHtml(item.answer) },
		})),
	};
}

const schemaRichPages = new Set<PageId>([
	...sitemapPageIds.filter((id) => id !== 'home' && id !== 'privacy' && id !== 'refund' && id !== 'terms'),
]);

export function buildPageExtraGraph(
	pageId: PageId,
	canonicalURL: string,
	heroImage: string,
	allFaqs: ReadonlyArray<{ question: string; answer: string }>,
): Record<string, unknown>[] {
	const canonicalId = getCanonicalPageId(pageId);
	if (!schemaRichPages.has(canonicalId)) return [];

	const nodes: Record<string, unknown>[] = [];

	if (canonicalId !== 'faq') {
		nodes.push(buildSoftwareApplicationSchema(canonicalURL, heroImage));
	}

	const faqs = canonicalId === 'faq' ? allFaqs : (pageFaqClusters[canonicalId] ?? []);
	if (faqs.length > 0) {
		nodes.push(buildFaqSchemaNode(canonicalURL, faqs));
	}

	return nodes;
}
