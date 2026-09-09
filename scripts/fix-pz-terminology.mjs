#!/usr/bin/env node
/** Bulk-replace leftover non–Project Zomboid game terminology in source files. */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const TARGETS = [
	'src/data/site.ts',
	'scripts/i18n-data/pages-en.mjs',
	'scripts/i18n-data/ui-strings-part1.mjs',
	'scripts/i18n-data/phrases.mjs',
	'scripts/i18n-data/gameplay-images.mjs',
];

const REPLACEMENTS = [
	['loot runs, horde events, and Knox County exploration', 'survival, multiplayer, and Knox County looting'],
	['loot runs, horde events, and Knox County', 'survival, multiplayer, and Knox County'],
	['loot runs and horde events y mundo abierto', 'supervivencia, multijugador y mundo abierto'],
	['loot runs and horde events et monde ouvert', 'survie, multijoueur et monde ouvert'],
	['loot runs and horde events und Open World', 'Survival, Multiplayer und Open World'],
	['Knox County exploration and loot runs', 'open-world Knox County looting'],
	['Knox County exploration', 'open-world Knox County'],
	['for loot runs & Knox County', 'for survival & Knox County'],
	['What Project Zomboid ESP solves in loot runs', 'What Project Zomboid ESP solves in combat'],
	['On loot runs, multiplayer servers, and loot runs', 'In towns, multiplayer servers, and open-world runs'],
	['multiplayer servers and loot runs', 'multiplayer servers and survival runs'],
	['before loot runs', 'before you load in'],
	['on loot runs and multiplayer servers', 'in survival and multiplayer'],
	['Packages cover loot runs and multiplayer servers', 'Packages cover survival and multiplayer servers'],
	['loot runs and multiplayer servers loops', 'survival and multiplayer loops'],
	['map zone clears', 'building clears'],
	['horde events and multiplayer', 'zombie hordes and multiplayer'],
	['horde events, survival', 'zombie hordes, survival'],
	['horde events and Knox County', 'zombie hordes and Knox County'],
	['horde event horde defense fight', 'zombie horde base defense fight'],
	['Combate loot runs Project Zomboid', 'Combate supervivencia Project Zomboid'],
	['Combat loot runs Project Zomboid', 'Combat survival Project Zomboid'],
	['loot runs Kampf', 'Survival-Kampf'],
	['Walka loot runs Project Zomboid', 'Walka survival Project Zomboid'],
	['Бой loot runs Project Zomboid', 'Бой survival Project Zomboid'],
	['loot runs çatışması', 'survival çatışması'],
	['in loot runs', 'in Project Zomboid'],
	['on loot runs', 'in survival'],
	['for loot runs', 'for survival'],
	['Soft aim on loot runs', 'Soft aim in survival'],
	['spotting heavies on ridges before pushing the objective', 'spotting hordes around corners before pushing into buildings'],
	['heavies on ridges', 'hordes around corners'],
	['frames and bosses', 'zombies and survivors'],
	['Ability cooldown and health markers', 'Health and status markers'],
	['horde defense or survival objective', 'base defense or survival objective'],
	['before they hit the pod', 'before they reach your safe house'],
	['horde events, and Knox County exploration', 'zombie hordes, and Knox County looting'],
	['loot runs, factions, Knox County farming', 'survival tips, zombie types, Knox County loot routes'],
	['aimed at Knox County and loot runs', 'aimed at Knox County survival and looting'],
	['during long survival and loot runs', 'during long survival and loot trips'],
	['during loot runs, loot runs, and Knox County loot runs', 'during town looting, warehouse runs, and Knox County routes'],
	['horde density and horde modifier stacks', 'horde density and sandbox population settings'],
	['horde events, survival, and loot runs', 'zombie hordes, survival, and loot trips'],
	['horde defense, survival, and horde pushes', 'base defense, survival, and horde pushes'],
	['Does this work for loot runs, horde events, and Knox County?', 'Does this work for survival, multiplayer, and Knox County?'],
	['enemy positions in loot runs and horde events', 'enemy positions in survival and during hordes'],
	['map zones like Knox County, Riverside, and West Point', 'towns like Muldraugh, West Point, and Riverside'],
	['Knox County map zones like Knox County, Riverside, and West Point', 'Knox County towns like Muldraugh, West Point, and Riverside'],
	['Highlights enemy factions with boxes', 'Highlights zombies and survivors with boxes'],
	['during melee combat and Knox County loot runs', 'during melee combat and Knox County loot trips'],
	['endgame content', 'late-game hordes'],
	['boss phases', 'tough infected fights'],
	['boss and boss zombie fights', 'special infected fights'],
	['special infected, special infected, and boss phases', 'special infected and tough zombies'],
	['special infected and special infected', 'special infected and tough zombies'],
	['zombie walkers, runners, and crawlers, and more', 'walkers, runners, crawlers, and sprinters'],
	['Digital-Extremes-Patches', 'The Indie Stone patches'],
	['operadores', 'supervivientes'],
	['operatörler', 'hayatta kalanlar'],
	['playerach', 'graczach'],
	['playeri', 'giocatori'],
	['playere', 'giocatori'],
	['playerach Project Zomboid', 'survivors in Project Zomboid'],
	['operadores em Project Zomboid', 'survivors in Project Zomboid'],
	['operadores Project Zomboid', 'survivors in Project Zomboid'],
	['operatörlerde Project Zomboid', 'survivors in Project Zomboid'],
];

for (const rel of TARGETS) {
	const file = join(ROOT, rel);
	let text = readFileSync(file, 'utf8');
	let changed = 0;
	for (const [from, to] of REPLACEMENTS) {
		if (text.includes(from)) {
			text = text.split(from).join(to);
			changed++;
		}
	}
	if (changed) {
		writeFileSync(file, text, 'utf8');
		console.log(`✓ ${rel} (${changed} replacement groups)`);
	} else {
		console.log(`· ${rel} (no changes)`);
	}
}
