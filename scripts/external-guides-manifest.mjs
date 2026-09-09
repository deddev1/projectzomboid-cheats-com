/**
 * External game guides manifest — one dedicated page per provided URL.
 */

import {
	inferGameFromUrl,
	normalizeProvidedUrl,
	RAW_PROVIDED_URLS,
	slugFromUrl,
} from './external-guides-url-data.mjs';

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
	const seen = new Set();
	/** @type {GuideManifestEntry[]} */
	const entries = [];

	for (const raw of RAW_PROVIDED_URLS) {
		const url = normalizeProvidedUrl(raw);
		if (seen.has(url)) continue;
		seen.add(url);

		const { gameId, gameName } = inferGameFromUrl(url);
		const index = entries.length;

		entries.push({
			url,
			gameId,
			gameName,
			slug: slugFromUrl(url),
			anchorText: ANCHOR_TEXTS[index % ANCHOR_TEXTS.length],
		});
	}

	return entries;
}

// Eager validation at import time during generation.
buildManifest();
