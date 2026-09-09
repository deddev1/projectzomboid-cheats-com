#!/usr/bin/env node
/**
 * Bulk rebrand Warframe Cheats → Project Zomboid Cheats (projectzomboidcheats.com)
 */
import { readFileSync, writeFileSync, readdirSync, renameSync, existsSync, unlinkSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'rebrand-project-zomboid.mjs',
	'rebrand-warframe.mjs',
	'rebrand-war-thunder.mjs',
	'rebrand-overwatch.mjs',
	'rebrand-arc-raiders.mjs',
]);

/** Longest / most specific replacements first. */
const REPLACEMENTS = [
	// Domain & email
	['https://www.warframecheats.net', 'https://projectzomboidcheats.com'],
	['https://warframecheats.net', 'https://projectzomboidcheats.com'],
	['http://www.warframecheats.net', 'https://projectzomboidcheats.com'],
	['http://warframecheats.net', 'https://projectzomboidcheats.com'],
	['www.warframecheats.net', 'www.projectzomboidcheats.com'],
	['warframecheats.net', 'projectzomboidcheats.com'],
	['support@warframecheats.net', 'support@projectzomboidcheats.com'],
	// Canonical URL paths
	['/warframe-wallhack/', '/project-zomboid-wallhack/'],
	['/warframe-aimbot/', '/project-zomboid-aimbot/'],
	['/warframe-radar/', '/project-zomboid-radar/'],
	['/warframe-esp/', '/project-zomboid-esp/'],
	['/warframe-cheats/', '/project-zomboid-cheats/'],
	['/warframe-wallhack', '/project-zomboid-wallhack'],
	['/warframe-aimbot', '/project-zomboid-aimbot'],
	['/warframe-radar', '/project-zomboid-radar'],
	['/warframe-esp', '/project-zomboid-esp'],
	['/warframe-cheats', '/project-zomboid-cheats'],
	// Assets & scripts
	['data-warframe-cheats-video', 'data-zomboid-cheats-video'],
	['warframe-cheats-bg-video.js', 'zomboid-cheats-bg-video.js'],
	['warframe-mission.webp', 'zomboid-survival.webp'],
	['warframe-esp-modules.webp', 'zomboid-esp-modules.webp'],
	['warframe-esp-enemies.webp', 'zomboid-esp-zombies.webp'],
	['warframe-esp-overlay.webp', 'zomboid-esp-overlay.webp'],
	['warframe-aimbot-menu.webp', 'zomboid-aimbot-menu.webp'],
	['warframe-radar-hack.webp', 'zomboid-radar-hack.webp'],
	['warframe-cheats-hero.webp', 'zomboid-cheats-hero.webp'],
	['warframe-cheats-video-poster.webp', 'zomboid-cheats-video-poster.webp'],
	['warframe-cheats-preview.mp4', 'zomboid-cheats-preview.mp4'],
	['warframe-esp-wallhack-overlay.webp', 'zomboid-esp-wallhack-overlay.webp'],
	['warframe-esp-enemy-boxes.webp', 'zomboid-esp-zombie-boxes.webp'],
	['warframe-aimbot-targeting-menu.webp', 'zomboid-aimbot-targeting-menu.webp'],
	['warframe-radar-hack-minimap.webp', 'zomboid-radar-hack-minimap.webp'],
	['warframe-cheats-combat-esp.webp', 'zomboid-cheats-combat-esp.webp'],
	['warframe-steel-path-mission-esp.webp', 'zomboid-horde-esp.webp'],
	['warframe-sortie-aimbot-combat.webp', 'zomboid-aimbot-combat.webp'],
	['warframe-open-world-radar.webp', 'zomboid-open-world-radar.webp'],
	['warframe-loot-pickup-esp.webp', 'zomboid-loot-pickup-esp.webp'],
	['warframe-cheats-settings-panel.webp', 'zomboid-cheats-settings-panel.webp'],
	['warframe-cheats-main-menu.webp', 'zomboid-cheats-main-menu.webp'],
	['/images/warframe', '/images/zomboid'],
	['/videos/warframe', '/videos/zomboid'],
	// Page IDs & slugs
	['warframe-unlock-all', 'zomboid-unlock-all'],
	['warframe-wallhack', 'project-zomboid-wallhack'],
	['warframe-aimbot-hack', 'project-zomboid-aimbot-hack'],
	['warframe-esp-hack', 'project-zomboid-esp-hack'],
	['warframe-cheat-download', 'zomboid-cheat-download'],
	['warframe-cheats-2026', 'project-zomboid-cheats-2026'],
	['warframe-mod-menu', 'zomboid-mod-menu'],
	['warframe-soft-aim', 'project-zomboid-soft-aim'],
	['best-warframe-cheats', 'best-project-zomboid-cheats'],
	['undetected-warframe-cheats', 'undetected-project-zomboid-cheats'],
	['eac-bypass-warframe', 'eac-bypass-project-zomboid'],
	['warframe-aimbot', 'project-zomboid-aimbot'],
	['warframe-radar-hack', 'project-zomboid-radar-hack'],
	['warframe-radar', 'project-zomboid-radar'],
	['warframe-esp', 'project-zomboid-esp'],
	['warframe-cheats', 'project-zomboid-cheats'],
	// Localized slug patterns
	['eac-bypass-warframe-trucos-warframe', 'eac-bypass-zomboid-trucos-zomboid'],
	['eac-bypass-warframe-triche-warframe', 'eac-bypass-zomboid-triche-zomboid'],
	['eac-bypass-warframe-cheats-warframe', 'eac-bypass-zomboid-cheats-zomboid'],
	['eac-bypass-warframe-chity-warframe', 'eac-bypass-zomboid-chity-zomboid'],
	['undetected-warframe-cheats', 'undetected-project-zomboid-cheats'],
	['nedecektiruemye-chity-warframe', 'nedecektiruemye-chity-zomboid'],
	['nedecektovani-chity-warframe', 'nedecektovani-chity-zomboid'],
	['tespit-edilemeyen-warframe-hileleri', 'tespit-edilemeyen-zomboid-hileleri'],
	['niewykrywalne-cheats-warframe', 'niewykrywalne-cheats-zomboid'],
	['unentdeckte-warframe-cheats', 'unentdeckte-project-zomboid-cheats'],
	['cheats-warframe-indetectaveis', 'cheats-zomboid-indetectaveis'],
	['trucchi-warframe-indetectabili', 'trucchi-zomboid-indetectabili'],
	['cheats-warframe-nedetectabile', 'cheats-zomboid-nedetectabile'],
	['trucos-warframe', 'trucos-zomboid'],
	['triche-warframe', 'triche-zomboid'],
	['cheats-warframe', 'cheats-zomboid'],
	['trucchi-warframe', 'trucchi-zomboid'],
	['cheaty-warframe', 'cheaty-zomboid'],
	['chity-warframe', 'chity-zomboid'],
	['chitov-warframe', 'chitov-zomboid'],
	['cheatow-warframe', 'cheatow-zomboid'],
	['hile-warframe', 'hile-zomboid'],
	['warframe-hile', 'zomboid-hile'],
	['hacks-trucos-warframe', 'hacks-trucos-zomboid'],
	['hacks-triche-warframe', 'hacks-triche-zomboid'],
	['hacks-cheats-warframe', 'hacks-cheats-zomboid'],
	['hacks-trucchi-warframe', 'hacks-trucchi-zomboid'],
	['hacks-cheatow-warframe', 'hacks-cheatow-zomboid'],
	['haksy-chity-warframe', 'haksy-chity-zomboid'],
	['warframe-hile-hacks', 'zomboid-hile-hacks'],
	// Review slugs
	['warframe-soft-aim-review', 'zomboid-soft-aim-review'],
	['warframe-esp-realistic-review', 'zomboid-esp-survival-review'],
	['warframe-cloud-dma-review', 'zomboid-cloud-dma-review'],
	['warframe-controller-aimbot-review', 'zomboid-controller-aimbot-review'],
	['warframe-cheat-setup-review', 'zomboid-cheat-setup-review'],
	['warframe-ability-esp-review', 'zomboid-loot-esp-review'],
	['warframe-aimbot-realistic-review', 'zomboid-aimbot-survival-review'],
	['warframe-radar-hack-review', 'zomboid-radar-hack-review'],
	['warframe-anti-cheat-update-review', 'zomboid-anti-cheat-update-review'],
	['warframe-sniper-aimbot-review', 'zomboid-sniper-aimbot-review'],
	['warframe-monthly-sub-review', 'zomboid-monthly-sub-review'],
	['warframe-lifetime-key-review', 'zomboid-lifetime-key-review'],
	['warframe-squad-play-review', 'zomboid-squad-play-review'],
	// Blog slugs
	['warframe-cheats-complete-guide-2026', 'project-zomboid-cheats-complete-guide-2026'],
	['warframe-cheats-buyers-guide', 'project-zomboid-cheats-buyers-guide'],
	['warframe-cheats-2026-whats-new', 'project-zomboid-cheats-2026-whats-new'],
	['warframe-aimbot-settings-guide', 'project-zomboid-aimbot-settings-guide'],
	['warframe-esp-wallhack-explained', 'project-zomboid-esp-wallhack-explained'],
	['undetected-warframe-cheats-eac', 'undetected-project-zomboid-cheats-eac'],
	['warframe-cheats-vs-cheatvault-comparison', 'project-zomboid-cheats-vs-cheatvault-comparison'],
	['voidcheats-vs-warframe-cheats-two-week-test', 'voidcheats-vs-project-zomboid-cheats-two-week-test'],
	['warframe-cheats-vs-ghostware-features-pricing', 'project-zomboid-cheats-vs-ghostware-features-pricing'],
	['warframe-steel-path-beginners-guide', 'project-zomboid-survival-beginners-guide'],
	['warframe-open-world-farming-guide', 'project-zomboid-loot-farming-guide'],
	['warframe-factions-grineer-corpus-sentient-guide', 'project-zomboid-zombie-types-guide'],
	['warframe-mission-types-explained', 'project-zomboid-gameplay-modes-explained'],
	['warframe-patch-notes-guide', 'project-zomboid-patch-notes-guide'],
	['warframe-new-player-progression-guide', 'project-zomboid-new-player-guide'],
	// Native guide order
	['warframe-new-player-guide', 'project-zomboid-new-player-guide'],
	['warframe-mission-types-guide', 'project-zomboid-gameplay-modes-explained'],
	['warframe-factions-explained', 'project-zomboid-zombie-types-guide'],
	['warframe-open-world-farming', 'project-zomboid-loot-farming-guide'],
	['warframe-steel-path-guide', 'project-zomboid-survival-beginners-guide'],
	// Checkout & external
	['/products/warframe-cheats', '/products/project-zomboid-cheats'],
	['/products/warframe', '/products/project-zomboid'],
	['https://www.warframe.com/', 'https://projectzomboid.com/'],
	['https://warframe.com/', 'https://projectzomboid.com/'],
	['https://forums.warframe.com/forum/3-pc-update-notes/', 'https://projectzomboid.com/blog/'],
	['https://store.steampowered.com/app/230410/Warframe/', 'https://store.steampowered.com/app/108600/Project_Zomboid/'],
	['https://steamcommunity.com/app/230410', 'https://steamcommunity.com/app/108600'],
	['https://warframe.fandom.com/wiki/WARFRAME_Wiki', 'https://pzwiki.net/wiki/Main_Page'],
	['https://www.warframe.com/game-guide', 'https://projectzomboid.com/'],
	['warframe.com', 'projectzomboid.com'],
	['forums.warframe.com', 'projectzomboid.com/blog'],
	// Game lore → Project Zomboid
	['Plains of Eidolon, Orb Vallis, and Deimos', 'Knox County, Riverside, and West Point'],
	['Plains of Eidolon, Orb Vallis', 'Knox County and Riverside'],
	['Plains of Eidolon', 'Knox County'],
	['Plains and Deimos', 'Knox County and West Point'],
	['Orb Vallis', 'Riverside'],
	['Deimos', 'West Point'],
	['Steel Path & Sortie presets', 'Survival & horde presets'],
	['Steel Path & Sorties', 'survival runs and horde events'],
	['Steel Path and Sortie presets', 'survival and horde presets'],
	['Steel Path and Sorties', 'survival runs and horde events'],
	['Steel Path and open world missions', 'survival runs and Knox County exploration'],
	['Steel Path and open world', 'survival runs and open world'],
	['Steel Path, Sorties, and open world missions', 'survival runs, horde events, and Knox County exploration'],
	['Steel Path, Sorties, and open world', 'survival runs, horde events, and Knox County'],
	['Steel Path, Sorties', 'survival runs and horde events'],
	['Steel Path missions', 'survival runs'],
	['Steel Path mission', 'survival run'],
	['Steel Path enemy density', 'horde density'],
	['Steel Path and Sortie modifier stacks', 'horde events and hardcore modifiers'],
	['Steel Path and survival runs', 'survival and loot runs'],
	['Steel Path and open world bounties', 'Knox County loot runs'],
	['Steel Path and open world missions', 'survival runs and Knox County exploration'],
	['Steel Path pressure', 'survival pressure'],
	['Steel Path', 'survival runs'],
	['Sortie modifiers', 'horde modifiers'],
	['Sortie modifier stacks', 'horde modifier stacks'],
	['Sortie combat', 'horde combat'],
	['Sorties and open world missions', 'horde events and Knox County exploration'],
	['Sorties and', 'horde events and'],
	['Sorties', 'horde events'],
	['Sortie', 'horde event'],
	['Digital Extremes Warframe status', 'The Indie Stone Project Zomboid status'],
	['Digital Extremes Warframe', 'The Indie Stone Project Zomboid'],
	['Digital Extremes anti-cheat', 'Project Zomboid anti-cheat'],
	['Digital Extremes and Warframe patches', 'The Indie Stone and Project Zomboid patches'],
	['Digital Extremes and', 'The Indie Stone and'],
	['Digital Extremes', 'The Indie Stone'],
	['Warframe PC update notes', 'Project Zomboid patch notes'],
	['Warframe anti-cheat', 'Project Zomboid anti-cheat'],
	['Warframe update log', 'Project Zomboid update log'],
	['Warframe patch notes', 'Project Zomboid patch notes'],
	['Warframe patches', 'Project Zomboid patches'],
	['Warframe patch', 'Project Zomboid patch'],
	['Warframe live updates', 'Project Zomboid live updates'],
	['Warframe Wiki', 'PZ Wiki'],
	['Warframe Game Guides', 'Project Zomboid Game Guides'],
	['Grineer, Corpus & Infested ESP', 'Zombie, survivor & loot ESP'],
	['Grineer, Corpus, Infested, and Sentient units', 'zombies, survivors, and special infected'],
	['Grineer, Corpus, and Infested units', 'zombies, survivors, and special infected'],
	['Grineer, Corpus, Infested, and Sentient', 'zombies, survivors, and special infected'],
	['Grineer, Corpus, and Infested', 'zombies, survivors, and special infected'],
	['Grineer, Corpus & Infested', 'zombies, survivors, and special infected'],
	['Grineer lancers, Corpus MOAs, Infested runners', 'zombie walkers, runners, and crawlers'],
	['Grineer and Corpus enemies', 'zombies and survivors'],
	['Grineer heavy unit', 'special infected'],
	['Corpus heavy unit', 'special infected'],
	['Boss, lich & Sentient ESP', 'Boss zombie & special infected ESP'],
	['liches, sisters of parvos, archons, and Sentient fragments', 'special infected, boss zombies, and horde leaders'],
	['liches, sisters, and archons', 'special infected and boss zombies'],
	['lich fights', 'boss zombie fights'],
	['liches', 'boss zombies'],
	['Sentient fragments', 'special infected'],
	['Sentient units', 'special infected'],
	['Sentients', 'special infected'],
	['Sentient', 'special infected'],
	['demolysts', 'special infected'],
	['enemy Warframes and Sentients', 'zombies and survivors'],
	['enemy Warframe', 'zombie or survivor'],
	['squad Warframes', 'squad members'],
	['your Warframe', 'your character'],
	['Frame ESP', 'Player & zombie ESP'],
	['frame ESP', 'player ESP'],
	['Ability ESP', 'Player ESP'],
	['ability ESP', 'player ESP'],
	['ability cooldown tracking', 'stamina and status tracking'],
	['Ability cooldown tracking', 'Stamina and status tracking'],
	['ability cooldown and health markers', 'stamina and health markers'],
	['ability cooldowns and health markers', 'stamina and health markers'],
	['ability cooldowns', 'stamina cooldowns'],
	['ability effects', 'building cover'],
	['ability barriers', 'building walls'],
	['ability timers', 'status timers'],
	['enemy ability timers', 'zombie aggro timers'],
	['heavy units', 'special infected'],
	['heavy unit', 'special infected'],
	['enemy units', 'zombies and survivors'],
	['enemy unit', 'zombie or survivor'],
	['Star Chart', 'Knox County map'],
	['tileset areas', 'map zones'],
	['tilesets', 'map zones'],
	['tileset', 'map zone'],
	['parkour combat', 'melee combat'],
	['open world missions', 'Knox County exploration'],
	['open world bounties', 'Knox County loot runs'],
	['open world', 'Knox County'],
	['co-op missions', 'multiplayer servers'],
	['co-op squads', 'multiplayer squads'],
	['public missions', 'public servers'],
	['public squads', 'public servers'],
	['squad pushes', 'horde pushes'],
	['squad push', 'horde push'],
	['squad fight', 'group fight'],
	['squad fights', 'group fights'],
	['squad play', 'multiplayer'],
	['squad pushes', 'horde pushes'],
	['defense waves', 'horde waves'],
	['defense wave', 'horde wave'],
	['defense, survival, and interception', 'horde events, survival, and loot runs'],
	['defense, survival, and squad pushes', 'horde events, survival, and group play'],
	['defense missions', 'horde events'],
	['defense points', 'safehouse perimeters'],
	['defense point', 'safehouse perimeter'],
	['defense and survival objective', 'safehouse and survival objective'],
	['defense and survival', 'horde and survival'],
	['defense', 'horde defense'],
	['survival missions', 'survival runs'],
	['survival runs', 'loot runs'],
	['relic missions', 'loot runs'],
	['farm runs', 'loot runs'],
	['resource caches', 'loot containers'],
	['resource tracking', 'loot tracking'],
	['Resource & locker markers', 'Loot & container markers'],
	['pickups and lockers markers', 'loot and container markers'],
	['lockers and caches', 'containers and crates'],
	['lockers and', 'containers and'],
	['primaries, secondaries, and melee', 'melee weapons, firearms, and shotguns'],
	['rifles, shotguns, and snipers', 'pistols, shotguns, and rifles'],
	['rifle, shotgun, and sniper profiles', 'pistol, shotgun, and rifle profiles'],
	['rifle and shotgun', 'pistol and shotgun'],
	['rifle beams', 'rifle shots'],
	['long-range rifle fights', 'long-range firearm fights'],
	['Eidolon hunts', 'Knox County loot runs'],
	['duo arbitrations', 'duo survival runs'],
	['arbitration runs', 'survival runs'],
	['interception', 'loot runs'],
	['capture zones', 'safehouse zones'],
	['capture a defense point', 'hold a safehouse perimeter'],
	['final circles', 'horde clusters'],
	['spawn routes', 'zombie spawn routes'],
	['spawn pushes', 'horde pushes'],
	['spawn', 'horde spawn'],
	['TTK windows', 'kill time windows'],
	['weapon balance and season rules', 'weapon balance and game updates'],
	['mods, resources, and health orbs', 'loot items, weapons, and medical supplies'],
	['mods, and lockers', 'items, and containers'],
	['mods, resources', 'loot items'],
	['health orbs, energy pickups, and ammo', 'medical supplies, food, and ammo'],
	['health orbs', 'medical supplies'],
	['health orb', 'medical supply'],
	['health pickup markers', 'medical supply markers'],
	['health pickups', 'medical supplies'],
	['health pickup', 'medical supply'],
	['health and pickup markers', 'health and loot markers'],
	['health bars', 'health bars'],
	['Enemy ESP boxes', 'Zombie ESP boxes'],
	['Enemy ESP', 'Zombie ESP'],
	['enemy ESP', 'zombie ESP'],
	['Enemy, heavy unit, and ability ESP', 'Zombie, survivor, and loot ESP'],
	['Enemy, heavy unit, and', 'Zombie, survivor, and'],
	['Enemy bounding boxes', 'Zombie bounding boxes'],
	['Enemy facing indicator', 'Zombie facing indicator'],
	['Enemy type filter', 'Target type filter'],
	['Unit name labels', 'Entity name labels'],
	['Weak-point targeting', 'Headshot targeting'],
	['Weak-point priority', 'Headshot priority'],
	['Weak-point markers', 'Headshot markers'],
	['weak-point hitboxes', 'headshot hitboxes'],
	['weak-point priority', 'headshot priority'],
	['weak-point targeting', 'headshot targeting'],
	['weak-point markers', 'headshot markers'],
	['Weak-spot priority', 'Headshot priority'],
	['bone priority', 'head priority'],
	['Bone priority', 'Head priority'],
	['bone priority and threat-based targeting', 'head priority and threat-based targeting'],
	['Bone priority and threat-based targeting', 'Head priority and threat-based targeting'],
	['Bone priority and target selection', 'Head priority and target selection'],
	['Per-weapon profiles', 'Per-weapon profiles'],
	['mid-mission', 'mid-session'],
	['mid-fight', 'mid-combat'],
	['in-mission', 'in-session'],
	['In-mission', 'In-session'],
	['live Warframe sessions', 'live Project Zomboid sessions'],
	['mission session', 'game session'],
	['mission sessions', 'game sessions'],
	['mission-critical', 'session-critical'],
	['mission objectives', 'loot objectives'],
	['mission fights', 'combat encounters'],
	['mission fight', 'combat encounter'],
	['mission types', 'gameplay modes'],
	['Warframe Intel', 'Project Zomboid Intel'],
	['warframe intel', 'project zomboid intel'],
	['Warframe mixes', 'Project Zomboid mixes'],
	['Warframe punishes', 'Project Zomboid punishes'],
	['Warframe missions punish', 'Project Zomboid sessions punish'],
	['Warframe firefights', 'Project Zomboid combat'],
	['Warframe combat pace', 'Project Zomboid combat pace'],
	['Warframe combat', 'Project Zomboid combat'],
	['Warframe sessions', 'Project Zomboid sessions'],
	['Warframe on Windows PC', 'Project Zomboid on Windows PC'],
	['Warframe on Steam', 'Project Zomboid on Steam'],
	['Warframe Steam community hub', 'Project Zomboid Steam community hub'],
	['Official Warframe website', 'Official Project Zomboid website'],
	['Warframe patch notes & news', 'Project Zomboid patch notes & news'],
	['Warframe wallhack', 'Project Zomboid wallhack'],
	['Warframe Wallhack', 'Project Zomboid Wallhack'],
	['Warframe radar', 'Project Zomboid radar'],
	['Warframe Radar', 'Project Zomboid Radar'],
	['Warframe aimbot', 'Project Zomboid aimbot'],
	['Warframe Aimbot', 'Project Zomboid Aimbot'],
	['Warframe esp', 'Project Zomboid esp'],
	['Warframe ESP', 'Project Zomboid ESP'],
	['Warframe cheats', 'Project Zomboid cheats'],
	['Warframe Cheats', 'Project Zomboid Cheats'],
	['Warframe cheat', 'Project Zomboid cheat'],
	['Warframe hack', 'Project Zomboid cheat'],
	['Warframe hacks', 'Project Zomboid cheats'],
	['Warframe Hacks', 'Project Zomboid Cheats'],
	['Warframe game guides', 'Project Zomboid game guides'],
	['Warframe game guide', 'Project Zomboid game guide'],
	['Warframe factions', 'Project Zomboid zombie types'],
	['Warframe mission types', 'Project Zomboid gameplay modes'],
	['undetected warframe cheats', 'undetected project zomboid cheats'],
	['warframe wallhack', 'project zomboid wallhack'],
	['warframe aimbot', 'project zomboid aimbot'],
	['warframe esp', 'project zomboid esp'],
	['warframe cheats 2026', 'project zomboid cheats 2026'],
	['best warframe cheats', 'best project zomboid cheats'],
	['Warframe', 'Project Zomboid'],
	['warframe', 'project-zomboid'],
	// Project identifiers
	['project-name=warframecheats', 'project-name=projectzomboidcheats'],
	['name = "warframecheats"', 'name = "projectzomboidcheats"'],
	['"warframe-cheats"', '"project-zomboid-cheats"'],
	['Buy Warframe Cheats', 'Buy Project Zomboid Cheats'],
	// Middleware hosts
	["const APEX_HOST = 'warframecheats.net'", "const APEX_HOST = 'projectzomboidcheats.com'"],
	["const WWW_HOST = 'www.warframecheats.net'", "const WWW_HOST = 'www.projectzomboidcheats.com'"],
	["const CANONICAL_ORIGIN = 'https://warframecheats.net'", "const CANONICAL_ORIGIN = 'https://projectzomboidcheats.com'"],
	// seo.ts helper
	["if (lead.toLowerCase().includes('warframe'))", "if (lead.toLowerCase().includes('project zomboid'))"],
	['return `Warframe cheats — ${lead}`', 'return `Project Zomboid cheats — ${lead}`'],
	['optimized for warframecheats.net', 'optimized for projectzomboidcheats.com'],
	['| warframecheats.net', '| projectzomboidcheats.com'],
	['| Warframe Cheats', '| Project Zomboid Cheats'],
	["shortName: 'WF'", "shortName: 'PZ'"],
	["game: 'Warframe'", "game: 'Project Zomboid'"],
	['Warframe Cheats logo', 'Project Zomboid Cheats logo'],
	['warframeImages', 'zomboidImages'],
	['warframeHeroVideo', 'zomboidHeroVideo'],
	['warframeVideo', 'zomboidVideo'],
	['warframeHeroImage', 'zomboidHeroImage'],
	['warframeScreenshots', 'zomboidScreenshots'],
	['WarframeScreenshot', 'ZomboidScreenshot'],
	['warframeAuthorityLinks', 'zomboidAuthorityLinks'],
	['WarframeAuthorityLinks', 'ZomboidAuthorityLinks'],
	['getNativeWarframeGuides', 'getNativeZomboidGuides'],
	["from './warframe'", "from './zomboid'"],
	["from '../data/warframe'", "from '../data/zomboid'"],
	['name = "warframe-cheats-net"', 'name = "project-zomboid-cheats-com"'],
	['name = "warframe-cheats"', 'name = "project-zomboid-cheats"'],
];

