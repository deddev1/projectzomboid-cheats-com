/** Supabase-hosted Project Zomboid gameplay & cheat UI images — shared with src/data/gameplay-images.ts */
export const SUPABASE_GAMEPLAY_BASE =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/zomby';

export const gameplayImages = {
	hero: {
		src: '/images/zomboid-cheats-hero.webp',
		alt: 'Bloodied survivor with a machete standing on a wrecked van roof as a zombie horde reaches upward in a rain-soaked ruined city',
		title: 'Project Zomboid Cheats hero — survivor facing a zombie horde',
	},
	gameplayStreetCombat: {
		src: `${SUPABASE_GAMEPLAY_BASE}/images%20(1).jpg`,
		alt: 'Project Zomboid gameplay — survivor fighting zombies on Knox County streets with melee and firearms',
		title: 'Project Zomboid street combat gameplay',
	},
	gameplayHordeDefense: {
		src: `${SUPABASE_GAMEPLAY_BASE}/images%20(2).jpg`,
		alt: 'Project Zomboid gameplay — horde of zombies surrounding a survivor near abandoned buildings',
		title: 'Project Zomboid horde defense gameplay',
	},
	gameplayLootRun: {
		src: `${SUPABASE_GAMEPLAY_BASE}/images%20(3).jpg`,
		alt: 'Project Zomboid gameplay — survivor looting supplies while zombies approach in Knox County',
		title: 'Project Zomboid loot run gameplay',
	},
	cheatMenuUi: {
		src: `${SUPABASE_GAMEPLAY_BASE}/bBeheXR.png`,
		alt: 'Project Zomboid cheats in-game menu with ESP, aimbot, and radar toggle controls on Windows PC',
		title: 'Project Zomboid Cheats menu UI',
	},
	cheatClientPanel: {
		src: `${SUPABASE_GAMEPLAY_BASE}/download.jpg`,
		alt: 'Project Zomboid cheats client panel showing feature toggles for ESP wallhack, aimbot, and radar',
		title: 'Project Zomboid cheats client panel',
	},
	cheatEspOverlay: {
		src: `${SUPABASE_GAMEPLAY_BASE}/download%20(1).jpg`,
		alt: 'Project Zomboid ESP overlay screenshot with zombie boxes, loot markers, and distance readouts',
		title: 'Project Zomboid ESP overlay screenshot',
	},
};

const g = gameplayImages;

export const HERO_IMAGES = {
	home: g.hero.src,
	'project-zomboid-esp': g.gameplayStreetCombat.src,
	'project-zomboid-aimbot': g.gameplayHordeDefense.src,
	features: g.cheatMenuUi.src,
	pricing: g.cheatClientPanel.src,
	setup: g.cheatEspOverlay.src,
	updates: g.gameplayLootRun.src,
	faq: g.cheatMenuUi.src,
	support: g.cheatClientPanel.src,
	undetected: g.gameplayHordeDefense.src,
	wallhack: g.gameplayStreetCombat.src,
	radar: g.gameplayLootRun.src,
	'eac-bypass': g.gameplayHordeDefense.src,
	'cheats-2026': g.hero.src,
	hacks: g.gameplayStreetCombat.src,
	'cheat-download': g.cheatClientPanel.src,
	'mod-menu': g.cheatMenuUi.src,
	'soft-aim': g.gameplayHordeDefense.src,
	'best-cheats': g.hero.src,
	'aimbot-hack': g.gameplayHordeDefense.src,
	'esp-hack': g.gameplayStreetCombat.src,
	'unlock-all': g.gameplayLootRun.src,
	privacy: g.gameplayLootRun.src,
	refund: g.gameplayLootRun.src,
	terms: g.gameplayLootRun.src,
};

export const PAGE_IMAGE_ALTS = {
	home: g.hero.alt,
	'project-zomboid-esp': g.gameplayStreetCombat.alt,
	'project-zomboid-aimbot': g.gameplayHordeDefense.alt,
	features: g.cheatMenuUi.alt,
	pricing: g.cheatClientPanel.alt,
	setup: g.cheatEspOverlay.alt,
	updates: g.gameplayLootRun.alt,
	faq: g.cheatMenuUi.alt,
	support: g.cheatClientPanel.alt,
	undetected: g.gameplayHordeDefense.alt,
	wallhack: g.gameplayStreetCombat.alt,
	radar: g.gameplayLootRun.alt,
	'eac-bypass': g.gameplayHordeDefense.alt,
	'cheats-2026': g.hero.alt,
	hacks: g.gameplayStreetCombat.alt,
	'cheat-download': g.cheatClientPanel.alt,
	'mod-menu': g.cheatMenuUi.alt,
	'soft-aim': g.gameplayHordeDefense.alt,
	'best-cheats': g.hero.alt,
	'aimbot-hack': g.gameplayHordeDefense.alt,
	'esp-hack': g.gameplayStreetCombat.alt,
	'unlock-all': g.gameplayLootRun.alt,
	privacy: g.gameplayLootRun.alt,
	refund: g.gameplayLootRun.alt,
	terms: g.gameplayLootRun.alt,
};
