import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Warframe Cheats 2026 | ESP, Aimbot & Hacks for PC',
		description:
			'Warframe cheats for Windows PC — ESP, aimbot, wallhack & radar. $35/mo or $150 lifetime. Setup guides, patch updates & buyer reviews.',
		h1: 'Warframe Cheats',
		intro:
			'A focused Windows PC package for Warframe: Enemy ESP, aimbot controls, and wallhack overlays with Digital Extremes anti-cheat maintenance after major patches.',
		imageAlt: 'Warframe cheats main menu with ESP wallhack and soft aim toggles on PC',
		galleryTitle: 'Warframe Cheats visuals',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Built for Steel Path pressure',
				'Warframe punishes incomplete information. Warframe Cheats puts ESP, wallhack, and aimbot in one license so you can read co-op missions, flank pushes, and team pushes before you commit.',
				`Client and anti-cheat updates come from ${EXT.epic} and ${EXT.eac}. When a patch needs a rebuild, we post status on the <a href="/updates/">Updates page</a> — no permanent “undetected forever” promises.`,
				'Monthly ($35) and lifetime ($150) licenses ship digitally after payment confirmation, with maintenance rebuilds when anti-cheat or game updates require them.',
				'Compare the <a href="/warframe-cheats/">Warframe Cheats guide</a>, <a href="/warframe-esp/">ESP</a>, <a href="/warframe-aimbot/">Aimbot</a>, and <a href="/warframe-cheats/">undetected status</a> pages before checkout.',
			),
			section(
				'One license, clear controls',
				'Instead of stacking separate tools, you get Enemy ESP, health pickup markers, radar cues, and aimbot profiles in a single package aimed at open world and Steel Path missions.',
				'Details live on the <a href="/warframe-esp/">ESP</a>, <a href="/warframe-aimbot/">Aimbot</a>, <a href="/warframe-wallhack/">wallhack</a>, and <a href="/features/">features</a> pages — or jump to <a href="/pricing/">Pricing</a> for plans.',
				`On patch mornings, check ${EXT.status}, then confirm our maintenance notes so you are not loading an outdated build.`,
				'Ready? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> handy.',
			),
		],
	},
	'warframe-esp': {
		title: 'Warframe ESP 2026 | Wallhack & Enemy Boxes for PC',
		description:
			'Warframe ESP wallhack — enemy boxes, health bars, loot markers & distance readouts. Bundled with aimbot & radar in one license.',
		h1: 'Warframe ESP — Wallhack & Enemy Boxes',
		intro:
			'Visibility tools for Warframe. Read enemy units, lockers, resource caches, and pickups, and distance before you commit to a fight — with toggleable ESP wallhack overlays for open world missions and Steel Path missions.',
		imageAlt: 'Warframe ESP overlay with enemy outline boxes, health bars, and distance readouts',
		galleryTitle: 'Warframe ESP overlay visuals',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'Warframe wallhack guide',
		ctaSecondaryHref: '/warframe-wallhack/',
		sections: [
			section(
				'What Warframe ESP solves in Steel Path missions',
				'Warframe missions punish incomplete information. Warframe Cheats ESP wallhack helps you spot enemy units early, spot heavy units before they push your position, and mark lockers and caches worth the detour.',
				'On Steel Path missions, co-op missions, and Steel Path missions, that visibility gap is often the difference between a clean flanking and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Warframe live updates and tileset changes are published by ${EXT.epic}. When tileset areas or loot rules shift, ESP categories stay useful because they track enemies and containers — not a single static landmark.`,
			),
			section(
				'Enemy, heavy unit, and ability ESP wallhack categories',
				'Toggle enemy unit outlines, heavy unit threat cues, pickup awareness markers, and loot or chest pins so only mission-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports co-op missions and co-op squads alike.',
				'Compare category detail on the <a href="/warframe-wallhack/">wallhack page</a> and pair visibility with the <a href="/warframe-radar/">radar hack</a> for flanks outside your FOV.',
				[
					'enemy unit ESP outlines with distance',
					'pickups and lockers markers for faster rotations',
					'heavy unit and pickup threat cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with anti-cheat maintenance',
				'Warframe Cheats ESP wallhack is maintained for Warframe with rebuilds after Digital Extremes anti-cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/warframe-cheats/">anti-cheat maintenance maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first mission session.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/warframe-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/warframe-cheats/">best Warframe cheats guide</a> and <a href="/warframe-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'warframe-aimbot': {
		title: 'Warframe Aimbot 2026 | Soft Aim for PC & Controller',
		description:
			'Warframe aimbot with FOV, smoothing & weak-point targeting. Per-weapon profiles for rifles, shotguns & snipers. Windows PC.',
		h1: 'Warframe Aimbot — Soft Aim for PC & Controller',
		intro:
			'Configurable Aimbot tools for Warframe firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Warframe cheats cheat menu with soft aim, FOV slider, and bone priority settings',
		galleryTitle: 'Warframe Aimbot combat previews',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/warframe-esp/',
		sections: [
			section(
				'Aimbot tuned for Warframe combat pace',
				'Warframe mixes long-range rifle fights with close-quarters shotgun pushes. Warframe Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-mission.',
				'Bone priority and target selection options cover closest enemy, lowest health, or highest-threat targets during squad fights and defense waves and Sortie modifiers.',
				`Weapon balance and season rules change via ${EXT.rust}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for rifles, shotguns, and snipers. Switch between long-range rifle beams and close-quarters room clears without reopening menus every spawn.',
				'Prefer softer tracking? Read the <a href="/warframe-aimbot/">soft aim guide</a>. Want the search term most players use? See <a href="/warframe-aimbot/">aimbot hack</a>.',
				'Aimbot ships alongside <a href="/warframe-esp/">ESP wallhack</a> and <a href="/warframe-radar/">2D radar</a> in the same Warframe Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-mission',
					'Per-weapon profile slots for rifle/ shotgun / sniper',
				],
			),
			section(
				'anti-cheat maintenance for undetected Aimbot',
				'Warframe Cheats rebuilds Aimbot behavior when Digital Extremes anti-cheat or major Warframe patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/warframe-cheats/">anti-cheat maintenance guide</a> before queueing on patch day.`,
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
		title: 'Warframe Cheats Features | ESP, Aimbot & Radar',
		description:
			'Full Warframe cheats feature list — ESP, soft aim, radar, hotkeys & controller support. Review every toggle before checkout.',
		h1: 'Warframe Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the Warframe Cheats package for Warframe on Windows PC — with anti-cheat maintenance after major patches.',
		imageAlt: 'Warframe ESP overlay with hero boxes and health bars',
		galleryTitle: 'Warframe Cheats feature gallery',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'enemy unit ESP wallhack, heavy unit and pickup threat cues, pickups and lockers markers, distance readouts, snaplines, and toggleable ESP categories for mission-critical overlays only.',
				'Team and enemy colour coding supports co-op missions and Steel Path. Deep-dive the <a href="/warframe-esp/">ESP page</a> and <a href="/warframe-wallhack/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.epic} season updates — toggleable ESP categories keep overlays useful when tileset areas rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and final circles, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Warframe sessions. See <a href="/warframe-radar/">radar</a> and <a href="/warframe-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/features/">mod menu page</a> explains mid-mission toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and anti-cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. anti-cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@warframecheats.net.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/warframe-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Buy Warframe Cheats | $35/mo or $150 Lifetime',
		description:
			'Buy Warframe cheats — $35/month or $150 lifetime. ESP, aimbot & wallhack included. Instant digital delivery on Windows PC.',
		h1: 'Warframe Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Warframe Cheats — ESP wallhack, radar hack, and Aimbot for Warframe on Windows PC. Instant digital delivery after payment.',
		imageAlt: 'Warframe wallhack ESP showing enemy units and Sentients through objective corners',
		galleryTitle: 'Warframe Cheats package visuals',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Warframe Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with anti-cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Warframe Cheats package — ideal if you play Warframe regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'enemy ESP wallhack, health pickup markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Digital Extremes anti-cheat or major Warframe patches.',
				`update calendars and client updates come from ${EXT.rust}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/warframe-cheats/">best Warframe cheats</a>, <a href="/warframe-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Warframe Cheats Setup | Install Guide for Windows PC',
		description:
			'Install Warframe cheats on Windows 10/11. Activate your license, tune ESP & aimbot profiles, check patch status before queueing.',
		h1: 'Warframe Cheats Setup — PC & Controller Guide',
		intro:
			'Install and configure Warframe Cheats for Warframe on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify anti-cheat maintenance status before queueing.',
		imageAlt: 'Warframe aimbot hitbox lock on enemy unit during Steel Path mission fight',
		galleryTitle: 'Warframe Cheats setup visuals',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Warframe Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest anti-cheat maintenance build before launching Warframe.',
				`Also glance at ${EXT.status} if Warframe servers look unstable on patch day — a platform outage is not a license fault.`,
				'Warframe Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for enemies, pickups, and lockers — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-mission. Details for each module live on <a href="/warframe-esp/">ESP</a>, <a href="/warframe-aimbot/">Aimbot</a>, and <a href="/features/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/warframe-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Warframe or Digital Extremes anti-cheat patches',
				'When Digital Extremes ships a major Warframe update or Digital Extremes anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/warframe-cheats/">anti-cheat maintenance page</a> and <a href="/warframe-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Warframe Cheats Updates | Patch & Status Log',
		description:
			'Warframe cheats update log — check build status after game patches. Maintenance notes for ESP, aimbot & radar rebuilds.',
		h1: 'Warframe Cheats Updates — Maintenance Log',
		intro:
			'Track anti-cheat maintenance and Warframe patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: 'Warframe wallhack ESP skeleton on enemy heavy unit hero in Steel Path missions',
		galleryTitle: 'Warframe patch and maintenance visuals',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/warframe-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Warframe and Digital Extremes anti-cheat receive frequent patches. Warframe Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Warframe launcher health and this page for Warframe Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on Steel Path missions and co-op missions.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Digital Extremes anti-cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/warframe-cheats/">anti-cheat maintenance guide</a> and <a href="/warframe-cheats/">undetected Warframe cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow patch notes from ${EXT.rust}, then confirm our rebuild is live before Steel Path.`,
				'For urgent status questions after an anti-cheat update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Warframe Cheats FAQ | ESP, Aimbot & Safety',
		description:
			'Warframe cheats FAQ — licensing, ESP, aimbot, controller support, patch-day status & pricing. Clear answers before you buy.',
		h1: 'Warframe Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Warframe Cheats — ESP wallhack, radar hack, Aimbot, anti-cheat maintenance, checkout, and Warframe compatibility on Windows PC.',
		imageAlt: 'Warframe radar hack 2D minimap overlay showing spawn routes and enemy units and Sentients',
		galleryTitle: 'Warframe Cheats FAQ visuals',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Warframe Cheats?',
				'Warframe Cheats is an undetected cheat package for Warframe on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with anti-cheat maintenance updates.',
				'Packages cover Steel Path missions and co-op missions. Explore <a href="/features/">Features</a> for the full control list and <a href="/warframe-esp/">ESP</a> / <a href="/warframe-aimbot/">Aimbot</a> for module detail.',
				`Warframe is developed and published by ${EXT.epic}. Cheats are third-party tools and may violate Digital Extremes' Terms of Service — use is at your own risk.`,
			),
			section(
				'Are Warframe Cheats undetected in 2026?',
				'Warframe Cheats is maintained with rebuilds after Digital Extremes anti-cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/warframe-cheats/">undetected Warframe cheats</a> and the <a href="/warframe-cheats/">anti-cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@warframecheats.net or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Warframe Cheats Support | Contact & Help',
		description:
			'Contact Warframe Cheats support for licenses, setup & billing. Email support@warframecheats.net with your order ID.',
		h1: 'Warframe Cheats Support — Contact Us',
		intro:
			'Get help with Warframe Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and anti-cheat maintenance for Warframe on Windows PC.',
		imageAlt: 'Warframe cheats Steel Path objective fight with ESP boxes and aimbot active',
		galleryTitle: 'Warframe Cheats support resources',
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
				'Support requests are reviewed daily. Warframe Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Digital Extremes bans.',
				`Account and game policy questions belong with ${EXT.epic}. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. anti-cheat maintenance notes live on the dedicated <a href="/warframe-cheats/">Digital Extremes anti-cheat page</a>.',
				'Email: support@warframecheats.net',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Warframe Cheats 2026 | Anti-cheat safe',
		description:
			'Undetected Warframe Cheats with anti-cheat maintenance for ESP boxes, soft aim, and cloud DMA on PC and controllers. Check status before you queue.',
		h1: 'Undetected Warframe Cheats — Anti-cheat maintenance',
		intro:
			'How Warframe Cheats stays maintained for Warframe after Digital Extremes anti-cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: 'Warframe wallhack ESP skeleton boxes on enemy units and Sentients through map geometry',
		galleryTitle: 'Undetected Warframe Cheats visuals',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'anti-cheat maintenance guide',
		ctaSecondaryHref: '/warframe-cheats/',
		sections: [
			section(
				'What undetected means for Warframe Cheats',
				'Undetected Warframe Cheats means the package is actively maintained against Digital Extremes anti-cheat and major Warframe patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Digital Extremes anti-cheat updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; Warframe client updates ship through ${EXT.epic}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'anti-cheat maintenance workflow',
				'When Digital Extremes anti-cheat or Warframe updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for Warframe outages that can look like product failures.`,
				'Deep technical workflow: <a href="/warframe-cheats/">anti-cheat maintenance Warframe guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/warframe-cheats/">Warframe cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Warframe Wallhack 2026 | ESP Boxes Through Terrain',
		description:
			'Warframe wallhack ESP highlights Grineer, Corpus & Infested through cover. Toggle categories for Steel Path & open world.',
		h1: 'Warframe Wallhack — ESP Boxes & Visibility',
		intro:
			'Warframe wallhack ESP for Warframe — see enemies, pickups, and lockers through toggleable wallhack overlays built for open world missions and Steel Path missions.',
		imageAlt: 'Warframe wallhack ESP skeleton boxes on enemy unit hero in Steel Path',
		galleryTitle: 'Warframe wallhack ESP gallery',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'Warframe ESP page',
		ctaSecondaryHref: '/warframe-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Warframe wallhack focuses on information — enemy outlines, loot pins, heavy unit threat cues — rather than automatic aiming. Warframe Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and defense waves.',
				'For the broader ESP keyword page see <a href="/warframe-esp/">Warframe ESP</a>; for combat assist see <a href="/warframe-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support Steel Path missions, co-op missions, and Steel Path missions with distance readouts and snaplines for engagement control.',
				`tileset updates and tileset area changes are announced via ${EXT.rust}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/warframe-radar/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Digital Extremes anti-cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/warframe-cheats/">undetected Warframe cheats</a> and <a href="/warframe-cheats/">anti-cheat maintenance</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/warframe-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Warframe Radar Hack 2026 | 2D Minimap for Warframe',
		description:
			'Warframe radar hack shows off-screen enemies on a 2D minimap. Directional cues for defense, survival & squad play.',
		h1: 'Warframe Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Warframe — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: 'Warframe ESP distance markers and hero health readouts in Steel Path',
		galleryTitle: 'Warframe radar hack visuals',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/warframe-esp/',
		sections: [
			section(
				'Why radar hack matters in Warframe',
				'Multi-floor tilesets stack vertical fights — catwalks, doorways, and side spawns. A 2D radar overlay shows nearby enemy threats outside direct line of sight so you can reposition before a flank wave.',
				'Warframe Cheats radar complements <a href="/warframe-esp/">ESP wallhack</a> markers during squad pushes and final-circle scrims.',
				`Mode rules and seasonal changes come from ${EXT.epic}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight defense waves. Directional cues highlight flanks during tileset clears and heavy unit pushes across Steel Path missions and co-op missions.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live missions — see the <a href="/features/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/warframe-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive anti-cheat maintenance rebuilds with the full Warframe Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Warframe patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/warframe-cheats/">undetected status</a>.',
			),
		],
	},
	'eac-bypass': {
		title: 'Warframe Anti-Cheat Maintenance | Patch Guide',
		description:
			'How Warframe Cheats rebuild after Digital Extremes anti-cheat patches — ESP, aimbot & radar maintenance for PC. Read before queueing.',
		h1: 'Warframe Anti-Cheat — Maintenance Guide',
		intro:
			'Understand Digital Extremes anti-cheat maintenance for Warframe Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Warframe security updates.',
		imageAlt: 'Warframe undetected hacks status with ESP overlay on enemy units and Sentients',
		galleryTitle: 'anti-cheat maintenance visuals',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Digital Extremes anti-cheat overview',
				`Digital Extremes anti-cheat is Digital Extremes’ anti-cheat for Warframe on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Warframe Cheats monitors anti-cheat patch notes and Warframe seasonal updates from ${EXT.epic} to schedule module reviews.`,
				'“anti-cheat maintenance” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after an anti-cheat patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Warframe service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/warframe-cheats/">undetected Warframe cheats</a>.',
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
		title: 'Warframe Cheats 2026 | Hacks with ESP & Cloud DMA',
		description:
			'Best Warframe cheats 2026: ESP boxes, soft aim, and cloud DMA for PC and controllers. Undetected Warframe Cheats with anti-cheat maintenance — compare and buy.',
		h1: 'Warframe Cheats 2026 — ESP, Soft Aim & Cloud DMA',
		intro:
			'The 2026 Warframe Cheats package for Warframe — undetected ESP wallhack, radar hack, and Aimbot with anti-cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: 'Warframe cheats main menu with ESP wallhack and soft aim toggles on PC',
		galleryTitle: 'Warframe Cheats 2026 gallery',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why Warframe Cheats leads in 2026',
				'2026 seasons bring new maps, weapons, and Digital Extremes anti-cheat updates. Warframe Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official official patch messaging on ${EXT.rust}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover Steel Path missions and co-op missions loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'enemy ESP wallhack, health pickup markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/warframe-cheats/">Warframe Cheats pillar</a>, <a href="/warframe-esp/">ESP</a>, <a href="/warframe-aimbot/">Aimbot</a>, <a href="/warframe-wallhack/">wallhack</a>, <a href="/warframe-radar/">radar</a>, <a href="/warframe-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/warframe-cheats/">Warframe Cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/warframe-cheats/">best Warframe cheats</a> checklist, <a href="/blog/warframe-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@warframecheats.net via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Undetected Warframe Cheats 2026 | PC Hacks Guide',
		description:
			'Undetected Warframe cheats with ESP, aimbot & wallhack for PC. Maintenance after patches, pricing & setup — no permanent undetected promises.',
		h1: 'Warframe Cheats & Hacks — ESP, Aimbot & Wallhack',
		intro:
			'Warframe cheats and hacks for Steel Path, Sorties, and open world combine ESP wallhack visibility, 2D radar threat cues, and aimbot controls in one Windows PC license — maintained after Digital Extremes anti-cheat patches. This is the pillar guide for Warframe Cheats in 2026.',
		imageAlt: 'Warframe cheats Steel Path objective fight with ESP boxes and aimbot active',
		galleryTitle: 'Warframe Cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/warframe-cheats/',
		sections: [
			section(
				'What Warframe Cheats include in 2026',
				'Players searching for Warframe Cheats usually want visibility and combat tools without stacking separate downloads. Warframe Cheats bundles enemy ESP wallhack, health pickup markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called Warframe cheats.',
				'Coverage spans Steel Path missions and co-op missions with in-client toggles for live missions. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.epic}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'Warframe Cheats vs Warframe cheats — same stack, clear pages',
				'Searchers use Warframe Cheats and Warframe cheats interchangeably. This pillar focuses on hacks language; the <a href="/warframe-cheats/">Warframe cheats 2026</a> and <a href="/warframe-cheats/">best Warframe cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/warframe-esp/">Warframe ESP</a>, <a href="/warframe-aimbot/">Warframe Aimbot</a>, <a href="/warframe-wallhack/">wallhack</a>, <a href="/warframe-radar/">radar hack</a>, and <a href="/warframe-aimbot/">soft aim</a>.',
				'Blog guides expand each keyword: <a href="/blog/warframe-cheats-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/warframe-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-warframe-cheats-eac/">undetected anti-cheat notes</a>.',
			),
			section(
				'Warframe Cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Warframe Cheats maps the full mission loop: read enemy units, track lockers and resource caches, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/warframe-esp/">ESP</a>, <a href="/warframe-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/pricing/">cheat download</a>, <a href="/features/">mod menu</a>, <a href="/warframe-aimbot/">aimbot hack</a>, <a href="/warframe-esp/">ESP hack</a>.',
			),
			section(
				'Undetected Warframe Cheats with anti-cheat maintenance',
				'Undetected Warframe Cheats require rebuilds after Digital Extremes anti-cheat and major Warframe patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/warframe-cheats/">anti-cheat maintenance guide</a> for the practical workflow. Pair with <a href="/warframe-cheats/">undetected Warframe cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Warframe Hack Download 2026 | Instant Access',
		description:
			'Warframe cheat download with instant license delivery — ESP boxes, soft aim, and cloud DMA for PC and controllers. Buy, activate, and play.',
		h1: 'Warframe Hack Download — Instant License Delivery',
		intro:
			'How Warframe cheat download works for Warframe — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: 'Warframe wallhack ESP showing enemy units and Sentients through objective corners',
		galleryTitle: 'Warframe cheat download visuals',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Warframe cheat download delivery works',
				'After checkout confirms payment, Warframe Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Warframe servers are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Warframe cheat download includes enemy ESP wallhack, pickups and lockers markers, 2D radar overlays, Aimbot profiles, and in-client toggles for open world missions and Steel Path missions.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/warframe-esp/">ESP</a>, <a href="/warframe-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Warframe or Digital Extremes anti-cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/warframe-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Warframe Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Warframe mod menu for in-match toggles — ESP boxes, soft aim, radar, and cloud DMA on PC and controllers. Undetected Warframe Cheats package.',
		h1: 'Warframe Mod Menu — In-Client Control Panel',
		intro:
			'Warframe mod menu controls for Warframe — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-mission without leaving your Warframe session on Windows PC.',
		imageAlt: 'Warframe cheats mod menu with soft aim profiles and ESP toggles',
		galleryTitle: 'Warframe mod menu gallery',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Warframe mod menu controls',
				'A Warframe mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live missions. Warframe Cheats keeps those toggles accessible with hotkeys.',
				'Toggle enemy outlines, health pickup markers, heavy unit cues, and per-weapon Aimbot settings without alt-tabbing out of Warframe.',
				'Control deep-dives: <a href="/warframe-esp/">ESP</a>, <a href="/warframe-aimbot/">Aimbot</a>, <a href="/warframe-radar/">radar</a>.',
			),
			section(
				'Mod menu categories for open world missions and Steel Path missions',
				'Separate ESP wallhack categories for players, pickups, lockers, and caches let you reduce overlay noise during rotations and defense waves.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when Warframe balance patches change fight distances and mobility.',
				'Soft tracking players should start with <a href="/warframe-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after anti-cheat patches',
				'Warframe mod menu behavior is rebuilt when Digital Extremes anti-cheat or major Warframe updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/warframe-cheats/">anti-cheat maintenance guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Warframe Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Warframe aimbot settings for natural tracking on PC and controllers. Smoothness, FOV, and bone priority — included in our Warframe Cheats with ESP boxes.',
		h1: 'Warframe Soft Aim — Smooth Aimbot Controls',
		intro:
			'Warframe aimbot settings for Warframe — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Warframe aimbot ESP boxes and FOV circle on enemy units and Sentients in open world missions',
		galleryTitle: 'Warframe aimbot gallery',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/warframe-aimbot/',
		sections: [
			section(
				'What Warframe aimbot means',
				'Warframe aimbot refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Warframe Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in missions firefights.',
				'Bone priority and target selection cover closest enemy, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/warframe-aimbot/">Warframe Aimbot</a>. Alternate wording: <a href="/warframe-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for rifles, shotguns, and snipers. Switch between long-range rifle beams and close-quarters room clears with hotkeys mid-mission.',
				`Weapon TTKs shift with ${EXT.rust} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/warframe-esp/">ESP wallhack</a> and <a href="/warframe-radar/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with anti-cheat maintenance',
				'Aimbot modules rebuild after Digital Extremes anti-cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Warframe Cheats 2026 | Buyer Guide',
		description:
			'Best Warframe Cheats for 2026: ESP boxes, soft aim, cloud DMA, and anti-cheat maintenance on PC and controllers. Use this checklist before checkout.',
		h1: 'Best Warframe Cheats — 2026 Buyer Guide',
		intro:
			'Compare the best Warframe cheats for Warframe in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Digital Extremes anti-cheat rebuilds and instant delivery.',
		imageAlt: 'Warframe wallhack ESP showing enemy units and Sentients through objective corners',
		galleryTitle: 'Best Warframe cheats gallery',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the best Warframe cheats in 2026',
				'The best Warframe cheats combine active anti-cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Warframe Cheats covers Steel Path missions and co-op missions with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Warframe cheats feature checklist',
				'Look for enemy ESP wallhack, health pickup markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Warframe patches.',
				'Review <a href="/features/">Features</a>, <a href="/warframe-cheats/">undetected status</a>, and <a href="/warframe-cheats/">Warframe cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/warframe-esp/">ESP</a>, <a href="/warframe-aimbot/">Aimbot</a>, <a href="/warframe-cheats/">hacks</a>.',
			),
			section(
				'Buying the best Warframe cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Digital Extremes terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Warframe Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Warframe aimbot hack with soft aim for PC and controllers. FOV, bone priority, and hotkeys — bundled with ESP boxes in our Warframe Cheats package.',
		h1: 'Warframe Aimbot Hack — Soft Aim Assist',
		intro:
			'Warframe aimbot hack tools for Warframe — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Warframe aimbot hack menu with silent aim and bone priority toggles',
		galleryTitle: 'Warframe aimbot hack gallery',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/warframe-aimbot/',
		sections: [
			section(
				'Warframe aimbot hack vs visibility tools',
				'A Warframe aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Warframe Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Warframe combat pace across open world missions and Steel Path missions.',
				'Prefer softer tracking language? See <a href="/warframe-aimbot/">soft aim</a>. Full settings: <a href="/warframe-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-mission without opening menus during rotations or final circles.',
				'Per-weapon profile slots separate long-range rifle tuning from close-quarters shotgun settings.',
				`Balance patches from ${EXT.rust} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Digital Extremes anti-cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/warframe-cheats/">anti-cheat maintenance guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/warframe-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Warframe ESP Hack 2026 | enemy boxes & Loot',
		description:
			'Warframe ESP hack with enemy boxes and health pickup markers for PC and controllers. Undetected Warframe cheats with cloud DMA — see overlays and buy.',
		h1: 'Warframe ESP Hack — enemy boxes Guide',
		intro:
			'Warframe ESP hack overlays for Warframe — enemy outlines, heavy unit threat cues, pickups and lockers markers with distance readouts across Steel Path missions and co-op missions.',
		imageAlt: 'Warframe ESP hack with hero skeleton, bounding box, and ult tracking labels',
		galleryTitle: 'Warframe ESP hack gallery',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/warframe-esp/',
		sections: [
			section(
				'What a Warframe ESP hack shows',
				'A Warframe ESP hack renders enemy unit outlines, heavy unit positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and flanking scenarios.',
				'Canonical visibility guide: <a href="/warframe-esp/">Warframe ESP</a>. Wallhack wording: <a href="/warframe-wallhack/">wallhack</a>.',
			),
			section(
				'ESP hack categories for Steel Path missions',
				'Toggle Enemy ESP hack, health pickup markers, chest pins, and heavy unit cues independently so only mission-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports co-op missions and Steel Path.',
				`tileset area and loot changes publish through ${EXT.epic} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with anti-cheat maintenance',
				'ESP hack modules rebuild after Digital Extremes anti-cheat and Warframe patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/warframe-radar/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/warframe-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Warframe Unlock All 2026 | What It Really Means',
		description:
			'Warframe unlock all explained vs real Warframe Cheats — ESP boxes, soft aim, and cloud DMA for PC and controllers. Know what you are buying.',
		h1: 'Warframe Unlock All — What Players Search For',
		intro:
			'Warframe unlock all is a common search term for Warframe — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Warframe Cheats actually provides on Windows PC.',
		imageAlt: 'Warframe ESP boxes and distances on enemy units and Sentients in Steel Path mission',
		galleryTitle: 'Warframe unlock all guide visuals',
		ctaPrimary: 'Buy Warframe Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Warframe unlock all usually means',
				'Warframe unlock all searches often refer to instant access to weapons, camos, skins, or Prime Access tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Warframe Cheats focuses on in-match awareness — Enemy ESP, health pickup markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and Prime Access items are sold through ${EXT.rust}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy units, lockers, and resource caches during live missions. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, pickups and lockers markers speed BR rotations — see the <a href="/warframe-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/warframe-cheats/">Warframe Cheats</a> and <a href="/warframe-cheats/">best Warframe cheats</a>.',
			),
			section(
				'Buying Warframe Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Warframe on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Digital Extremes anti-cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Warframe Cheats',
		description:
			'Privacy policy for Warframe Cheats. How we handle support emails, order data, and checkout for Warframe cheats licenses on warframecheats.net.',
		h1: 'Warframe Cheats Privacy Policy',
		intro: 'How Warframe Cheats handles information when you browse warframecheats.net or contact support about a Warframe license.',
		imageAlt: 'Warframe ESP overlay visual for privacy policy page',
		galleryTitle: 'Warframe Cheats legal resources',
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
				'Analytics may use aggregated traffic data without identifying individual Warframe Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@warframecheats.net with your request details.',
				'Policy updates publish on this page. Continued use of warframecheats.net after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Warframe Cheats',
		description:
			'Refund policy for Warframe Cheats. Digital delivery terms and eligibility for Warframe Cheats packages with ESP, soft aim, and cloud DMA.',
		h1: 'Warframe Cheats Refund Policy',
		intro:
			'Refund terms for Warframe Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Warframe.',
		imageAlt: 'Warframe ESP overlay visual for refund policy page',
		galleryTitle: 'Warframe Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Warframe Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@warframecheats.net with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Warframe Cheats Rules',
		description:
			'Terms of use for warframecheats.net and Warframe Cheats licenses. Usage rules, anti-cheat risk, and liability for PC and controller cheats.',
		h1: 'Warframe Cheats Terms of Use',
		intro: 'Terms governing use of warframecheats.net and Warframe Cheats licenses for Warframe on Windows PC.',
		imageAlt: 'Warframe ESP overlay visual for terms of use page',
		galleryTitle: 'Warframe Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Warframe Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Warframe on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Warframe may violate Digital Extremes terms and result in account penalties. Warframe Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/warframe-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@warframecheats.net for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
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
