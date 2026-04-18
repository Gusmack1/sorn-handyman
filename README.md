# Sorn Handyman Services — Website

Father-and-son handyman team covering Ayrshire. Fraser and Aidan — Sorn-based, one of us answers every call.

Built with **Astro 5 + Tailwind v3** and deployed via **GitHub Pages**.

## Stack

- Astro 5 (static site, partial hydration not needed — this site is 100% HTML/CSS)
- Tailwind CSS 3.4 (via `@astrojs/tailwind`)
- `@astrojs/sitemap` for auto sitemap
- JSON-LD schema on every page (HomeAndConstructionBusiness, Service, LocalBusiness, FAQ, BreadcrumbList, GeoCircle)
- GitHub Actions deploys to `gh-pages` branch (see `.github/workflows/deploy.yml`)

## Dev

```bash
npm install
npm run dev        # http://localhost:4321/sorn-handyman
npm run build      # outputs to dist/
npm run preview
```

## Project structure

```
src/
  layouts/BaseLayout.astro        # HTML shell, head meta, schema-org
  components/                     # Header, Footer, StickyCallBar, WhatsAppFab, Hero, FAQ, …
  data/business.ts                # Single source of truth — NAP, services, areas, hours
  pages/
    index.astro                   # Home
    about.astro
    contact.astro
    quote.astro
    reviews.astro
    gallery.astro
    404.astro
    services/
      index.astro
      [slug].astro                # 14 service pages generated from business.ts
    areas/
      index.astro
      [slug].astro                # 15 area pages generated from business.ts
    blog/
      index.astro
      [slug].astro
public/
  brand/                          # Source artwork (logo, hero, og, icon master)
  icons/                          # Generated PWA + favicon PNGs (don't hand-edit)
  favicon.ico / manifest.webmanifest / robots.txt
docs/
  design-system.md                # Tokens, voice, type, a11y contract
```

## Brand assets

The full brand system lives in two places:

- **[`docs/design-system.md`](docs/design-system.md)** — tokens, voice, type scale, spacing, a11y contract, component behaviour. Read this before adding a new section or component.
- **[`public/brand/`](public/brand/)** — source artwork harvested from the live [@SornHandymanServices Facebook page](https://www.facebook.com/p/Sorn-Handyman-Services-61573109830217): circular `sorn-logo.png`, hero backdrop `hero.png`, OG card `og.png`, and the icon master `icon-source.png`.

Derived assets (never hand-edit — regenerate from the master):

- `public/icons/` — `favicon-16/32.png`, `apple-touch-icon.png`, `icon-192/512.png`, `icon-192/512-maskable.png` (navy-800 bg, 80% safe zone).
- `public/favicon.ico` — multi-size (16 + 32) generated from the icon master.

Design tokens are Tailwind-first: `navy-50..950` (anchor `#0F2A3F`), `amber-50..900` (CTA `#B96A0E`), `cream-50..400` (page `#FBF8F2`), `steel-50..900` (neutrals), plus `shadow-elev-1..4` and `animate-hero-pan/float/bounce-soft`. See `tailwind.config.mjs`.

Typography uses **Inter Tight** (body) and **Bricolage Grotesque** (display) via **Bunny Fonts** — GDPR-safer than Google Fonts, no Google call.

### Copy rule — Facebook is the only source of truth

Every factual claim on the site has to be supported by Sorn's Facebook page. No "20+ years", no "fully insured", no "DBS checked", no "Gas Safe" unless/until it is posted publicly by Fraser or Aidan. When in doubt, retract the claim. See PR #7 for the retraction history.

## Content source of truth

`src/data/business.ts` — phone, WhatsApp, hours, services, areas. Change once, propagates everywhere.

## Contact form

`/contact` and `/quote` post to **Web3Forms** (no server, no account lock-in). The public access key is read at build time from `PUBLIC_WEB3FORMS_KEY` (set it in Netlify / Cloudflare Pages / GitHub Actions env). If the env var is missing the forms fall back gracefully to phone + WhatsApp CTAs — no broken submissions.

## Redesign decisions

1. **Astro over vanilla HTML** — component reuse, atomic SEO, clean sitemap, fast static output.
2. **Father-and-son as the hero differentiator** — the only trust claim we can ground in Facebook.
3. **`<base>` = `/sorn-handyman`** — GH Pages project site, so all internal links use Astro's `base` helper.
4. **Token-driven** — `docs/design-system.md` + `tailwind.config.mjs` are the single source for every colour, radius, shadow and animation. Do not reach for a raw hex in a template.
5. **Zero-JS default** — every page ships as static HTML + CSS. The only JS is a tiny `<script is:inline>` block for the mobile menu, header-shadow, and before/after slider.
