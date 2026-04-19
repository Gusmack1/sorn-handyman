import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Sitemap URL-priority rules.
// Home gets the max priority and weekly cadence (new blog posts surface there).
// Service pages are the core conversion surface — 0.9, monthly.
// Area pages are local-SEO hubs — 0.8, monthly.
// Blog posts feed topical authority — 0.7, weekly (we ship posts regularly).
// Everything else (quote, contact, about, areas/ index, services/ index, blog/ index)
// stays 0.5 monthly as supporting pages.
function classify(url) {
  // Strip trailing slash for matching convenience.
  const u = url.replace(/\/$/, '');
  // Home (the site root). Astro sitemap emits site + base, e.g.
  // https://gusmack1.github.io/sorn-handyman
  if (/\/sorn-handyman$/.test(u)) {
    return { priority: 1.0, changefreq: 'weekly' };
  }
  if (/\/services\/[^/]+$/.test(u)) {
    return { priority: 0.9, changefreq: 'monthly' };
  }
  if (/\/areas\/[^/]+$/.test(u)) {
    return { priority: 0.8, changefreq: 'monthly' };
  }
  if (/\/blog\/[^/]+$/.test(u)) {
    return { priority: 0.7, changefreq: 'weekly' };
  }
  return { priority: 0.5, changefreq: 'monthly' };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://gusmack1.github.io',
  base: '/sorn-handyman',
  trailingSlash: 'ignore',
  integrations: [
    tailwind(),
    sitemap({
      serialize(item) {
        const { priority, changefreq } = classify(item.url);
        return {
          ...item,
          priority,
          changefreq,
          lastmod: item.lastmod ?? new Date().toISOString(),
        };
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
