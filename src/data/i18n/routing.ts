import { siteConfig } from '../site';
import {
	defaultLocale,
	localeCodes,
	type LocaleCode,
	locales,
} from './locales';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'warframe-esp'
	| 'warframe-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac-bypass'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'warframe-esp': '/warframe-esp/',
	'warframe-aimbot': '/warframe-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/warframe-cheats/',
	wallhack: '/warframe-wallhack/',
	radar: '/warframe-radar/',
	'eac-bypass': '/warframe-cheats/',
	'cheats-2026': '/warframe-cheats/',
	hacks: '/warframe-cheats/',
	'cheat-download': '/pricing/',
	'mod-menu': '/features/',
	'soft-aim': '/warframe-aimbot/',
	'best-cheats': '/warframe-cheats/',
	'aimbot-hack': '/warframe-aimbot/',
	'esp-hack': '/warframe-esp/',
	'unlock-all': '/features/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Core English pages for sitemap.xml — focused warframe-cheats URLs only.
 * Thin keyword-duplicate landings redirect to these canonical pages.
 */
export const sitemapPageIds: PageId[] = [
	'home',
	'hacks',
	'warframe-esp',
	'warframe-aimbot',
	'wallhack',
	'radar',
	'features',
	'pricing',
	'setup',
	'updates',
	'faq',
	'support',
	'privacy',
	'refund',
	'terms',
];

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'warframe-esp': {
		en: 'warframe-esp',
		es: 'trucos-warframe-esp',
		fr: 'triche-warframe-esp',
		de: 'warframe-esp-wallhack',
		pt: 'cheats-warframe-esp',
		it: 'trucchi-warframe-esp',
		nl: 'warframe-esp-wallhack',
		pl: 'cheaty-warframe-esp',
		ru: 'warframe-esp-chity',
		tr: 'warframe-esp-hile',
		ar: 'warframe-esp-wallhack',
		ja: 'warframe-esp-wallhack',
		ko: 'warframe-esp-wallhack',
		zh: 'warframe-esp-wallhack',
		hi: 'warframe-esp-wallhack',
		id: 'warframe-esp-wallhack',
		th: 'warframe-esp-wallhack',
		vi: 'warframe-esp-wallhack',
		uk: 'warframe-esp-chity',
		cs: 'warframe-esp-wallhack',
		ro: 'warframe-esp-wallhack',
		sv: 'warframe-esp-wallhack',
	},
	'warframe-aimbot': {
		en: 'warframe-aimbot',
		es: 'trucos-warframe-aimbot',
		fr: 'triche-warframe-aimbot',
		de: 'warframe-aimbot',
		pt: 'cheats-warframe-aimbot',
		it: 'trucchi-warframe-aimbot',
		nl: 'warframe-aimbot',
		pl: 'cheaty-warframe-aimbot',
		ru: 'warframe-aimbot-chity',
		tr: 'warframe-aimbot-hile',
		ar: 'warframe-aimbot',
		ja: 'warframe-aimbot',
		ko: 'warframe-aimbot',
		zh: 'warframe-aimbot',
		hi: 'warframe-aimbot',
		id: 'warframe-aimbot',
		th: 'warframe-aimbot',
		vi: 'warframe-aimbot',
		uk: 'warframe-aimbot-chity',
		cs: 'warframe-aimbot',
		ro: 'warframe-aimbot',
		sv: 'warframe-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-warframe',
		fr: 'fonctionnalites-triche-warframe',
		de: 'warframe-cheats-funktionen',
		pt: 'recursos-cheats-warframe',
		it: 'funzioni-trucchi-warframe',
		nl: 'warframe-cheats-functies',
		pl: 'funkcje-cheatow-warframe',
		ru: 'funkcii-chitov-warframe',
		tr: 'warframe-hile-ozellikleri',
		ar: 'warframe-cheats-features',
		ja: 'warframe-cheats-features',
		ko: 'warframe-cheats-features',
		zh: 'warframe-cheats-features',
		hi: 'warframe-cheats-features',
		id: 'warframe-cheats-features',
		th: 'warframe-cheats-features',
		vi: 'warframe-cheats-features',
		uk: 'funkcii-chitiv-warframe',
		cs: 'warframe-cheats-funkce',
		ro: 'functii-cheats-warframe',
		sv: 'warframe-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-warframe',
		fr: 'prix-triche-warframe',
		de: 'warframe-cheats-preise',
		pt: 'precos-cheats-warframe',
		it: 'prezzi-trucchi-warframe',
		nl: 'warframe-cheats-prijzen',
		pl: 'ceny-cheatow-warframe',
		ru: 'ceny-chitov-warframe',
		tr: 'warframe-hile-fiyatlari',
		ar: 'warframe-cheats-pricing',
		ja: 'warframe-cheats-pricing',
		ko: 'warframe-cheats-pricing',
		zh: 'warframe-cheats-pricing',
		hi: 'warframe-cheats-pricing',
		id: 'warframe-cheats-pricing',
		th: 'warframe-cheats-pricing',
		vi: 'warframe-cheats-pricing',
		uk: 'ciny-chitiv-warframe',
		cs: 'warframe-cheats-ceny',
		ro: 'preturi-cheats-warframe',
		sv: 'warframe-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-warframe',
		fr: 'installation-triche-warframe',
		de: 'warframe-cheats-installation',
		pt: 'instalacao-cheats-warframe',
		it: 'installazione-trucchi-warframe',
		nl: 'warframe-cheats-installatie',
		pl: 'instalacja-cheatow-warframe',
		ru: 'ustanovka-chitov-warframe',
		tr: 'warframe-hile-kurulum',
		ar: 'warframe-cheats-setup',
		ja: 'warframe-cheats-setup',
		ko: 'warframe-cheats-setup',
		zh: 'warframe-cheats-setup',
		hi: 'warframe-cheats-setup',
		id: 'warframe-cheats-setup',
		th: 'warframe-cheats-setup',
		vi: 'warframe-cheats-setup',
		uk: 'vstanovka-chitiv-warframe',
		cs: 'warframe-cheats-instalace',
		ro: 'instalare-cheats-warframe',
		sv: 'warframe-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-warframe',
		fr: 'mises-a-jour-triche-warframe',
		de: 'warframe-cheats-updates',
		pt: 'atualizacoes-cheats-warframe',
		it: 'aggiornamenti-trucchi-warframe',
		nl: 'warframe-cheats-updates',
		pl: 'aktualizacje-cheatow-warframe',
		ru: 'obnovleniya-chitov-warframe',
		tr: 'warframe-hile-guncellemeleri',
		ar: 'warframe-cheats-updates',
		ja: 'warframe-cheats-updates',
		ko: 'warframe-cheats-updates',
		zh: 'warframe-cheats-updates',
		hi: 'warframe-cheats-updates',
		id: 'warframe-cheats-updates',
		th: 'warframe-cheats-updates',
		vi: 'warframe-cheats-updates',
		uk: 'onovlennya-chitiv-warframe',
		cs: 'warframe-cheats-aktualizace',
		ro: 'actualizari-cheats-warframe',
		sv: 'warframe-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-warframe',
		fr: 'faq-triche-warframe',
		de: 'warframe-cheats-faq',
		pt: 'faq-cheats-warframe',
		it: 'faq-trucchi-warframe',
		nl: 'warframe-cheats-faq',
		pl: 'faq-cheatow-warframe',
		ru: 'faq-chitov-warframe',
		tr: 'warframe-hile-sss',
		ar: 'warframe-cheats-faq',
		ja: 'warframe-cheats-faq',
		ko: 'warframe-cheats-faq',
		zh: 'warframe-cheats-faq',
		hi: 'warframe-cheats-faq',
		id: 'warframe-cheats-faq',
		th: 'warframe-cheats-faq',
		vi: 'warframe-cheats-faq',
		uk: 'faq-chitiv-warframe',
		cs: 'warframe-cheats-faq',
		ro: 'faq-cheats-warframe',
		sv: 'warframe-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-warframe',
		fr: 'support-triche-warframe',
		de: 'warframe-cheats-support',
		pt: 'suporte-cheats-warframe',
		it: 'supporto-trucchi-warframe',
		nl: 'warframe-cheats-support',
		pl: 'wsparcie-cheatow-warframe',
		ru: 'podderzhka-chitov-warframe',
		tr: 'warframe-hile-destek',
		ar: 'warframe-cheats-support',
		ja: 'warframe-cheats-support',
		ko: 'warframe-cheats-support',
		zh: 'warframe-cheats-support',
		hi: 'warframe-cheats-support',
		id: 'warframe-cheats-support',
		th: 'warframe-cheats-support',
		vi: 'warframe-cheats-support',
		uk: 'pidtrymka-chitiv-warframe',
		cs: 'warframe-cheats-podpora',
		ro: 'suport-cheats-warframe',
		sv: 'warframe-cheats-support',
	},
	undetected: {
		en: 'undetected-warframe-cheats',
		es: 'trucos-warframe-indetectables',
		fr: 'triche-warframe-indetectable',
		de: 'unentdeckte-warframe-cheats',
		pt: 'cheats-warframe-indetectaveis',
		it: 'trucchi-warframe-indetectabili',
		nl: 'undetected-warframe-cheats',
		pl: 'niewykrywalne-cheats-warframe',
		ru: 'nedecektiruemye-chity-warframe',
		tr: 'tespit-edilemeyen-warframe-hileleri',
		ar: 'undetected-warframe-cheats',
		ja: 'undetected-warframe-cheats',
		ko: 'undetected-warframe-cheats',
		zh: 'undetected-warframe-cheats',
		hi: 'undetected-warframe-cheats',
		id: 'undetected-warframe-cheats',
		th: 'undetected-warframe-cheats',
		vi: 'undetected-warframe-cheats',
		uk: 'nedecektovani-chity-warframe',
		cs: 'undetected-warframe-cheats',
		ro: 'cheats-warframe-nedetectabile',
		sv: 'undetected-warframe-cheats',
	},
	wallhack: {
		en: 'warframe-wallhack',
		es: 'wallhack-trucos-warframe',
		fr: 'wallhack-triche-warframe',
		de: 'warframe-wallhack',
		pt: 'wallhack-cheats-warframe',
		it: 'wallhack-trucchi-warframe',
		nl: 'warframe-wallhack',
		pl: 'wallhack-cheatow-warframe',
		ru: 'wallhack-chity-warframe',
		tr: 'warframe-wallhack-hile',
		ar: 'warframe-wallhack',
		ja: 'warframe-wallhack',
		ko: 'warframe-wallhack',
		zh: 'warframe-wallhack',
		hi: 'warframe-wallhack',
		id: 'warframe-wallhack',
		th: 'warframe-wallhack',
		vi: 'warframe-wallhack',
		uk: 'wallhack-chity-warframe',
		cs: 'warframe-wallhack',
		ro: 'wallhack-cheats-warframe',
		sv: 'warframe-wallhack',
	},
	radar: {
		en: 'warframe-radar-hack',
		es: 'radar-hack-trucos-warframe',
		fr: 'radar-hack-triche-warframe',
		de: 'warframe-radar-hack',
		pt: 'radar-hack-cheats-warframe',
		it: 'radar-hack-trucchi-warframe',
		nl: 'warframe-radar-hack',
		pl: 'radar-hack-cheatow-warframe',
		ru: 'radar-hack-chity-warframe',
		tr: 'warframe-radar-hack',
		ar: 'warframe-radar-hack',
		ja: 'warframe-radar-hack',
		ko: 'warframe-radar-hack',
		zh: 'warframe-radar-hack',
		hi: 'warframe-radar-hack',
		id: 'warframe-radar-hack',
		th: 'warframe-radar-hack',
		vi: 'warframe-radar-hack',
		uk: 'radar-hack-chity-warframe',
		cs: 'warframe-radar-hack',
		ro: 'radar-hack-cheats-warframe',
		sv: 'warframe-radar-hack',
	},
	'eac-bypass': {
		en: 'eac-bypass-warframe',
		es: 'eac-bypass-warframe-trucos',
		fr: 'eac-bypass-warframe-triche',
		de: 'eac-bypass-warframe',
		pt: 'eac-bypass-warframe-cheats',
		it: 'eac-bypass-warframe-trucchi',
		nl: 'eac-bypass-warframe',
		pl: 'eac-bypass-warframe-cheatow',
		ru: 'eac-bypass-warframe-chity',
		tr: 'eac-bypass-warframe',
		ar: 'eac-bypass-warframe',
		ja: 'eac-bypass-warframe',
		ko: 'eac-bypass-warframe',
		zh: 'eac-bypass-warframe',
		hi: 'eac-bypass-warframe',
		id: 'eac-bypass-warframe',
		th: 'eac-bypass-warframe',
		vi: 'eac-bypass-warframe',
		uk: 'eac-bypass-warframe-chity',
		cs: 'eac-bypass-warframe',
		ro: 'eac-bypass-warframe-cheats',
		sv: 'eac-bypass-warframe',
	},
	'cheats-2026': {
		en: 'warframe-cheats-2026',
		es: 'trucos-warframe-2026',
		fr: 'triche-warframe-2026',
		de: 'warframe-cheats-2026',
		pt: 'cheats-warframe-2026',
		it: 'trucchi-warframe-2026',
		nl: 'warframe-cheats-2026',
		pl: 'cheaty-warframe-2026',
		ru: 'chity-warframe-2026',
		tr: 'warframe-hileleri-2026',
		ar: 'warframe-cheats-2026',
		ja: 'warframe-cheats-2026',
		ko: 'warframe-cheats-2026',
		zh: 'warframe-cheats-2026',
		hi: 'warframe-cheats-2026',
		id: 'warframe-cheats-2026',
		th: 'warframe-cheats-2026',
		vi: 'warframe-cheats-2026',
		uk: 'chity-warframe-2026',
		cs: 'warframe-cheats-2026',
		ro: 'cheats-warframe-2026',
		sv: 'warframe-cheats-2026',
	},
	hacks: {
		en: 'warframe-cheats',
		es: 'hacks-trucos-warframe',
		fr: 'hacks-triche-warframe',
		de: 'warframe-cheats',
		pt: 'hacks-cheats-warframe',
		it: 'hacks-trucchi-warframe',
		nl: 'warframe-cheats',
		pl: 'hacks-cheatow-warframe',
		ru: 'haksy-chity-warframe',
		tr: 'warframe-hile-hacks',
		ar: 'warframe-cheats',
		ja: 'warframe-cheats',
		ko: 'warframe-cheats',
		zh: 'warframe-cheats',
		hi: 'warframe-cheats',
		id: 'warframe-cheats',
		th: 'warframe-cheats',
		vi: 'warframe-cheats',
		uk: 'haksy-chity-warframe',
		cs: 'warframe-cheats',
		ro: 'hacks-cheats-warframe',
		sv: 'warframe-cheats',
	},
	'cheat-download': {
		en: 'warframe-cheat-download',
		es: 'descarga-trucos-warframe',
		fr: 'telechargement-triche-warframe',
		de: 'warframe-cheat-download',
		pt: 'download-cheats-warframe',
		it: 'download-trucchi-warframe',
		nl: 'warframe-cheat-download',
		pl: 'pobieranie-cheatow-warframe',
		ru: 'skachat-chity-warframe',
		tr: 'warframe-hile-indir',
		ar: 'warframe-cheat-download',
		ja: 'warframe-cheat-download',
		ko: 'warframe-cheat-download',
		zh: 'warframe-cheat-download',
		hi: 'warframe-cheat-download',
		id: 'warframe-cheat-download',
		th: 'warframe-cheat-download',
		vi: 'warframe-cheat-download',
		uk: 'zavantazhennya-chitiv-warframe',
		cs: 'warframe-cheat-download',
		ro: 'descarcare-cheats-warframe',
		sv: 'warframe-cheat-download',
	},
	'mod-menu': {
		en: 'warframe-mod-menu',
		es: 'menu-mod-trucos-warframe',
		fr: 'menu-mod-triche-warframe',
		de: 'warframe-mod-menu',
		pt: 'menu-mod-cheats-warframe',
		it: 'menu-mod-trucchi-warframe',
		nl: 'warframe-mod-menu',
		pl: 'menu-mod-cheatow-warframe',
		ru: 'mod-menu-chity-warframe',
		tr: 'warframe-mod-menu',
		ar: 'warframe-mod-menu',
		ja: 'warframe-mod-menu',
		ko: 'warframe-mod-menu',
		zh: 'warframe-mod-menu',
		hi: 'warframe-mod-menu',
		id: 'warframe-mod-menu',
		th: 'warframe-mod-menu',
		vi: 'warframe-mod-menu',
		uk: 'mod-menu-chity-warframe',
		cs: 'warframe-mod-menu',
		ro: 'meniu-mod-cheats-warframe',
		sv: 'warframe-mod-menu',
	},
	'soft-aim': {
		en: 'warframe-soft-aim',
		es: 'soft-aim-trucos-warframe',
		fr: 'soft-aim-triche-warframe',
		de: 'warframe-soft-aim',
		pt: 'soft-aim-cheats-warframe',
		it: 'soft-aim-trucchi-warframe',
		nl: 'warframe-soft-aim',
		pl: 'soft-aim-cheatow-warframe',
		ru: 'soft-aim-chity-warframe',
		tr: 'warframe-soft-aim',
		ar: 'warframe-soft-aim',
		ja: 'warframe-soft-aim',
		ko: 'warframe-soft-aim',
		zh: 'warframe-soft-aim',
		hi: 'warframe-soft-aim',
		id: 'warframe-soft-aim',
		th: 'warframe-soft-aim',
		vi: 'warframe-soft-aim',
		uk: 'soft-aim-chity-warframe',
		cs: 'warframe-soft-aim',
		ro: 'soft-aim-cheats-warframe',
		sv: 'warframe-soft-aim',
	},
	'best-cheats': {
		en: 'best-warframe-cheats',
		es: 'mejores-trucos-warframe',
		fr: 'meilleures-triches-warframe',
		de: 'beste-warframe-cheats',
		pt: 'melhores-cheats-warframe',
		it: 'migliori-trucchi-warframe',
		nl: 'beste-warframe-cheats',
		pl: 'najlepsze-cheats-warframe',
		ru: 'luchshie-chity-warframe',
		tr: 'en-iyi-warframe-hileleri',
		ar: 'best-warframe-cheats',
		ja: 'best-warframe-cheats',
		ko: 'best-warframe-cheats',
		zh: 'best-warframe-cheats',
		hi: 'best-warframe-cheats',
		id: 'best-warframe-cheats',
		th: 'best-warframe-cheats',
		vi: 'best-warframe-cheats',
		uk: 'naykrashchi-chity-warframe',
		cs: 'nejlepsi-warframe-cheats',
		ro: 'cele-mai-bune-cheats-warframe',
		sv: 'basta-warframe-cheats',
	},
	'aimbot-hack': {
		en: 'warframe-aimbot-hack',
		es: 'aimbot-hack-trucos-warframe',
		fr: 'aimbot-hack-triche-warframe',
		de: 'warframe-aimbot-hack',
		pt: 'aimbot-hack-cheats-warframe',
		it: 'aimbot-hack-trucchi-warframe',
		nl: 'warframe-aimbot-hack',
		pl: 'aimbot-hack-cheatow-warframe',
		ru: 'aimbot-hack-chity-warframe',
		tr: 'warframe-aimbot-hack',
		ar: 'warframe-aimbot-hack',
		ja: 'warframe-aimbot-hack',
		ko: 'warframe-aimbot-hack',
		zh: 'warframe-aimbot-hack',
		hi: 'warframe-aimbot-hack',
		id: 'warframe-aimbot-hack',
		th: 'warframe-aimbot-hack',
		vi: 'warframe-aimbot-hack',
		uk: 'aimbot-hack-chity-warframe',
		cs: 'warframe-aimbot-hack',
		ro: 'aimbot-hack-cheats-warframe',
		sv: 'warframe-aimbot-hack',
	},
	'esp-hack': {
		en: 'warframe-esp-hack',
		es: 'esp-hack-trucos-warframe',
		fr: 'esp-hack-triche-warframe',
		de: 'warframe-esp-hack',
		pt: 'esp-hack-cheats-warframe',
		it: 'esp-hack-trucchi-warframe',
		nl: 'warframe-esp-hack',
		pl: 'esp-hack-cheatow-warframe',
		ru: 'esp-hack-chity-warframe',
		tr: 'warframe-esp-hack',
		ar: 'warframe-esp-hack',
		ja: 'warframe-esp-hack',
		ko: 'warframe-esp-hack',
		zh: 'warframe-esp-hack',
		hi: 'warframe-esp-hack',
		id: 'warframe-esp-hack',
		th: 'warframe-esp-hack',
		vi: 'warframe-esp-hack',
		uk: 'esp-hack-chity-warframe',
		cs: 'warframe-esp-hack',
		ro: 'esp-hack-cheats-warframe',
		sv: 'warframe-esp-hack',
	},
	'unlock-all': {
		en: 'warframe-unlock-all',
		es: 'unlock-all-trucos-warframe',
		fr: 'unlock-all-triche-warframe',
		de: 'warframe-unlock-all',
		pt: 'unlock-all-cheats-warframe',
		it: 'unlock-all-trucchi-warframe',
		nl: 'warframe-unlock-all',
		pl: 'unlock-all-cheatow-warframe',
		ru: 'unlock-all-chity-warframe',
		tr: 'warframe-unlock-all',
		ar: 'warframe-unlock-all',
		ja: 'warframe-unlock-all',
		ko: 'warframe-unlock-all',
		zh: 'warframe-unlock-all',
		hi: 'warframe-unlock-all',
		id: 'warframe-unlock-all',
		th: 'warframe-unlock-all',
		vi: 'warframe-unlock-all',
		uk: 'unlock-all-chity-warframe',
		cs: 'warframe-unlock-all',
		ro: 'unlock-all-cheats-warframe',
		sv: 'warframe-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			return getLocalizedPath(pageId, locale);
		}
	}
	return href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return new URL(getLocalizedPath(pageId, locale), siteConfig.url).href;
}

/**
 * Canonical path for SEO — each locale page canonicalizes to its own localized URL.
 */
export function getCanonicalPath(pageId: PageId, locale: LocaleCode = defaultLocale): string {
	return getLocalizedPath(pageId, locale);
}

export function absoluteCanonicalUrl(pageId: PageId, locale: LocaleCode = defaultLocale): string {
	return absoluteLocalizedUrl(pageId, locale);
}

/** Full hreflang cluster — all locales plus x-default (English). */
export function getHreflangAlternates(pageId: PageId) {
	return [
		...locales.map((locale) => ({
			hreflang: locale.hreflang,
			href: absoluteLocalizedUrl(pageId, locale.code),
		})),
		{ hreflang: 'x-default' as const, href: absoluteLocalizedUrl(pageId, defaultLocale) },
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.cheats ?? 'Cheats', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
		{ label: labels.reviews ?? 'Reviews', href: '/reviews/' },
	];
	return items;
}
