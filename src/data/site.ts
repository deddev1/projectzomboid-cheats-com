import { gameplayImages } from './gameplay-images';

export const siteConfig = {
	name: 'Project Zomboid Cheats',
	url: 'https://projectzomboidcheats.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@projectzomboidcheats.com',
	logo: '/favicon.png',
	logoRaster: '/favicon.png',
	logoRasterWidth: 192,
	logoRasterHeight: 192,
	logoAlt: 'Project Zomboid Cheats logo',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fproject-zomboid',
	defaultOgImage: gameplayImages.cheatMenuUi.src,
} as const;

export const productInfo = {
	name: 'Project Zomboid Cheats',
	shortName: 'PZ',
	brand: 'Project Zomboid Cheats',
	tagline: 'Project Zomboid cheats for PC — ESP, aimbot, and wallhack with updates after anti-cheat patches',
	summary:
		'Project Zomboid Cheats is a Windows PC package with ESP, aimbot, and wallhack for Project Zomboid. It works in survival, multiplayer, and Knox County looting, and we update it after anti-cheat and game patches.',
	game: 'Project Zomboid',
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: ['Windows PC', 'Controllers'],
	updateCadence: 'Updates are published when Project Zomboid or anti-cheat patches require maintenance',
	supportHours: 'Support requests are reviewed daily',
	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	],
	currency: 'USD',
	planSummaries: {
		monthly: [
			'ESP, aimbot, wallhack, and radar',
			'30 days access — $35',
			'anti-cheat updates while your license is active',
			'Instant digital delivery on Windows PC',
		],
		lifetime: [
			'ESP, aimbot, wallhack, and radar',
			'One-time $150 — no renewals',
			'anti-cheat updates for as long as you play',
			'Instant digital delivery on Windows PC',
		],
	},
	features: {
		esp: [
			'Player & zombie ESP across survival, multiplayer, and Knox County looting',
			'Enemy unit, special infected, and special infected outlines through terrain and obstacles',
			'Health and status markers for zombies and survivors',
			'Distance readouts and snapline options',
			'Toggleable ESP categories to cut overlay noise',
			'Team and enemy colour coding for group fights',
		],
		aimbot: [
			'Smooth aim targeting for melee weapons, firearms, and shotguns',
			'Smoothness, FOV, and sensitivity controls',
			'Headshot priority and target selection options',
			'Hotkey toggles mid-combat without opening menus',
			'Per-weapon profiles for pistols, shotguns, and rifles',
		],
		radar: [
			'2D radar for enemies outside your line of sight',
			'Directional cues for flanks and horde pushes',
			'Configurable radar range for early rotations',
		],
		general: [
			'In-client toggles for ESP, radar, and aimbot',
			'Monthly and lifetime licenses',
			'Anti-cheat maintenance notes after Project Zomboid patches',
			'Setup, delivery, and billing support',
		],
	},
} as const;

/** Quick-scan feature list for pricing page — full explanations live on /features/. */
export const productFeatureCategories = [
	{
		title: 'Combat assist',
		columns: 1 as const,
		items: [
			'Line-of-sight visibility check',
			'Custom FOV arc',
			'FOV circle overlay',
			'Target snapline',
			'Custom aim hotkey',
			'Hold & toggle aim modes',
			'Aim smoothing slider',
			'Target type filter',
			'Headshot targeting',
			'Per-weapon profiles',
		],
	},
	{
		title: 'ESP & overlays',
		columns: 1 as const,
		items: [
			'Zombie, survivor & loot ESP',
			'Outlines through terrain',
			'Zombie bounding boxes',
			'Headshot markers',
			'Zombie facing indicator',
			'Entity name labels',
			'Distance readout',
			'ESP distance filter',
			'Health orb & pickup ESP',
			'Boss zombie & special infected ESP',
		],
	},
	{
		title: 'Radar & mission tools',
		columns: 2 as const,
		items: [
			'2D off-screen radar',
			'Defense wave direction cues',
			'In-session hotkey toggles',
			'Hotkey profiles',
			'Controller support',
			'Patch maintenance status',
			'In-game mod menu',
			'Loot & container markers',
			'Stamina and status tracking',
			'Custom crosshair',
			'Squad colour coding',
			'Survival & horde presets',
		],
	},
] as const;

