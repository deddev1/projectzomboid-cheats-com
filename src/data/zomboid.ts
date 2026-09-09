import { siteConfig } from './site';
import { gameplayImages } from './gameplay-images';

const g = gameplayImages;

export const zomboidHeroImage = g.hero.src;

export type ZomboidScreenshot = {
	src: string;
	alt: string;
	title: string;
};

/** Project Zomboid cheat & gameplay screenshots — hosted on Supabase CDN. */
export const zomboidScreenshots = {
	mainMenu: g.cheatClientPanel,
	espOverlay: g.cheatEspOverlay,
	espBoxes: g.gameplayStreetCombat,
	aimbotMenu: g.cheatMenuUi,
	radarMinimap: g.gameplayLootRun,
	combatEsp: g.gameplayHordeDefense,
	survivalEsp: g.gameplayStreetCombat,
	aimbotCombat: g.gameplayHordeDefense,
	openWorldRadar: g.gameplayLootRun,
	lootEsp: g.gameplayStreetCombat,
	settingsPanel: g.cheatMenuUi,
} as const satisfies Record<string, ZomboidScreenshot>;

/** Pricing gallery — main viewer + thumbnail strip (no video). */
export const pricingGallery: ZomboidScreenshot[] = [
	zomboidScreenshots.mainMenu,
	zomboidScreenshots.espOverlay,
	zomboidScreenshots.espBoxes,
	zomboidScreenshots.aimbotMenu,
	zomboidScreenshots.radarMinimap,
	zomboidScreenshots.combatEsp,
	zomboidScreenshots.aimbotCombat,
	zomboidScreenshots.openWorldRadar,
	zomboidScreenshots.lootEsp,
	zomboidScreenshots.settingsPanel,
];

/** Feature page section screenshots keyed to productFeatureDetails ids. */
export const featureSectionImages: Record<'aimbot' | 'visual' | 'misc', ZomboidScreenshot> = {
	aimbot: zomboidScreenshots.aimbotCombat,
	visual: zomboidScreenshots.espOverlay,
	misc: zomboidScreenshots.radarMinimap,
};

/** Extra visuals shown below the feature breakdown grid. */
export const featureGallery: ZomboidScreenshot[] = [
	zomboidScreenshots.mainMenu,
	zomboidScreenshots.espBoxes,
	zomboidScreenshots.aimbotMenu,
	zomboidScreenshots.combatEsp,
	zomboidScreenshots.openWorldRadar,
	zomboidScreenshots.lootEsp,
	zomboidScreenshots.settingsPanel,
];

const s = zomboidScreenshots;

export const zomboidImages = {
	hero: zomboidHeroImage,
	cover: s.espOverlay.src,
	logo: siteConfig.logo,
	loadoutBuilder: s.aimbotMenu.src,
	aimbotCombat: s.aimbotCombat.src,
	squadFight: s.combatEsp.src,
	espWallhack: s.espBoxes.src,
	cheatsPackage: s.mainMenu.src,
	headerArt: s.settingsPanel.src,
	battleRoyaleCombat: s.combatEsp.src,
	rebootFight: s.radarMinimap.src,
	playerEsp: s.espOverlay.src,
	radarHack: s.radarMinimap.src,
	zeroBuildCombat: s.combatEsp.src,
	zeroBuildMode: s.espBoxes.src,
	openWorldTileset: s.openWorldRadar.src,
	product: [
		{ src: s.espOverlay.src, alt: s.espOverlay.alt },
		{ src: s.espBoxes.src, alt: s.espBoxes.alt },
		{ src: s.aimbotCombat.src, alt: s.aimbotCombat.alt },
		{ src: s.aimbotMenu.src, alt: s.aimbotMenu.alt },
		{ src: s.radarMinimap.src, alt: s.radarMinimap.alt },
	],
	gallery: [
		{ src: s.mainMenu.src, alt: s.mainMenu.alt, href: '/project-zomboid-cheats/' },
		{ src: s.espOverlay.src, alt: s.espOverlay.alt, href: '/project-zomboid-esp/' },
		{ src: s.espBoxes.src, alt: s.espBoxes.alt, href: '/project-zomboid-wallhack/' },
		{ src: s.aimbotCombat.src, alt: s.aimbotCombat.alt, href: '/project-zomboid-aimbot/' },
		{ src: s.mainMenu.src, alt: s.mainMenu.alt, href: '/features/' },
		{ src: s.radarMinimap.src, alt: s.radarMinimap.alt, href: '/project-zomboid-radar/' },
		{ src: s.combatEsp.src, alt: s.combatEsp.alt, href: '/project-zomboid-cheats/' },
	],
	sitemap: [
		{ src: s.mainMenu.src, title: 'Project Zomboid Cheats | Undetected ESP & Aimbot', caption: s.mainMenu.alt },
		{ src: s.espOverlay.src, title: 'Project Zomboid ESP overlay', caption: s.espOverlay.alt },
		{ src: s.espBoxes.src, title: 'Project Zomboid wallhack ESP', caption: s.espBoxes.alt },
		{ src: s.aimbotCombat.src, title: 'Project Zomboid aimbot targeting', caption: s.aimbotCombat.alt },
		{ src: s.aimbotMenu.src, title: 'Project Zomboid aimbot menu', caption: s.aimbotMenu.alt },
		{ src: s.radarMinimap.src, title: 'Project Zomboid radar hack', caption: s.radarMinimap.alt },
		{ src: s.combatEsp.src, title: 'Project Zomboid survival cheats', caption: s.combatEsp.alt },
		{ src: s.survivalEsp.src, title: 'Project Zomboid horde ESP', caption: s.survivalEsp.alt },
		{ src: s.openWorldRadar.src, title: 'Project Zomboid Knox County radar', caption: s.openWorldRadar.alt },
		{ src: s.lootEsp.src, title: 'Project Zomboid loot pickup ESP', caption: s.lootEsp.alt },
		{ src: s.settingsPanel.src, title: 'Project Zomboid cheats settings panel', caption: s.settingsPanel.alt },
	],
} as const;
