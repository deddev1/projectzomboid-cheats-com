export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/**
 * UI locales (language switcher / `/{lang}/…` routes).
 * All locales are included in sitemaps and indexable.
 * @see `seoIndexableLocales`, `includeLocaleUrlsInSitemap`
 */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Spain & Latin America' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'France & Africa' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Germany & DACH' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Brazil & Portugal' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Italy' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Netherlands & Belgium' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Poland' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Russia & CIS' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Turkey' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Middle East & North Africa' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Japan' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'South Korea' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'China & Singapore' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'India' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Indonesia' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Thailand' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Vietnam' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Ukraine' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Czech Republic' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Romania' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Sweden & Nordics' },
];

/** Official / canonical locale — English global pages at site root. */
export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

/** All locales are indexable and listed in per-locale sitemaps. */
export const seoIndexableLocales: readonly LocaleCode[] = localeCodes;

/** Include localized URLs in per-locale sitemaps and sitemap-i18n.xml. */
export const includeLocaleUrlsInSitemap = true;

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Project Zomboid Cheats Blog | ESP, Aimbot & Setup Guides',
		blogDescription:
			'Project Zomboid cheats blog — undetected ESP, wallhack, radar, aimbot setup, pricing, anti-cheat maintenance, and vendor comparisons for Windows PC.',
		blogH1: 'Project Zomboid Cheats Blog',
		blogIntro:
			'Guides for Project Zomboid cheats buyers: ESP and wallhack explainers, radar and aimbot settings, undetected anti-cheat notes, pricing breakdowns, and setup walkthroughs — plus Knox County game tips when you need them.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related Project Zomboid guides',
		allPosts: 'All blog posts',
		home: 'Project Zomboid Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Project Zomboid Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Project Zomboid Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Project Zomboid en PC Windows.',
		blogH1: 'Blog Project Zomboid Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos Project Zomboid indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Project Zomboid anti-cheat (EAC) en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Project Zomboid relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Project Zomboid Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Project Zomboid Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Project Zomboid Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour Project Zomboid sur PC Windows.',
		blogH1: 'Blog Project Zomboid Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Project Zomboid indétectables, ESP wallhack, radar hack, Aimbot et Project Zomboid anti-cheat (EAC) en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Project Zomboid associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Project Zomboid Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Project Zomboid Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Project Zomboid Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Project Zomboid auf Windows PC.',
		blogH1: 'Project Zomboid Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Project Zomboid Cheats, ESP Wallhack, Radar Hack, Aimbot und Project Zomboid anti-cheat (EAC) in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Project Zomboid Guides',
		allPosts: 'Alle Beiträge',
		home: 'Project Zomboid Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Project Zomboid Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Project Zomboid Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Project Zomboid no PC.',
		blogH1: 'Blog Project Zomboid Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats Project Zomboid indetectáveis, ESP wallhack, radar hack, Aimbot e Project Zomboid anti-cheat (EAC) em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Project Zomboid relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Project Zomboid Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Project Zomboid Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Project Zomboid Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per Project Zomboid su PC Windows.',
		blogH1: 'Blog Project Zomboid Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat Project Zomboid indetectable, ESP wallhack, radar hack, Aimbot e Project Zomboid anti-cheat (EAC) in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Project Zomboid correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Project Zomboid Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Project Zomboid Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Project Zomboid Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Project Zomboid op Windows PC.',
		blogH1: 'Project Zomboid Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Project Zomboid cheats, ESP wallhack, radar hack, Aimbot en Project Zomboid anti-cheat (EAC) in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Project Zomboid gidsen',
		allPosts: 'Alle posts',
		home: 'Project Zomboid Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Project Zomboid Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Project Zomboid Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla Project Zomboid na PC.',
		blogH1: 'Blog Project Zomboid Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Project Zomboid, ESP wallhack, radar hack, Aimbot i Project Zomboid anti-cheat (EAC) w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Project Zomboid',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Project Zomboid Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Project Zomboid Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Project Zomboid Cheats: undetected ESP, wallhack, radar и Aimbot для Project Zomboid на Windows PC.',
		blogH1: 'Блог Project Zomboid Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Project Zomboid, ESP wallhack, radar hack, Aimbot и Project Zomboid anti-cheat (EAC) на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Project Zomboid',
		allPosts: 'Все статьи',
		home: 'Главная Project Zomboid Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Project Zomboid Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Project Zomboid Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Project Zomboid Windows PC.',
		blogH1: 'Project Zomboid Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected Project Zomboid hileleri, ESP wallhack, radar hack, Aimbot ve Project Zomboid anti-cheat (EAC) SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Project Zomboid rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Project Zomboid Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Project Zomboid Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Project Zomboid Cheats: غش undetected وESP wallhack ورadar وAimbot لـ Project Zomboid على Windows PC.',
		blogH1: 'مدونة Project Zomboid Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Project Zomboid undetected وESP wallhack ورadar hack وAimbot وProject Zomboid anti-cheat (EAC) بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Project Zomboid ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Project Zomboid Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Project Zomboid Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Project Zomboid Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。Project Zomboid Windows PC向け。',
		blogH1: 'Project Zomboid Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected Project Zomboidチート、ESP wallhack、radar hack、Aimbot、Project Zomboid anti-cheat (EAC)のSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Project Zomboidガイド',
		allPosts: 'すべての記事',
		home: 'Project Zomboid Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Project Zomboid Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Project Zomboid Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Project Zomboid Windows PC.',
		blogH1: 'Project Zomboid Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Project Zomboid 치트, ESP wallhack, radar hack, Aimbot, Project Zomboid anti-cheat (EAC) SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Project Zomboid 가이드',
		allPosts: '모든 게시물',
		home: 'Project Zomboid Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Project Zomboid Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Project Zomboid Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Project Zomboid Windows PC。',
		blogH1: 'Project Zomboid Cheats 博客 — 全球指南',
		blogIntro:
			'undetected Project Zomboid作弊、ESP wallhack、radar hack、Aimbot和Project Zomboid anti-cheat (EAC)的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Project Zomboid指南',
		allPosts: '所有文章',
		home: 'Project Zomboid Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Project Zomboid Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Project Zomboid Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Project Zomboid Windows PC के लिए।',
		blogH1: 'Project Zomboid Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Project Zomboid cheats, ESP wallhack, radar hack, Aimbot और Project Zomboid anti-cheat (EAC) SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Project Zomboid गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Project Zomboid Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Project Zomboid Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Project Zomboid Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk Project Zomboid di PC Windows.',
		blogH1: 'Blog Project Zomboid Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat Project Zomboid undetected, ESP wallhack, radar hack, Aimbot dan Project Zomboid anti-cheat (EAC) dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Project Zomboid terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Project Zomboid Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Project Zomboid Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Project Zomboid Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Project Zomboid บน PC',
		blogH1: 'บล็อก Project Zomboid Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Project Zomboid undetected, ESP wallhack, radar hack, Aimbot และ Project Zomboid anti-cheat (EAC) 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Project Zomboid ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Project Zomboid Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Project Zomboid Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Project Zomboid Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Project Zomboid trên PC.',
		blogH1: 'Blog Project Zomboid Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Project Zomboid undetected, ESP wallhack, radar hack, Aimbot và Project Zomboid anti-cheat (EAC) bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Project Zomboid liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Project Zomboid Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Project Zomboid Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Project Zomboid Cheats: undetected ESP, wallhack, radar та Aimbot для Project Zomboid на Windows PC.',
		blogH1: 'Блог Project Zomboid Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Project Zomboid, ESP wallhack, radar hack, Aimbot та Project Zomboid anti-cheat (EAC) 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Project Zomboid",
		allPosts: 'Усі статті',
		home: 'Головна Project Zomboid Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Project Zomboid Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Project Zomboid Cheats: undetected ESP, wallhack, radar a Aimbot pro Project Zomboid na Windows PC.',
		blogH1: 'Blog Project Zomboid Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Project Zomboid cheaty, ESP wallhack, radar hack, Aimbot a Project Zomboid anti-cheat (EAC) ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Project Zomboid průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Project Zomboid Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Project Zomboid Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Project Zomboid Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Project Zomboid pe PC.',
		blogH1: 'Blog Project Zomboid Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Project Zomboid undetected, ESP wallhack, radar hack, Aimbot și Project Zomboid anti-cheat (EAC) în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Project Zomboid related',
		allPosts: 'Toate articolele',
		home: 'Acasă Project Zomboid Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Project Zomboid Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Project Zomboid Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för Project Zomboid på PC.',
		blogH1: 'Project Zomboid Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Project Zomboid cheats, ESP wallhack, radar hack, Aimbot och Project Zomboid anti-cheat (EAC) på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Project Zomboid guider',
		allPosts: 'Alla inlägg',
		home: 'Project Zomboid Cheats hem',
		language: 'Språk',
	},
};
