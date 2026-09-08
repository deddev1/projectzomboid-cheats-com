import { getHomeLocaleRedirect } from './locale-redirect.js';

const CANONICAL_ORIGIN = 'https://warframecheats.net';
const APEX_HOST = 'warframecheats.net';
const WWW_HOST = 'www.warframecheats.net';

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
]);

// Keep in sync with public/_redirects (which preserves query strings by default).
// All targets are final canonical URLs — no chains/loops.
const PATH_REDIRECTS = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/fortnite-cheats': '/',
	'/fortnite-cheats/': '/',
	'/fortnite-hacks': '/warframe-cheats/',
	'/fortnite-hacks/': '/warframe-cheats/',
	'/fortnite-aimbot': '/warframe-aimbot/',
	'/fortnite-aimbot/': '/warframe-aimbot/',
	'/fortnite-esp': '/warframe-esp/',
	'/fortnite-esp/': '/warframe-esp/',
	'/fortnite-wallhack': '/warframe-wallhack/',
	'/fortnite-wallhack/': '/warframe-wallhack/',
	'/undetected-fortnite-cheats': '/warframe-cheats/',
	'/undetected-fortnite-cheats/': '/warframe-cheats/',
	'/eac-bypass-fortnite': '/warframe-cheats/',
	'/eac-bypass-fortnite/': '/warframe-cheats/',
	'/eac-bypass': '/warframe-cheats/',
	'/eac-bypass/': '/warframe-cheats/',
	'/warzone-aimbot': '/warframe-aimbot/',
	'/warzone-aimbot/': '/warframe-aimbot/',
	'/warzone-esp': '/warframe-esp/',
	'/warzone-esp/': '/warframe-esp/',
	'/ricochet-bypass': '/warframe-cheats/',
	'/ricochet-bypass/': '/warframe-cheats/',
	'/arc-raiders-hacks': '/warframe-cheats/',
	'/arc-raiders-hacks/': '/warframe-cheats/',
	'/arc-raiders-esp': '/warframe-esp/',
	'/arc-raiders-esp/': '/warframe-esp/',
	'/arc-raiders-aimbot': '/warframe-aimbot/',
	'/arc-raiders-aimbot/': '/warframe-aimbot/',
	'/arc-raiders-wallhack': '/warframe-wallhack/',
	'/arc-raiders-wallhack/': '/warframe-wallhack/',
	'/arc-raiders-radar': '/warframe-radar/',
	'/arc-raiders-radar/': '/warframe-radar/',
	'/overwatch-hacks': '/warframe-cheats/',
	'/overwatch-hacks/': '/warframe-cheats/',
	'/overwatch-esp': '/warframe-esp/',
	'/overwatch-esp/': '/warframe-esp/',
	'/overwatch-aimbot': '/warframe-aimbot/',
	'/overwatch-aimbot/': '/warframe-aimbot/',
	'/overwatch-wallhack': '/warframe-wallhack/',
	'/overwatch-wallhack/': '/warframe-wallhack/',
	'/overwatch-radar': '/warframe-radar/',
	'/overwatch-radar/': '/warframe-radar/',
	'/war-thunder-hacks': '/warframe-cheats/',
	'/war-thunder-hacks/': '/warframe-cheats/',
	'/war-thunder-esp': '/warframe-esp/',
	'/war-thunder-esp/': '/warframe-esp/',
	'/war-thunder-aimbot': '/warframe-aimbot/',
	'/war-thunder-aimbot/': '/warframe-aimbot/',
	'/war-thunder-wallhack': '/warframe-wallhack/',
	'/war-thunder-wallhack/': '/warframe-wallhack/',
	'/war-thunder-radar': '/warframe-radar/',
	'/war-thunder-radar/': '/warframe-radar/',
	'/rust-hacks': '/warframe-cheats/',
	'/rust-hacks/': '/warframe-cheats/',
	'/rust-aimbot': '/warframe-aimbot/',
	'/rust-aimbot/': '/warframe-aimbot/',
	'/rust-esp': '/warframe-esp/',
	'/rust-esp/': '/warframe-esp/',
	'/warframe-cheats': '/warframe-cheats/',
	'/warframe-esp': '/warframe-esp/',
	'/warframe-aimbot': '/warframe-aimbot/',
	'/warframe-wallhack': '/warframe-wallhack/',
	'/warframe-radar': '/warframe-radar/',
	'/warframe-radar-hack': '/warframe-radar/',
	'/warframe-radar-hack/': '/warframe-radar/',
	'/undetected-warframe-cheats': '/warframe-cheats/',
	'/undetected-warframe-cheats/': '/warframe-cheats/',
	'/eac-bypass-warframe': '/warframe-cheats/',
	'/eac-bypass-warframe/': '/warframe-cheats/',
	'/warframe-cheats-2026': '/warframe-cheats/',
	'/warframe-cheats-2026/': '/warframe-cheats/',
	'/best-warframe-cheats': '/warframe-cheats/',
	'/best-warframe-cheats/': '/warframe-cheats/',
	'/warframe-cheat-download': '/pricing/',
	'/warframe-cheat-download/': '/pricing/',
	'/warframe-mod-menu': '/features/',
	'/warframe-mod-menu/': '/features/',
	'/warframe-soft-aim': '/warframe-aimbot/',
	'/warframe-soft-aim/': '/warframe-aimbot/',
	'/warframe-aimbot-hack': '/warframe-aimbot/',
	'/warframe-aimbot-hack/': '/warframe-aimbot/',
	'/warframe-esp-hack': '/warframe-esp/',
	'/warframe-esp-hack/': '/warframe-esp/',
	'/warframe-unlock-all': '/features/',
	'/warframe-unlock-all/': '/features/',
	'/blog/elitefn-vs-warframe-cheats-two-week-test': '/blog/voidcheats-vs-warframe-cheats-two-week-test/',
	'/blog/elitefn-vs-warframe-cheats-two-week-test/': '/blog/voidcheats-vs-warframe-cheats-two-week-test/',
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
