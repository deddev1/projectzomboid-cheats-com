# Warframe Cheats — Marketing Site

Static Astro 7 site for [warframecheats.net](https://warframecheats.net). Primary SEO focus: **Warframe Cheats** (supporting: Warframe cheats, warframe esp, warframe aimbot).

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Pages with `functions/_middleware.js`

## Quick start

```bash
npm install
npm run generate:i18n   # after editing scripts/i18n-data/*
npm run dev
```

Build and validate sitemaps:

```bash
npm run build:validate
```

Refresh Warframe atmosphere images (optional):

```bash
npm run fetch:images
npm run optimize:images
```

## Deploy (Cloudflare Pages)

1. Create a Cloudflare Pages project named **warframecheats**
2. Connect this repo or upload `dist/` after `npm run build`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Custom domain **warframecheats.net** (apex) and redirect **www** → apex
6. Enable SSL **Always Use HTTPS**

CLI deploy:

```bash
npm run pages:deploy
```

## Environment

- Node.js >= 22.12.0
- Checkout URL in `src/data/site.ts` (`siteConfig.checkoutUrl`)
- Canonical site URL: `https://warframecheats.net`

## License

Private — for warframecheats.net deployment only.
