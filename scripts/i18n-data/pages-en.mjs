import { HERO_IMAGES, PAGE_IMAGE_ALTS, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Project Zomboid Cheats 2026 | ESP, Aimbot & Hacks for PC',
		description:
			'Project Zomboid cheats for Windows PC — ESP, aimbot, wallhack & radar. $35/mo or $150 lifetime. Setup guides, patch updates & buyer reviews.',
		h1: 'Project Zomboid Cheats',
		intro:
			'A focused Windows PC package for Project Zomboid: Zombie ESP, aimbot controls, and wallhack overlays with Project Zomboid anti-cheat maintenance after major patches.',
		imageAlt: 'Project Zomboid cheats main menu with ESP wallhack and soft aim toggles on PC',
		galleryTitle: 'Project Zomboid Cheats visuals',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Built for survival pressure',
				'Project Zomboid punishes incomplete information. Project Zomboid Cheats puts ESP, wallhack, and aimbot in one license so you can read multiplayer servers, flank pushes, and team pushes before you commit.',
				`Client and anti-cheat updates come from ${EXT.epic} and ${EXT.eac}. When a patch needs a rebuild, we post status on the <a href="/updates/">Updates page</a> — no permanent “undetected forever” promises.`,
				'Monthly ($35) and lifetime ($150) licenses ship digitally after payment confirmation, with maintenance rebuilds when anti-cheat or game updates require them.',
				'Compare the <a href="/project-zomboid-cheats/">Project Zomboid Cheats guide</a>, <a href="/project-zomboid-esp/">ESP</a>, <a href="/project-zomboid-aimbot/">Aimbot</a>, and <a href="/project-zomboid-cheats/">undetected status</a> pages before checkout.',
			),
			section(
				'One license, clear controls',
				'Instead of stacking separate tools, you get Zombie ESP, medical supply markers, radar cues, and aimbot profiles in a single package aimed at Knox County survival and looting.',
				'Details live on the <a href="/project-zomboid-esp/">ESP</a>, <a href="/project-zomboid-aimbot/">Aimbot</a>, <a href="/project-zomboid-wallhack/">wallhack</a>, and <a href="/features/">features</a> pages — or jump to <a href="/pricing/">Pricing</a> for plans.',
				`On patch mornings, check ${EXT.status}, then confirm our maintenance notes so you are not loading an outdated build.`,
				'Ready? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> handy.',
			),
		],
	},
	'project-zomboid-esp': {
		title: 'Project Zomboid ESP 2026 | Wallhack & Enemy Boxes for PC',
		description:
			'Project Zomboid ESP wallhack — enemy boxes, health bars, loot markers & distance readouts. Bundled with aimbot & radar in one license.',
		h1: 'Project Zomboid ESP — Wallhack & Enemy Boxes',
		intro:
			'Visibility tools for Project Zomboid. Read zombies and survivors, lockers, loot containers, and pickups, and distance before you commit to a fight — with toggleable ESP wallhack overlays for open-world Knox County looting.',
		imageAlt: 'Project Zomboid ESP overlay with enemy outline boxes, health bars, and distance readouts',
		galleryTitle: 'Project Zomboid ESP overlay visuals',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'Project Zomboid wallhack guide',
		ctaSecondaryHref: '/project-zomboid-wallhack/',
		sections: [
			section(
				'What Project Zomboid ESP solves in combat',
				'Project Zomboid sessions punish incomplete information. Project Zomboid Cheats ESP wallhack helps you spot zombies and survivors early, spot special infected before they push your position, and mark containers and crates worth the detour.',
				'In towns, multiplayer servers, and open-world runs, that visibility gap is often the difference between a clean flanking and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Project Zomboid live updates and map zone changes are published by ${EXT.epic}. When map zones or loot rules shift, ESP categories stay useful because they track enemies and containers — not a single static landmark.`,
			),
			section(
				'Enemy, special infected, and player ESP wallhack categories',
				'Toggle zombie or survivor outlines, special infected threat cues, pickup awareness markers, and loot or chest pins so only session-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports multiplayer servers and multiplayer squads alike.',
				'Compare category detail on the <a href="/project-zomboid-wallhack/">wallhack page</a> and pair visibility with the <a href="/project-zomboid-radar/">radar hack</a> for flanks outside your FOV.',
				[
					'zombie or survivor ESP outlines with distance',
					'loot and container markers for faster rotations',
					'special infected and pickup threat cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with anti-cheat maintenance',
				'Project Zomboid Cheats ESP wallhack is maintained for Project Zomboid with rebuilds after Project Zomboid anti-cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/project-zomboid-cheats/">anti-cheat maintenance maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first game session.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/project-zomboid-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/project-zomboid-cheats/">best Project Zomboid cheats guide</a> and <a href="/project-zomboid-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'project-zomboid-aimbot': {
		title: 'Project Zomboid Aimbot 2026 | Soft Aim for PC & Controller',
		description:
			'Project Zomboid aimbot with FOV, smoothing & headshot targeting. Per-weapon profiles for rifles, shotguns & snipers. Windows PC.',
		h1: 'Project Zomboid Aimbot — Soft Aim for PC & Controller',
		intro:
			'Configurable Aimbot tools for Project Zomboid combat. Smoothness, FOV, head priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Project Zomboid cheats cheat menu with soft aim, FOV slider, and head priority settings',
		galleryTitle: 'Project Zomboid Aimbot combat previews',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/project-zomboid-esp/',
		sections: [
			section(
				'Aimbot tuned for Project Zomboid combat pace',
				'Project Zomboid mixes long-range firearm fights with close-quarters shotgun pushes. Project Zomboid Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-session.',
				'Head priority and target selection options cover closest enemy, lowest health, or highest-threat targets during group fights and horde waves and horde modifiers.',
				`Weapon balance and season rules change via ${EXT.rust}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live kill time windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for pistols, shotguns, and rifles. Switch between long-range rifle shots and close-quarters room clears without reopening menus every horde spawn.',
				'Prefer softer tracking? Read the <a href="/project-zomboid-aimbot/">soft aim guide</a>. Want the search term most players use? See <a href="/project-zomboid-aimbot/">aimbot hack</a>.',
				'Aimbot ships alongside <a href="/project-zomboid-esp/">ESP wallhack</a> and <a href="/project-zomboid-radar/">2D radar</a> in the same Project Zomboid Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Head priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-session',
					'Per-weapon profile slots for rifle/ shotgun / sniper',
				],
			),
			section(
				'anti-cheat maintenance for undetected Aimbot',
				'Project Zomboid Cheats rebuilds Aimbot behavior when Project Zomboid anti-cheat or major Project Zomboid patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/project-zomboid-cheats/">anti-cheat maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Project Zomboid Cheats Features | ESP, Aimbot & Radar',
		description:
			'Full Project Zomboid cheats feature list — ESP, soft aim, radar, hotkeys & controller support. Review every toggle before checkout.',
		h1: 'Project Zomboid Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the Project Zomboid Cheats package for Project Zomboid on Windows PC — with anti-cheat maintenance after major patches.',
		imageAlt: 'Project Zomboid ESP overlay with zombie boxes and health bars',
		galleryTitle: 'Project Zomboid Cheats feature gallery',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'zombie or survivor ESP wallhack, special infected and pickup threat cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for session-critical overlays only.',
				'Team and enemy colour coding supports multiplayer servers and survival runs. Deep-dive the <a href="/project-zomboid-esp/">ESP page</a> and <a href="/project-zomboid-wallhack/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.epic} season updates — toggleable ESP categories keep overlays useful when map zones rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and horde clusters, plus Aimbot smoothness, FOV, head priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Project Zomboid sessions. See <a href="/project-zomboid-radar/">radar</a> and <a href="/project-zomboid-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/features/">mod menu page</a> explains mid-session toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and anti-cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. anti-cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@projectzomboidcheats.com.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/project-zomboid-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Buy Project Zomboid Cheats | $35/mo or $150 Lifetime',
		description:
			'Buy Project Zomboid cheats — $35/month or $150 lifetime. ESP, aimbot & wallhack included. Instant digital delivery on Windows PC.',
		h1: 'Project Zomboid Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Project Zomboid Cheats — ESP wallhack, radar hack, and Aimbot for Project Zomboid on Windows PC. Instant digital delivery after payment.',
		imageAlt: 'Project Zomboid wallhack ESP showing zombies and survivors and special infected through objective corners',
		galleryTitle: 'Project Zomboid Cheats package visuals',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Project Zomboid Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with anti-cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Project Zomboid Cheats package — ideal if you play Project Zomboid regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'zombie ESP wallhack, medical supply markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Project Zomboid anti-cheat or major Project Zomboid patches.',
				`update calendars and client updates come from ${EXT.rust}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/project-zomboid-cheats/">best Project Zomboid cheats</a>, <a href="/project-zomboid-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Project Zomboid Cheats Setup | Install Guide for Windows PC',
		description:
			'Install Project Zomboid cheats on Windows 10/11. Activate your license, tune ESP & aimbot profiles, check patch status before queueing.',
		h1: 'Project Zomboid Cheats Setup — PC & Controller Guide',
		intro:
			'Install and configure Project Zomboid Cheats for Project Zomboid on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify anti-cheat maintenance status before queueing.',
		imageAlt: 'Project Zomboid aimbot hitbox lock on zombie or survivor during survival run fight',
		galleryTitle: 'Project Zomboid Cheats setup visuals',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Project Zomboid Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest anti-cheat maintenance build before launching Project Zomboid.',
				`Also glance at ${EXT.status} if Project Zomboid servers look unstable on patch day — a platform outage is not a license fault.`,
				'Project Zomboid Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for enemies, pickups, and lockers — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-session. Details for each module live on <a href="/project-zomboid-esp/">ESP</a>, <a href="/project-zomboid-aimbot/">Aimbot</a>, and <a href="/features/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/project-zomboid-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Project Zomboid or Project Zomboid anti-cheat patches',
				'When The Indie Stone ships a major Project Zomboid update or Project Zomboid anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/project-zomboid-cheats/">anti-cheat maintenance page</a> and <a href="/project-zomboid-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Project Zomboid Cheats Updates | Patch Status Log 2026',
		description:
			'Check Project Zomboid Cheats patch status for Windows PC. ESP, aimbot & radar rebuild notes after game and anti-cheat updates — verify before you queue.',
		h1: 'Project Zomboid Cheats Update Log',
		intro:
			'Official maintenance log for Project Zomboid Cheats on Windows PC. Track ESP, aimbot, and radar rebuild status after The Indie Stone patches and anti-cheat updates — check here before you launch.',
		imageAlt:
			'Project Zomboid Cheats update status screen showing ESP, aimbot, and radar maintenance after a game patch on Windows PC',
		galleryTitle: 'Project Zomboid cheat maintenance and patch-day visuals',
		ctaPrimary: 'Get Project Zomboid Cheats',
		ctaSecondary: 'Undetected cheats guide',
		ctaSecondaryHref: '/project-zomboid-cheats/',
		sections: [
			section(
				'Why check Project Zomboid cheat updates before playing?',
				'Project Zomboid and its anti-cheat receive regular patches from The Indie Stone. When a build changes, ESP wallhack overlays, radar cues, and aimbot profiles may need a maintenance rebuild.',
				`Use ${EXT.status} for launcher health and this page for Project Zomboid Cheats build status — both matter on patch day.`,
				'Checking the update log before you queue in survival or multiplayer avoids loading an outdated client after major Knox County updates.',
			),
			section(
				'What each maintenance update includes',
				'Entries cover anti-cheat compatibility status, rebuilt ESP wallhack modules, radar range fixes, aimbot tuning after weapon balance changes, and delivery of new builds to active monthly and lifetime licenses.',
				'Lifetime ($150) and monthly ($35) subscribers receive rebuild access during an active license. See <a href="/pricing/">Pricing</a> to renew or upgrade.',
				'For background on why rebuilds happen, read the <a href="/project-zomboid-cheats/">undetected Project Zomboid cheats guide</a> and <a href="/setup/">Setup</a> walkthrough.',
			),
			section(
				'How to stay undetected after a Project Zomboid patch',
				'No cheat can guarantee permanent undetected status. Pair maintenance rebuilds with conservative in-game settings and patch-day awareness.',
				`Follow official notes from ${EXT.rust}, then confirm our rebuild is live on this page before you load in.`,
				'Questions after an anti-cheat update? Contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Project Zomboid Cheats FAQ | ESP, Aimbot & Safety',
		description:
			'Project Zomboid cheats FAQ — licensing, ESP, aimbot, controller support, patch-day status & pricing. Clear answers before you buy.',
		h1: 'Project Zomboid Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Project Zomboid Cheats — ESP wallhack, radar hack, Aimbot, anti-cheat maintenance, checkout, and Project Zomboid compatibility on Windows PC.',
		imageAlt: 'Project Zomboid radar hack 2D minimap overlay showing zombie horde spawn routes and zombies and survivors and special infected',
		galleryTitle: 'Project Zomboid Cheats FAQ visuals',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Project Zomboid Cheats?',
				'Project Zomboid Cheats is an undetected cheat package for Project Zomboid on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with anti-cheat maintenance updates.',
				'Packages cover survival and multiplayer servers. Explore <a href="/features/">Features</a> for the full control list and <a href="/project-zomboid-esp/">ESP</a> / <a href="/project-zomboid-aimbot/">Aimbot</a> for module detail.',
				`Project Zomboid is developed and published by ${EXT.epic}. Cheats are third-party tools and may violate The Indie Stone's Terms of Service — use is at your own risk.`,
			),
			section(
				'Are Project Zomboid Cheats undetected in 2026?',
				'Project Zomboid Cheats is maintained with rebuilds after Project Zomboid anti-cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/project-zomboid-cheats/">undetected Project Zomboid cheats</a> and the <a href="/project-zomboid-cheats/">anti-cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@projectzomboidcheats.com or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Project Zomboid Cheats Support | Contact & Help',
		description:
			'Contact Project Zomboid Cheats support for licenses, setup & billing. Email support@projectzomboidcheats.com with your order ID.',
		h1: 'Project Zomboid Cheats Support — Contact Us',
		intro:
			'Get help with Project Zomboid Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and anti-cheat maintenance for Project Zomboid on Windows PC.',
		imageAlt: 'Project Zomboid cheats loot runs objective fight with ESP boxes and aimbot active',
		galleryTitle: 'Project Zomboid Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after anti-cheat maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Project Zomboid Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for The Indie Stone bans.',
				`Account and game policy questions belong with ${EXT.epic}. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. anti-cheat maintenance notes live on the dedicated <a href="/project-zomboid-cheats/">Project Zomboid anti-cheat page</a>.',
				'Email: support@projectzomboidcheats.com',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Project Zomboid Cheats 2026 | Anti-cheat safe',
		description:
			'Undetected Project Zomboid Cheats with anti-cheat maintenance for ESP boxes, soft aim, and cloud DMA on PC and controllers. Check status before you queue.',
		h1: 'Undetected Project Zomboid Cheats — Anti-cheat maintenance',
		intro:
			'How Project Zomboid Cheats stays maintained for Project Zomboid after Project Zomboid anti-cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: 'Project Zomboid wallhack ESP skeleton boxes on zombies and survivors and special infected through map geometry',
		galleryTitle: 'Undetected Project Zomboid Cheats visuals',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'anti-cheat maintenance guide',
		ctaSecondaryHref: '/project-zomboid-cheats/',
		sections: [
			section(
				'What undetected means for Project Zomboid Cheats',
				'Undetected Project Zomboid Cheats means the package is actively maintained against Project Zomboid anti-cheat and major Project Zomboid patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Project Zomboid anti-cheat updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; Project Zomboid client updates ship through ${EXT.epic}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'anti-cheat maintenance workflow',
				'When Project Zomboid anti-cheat or Project Zomboid updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for Project Zomboid outages that can look like product failures.`,
				'Deep technical workflow: <a href="/project-zomboid-cheats/">anti-cheat maintenance Project Zomboid guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/project-zomboid-cheats/">Project Zomboid cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Project Zomboid Wallhack 2026 | ESP Boxes Through Terrain',
		description:
			'Project Zomboid wallhack ESP highlights zombies, survivors, and special infected through cover. Toggle categories for survival & Knox County.',
		h1: 'Project Zomboid Wallhack — ESP Boxes & Visibility',
		intro:
			'Project Zomboid wallhack ESP for Project Zomboid — see enemies, pickups, and lockers through toggleable wallhack overlays built for open-world Knox County looting.',
		imageAlt: 'Project Zomboid wallhack ESP skeleton boxes on zombie or survivor hero in Project Zomboid',
		galleryTitle: 'Project Zomboid wallhack ESP gallery',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'Project Zomboid ESP page',
		ctaSecondaryHref: '/project-zomboid-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Project Zomboid wallhack focuses on information — enemy outlines, loot pins, special infected threat cues — rather than automatic aiming. Project Zomboid Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and horde waves.',
				'For the broader ESP keyword page see <a href="/project-zomboid-esp/">Project Zomboid ESP</a>; for combat assist see <a href="/project-zomboid-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support loot runs, multiplayer servers, and loot runs with distance readouts and snaplines for engagement control.',
				`map zone updates and map zone area changes are announced via ${EXT.rust}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/project-zomboid-radar/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Project Zomboid anti-cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/project-zomboid-cheats/">undetected Project Zomboid cheats</a> and <a href="/project-zomboid-cheats/">anti-cheat maintenance</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/project-zomboid-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Project Zomboid Radar Hack 2026 | 2D Minimap for Project Zomboid',
		description:
			'Project Zomboid radar hack shows off-screen enemies on a 2D minimap. Directional cues for horde defense, survival & multiplayer.',
		h1: 'Project Zomboid Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Project Zomboid — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: 'Project Zomboid ESP distance markers and zombie health readouts in Project Zomboid',
		galleryTitle: 'Project Zomboid radar hack visuals',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/project-zomboid-esp/',
		sections: [
			section(
				'Why radar hack matters in Project Zomboid',
				'Multi-floor map zones stack vertical fights — catwalks, doorways, and side horde spawns. A 2D radar overlay shows nearby enemy threats outside direct line of sight so you can reposition before a flank wave.',
				'Project Zomboid Cheats radar complements <a href="/project-zomboid-esp/">ESP wallhack</a> markers during horde pushes and horde clusters.',
				`Mode rules and seasonal changes come from ${EXT.epic}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight horde waves. Directional cues highlight flanks during building clears and special infected pushes across loot runs and multiplayer servers.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live missions — see the <a href="/features/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/project-zomboid-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive anti-cheat maintenance rebuilds with the full Project Zomboid Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Project Zomboid patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/project-zomboid-cheats/">undetected status</a>.',
			),
		],
	},
	'eac-bypass': {
		title: 'Project Zomboid Anti-Cheat Maintenance | Patch Guide',
		description:
			'How Project Zomboid Cheats rebuild after Project Zomboid anti-cheat patches — ESP, aimbot & radar maintenance for PC. Read before queueing.',
		h1: 'Project Zomboid Anti-Cheat — Maintenance Guide',
		intro:
			'Understand Project Zomboid anti-cheat maintenance for Project Zomboid Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Project Zomboid security updates.',
		imageAlt: 'Project Zomboid undetected hacks status with ESP overlay on zombies and survivors and special infected',
		galleryTitle: 'anti-cheat maintenance visuals',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Project Zomboid anti-cheat overview',
				`Project Zomboid anti-cheat is The Indie Stone’ anti-cheat for Project Zomboid on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Project Zomboid Cheats monitors anti-cheat patch notes and Project Zomboid seasonal updates from ${EXT.epic} to schedule module reviews.`,
				'“anti-cheat maintenance” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after an anti-cheat patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Project Zomboid service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/project-zomboid-cheats/">undetected Project Zomboid cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'anti-cheat maintenance in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Project Zomboid Cheats 2026 | Hacks with ESP & Cloud DMA',
		description:
			'Best Project Zomboid cheats 2026: ESP boxes, soft aim, and cloud DMA for PC and controllers. Undetected Project Zomboid Cheats with anti-cheat maintenance — compare and buy.',
		h1: 'Project Zomboid Cheats 2026 — ESP, Soft Aim & Cloud DMA',
		intro:
			'The 2026 Project Zomboid Cheats package for Project Zomboid — undetected ESP wallhack, radar hack, and Aimbot with anti-cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: 'Project Zomboid cheats main menu with ESP wallhack and soft aim toggles on PC',
		galleryTitle: 'Project Zomboid Cheats 2026 gallery',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why Project Zomboid Cheats leads in 2026',
				'2026 seasons bring new maps, weapons, and Project Zomboid anti-cheat updates. Project Zomboid Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official official patch messaging on ${EXT.rust}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover survival and multiplayer loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'zombie ESP wallhack, medical supply markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/project-zomboid-cheats/">Project Zomboid Cheats pillar</a>, <a href="/project-zomboid-esp/">ESP</a>, <a href="/project-zomboid-aimbot/">Aimbot</a>, <a href="/project-zomboid-wallhack/">wallhack</a>, <a href="/project-zomboid-radar/">radar</a>, <a href="/project-zomboid-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/project-zomboid-cheats/">Project Zomboid Cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/project-zomboid-cheats/">best Project Zomboid cheats</a> checklist, <a href="/blog/project-zomboid-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@projectzomboidcheats.com via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Undetected Project Zomboid Cheats 2026 | PC Hacks Guide',
		description:
			'Undetected Project Zomboid cheats with ESP, aimbot & wallhack for PC. Maintenance after patches, pricing & setup — no permanent undetected promises.',
		h1: 'Project Zomboid Cheats & Hacks — ESP, Aimbot & Wallhack',
		intro:
			'Project Zomboid cheats and hacks for survival, multiplayer, and Knox County combine ESP wallhack visibility, 2D radar threat cues, and aimbot controls in one Windows PC license — maintained after Project Zomboid anti-cheat patches. This is the pillar guide for Project Zomboid Cheats in 2026.',
		imageAlt: 'Project Zomboid cheats loot runs objective fight with ESP boxes and aimbot active',
		galleryTitle: 'Project Zomboid Cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/project-zomboid-cheats/',
		sections: [
			section(
				'What Project Zomboid Cheats include in 2026',
				'Players searching for Project Zomboid Cheats usually want visibility and combat tools without stacking separate downloads. Project Zomboid Cheats bundles zombie ESP wallhack, medical supply markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called Project Zomboid cheats.',
				'Coverage spans loot runs and multiplayer servers with in-client toggles for live missions. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.epic}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'Project Zomboid Cheats vs Project Zomboid cheats — same stack, clear pages',
				'Searchers use Project Zomboid Cheats and Project Zomboid cheats interchangeably. This pillar focuses on hacks language; the <a href="/project-zomboid-cheats/">Project Zomboid cheats 2026</a> and <a href="/project-zomboid-cheats/">best Project Zomboid cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/project-zomboid-esp/">Project Zomboid ESP</a>, <a href="/project-zomboid-aimbot/">Project Zomboid Aimbot</a>, <a href="/project-zomboid-wallhack/">wallhack</a>, <a href="/project-zomboid-radar/">radar hack</a>, and <a href="/project-zomboid-aimbot/">soft aim</a>.',
				'Blog guides expand each keyword: <a href="/blog/project-zomboid-cheats-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/project-zomboid-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-project-zomboid-cheats-eac/">undetected anti-cheat notes</a>.',
			),
			section(
				'Project Zomboid Cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Project Zomboid Cheats maps the full mission loop: read zombies and survivors, track containers and loot containers, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/project-zomboid-esp/">ESP</a>, <a href="/project-zomboid-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/pricing/">cheat download</a>, <a href="/features/">mod menu</a>, <a href="/project-zomboid-aimbot/">aimbot hack</a>, <a href="/project-zomboid-esp/">ESP hack</a>.',
			),
			section(
				'Undetected Project Zomboid Cheats with anti-cheat maintenance',
				'Undetected Project Zomboid Cheats require rebuilds after Project Zomboid anti-cheat and major Project Zomboid patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/project-zomboid-cheats/">anti-cheat maintenance guide</a> for the practical workflow. Pair with <a href="/project-zomboid-cheats/">undetected Project Zomboid cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Project Zomboid Hack Download 2026 | Instant Access',
		description:
			'Project Zomboid cheat download with instant license delivery — ESP boxes, soft aim, and cloud DMA for PC and controllers. Buy, activate, and play.',
		h1: 'Project Zomboid Hack Download — Instant License Delivery',
		intro:
			'How Project Zomboid cheat download works for Project Zomboid — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: 'Project Zomboid wallhack ESP showing zombies and survivors and special infected through objective corners',
		galleryTitle: 'Project Zomboid cheat download visuals',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Project Zomboid cheat download delivery works',
				'After checkout confirms payment, Project Zomboid Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Project Zomboid servers are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Project Zomboid cheat download includes zombie ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for open-world Knox County looting.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/project-zomboid-esp/">ESP</a>, <a href="/project-zomboid-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Project Zomboid or Project Zomboid anti-cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/project-zomboid-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Project Zomboid Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Project Zomboid mod menu for in-match toggles — ESP boxes, soft aim, radar, and cloud DMA on PC and controllers. Undetected Project Zomboid Cheats package.',
		h1: 'Project Zomboid Mod Menu — In-Client Control Panel',
		intro:
			'Project Zomboid mod menu controls for Project Zomboid — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-session without leaving your character session on Windows PC.',
		imageAlt: 'Project Zomboid cheats mod menu with soft aim profiles and ESP toggles',
		galleryTitle: 'Project Zomboid mod menu gallery',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Project Zomboid mod menu controls',
				'A Project Zomboid mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live missions. Project Zomboid Cheats keeps those toggles accessible with hotkeys.',
				'Toggle enemy outlines, medical supply markers, special infected cues, and per-weapon Aimbot settings without alt-tabbing out of Project Zomboid.',
				'Control deep-dives: <a href="/project-zomboid-esp/">ESP</a>, <a href="/project-zomboid-aimbot/">Aimbot</a>, <a href="/project-zomboid-radar/">radar</a>.',
			),
			section(
				'Mod menu categories for open-world Knox County looting',
				'Separate ESP wallhack categories for players, pickups, lockers, and caches let you reduce overlay noise during rotations and horde waves.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when Project Zomboid balance patches change fight distances and mobility.',
				'Soft tracking players should start with <a href="/project-zomboid-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after anti-cheat patches',
				'Project Zomboid mod menu behavior is rebuilt when Project Zomboid anti-cheat or major Project Zomboid updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/project-zomboid-cheats/">anti-cheat maintenance guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Project Zomboid Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Project Zomboid aimbot settings for natural tracking on PC and controllers. Smoothness, FOV, and head priority — included in our Project Zomboid Cheats with ESP boxes.',
		h1: 'Project Zomboid Soft Aim — Smooth Aimbot Controls',
		intro:
			'Project Zomboid aimbot settings for Project Zomboid — configurable Aimbot smoothness, FOV, head priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Project Zomboid aimbot ESP boxes and FOV circle on zombies and survivors and special infected in open-world Knox County',
		galleryTitle: 'Project Zomboid aimbot gallery',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/project-zomboid-aimbot/',
		sections: [
			section(
				'What Project Zomboid aimbot means',
				'Project Zomboid aimbot refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Project Zomboid Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in missions firefights.',
				'Head priority and target selection cover closest enemy, lowest health, or highest-threat targets during group fights.',
				'Full Aimbot documentation: <a href="/project-zomboid-aimbot/">Project Zomboid Aimbot</a>. Alternate wording: <a href="/project-zomboid-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for pistols, shotguns, and rifles. Switch between long-range rifle shots and close-quarters room clears with hotkeys mid-session.',
				`Weapon TTKs shift with ${EXT.rust} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/project-zomboid-esp/">ESP wallhack</a> and <a href="/project-zomboid-radar/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with anti-cheat maintenance',
				'Aimbot modules rebuild after Project Zomboid anti-cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Project Zomboid Cheats 2026 | Buyer Guide',
		description:
			'Best Project Zomboid Cheats for 2026: ESP boxes, soft aim, cloud DMA, and anti-cheat maintenance on PC and controllers. Use this checklist before checkout.',
		h1: 'Best Project Zomboid Cheats — 2026 Buyer Guide',
		intro:
			'Compare the best Project Zomboid cheats for Project Zomboid in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Project Zomboid anti-cheat rebuilds and instant delivery.',
		imageAlt: 'Project Zomboid wallhack ESP showing zombies and survivors and special infected through objective corners',
		galleryTitle: 'Best Project Zomboid cheats gallery',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the best Project Zomboid cheats in 2026',
				'The best Project Zomboid cheats combine active anti-cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Project Zomboid Cheats covers loot runs and multiplayer servers with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Project Zomboid cheats feature checklist',
				'Look for zombie ESP wallhack, medical supply markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Project Zomboid patches.',
				'Review <a href="/features/">Features</a>, <a href="/project-zomboid-cheats/">undetected status</a>, and <a href="/project-zomboid-cheats/">Project Zomboid cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/project-zomboid-esp/">ESP</a>, <a href="/project-zomboid-aimbot/">Aimbot</a>, <a href="/project-zomboid-cheats/">hacks</a>.',
			),
			section(
				'Buying the best Project Zomboid cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate The Indie Stone terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Project Zomboid Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Project Zomboid aimbot hack with soft aim for PC and controllers. FOV, head priority, and hotkeys — bundled with ESP boxes in our Project Zomboid Cheats package.',
		h1: 'Project Zomboid Aimbot Hack — Soft Aim Assist',
		intro:
			'Project Zomboid aimbot hack tools for Project Zomboid — smoothness, FOV, head priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Project Zomboid aimbot hack menu with silent aim and head priority toggles',
		galleryTitle: 'Project Zomboid aimbot hack gallery',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/project-zomboid-aimbot/',
		sections: [
			section(
				'Project Zomboid aimbot hack vs visibility tools',
				'A Project Zomboid aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Project Zomboid Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Project Zomboid combat pace across open-world Knox County looting.',
				'Prefer softer tracking language? See <a href="/project-zomboid-aimbot/">soft aim</a>. Full settings: <a href="/project-zomboid-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Head priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-session without opening menus during rotations or horde clusters.',
				'Per-weapon profile slots separate long-range rifle tuning from close-quarters shotgun settings.',
				`Balance patches from ${EXT.rust} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Project Zomboid anti-cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/project-zomboid-cheats/">anti-cheat maintenance guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/project-zomboid-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Project Zomboid ESP Hack 2026 | enemy boxes & Loot',
		description:
			'Project Zomboid ESP hack with enemy boxes and medical supply markers for PC and controllers. Undetected Project Zomboid cheats with cloud DMA — see overlays and buy.',
		h1: 'Project Zomboid ESP Hack — enemy boxes Guide',
		intro:
			'Project Zomboid ESP hack overlays for Project Zomboid — enemy outlines, special infected threat cues, loot and container markers with distance readouts across loot runs and multiplayer servers.',
		imageAlt: 'Project Zomboid ESP hack with zombie skeleton, bounding box, and status tracking labels',
		galleryTitle: 'Project Zomboid ESP hack gallery',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/project-zomboid-esp/',
		sections: [
			section(
				'What a Project Zomboid ESP hack shows',
				'A Project Zomboid ESP hack renders zombie or survivor outlines, special infected positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during horde pushes and flanking scenarios.',
				'Canonical visibility guide: <a href="/project-zomboid-esp/">Project Zomboid ESP</a>. Wallhack wording: <a href="/project-zomboid-wallhack/">wallhack</a>.',
			),
			section(
				'ESP hack categories for survival',
				'Toggle Zombie ESP hack, medical supply markers, chest pins, and special infected cues independently so only session-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports multiplayer servers and survival runs.',
				`map zone area and loot changes publish through ${EXT.epic} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with anti-cheat maintenance',
				'ESP hack modules rebuild after Project Zomboid anti-cheat and Project Zomboid patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/project-zomboid-radar/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/project-zomboid-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Project Zomboid Unlock All 2026 | What It Really Means',
		description:
			'Project Zomboid unlock all explained vs real Project Zomboid Cheats — ESP boxes, soft aim, and cloud DMA for PC and controllers. Know what you are buying.',
		h1: 'Project Zomboid Unlock All — What Players Search For',
		intro:
			'Project Zomboid unlock all is a common search term for Project Zomboid — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Project Zomboid Cheats actually provides on Windows PC.',
		imageAlt: 'Project Zomboid ESP boxes and distances on zombies and survivors and special infected in survival run',
		galleryTitle: 'Project Zomboid unlock all guide visuals',
		ctaPrimary: 'Buy Project Zomboid Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Project Zomboid unlock all usually means',
				'Project Zomboid unlock all searches often refer to instant access to weapons, camos, skins, or Prime Access tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Project Zomboid Cheats focuses on in-match awareness — Zombie ESP, medical supply markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and Prime Access items are sold through ${EXT.rust}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot zombies and survivors, lockers, and loot containers during live missions. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and container markers speed BR rotations — see the <a href="/project-zomboid-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/project-zomboid-cheats/">Project Zomboid Cheats</a> and <a href="/project-zomboid-cheats/">best Project Zomboid cheats</a>.',
			),
			section(
				'Buying Project Zomboid Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Project Zomboid on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Project Zomboid anti-cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Project Zomboid Cheats',
		description:
			'Privacy policy for Project Zomboid Cheats. How we handle support emails, order data, and checkout for Project Zomboid cheats licenses on projectzomboidcheats.com.',
		h1: 'Project Zomboid Cheats Privacy Policy',
		intro: 'How Project Zomboid Cheats handles information when you browse projectzomboidcheats.com or contact support about a Project Zomboid license.',
		imageAlt: 'Project Zomboid ESP overlay visual for privacy policy page',
		galleryTitle: 'Project Zomboid Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Project Zomboid Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@projectzomboidcheats.com with your request details.',
				'Policy updates publish on this page. Continued use of projectzomboidcheats.com after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Project Zomboid Cheats',
		description:
			'Refund policy for Project Zomboid Cheats. Digital delivery terms and eligibility for Project Zomboid Cheats packages with ESP, soft aim, and cloud DMA.',
		h1: 'Project Zomboid Cheats Refund Policy',
		intro:
			'Refund terms for Project Zomboid Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Project Zomboid.',
		imageAlt: 'Project Zomboid ESP overlay visual for refund policy page',
		galleryTitle: 'Project Zomboid Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Project Zomboid Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@projectzomboidcheats.com with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Project Zomboid Cheats Rules',
		description:
			'Terms of use for projectzomboidcheats.com and Project Zomboid Cheats licenses. Usage rules, anti-cheat risk, and liability for PC and controller cheats.',
		h1: 'Project Zomboid Cheats Terms of Use',
		intro: 'Terms governing use of projectzomboidcheats.com and Project Zomboid Cheats licenses for Project Zomboid on Windows PC.',
		imageAlt: 'Project Zomboid ESP overlay visual for terms of use page',
		galleryTitle: 'Project Zomboid Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Project Zomboid Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Project Zomboid on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Project Zomboid may violate The Indie Stone terms and result in account penalties. Project Zomboid Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/project-zomboid-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@projectzomboidcheats.com for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
		imageAlt: PAGE_IMAGE_ALTS[pageId] ?? page.imageAlt,
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
