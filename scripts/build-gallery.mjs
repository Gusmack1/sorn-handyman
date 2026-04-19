#!/usr/bin/env node
/**
 * Builds the /public/gallery/ image set and src/data/gallery.ts manifest.
 * Source: facts #296 — 200 real Sorn Handyman FB posts in public.client_assets
 * (client_id = 'client_1774201992319'). Top posts by reactions_count were
 * curated by slug + category for variety (bathroom, fencing, decking, roofing,
 * painting, electrical, garden, tiling / panelling, kitchen).
 *
 * FB CDN URLs expire, so we mirror the JPG locally, then emit WebP+JPEG at
 * 1600w and 800w. Output sits in /public/gallery/ so GH Pages serves it.
 */
import fs from 'node:fs/promises';
import fss from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'public', 'gallery');
await fs.mkdir(OUT, { recursive: true });

/**
 * 20 curated jobs. URLs taken verbatim from public.client_assets full_picture
 * column (harvested 2026-04-18 — fact #296). Caption field is the real FB
 * message (trimmed). If a CDN URL expires we'll re-run the harvest.
 *
 * Categories: plumbing | electrical | roofing | decking | painting | tiling |
 * garden | joinery | general. (Map to UI tabs in gallery.astro.)
 */
const JOBS = [
  {
    slug: 'kilmarnock-dry-verge-roof-repair-01',
    category: 'roofing',
    town: 'Kilmarnock',
    year: 2026,
    caption: 'Dry verge repair completed for a lovely new customer in Kilmarnock. These are the jobs that stop small problems becoming big ones.',
    alt: 'Dry verge roof repair, Kilmarnock, 2026',
    url: 'https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/655969923_122178015344770327_4665169482604630029_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=5ml6jOfVq4EQ7kNvwEzr6D0&_nc_oc=Adq09dLN1HJAbcLrRqwiUylZ7Xgo2DBBzuiiaFtXnje0wvrmVPeKAg7CgSGVs15u_IQ&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQEBnQGbUXQilZVOrZ3AVTnIRkDkE5VSBIE0Bp_9uUAto6az1qXt0fTH1sGyFvqtfJ7OWwHr8zSskA&oh=00_Af3pUFXAxpyMAf4163sk3zejmHEzvWq3mm7LQmAAdC-4cA&oe=69EA2CC4',
  },
  {
    slug: 'kilmarnock-bathroom-suite-plumbing-02',
    category: 'plumbing',
    town: 'Kilmarnock',
    year: 2026,
    caption: 'Bathroom repairs in Kilmarnock: suite removed, leaking pipework replaced with new plumbing, flooring ripped out and rotten timber replaced.',
    alt: 'Bathroom suite and plumbing repair, Kilmarnock, 2026',
    url: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/672685759_122182469702770327_777496417697310204_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=MbO_ObelkrwQ7kNvwGIHjZq&_nc_oc=Adpmtr7TyeNOcXvxf8lQWMH8I99ViepcKzI12AJQ-fTBdqxcBRIOYYi0nwgajLWtiFQ&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQHI9LXJxqTgpoAmdpgrqM0lSMvEaAYRS0MfPzrhVIIMlQFBCMriQD1u6ojCocaSRJZchgAtiCgzaA&oh=00_Af3llM4yZzSfPtbH7TNs74P2pWpbx0R-o9H3Pxa4ivHsdA&oe=69EA022D',
  },
  {
    slug: 'sorn-internal-door-trim-refit-03',
    category: 'joinery',
    town: 'Sorn',
    year: 2026,
    caption: 'Internal doors trimmed and refitted after new flooring was installed for a lovely new customer in Sorn.',
    alt: 'Internal doors trimmed and refitted, Sorn, 2026',
    url: 'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/671742806_122181817046770327_3088115421563353965_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=O4ATQKrralAQ7kNvwEMXB7z&_nc_oc=Adokor0Nkd57x60mz_rdfR87TpU6zRh-JhIFore4yaxvqmktRU2x4wWHuqG22U7p4Js&_nc_zt=23&_nc_ht=scontent-ord5-1.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQHJbDQk6i5p0ysiM7UlS_KEyMLulon8hs6D9Ya4E96P-jE967V-ppPBvNzdmZ7Nh17o_c4jNF6kUA&oh=00_Af3miI_U_J72mRnahf7jOhXx1WcHR2NUZci8-0bgUotibw&oe=69EA26A1',
  },
  {
    slug: 'ayrshire-bath-reseal-04',
    category: 'plumbing',
    town: 'Ayrshire',
    year: 2026,
    caption: 'Bath resealed for a repeat customer — a proper reseal takes no time and saves a fortune in the long run.',
    alt: 'Bath reseal, Ayrshire, 2026',
    url: 'https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/655608089_122178015740770327_6188862654459558334_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=l7V_p8nserIQ7kNvwGgLKBo&_nc_oc=Adr5dv10I0uZeZiFoAvPdP-LAfB2Dd_EE1HOnZjmixmIgGm0qwH5h2U93A8fuV2HsNI&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQGRxWZWf6aeM5GjL-trPGLfAaoMLhlzCMppbPsNXbmZgXy4ph3PhcHb1-VEHhxrNIwgamdYsOEnTw&oh=00_Af2euBIkL0GvPyzse0dLfn0lDSC0dqPlnJMetnnjBgjhFw&oe=69EA0986',
  },
  {
    slug: 'kilmarnock-acoustic-slat-wall-panelling-tv-mount-05',
    category: 'tiling',
    town: 'Kilmarnock',
    year: 2026,
    caption: 'Full-wall acoustic slat panelling, TV wall-mounted, floating shelf fitted and light fittings hung at a property in Kilmarnock.',
    alt: 'Acoustic slat wall panelling, TV mount and shelving, Kilmarnock, 2026',
    url: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/655165921_122177746964770327_5537393054348173745_n.jpg?stp=cp1_dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=sC6yJ0BDDBIQ7kNvwHKwIr1&_nc_oc=AdrFOS5Gq9-bHc8CasC4g_J4hHgodiMGmH6cfXy-A_puin1dgqUHt-Ixa193drwqd9s&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQGk0XOJ_KCgCW8YkZTL2ucfhu-_CjnsqkLvkRnKrNNKaIH8IRDUSf1x-0BVbHcNk-qQGyJw4JoMqA&oh=00_Af0tZbAsAzlafqCssGyUJHP9HSbRgsfRDDXSx0a8zPFJFw&oe=69EA3351',
  },
  {
    slug: 'sorn-led-exterior-floodlight-06',
    category: 'electrical',
    town: 'Sorn',
    year: 2026,
    caption: 'LED exterior floodlight fitted for a lovely new customer in Sorn.',
    alt: 'LED exterior floodlight install, Sorn, 2026',
    url: 'https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/669932323_122181443732770327_7053679244890517211_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XzWqFMfBD4EQ7kNvwH7lt61&_nc_oc=AdpN2P7u9dgjVxu-LrvVO71EWl5OPv0kqRGzLY1avyQ_wnJmVAhVxLFcpWEUvqt64SM&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQHD0m4PfhA8UsPVd8kimM7gX18icKizUhn1YJkdoTxrfXOFwhaSwEifV78WTaiH_WgLlRnqm3ObVg&oh=00_Af1tfwbnSyCHKsqTNoC4m8d5inYCvajvH3KQexVgttFW4g&oe=69EA14B5',
  },
  {
    slug: 'mauchline-spring-garden-tidy-07',
    category: 'garden',
    town: 'Mauchline',
    year: 2026,
    caption: 'Spring garden tidy-up for a lovely new customer in Mauchline — a simple lift ready for the warmer months.',
    alt: 'Spring garden maintenance tidy-up, Mauchline, 2026',
    url: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/662920997_122180468552770327_94932227788522482_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=lljONZ557HkQ7kNvwEmtOlJ&_nc_oc=AdpmaLgiJepEDt4bs0idvwUcfEnZTOn3ILtljWLly5E6-WoyAcHzV86yRtE21sjy050&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQEaMM3ZyT_oJDU4G7lqq2fNejGHOWQTymc2dGBIQ3QXu5FQy8fx53dCdI5HT24bQBw5hnuPEGHJLQ&oh=00_Af1P7dIhNAjhpCLsyyJIhqpox5-b1FYqLmzcWMHMxLYsYA&oe=69EA05CA',
  },
  {
    slug: 'galston-cold-water-feed-pipe-repair-08',
    category: 'plumbing',
    town: 'Galston',
    year: 2026,
    caption: 'Cold water feed pipe repaired in an outhouse for a lovely repeat customer in Galston — sink and tap back in action.',
    alt: 'Cold water feed pipe repair, Galston, 2026',
    url: 'https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/664615567_122180467478770327_5254597903383858859_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=4AyXm1hjXVMQ7kNvwFVwbQc&_nc_oc=AdrV5F_0UA9jHMqhc3vMQBS6uuxXi5ASjwWFyG6wm-FW5N4vo03fPbd-dPm29bmV7AA&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQFFKfQL-0apLa4n9D8dZaqDATkyOjhc-Zs4o0iuOecoAT3L8R61kwy3jizXgJFxKnPlkgtYETteIQ&oh=00_Af1mG7TYyelQj3Sd-L3BEbr_1AgIDICGmnxHAfpNNVmdzg&oe=69EA09C7',
  },
  {
    slug: 'fenwick-patio-pressure-washing-09',
    category: 'garden',
    town: 'Fenwick',
    year: 2026,
    caption: 'Pressure washing in Fenwick — garden furniture and paving freshened up and ready to enjoy the garden again.',
    alt: 'Pressure washing paving and furniture, Fenwick, 2026',
    url: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/658151889_122179370726770327_9090962335385441565_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=h2k_MunXADgQ7kNvwEbFvWt&_nc_oc=AdqGPqXNyMZaQCq41yXI_TmjFrQm2rDkh2CEfCG3MwcejU6E0UgY5HXTVvz0jYqxsts&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQGPIkejAs8Jhjylv4Dfq8TxrGFTA-NF-4wjEwOEIVbQ5FKCq4pK5EMx-W0HwN5FbaaVHpdOj__8RQ&oh=00_Af1bTnYOYwRMVC6Gq1S_ApTjPeSiFjWc8VeQ84a_R5ex9g&oe=69EA292D',
  },
  {
    slug: 'ayrshire-bathroom-oak-door-swap-10',
    category: 'joinery',
    town: 'Ayrshire',
    year: 2026,
    caption: 'Bathroom door swap: out with the old flush door, in with a new solid oak cottage-style panel door and chrome handles.',
    alt: 'Bathroom oak panel door and chrome handles, Ayrshire, 2026',
    url: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/658418217_122178791036770327_2278473213513205785_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=5WhcpMxQuTIQ7kNvwFhIpYD&_nc_oc=AdrsLCNPLpEdqRjiDe5lDNMdKT50Q2aKxFdARLpaElDQTkPvF5dKiAznvWSjbdtDBag&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQFzORAXIZvb7_f_n9rEySkzImWxU6EO5Mw5RCNx_ZukRK428vXlVO1aw7AB33hYg60ZX0mX2DSyKQ&oh=00_Af0XIPL7yBKgP2lCWqotVWiVhj_RazZ-WqjcXUn9VOeP9g&oe=69EA1C64',
  },
  {
    slug: 'ayrshire-fence-build-new-11',
    category: 'fencing',
    town: 'Ayrshire',
    year: 2025,
    caption: 'New fence build — all materials supplied and fitted. FREE no-obligation quote on every enquiry.',
    alt: 'New fence build, Ayrshire, 2025',
    url: 'https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/485691074_122115029492770327_3974863545105454371_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=iqTPqiDSZxQQ7kNvwH7xgCw&_nc_oc=AdpbMJ70ipKZZKtBnPr3JuaD8-Eq9F-oqXyNEkudcDha6bJLmRjH1hg49ZZKwLUiv7k&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&edm=AKIiGfEEAAAA&_nc_gid=AfNNf1LQH6x0zRE_NrTFuQ&_nc_tpa=Q5bMBQFmQxR0x1mhIY127YYy3h3NJSFreiQl5VlA4E4wF3JA52hmBd0Xqdq5dzmuP5DmF4sj-cJqSvXZdQ&oh=00_Af1K0o0MVgPh-9nU88RJMwBHUPp4dhqK4E81cUgNDcN-Og&oe=69EA11A6',
  },
  {
    slug: 'ayrshire-bathroom-first-fit-bath-towel-rail-12',
    category: 'plumbing',
    town: 'Ayrshire',
    year: 2026,
    caption: 'New bath installed with brand new pipework plus a new towel rail fitted and plumbed for a lovely repeat customer.',
    alt: 'Bathroom first fit with new bath and towel rail, Ayrshire, 2026',
    url: 'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/634700620_122173126088770327_8121040945333813842_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=n6rhZsFcn9AQ7kNvwHaOzxi&_nc_oc=AdpXIma777v-ObQ6WAcqJFNvCNjiqztuS70UekuCcpi2Aq_JZkWskRjlk7P2p7C3gXY&_nc_zt=23&_nc_ht=scontent-ord5-1.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQHUBqSXEui--Fk7NYnSWN497aJoOmyLQEJ8KDuPCb9HLsaQSysQs5Kxnk-PxyMT4Ries83u7P0kFA&oh=00_Af2yW67Vx-NU_ty1UN9eRviSVTzQgk_1bYHtB-VsL0UsSA&oe=69EA34A5',
  },
  {
    slug: 'ayrshire-fence-painting-weather-stain-13',
    category: 'painting',
    town: 'Ayrshire',
    year: 2026,
    caption: 'Fence painted up and protected for the season: loose flakes brushed off, edges masked, two coats of weather-protective stain.',
    alt: 'Fence painting with weather-protective stain, Ayrshire, 2026',
    url: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/668446231_122180854460770327_5602263237397775245_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=rt93kPKhNcEQ7kNvwHIi0Cs&_nc_oc=AdoG6ac9Q2yiUr7oFFyKEHL_k-WBspt8kS6oOZ2TO5eRqbyGPbyoDtmC8YLB3DfftCc&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQG4Vp-7YGrNDJom8p6xcy1xcBCnzvBa1WBV5RvYgCBGLilTpnVt9Y70MuL-85zu2LSAPxJKxr5pnw&oh=00_Af22a-bACUvPz1ckyW3jDhiZm-tfapIY0nKbGkwNoAZvaw&oe=69EA18E6',
  },
  {
    slug: 'ayrshire-composite-deck-build-14',
    category: 'decking',
    town: 'Ayrshire',
    year: 2026,
    caption: 'New composite deck supplied and built for a lovely repeat customer in Ayrshire.',
    alt: 'Composite deck supplied and built, Ayrshire, 2026',
    url: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/652294361_122177530082770327_8520448438738461687_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=D2fDegsF7u4Q7kNvwEPmCe9&_nc_oc=AdrPIvqBxDzioYE1RLki_0eUM0GNU-Hd-seMhlcW5byZaN2kaxVyNTUgJgNGszOQpNw&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQGXEhD-TiTiCSTVKjXQgzniNcWfXR4hGZOJL52YdExxhCVVEKMsCHBXK4nSTd8b6Odu2RQQrIZdEg&oh=00_Af21NYaCzolFzrdU4PgfKxZYeW0JqFOJzs6VmPqcOxN8Kg&oe=69EA25E5',
  },
  {
    slug: 'ayrshire-kitchen-refit-belfast-sink-granite-15',
    category: 'kitchen',
    town: 'Ayrshire',
    year: 2026,
    caption: 'Kitchen refitted after underfloor damp works: electrics, Belfast sink and tap reinstalled, granite worktops, cabinets and original tiles back on.',
    alt: 'Kitchen refit with Belfast sink and granite worktops, Ayrshire, 2026',
    url: 'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/642394075_122173970870770327_1783754075048005059_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=cQFnzay2-TEQ7kNvwFt0pqA&_nc_oc=Adohv15iceOmidvV0W6A0rASp0Y3kZ9txLJDiF_YL8OXErxZfzG5dgg9GIfREaQUX28&_nc_zt=23&_nc_ht=scontent-ord5-1.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQEjeAuEAO6nIJDDgBnXaCStGZHemF6g-33_DfzUm0dmu2eR883Z0bfk-jqq-zZCz7SJX21j5WMnPw&oh=00_Af0c5scQdMlFNXI0h1ObTTcXfD0lcfoHsvFdasHSKGjvhQ&oe=69EA191D',
  },
  {
    slug: 'ayrshire-led-bathroom-downlights-16',
    category: 'electrical',
    town: 'Ayrshire',
    year: 2026,
    caption: 'Old halogens out, brand new LED downlights fitted in two bathrooms — better light, lower bills.',
    alt: 'LED bathroom downlight upgrade, Ayrshire, 2026',
    url: 'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/616278223_122168903714770327_7294387944507186067_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=VyFKbIja0lwQ7kNvwE901X2&_nc_oc=AdqhRTAarwHbOE4AxU4NkBwg8O2OQ9GYtVXf-LkIo_XBKJbxCDsm7RbFFejZoECKOTY&_nc_zt=23&_nc_ht=scontent-ord5-1.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQFmYIEeQ8OZY1WPSutBtPbFBAxKG5G9XSz38TchoAUp3D6NH-QxlVSu09OQrK9EbtTz5zCQcG3C8g&oh=00_Af0A1V-ZQYr5bD_uWRaKy8vhAfwxz70wh_95NyNSDy4rmg&oe=69EA330A',
  },
  {
    slug: 'ayrshire-fascia-board-repair-17',
    category: 'roofing',
    town: 'Ayrshire',
    year: 2026,
    caption: 'Repairs to damaged and missing fascia boards including safe removal of a wasps nest.',
    alt: 'Fascia board repair, Ayrshire, 2026',
    url: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/667522888_122180689496770327_8009020239238188371_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=k-j26FYUPJsQ7kNvwEmAQbk&_nc_oc=AdotNt2Upsg8xEeQILRD-fRr8vUrN0o-0aUbGefX_--IM4gfEzuVQhWRLqPld6J-u30&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQGxC-i2-O108wGeXfhzrc-02OQLL7hSYlgFWuyXFDtp4TJSfkXXQ_SEM7rxsEvT_c1dmei7KhVOrQ&oh=00_Af02HYyYvIr-iThPTsg5IB2wSVxEHf3G_O7sOE3FL35uvw&oe=69EA09E5',
  },
  {
    slug: 'ayrshire-living-room-emulsion-painting-18',
    category: 'painting',
    town: 'Ayrshire',
    year: 2025,
    caption: 'Living room and dining room freshened up with white emulsion for a lovely repeat customer.',
    alt: 'Living room and dining room white emulsion painting, Ayrshire, 2025',
    url: 'https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/555520280_122153463950770327_4906081609482557319_n.jpg?stp=cp1_dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=RXqQBS7HEVsQ7kNvwHu6iDW&_nc_oc=AdqhCc2hwk3yLpMmsQwSdlhFtjECoREzAlTXTx-3gBjHvd7KuWwwMX2nWHFZJxiw6mY&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&edm=AKIiGfEEAAAA&_nc_gid=AfNNf1LQH6x0zRE_NrTFuQ&_nc_tpa=Q5bMBQHTziDaSLu9OyJCQ2FOX_BZ1eKGqKm4RGG9jWSvMboVrb5bgo_kHnR_BEgG_vxXkM1uLkdtwztboQ&oh=00_Af09cxAubyWYYj11SQnuJ_vyHQMLIqRsXvnNdU7H3V58xA&oe=69EA2291',
  },
  {
    slug: 'ayrshire-raised-sleeper-bed-landscaping-19',
    category: 'garden',
    town: 'Ayrshire',
    year: 2025,
    caption: 'Garden refurb with sleeper raised bed, new topsoil and a Rowan tree planted. Supply and install throughout.',
    alt: 'Sleeper raised bed and rowan tree landscaping, Ayrshire, 2025',
    url: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/554100483_122153197958770327_8304581651812397503_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=1B8GbuQcbAAQ7kNvwE4g4er&_nc_oc=Adr7cgpSJHy9SxxDrEjh7NO2XRNjzSCS5UkH4Y0Vj_2OO3OQF15ylGG6uBOeR2Jf1yU&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&edm=AKIiGfEEAAAA&_nc_gid=AfNNf1LQH6x0zRE_NrTFuQ&_nc_tpa=Q5bMBQFZ-p6QLTOyDxTOmDdu2C1DvD8CfwkbM-MtpSKw2MD0oh2pryeTXgRQwpXf5oPLsHh6HMVUGuwIIw&oh=00_Af12ysGrpe8BI2-asqGAmqN39zn0GQAoFAdvbCwXfjb4GQ&oe=69EA2BCA',
  },
  {
    slug: 'ayrshire-fence-post-replacement-20',
    category: 'fencing',
    town: 'Ayrshire',
    year: 2025,
    caption: 'Broken fence posts dug out and replaced for a new customer — straight line, solid finish.',
    alt: 'Fence post replacement, Ayrshire, 2025',
    url: 'https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/559010425_122155612070770327_8436924366850456833_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=RSe1qmzfixYQ7kNvwF5uqBl&_nc_oc=AdpN8gSUCFSRScwLNuFtIBcCnbvXzRKGJIYepCDonWgmyMostuCil2f7DtYnl8bud_A&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&edm=AKIiGfEEAAAA&_nc_gid=VDRw5Bmj1NgBguWkFciB5g&_nc_tpa=Q5bMBQFmb_q6LKEc8ViONeswyYcd8tKsehc9djqWhnAzadpSWLjxg8-zPVgVJ0t7ZiaygVtoSjFm4R9NXA&oh=00_Af3nwyTFgPGlUh5bMcckVrhDBq-F0p_XGofXdSvuf_NYoA&oe=69EA286B',
  },
];

