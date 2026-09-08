import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Project Zomboid indetectables para Project Zomboid en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Project Zomboid anti-cheat. Entrega digital instantánea.', h1: 'Project Zomboid Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Project Zomboid en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Project Zomboid anti-cheat tras cada parche.', imageAlt: 'Hero project-zomboid-cheats con ESP wallhack y Aimbot indetectables', gallery: 'Galería Project Zomboid Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Project Zomboid Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en misiones y multiplayer servers.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Project Zomboid indétectables pour Project Zomboid sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Project Zomboid anti-cheat. Livraison numérique instantanée.', h1: 'Project Zomboid Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Project Zomboid sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Project Zomboid anti-cheat après chaque patch.', imageAlt: 'Hero project-zomboid-cheats avec ESP wallhack et Aimbot indétectables', gallery: 'Galerie Project Zomboid Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Project Zomboid Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Idéal pour repérer zombies et joueurs en survie, multijoueur et coop.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Project Zomboid Cheats für Project Zomboid auf PC. ESP Wallhack, Radar Hack und Aimbot mit Project Zomboid anti-cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Project Zomboid Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Project Zomboid: ESP Wallhack, Radar und Aimbot mit Project Zomboid anti-cheat-Wartung nach jedem Patch.', imageAlt: 'Project Zomboid-cheats Hero mit ESP Wallhack und Aimbot undetected', gallery: 'Project Zomboid Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Project Zomboid Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in missions und multiplayer servers zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Project Zomboid indetectáveis para Project Zomboid no PC. ESP wallhack, radar hack e Aimbot com manutenção Project Zomboid anti-cheat. Entrega digital instantánea.', h1: 'Project Zomboid Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Project Zomboid no Windows PC: ESP wallhack, radar e Aimbot com manutenção Project Zomboid anti-cheat após cada patch.', imageAlt: 'Hero project-zomboid-cheats com ESP wallhack e Aimbot indetectáveis', gallery: 'Galeria Project Zomboid Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Project Zomboid Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em survival e multiplayer servers.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Project Zomboid indetectable per Project Zomboid su PC. ESP wallhack, radar hack e Aimbot con manutenzione Project Zomboid anti-cheat. Consegna digitale istantanea.', h1: 'Project Zomboid Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Project Zomboid su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Project Zomboid anti-cheat dopo ogni patch.', imageAlt: 'Hero project-zomboid-cheats con ESP wallhack e Aimbot indetectable', gallery: 'Galleria Project Zomboid Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Project Zomboid Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in missions e multiplayer servers.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Project Zomboid cheats voor Project Zomboid op PC. ESP wallhack, radar hack en Aimbot met Project Zomboid anti-cheat-onderhoud. Directe digitale levering.', h1: 'Project Zomboid Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Project Zomboid: ESP wallhack, radar en Aimbot met Project Zomboid anti-cheat-onderhoud na elke patch.', imageAlt: 'Project Zomboid-cheats hero met ESP wallhack en Aimbot undetected', gallery: 'Project Zomboid Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Project Zomboid Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in missions en multiplayer servers.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Project Zomboid dla Project Zomboid na PC. ESP wallhack, radar hack i Aimbot z konserwacją Project Zomboid anti-cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Project Zomboid Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Project Zomboid na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Project Zomboid anti-cheat po każdym patchu.', imageAlt: 'Hero project-zomboid-cheats z ESP wallhack i Aimbot undetected', gallery: 'Galeria Project Zomboid Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Project Zomboid Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i multiplayer servers.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Project Zomboid для Project Zomboid на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Project Zomboid anti-cheat. Мгновенная цифровая доставка.', h1: 'Project Zomboid Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Project Zomboid на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Project Zomboid anti-cheat после патчей.', imageAlt: 'Hero project-zomboid-cheats с ESP wallhack и Aimbot undetected', gallery: 'Галерея Project Zomboid Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Project Zomboid Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в survival и multiplayer servers.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Project Zomboid için undetected hileler. ESP wallhack, radar hack ve Aimbot — Project Zomboid anti-cheat bakımı. Anında dijital teslimat.', h1: 'Project Zomboid Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Project Zomboid Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Project Zomboid anti-cheat bakımı dahil.', imageAlt: 'Project Zomboid-cheats player ESP wallhack ve Aimbot undetected', gallery: 'Project Zomboid Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Project Zomboid Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve multiplayer servers\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Project Zomboid Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Project Zomboid undetected لـ Project Zomboid على PC. ESP wallhack ورadar hack وAimbot مع صيانة Project Zomboid anti-cheat. تسليم رقمي فوري.', h1: 'Project Zomboid Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Project Zomboid على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Project Zomboid anti-cheat.', imageAlt: 'Hero project-zomboid-cheats مع ESP wallhack وAimbot undetected', gallery: 'معرض Project Zomboid Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Project Zomboid Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وmultiplayer servers.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Project Zomboid Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Project Zomboid向けundetectedチート。ESP wallhack、radar hack、Aimbot、Project Zomboid anti-cheatメンテナンス。即時デジタル配信。', h1: 'Project Zomboid Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Project Zomboid Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Project Zomboid anti-cheatメンテナンス付き。', imageAlt: 'project-zomboid-cheats player ESP wallhackとAimbot undetected', gallery: 'Project Zomboid Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にProject Zomboid Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとmultiplayer serversで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Project Zomboid undetected 치트. ESP wallhack, radar hack, Aimbot, Project Zomboid anti-cheat 유지보수. 즉시 디지털 배송.', h1: 'Project Zomboid Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Project Zomboid Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Project Zomboid anti-cheat 유지보수 포함.', imageAlt: 'project-zomboid-cheats player ESP wallhack 및 Aimbot undetected', gallery: 'Project Zomboid Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Project Zomboid Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 multiplayer servers에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Project Zomboid Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Project Zomboid undetected作弊。ESP wallhack、radar hack、Aimbot、Project Zomboid anti-cheat维护。即时数字交付。', h1: 'Project Zomboid Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Project Zomboid Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Project Zomboid anti-cheat维护。', imageAlt: 'project-zomboid-cheats player ESP wallhack与Aimbot undetected', gallery: 'Project Zomboid Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Project Zomboid Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在生存和multiplayer servers中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Project Zomboid undetected cheats. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. Instant digital delivery.', h1: 'Project Zomboid Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Project Zomboid Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, anti-cheat maintenance सहित.', imageAlt: 'project-zomboid-cheats player ESP wallhack और Aimbot undetected', gallery: 'Project Zomboid Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Project Zomboid Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और multiplayer servers में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Project Zomboid undetected untuk Project Zomboid di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Project Zomboid anti-cheat. Pengiriman digital instan.', h1: 'Project Zomboid Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Project Zomboid di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Project Zomboid anti-cheat.', imageAlt: 'Hero project-zomboid-cheats ESP wallhack dan Aimbot undetected', gallery: 'Galeri Project Zomboid Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Project Zomboid Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan multiplayer servers.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Project Zomboid undetected สำหรับ Project Zomboid บน PC. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Project Zomboid Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Project Zomboid บน Windows PC: ESP wallhack, radar, Aimbot พร้อม anti-cheat maintenance', imageAlt: 'Hero project-zomboid-cheats ESP wallhack และ Aimbot undetected', gallery: 'แกลเลอรี Project Zomboid Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Project Zomboid Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ multiplayer servers', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Project Zomboid undetected cho Project Zomboid trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Project Zomboid anti-cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Project Zomboid Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Project Zomboid trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Project Zomboid anti-cheat.', imageAlt: 'Hero project-zomboid-cheats ESP wallhack và Aimbot undetected', gallery: 'Thư viện Project Zomboid Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Project Zomboid Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và multiplayer servers.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Project Zomboid для Project Zomboid на PC. ESP wallhack, radar hack, Aimbot, обслуговування Project Zomboid anti-cheat. Мгновенная цифровая доставка.', h1: 'Project Zomboid Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Project Zomboid на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Project Zomboid anti-cheat.', imageAlt: 'Hero project-zomboid-cheats з ESP wallhack і Aimbot undetected', gallery: 'Галерея Project Zomboid Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Project Zomboid Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і multiplayer servers.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Project Zomboid cheaty pro Project Zomboid na PC. ESP wallhack, radar hack, Aimbot, údržba Project Zomboid anti-cheat. Okamžité digitální doručení.', h1: 'Project Zomboid Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Project Zomboid na Windows PC: ESP wallhack, radar, Aimbot s údržbou Project Zomboid anti-cheat.', imageAlt: 'Hero project-zomboid-cheats s ESP wallhack a Aimbot undetected', gallery: 'Galerie Project Zomboid Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Project Zomboid Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a multiplayer servers.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Project Zomboid undetected pentru Project Zomboid pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Project Zomboid anti-cheat. Livrare digitală instantă.', h1: 'Project Zomboid Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Project Zomboid pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Project Zomboid anti-cheat.', imageAlt: 'Hero project-zomboid-cheats cu ESP wallhack și Aimbot undetected', gallery: 'Galerie Project Zomboid Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Project Zomboid Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și multiplayer servers.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Project Zomboid Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Project Zomboid cheats för Project Zomboid på PC. ESP wallhack, radar hack, Aimbot, Project Zomboid anti-cheat-underhåll. Omedelbar digital leverans.', h1: 'Project Zomboid Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Project Zomboid på Windows PC: ESP wallhack, radar, Aimbot med Project Zomboid anti-cheat-underhåll.', imageAlt: 'Project Zomboid-cheats hero med ESP wallhack och Aimbot undetected', gallery: 'Project Zomboid Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Project Zomboid Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och multiplayer servers.', topicB: 'En licens istället för separata verktyg.' },
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
	'project-zomboid-esp': { suffix: 'enemy boxes & Wallhack', focus: 'enemy boxes, medical supply markers, and wallhack overlays' },
	'project-zomboid-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar, and cloud DMA controls' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup' },
	updates: { suffix: 'Anti-cheat maintenance Log', focus: 'anti-cheat patch status and rebuild notes' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and anti-cheat questions' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact' },
	undetected: { suffix: 'Anti-cheat safe Status', focus: 'undetected maintenance after Project Zomboid anti-cheat patches' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations' },
	'eac-bypass': { suffix: 'Patch Maintenance', focus: 'how anti-cheat updates are handled for Project Zomboid Cheats' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Project Zomboid cheats checklist before checkout' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Project Zomboid Cheats pillar for ESP and Aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for PC and controllers' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Project Zomboid cheats' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Project Zomboid' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools' },
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Project Zomboid Cheats', focus: 'ESP wallhack, radar, and Aimbot' };
	let titleBase = topicName.includes('2026')
		? `${topicName} | ${meta.suffix}`
		: `${topicName} 2026 | ${meta.suffix}`;
	// Short topic labels (FAQ, Support, etc.) need brand context for usable SERP titles.
	if (titleBase.length < 35) {
		titleBase = `${topicName} 2026 | Project Zomboid Cheats ${meta.suffix}`;
	}
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(
				`${topicName}: ${meta.focus} for Project Zomboid. ${p.delivery}. anti-cheat maintenance included.`,
			),
		),
		h1: `${topicName} — ${meta.suffix}`,
		intro: p.s1(`${topicName} for ${p.maps}: ${meta.focus}.`),
		imageAlt: `project-zomboid-cheats ${pageKey} ${meta.focus} preview`,
		galleryTitle: `Project Zomboid Cheats ${topicName} gallery`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(`${topicName} — ${p.maps}`, p.s1(`Read zombies and survivors with ESP wallhack.`), p.s2()),
			section(`ESP wallhack & ${p.undetected}`, p.s1('Toggle overlays for open-world Knox County looting.'), p.s3()),
			section(`${p.delivery}`, p.s2(), p.s3()),
		],
	};
}

