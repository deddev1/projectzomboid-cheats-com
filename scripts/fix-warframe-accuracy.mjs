#!/usr/bin/env node
/**
 * Normalize copy for Project Zomboid — removes Fortnite/Rust/Epic/EAC leftovers.
 * Run: node scripts/fix-project-zomboid-accuracy.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/** @type {[string | RegExp, string][]} */
const RULES = [
	[/Epic services/gi, 'Project Zomboid servers'],
	[/Epic platform/gi, 'Project Zomboid launcher'],
	[/Epic's rules/gi, "The Indie Stone's Terms of Service"],
	[/Epic terms/gi, 'The Indie Stone terms'],
	[/If Epic services/gi, 'If Project Zomboid servers'],
	[/Embark' anti-cheat/gi, 'Project Zomboid anti-cheat'],
	[/Project Zomboid or EAC patch/gi, 'Project Zomboid or anti-cheat patch'],
	[/and EAC questions/gi, 'and anti-cheat questions'],
	[/EAC patch/gi, 'anti-cheat patch'],
	[/EAC history/gi, 'anti-cheat history'],
	[/EAC comparison/gi, 'anti-cheat comparison'],
	[/Battle royale fights happen in three dimensions — rooftops, windows, and flanks\./gi,
		'Multi-floor map zones stack vertical fights — catwalks, doorways, and side horde spawns.'],
	[/extraction loop/gi, 'mission loop'],
	[/extraction phase rounds/gi, 'horde waves and horde modifiers'],
	[/extraction phase/gi, 'horde waves'],
	[/extraction route/gi, 'horde event route'],
	[/endgame circles/gi, 'horde waves'],
	[/ranked combat encounter/gi, 'survival run fight'],
	[/ranked objective fight/gi, 'loot runs objective fight'],
	[/ranked-critical/gi, 'session-critical'],
	[/ranked lobbies/gi, 'multiplayer squads'],
	[/ranked block/gi, 'game session'],
	[/before ranked/gi, 'before loot runs'],
	[/Built for ranked pressure/gi, 'Built for survival pressure'],
	[/before a third party/gi, 'before a flank wave'],
	[/third parties/gi, 'flank waves'],
	[/third-party flanks/gi, 'flank waves'],
	[/enemy squads/gi, 'zombies and survivors'],
	[/enemy player/gi, 'zombie or survivor'],
	[/enemy players/gi, 'zombies and survivors'],
	[/closest player/gi, 'closest enemy'],
	[/vehicles, loot, chests/gi, 'lockers, loot containers, and pickups'],
	[/vehicles and chests/gi, 'containers and loot containers'],
	[/loot and chest/gi, 'pickups and lockers'],
	[/loot chests/gi, 'loot containers'],
	[/supply-drop/gi, 'pickup'],
	[/mid-match/gi, 'mid-session'],
	[/map rotations/gi, 'map zone rotations'],
	[/map rotation/gi, 'map zone rotation'],
	[/POIs/g, 'map zones'],
	[/POI/g, 'map zone area'],
	[/loot routes/gi, 'farm routes'],
	[/drop path/gi, 'farm route'],
	[/track players and containers/gi, 'track enemies and containers'],
	[/track players/gi, 'track enemies'],
	[/player threats/gi, 'enemy threats'],
	[/zombie or survivors/gi, 'zombies and survivors'],
	[/zombie or survivor/gi, 'zombie or survivor'],
	[/Project Zomboid' live seasons/gi, "Project Zomboid's live updates"],
	[/season updates from/gi, 'game updates from'],
	[/season calendars/gi, 'update calendars'],
	[/season notes from/gi, 'patch notes from'],
	[/season messaging/gi, 'official patch messaging'],
	[/season maps/gi, 'map zone updates'],
	[/for ranked/gi, 'for loot runs'],
	[/in ranked/gi, 'in loot runs'],
	[/ranked loadout/gi, 'mission loadout'],
	[/ranked climb/gi, 'loot runs progression'],
	[/ranked grinders/gi, 'loot runs players'],
	[/ranked/gi, 'loot runs'],
	[/FNCS/gi, 'horde event'],
	[/vbucks/gi, 'Platinum'],
	[/V-Bucks/gi, 'Platinum'],
	[/Bugha/gi, 'pro Tenno'],
	[/zero-build/gi, 'ability-only'],
	[/Battle Pass/gi, 'Prime Access'],
	[/Embark/gi, 'The Indie Stone's],
	[/Epic patch/gi, 'Project Zomboid patch'],
	[/every Epic patch/gi, 'every Project Zomboid patch'],
	[/Epic health/gi, 'server status'],
	[/Cheats are flanking tools/gi, 'Cheats are third-party tools'],
	[/for Embark bans/gi, 'for game bans'],
	[/notice vehicles before/gi, 'spot special infected before'],
	[/mark chests worth/gi, 'mark containers and crates worth'],
	[/players, loot, and vehicles/gi, 'enemies, pickups, and lockers'],
	[/loot, chests, and vehicles/gi, 'pickups, lockers, and caches'],
	[/see players, loot, vehicles/gi, 'see enemies, pickups, and lockers'],
	[/live matches/gi, 'live missions'],
	[/in BR —/gi, 'in co-op —'],
	[/\bBR loop\b/gi, 'mission loop'],
	[/\bBR players\b/gi, 'loot runs players'],
	[/\bBR stack\b/gi, 'full cheat stack'],
	[/\bin BR\b/gi, 'in missions'],
	[/in BR and/gi, 'in horde events and'],
	[/ghostware rust/gi, 'ghostware project-zomboid'],
	[/rust wallhack/gi, 'project zomboid wallhack'],
	[/loot esp/gi, 'resource esp'],
	[/wipe-to-raid/gi, 'mission-to-rewards'],
	[/OW2/gi, 'Project Zomboid'],
	[/payload corners/gi, 'objective corners'],
	[/payload escorts/gi, 'horde waves'],
	[/per-hero/gi, 'per-weapon'],
	[/hitscan and projectile/gi, 'primaries and secondaries'],
	[/AK, SMG, and bolt/gi, 'pistols, shotguns, and rifles'],
	[/AK, SMG ve bolt/gi, 'rifle, shotgun ve sniper'],
	[/Hammer AR/gi, 'Soma Prime'],
	[/hammer ar/gi, 'soma prime'],
	[/box fights/gi, 'close-quarters fights'],
	[/creative 1v1s/gi, 'Simulacrum testing'],
	[/Creative warmup/gi, 'Simulacrum warmup'],
	[/Creative Mode/gi, 'Simulacrum'],
	[/island codes/gi, 'training scenarios'],
	[/Reboot Van/gi, 'horde defense objective'],
	[/control point/gi, 'horde defense objective'],
	[/battle royale/gi, 'loot runs'],
	[/loot objectives/gi, 'multiplayer servers'],
	[/Player, vehicle, and ability/gi, 'Enemy, special infected, and ability'],
	[/vehicle threat cues/gi, 'special infected threat cues'],
	[/vehicle cues/gi, 'special infected cues'],
	[/vehicle pushes/gi, 'special infected pushes'],
	[/vehicle ESP/gi, 'special infected ESP'],
	[/vehicle and pickup/gi, 'special infected and pickup'],
	[/vehicle positions/gi, 'special infected positions'],
	[/building clears/gi, 'map zone clears'],
	[/pub lobbies/gi, 'public servers'],
	[/pubs\b/gi, 'public servers'],
	[/playlists/gi, 'gameplay modes'],
	[/assault rifles/gi, 'rifles'],
	[/long-range AR /gi, 'long-range rifle '],
	[/AR beams/gi, 'rifle shots'],
	[/AR fights/gi, 'rifle fights'],
	[/AR and SMG/gi, 'pistol and shotgun'],
	[/AR \//gi, 'rifle/'],
	[/ SMG /gi, ' shotgun '],
	[/SMGs/gi, 'shotguns'],
	[/SMG profile/gi, 'shotgun profile'],
	[/SMG profiles/gi, 'shotgun profiles'],
	[/SMG tracking/gi, 'shotgun tracking'],
	[/SMG pushes/gi, 'shotgun pushes'],
	[/SMG in/gi, 'shotgun in'],
	[/first AR/gi, 'first rifle'],
	[/Project Zomboid itself is published by/gi, 'Project Zomboid is developed and published by'],
	[/loot runs lobbies/gi, 'loot runs'],
	[/Knox County exploration and loot runs play/gi, 'Knox County and loot runs'],
	[/shows players, loot/gi, 'shows enemies, loot'],
	[/player ESP wallhack/gi, 'zombie ESP wallhack'],
	[/Player ESP/gi, 'Zombie ESP'],
	[/player ESP/gi, 'zombie ESP'],
	[/player outlines/gi, 'enemy outlines'],
	[/Player ESP boxes/gi, 'Zombie ESP boxes'],
	[/player boxes/gi, 'enemy boxes'],
	[/Player boxes/gi, 'Enemy boxes'],
	[/player ESP in/gi, 'zombie ESP in'],
	[/only need player ESP/gi, 'only need zombie ESP'],
	[/player ESP —/gi, 'zombie ESP —'],
	[/ability-only-meta-broken-aggressive-strategies/gi, 'project-zomboid-cheats-complete-guide-2026'],
];

const FILES = [
	'scripts/i18n-data/pages-en.mjs',
	'scripts/i18n-data/pages-i18n.mjs',
	'scripts/i18n-data/ui-strings-part1.mjs',
	'scripts/i18n-data/ui-strings-part2.mjs',
	'src/data/site.ts',
	'scripts/generate-blog-posts.mjs',
	'src/data/schema.ts',
	'src/components/HomeSeo.astro',
	'src/data/i18n/gallery-ui.ts',
	'src/data/project-zomboid.ts',
	'src/components/Gallery.astro',
	'src/data/page-sitemap.ts',
];

function applyRules(text) {
	let out = text;
	for (const [from, to] of RULES) {
		out = out.replace(from, to);
	}
	return out;
}

for (const rel of FILES) {
	const path = join(ROOT, rel);
	const next = applyRules(readFileSync(path, 'utf8'));
	writeFileSync(path, next);
	console.log('✓', rel);
}

// English UI image alts — canonical Project Zomboid terminology
const uiPath = join(ROOT, 'scripts/i18n-data/ui-strings-part1.mjs');
let ui = readFileSync(uiPath, 'utf8');
ui = ui.replace(
	/aimbotCombat: '[^']+'/,
	"aimbotCombat: 'Project Zomboid aimbot targeting a special infected during a survival run'",
);
ui = ui.replace(
	/squadFight: '[^']+'/,
	"squadFight: 'Project Zomboid squad co-op fight with ESP and aimbot active in a horde event'",
);
ui = ui.replace(
	/battleRoyale: '[^']+'/,
	"battleRoyale: 'Project Zomboid loot runs fight with undetected ESP overlays'",
);
ui = ui.replace(
	/battleRoyaleIsland: '[^']+'/,
	"battleRoyaleIsland: 'Project Zomboid cheats menu with per-weapon aimbot profiles'",
);
ui = ui.replace(
	/espWallhack: '[^']+'/,
	"espWallhack: 'Project Zomboid ESP overlay highlighting zombies and survivors through walls'",
);
ui = ui.replace(
	/playerEsp: '[^']+'/,
	"playerEsp: 'Project Zomboid wallhack ESP boxes on zombies, survivors, and special infected in loot runs'",
);
ui = ui.replace(
	/rebootFight: '[^']+'/,
	"rebootFight: 'Project Zomboid radar hack 2D minimap showing zombie horde spawn routes in a horde event'",
);
writeFileSync(uiPath, ui);
console.log('✓ scripts/i18n-data/ui-strings-part1.mjs (en image alts)');

// Normalize rebootFight alts across all locale UI files (remove BR leftovers)
for (const part of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	const partPath = join(ROOT, 'scripts/i18n-data', part);
	let partUi = readFileSync(partPath, 'utf8');
	partUi = partUi.replace(/rebootFight: '[^']*'/g, "rebootFight: 'Project Zomboid horde event horde defense fight with aimbot cheats active'");
	writeFileSync(partPath, partUi);
	console.log('✓ scripts/i18n-data/' + part);
}

console.log('Done. Run: npm run generate:i18n && node scripts/generate-blog-posts.mjs');