/** Detailed feature explanations for the /features/ page. */
export const productFeatureDetails = [
	{
		id: 'aimbot',
		title: 'Combat assist',
		summary:
			'Configurable aim assistance for melee weapons, firearms, and shotguns — tuned for survival, multiplayer, and Knox County looting.',
		items: [
			{
				name: 'Line-of-sight visibility check',
				description:
					'Only locks onto enemies your character can actually hit — reduces obvious snaps through walls and building walls.',
			},
			{
				name: 'Custom FOV arc',
				description:
					'Set how wide the aimbot scans for zombies, survivors, and special infected so close fights and sniper lanes both feel natural.',
			},
			{
				name: 'FOV circle overlay',
				description: 'Optional on-screen ring showing the active aimbot radius for quick tuning in zombie hordes and loot trips.',
			},
			{
				name: 'Target snapline',
				description:
					'Snapline from crosshair to the current lock — useful for verifying headshot priority on special infected and tough zombies.',
			},
			{
				name: 'Custom aim hotkey',
				description: 'Hold or toggle aimbot with a key you choose — works alongside controller bindings on Windows PC.',
			},
			{
				name: 'Hold & toggle aim modes',
				description: 'Switch between hold-to-aim, toggle, and always-on profiles per weapon class.',
			},
			{
				name: 'Aim smoothing slider',
				description: 'Control how fast the reticle moves to the target — higher smoothness looks more natural in public servers.',
			},
			{
				name: 'Target type filter',
				description:
					'Prioritise closest enemy, lowest health, special infected, or bosses like special infected and boss zombies.',
			},
			{
				name: 'Headshot targeting',
				description:
					'Bias locks toward headshot hitboxes on zombies, survivors, and special infected.',
			},
			{
				name: 'Per-weapon profiles',
				description:
					'Save separate aim settings for rifles, shotguns, snipers, and melee — swap mid-session without retuning.',
			},
		],
	},
	{
		id: 'visual',
		title: 'ESP & overlays',
		summary:
			'ESP and wallhack overlays that surface enemies, loot, and mission threats through terrain and building cover.',
		items: [
			{
				name: 'Zombie, survivor & loot ESP',
				description:
					'Highlights zombies and survivors with boxes, health bars, and distance readouts across the Knox County map.',
			},
			{
				name: 'Outlines through terrain',
				description:
					'Clean outlines on zombies, survivors, and special infected — even through smoke, cover, and building cover.',
			},
			{
				name: 'Zombie bounding boxes',
				description: 'Box ESP sized to each unit type for precise reads during melee combat and Knox County loot trips.',
			},
			{
				name: 'Headshot markers',
				description: 'Mark headshot hitboxes for precision shots on special infected, special infected, and tough infected fights.',
			},
			{
				name: 'Zombie facing indicator',
				description: 'See which way an enemy is facing before you push a corridor or capture a safehouse perimeter.',
			},
			{
				name: 'Entity name labels',
				description: 'Display unit names above ESP boxes — walkers, runners, crawlers, and sprinters.',
			},
			{
				name: 'Distance readout',
				description: 'Meters-to-target on every box so you know when to swap weapons or abilities.',
			},
			{
				name: 'ESP distance filter',
				description:
					'Hide far-away clutter — keep overlays readable in Knox County and Riverside, and horde waves.',
			},
			{
				name: 'Health orb & pickup ESP',
				description: 'Mark medical supplies, food, and ammo during long survival and loot trips.',
			},
			{
				name: 'Boss zombie & special infected ESP',
				description:
					'Dedicated styling for special infected, boss zombies, and horde leaders in late-game hordes.',
			},
		],
	},
	{
		id: 'misc',
		title: 'Radar & mission tools',
		summary:
			'Radar, menu toggles, controller support, and quality-of-life tools bundled with every license.',
		items: [
			{
				name: '2D off-screen radar',
				description: 'Minimap-style blips for enemies outside your camera — great for zombie hordes, survival, and loot runs.',
			},
			{
				name: 'Defense wave direction cues',
				description: 'Directional hints when new enemy waves push toward your base defense or survival objective.',
			},
			{
				name: 'In-session hotkey toggles',
				description: 'Flip ESP, radar, and aimbot on or off mid-session without alt-tabbing.',
			},
			{
				name: 'Hotkey profiles',
				description: 'Save different bind layouts for mouse/keyboard and controller loadouts.',
			},
			{
				name: 'Controller support',
				description: 'Aimbot and menu navigation tested with Xbox and PlayStation pads on Windows.',
			},
			{
				name: 'Patch maintenance status',
				description: 'Maintenance status published on Updates after The Indie Stone and Project Zomboid patches.',
			},
			{
				name: 'In-game mod menu',
				description: 'Full in-game menu for colours, categories, and per-module enable/disable.',
			},
			{
				name: 'Loot & container markers',
				description: 'Highlight resources, items, and containers during town looting, warehouse runs, and Knox County routes.',
			},
			{
				name: 'Stamina and status tracking',
				description: 'Track enemy status timers and your own cooldowns during complex special infected fights.',
			},
			{
				name: 'Custom crosshair',
				description: 'Replace the default reticle with sizes and colours that match your ESP theme.',
			},
			{
				name: 'Squad colour coding',
				description: 'Separate colours for your squad members, allies, and enemies in public servers.',
			},
			{
				name: 'Survival & horde presets',
				description:
					'One-click ESP and radar profiles tuned for horde density and sandbox population settings.',
			},
		],
	},
] as const;

