import { siteConfig } from './site';

const img = (name: string) => `/images/${name}`;

/** Homepage hero — self-hosted for sitemap and LCP. */
export const warframeHeroImage = '/images/warframe-cheats-hero.webp';

export type WarframeScreenshot = {
	src: string;
	alt: string;
	title: string;
};

/** Warframe cheat screenshots — SEO filenames under /images/. */
export const warframeScreenshots = {
	mainMenu: {
		src: img('warframe-cheats-main-menu.webp'),
		alt: 'Warframe cheats main menu with ESP, aimbot, and radar toggles on Windows PC',
		title: 'Warframe Cheats main menu',
	},
	espOverlay: {
		src: img('warframe-esp-wallhack-overlay.webp'),
		alt: 'Warframe ESP wallhack overlay highlighting Grineer and Corpus enemies through terrain',
		title: 'Warframe ESP wallhack overlay',
	},
	espBoxes: {
		src: img('warframe-esp-enemy-boxes.webp'),
		alt: 'Warframe ESP enemy bounding boxes with health bars in a Steel Path mission',
		title: 'Warframe ESP enemy boxes',
	},
	aimbotMenu: {
		src: img('warframe-aimbot-targeting-menu.webp'),
		alt: 'Warframe aimbot settings menu with FOV, smoothing, and bone priority controls',
		title: 'Warframe aimbot targeting menu',
	},
	radarMinimap: {
		src: img('warframe-radar-hack-minimap.webp'),
		alt: 'Warframe radar hack 2D minimap showing enemy positions outside the camera view',
		title: 'Warframe radar hack minimap',
	},
	combatEsp: {
		src: img('warframe-cheats-combat-esp.webp'),
		alt: 'Warframe cheats combat ESP active during a Grineer heavy unit fight',
		title: 'Warframe combat ESP',
	},
	steelPathEsp: {
		src: img('warframe-steel-path-mission-esp.webp'),
		alt: 'Warframe Steel Path mission with ESP overlays on elite enemy units',
		title: 'Warframe Steel Path ESP',
	},
	sortieAimbot: {
		src: img('warframe-sortie-aimbot-combat.webp'),
		alt: 'Warframe Sortie combat with aimbot lock on a Corpus heavy unit',
		title: 'Warframe Sortie aimbot combat',
	},
	openWorldRadar: {
		src: img('warframe-open-world-radar.webp'),
		alt: 'Warframe open world radar and ESP on Plains of Eidolon bounty route',
		title: 'Warframe open world radar',
	},
	lootEsp: {
		src: img('warframe-loot-pickup-esp.webp'),
		alt: 'Warframe loot and pickup ESP markers for mods, resources, and health orbs',
		title: 'Warframe loot pickup ESP',
	},
	settingsPanel: {
		src: img('warframe-cheats-settings-panel.webp'),
		alt: 'Warframe cheats settings panel with hotkeys, colours, and module toggles',
		title: 'Warframe cheats settings panel',
	},
} as const satisfies Record<string, WarframeScreenshot>;

/** Pricing gallery — main viewer + thumbnail strip (no video). */
export const pricingGallery: WarframeScreenshot[] = [
	warframeScreenshots.mainMenu,
	warframeScreenshots.espOverlay,
	warframeScreenshots.espBoxes,
	warframeScreenshots.aimbotMenu,
	warframeScreenshots.radarMinimap,
	warframeScreenshots.combatEsp,
	warframeScreenshots.steelPathEsp,
	warframeScreenshots.sortieAimbot,
	warframeScreenshots.openWorldRadar,
	warframeScreenshots.lootEsp,
	warframeScreenshots.settingsPanel,
];

/** Feature page section screenshots keyed to productFeatureDetails ids. */
export const featureSectionImages: Record<'aimbot' | 'visual' | 'misc', WarframeScreenshot> = {
	aimbot: warframeScreenshots.sortieAimbot,
	visual: warframeScreenshots.espOverlay,
	misc: warframeScreenshots.radarMinimap,
};

