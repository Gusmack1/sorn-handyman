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
];

export function postBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
