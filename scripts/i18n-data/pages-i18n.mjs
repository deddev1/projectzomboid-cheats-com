import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Warframe Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Warframe indetectables para Warframe en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Digital Extremes anti-cheat. Entrega digital instantánea.', h1: 'Warframe Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Warframe en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Digital Extremes anti-cheat tras cada parche.', imageAlt: 'Hero warframe-cheats con ESP wallhack y Aimbot indetectables', gallery: 'Galería Warframe Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Warframe Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en misiones y co-op missions.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Warframe Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Warframe indétectables pour Warframe sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Digital Extremes anti-cheat. Livraison numérique instantanée.', h1: 'Warframe Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Warframe sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Digital Extremes anti-cheat après chaque patch.', imageAlt: 'Hero warframe-cheats avec ESP wallhack et Aimbot indétectables', gallery: 'Galerie Warframe Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Warframe Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Idéal pour repérer les escouades ennemies en Steel Path, Sorties et missions en coop.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Warframe Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Warframe Cheats für Warframe auf PC. ESP Wallhack, Radar Hack und Aimbot mit Digital Extremes anti-cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Warframe Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Warframe: ESP Wallhack, Radar und Aimbot mit Digital Extremes anti-cheat-Wartung nach jedem Patch.', imageAlt: 'Warframe-cheats Hero mit ESP Wallhack und Aimbot undetected', gallery: 'Warframe Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Warframe Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in missions und co-op missions zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Warframe Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Warframe indetectáveis para Warframe no PC. ESP wallhack, radar hack e Aimbot com manutenção Digital Extremes anti-cheat. Entrega digital instantánea.', h1: 'Warframe Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Warframe no Windows PC: ESP wallhack, radar e Aimbot com manutenção Digital Extremes anti-cheat após cada patch.', imageAlt: 'Hero warframe-cheats com ESP wallhack e Aimbot indetectáveis', gallery: 'Galeria Warframe Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Warframe Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e co-op missions.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Warframe Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Warframe indetectable per Warframe su PC. ESP wallhack, radar hack e Aimbot con manutenzione Digital Extremes anti-cheat. Consegna digitale istantanea.', h1: 'Warframe Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Warframe su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Digital Extremes anti-cheat dopo ogni patch.', imageAlt: 'Hero warframe-cheats con ESP wallhack e Aimbot indetectable', gallery: 'Galleria Warframe Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Warframe Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in missions e co-op missions.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Warframe Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Warframe cheats voor Warframe op PC. ESP wallhack, radar hack en Aimbot met Digital Extremes anti-cheat-onderhoud. Directe digitale levering.', h1: 'Warframe Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Warframe: ESP wallhack, radar en Aimbot met Digital Extremes anti-cheat-onderhoud na elke patch.', imageAlt: 'Warframe-cheats hero met ESP wallhack en Aimbot undetected', gallery: 'Warframe Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Warframe Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in missions en co-op missions.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Warframe Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Warframe dla Warframe na PC. ESP wallhack, radar hack i Aimbot z konserwacją Digital Extremes anti-cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Warframe Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Warframe na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Digital Extremes anti-cheat po każdym patchu.', imageAlt: 'Hero warframe-cheats z ESP wallhack i Aimbot undetected', gallery: 'Galeria Warframe Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Warframe Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i co-op missions.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Warframe Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Warframe для Warframe на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Digital Extremes anti-cheat. Мгновенная цифровая доставка.', h1: 'Warframe Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Warframe на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Digital Extremes anti-cheat после патчей.', imageAlt: 'Hero warframe-cheats с ESP wallhack и Aimbot undetected', gallery: 'Галерея Warframe Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Warframe Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и co-op missions.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Warframe Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Warframe için undetected hileler. ESP wallhack, radar hack ve Aimbot — Digital Extremes anti-cheat bakımı. Anında dijital teslimat.', h1: 'Warframe Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Warframe Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Digital Extremes anti-cheat bakımı dahil.', imageAlt: 'Warframe-cheats frame ESP wallhack ve Aimbot undetected', gallery: 'Warframe Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Warframe Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve co-op missions\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Warframe Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Warframe undetected لـ Warframe على PC. ESP wallhack ورadar hack وAimbot مع صيانة Digital Extremes anti-cheat. تسليم رقمي فوري.', h1: 'Warframe Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Warframe على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Digital Extremes anti-cheat.', imageAlt: 'Hero warframe-cheats مع ESP wallhack وAimbot undetected', gallery: 'معرض Warframe Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Warframe Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وco-op missions.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Warframe Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Warframe向けundetectedチート。ESP wallhack、radar hack、Aimbot、Digital Extremes anti-cheatメンテナンス。即時デジタル配信。', h1: 'Warframe Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Warframe Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Digital Extremes anti-cheatメンテナンス付き。', imageAlt: 'warframe-cheats frame ESP wallhackとAimbot undetected', gallery: 'Warframe Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にWarframe Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとco-op missionsで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Warframe Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Warframe undetected 치트. ESP wallhack, radar hack, Aimbot, Digital Extremes anti-cheat 유지보수. 즉시 디지털 배송.', h1: 'Warframe Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Warframe Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Digital Extremes anti-cheat 유지보수 포함.', imageAlt: 'warframe-cheats frame ESP wallhack 및 Aimbot undetected', gallery: 'Warframe Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Warframe Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 co-op missions에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Warframe Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Warframe undetected作弊。ESP wallhack、radar hack、Aimbot、Digital Extremes anti-cheat维护。即时数字交付。', h1: 'Warframe Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Warframe Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Digital Extremes anti-cheat维护。', imageAlt: 'warframe-cheats frame ESP wallhack与Aimbot undetected', gallery: 'Warframe Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Warframe Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和co-op missions中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Warframe Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Warframe undetected cheats. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. Instant digital delivery.', h1: 'Warframe Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Warframe Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, anti-cheat maintenance सहित.', imageAlt: 'warframe-cheats frame ESP wallhack और Aimbot undetected', gallery: 'Warframe Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Warframe Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और co-op missions में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Warframe Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Warframe undetected untuk Warframe di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Digital Extremes anti-cheat. Pengiriman digital instan.', h1: 'Warframe Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Warframe di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Digital Extremes anti-cheat.', imageAlt: 'Hero warframe-cheats ESP wallhack dan Aimbot undetected', gallery: 'Galeri Warframe Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Warframe Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan co-op missions.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Warframe Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Warframe undetected สำหรับ Warframe บน PC. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Warframe Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Warframe บน Windows PC: ESP wallhack, radar, Aimbot พร้อม anti-cheat maintenance', imageAlt: 'Hero warframe-cheats ESP wallhack และ Aimbot undetected', gallery: 'แกลเลอรี Warframe Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Warframe Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ co-op missions', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Warframe Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Warframe undetected cho Warframe trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Digital Extremes anti-cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Warframe Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Warframe trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Digital Extremes anti-cheat.', imageAlt: 'Hero warframe-cheats ESP wallhack và Aimbot undetected', gallery: 'Thư viện Warframe Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Warframe Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và co-op missions.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Warframe Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Warframe для Warframe на PC. ESP wallhack, radar hack, Aimbot, обслуговування Digital Extremes anti-cheat. Мгновенная цифровая доставка.', h1: 'Warframe Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Warframe на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Digital Extremes anti-cheat.', imageAlt: 'Hero warframe-cheats з ESP wallhack і Aimbot undetected', gallery: 'Галерея Warframe Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Warframe Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і co-op missions.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Warframe Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Warframe cheaty pro Warframe na PC. ESP wallhack, radar hack, Aimbot, údržba Digital Extremes anti-cheat. Okamžité digitální doručení.', h1: 'Warframe Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Warframe na Windows PC: ESP wallhack, radar, Aimbot s údržbou Digital Extremes anti-cheat.', imageAlt: 'Hero warframe-cheats s ESP wallhack a Aimbot undetected', gallery: 'Galerie Warframe Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Warframe Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a co-op missions.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Warframe Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Warframe undetected pentru Warframe pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Digital Extremes anti-cheat. Livrare digitală instantă.', h1: 'Warframe Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Warframe pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Digital Extremes anti-cheat.', imageAlt: 'Hero warframe-cheats cu ESP wallhack și Aimbot undetected', gallery: 'Galerie Warframe Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Warframe Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și co-op missions.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Warframe Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Warframe cheats för Warframe på PC. ESP wallhack, radar hack, Aimbot, Digital Extremes anti-cheat-underhåll. Omedelbar digital leverans.', h1: 'Warframe Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Warframe på Windows PC: ESP wallhack, radar, Aimbot med Digital Extremes anti-cheat-underhåll.', imageAlt: 'Warframe-cheats hero med ESP wallhack och Aimbot undetected', gallery: 'Warframe Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Warframe Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och co-op missions.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique English title/desc tails per page — avoids identical "| ESP wallhack & Aimbot" across locales. */
const PAGE_META_TAILS = {
	'warframe-esp': { suffix: 'enemy boxes & Wallhack', focus: 'enemy boxes, health pickup markers, and wallhack overlays' },
	'warframe-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar, and cloud DMA controls' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup' },
	updates: { suffix: 'Anti-cheat maintenance Log', focus: 'anti-cheat patch status and rebuild notes' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and anti-cheat questions' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact' },
	undetected: { suffix: 'Anti-cheat safe Status', focus: 'undetected maintenance after Digital Extremes anti-cheat patches' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations' },
	'eac-bypass': { suffix: 'Patch Maintenance', focus: 'how anti-cheat updates are handled for Warframe Cheats' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Warframe cheats checklist before checkout' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Warframe Cheats pillar for ESP and Aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for PC and controllers' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Warframe cheats' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Warframe' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools' },
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Warframe Cheats', focus: 'ESP wallhack, radar, and Aimbot' };
	let titleBase = topicName.includes('2026')
		? `${topicName} | ${meta.suffix}`
		: `${topicName} 2026 | ${meta.suffix}`;
	// Short topic labels (FAQ, Support, etc.) need brand context for usable SERP titles.
	if (titleBase.length < 35) {
		titleBase = `${topicName} 2026 | Warframe Cheats ${meta.suffix}`;
	}
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(
				`${topicName}: ${meta.focus} for Warframe. ${p.delivery}. anti-cheat maintenance included.`,
			),
		),
		h1: `${topicName} — ${meta.suffix}`,
		intro: p.s1(`${topicName} for ${p.maps}: ${meta.focus}.`),
		imageAlt: `warframe-cheats ${pageKey} ${meta.focus} preview`,
		galleryTitle: `Warframe Cheats ${topicName} gallery`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(`${topicName} — ${p.maps}`, p.s1(`Read enemy units with ESP wallhack.`), p.s2()),
			section(`ESP wallhack & ${p.undetected}`, p.s1('Toggle overlays for open world missions and Steel Path missions.'), p.s3()),
			section(`${p.delivery}`, p.s2(), p.s3()),
		],
	};
}

