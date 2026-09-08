import { getHomeLocaleRedirect } from './locale-redirect.js';

const CANONICAL_ORIGIN = 'https://projectzomboidcheats.com';
const APEX_HOST = 'projectzomboidcheats.com';
const WWW_HOST = 'www.projectzomboidcheats.com';

/** Old hosts → canonical apex (301). Never include the apex host itself. */
const LEGACY_HOSTS = new Set([
	'arcraidershacks.net',
	'www.arcraidershacks.net',
	'arcraidershacks.com',
	'www.arcraidershacks.com',
	'overwatchhacks.com',
	'www.overwatchhacks.com',
	'warthunderhacks.net',
	'www.warthunderhacks.net',
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
	'warframecheats.net',
	'www.warframecheats.net',
]);

// Keep in sync with public/_redirects (which preserves query strings by default).
// All targets are final canonical URLs — no chains/loops.
const PATH_REDIRECTS = {
	'/warframe-radar/': '/project-zomboid-radar/',
	'/warframe-radar': '/project-zomboid-radar/',
	'/warframe-wallhack/': '/project-zomboid-wallhack/',
	'/warframe-wallhack': '/project-zomboid-wallhack/',
	'/warframe-aimbot/': '/project-zomboid-aimbot/',
	'/warframe-aimbot': '/project-zomboid-aimbot/',
	'/warframe-esp/': '/project-zomboid-esp/',
	'/warframe-esp': '/project-zomboid-esp/',
	'/warframe-cheats/': '/project-zomboid-cheats/',
	'/warframe-cheats': '/project-zomboid-cheats/',
	'/sitemap-0.xml': '/sitemap.xml',
	'/fortnite-cheats': '/',
	'/fortnite-cheats/': '/',
	'/fortnite-hacks': '/project-zomboid-cheats/',
	'/fortnite-hacks/': '/project-zomboid-cheats/',
	'/fortnite-aimbot': '/project-zomboid-aimbot/',
	'/fortnite-aimbot/': '/project-zomboid-aimbot/',
	'/fortnite-esp': '/project-zomboid-esp/',
	'/fortnite-esp/': '/project-zomboid-esp/',
	'/fortnite-wallhack': '/project-zomboid-wallhack/',
	'/fortnite-wallhack/': '/project-zomboid-wallhack/',
	'/undetected-fortnite-cheats': '/project-zomboid-cheats/',
	'/undetected-fortnite-cheats/': '/project-zomboid-cheats/',
	'/eac-bypass-fortnite': '/project-zomboid-cheats/',
	'/eac-bypass-fortnite/': '/project-zomboid-cheats/',
	'/eac-bypass': '/project-zomboid-cheats/',
	'/eac-bypass/': '/project-zomboid-cheats/',
	'/warzone-aimbot': '/project-zomboid-aimbot/',
	'/warzone-aimbot/': '/project-zomboid-aimbot/',
	'/warzone-esp': '/project-zomboid-esp/',
	'/warzone-esp/': '/project-zomboid-esp/',
	'/ricochet-bypass': '/project-zomboid-cheats/',
	'/ricochet-bypass/': '/project-zomboid-cheats/',
	'/arc-raiders-hacks': '/project-zomboid-cheats/',
	'/arc-raiders-hacks/': '/project-zomboid-cheats/',
	'/arc-raiders-esp': '/project-zomboid-esp/',
	'/arc-raiders-esp/': '/project-zomboid-esp/',
	'/arc-raiders-aimbot': '/project-zomboid-aimbot/',
	'/arc-raiders-aimbot/': '/project-zomboid-aimbot/',
	'/arc-raiders-wallhack': '/project-zomboid-wallhack/',
	'/arc-raiders-wallhack/': '/project-zomboid-wallhack/',
	'/arc-raiders-radar': '/project-zomboid-radar/',
	'/arc-raiders-radar/': '/project-zomboid-radar/',
	'/overwatch-hacks': '/project-zomboid-cheats/',
	'/overwatch-hacks/': '/project-zomboid-cheats/',
	'/overwatch-esp': '/project-zomboid-esp/',
	'/overwatch-esp/': '/project-zomboid-esp/',
	'/overwatch-aimbot': '/project-zomboid-aimbot/',
	'/overwatch-aimbot/': '/project-zomboid-aimbot/',
	'/overwatch-wallhack': '/project-zomboid-wallhack/',
	'/overwatch-wallhack/': '/project-zomboid-wallhack/',
	'/overwatch-radar': '/project-zomboid-radar/',
	'/overwatch-radar/': '/project-zomboid-radar/',
	'/war-thunder-hacks': '/project-zomboid-cheats/',
	'/war-thunder-hacks/': '/project-zomboid-cheats/',
	'/war-thunder-esp': '/project-zomboid-esp/',
	'/war-thunder-esp/': '/project-zomboid-esp/',
	'/war-thunder-aimbot': '/project-zomboid-aimbot/',
	'/war-thunder-aimbot/': '/project-zomboid-aimbot/',
	'/war-thunder-wallhack': '/project-zomboid-wallhack/',
	'/war-thunder-wallhack/': '/project-zomboid-wallhack/',
	'/war-thunder-radar': '/project-zomboid-radar/',
	'/war-thunder-radar/': '/project-zomboid-radar/',
	'/rust-hacks': '/project-zomboid-cheats/',
	'/rust-hacks/': '/project-zomboid-cheats/',
	'/rust-aimbot': '/project-zomboid-aimbot/',
	'/rust-aimbot/': '/project-zomboid-aimbot/',
	'/rust-esp': '/project-zomboid-esp/',
	'/rust-esp/': '/project-zomboid-esp/',
	'/project-zomboid-cheats': '/project-zomboid-cheats/',
	'/project-zomboid-esp': '/project-zomboid-esp/',
	'/project-zomboid-aimbot': '/project-zomboid-aimbot/',
	'/project-zomboid-wallhack': '/project-zomboid-wallhack/',
	'/project-zomboid-radar': '/project-zomboid-radar/',
	'/project-zomboid-radar-hack': '/project-zomboid-radar/',
	'/project-zomboid-radar-hack/': '/project-zomboid-radar/',
	'/undetected-project-zomboid-cheats': '/project-zomboid-cheats/',
	'/undetected-project-zomboid-cheats/': '/project-zomboid-cheats/',
	'/eac-bypass-project-zomboid': '/project-zomboid-cheats/',
	'/eac-bypass-project-zomboid/': '/project-zomboid-cheats/',
	'/project-zomboid-cheats-2026': '/project-zomboid-cheats/',
	'/project-zomboid-cheats-2026/': '/project-zomboid-cheats/',
	'/best-project-zomboid-cheats': '/project-zomboid-cheats/',
	'/best-project-zomboid-cheats/': '/project-zomboid-cheats/',
	'/zomboid-cheat-download': '/pricing/',
	'/zomboid-cheat-download/': '/pricing/',
	'/zomboid-mod-menu': '/features/',
	'/zomboid-mod-menu/': '/features/',
	'/project-zomboid-soft-aim': '/project-zomboid-aimbot/',
	'/project-zomboid-soft-aim/': '/project-zomboid-aimbot/',
	'/project-zomboid-aimbot-hack': '/project-zomboid-aimbot/',
	'/project-zomboid-aimbot-hack/': '/project-zomboid-aimbot/',
	'/project-zomboid-esp-hack': '/project-zomboid-esp/',
	'/project-zomboid-esp-hack/': '/project-zomboid-esp/',
	'/zomboid-unlock-all': '/features/',
	'/zomboid-unlock-all/': '/features/',
	'/blog/elitefn-vs-project-zomboid-cheats-two-week-test': '/blog/voidcheats-vs-project-zomboid-cheats-two-week-test/',
	'/blog/elitefn-vs-project-zomboid-cheats-two-week-test/': '/blog/voidcheats-vs-project-zomboid-cheats-two-week-test/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"media-src 'self'",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self' 'unsafe-inline'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

function getClientProtocol(request) {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

function applySecurityHeaders(headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'no-store');
		headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
	}
}

export async function onRequest(context) {
	const url = new URL(context.request.url);
	const host = url.hostname.toLowerCase();
	const proto = getClientProtocol(context.request);

	const isLegacyHost = LEGACY_HOSTS.has(host);
	const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
	const needsHostRedirect = host === WWW_HOST || isLegacyHost;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
		const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
		const headers = new Headers({
			Location: target.toString(),
			'Cache-Control': 'no-store',
			'CDN-Cache-Control': 'no-store',
			'Cloudflare-CDN-Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const pathRedirect = PATH_REDIRECTS[url.pathname];
	if (pathRedirect) {
		const headers = new Headers({
			Location: new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const homeLocaleRedirect = getHomeLocaleRedirect(
		url.pathname,
		url.search,
		context.request.headers,
	);
	if (homeLocaleRedirect) {
		const headers = new Headers({
			Location: new URL(homeLocaleRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 302, headers });
	}

	const response = await context.next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');

	applySecurityHeaders(headers, { html: isHtml });

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
