# Sorn Handyman Services — Website (redesign-v1)

24/7 handyman services across East Ayrshire. Father-and-son team: Fraser (20+ years trade) and Aidan (qualified mechanical engineer + plumber).

Built with **Astro 5 + Tailwind 4** and deployed via **GitHub Pages**.

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
      [slug].astro                # 11 area pages generated from business.ts
    blog/
      index.astro
      [slug].astro
public/
  favicon.svg / icon-*.png / site.webmanifest / robots.txt
```

## Assets to supply (TODO for Aidan/Fraser)

The site ships with **SVG placeholders** for:

- Hero background (`public/img/hero.svg`)
- Fraser + Aidan team photo (`public/img/team.svg`)
- Service card imagery (14 SVGs)
- Before/after gallery slots (8 SVGs)
- OG image (`public/og-image.svg` — ideally a 1200x630 JPG)
- Logo

Replace each with a real JPG/WebP keeping the same filename for zero code changes.

## Content source of truth

`src/data/business.ts` — phone, WhatsApp, hours, services, areas. Change once, propagates everywhere.

## Contact form

`/contact` and `/quote` post to **Web3Forms** (no server, no account lock-in). The public access key lives in `src/data/business.ts` → `web3formsKey`. Currently a placeholder; swap with Gus's real key or switch the `action=` to Netlify/Formspree.

## Redesign decisions (PR redesign-v1)

1. **Astro over vanilla HTML** — component reuse, atomic SEO, clean sitemap, fast static output.
2. **24/7 as the hero differentiator** — amber badge, sticky call bar, repeated across every town page.
3. **`<base>` = `/sorn-handyman`** — GH Pages project site, so all internal links use Astro's `base` helper.
