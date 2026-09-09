/** Supabase-hosted Project Zomboid gameplay & cheat UI images. */
export const SUPABASE_GAMEPLAY_BASE =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/zomby';

export type GameplayImage = {
	src: string;
	alt: string;
	title: string;
};

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
} as const satisfies Record<string, GameplayImage>;
