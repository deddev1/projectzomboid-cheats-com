# Project Zomboid Cheats — Marketing Site

Static Astro 7 site for [projectzomboidcheats.com](https://projectzomboidcheats.com). Primary SEO focus: **Project Zomboid Cheats** (supporting: Project Zomboid cheats, project zomboid esp, project zomboid aimbot).

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

Refresh Project Zomboid atmosphere images (optional):

```bash
npm run fetch:images
npm run optimize:images
```

## Deploy (Cloudflare Pages)

1. Create a Cloudflare Pages project named **project-zomboidcheats**
2. Connect this repo or upload `dist/` after `npm run build`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Custom domain **projectzomboidcheats.com** (apex) and redirect **www** → apex
6. Enable SSL **Always Use HTTPS**

CLI deploy:

```bash
npm run pages:deploy
```

## Environment

- Node.js >= 22.12.0
- Checkout URL in `src/data/site.ts` (`siteConfig.checkoutUrl`)
- Canonical site URL: `https://projectzomboidcheats.com`

## License

Private — for projectzomboidcheats.com deployment only.
