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
	| 'project-zomboid-esp'
	| 'project-zomboid-aimbot'
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
	'project-zomboid-esp': '/project-zomboid-esp/',
	'project-zomboid-aimbot': '/project-zomboid-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/project-zomboid-cheats/',
	wallhack: '/project-zomboid-wallhack/',
	radar: '/project-zomboid-radar/',
	'eac-bypass': '/project-zomboid-cheats/',
	'cheats-2026': '/project-zomboid-cheats/',
	hacks: '/project-zomboid-cheats/',
	'cheat-download': '/pricing/',
	'mod-menu': '/features/',
	'soft-aim': '/project-zomboid-aimbot/',
	'best-cheats': '/project-zomboid-cheats/',
	'aimbot-hack': '/project-zomboid-aimbot/',
	'esp-hack': '/project-zomboid-esp/',
	'unlock-all': '/features/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Core English pages for sitemap.xml — focused project-zomboid-cheats URLs only.
 * Thin keyword-duplicate landings redirect to these canonical pages.
 */
export const sitemapPageIds: PageId[] = [
	'home',
	'hacks',
	'project-zomboid-esp',
	'project-zomboid-aimbot',
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

/** Thin keyword landings that canonicalize to a core page (see sitemapPageIds). */
export const canonicalPageAlias: Partial<Record<PageId, PageId>> = {
	undetected: 'hacks',
	'eac-bypass': 'hacks',
	'cheats-2026': 'hacks',
	'best-cheats': 'hacks',
	'cheat-download': 'pricing',
	'mod-menu': 'features',
	'unlock-all': 'features',
	'soft-aim': 'project-zomboid-aimbot',
	'aimbot-hack': 'project-zomboid-aimbot',
	'esp-hack': 'project-zomboid-esp',
};

export function getCanonicalPageId(pageId: PageId): PageId {
	return canonicalPageAlias[pageId] ?? pageId;
}

/** English path → canonical sitemap pageId (one owner per URL). */
const englishPathOwners: Record<string, PageId> = Object.fromEntries(
	sitemapPageIds.map((id) => [englishPaths[id], id]),
) as Record<string, PageId>;

/** Non-home pages included in per-locale sitemaps. */
export const localeSitemapPageIds: PageId[] = sitemapPageIds.filter((id) => id !== 'home');

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
	'project-zomboid-esp': {
		en: 'project-zomboid-esp',
		es: 'trucos-project-zomboid-esp',
		fr: 'triche-project-zomboid-esp',
		de: 'project-zomboid-esp-wallhack',
		pt: 'cheats-project-zomboid-esp',
		it: 'trucchi-project-zomboid-esp',
		nl: 'project-zomboid-esp-wallhack',
		pl: 'cheaty-project-zomboid-esp',
		ru: 'project-zomboid-esp-chity',
		tr: 'project-zomboid-esp-hile',
		ar: 'project-zomboid-esp-wallhack',
		ja: 'project-zomboid-esp-wallhack',
		ko: 'project-zomboid-esp-wallhack',
		zh: 'project-zomboid-esp-wallhack',
		hi: 'project-zomboid-esp-wallhack',
		id: 'project-zomboid-esp-wallhack',
		th: 'project-zomboid-esp-wallhack',
		vi: 'project-zomboid-esp-wallhack',
		uk: 'project-zomboid-esp-chity',
		cs: 'project-zomboid-esp-wallhack',
		ro: 'project-zomboid-esp-wallhack',
		sv: 'project-zomboid-esp-wallhack',
	},
	'project-zomboid-aimbot': {
		en: 'project-zomboid-aimbot',
		es: 'trucos-project-zomboid-aimbot',
		fr: 'triche-project-zomboid-aimbot',
		de: 'project-zomboid-aimbot',
		pt: 'cheats-project-zomboid-aimbot',
		it: 'trucchi-project-zomboid-aimbot',
		nl: 'project-zomboid-aimbot',
		pl: 'cheaty-project-zomboid-aimbot',
		ru: 'project-zomboid-aimbot-chity',
		tr: 'project-zomboid-aimbot-hile',
		ar: 'project-zomboid-aimbot',
		ja: 'project-zomboid-aimbot',
		ko: 'project-zomboid-aimbot',
		zh: 'project-zomboid-aimbot',
		hi: 'project-zomboid-aimbot',
		id: 'project-zomboid-aimbot',
		th: 'project-zomboid-aimbot',
		vi: 'project-zomboid-aimbot',
		uk: 'project-zomboid-aimbot-chity',
		cs: 'project-zomboid-aimbot',
		ro: 'project-zomboid-aimbot',
		sv: 'project-zomboid-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-zomboid',
		fr: 'fonctionnalites-triche-zomboid',
		de: 'project-zomboid-cheats-funktionen',
		pt: 'recursos-cheats-zomboid',
		it: 'funzioni-trucchi-zomboid',
		nl: 'project-zomboid-cheats-functies',
		pl: 'funkcje-cheatow-zomboid',
		ru: 'funkcii-chitov-zomboid',
		tr: 'zomboid-hile-ozellikleri',
		ar: 'project-zomboid-cheats-features',
		ja: 'project-zomboid-cheats-features',
		ko: 'project-zomboid-cheats-features',
		zh: 'project-zomboid-cheats-features',
		hi: 'project-zomboid-cheats-features',
		id: 'project-zomboid-cheats-features',
		th: 'project-zomboid-cheats-features',
		vi: 'project-zomboid-cheats-features',
		uk: 'funkcii-chitiv-project-zomboid',
		cs: 'project-zomboid-cheats-funkce',
		ro: 'functii-cheats-zomboid',
		sv: 'project-zomboid-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-zomboid',
		fr: 'prix-triche-zomboid',
		de: 'project-zomboid-cheats-preise',
		pt: 'precos-cheats-zomboid',
		it: 'prezzi-trucchi-zomboid',
		nl: 'project-zomboid-cheats-prijzen',
		pl: 'ceny-cheatow-zomboid',
		ru: 'ceny-chitov-zomboid',
		tr: 'zomboid-hile-fiyatlari',
		ar: 'project-zomboid-cheats-pricing',
		ja: 'project-zomboid-cheats-pricing',
		ko: 'project-zomboid-cheats-pricing',
		zh: 'project-zomboid-cheats-pricing',
		hi: 'project-zomboid-cheats-pricing',
		id: 'project-zomboid-cheats-pricing',
		th: 'project-zomboid-cheats-pricing',
		vi: 'project-zomboid-cheats-pricing',
		uk: 'ciny-chitiv-project-zomboid',
		cs: 'project-zomboid-cheats-ceny',
		ro: 'preturi-cheats-zomboid',
		sv: 'project-zomboid-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-zomboid',
		fr: 'installation-triche-zomboid',
		de: 'project-zomboid-cheats-installation',
		pt: 'instalacao-cheats-zomboid',
		it: 'installazione-trucchi-zomboid',
		nl: 'project-zomboid-cheats-installatie',
		pl: 'instalacja-cheatow-zomboid',
		ru: 'ustanovka-chitov-zomboid',
		tr: 'zomboid-hile-kurulum',
		ar: 'project-zomboid-cheats-setup',
		ja: 'project-zomboid-cheats-setup',
		ko: 'project-zomboid-cheats-setup',
		zh: 'project-zomboid-cheats-setup',
		hi: 'project-zomboid-cheats-setup',
		id: 'project-zomboid-cheats-setup',
		th: 'project-zomboid-cheats-setup',
		vi: 'project-zomboid-cheats-setup',
		uk: 'vstanovka-chitiv-project-zomboid',
		cs: 'project-zomboid-cheats-instalace',
		ro: 'instalare-cheats-zomboid',
		sv: 'project-zomboid-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-zomboid',
		fr: 'mises-a-jour-triche-zomboid',
		de: 'project-zomboid-cheats-updates',
		pt: 'atualizacoes-cheats-zomboid',
		it: 'aggiornamenti-trucchi-zomboid',
		nl: 'project-zomboid-cheats-updates',
		pl: 'aktualizacje-cheatow-zomboid',
		ru: 'obnovleniya-chitov-zomboid',
		tr: 'zomboid-hile-guncellemeleri',
		ar: 'project-zomboid-cheats-updates',
		ja: 'project-zomboid-cheats-updates',
		ko: 'project-zomboid-cheats-updates',
		zh: 'project-zomboid-cheats-updates',
		hi: 'project-zomboid-cheats-updates',
		id: 'project-zomboid-cheats-updates',
		th: 'project-zomboid-cheats-updates',
		vi: 'project-zomboid-cheats-updates',
		uk: 'onovlennya-chitiv-project-zomboid',
		cs: 'project-zomboid-cheats-aktualizace',
		ro: 'actualizari-cheats-zomboid',
		sv: 'project-zomboid-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-zomboid',
		fr: 'faq-triche-zomboid',
		de: 'project-zomboid-cheats-faq',
		pt: 'faq-cheats-zomboid',
		it: 'faq-trucchi-zomboid',
		nl: 'project-zomboid-cheats-faq',
		pl: 'faq-cheatow-zomboid',
		ru: 'faq-chitov-zomboid',
		tr: 'zomboid-hile-sss',
		ar: 'project-zomboid-cheats-faq',
		ja: 'project-zomboid-cheats-faq',
		ko: 'project-zomboid-cheats-faq',
		zh: 'project-zomboid-cheats-faq',
		hi: 'project-zomboid-cheats-faq',
		id: 'project-zomboid-cheats-faq',
		th: 'project-zomboid-cheats-faq',
		vi: 'project-zomboid-cheats-faq',
		uk: 'faq-chitiv-project-zomboid',
		cs: 'project-zomboid-cheats-faq',
		ro: 'faq-cheats-zomboid',
		sv: 'project-zomboid-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-zomboid',
		fr: 'support-triche-zomboid',
		de: 'project-zomboid-cheats-support',
		pt: 'suporte-cheats-zomboid',
		it: 'supporto-trucchi-zomboid',
		nl: 'project-zomboid-cheats-support',
		pl: 'wsparcie-cheatow-zomboid',
		ru: 'podderzhka-chitov-zomboid',
		tr: 'zomboid-hile-destek',
		ar: 'project-zomboid-cheats-support',
		ja: 'project-zomboid-cheats-support',
		ko: 'project-zomboid-cheats-support',
		zh: 'project-zomboid-cheats-support',
		hi: 'project-zomboid-cheats-support',
		id: 'project-zomboid-cheats-support',
		th: 'project-zomboid-cheats-support',
		vi: 'project-zomboid-cheats-support',
		uk: 'pidtrymka-chitiv-project-zomboid',
		cs: 'project-zomboid-cheats-podpora',
		ro: 'suport-cheats-zomboid',
		sv: 'project-zomboid-cheats-support',
	},
	undetected: {
		en: 'undetected-project-zomboid-cheats',
		es: 'trucos-zomboid-indetectables',
		fr: 'triche-zomboid-indetectable',
		de: 'unentdeckte-project-zomboid-cheats',
		pt: 'cheats-zomboid-indetectaveis',
		it: 'trucchi-zomboid-indetectabili',
		nl: 'undetected-project-zomboid-cheats',
		pl: 'niewykrywalne-cheats-zomboid',
		ru: 'nedecektiruemye-chity-zomboid',
		tr: 'tespit-edilemeyen-zomboid-hileleri',
		ar: 'undetected-project-zomboid-cheats',
		ja: 'undetected-project-zomboid-cheats',
		ko: 'undetected-project-zomboid-cheats',
		zh: 'undetected-project-zomboid-cheats',
		hi: 'undetected-project-zomboid-cheats',
		id: 'undetected-project-zomboid-cheats',
		th: 'undetected-project-zomboid-cheats',
		vi: 'undetected-project-zomboid-cheats',
		uk: 'nedecektovani-chity-zomboid',
		cs: 'undetected-project-zomboid-cheats',
		ro: 'cheats-zomboid-nedetectabile',
		sv: 'undetected-project-zomboid-cheats',
	},
	wallhack: {
		en: 'project-zomboid-wallhack',
		es: 'wallhack-trucos-zomboid',
		fr: 'wallhack-triche-zomboid',
		de: 'project-zomboid-wallhack',
		pt: 'wallhack-cheats-zomboid',
		it: 'wallhack-trucchi-zomboid',
		nl: 'project-zomboid-wallhack',
		pl: 'wallhack-cheatow-zomboid',
		ru: 'wallhack-chity-zomboid',
		tr: 'project-zomboid-wallhack-hile',
		ar: 'project-zomboid-wallhack',
		ja: 'project-zomboid-wallhack',
		ko: 'project-zomboid-wallhack',
		zh: 'project-zomboid-wallhack',
		hi: 'project-zomboid-wallhack',
		id: 'project-zomboid-wallhack',
		th: 'project-zomboid-wallhack',
		vi: 'project-zomboid-wallhack',
		uk: 'wallhack-chity-zomboid',
		cs: 'project-zomboid-wallhack',
		ro: 'wallhack-cheats-zomboid',
		sv: 'project-zomboid-wallhack',
	},
	radar: {
		en: 'project-zomboid-radar-hack',
		es: 'radar-hack-trucos-zomboid',
		fr: 'radar-hack-triche-zomboid',
		de: 'project-zomboid-radar-hack',
		pt: 'radar-hack-cheats-zomboid',
		it: 'radar-hack-trucchi-zomboid',
		nl: 'project-zomboid-radar-hack',
		pl: 'radar-hack-cheatow-zomboid',
		ru: 'radar-hack-chity-zomboid',
		tr: 'project-zomboid-radar-hack',
		ar: 'project-zomboid-radar-hack',
		ja: 'project-zomboid-radar-hack',
		ko: 'project-zomboid-radar-hack',
		zh: 'project-zomboid-radar-hack',
		hi: 'project-zomboid-radar-hack',
		id: 'project-zomboid-radar-hack',
		th: 'project-zomboid-radar-hack',
		vi: 'project-zomboid-radar-hack',
		uk: 'radar-hack-chity-zomboid',
		cs: 'project-zomboid-radar-hack',
		ro: 'radar-hack-cheats-zomboid',
		sv: 'project-zomboid-radar-hack',
	},
	'eac-bypass': {
		en: 'eac-bypass-project-zomboid',
		es: 'eac-bypass-project-zomboid-trucos',
		fr: 'eac-bypass-project-zomboid-triche',
		de: 'eac-bypass-project-zomboid',
		pt: 'eac-bypass-project-zomboid-cheats',
		it: 'eac-bypass-project-zomboid-trucchi',
		nl: 'eac-bypass-project-zomboid',
		pl: 'eac-bypass-project-zomboid-cheatow',
		ru: 'eac-bypass-project-zomboid-chity',
		tr: 'eac-bypass-project-zomboid',
		ar: 'eac-bypass-project-zomboid',
		ja: 'eac-bypass-project-zomboid',
		ko: 'eac-bypass-project-zomboid',
		zh: 'eac-bypass-project-zomboid',
		hi: 'eac-bypass-project-zomboid',
		id: 'eac-bypass-project-zomboid',
		th: 'eac-bypass-project-zomboid',
		vi: 'eac-bypass-project-zomboid',
		uk: 'eac-bypass-project-zomboid-chity',
		cs: 'eac-bypass-project-zomboid',
		ro: 'eac-bypass-project-zomboid-cheats',
		sv: 'eac-bypass-project-zomboid',
	},
	'cheats-2026': {
		en: 'project-zomboid-cheats-2026',
		es: 'trucos-zomboid-2026',
		fr: 'triche-zomboid-2026',
		de: 'project-zomboid-cheats-2026',
		pt: 'cheats-zomboid-2026',
		it: 'trucchi-zomboid-2026',
		nl: 'project-zomboid-cheats-2026',
		pl: 'cheaty-zomboid-2026',
		ru: 'chity-zomboid-2026',
		tr: 'zomboid-hileleri-2026',
		ar: 'project-zomboid-cheats-2026',
		ja: 'project-zomboid-cheats-2026',
		ko: 'project-zomboid-cheats-2026',
		zh: 'project-zomboid-cheats-2026',
		hi: 'project-zomboid-cheats-2026',
		id: 'project-zomboid-cheats-2026',
		th: 'project-zomboid-cheats-2026',
		vi: 'project-zomboid-cheats-2026',
		uk: 'chity-zomboid-2026',
		cs: 'project-zomboid-cheats-2026',
		ro: 'cheats-zomboid-2026',
		sv: 'project-zomboid-cheats-2026',
	},
	hacks: {
		en: 'project-zomboid-cheats',
		es: 'hacks-trucos-zomboid',
		fr: 'hacks-triche-zomboid',
		de: 'project-zomboid-cheats',
		pt: 'hacks-cheats-zomboid',
		it: 'hacks-trucchi-zomboid',
		nl: 'project-zomboid-cheats',
		pl: 'hacks-cheatow-zomboid',
		ru: 'haksy-chity-zomboid',
		tr: 'zomboid-hile-hacks',
		ar: 'project-zomboid-cheats',
		ja: 'project-zomboid-cheats',
		ko: 'project-zomboid-cheats',
		zh: 'project-zomboid-cheats',
		hi: 'project-zomboid-cheats',
		id: 'project-zomboid-cheats',
		th: 'project-zomboid-cheats',
		vi: 'project-zomboid-cheats',
		uk: 'haksy-chity-zomboid',
		cs: 'project-zomboid-cheats',
		ro: 'hacks-cheats-zomboid',
		sv: 'project-zomboid-cheats',
	},
	'cheat-download': {
		en: 'zomboid-cheat-download',
		es: 'descarga-trucos-zomboid',
		fr: 'telechargement-triche-zomboid',
		de: 'zomboid-cheat-download',
		pt: 'download-cheats-zomboid',
		it: 'download-trucchi-zomboid',
		nl: 'zomboid-cheat-download',
		pl: 'pobieranie-cheatow-zomboid',
		ru: 'skachat-chity-zomboid',
		tr: 'zomboid-hile-indir',
		ar: 'zomboid-cheat-download',
		ja: 'zomboid-cheat-download',
		ko: 'zomboid-cheat-download',
		zh: 'zomboid-cheat-download',
		hi: 'zomboid-cheat-download',
		id: 'zomboid-cheat-download',
		th: 'zomboid-cheat-download',
		vi: 'zomboid-cheat-download',
		uk: 'zavantazhennya-chitiv-project-zomboid',
		cs: 'zomboid-cheat-download',
		ro: 'descarcare-cheats-zomboid',
		sv: 'zomboid-cheat-download',
	},
	'mod-menu': {
		en: 'zomboid-mod-menu',
		es: 'menu-mod-trucos-zomboid',
		fr: 'menu-mod-triche-zomboid',
		de: 'zomboid-mod-menu',
		pt: 'menu-mod-cheats-zomboid',
		it: 'menu-mod-trucchi-zomboid',
		nl: 'zomboid-mod-menu',
		pl: 'menu-mod-cheatow-zomboid',
		ru: 'mod-menu-chity-zomboid',
		tr: 'zomboid-mod-menu',
		ar: 'zomboid-mod-menu',
		ja: 'zomboid-mod-menu',
		ko: 'zomboid-mod-menu',
		zh: 'zomboid-mod-menu',
		hi: 'zomboid-mod-menu',
		id: 'zomboid-mod-menu',
		th: 'zomboid-mod-menu',
		vi: 'zomboid-mod-menu',
		uk: 'mod-menu-chity-zomboid',
		cs: 'zomboid-mod-menu',
		ro: 'meniu-mod-cheats-zomboid',
		sv: 'zomboid-mod-menu',
	},
	'soft-aim': {
		en: 'project-zomboid-soft-aim',
		es: 'soft-aim-trucos-zomboid',
		fr: 'soft-aim-triche-zomboid',
		de: 'project-zomboid-soft-aim',
		pt: 'soft-aim-cheats-zomboid',
		it: 'soft-aim-trucchi-zomboid',
		nl: 'project-zomboid-soft-aim',
		pl: 'soft-aim-cheatow-zomboid',
		ru: 'soft-aim-chity-zomboid',
		tr: 'project-zomboid-soft-aim',
		ar: 'project-zomboid-soft-aim',
		ja: 'project-zomboid-soft-aim',
		ko: 'project-zomboid-soft-aim',
		zh: 'project-zomboid-soft-aim',
		hi: 'project-zomboid-soft-aim',
		id: 'project-zomboid-soft-aim',
		th: 'project-zomboid-soft-aim',
		vi: 'project-zomboid-soft-aim',
		uk: 'soft-aim-chity-zomboid',
		cs: 'project-zomboid-soft-aim',
		ro: 'soft-aim-cheats-zomboid',
		sv: 'project-zomboid-soft-aim',
	},
	'best-cheats': {
		en: 'best-project-zomboid-cheats',
		es: 'mejores-trucos-zomboid',
		fr: 'meilleures-triches-project-zomboid',
		de: 'beste-project-zomboid-cheats',
		pt: 'melhores-cheats-zomboid',
		it: 'migliori-trucchi-zomboid',
		nl: 'beste-project-zomboid-cheats',
		pl: 'najlepsze-cheats-zomboid',
		ru: 'luchshie-chity-zomboid',
		tr: 'en-iyi-zomboid-hileleri',
		ar: 'best-project-zomboid-cheats',
		ja: 'best-project-zomboid-cheats',
		ko: 'best-project-zomboid-cheats',
		zh: 'best-project-zomboid-cheats',
		hi: 'best-project-zomboid-cheats',
		id: 'best-project-zomboid-cheats',
		th: 'best-project-zomboid-cheats',
		vi: 'best-project-zomboid-cheats',
		uk: 'naykrashchi-chity-zomboid',
		cs: 'nejlepsi-project-zomboid-cheats',
		ro: 'cele-mai-bune-cheats-zomboid',
		sv: 'basta-project-zomboid-cheats',
	},
	'aimbot-hack': {
		en: 'project-zomboid-aimbot-hack',
		es: 'aimbot-hack-trucos-zomboid',
		fr: 'aimbot-hack-triche-zomboid',
		de: 'project-zomboid-aimbot-hack',
		pt: 'aimbot-hack-cheats-zomboid',
		it: 'aimbot-hack-trucchi-zomboid',
		nl: 'project-zomboid-aimbot-hack',
		pl: 'aimbot-hack-cheatow-zomboid',
		ru: 'aimbot-hack-chity-zomboid',
		tr: 'project-zomboid-aimbot-hack',
		ar: 'project-zomboid-aimbot-hack',
		ja: 'project-zomboid-aimbot-hack',
		ko: 'project-zomboid-aimbot-hack',
		zh: 'project-zomboid-aimbot-hack',
		hi: 'project-zomboid-aimbot-hack',
		id: 'project-zomboid-aimbot-hack',
		th: 'project-zomboid-aimbot-hack',
		vi: 'project-zomboid-aimbot-hack',
		uk: 'aimbot-hack-chity-zomboid',
		cs: 'project-zomboid-aimbot-hack',
		ro: 'aimbot-hack-cheats-zomboid',
		sv: 'project-zomboid-aimbot-hack',
	},
	'esp-hack': {
		en: 'project-zomboid-esp-hack',
		es: 'esp-hack-trucos-zomboid',
		fr: 'esp-hack-triche-zomboid',
		de: 'project-zomboid-esp-hack',
		pt: 'esp-hack-cheats-zomboid',
		it: 'esp-hack-trucchi-zomboid',
		nl: 'project-zomboid-esp-hack',
		pl: 'esp-hack-cheatow-zomboid',
		ru: 'esp-hack-chity-zomboid',
		tr: 'project-zomboid-esp-hack',
		ar: 'project-zomboid-esp-hack',
		ja: 'project-zomboid-esp-hack',
		ko: 'project-zomboid-esp-hack',
		zh: 'project-zomboid-esp-hack',
		hi: 'project-zomboid-esp-hack',
		id: 'project-zomboid-esp-hack',
		th: 'project-zomboid-esp-hack',
		vi: 'project-zomboid-esp-hack',
		uk: 'esp-hack-chity-zomboid',
		cs: 'project-zomboid-esp-hack',
		ro: 'esp-hack-cheats-zomboid',
		sv: 'project-zomboid-esp-hack',
	},
	'unlock-all': {
		en: 'zomboid-unlock-all',
		es: 'unlock-all-trucos-zomboid',
		fr: 'unlock-all-triche-zomboid',
		de: 'zomboid-unlock-all',
		pt: 'unlock-all-cheats-zomboid',
		it: 'unlock-all-trucchi-zomboid',
		nl: 'zomboid-unlock-all',
		pl: 'unlock-all-cheatow-zomboid',
		ru: 'unlock-all-chity-zomboid',
		tr: 'zomboid-unlock-all',
		ar: 'zomboid-unlock-all',
		ja: 'zomboid-unlock-all',
		ko: 'zomboid-unlock-all',
		zh: 'zomboid-unlock-all',
		hi: 'zomboid-unlock-all',
		id: 'zomboid-unlock-all',
		th: 'zomboid-unlock-all',
		vi: 'zomboid-unlock-all',
		uk: 'unlock-all-chity-zomboid',
		cs: 'zomboid-unlock-all',
		ro: 'unlock-all-cheats-zomboid',
		sv: 'zomboid-unlock-all',
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

/** Short breadcrumb label — avoids repeating the full SEO h1 in the banner trail. */
export function getBreadcrumbLabelForPage(
	pageId: PageId | undefined,
	labels: Record<string, string>,
	fallbackHeading: string,
): string {
	if (!pageId) return fallbackHeading;

	const byPage: Partial<Record<PageId, string | undefined>> = {
		home: labels.home,
		features: labels.features,
		pricing: labels.pricing,
		setup: labels.setup,
		updates: labels.updates,
		faq: labels.faq,
		hacks: labels.cheats ?? 'Cheats',
		'project-zomboid-esp': labels.esp,
		'project-zomboid-aimbot': labels.aimbot,
		support: 'Support',
		undetected: 'Undetected',
		wallhack: 'Wallhack',
		radar: 'Radar',
		'eac-bypass': 'EAC Bypass',
		'cheats-2026': 'Cheats 2026',
		'cheat-download': 'Download',
		'mod-menu': 'Mod Menu',
		'soft-aim': 'Soft Aim',
		'best-cheats': 'Best Cheats',
		'aimbot-hack': 'Aimbot Hack',
		'esp-hack': 'ESP Hack',
		'unlock-all': 'Unlock All',
		privacy: 'Privacy',
		refund: 'Refund',
		terms: 'Terms',
	};

	const label = byPage[pageId];
	if (label) return label;

	const dash = fallbackHeading.indexOf(' — ');
	if (dash > 0) {
		const after = fallbackHeading.slice(dash + 3).trim();
		if (after.length > 0 && after.length <= 36) return after;
	}

	const brandPrefix = 'Project Zomboid Cheats ';
	if (fallbackHeading.startsWith(brandPrefix)) {
		const rest = fallbackHeading.slice(brandPrefix.length);
		const restDash = rest.indexOf(' — ');
		if (restDash > 0) return rest.slice(0, restDash).trim();
		if (rest.length <= 32) return rest;
	}

	if (dash > 0) return fallbackHeading.slice(0, dash).trim();

	return fallbackHeading;
}

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
	const canonicalId = getCanonicalPageId(pageId);
	return [
		...locales.map((locale) => ({
			hreflang: locale.hreflang,
			href: absoluteLocalizedUrl(canonicalId, locale.code),
		})),
		{ hreflang: 'x-default' as const, href: absoluteLocalizedUrl(canonicalId, defaultLocale) },
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	return englishPathOwners[normalized];
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
	const blogHref = locale === defaultLocale ? '/blog/' : `/${locale}/blog/`;
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.cheats ?? 'Cheats', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
		{ label: labels.blog ?? 'Blog', href: blogHref },
		{ label: labels.reviews ?? 'Reviews', href: '/reviews/' },
	];
	return items;
}