const PAGE_DIR_RENAMES = [
	['warframe-cheats', 'project-zomboid-cheats'],
	['warframe-esp', 'project-zomboid-esp'],
	['warframe-aimbot', 'project-zomboid-aimbot'],
	['warframe-wallhack', 'project-zomboid-wallhack'],
	['warframe-radar', 'project-zomboid-radar'],
];

function walk(dir, files = []) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = join(dir, entry.name);
		if (entry.isDirectory()) walk(full, files);
		else files.push(full);
	}
	return files;
}

function apply(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (result.includes(from)) result = result.split(from).join(to);
	}
	return result;
}

function renamePageDirs() {
	for (const [from, to] of PAGE_DIR_RENAMES) {
		const src = join(root, 'src', 'pages', from);
		const dest = join(root, 'src', 'pages', to);
		if (existsSync(src)) {
			renameSync(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		}
	}
}

function renameDataFile() {
	const src = join(root, 'src', 'data', 'warframe.ts');
	const dest = join(root, 'src', 'data', 'zomboid.ts');
	if (existsSync(src)) {
		let content = readFileSync(src, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
		unlinkSync(src);
		console.log('Renamed src/data/warframe.ts → zomboid.ts');
	} else if (existsSync(dest)) {
		let content = readFileSync(dest, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
	}
}

function renameComponent() {
	const src = join(root, 'src', 'components', 'WarframeAuthorityLinks.astro');
	const dest = join(root, 'src', 'components', 'ZomboidAuthorityLinks.astro');
	if (existsSync(src)) {
		let content = readFileSync(src, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
		unlinkSync(src);
		console.log('Renamed WarframeAuthorityLinks.astro → ZomboidAuthorityLinks.astro');
	}
}

function renameBgVideoScript() {
	const src = join(root, 'public', 'scripts', 'warframe-cheats-bg-video.js');
	const dest = join(root, 'public', 'scripts', 'zomboid-cheats-bg-video.js');
	if (existsSync(src)) {
		let content = readFileSync(src, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
		unlinkSync(src);
		console.log('Renamed warframe-cheats-bg-video.js → zomboid-cheats-bg-video.js');
	}
}

function transformFiles() {
	const files = walk(root);
	let changed = 0;
	for (const file of files) {
		if (!TEXT_EXTENSIONS.has(extname(file))) continue;
		if (SKIP_FILES.has(file.split(/[/\\]/).pop())) continue;
		const original = readFileSync(file, 'utf8');
		const updated = apply(original);
		if (updated !== original) {
			writeFileSync(file, updated);
			changed++;
		}
	}
	console.log(`\nTransformed ${changed} files`);
}

function patchMiddlewareRedirects() {
	const file = join(root, 'functions', '_middleware.js');
	if (!existsSync(file)) return;
	let content = readFileSync(file, 'utf8');
	content = apply(content);

	// Add warframecheats.net as legacy host
	if (!content.includes("'warframecheats.net'")) {
		content = content.replace(
			"'www.fortnitecheats.com',",
			"'www.fortnitecheats.com',\n\t'warframecheats.net',\n\t'www.warframecheats.net',",
		);
	}

	const extraRedirects = {
		'/warframe-cheats': '/project-zomboid-cheats/',
		'/warframe-cheats/': '/project-zomboid-cheats/',
		'/warframe-esp': '/project-zomboid-esp/',
		'/warframe-esp/': '/project-zomboid-esp/',
		'/warframe-aimbot': '/project-zomboid-aimbot/',
		'/warframe-aimbot/': '/project-zomboid-aimbot/',
		'/warframe-wallhack': '/project-zomboid-wallhack/',
		'/warframe-wallhack/': '/project-zomboid-wallhack/',
		'/warframe-radar': '/project-zomboid-radar/',
		'/warframe-radar/': '/project-zomboid-radar/',
	};
	for (const [from, to] of Object.entries(extraRedirects)) {
		const key = `'${from}': '${to}'`;
		if (!content.includes(key)) {
			content = content.replace(
				'const PATH_REDIRECTS = {',
				`const PATH_REDIRECTS = {\n\t'${from}': '${to}',`,
			);
		}
	}
	writeFileSync(file, content);
	console.log('Patched functions/_middleware.js redirects');
}

function patchPublicRedirects() {
	const file = join(root, 'public', '_redirects');
	if (!existsSync(file)) return;
	let content = readFileSync(file, 'utf8');
	content = apply(content);
	const lines = [
		'/warframe-cheats /project-zomboid-cheats/ 301',
		'/warframe-cheats/ /project-zomboid-cheats/ 301',
		'/warframe-esp /project-zomboid-esp/ 301',
		'/warframe-esp/ /project-zomboid-esp/ 301',
		'/warframe-aimbot /project-zomboid-aimbot/ 301',
		'/warframe-aimbot/ /project-zomboid-aimbot/ 301',
		'/warframe-wallhack /project-zomboid-wallhack/ 301',
		'/warframe-wallhack/ /project-zomboid-wallhack/ 301',
		'/warframe-radar /project-zomboid-radar/ 301',
		'/warframe-radar/ /project-zomboid-radar/ 301',
	];
	for (const line of lines) {
		if (!content.includes(line.split(' ')[0])) {
			content += `\n${line}`;
		}
	}
	writeFileSync(file, content);
	console.log('Patched public/_redirects');
}

console.log('Rebranding Warframe Cheats → Project Zomboid Cheats...\n');
renamePageDirs();
renameDataFile();
renameComponent();
renameBgVideoScript();
transformFiles();
patchMiddlewareRedirects();
patchPublicRedirects();
console.log('\nRebrand complete. Next: npm run generate:i18n && npm run generate:blog');