export const trustSignals = {
	status: 'Online',
	statusNote: 'Project Zomboid Cheats is live for Project Zomboid on Windows PC.',
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: 'Anti-cheat maintenance supported',
} as const;

export const seoLandingPages = [
	{ label: 'Project Zomboid Cheats', href: '/project-zomboid-cheats/' },
	{ label: 'Project Zomboid ESP', href: '/project-zomboid-esp/' },
	{ label: 'Project Zomboid Aimbot', href: '/project-zomboid-aimbot/' },
	{ label: 'Project Zomboid wallhack', href: '/project-zomboid-wallhack/' },
	{ label: 'Undetected status', href: '/project-zomboid-cheats/' },
	{ label: 'Pricing', href: '/pricing/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/project-zomboid-cheats/' },
	{ label: 'Aimbot', href: '/project-zomboid-aimbot/' },
	{ label: 'ESP', href: '/project-zomboid-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: 'Project Zomboid update log', href: '/updates/' },
	{ label: 'Contact support', href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: 'Home', href: '/' },
	{ label: 'Project Zomboid Cheats', href: '/project-zomboid-cheats/' },
	{ label: 'ESP', href: '/project-zomboid-esp/' },
	{ label: 'Aimbot', href: '/project-zomboid-aimbot/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const homeFaqs = [
	{
		category: 'Getting started',
		question: 'What is Project Zomboid Cheats?',
		answer:
			'Project Zomboid Cheats is a maintained Windows PC package for <a href="https://projectzomboid.com/" target="_blank" rel="noopener noreferrer">Project Zomboid</a> with <a href="/project-zomboid-esp/">ESP page</a>, <a href="/project-zomboid-wallhack/">wallhack</a>, <a href="/project-zomboid-radar/">radar</a>, and <a href="/project-zomboid-aimbot/">aimbot</a> controls. One license covers the full feature set plus <a href="/setup/">setup help</a>.',
	},
	{
		category: 'Getting started',
		question: 'What is included in one license?',
		answer:
			'Zombie ESP boxes, health and loot markers, 2D radar overlays, and configurable aim assist — including per-weapon profiles and optional cloud DMA. See the <a href="/features/">full feature list</a> and compare <a href="/pricing/">license plans</a>.',
	},
	{
		category: 'Getting started',
		question: 'How are licenses delivered after checkout?',
		answer:
			'Licenses are delivered digitally after payment clears. Delivery timing can vary slightly by payment method. Keep your order confirmation handy if you contact <a href="/support/">our support team</a>.',
	},
	{
		category: 'Features & gameplay',
		question: 'Does this work for survival, multiplayer, and Knox County?',
		answer:
			'Yes. ESP and radar help you read enemy positions in survival and during hordes, and <a href="/blog/project-zomboid-loot-farming-guide/">Knox County</a> towns like Muldraugh, West Point, and Riverside. Aim assist covers pistol, shotgun, and rifle profiles for solo or multiplayer.',
	},
	{
		category: 'Features & gameplay',
		question: 'Can I use a controller?',
		answer:
			'Controller support is available on Windows PC with adjustable FOV and aim settings. Menu navigation with a pad takes a little practice — see the <a href="/setup/">setup guide</a> for baseline values and <a href="/reviews/">player reviews</a> from controller players.',
	},
	{
		category: 'Features & gameplay',
		question: 'What is cloud DMA and do I need it?',
		answer:
			'Cloud DMA is an optional setup path for buyers who want hardware-assisted isolation instead of a standard loader. Most players start with the regular package. Read the <a href="/project-zomboid-cheats/">main guide</a> and ask <a href="/support/">support</a> before choosing DMA.',
	},
	{
		category: 'Updates & support',
		question: 'Is Project Zomboid Cheats permanently undetected?',
		answer:
			'No tool can promise permanent undetected status. Project Zomboid is maintained by <a href="https://projectzomboid.com/" target="_blank" rel="noopener noreferrer">The Indie Stone</a> and receives regular patches. We rebuild after anti-cheat updates and post status on the <a href="/updates/">status page</a> — check there before you load in.',
	},
	{
		category: 'Updates & support',
		question: 'Where do I check status after a Project Zomboid patch?',
		answer:
			'Start with our <a href="/updates/">Updates page</a>, then cross-check <a href="https://projectzomboid.com/blog/" target="_blank" rel="noopener noreferrer">official PC update notes</a>. For how patches affect gameplay, read our <a href="/blog/project-zomboid-patch-notes-guide/">patch notes guide</a>.',
	},
	{
		category: 'Updates & support',
		question: 'How do I contact support?',
		answer:
			'Use the <a href="/support/">Support page</a> or email support@projectzomboidcheats.com with your order ID, Windows version, and a short description of the issue. Refund questions are covered on the <a href="/refund-policy/">refund policy</a> page.',
	},
] as const;

export const seoFaqs = [
	...homeFaqs,
	{
		category: 'Product details',
		question: 'What is a Project Zomboid wallhack?',
		answer:
			'A Project Zomboid wallhack is an ESP overlay that highlights zombies, survivors, and special infected through terrain. Project Zomboid Cheats <a href="/project-zomboid-wallhack/">wallhack</a> includes distance readouts, category toggles, and team colours for survival and open-world Knox County.',
	},
	{
		category: 'Product details',
		question: 'Does Project Zomboid Cheats include a radar hack?',
		answer:
			'Yes. <a href="/project-zomboid-radar/">2D radar overlays</a> show nearby threats outside your direct view — useful for reading flanks during base defense, survival, and horde pushes.',
	},
	{
		category: 'Product details',
		question: 'How does anti-cheat affect Project Zomboid Cheats?',
		answer:
			'Anti-cheat monitors Project Zomboid on Windows PC. After major patches we publish maintenance notes on <a href="/updates/">Updates</a>. Read the <a href="/project-zomboid-cheats/">maintenance guide</a> and our <a href="/blog/undetected-project-zomboid-cheats-eac/">anti-cheat explainer</a> for what to expect on patch day.',
	},
	{
		category: 'Product details',
		question: 'Where can I read Project Zomboid game guides?',
		answer:
			'Our <a href="/blog/">blog</a> covers Project Zomboid gameplay modes, survival tips, zombie types, Knox County loot routes, and how to read official patch notes — with links to the <a href="https://pzwiki.net/wiki/Main_Page" target="_blank" rel="noopener noreferrer">PZ Wiki</a> and <a href="https://projectzomboid.com/game-guide" target="_blank" rel="noopener noreferrer">official game guide</a>.',
	},
] as const;

export type CustomerReview = {
	handle: string;
	title: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	{
		handle: 'krypt0_arc',
		title: 'Soft aim in survival',
		rating: 5,
		text: 'Using this for a few weeks in survival. Soft aim feels natural on rifles and I have not had issues in public servers. Took me a bit to figure out the menu layout but after that it has been smooth.',
		short: 'Using this for a few weeks in survival. Soft aim feels natural on rifles and I have not had issues in public servers.',
		slug: 'project-zomboid-soft-aim-review-xkrypt0',
		seoTitle: 'Soft aim review by @krypt0_arc | Project Zomboid Cheats',
		seoDescription:
			'Buyer review from @krypt0_arc on soft aim for survival after setup on Windows PC.',
		date: '2026-03-14',
	},
	{
		handle: 'extractR4K',
		title: 'ESP on Knox County',
		rating: 4,
		text: 'ESP helps a lot on Knox County and West Point when you are trying to spot hordes around corners before pushing the objective. Radar could be a little bigger on 1080p. Still happy with it for what I paid.',
		short: 'ESP helps on Knox County and West Point when spotting heavies before pushing the objective. Radar could be bigger on 1080p.',
		slug: 'project-zomboid-esp-realistic-review-buildsr4k',
		seoTitle: 'ESP review by @extractR4K | Project Zomboid Cheats',
		seoDescription:
			'Buyer review from @extractR4K on ESP boxes and radar during open-world Knox County.',
		date: '2026-02-08',
	},
	{
		handle: 'jakeDMA',
		title: 'Cloud DMA setup',
		rating: 5,
		text: 'I moved over from another tool that got flagged last patch. DMA setup sounded intimidating but support walked me through it on Discord in under an hour. Still running clean after the latest hotfix.',
		short: 'Moved from another tool that got flagged. Support walked me through DMA setup on Discord. Still running after the latest hotfix.',
		slug: 'zomboid-cloud-dma-review-dma-wizard',
		seoTitle: 'Cloud DMA review by @jakeDMA | Project Zomboid Cheats',
		seoDescription:
			'Buyer review from @jakeDMA on cloud DMA setup and patch-day stability.',
		date: '2026-01-22',
	},
	{
		handle: 'padWarMain',
		title: 'Controller support',
		rating: 4,
		text: 'Did not expect controller support to work this well. Aim assist needed some FOV tweaking with my Xbox pad. Opening the menu with a controller is clunky but playable.',
		short: 'Controller support works better than I expected. Needed some FOV tweaks with my Xbox pad.',
		slug: 'zomboid-controller-aimbot-review-ctrl-player99',
		seoTitle: 'Controller review by @padWarMain | Project Zomboid Cheats',
		seoDescription:
			'Buyer review from @padWarMain on aim assist and menu use with an Xbox controller.',
		date: '2026-04-02',
	},
	{
		handle: 'stormchaser07',
		title: 'Setup took patience',
		rating: 3,
		text: 'Features are solid once everything is running. First launch was annoying because Windows Defender flagged the loader. Not entirely their fault, but the setup guide could be clearer. Support replied in a couple hours with a fix. ESP and pickup markers work well in Project Zomboid.',
		short: 'Solid once running. Setup guide could be clearer and Defender flagged the loader at first. Support helped same day.',
		slug: 'zomboid-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup review by @stormchaser07 | Project Zomboid Cheats',
		seoDescription:
			'Honest buyer review from @stormchaser07 on first-time setup and support response time.',
		date: '2026-05-19',
	},
	{
		handle: 'loot_goblin_42',
		title: 'Resource ESP',
		rating: 5,
		text: 'Mostly bought this for loot tracking on long loot runs. Being able to see cooldowns and medical supplies without tabbing around saves a surprising amount of time.',
		short: 'Mostly bought for loot tracking in survival. Cooldown and pickup markers save a lot of time.',
		slug: 'zomboid-loot-esp-review-lootgoblinx',
		seoTitle: 'Resource ESP review by @loot_goblin_42 | Project Zomboid Cheats',
		seoDescription:
			'Buyer review from @loot_goblin_42 on resource ESP, cooldown markers, and loot runs.',
		date: '2026-06-11',
	},
	{
		handle: 'steelpath42',
		title: 'Weapon profiles',
		rating: 4,
		text: 'Been on this since early access. Separate profiles for pistol and shotgun actually matter in tight map zones. Only gripe is waiting about a day for an update after one patch. Updates page helped at least.',
		short: 'Separate pistol and shotgun profiles matter in tight map zones. Waited about a day for one patch update.',
		slug: 'project-zomboid-aimbot-realistic-review-steelpathgrind42',
		seoTitle: 'Aim profiles review by @steelpath42 | Project Zomboid Cheats',
		seoDescription:
			'Buyer review from @steelpath42 on per-weapon aim profiles and post-patch update timing.',
		date: '2026-03-28',
	},
	{
		handle: 'vanlife_arc',
		title: 'Radar on horde defense',
		rating: 5,
		text: 'Radar makes horde waves way less chaotic. Seeing flank routes before they reach your safe house is huge when you are in a pub squad and nobody is calling horde spawns.',
		short: 'Radar makes horde waves less chaotic. Seeing flank routes before they reach your safe house is huge in pub squads.',
		slug: 'project-zomboid-radar-hack-review-vanlifefn',
		seoTitle: 'Radar review by @vanlife_arc | Project Zomboid Cheats',
		seoDescription:
			'Buyer review from @vanlife_arc on radar during zombie hordes and multiplayer.',
		date: '2026-07-03',
	},
	{
		handle: 'patchdaymike',
		title: 'Patch day downtime',
		rating: 4,
		text: 'Every cheat goes down on patch day. Difference here is they posted a status update within a few hours and I was back the next morning. That is about all you can ask for.',
		short: 'Goes down on patch day like everything else. Status update within a few hours and back the next morning.',
		slug: 'zomboid-anti-cheat-update-review-patchdaymike',
		seoTitle: 'Patch day review by @patchdaymike | Project Zomboid Cheats',
		seoDescription:
			'Buyer review from @patchdaymike on downtime and communication after a Project Zomboid patch.',
		date: '2026-02-27',
	},
	{
		handle: 'snipezonly',
		title: 'Sniper profile',
		rating: 5,
		text: 'Sniper profile plus ESP tags is exactly what I wanted for Knox County loot runs. No complaints so far.',
		short: 'Sniper profile plus ESP tags is exactly what I wanted for Knox County loot runs.',
		slug: 'zomboid-sniper-aimbot-review-snipezonly',
		seoTitle: 'Sniper profile review by @snipezonly | Project Zomboid Cheats',
		seoDescription:
			'Buyer review from @snipezonly on the sniper aim profile and ESP tagging.',
		date: '2026-07-21',
	},
	{
		handle: 'nightowl_pc',
		title: 'Monthly sub',
		rating: 4,
		text: 'Started on monthly to test it before committing. Performance has been stable enough that I will probably grab lifetime next sale. Menu is a little crowded but you get used to it.',
		short: 'Started monthly to test it. Stable enough that I will probably grab lifetime next sale.',
		slug: 'zomboid-monthly-sub-review-nightowl',
		seoTitle: 'Monthly sub review by @nightowl_pc | Project Zomboid Cheats',
		seoDescription:
			'Buyer review from @nightowl_pc on trying the monthly plan before upgrading.',
		date: '2026-05-06',
	},
	{
		handle: 'oldvet_wf',
		title: 'Lifetime key',
		rating: 5,
		text: 'Picked up lifetime after bouncing between free menus for years. Having one package with ESP, aim assist, and radar that actually gets updated is worth it to me.',
		short: 'Picked up lifetime after years of bouncing between free menus. One package that actually gets updated.',
		slug: 'zomboid-lifetime-key-review-oldvet',
		seoTitle: 'Lifetime key review by @oldvet_wf | Project Zomboid Cheats',
		seoDescription:
			'Buyer review from @oldvet_wf on switching to a lifetime Project Zomboid Cheats key.',
		date: '2026-01-09',
	},
	{
		handle: 'duoqueue',
		title: 'Playing with a friend',
		rating: 4,
		text: 'Me and a friend both run it for duo survival runs. ESP and radar make callouts way easier when we are on voice and not staring at the same screen. Wish there was a cleaner way to reset settings between missions.',
		short: 'Friend and I both run it for duo survival runs. ESP and radar make callouts easier on voice.',
		slug: 'zomboid-squad-play-review-duoqueue',
		seoTitle: 'Squad play review by @duoqueue | Project Zomboid Cheats',
		seoDescription:
			'Buyer review from @duoqueue on using ESP and radar during duo survival runs.',
		date: '2026-04-18',
	},
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating:
		Math.round(
			(customerReviews.reduce((sum, review) => sum + review.rating, 0) / customerReviews.length) * 10,
		) / 10,
	totalCount: customerReviews.length,
} as const;