/** Extra visuals shown below the feature breakdown grid. */
export const featureGallery: WarframeScreenshot[] = [
	warframeScreenshots.mainMenu,
	warframeScreenshots.espBoxes,
	warframeScreenshots.aimbotMenu,
	warframeScreenshots.combatEsp,
	warframeScreenshots.steelPathEsp,
	warframeScreenshots.openWorldRadar,
	warframeScreenshots.lootEsp,
	warframeScreenshots.settingsPanel,
];

const s = warframeScreenshots;

export const warframeImages = {
	hero: warframeHeroImage,
	cover: s.espOverlay.src,
	logo: siteConfig.logo,
	loadoutBuilder: s.aimbotMenu.src,
	aimbotCombat: s.sortieAimbot.src,
	squadFight: s.combatEsp.src,
	espWallhack: s.espBoxes.src,
	cheatsPackage: s.mainMenu.src,
	headerArt: s.settingsPanel.src,
	battleRoyaleCombat: s.steelPathEsp.src,
	rebootFight: s.radarMinimap.src,
	playerEsp: s.espOverlay.src,
	radarHack: s.radarMinimap.src,
	zeroBuildCombat: s.combatEsp.src,
	zeroBuildMode: s.espBoxes.src,
	openWorldTileset: s.openWorldRadar.src,
	product: [
		{ src: s.espOverlay.src, alt: s.espOverlay.alt },
		{ src: s.espBoxes.src, alt: s.espBoxes.alt },
		{ src: s.sortieAimbot.src, alt: s.sortieAimbot.alt },
		{ src: s.aimbotMenu.src, alt: s.aimbotMenu.alt },
		{ src: s.radarMinimap.src, alt: s.radarMinimap.alt },
	],
	gallery: [
		{ src: s.mainMenu.src, alt: s.mainMenu.alt, href: '/warframe-cheats/' },
		{ src: s.espOverlay.src, alt: s.espOverlay.alt, href: '/warframe-esp/' },
		{ src: s.espBoxes.src, alt: s.espBoxes.alt, href: '/warframe-wallhack/' },
		{ src: s.sortieAimbot.src, alt: s.sortieAimbot.alt, href: '/warframe-aimbot/' },
		{ src: s.settingsPanel.src, alt: s.settingsPanel.alt, href: '/features/' },
		{ src: s.radarMinimap.src, alt: s.radarMinimap.alt, href: '/warframe-radar/' },
		{ src: s.combatEsp.src, alt: s.combatEsp.alt, href: '/warframe-cheats/' },
	],
	sitemap: [
		{ src: s.mainMenu.src, title: 'Warframe Cheats | Undetected ESP & Aimbot', caption: s.mainMenu.alt },
		{ src: s.espOverlay.src, title: 'Warframe ESP overlay', caption: s.espOverlay.alt },
		{ src: s.espBoxes.src, title: 'Warframe wallhack ESP', caption: s.espBoxes.alt },
		{ src: s.sortieAimbot.src, title: 'Warframe aimbot targeting', caption: s.sortieAimbot.alt },
		{ src: s.aimbotMenu.src, title: 'Warframe aimbot menu', caption: s.aimbotMenu.alt },
		{ src: s.radarMinimap.src, title: 'Warframe radar hack', caption: s.radarMinimap.alt },
		{ src: s.combatEsp.src, title: 'Warframe Steel Path mission cheats', caption: s.combatEsp.alt },
		{ src: s.steelPathEsp.src, title: 'Warframe Steel Path ESP', caption: s.steelPathEsp.alt },
		{ src: s.openWorldRadar.src, title: 'Warframe open world radar', caption: s.openWorldRadar.alt },
		{ src: s.lootEsp.src, title: 'Warframe loot pickup ESP', caption: s.lootEsp.alt },
		{ src: s.settingsPanel.src, title: 'Warframe cheats settings panel', caption: s.settingsPanel.alt },
	],
} as const;
