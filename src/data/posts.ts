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
    title: 'Emergency Plumber Mauchline — What £60 Out-of-Hours Covers',
    description:
      'What the £60 out-of-hours minimum gets you in Mauchline — burst pipes, stopcock failures, frozen joints — how fast we are from Sorn, and how to shut the water off yourself before we arrive.',
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
      'Straight prices for gutter cleaning across Kilmarnock — 3-bed semi around £80, 4-bed detached around £110, bungalow around £60 — what drives the price up, and the warning signs you are overdue.',
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
      'Honest 2026 pricing for decking in East Ayrshire — pressure-treated softwood £110–£160/m², composite £180–£260/m², what’s included in the fit, what isn’t, and the permission line at 30cm.',
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
      'Signs your electric shower is done, the brands we fit (Mira, Triton, Bristan), all-in unit + fit price bands £180–£420, when it is the pump vs the unit, and how we coordinate a Part-P electrician if the circuit needs it.',
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
];

export function postBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
