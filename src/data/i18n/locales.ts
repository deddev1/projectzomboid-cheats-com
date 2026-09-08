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
		blogTitle: 'Warframe Guides & Blog | Game Tips & Product Intel',
		blogDescription:
			'Warframe game guides on Steel Path, open world, factions, missions, and patch notes — plus ESP, aimbot, and anti-cheat product guides with official Wiki links.',
		blogH1: 'Warframe Guides & Intel',
		blogIntro:
			'Game guides for Steel Path, open world farming, factions, mission types, and patch notes — linked to the Warframe Wiki and Digital Extremes. Plus product guides for ESP, soft aim, radar, and anti-cheat maintenance.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related Warframe guides',
		allPosts: 'All blog posts',
		home: 'Warframe Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Warframe Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Warframe Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Warframe en PC Windows.',
		blogH1: 'Blog Warframe Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos Warframe indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Digital Extremes anti-cheat (EAC) en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Warframe relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Warframe Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Warframe Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Warframe Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour Warframe sur PC Windows.',
		blogH1: 'Blog Warframe Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Warframe indétectables, ESP wallhack, radar hack, Aimbot et Digital Extremes anti-cheat (EAC) en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Warframe associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Warframe Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Warframe Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Warframe Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Warframe auf Windows PC.',
		blogH1: 'Warframe Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Warframe Cheats, ESP Wallhack, Radar Hack, Aimbot und Digital Extremes anti-cheat (EAC) in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Warframe Guides',
		allPosts: 'Alle Beiträge',
		home: 'Warframe Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Warframe Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Warframe Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Warframe no PC.',
		blogH1: 'Blog Warframe Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats Warframe indetectáveis, ESP wallhack, radar hack, Aimbot e Digital Extremes anti-cheat (EAC) em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Warframe relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Warframe Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Warframe Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Warframe Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per Warframe su PC Windows.',
		blogH1: 'Blog Warframe Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat Warframe indetectable, ESP wallhack, radar hack, Aimbot e Digital Extremes anti-cheat (EAC) in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Warframe correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Warframe Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Warframe Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Warframe Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Warframe op Windows PC.',
		blogH1: 'Warframe Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Warframe cheats, ESP wallhack, radar hack, Aimbot en Digital Extremes anti-cheat (EAC) in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Warframe gidsen',
		allPosts: 'Alle posts',
		home: 'Warframe Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Warframe Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Warframe Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla Warframe na PC.',
		blogH1: 'Blog Warframe Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Warframe, ESP wallhack, radar hack, Aimbot i Digital Extremes anti-cheat (EAC) w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Warframe',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Warframe Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Warframe Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Warframe Cheats: undetected ESP, wallhack, radar и Aimbot для Warframe на Windows PC.',
		blogH1: 'Блог Warframe Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Warframe, ESP wallhack, radar hack, Aimbot и Digital Extremes anti-cheat (EAC) на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Warframe',
		allPosts: 'Все статьи',
		home: 'Главная Warframe Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Warframe Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Warframe Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Warframe Windows PC.',
		blogH1: 'Warframe Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected Warframe hileleri, ESP wallhack, radar hack, Aimbot ve Digital Extremes anti-cheat (EAC) SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Warframe rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Warframe Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Warframe Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Warframe Cheats: غش undetected وESP wallhack ورadar وAimbot لـ Warframe على Windows PC.',
		blogH1: 'مدونة Warframe Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Warframe undetected وESP wallhack ورadar hack وAimbot وDigital Extremes anti-cheat (EAC) بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Warframe ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Warframe Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Warframe Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Warframe Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。Warframe Windows PC向け。',
		blogH1: 'Warframe Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected Warframeチート、ESP wallhack、radar hack、Aimbot、Digital Extremes anti-cheat (EAC)のSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Warframeガイド',
		allPosts: 'すべての記事',
		home: 'Warframe Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Warframe Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Warframe Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Warframe Windows PC.',
		blogH1: 'Warframe Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Warframe 치트, ESP wallhack, radar hack, Aimbot, Digital Extremes anti-cheat (EAC) SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Warframe 가이드',
		allPosts: '모든 게시물',
		home: 'Warframe Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Warframe Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Warframe Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Warframe Windows PC。',
		blogH1: 'Warframe Cheats 博客 — 全球指南',
		blogIntro:
			'undetected Warframe作弊、ESP wallhack、radar hack、Aimbot和Digital Extremes anti-cheat (EAC)的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Warframe指南',
		allPosts: '所有文章',
		home: 'Warframe Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Warframe Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Warframe Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Warframe Windows PC के लिए।',
		blogH1: 'Warframe Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Warframe cheats, ESP wallhack, radar hack, Aimbot और Digital Extremes anti-cheat (EAC) SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Warframe गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Warframe Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Warframe Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Warframe Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk Warframe di PC Windows.',
		blogH1: 'Blog Warframe Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat Warframe undetected, ESP wallhack, radar hack, Aimbot dan Digital Extremes anti-cheat (EAC) dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Warframe terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Warframe Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Warframe Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Warframe Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Warframe บน PC',
		blogH1: 'บล็อก Warframe Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Warframe undetected, ESP wallhack, radar hack, Aimbot และ Digital Extremes anti-cheat (EAC) 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Warframe ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Warframe Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Warframe Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Warframe Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Warframe trên PC.',
		blogH1: 'Blog Warframe Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Warframe undetected, ESP wallhack, radar hack, Aimbot và Digital Extremes anti-cheat (EAC) bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Warframe liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Warframe Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Warframe Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Warframe Cheats: undetected ESP, wallhack, radar та Aimbot для Warframe на Windows PC.',
		blogH1: 'Блог Warframe Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Warframe, ESP wallhack, radar hack, Aimbot та Digital Extremes anti-cheat (EAC) 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Warframe",
		allPosts: 'Усі статті',
		home: 'Головна Warframe Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Warframe Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Warframe Cheats: undetected ESP, wallhack, radar a Aimbot pro Warframe na Windows PC.',
		blogH1: 'Blog Warframe Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Warframe cheaty, ESP wallhack, radar hack, Aimbot a Digital Extremes anti-cheat (EAC) ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Warframe průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Warframe Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Warframe Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Warframe Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Warframe pe PC.',
		blogH1: 'Blog Warframe Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Warframe undetected, ESP wallhack, radar hack, Aimbot și Digital Extremes anti-cheat (EAC) în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Warframe related',
		allPosts: 'Toate articolele',
		home: 'Acasă Warframe Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Warframe Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Warframe Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för Warframe på PC.',
		blogH1: 'Warframe Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Warframe cheats, ESP wallhack, radar hack, Aimbot och Digital Extremes anti-cheat (EAC) på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Warframe guider',
		allPosts: 'Alla inlägg',
		home: 'Warframe Cheats hem',
		language: 'Språk',
	},
};