const TOPIC_NAMES = {
	'warframe-esp': { en: 'Warframe ESP', es: 'Warframe ESP', fr: 'Warframe ESP', de: 'Warframe ESP', pt: 'Warframe ESP', it: 'Warframe ESP', nl: 'Warframe ESP', pl: 'Warframe ESP', ru: 'Warframe ESP', tr: 'Warframe ESP', ar: 'Warframe ESP', ja: 'Warframe ESP', ko: 'Warframe ESP', zh: 'Warframe ESP', hi: 'Warframe ESP', id: 'Warframe ESP', th: 'Warframe ESP', vi: 'Warframe ESP', uk: 'Warframe ESP', cs: 'Warframe ESP', ro: 'Warframe ESP', sv: 'Warframe ESP' },
	'warframe-aimbot': { en: 'Warframe Aimbot', es: 'Warframe Aimbot', fr: 'Warframe Aimbot', de: 'Warframe Aimbot', pt: 'Warframe Aimbot', it: 'Warframe Aimbot', nl: 'Warframe Aimbot', pl: 'Warframe Aimbot', ru: 'Warframe Aimbot', tr: 'Warframe Aimbot', ar: 'Warframe Aimbot', ja: 'Warframe Aimbot', ko: 'Warframe Aimbot', zh: 'Warframe Aimbot', hi: 'Warframe Aimbot', id: 'Warframe Aimbot', th: 'Warframe Aimbot', vi: 'Warframe Aimbot', uk: 'Warframe Aimbot', cs: 'Warframe Aimbot', ro: 'Warframe Aimbot', sv: 'Warframe Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Warframe Wallhack', es: 'Warframe Wallhack', fr: 'Warframe Wallhack', de: 'Warframe Wallhack', pt: 'Warframe Wallhack', it: 'Warframe Wallhack', nl: 'Warframe Wallhack', pl: 'Warframe Wallhack', ru: 'Warframe Wallhack', tr: 'Warframe Wallhack', ar: 'Warframe Wallhack', ja: 'Warframe Wallhack', ko: 'Warframe Wallhack', zh: 'Warframe Wallhack', hi: 'Warframe Wallhack', id: 'Warframe Wallhack', th: 'Warframe Wallhack', vi: 'Warframe Wallhack', uk: 'Warframe Wallhack', cs: 'Warframe Wallhack', ro: 'Warframe Wallhack', sv: 'Warframe Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'eac-bypass': { en: 'Anti-cheat bypass', es: 'Bypass Digital Extremes anti-cheat', fr: 'Bypass Digital Extremes anti-cheat', de: 'Anti-cheat bypass', pt: 'Bypass Digital Extremes anti-cheat', it: 'Bypass Digital Extremes anti-cheat', nl: 'Anti-cheat bypass', pl: 'Bypass Digital Extremes anti-cheat', ru: 'Bypass Digital Extremes anti-cheat', tr: 'anti-cheat bypass', ar: 'Bypass Digital Extremes anti-cheat', ja: 'Anti-cheat bypass', ko: 'Anti-cheat bypass', zh: 'Anti-cheat bypass', hi: 'Anti-cheat bypass', id: 'Bypass Digital Extremes anti-cheat', th: 'Anti-cheat bypass', vi: 'Bypass Digital Extremes anti-cheat', uk: 'Bypass Digital Extremes anti-cheat', cs: 'Anti-cheat bypass', ro: 'Bypass Digital Extremes anti-cheat', sv: 'Anti-cheat bypass' },
	'cheats-2026': { en: 'Warframe Cheats 2026', es: 'Warframe Cheats 2026', fr: 'Warframe Cheats 2026', de: 'Warframe Cheats 2026', pt: 'Warframe Cheats 2026', it: 'Warframe Cheats 2026', nl: 'Warframe Cheats 2026', pl: 'Warframe Cheats 2026', ru: 'Warframe Cheats 2026', tr: 'Warframe Cheats 2026', ar: 'Warframe Cheats 2026', ja: 'Warframe Cheats 2026', ko: 'Warframe Cheats 2026', zh: 'Warframe Cheats 2026', hi: 'Warframe Cheats 2026', id: 'Warframe Cheats 2026', th: 'Warframe Cheats 2026', vi: 'Warframe Cheats 2026', uk: 'Warframe Cheats 2026', cs: 'Warframe Cheats 2026', ro: 'Warframe Cheats 2026', sv: 'Warframe Cheats 2026' },
	hacks: { en: 'Warframe Cheats', es: 'Warframe Cheats', fr: 'Warframe Cheats', de: 'Warframe Cheats', pt: 'Warframe Cheats', it: 'Warframe Cheats', nl: 'Warframe Cheats', pl: 'Warframe Cheats', ru: 'Warframe Cheats', tr: 'Warframe Cheats', ar: 'Warframe Cheats', ja: 'Warframe Cheats', ko: 'Warframe Cheats', zh: 'Warframe Cheats', hi: 'Warframe Cheats', id: 'Warframe Cheats', th: 'Warframe Cheats', vi: 'Warframe Cheats', uk: 'Warframe Cheats', cs: 'Warframe Cheats', ro: 'Warframe Cheats', sv: 'Warframe Cheats' },
	'cheat-download': { en: 'Warframe Cheats Download', es: 'Descarga Warframe Cheats', fr: 'Téléchargement Warframe Cheats', de: 'Warframe Cheats Download', pt: 'Download Warframe Cheats', it: 'Download Warframe Cheats', nl: 'Warframe Cheats Download', pl: 'Pobieranie Warframe Cheats', ru: 'Скачать Warframe Cheats', tr: 'Warframe Hile İndir', ar: 'Warframe Cheats Download', ja: 'Warframe Cheats Download', ko: 'Warframe Cheats Download', zh: 'Warframe Cheats Download', hi: 'Warframe Cheats Download', id: 'Warframe Cheats Download', th: 'Warframe Cheats Download', vi: 'Warframe Cheats Download', uk: 'Завантаження Warframe Cheats', cs: 'Warframe Cheats Download', ro: 'Descărcare Warframe Cheats', sv: 'Warframe Cheats Download' },
	'mod-menu': { en: 'Warframe Mod Menu', es: 'Warframe Mod Menu', fr: 'Warframe Mod Menu', de: 'Warframe Mod Menu', pt: 'Warframe Mod Menu', it: 'Warframe Mod Menu', nl: 'Warframe Mod Menu', pl: 'Warframe Mod Menu', ru: 'Warframe Mod Menu', tr: 'Warframe Mod Menu', ar: 'Warframe Mod Menu', ja: 'Warframe Mod Menu', ko: 'Warframe Mod Menu', zh: 'Warframe Mod Menu', hi: 'Warframe Mod Menu', id: 'Warframe Mod Menu', th: 'Warframe Mod Menu', vi: 'Warframe Mod Menu', uk: 'Warframe Mod Menu', cs: 'Warframe Mod Menu', ro: 'Warframe Mod Menu', sv: 'Warframe Mod Menu' },
	'soft-aim': { en: 'Warframe Soft Aim', es: 'Warframe Soft Aim', fr: 'Warframe Soft Aim', de: 'Warframe Soft Aim', pt: 'Warframe Soft Aim', it: 'Warframe Soft Aim', nl: 'Warframe Soft Aim', pl: 'Warframe Soft Aim', ru: 'Warframe Soft Aim', tr: 'Warframe Soft Aim', ar: 'Warframe Soft Aim', ja: 'Warframe Soft Aim', ko: 'Warframe Soft Aim', zh: 'Warframe Soft Aim', hi: 'Warframe Soft Aim', id: 'Warframe Soft Aim', th: 'Warframe Soft Aim', vi: 'Warframe Soft Aim', uk: 'Warframe Soft Aim', cs: 'Warframe Soft Aim', ro: 'Warframe Soft Aim', sv: 'Warframe Soft Aim' },
	'best-cheats': { en: 'Best Warframe Cheats', es: 'Mejores Warframe Cheats', fr: 'Meilleures Warframe Cheats', de: 'Beste Warframe Cheats', pt: 'Melhores Warframe Cheats', it: 'Migliori Warframe Cheats', nl: 'Beste Warframe Cheats', pl: 'Najlepsze Warframe Cheats', ru: 'Лучшие Warframe Cheats', tr: 'En İyi Warframe Hileleri', ar: 'Best Warframe Cheats', ja: 'Best Warframe Cheats', ko: 'Best Warframe Cheats', zh: 'Best Warframe Cheats', hi: 'Best Warframe Cheats', id: 'Best Warframe Cheats', th: 'Best Warframe Cheats', vi: 'Best Warframe Cheats', uk: 'Найкращі Warframe Cheats', cs: 'Nejlepší Warframe Cheats', ro: 'Cele mai bune Warframe Cheats', sv: 'Bästa Warframe Cheats' },
	'aimbot-hack': { en: 'Warframe Aimbot Hack', es: 'Warframe Aimbot Hack', fr: 'Warframe Aimbot Hack', de: 'Warframe Aimbot Hack', pt: 'Warframe Aimbot Hack', it: 'Warframe Aimbot Hack', nl: 'Warframe Aimbot Hack', pl: 'Warframe Aimbot Hack', ru: 'Warframe Aimbot Hack', tr: 'Warframe Aimbot Hack', ar: 'Warframe Aimbot Hack', ja: 'Warframe Aimbot Hack', ko: 'Warframe Aimbot Hack', zh: 'Warframe Aimbot Hack', hi: 'Warframe Aimbot Hack', id: 'Warframe Aimbot Hack', th: 'Warframe Aimbot Hack', vi: 'Warframe Aimbot Hack', uk: 'Warframe Aimbot Hack', cs: 'Warframe Aimbot Hack', ro: 'Warframe Aimbot Hack', sv: 'Warframe Aimbot Hack' },
	'esp-hack': { en: 'Warframe ESP Hack', es: 'Warframe ESP Hack', fr: 'Warframe ESP Hack', de: 'Warframe ESP Hack', pt: 'Warframe ESP Hack', it: 'Warframe ESP Hack', nl: 'Warframe ESP Hack', pl: 'Warframe ESP Hack', ru: 'Warframe ESP Hack', tr: 'Warframe ESP Hack', ar: 'Warframe ESP Hack', ja: 'Warframe ESP Hack', ko: 'Warframe ESP Hack', zh: 'Warframe ESP Hack', hi: 'Warframe ESP Hack', id: 'Warframe ESP Hack', th: 'Warframe ESP Hack', vi: 'Warframe ESP Hack', uk: 'Warframe ESP Hack', cs: 'Warframe ESP Hack', ro: 'Warframe ESP Hack', sv: 'Warframe ESP Hack' },
	'unlock-all': { en: 'Warframe Unlock All', es: 'Warframe Unlock All', fr: 'Warframe Unlock All', de: 'Warframe Unlock All', pt: 'Warframe Unlock All', it: 'Warframe Unlock All', nl: 'Warframe Unlock All', pl: 'Warframe Unlock All', ru: 'Warframe Unlock All', tr: 'Warframe Unlock All', ar: 'Warframe Unlock All', ja: 'Warframe Unlock All', ko: 'Warframe Unlock All', zh: 'Warframe Unlock All', hi: 'Warframe Unlock All', id: 'Warframe Unlock All', th: 'Warframe Unlock All', vi: 'Warframe Unlock All', uk: 'Warframe Unlock All', cs: 'Warframe Unlock All', ro: 'Warframe Unlock All', sv: 'Warframe Unlock All' },
};

const CTA2_HREF = {
	'warframe-esp': '/warframe-wallhack/',
	'warframe-aimbot': '/warframe-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/warframe-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/warframe-cheats/',
	wallhack: '/warframe-esp/',
	radar: '/warframe-esp/',
	'eac-bypass': '/updates/',
	'cheats-2026': '/features/',
	hacks: '/warframe-cheats/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/warframe-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/warframe-aimbot/',
	'esp-hack': '/warframe-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Warframe Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Warframe Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for warframecheats.net and Warframe licenses.`),
		imageAlt: `warframe-cheats ${kind} ESP wallhack Aimbot legal page`,
		galleryTitle: `Warframe Cheats ${kind} resources`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on warframecheats.net.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Warframe terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@warframecheats.net',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
