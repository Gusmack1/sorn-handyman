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

export const AUTHOR = 'Aidan at Sorn Handyman Services';
export const AUTHOR_BIO =
  'Aidan runs Sorn Handyman Services with Fraser. Based in Sorn, East Ayrshire. Answers the phone 24/7.';

export const posts: Post[] = [
  {
    slug: '24-7-emergency-handyman-ayr',
    title: '24/7 Handyman in Ayr — What Counts as a Real Emergency?',
    description:
      'Burst pipes, broken locks, smashed windows, dead sockets, flooding drains — what actually needs a 3am call, and what can wait until morning. Honest guide from a Sorn handyman who covers Ayr 24/7.',
    date: '2026-04-18',
    dateDisplay: '18 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'emergency handyman ayr',
    area: 'Ayr',
    readMinutes: 6,
    ogImage: '/og/blog-24-7-emergency-handyman-ayr.jpg',
    wordCount: 1210,
  },
  {
    slug: 'gutter-cleaning-ayr-kilmarnock-spring',
    title: 'Gutter Cleaning Ayr & Kilmarnock: Why Spring Is the Right Time',
    description:
      'Why spring (not autumn) is the right window to clean gutters across Ayr and Kilmarnock, what we actually do with the vac pole, and the warning signs you should not leave till June.',
    date: '2026-04-18',
    dateDisplay: '18 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'gutter cleaning ayr',
    area: 'Ayr & Kilmarnock',
    readMinutes: 5,
    ogImage: '/og/blog-gutter-cleaning-ayr-kilmarnock-spring.jpg',
    wordCount: 1030,
  },
  {
    slug: 'hiring-handyman-troon-7-questions',
    title: 'Hiring a Handyman in Troon: 7 Questions to Ask Before You Book',
    description:
      'Seven straight questions to ask any handyman in Troon before you hand over a set of keys — insurance, trade background, written quotes, warranty, and the other four that most folk forget.',
    date: '2026-04-18',
    dateDisplay: '18 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'handyman troon',
    area: 'Troon',
    readMinutes: 5,
    ogImage: '/og/blog-hiring-handyman-troon-7-questions.jpg',
    wordCount: 1020,
  },
  {
    slug: 'emergency-plumber-mauchline',
    title: 'Emergency Plumber Mauchline — Out-of-Hours Cover',
    description:
      'What our out-of-hours plumbing call-out covers in Mauchline — burst pipes, stopcock failures, frozen joints — how fast we are from Sorn, and how to shut the water off yourself before we arrive.',
    date: '2026-04-19',
    dateDisplay: '19 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'emergency plumber mauchline',
    area: 'Mauchline',
    readMinutes: 6,
    ogImage: '/og/blog-emergency-plumber-mauchline.jpg',
    wordCount: 1100,
  },
  {
    slug: 'flat-pack-assembly-ayr',
    title: 'IKEA PAX & Flat-Pack Assembly Ayr — Time and Cost',
    description:
      'How long a PAX 200cm wardrobe actually takes, honest price bands for IKEA and other flat-pack assembly in Ayr, what we bring that IKEA’s own service doesn’t, and the two pitfalls that ruin half of DIY builds.',
    date: '2026-04-19',
    dateDisplay: '19 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'ikea assembly ayr',
    area: 'Ayr',
    readMinutes: 5,
    ogImage: '/og/blog-flat-pack-assembly-ayr.jpg',
    wordCount: 1040,
  },
  {
    slug: 'gutter-cleaning-cost-kilmarnock',
    title: 'How Much Does Gutter Cleaning Cost in Kilmarnock?',
    description:
      'What goes into a gutter cleaning price in Kilmarnock — house size, access, downpipes, moss — what drives the price up, and the warning signs you are overdue. Every job priced individually.',
    date: '2026-04-19',
    dateDisplay: '19 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'gutter cleaning kilmarnock',
    area: 'Kilmarnock',
    readMinutes: 5,
    ogImage: '/og/blog-gutter-cleaning-cost-kilmarnock.jpg',
    wordCount: 1060,
  },
  {
    slug: 'decking-cost-east-ayrshire-2026',
    title: 'Decking Cost Per m² in East Ayrshire (2026)',
    description:
      'What you actually get for your money on a deck in East Ayrshire — pressure-treated softwood vs composite, what is included in the fit, what is not, and the permission line at 30cm. Every job priced individually.',
    date: '2026-04-19',
    dateDisplay: '19 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'decking cost ayrshire',
    area: 'East Ayrshire',
    readMinutes: 6,
    ogImage: '/og/blog-decking-cost-east-ayrshire-2026.jpg',
    wordCount: 1120,
  },
  {
    slug: 'storm-eowyn-fence-repairs-ayrshire',
    title: 'Storm Éowyn Fence Repairs — Ayrshire Timeline & What Insurance Covers',
    description:
      'What Storm Éowyn did to East Ayrshire fences in January 2025, make-safe vs full-replace pricing, what home insurance usually covers (and what it doesn’t), and how fast we can get you on the list.',
    date: '2026-04-19',
    dateDisplay: '19 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'storm fence repair Ayrshire',
    area: 'East Ayrshire',
    readMinutes: 6,
    ogImage: '/og/blog-storm-eowyn-fence-repairs-ayrshire.jpg',
    wordCount: 1140,
  },
  {
    slug: 'handyman-ayrshire-landlords',
    title: 'Handyman Services for Ayrshire Landlords — Turnovers, Tenant Damage & Invoicing',
    description:
      'End-of-tenancy make-good packages, common tenant-damage fixes, same-day response for rent-ready deadlines, and 30-day invoicing for portfolio landlords across the KA postcodes.',
    date: '2026-04-19',
    dateDisplay: '19 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'landlord handyman Ayrshire',
    area: 'Ayrshire',
    readMinutes: 6,
    ogImage: '/og/blog-handyman-ayrshire-landlords.jpg',
    wordCount: 1120,
  },
  {
    slug: 'airbnb-handyman-ka-postcodes',
    title: 'Airbnb & Short-Let Turnover Handyman Cover — KA Postcodes',
    description:
      'Same-day response for between-guest problems — broken shower, blocked drain, bust blinds. Keyless access, itemised invoice for Airbnb reimbursement, repeat-customer pricing across the KA postcodes.',
    date: '2026-04-19',
    dateDisplay: '19 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'Airbnb handyman Ayrshire',
    area: 'KA postcodes',
    readMinutes: 6,
    ogImage: '/og/blog-airbnb-handyman-ka-postcodes.jpg',
    wordCount: 1110,
  },
  {
    slug: 'electric-shower-replacement-cumnock',
    title: 'Electric Shower Replacement Cumnock — When to Repair, When to Replace',
    description:
      'Signs your electric shower is done, the brands we fit (Mira, Triton, Bristan), when it is the pump vs the unit, and how we coordinate a Part-P electrician if the circuit needs it. Every job priced individually.',
    date: '2026-04-19',
    dateDisplay: '19 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'electric shower Cumnock',
    area: 'Cumnock',
    readMinutes: 6,
    ogImage: '/og/blog-electric-shower-replacement-cumnock.jpg',
    wordCount: 1130,
  },
  {
    slug: 'kitchen-tap-replacement-ayrshire',
    title: 'Kitchen Tap Replacement in Ayrshire — What It Costs and How Long It Takes',
    description:
      'How long a kitchen tap swap actually takes in Ayrshire, when a cheap Screwfix tap is fine and when to spend, plus the isolator-valve check that saves you from a wet kitchen. Every job priced individually.',
    date: '2026-04-19',
    dateDisplay: '19 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'kitchen tap replacement ayrshire',
    area: 'Ayrshire',
    readMinutes: 5,
    ogImage: '/og/blog-kitchen-tap-replacement-ayrshire.jpg',
    wordCount: 1020,
  },
  {
    slug: 'flat-pack-assembly-east-ayrshire',
    title: 'Flat-Pack Assembly in East Ayrshire — IKEA, Argos, Wayfair, What We See Most',
    description:
      'What we actually build week in, week out across East Ayrshire — IKEA PAX and BILLY, Argos bunk beds, Wayfair L-desks — the brands that go together clean, the ones that fight you, and honest price bands by item.',
    date: '2026-04-19',
    dateDisplay: '19 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'flat pack assembly east ayrshire',
    area: 'East Ayrshire',
    readMinutes: 5,
    ogImage: '/og/blog-flat-pack-assembly-east-ayrshire.jpg',
    wordCount: 1030,
  },
  {
    slug: 'gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist',
    title: 'Gutter Cleaning in Kilmarnock and Ayr — Autumn 2026 Checklist',
    description:
      'Your autumn 2026 gutter checklist for Kilmarnock, Ayr and the KA postcodes — what to look for after the first big leaf-drop and the five warning signs that mean book this week. Every job priced individually.',
    date: '2026-04-19',
    dateDisplay: '19 April 2026',
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    keyword: 'gutter cleaning kilmarnock ayr autumn',
    area: 'Kilmarnock & Ayr',
    readMinutes: 5,
    ogImage: '/og/blog-gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist.jpg',
    wordCount: 1040,
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

// Area slug -> 2-3 topically relevant blog slugs.
// Any area not listed here falls back to AREA_POSTS_FALLBACK below.
export const AREA_POSTS: Record<string, string[]> = {
  sorn: ['emergency-plumber-mauchline', 'handyman-ayrshire-landlords', 'storm-eowyn-fence-repairs-ayrshire'],
  mauchline: ['emergency-plumber-mauchline', 'kitchen-tap-replacement-ayrshire', 'flat-pack-assembly-east-ayrshire'],
  cumnock: ['electric-shower-replacement-cumnock', 'kitchen-tap-replacement-ayrshire', 'flat-pack-assembly-east-ayrshire'],
  auchinleck: ['electric-shower-replacement-cumnock', 'flat-pack-assembly-east-ayrshire', 'kitchen-tap-replacement-ayrshire'],
  catrine: ['emergency-plumber-mauchline', 'kitchen-tap-replacement-ayrshire', 'flat-pack-assembly-east-ayrshire'],
  muirkirk: ['storm-eowyn-fence-repairs-ayrshire', 'flat-pack-assembly-east-ayrshire', 'kitchen-tap-replacement-ayrshire'],
  galston: ['gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist', 'flat-pack-assembly-east-ayrshire', 'handyman-ayrshire-landlords'],
  kilmarnock: ['gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist', 'gutter-cleaning-cost-kilmarnock', 'gutter-cleaning-ayr-kilmarnock-spring'],
  ayr: ['gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist', '24-7-emergency-handyman-ayr', 'flat-pack-assembly-ayr'],
  troon: ['hiring-handyman-troon-7-questions', 'kitchen-tap-replacement-ayrshire', 'flat-pack-assembly-east-ayrshire'],
  prestwick: ['airbnb-handyman-ka-postcodes', 'kitchen-tap-replacement-ayrshire', 'gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist'],
  irvine: ['airbnb-handyman-ka-postcodes', 'kitchen-tap-replacement-ayrshire', 'gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist'],
  kilmaurs: ['gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist', 'gutter-cleaning-cost-kilmarnock', 'flat-pack-assembly-east-ayrshire'],
  stewarton: ['gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist', 'gutter-cleaning-cost-kilmarnock', 'flat-pack-assembly-east-ayrshire'],
  maybole: ['airbnb-handyman-ka-postcodes', 'kitchen-tap-replacement-ayrshire', 'gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist'],
};

export const AREA_POSTS_FALLBACK = ['handyman-ayrshire-landlords', 'storm-eowyn-fence-repairs-ayrshire'];

// Service slug -> 2-3 topically relevant blog slugs.
export const SERVICE_POSTS: Record<string, string[]> = {
  plumbing: ['kitchen-tap-replacement-ayrshire', 'emergency-plumber-mauchline', 'electric-shower-replacement-cumnock'],
  fencing: ['storm-eowyn-fence-repairs-ayrshire'],
  'fence-repair': ['storm-eowyn-fence-repairs-ayrshire'],
  guttering: ['gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist', 'gutter-cleaning-cost-kilmarnock', 'gutter-cleaning-ayr-kilmarnock-spring'],
  'gutter-cleaning': ['gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist', 'gutter-cleaning-cost-kilmarnock', 'gutter-cleaning-ayr-kilmarnock-spring'],
  'deck-building': ['decking-cost-east-ayrshire-2026'],
  'flat-pack-assembly': ['flat-pack-assembly-east-ayrshire', 'flat-pack-assembly-ayr'],
  joinery: ['flat-pack-assembly-east-ayrshire', 'flat-pack-assembly-ayr', 'hiring-handyman-troon-7-questions'],
  'painting-decorating': ['handyman-ayrshire-landlords', 'airbnb-handyman-ka-postcodes'],
  roofing: ['gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist', 'storm-eowyn-fence-repairs-ayrshire', 'gutter-cleaning-cost-kilmarnock'],
  'power-washing': ['decking-cost-east-ayrshire-2026', 'handyman-ayrshire-landlords'],
  slabbing: ['decking-cost-east-ayrshire-2026', 'handyman-ayrshire-landlords'],
  'property-maintenance': ['handyman-ayrshire-landlords', 'airbnb-handyman-ka-postcodes', 'kitchen-tap-replacement-ayrshire'],
  'general-repairs': ['24-7-emergency-handyman-ayr', 'kitchen-tap-replacement-ayrshire', 'handyman-ayrshire-landlords'],
};

export const SERVICE_POSTS_FALLBACK = ['handyman-ayrshire-landlords', '24-7-emergency-handyman-ayr'];

// Blog slug -> 3 related blog slugs (for the "Related posts" block on each post).
export const RELATED_POSTS: Record<string, string[]> = {
  '24-7-emergency-handyman-ayr': ['emergency-plumber-mauchline', 'electric-shower-replacement-cumnock', 'kitchen-tap-replacement-ayrshire'],
  'emergency-plumber-mauchline': ['24-7-emergency-handyman-ayr', 'kitchen-tap-replacement-ayrshire', 'electric-shower-replacement-cumnock'],
  'electric-shower-replacement-cumnock': ['emergency-plumber-mauchline', 'kitchen-tap-replacement-ayrshire', '24-7-emergency-handyman-ayr'],
  'gutter-cleaning-ayr-kilmarnock-spring': ['gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist', 'gutter-cleaning-cost-kilmarnock', 'storm-eowyn-fence-repairs-ayrshire'],
  'gutter-cleaning-cost-kilmarnock': ['gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist', 'gutter-cleaning-ayr-kilmarnock-spring', 'storm-eowyn-fence-repairs-ayrshire'],
  'storm-eowyn-fence-repairs-ayrshire': ['decking-cost-east-ayrshire-2026', 'gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist', '24-7-emergency-handyman-ayr'],
  'decking-cost-east-ayrshire-2026': ['storm-eowyn-fence-repairs-ayrshire', 'handyman-ayrshire-landlords', 'flat-pack-assembly-east-ayrshire'],
  'flat-pack-assembly-ayr': ['flat-pack-assembly-east-ayrshire', 'hiring-handyman-troon-7-questions', 'airbnb-handyman-ka-postcodes'],
  'hiring-handyman-troon-7-questions': ['flat-pack-assembly-east-ayrshire', 'flat-pack-assembly-ayr', 'kitchen-tap-replacement-ayrshire'],
  'handyman-ayrshire-landlords': ['airbnb-handyman-ka-postcodes', 'kitchen-tap-replacement-ayrshire', 'gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist'],
  'airbnb-handyman-ka-postcodes': ['handyman-ayrshire-landlords', 'kitchen-tap-replacement-ayrshire', 'flat-pack-assembly-east-ayrshire'],
  'kitchen-tap-replacement-ayrshire': ['emergency-plumber-mauchline', 'electric-shower-replacement-cumnock', '24-7-emergency-handyman-ayr'],
  'flat-pack-assembly-east-ayrshire': ['flat-pack-assembly-ayr', 'hiring-handyman-troon-7-questions', 'airbnb-handyman-ka-postcodes'],
  'gutter-cleaning-kilmarnock-ayr-autumn-2026-checklist': ['gutter-cleaning-cost-kilmarnock', 'gutter-cleaning-ayr-kilmarnock-spring', 'storm-eowyn-fence-repairs-ayrshire'],
};