const TOPIC_NAMES = {
	'project-zomboid-esp': { en: 'Project Zomboid ESP', es: 'Project Zomboid ESP', fr: 'Project Zomboid ESP', de: 'Project Zomboid ESP', pt: 'Project Zomboid ESP', it: 'Project Zomboid ESP', nl: 'Project Zomboid ESP', pl: 'Project Zomboid ESP', ru: 'Project Zomboid ESP', tr: 'Project Zomboid ESP', ar: 'Project Zomboid ESP', ja: 'Project Zomboid ESP', ko: 'Project Zomboid ESP', zh: 'Project Zomboid ESP', hi: 'Project Zomboid ESP', id: 'Project Zomboid ESP', th: 'Project Zomboid ESP', vi: 'Project Zomboid ESP', uk: 'Project Zomboid ESP', cs: 'Project Zomboid ESP', ro: 'Project Zomboid ESP', sv: 'Project Zomboid ESP' },
	'project-zomboid-aimbot': { en: 'Project Zomboid Aimbot', es: 'Project Zomboid Aimbot', fr: 'Project Zomboid Aimbot', de: 'Project Zomboid Aimbot', pt: 'Project Zomboid Aimbot', it: 'Project Zomboid Aimbot', nl: 'Project Zomboid Aimbot', pl: 'Project Zomboid Aimbot', ru: 'Project Zomboid Aimbot', tr: 'Project Zomboid Aimbot', ar: 'Project Zomboid Aimbot', ja: 'Project Zomboid Aimbot', ko: 'Project Zomboid Aimbot', zh: 'Project Zomboid Aimbot', hi: 'Project Zomboid Aimbot', id: 'Project Zomboid Aimbot', th: 'Project Zomboid Aimbot', vi: 'Project Zomboid Aimbot', uk: 'Project Zomboid Aimbot', cs: 'Project Zomboid Aimbot', ro: 'Project Zomboid Aimbot', sv: 'Project Zomboid Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Project Zomboid Wallhack', es: 'Project Zomboid Wallhack', fr: 'Project Zomboid Wallhack', de: 'Project Zomboid Wallhack', pt: 'Project Zomboid Wallhack', it: 'Project Zomboid Wallhack', nl: 'Project Zomboid Wallhack', pl: 'Project Zomboid Wallhack', ru: 'Project Zomboid Wallhack', tr: 'Project Zomboid Wallhack', ar: 'Project Zomboid Wallhack', ja: 'Project Zomboid Wallhack', ko: 'Project Zomboid Wallhack', zh: 'Project Zomboid Wallhack', hi: 'Project Zomboid Wallhack', id: 'Project Zomboid Wallhack', th: 'Project Zomboid Wallhack', vi: 'Project Zomboid Wallhack', uk: 'Project Zomboid Wallhack', cs: 'Project Zomboid Wallhack', ro: 'Project Zomboid Wallhack', sv: 'Project Zomboid Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'eac-bypass': { en: 'Anti-cheat bypass', es: 'Bypass Project Zomboid anti-cheat', fr: 'Bypass Project Zomboid anti-cheat', de: 'Anti-cheat bypass', pt: 'Bypass Project Zomboid anti-cheat', it: 'Bypass Project Zomboid anti-cheat', nl: 'Anti-cheat bypass', pl: 'Bypass Project Zomboid anti-cheat', ru: 'Bypass Project Zomboid anti-cheat', tr: 'anti-cheat bypass', ar: 'Bypass Project Zomboid anti-cheat', ja: 'Anti-cheat bypass', ko: 'Anti-cheat bypass', zh: 'Anti-cheat bypass', hi: 'Anti-cheat bypass', id: 'Bypass Project Zomboid anti-cheat', th: 'Anti-cheat bypass', vi: 'Bypass Project Zomboid anti-cheat', uk: 'Bypass Project Zomboid anti-cheat', cs: 'Anti-cheat bypass', ro: 'Bypass Project Zomboid anti-cheat', sv: 'Anti-cheat bypass' },
	'cheats-2026': { en: 'Project Zomboid Cheats 2026', es: 'Project Zomboid Cheats 2026', fr: 'Project Zomboid Cheats 2026', de: 'Project Zomboid Cheats 2026', pt: 'Project Zomboid Cheats 2026', it: 'Project Zomboid Cheats 2026', nl: 'Project Zomboid Cheats 2026', pl: 'Project Zomboid Cheats 2026', ru: 'Project Zomboid Cheats 2026', tr: 'Project Zomboid Cheats 2026', ar: 'Project Zomboid Cheats 2026', ja: 'Project Zomboid Cheats 2026', ko: 'Project Zomboid Cheats 2026', zh: 'Project Zomboid Cheats 2026', hi: 'Project Zomboid Cheats 2026', id: 'Project Zomboid Cheats 2026', th: 'Project Zomboid Cheats 2026', vi: 'Project Zomboid Cheats 2026', uk: 'Project Zomboid Cheats 2026', cs: 'Project Zomboid Cheats 2026', ro: 'Project Zomboid Cheats 2026', sv: 'Project Zomboid Cheats 2026' },
	hacks: { en: 'Project Zomboid Cheats', es: 'Project Zomboid Cheats', fr: 'Project Zomboid Cheats', de: 'Project Zomboid Cheats', pt: 'Project Zomboid Cheats', it: 'Project Zomboid Cheats', nl: 'Project Zomboid Cheats', pl: 'Project Zomboid Cheats', ru: 'Project Zomboid Cheats', tr: 'Project Zomboid Cheats', ar: 'Project Zomboid Cheats', ja: 'Project Zomboid Cheats', ko: 'Project Zomboid Cheats', zh: 'Project Zomboid Cheats', hi: 'Project Zomboid Cheats', id: 'Project Zomboid Cheats', th: 'Project Zomboid Cheats', vi: 'Project Zomboid Cheats', uk: 'Project Zomboid Cheats', cs: 'Project Zomboid Cheats', ro: 'Project Zomboid Cheats', sv: 'Project Zomboid Cheats' },
	'cheat-download': { en: 'Project Zomboid Cheats Download', es: 'Descarga Project Zomboid Cheats', fr: 'Téléchargement Project Zomboid Cheats', de: 'Project Zomboid Cheats Download', pt: 'Download Project Zomboid Cheats', it: 'Download Project Zomboid Cheats', nl: 'Project Zomboid Cheats Download', pl: 'Pobieranie Project Zomboid Cheats', ru: 'Скачать Project Zomboid Cheats', tr: 'Project Zomboid Hile İndir', ar: 'Project Zomboid Cheats Download', ja: 'Project Zomboid Cheats Download', ko: 'Project Zomboid Cheats Download', zh: 'Project Zomboid Cheats Download', hi: 'Project Zomboid Cheats Download', id: 'Project Zomboid Cheats Download', th: 'Project Zomboid Cheats Download', vi: 'Project Zomboid Cheats Download', uk: 'Завантаження Project Zomboid Cheats', cs: 'Project Zomboid Cheats Download', ro: 'Descărcare Project Zomboid Cheats', sv: 'Project Zomboid Cheats Download' },
	'mod-menu': { en: 'Project Zomboid Mod Menu', es: 'Project Zomboid Mod Menu', fr: 'Project Zomboid Mod Menu', de: 'Project Zomboid Mod Menu', pt: 'Project Zomboid Mod Menu', it: 'Project Zomboid Mod Menu', nl: 'Project Zomboid Mod Menu', pl: 'Project Zomboid Mod Menu', ru: 'Project Zomboid Mod Menu', tr: 'Project Zomboid Mod Menu', ar: 'Project Zomboid Mod Menu', ja: 'Project Zomboid Mod Menu', ko: 'Project Zomboid Mod Menu', zh: 'Project Zomboid Mod Menu', hi: 'Project Zomboid Mod Menu', id: 'Project Zomboid Mod Menu', th: 'Project Zomboid Mod Menu', vi: 'Project Zomboid Mod Menu', uk: 'Project Zomboid Mod Menu', cs: 'Project Zomboid Mod Menu', ro: 'Project Zomboid Mod Menu', sv: 'Project Zomboid Mod Menu' },
	'soft-aim': { en: 'Project Zomboid Soft Aim', es: 'Project Zomboid Soft Aim', fr: 'Project Zomboid Soft Aim', de: 'Project Zomboid Soft Aim', pt: 'Project Zomboid Soft Aim', it: 'Project Zomboid Soft Aim', nl: 'Project Zomboid Soft Aim', pl: 'Project Zomboid Soft Aim', ru: 'Project Zomboid Soft Aim', tr: 'Project Zomboid Soft Aim', ar: 'Project Zomboid Soft Aim', ja: 'Project Zomboid Soft Aim', ko: 'Project Zomboid Soft Aim', zh: 'Project Zomboid Soft Aim', hi: 'Project Zomboid Soft Aim', id: 'Project Zomboid Soft Aim', th: 'Project Zomboid Soft Aim', vi: 'Project Zomboid Soft Aim', uk: 'Project Zomboid Soft Aim', cs: 'Project Zomboid Soft Aim', ro: 'Project Zomboid Soft Aim', sv: 'Project Zomboid Soft Aim' },
	'best-cheats': { en: 'Best Project Zomboid Cheats', es: 'Mejores Project Zomboid Cheats', fr: 'Meilleures Project Zomboid Cheats', de: 'Beste Project Zomboid Cheats', pt: 'Melhores Project Zomboid Cheats', it: 'Migliori Project Zomboid Cheats', nl: 'Beste Project Zomboid Cheats', pl: 'Najlepsze Project Zomboid Cheats', ru: 'Лучшие Project Zomboid Cheats', tr: 'En İyi Project Zomboid Hileleri', ar: 'Best Project Zomboid Cheats', ja: 'Best Project Zomboid Cheats', ko: 'Best Project Zomboid Cheats', zh: 'Best Project Zomboid Cheats', hi: 'Best Project Zomboid Cheats', id: 'Best Project Zomboid Cheats', th: 'Best Project Zomboid Cheats', vi: 'Best Project Zomboid Cheats', uk: 'Найкращі Project Zomboid Cheats', cs: 'Nejlepší Project Zomboid Cheats', ro: 'Cele mai bune Project Zomboid Cheats', sv: 'Bästa Project Zomboid Cheats' },
	'aimbot-hack': { en: 'Project Zomboid Aimbot Hack', es: 'Project Zomboid Aimbot Hack', fr: 'Project Zomboid Aimbot Hack', de: 'Project Zomboid Aimbot Hack', pt: 'Project Zomboid Aimbot Hack', it: 'Project Zomboid Aimbot Hack', nl: 'Project Zomboid Aimbot Hack', pl: 'Project Zomboid Aimbot Hack', ru: 'Project Zomboid Aimbot Hack', tr: 'Project Zomboid Aimbot Hack', ar: 'Project Zomboid Aimbot Hack', ja: 'Project Zomboid Aimbot Hack', ko: 'Project Zomboid Aimbot Hack', zh: 'Project Zomboid Aimbot Hack', hi: 'Project Zomboid Aimbot Hack', id: 'Project Zomboid Aimbot Hack', th: 'Project Zomboid Aimbot Hack', vi: 'Project Zomboid Aimbot Hack', uk: 'Project Zomboid Aimbot Hack', cs: 'Project Zomboid Aimbot Hack', ro: 'Project Zomboid Aimbot Hack', sv: 'Project Zomboid Aimbot Hack' },
	'esp-hack': { en: 'Project Zomboid ESP Hack', es: 'Project Zomboid ESP Hack', fr: 'Project Zomboid ESP Hack', de: 'Project Zomboid ESP Hack', pt: 'Project Zomboid ESP Hack', it: 'Project Zomboid ESP Hack', nl: 'Project Zomboid ESP Hack', pl: 'Project Zomboid ESP Hack', ru: 'Project Zomboid ESP Hack', tr: 'Project Zomboid ESP Hack', ar: 'Project Zomboid ESP Hack', ja: 'Project Zomboid ESP Hack', ko: 'Project Zomboid ESP Hack', zh: 'Project Zomboid ESP Hack', hi: 'Project Zomboid ESP Hack', id: 'Project Zomboid ESP Hack', th: 'Project Zomboid ESP Hack', vi: 'Project Zomboid ESP Hack', uk: 'Project Zomboid ESP Hack', cs: 'Project Zomboid ESP Hack', ro: 'Project Zomboid ESP Hack', sv: 'Project Zomboid ESP Hack' },
	'unlock-all': { en: 'Project Zomboid Unlock All', es: 'Project Zomboid Unlock All', fr: 'Project Zomboid Unlock All', de: 'Project Zomboid Unlock All', pt: 'Project Zomboid Unlock All', it: 'Project Zomboid Unlock All', nl: 'Project Zomboid Unlock All', pl: 'Project Zomboid Unlock All', ru: 'Project Zomboid Unlock All', tr: 'Project Zomboid Unlock All', ar: 'Project Zomboid Unlock All', ja: 'Project Zomboid Unlock All', ko: 'Project Zomboid Unlock All', zh: 'Project Zomboid Unlock All', hi: 'Project Zomboid Unlock All', id: 'Project Zomboid Unlock All', th: 'Project Zomboid Unlock All', vi: 'Project Zomboid Unlock All', uk: 'Project Zomboid Unlock All', cs: 'Project Zomboid Unlock All', ro: 'Project Zomboid Unlock All', sv: 'Project Zomboid Unlock All' },
};

const CTA2_HREF = {
	'project-zomboid-esp': '/project-zomboid-wallhack/',
	'project-zomboid-aimbot': '/project-zomboid-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/project-zomboid-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/project-zomboid-cheats/',
	wallhack: '/project-zomboid-esp/',
	radar: '/project-zomboid-esp/',
	'eac-bypass': '/updates/',
	'cheats-2026': '/features/',
	hacks: '/project-zomboid-cheats/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/project-zomboid-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/project-zomboid-aimbot/',
	'esp-hack': '/project-zomboid-esp/',
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
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Project Zomboid Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Project Zomboid Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for projectzomboidcheats.com and Project Zomboid licenses.`),
		imageAlt: `project-zomboid-cheats ${kind} ESP wallhack Aimbot legal page`,
		galleryTitle: `Project Zomboid Cheats ${kind} resources`,
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
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on projectzomboidcheats.com.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Project Zomboid terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@projectzomboidcheats.com',
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
