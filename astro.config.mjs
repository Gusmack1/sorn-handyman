import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// Custom domain target: https://sornhandyman.co.uk
// Domain not yet registered as of 2026-04-18 — when live, add public/CNAME
// containing "sornhandyman.co.uk" and the GitHub Pages DNS will pick it up.
// Until then, GH Pages still serves at gusmack1.github.io/sorn-handyman/ but
// canonical URLs point to the target custom domain for launch-day continuity.
export default defineConfig({
  site: "https://sornhandyman.co.uk",
  trailingSlash: "always",
  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date(),
    }),
    tailwind({ applyBaseStyles: true }),
  ],
});
