// Blog post registry — shared by blog index + Article JSON-LD.
// Body copy lives in the individual post pages (src/pages/blog/<slug>.astro)
// because Astro's content-collection / MDX stack is not installed in this site.
// Keeping a single registry here means the index, schema and related-links all
// agree on title, slug, description, author and date.

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;           // ISO
  dateDisplay: string;    // human
  author: string;
  authorBio: string;
  keyword: string;        // target SEO keyword
  area: string;           // primary area focus
  readMinutes: number;
  ogImage: string;        // path relative to site
  wordCount: number;      // approx, for reading-time + schema
};

export const AUTHOR = 'Fraser & Aidan at Sorn Handyman Services';
export const AUTHOR_BIO =
  'Time-served tradesmen based in Sorn, East Ayrshire. Covering all Ayrshire.';

export const posts: Post[] = [
  {
    slug: 'kilmarnock-bathroom-suite-strip-out',
    title: 'Bathroom suite strip-out in Kilmarnock',
    description:
      'Suite removed, leaking pipework replaced with new plumbing, rotten flooring ripped out and timber renewed on a Kilmarnock bathroom.',
    date: '2026-04-20',
    dateDisplay: '20 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'bathroom strip out Kilmarnock',
    area: 'Kilmarnock',
    readMinutes: 3,
    ogImage: '/gallery/kilmarnock-bathroom-suite-plumbing-02-1600w.jpg',
    wordCount: 420,
  },
  {
    slug: 'acoustic-slat-wall-panels-tv-mount-kilmarnock',
    title: 'Acoustic slat wall + TV mount in Kilmarnock',
    description:
      'Full-wall acoustic slat panelling, TV wall-mounted, floating shelf fitted and light fittings hung at a Kilmarnock property.',
    date: '2026-04-20',
    dateDisplay: '20 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'acoustic slat wall Kilmarnock',
    area: 'Kilmarnock',
    readMinutes: 3,
    ogImage: '/gallery/kilmarnock-acoustic-slat-wall-panelling-tv-mount-05-1600w.jpg',
    wordCount: 400,
  },
  {
    slug: 'composite-deck-build-ayrshire',
    title: 'Composite deck build in Ayrshire',
    description:
      'New composite deck supplied and built for a repeat customer in Ayrshire — straight joists, clean edges, low maintenance.',
    date: '2026-04-20',
    dateDisplay: '20 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'composite deck Ayrshire',
    area: 'Ayrshire',
    readMinutes: 3,
    ogImage: '/gallery/ayrshire-composite-deck-build-14-1600w.jpg',
    wordCount: 420,
  },
  {
    slug: 'kitchen-refit-belfast-sink-granite-ayrshire',
    title: 'Kitchen refit with Belfast sink and granite in Ayrshire',
    description:
      'Kitchen put back after underfloor damp works: electrics, Belfast sink and tap reinstalled, granite worktops and original tiles returned.',
    date: '2026-04-20',
    dateDisplay: '20 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'kitchen refit Belfast sink Ayrshire',
    area: 'Ayrshire',
    readMinutes: 3,
    ogImage: '/gallery/ayrshire-kitchen-refit-belfast-sink-granite-15-1600w.jpg',
    wordCount: 430,
  },
  {
    slug: 'new-fence-supply-and-fit-ayrshire',
    title: 'New fence supplied and fitted in Ayrshire',
    description:
      'New fence build in Ayrshire — all materials supplied and fitted, posts set straight, panels square. FREE no-obligation quote on every enquiry.',
    date: '2026-04-20',
    dateDisplay: '20 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'new fence Ayrshire',
    area: 'Ayrshire',
    readMinutes: 3,
    ogImage: '/gallery/ayrshire-fence-build-new-11-1600w.jpg',
    wordCount: 410,
  },
  {
    slug: 'fascia-board-repair-ayrshire',
    title: 'Fascia board repair in Ayrshire',
    description:
      'Damaged and missing fascia boards repaired in Ayrshire, with safe removal of a wasps nest before the timber went back up.',
    date: '2026-04-20',
    dateDisplay: '20 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'fascia board repair Ayrshire',
    area: 'Ayrshire',
    readMinutes: 3,
    ogImage: '/gallery/ayrshire-fascia-board-repair-17-1600w.jpg',
    wordCount: 400,
  },
  {
    slug: 'spring-garden-tidy-mauchline',
    title: 'Spring garden tidy in Mauchline',
    description:
      'Spring garden tidy-up in Mauchline — a simple lift, cut back and clear-out ready for the warmer months.',
    date: '2026-04-20',
    dateDisplay: '20 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'garden tidy Mauchline',
    area: 'Mauchline',
    readMinutes: 3,
    ogImage: '/gallery/mauchline-spring-garden-tidy-07-1600w.jpg',
    wordCount: 390,
  },
  {
    slug: 'cold-water-pipe-repair-galston',
    title: 'Cold water feed pipe repair in Galston',
    description:
      'Cold water feed pipe repaired in an outhouse for a repeat customer in Galston — sink and tap back in action the same day.',
    date: '2026-04-20',
    dateDisplay: '20 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'cold water pipe repair Galston',
    area: 'Galston',
    readMinutes: 3,
    ogImage: '/gallery/galston-cold-water-feed-pipe-repair-08-1600w.jpg',
    wordCount: 400,
  },
  {
    slug: 'led-exterior-floodlight-sorn',
    title: 'LED exterior floodlight fitted in Sorn',
    description:
      'LED exterior floodlight fitted for a new customer in Sorn — bright, efficient and neatly wired back to the existing circuit.',
    date: '2026-04-20',
    dateDisplay: '20 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'LED floodlight Sorn',
    area: 'Sorn',
    readMinutes: 3,
    ogImage: '/gallery/sorn-led-exterior-floodlight-06-1600w.jpg',
    wordCount: 390,
  },
  {
    slug: 'sleeper-raised-bed-landscaping-ayrshire',
    title: 'Sleeper raised bed and landscaping in Ayrshire',
    description:
      'Garden refurb in Ayrshire: sleeper raised bed built, new topsoil in and a Rowan tree planted. Supply and install throughout.',
    date: '2026-04-20',
    dateDisplay: '20 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'sleeper raised bed Ayrshire',
    area: 'Ayrshire',
    readMinutes: 3,
    ogImage: '/gallery/ayrshire-raised-sleeper-bed-landscaping-19-1600w.jpg',
    wordCount: 410,
  },
];

export function postBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

// Resolve a list of slugs to Post objects, silently dropping any that don't exist.
// Used by area/service/blog pages to render "Recent local work" / "Related posts" blocks.
export function postsBySlugs(slugs: string[]): Post[] {
  return slugs.map((s) => postBySlug(s)).filter((p): p is Post => Boolean(p));
}

// Area slug -> related blog slugs. Empty — rebuild manually as pattern firms up.
export const AREA_POSTS: Record<string, string[]> = {};
export const AREA_POSTS_FALLBACK: string[] = [];

// Service slug -> related blog slugs. Empty for the same reason.
export const SERVICE_POSTS: Record<string, string[]> = {};
export const SERVICE_POSTS_FALLBACK: string[] = [];

// Blog slug -> related blog slugs. Empty — no cross-links on the rebuilt set.
export const RELATED_POSTS: Record<string, string[]> = {};
