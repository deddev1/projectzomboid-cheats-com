#!/usr/bin/env node
/** Remove solid black background from wingman character → transparent WebP. */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'public', 'images', 'zomboid-wingman.webp');

const SOURCE_CANDIDATES = [
	join(ROOT, 'public', 'images', 'zomboid-wingman.webp'),
	'C:/Users/3Tee System/.cursor/projects/c-Users-3Tee-System-Downloads-projectzomboid-cheats-com-main/assets/c__Users_3Tee_System_AppData_Roaming_Cursor_User_workspaceStorage_0c943ad25302280223a47fd10ea1d090_images_ChatGPT_Image_Sep_7__2026__04_52_44_PM-b1ebfec8-42c2-47f6-94ac-e7687a281225.jpg',
];

const input = SOURCE_CANDIDATES.find((p) => existsSync(p));
if (!input) {
	console.error('Wingman source image not found.');
	process.exit(1);
}

const THRESHOLD = 48;
const SOFT = 72;

function keyBlackBackground(data) {
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

const buffer = readFileSync(input);
const base = sharp(buffer).resize(420, null, { fit: 'inside' });
const { data, info } = await base.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

keyBlackBackground(data);

await sharp(data, {
	raw: { width: info.width, height: info.height, channels: 4 },
})
	.trim({ threshold: 12 })
	.webp({ quality: 92, alphaQuality: 100, effort: 6 })
	.toFile(OUT);

const meta = await sharp(OUT).metadata();
console.log(`Wrote ${OUT} (${meta.width}x${meta.height}, alpha=${meta.hasAlpha})`);
