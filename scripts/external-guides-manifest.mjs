/**
 * External game guides manifest.
 * Project Zomboid Cheats site — no third-party game guides.
 */

/** @typedef {{ url: string, gameId: string, gameName: string, slug: string, anchorText: string }} GuideManifestEntry */

const ANCHOR_TEXTS = [
	'this resource',
	'more game information',
	'additional guides',
	'related resources',
];

/** @type {string[]} */
export const PROVIDED_URLS = [];

export function buildManifest() {
	return PROVIDED_URLS.map((url, index) => {
		const slug = `guide-${index}`;
		return {
			url,
			gameId: 'unknown',
			gameName: 'Unknown',
			slug,
			anchorText: ANCHOR_TEXTS[index % ANCHOR_TEXTS.length],
		};
	});
}
