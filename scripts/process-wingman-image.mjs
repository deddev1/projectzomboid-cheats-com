#!/usr/bin/env node
/** Remove solid background from wingman character → transparent WebP. */
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'public', 'images', 'zomboid-wingman.webp');
const ARCHIVE = join(ROOT, 'public', 'images', 'zomboid-wingman-source.jpg');

const CURSOR_ASSETS = join(
	process.env.USERPROFILE ?? '',
	'.cursor',
	'projects',
	'c-Users-3Tee-System-Downloads-projectzomboid-cheats-com-main',
	'assets',
);

function findCursorAsset(pattern) {
	if (!existsSync(CURSOR_ASSETS)) return null;
	const match = readdirSync(CURSOR_ASSETS).find((name) => pattern.test(name));
	return match ? join(CURSOR_ASSETS, match) : null;
}

const SOURCE_CANDIDATES = [
	ARCHIVE,
	findCursorAsset(/images__5_/),
	findCursorAsset(/ChatGPT_Image_Sep_7/),
].filter(Boolean);

const input = SOURCE_CANDIDATES.find((p) => existsSync(p));
if (!input) {
	console.error('Wingman source image not found.');
	process.exit(1);
}

mkdirSync(dirname(ARCHIVE), { recursive: true });
if (input !== ARCHIVE) {
	copyFileSync(input, ARCHIVE);
	console.log(`Archived source → ${ARCHIVE}`);
}

/** Key near-white JPEG backgrounds (Spiffo art). */
function keyWhiteBackground(data) {
	const HARD = 248;
	const SOFT = 215;

	for (let i = 0; i < data.length; i += 4) {
		const r = data[i];
		const g = data[i + 1];
		const b = data[i + 2];
		const min = Math.min(r, g, b);
		const max = Math.max(r, g, b);
		const spread = max - min;

		// Keep saturated pixels even if bright (highlights on character).
		if (spread > 28 && min > SOFT) {
			continue;
		}

		if (min >= HARD) {
			data[i + 3] = 0;
			continue;
		}

		if (min >= SOFT) {
			const fade = (HARD - min) / (HARD - SOFT);
			data[i + 3] = Math.round(data[i + 3] * fade);
		}
	}
}

/** Key near-black backgrounds (legacy survivor art). */
function keyBlackBackground(data) {
	const THRESHOLD = 48;
	const SOFT = 72;

	for (let i = 0; i < data.length; i += 4) {
		const r = data[i];
		const g = data[i + 1];
		const b = data[i + 2];
		const max = Math.max(r, g, b);

		if (max <= THRESHOLD) {
			data[i + 3] = 0;
			continue;
		}

		if (max <= SOFT) {
			const fade = (max - THRESHOLD) / (SOFT - THRESHOLD);
			data[i + 3] = Math.round(data[i + 3] * fade);
		}
	}
}

async function averageCornerLuma(buffer) {
	const { data, info } = await sharp(buffer)
		.resize(120, null, { fit: 'inside' })
		.ensureAlpha()
		.raw()
		.toBuffer({ resolveWithObject: true });

	const { width, height } = info;
	const corners = [
		0,
		(width - 1) * 4,
		(height - 1) * width * 4,
		((height - 1) * width + (width - 1)) * 4,
	];
	const avg =
		corners.reduce((sum, idx) => sum + (data[idx] + data[idx + 1] + data[idx + 2]) / 3, 0) /
		corners.length;
	return avg;
}

const buffer = readFileSync(ARCHIVE);
const cornerLuma = await averageCornerLuma(buffer);
const useWhiteKey = cornerLuma > 160;

const base = sharp(buffer).resize(480, null, { fit: 'inside' });
const { data, info } = await base.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

if (useWhiteKey) {
	keyWhiteBackground(data);
} else {
	keyBlackBackground(data);
}

await sharp(data, {
	raw: { width: info.width, height: info.height, channels: 4 },
})
	.trim({ threshold: 16 })
	.webp({ quality: 92, alphaQuality: 100, effort: 6 })
	.toFile(OUT);

const meta = await sharp(OUT).metadata();
console.log(
	`Wrote ${OUT} (${meta.width}x${meta.height}, alpha=${meta.hasAlpha}, key=${useWhiteKey ? 'white' : 'black'})`,
);