// Track which posts 403 so we can report back.
const failed = [];
const manifest = [];

for (const job of JOBS) {
  process.stdout.write(`[build-gallery] ${job.slug} ... `);
  let buf;
  try {
    const res = await fetch(job.url, {
      headers: {
        // FB CDN 403s without a browser-ish UA.
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15',
        'Accept': 'image/avif,image/webp,image/jpeg,image/*,*/*;q=0.8',
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    buf = Buffer.from(await res.arrayBuffer());
  } catch (err) {
    console.log(`FAILED (${err.message})`);
    failed.push({ slug: job.slug, url: job.url, error: String(err.message) });
    continue;
  }

  // Derive dimensions and emit 1600w + 800w variants at q=82.
  const meta = await sharp(buf).metadata();
  const srcRatio = (meta.height && meta.width) ? meta.height / meta.width : 0.75;

  const variants = {};
  for (const w of [1600, 800]) {
    const pipeline = sharp(buf).resize({ width: w, withoutEnlargement: true });
    const webp = await pipeline.clone().webp({ quality: 82, effort: 5 }).toBuffer();
    const jpeg = await pipeline.clone().jpeg({ quality: 82, mozjpeg: true, progressive: true }).toBuffer();
    const webpName = `${job.slug}-${w}w.webp`;
    const jpegName = `${job.slug}-${w}w.jpg`;
    await fs.writeFile(path.join(OUT, webpName), webp);
    await fs.writeFile(path.join(OUT, jpegName), jpeg);
    variants[`webp_${w}`] = { file: webpName, bytes: webp.length };
    variants[`jpeg_${w}`] = { file: jpegName, bytes: jpeg.length };
  }

  const out1600 = variants.webp_1600;
  const out800 = variants.webp_800;
  const width = Math.min(meta.width || 1600, 1600);
  const height = Math.round(width * srcRatio);

  manifest.push({
    slug: job.slug,
    category: job.category,
    town: job.town,
    year: job.year,
    caption: job.caption,
    alt: job.alt,
    width,
    height,
    webp1600: `gallery/${variants.webp_1600.file}`,
    webp800: `gallery/${variants.webp_800.file}`,
    jpeg1600: `gallery/${variants.jpeg_1600.file}`,
    jpeg800: `gallery/${variants.jpeg_800.file}`,
  });
  console.log(`ok (1600w webp ${(out1600.bytes / 1024).toFixed(0)}KB / 800w webp ${(out800.bytes / 1024).toFixed(0)}KB)`);
}

// Write TS manifest
const dataDir = path.join(ROOT, 'src', 'data');
await fs.mkdir(dataDir, { recursive: true });
const ts = `// AUTO-GENERATED by scripts/build-gallery.mjs — do not hand-edit.
// Source: real Sorn Handyman Services FB posts (fact #296, client_assets).
// Re-run: \`node scripts/build-gallery.mjs\` to refresh from Supabase/FB CDN.

export type GalleryItem = {
  slug: string;
  category:
    | 'plumbing' | 'electrical' | 'roofing' | 'decking' | 'painting'
    | 'tiling'   | 'garden'    | 'joinery' | 'fencing' | 'kitchen' | 'general';
  town: string;
  year: number;
  caption: string;
  alt: string;
  width: number;
  height: number;
  webp1600: string;
  webp800: string;
  jpeg1600: string;
  jpeg800: string;
};

export const gallery: GalleryItem[] = ${JSON.stringify(manifest, null, 2)};

export const categories: Array<{ id: GalleryItem['category'] | 'all'; label: string }> = [
  { id: 'all',        label: 'All' },
  { id: 'plumbing',   label: 'Plumbing' },
  { id: 'electrical', label: 'Electrical' },
  { id: 'roofing',    label: 'Roofing' },
  { id: 'decking',    label: 'Decking' },
  { id: 'fencing',    label: 'Fencing' },
  { id: 'painting',   label: 'Painting' },
  { id: 'tiling',     label: 'Tiling' },
  { id: 'kitchen',    label: 'Kitchen' },
  { id: 'joinery',    label: 'Joinery' },
  { id: 'garden',     label: 'Garden' },
];
`;
await fs.writeFile(path.join(dataDir, 'gallery.ts'), ts);
console.log(`\n[build-gallery] manifest written: ${manifest.length} items`);
if (failed.length) {
  console.log(`[build-gallery] FAILED (${failed.length}):`);
  failed.forEach((f) => console.log(`  - ${f.slug}: ${f.error} (${f.url.slice(0, 80)}…)`));
}
