// Single source of truth for NAP, hours, services, areas.
// Change here → propagates everywhere (home, about, service/area pages, schema, footer).

export const BASE = '/sorn-handyman';

export const business = {
  name: 'Sorn Handyman Services',
  legalName: 'Sorn Handyman Services',
  tagline: '24/7 Handyman — Call Anytime',
  description:
    'Handyman team covering East Ayrshire 24 hours a day, 7 days a week. Fraser and Aidan answer every call — day, night, weekend.',
  phone: '07900 255876',
  phoneE164: '+447900255876',
  whatsapp: '+447472223323',
  whatsappDisplay: '+44 7472 223323',
  email: 'sornhandyman@gmail.com', // placeholder — confirm with Aidan
  address: {
    locality: 'Sorn',
    region: 'East Ayrshire',
    postalCode: 'KA5',
    country: 'GB',
  },
  geo: {
    // Sorn village centre (approx) — OpenStreetMap
    lat: 55.5183,
    lon: -4.2947,
  },
  priceRange: '£',
  hours: {
    // 24/7
    mon: ['00:00', '23:59'],
    tue: ['00:00', '23:59'],
    wed: ['00:00', '23:59'],
    thu: ['00:00', '23:59'],
    fri: ['00:00', '23:59'],
    sat: ['00:00', '23:59'],
    sun: ['00:00', '23:59'],
  },
  socials: {
    facebook: 'https://www.facebook.com/p/Sorn-Handyman-Services-61573109830217',
    instagram: 'https://www.instagram.com/sornhandyman', // placeholder — reserved handle
    googleReview: 'https://g.page/r/CZryRT85fFQ1EBI/review',
  },
  googleMapsEmbed:
    // centred on Sorn, East Ayrshire
    'https://www.google.com/maps?q=Sorn+Handyman+Services+Sorn+KA5&hl=en-GB&z=11&output=embed',
  gbpUrl: 'https://g.page/r/CZryRT85fFQ1EBI/review', // verified GBP review short-link (claude_brain fact #349, 2026-04-18)
  // web3formsKey now loads from Netlify/Pages env at build time. Add PUBLIC_WEB3FORMS_KEY to env before deploy.
  // Falsy / missing key → contact + quote forms fall back gracefully to tel: + WhatsApp CTAs.
  // TODO: verify Sorn business email with Aidan [UNVERIFIED-EMAIL]. Interim fallback uses phone/WhatsApp.
  web3formsKey: (import.meta.env.PUBLIC_WEB3FORMS_KEY as string | undefined) ?? '',
  siteUrl: 'https://gusmack1.github.io/sorn-handyman',
};

export type Service = {
  slug: string;
  name: string;
  short: string; // under 80 chars
  icon: string; // emoji or inline svg name
  priceFrom?: string;
  description: string;
  included: string[];
  notIncluded?: string[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: 'guttering',
    name: 'Guttering',
    short: 'New gutters, downpipes and repairs that survive Ayrshire winters.',
    icon: '🏠',
    description:
      'Sagging, leaking or blocked gutters turn a small drip into a damp problem fast. We replace cast, PVC and half-round in Ayr, Kilmarnock, Mauchline and right across East Ayrshire — same-day quote, often same-day fix.',
    included: [
      'Full gutter replacement (PVC, cast-iron look, half-round)',
      'Downpipe replacement and re-routing',
      'Leak sealing and joint repair',
      'Hopper and outlet installation',
      'Eaves board repair where rot has started',
      'All debris bagged and taken away',
    ],
    notIncluded: ['Fascia/soffit full replacement (quoted separately)'],
    keywords: ['gutter replacement Ayrshire', 'leaking gutters Kilmarnock', 'gutter repair Mauchline'],
  },
  {
    slug: 'joinery',
    name: 'Joinery',
    short: 'Doors, skirtings, kitchen units, staircases — done properly.',
    icon: '🪚',
    description:
      'Hung doors that stick? Kitchen cabinets bowing? Staircases loose? Joinery is Fraser\'s core trade — we know real Ayrshire houses and what\'s behind the plaster before we cut.',
    included: [
      'Internal and external door hanging',
      'Architrave, skirting and dado rail',
      'Kitchen and bedroom unit installation',
      'Built-in wardrobes and alcove shelving',
      'Staircase tightening, spindle and newel replacement',
      'Window board and cill joinery',
    ],
    keywords: ['joiner Sorn', 'joiner Mauchline', 'door hanging Kilmarnock'],
  },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    short: 'Taps, traps, leaks, new installs — Aidan handles the water side.',
    icon: '🔧',
    description:
      'Water where it shouldn\'t be is why most of our 3am calls come in. Aidan runs the water side — we isolate, diagnose and fix, then put the space back how we found it.',
    included: [
      'Tap and mixer replacement',
      'Toilet, cistern and waste replacement',
      'Leak tracing and pipe repair (copper, plastic, lead joins)',
      'Radiator swap-outs',
      'Basin, sink and shower installation',
      'Isolation valve fitting',
      'Outside tap installation',
    ],
    notIncluded: ['Gas work — we don\'t touch gas; we recommend a local gas-registered engineer'],
    keywords: ['plumber Ayrshire', 'emergency plumber Kilmarnock', 'leaking tap Sorn'],
  },
  {
    slug: 'painting-decorating',
    name: 'Painting & Decorating',
    short: 'Interior and exterior, proper prep, no drips on the carpet.',
    icon: '🎨',
    description:
      'Prep is 80% of the job. We sand, fill, caulk, prime and cut in by hand before any roller goes near a wall — the finish shows it.',
    included: [
      'Interior walls, ceilings, woodwork',
      'Exterior render, harling, wood and metal',
      'Feature walls and colour matching',
      'Wallpaper stripping and hanging',
      'Filling, sanding and caulking',
      'Furniture moved and dust-sheeted',
    ],
    keywords: ['painter decorator Ayrshire', 'exterior painting Kilmarnock', 'decorator Mauchline'],
  },
  {
    slug: 'roofing',
    name: 'Small Roofing',
    short: 'Slipped slates, ridge re-pointing, flat-roof patches — no full re-roofs.',
    icon: '🏘️',
    description:
      'We don\'t strip roofs, but we fix what a storm broke last night. If your slate is on the lawn or your flat roof is holding water, we\'re up there today.',
    included: [
      'Slipped or missing slate/tile replacement',
      'Ridge and hip re-pointing',
      'Flashing repair (lead, Ubiflex)',
      'Flat-roof patching (felt, EPDM)',
      'Chimney re-pointing (low-level)',
      'Roof vent and cowl replacement',
    ],
    notIncluded: ['Full re-roofs', 'Scaffold-required tall properties'],
    keywords: ['roof repair Ayrshire', 'slipped slate Kilmarnock', 'flat roof patch Sorn'],
  },
  {
    slug: 'power-washing',
    name: 'Power-Washing',
    short: 'Driveways, patios, paths, render — back to the colour you forgot they were.',
    icon: '💦',
    description:
      'Ayrshire moss loves a damp winter. One afternoon with the pressure washer and your driveway looks new — we seal afterwards if you want it to stay that way.',
    included: [
      'Block-paved driveways',
      'Mono-block paths and patios',
      'Natural stone and slabs',
      'Render and harling (low-pressure soft wash)',
      'Decking and timber',
      'Optional sealing with polymeric sand or patio sealer',
    ],
    keywords: ['power washing Ayrshire', 'driveway cleaning Kilmarnock', 'patio cleaning Sorn'],
  },
  {
    slug: 'slabbing',
    name: 'Slabbing',
    short: 'Patios, paths, bin stores — laid level, jointed, no sinking corner.',
    icon: '🧱',
    description:
      'A slab job lives or dies on the sub-base. We excavate, lay a proper MOT Type 1 base, screed, lay on a full bed and joint with kiln-dried sand or polymeric resin.',
    included: [
      'Excavation and disposal',
      'MOT Type 1 sub-base',
      'Screeded mortar bed (full bed, not five-point)',
      'Indian sandstone, porcelain, concrete flag',
      'Cutting in around drains and manholes',
      'Polymeric sand jointing',
    ],
    keywords: ['patio layer Ayrshire', 'slabber Kilmarnock', 'garden path Sorn'],
  },
  {
    slug: 'fencing',
    name: 'Fencing',
    short: 'Timber, closeboard, feather-edge, post replacements — set in post-mix, straight.',
    icon: '🪵',
    description:
      'Windy nights in East Ayrshire are the reason half our fencing work is replacements. We set posts in fast-set concrete, use 100×100 pressure-treated and don\'t skimp on arris rails.',
    included: [
      'Closeboard, feather-edge, overlap, hit-and-miss',
      'Concrete or timber posts',
      'Gravel boards',
      'Garden and driveway gates',
      'Post-mix foundations',
      'Old fence tear-out and disposal',
    ],
    keywords: ['fencer Ayrshire', 'fence replacement Kilmarnock', 'garden fence Sorn'],
  },
  {
    slug: 'flat-pack-assembly',
    name: 'Flat-Pack Assembly',
    short: 'IKEA, B&Q, Wayfair — built properly, wall-fixed where it needs to be.',
    icon: '🛠️',
    description:
      'PAX, KALLAX, MALM, B&Q kitchens, Wayfair beds — we\'ve built them all and binned enough instruction booklets to paper a hall. Wall-fix included where the instructions say so (and even when they don\'t but should).',
    included: [
      'IKEA wardrobes, beds, kitchens, sideboards',
      'Wayfair, Argos, B&Q, Dunelm equivalents',
      'Wall-anchoring to timber stud or masonry',
      'Cable management on desks and TV units',
      'Disposal of packaging',
    ],
    keywords: ['IKEA assembly Ayrshire', 'flat-pack Kilmarnock', 'furniture assembly Sorn'],
  },
  {
    slug: 'gutter-cleaning',
    name: 'Gutter Cleaning',
    short: 'Vac-cleaned from the ground — no ladders on your lawn.',
    icon: '🧹',
    description:
      'We use a gutter-vac pole system so we stay on the ground and there\'s no mess on your drive. Photo confirmation of each run so you know it\'s actually clear.',
    included: [
      'All gutters and hoppers vac-cleared',
      'Downpipe flushed with water',
      'Photo of cleaned gutter sent to you',
      'Moss and debris bagged and taken',
      'Gutter alignment check',
    ],
    keywords: ['gutter cleaning Ayrshire', 'gutter vacuum Kilmarnock', 'gutter clean Sorn'],
  },
  {
    slug: 'fence-repair',
    name: 'Fence Repair',
    short: 'Post snapped, panels blown out? Half-job price, not full-replace price.',
    icon: '🔨',
    description:
      'Not every fence needs replacing. We repair rather than replace where it makes sense — snapped posts sistered, panels re-fitted, gravel boards swapped.',
    included: [
      'Snapped post repair (sistered or replaced)',
      'Panel re-fixing',
      'Gravel board replacement',
      'Gate re-hang and drop-bolt fit',
      'Arris rail repair',
    ],
    keywords: ['fence repair Ayrshire', 'fence post replace Kilmarnock', 'storm damage fence Sorn'],
  },
  {
    slug: 'property-maintenance',
    name: 'Property Maintenance',
    short: 'Landlord and homeowner maintenance contracts — one call, everything.',
    icon: '🏡',
    description:
      'We do quarterly and annual maintenance rounds for landlords and second-home owners across East Ayrshire: gutters, boiler service coordination, fence checks, exterior paint touch-ups, garden tidy. One invoice, one point of contact.',
    included: [
      'Seasonal gutter clear',
      'Door and window re-seal',
      'Exterior paint touch-ups',
      'Fence and gate check',
      'Garden tidy and power-wash',
      'Change-over prep for rentals',
      'Photo report after each visit',
    ],
    keywords: ['property maintenance Ayrshire', 'landlord handyman Kilmarnock', 'holiday home maintenance Sorn'],
  },
  {
    slug: 'general-repairs',
    name: 'General Repairs',
    short: 'Sticking door. Loose tile. Blown hinge. If it\'s broken, we fix it.',
    icon: '🧰',
    description:
      'The catch-all list. If it doesn\'t fit a category but it\'s broken, it\'s here. Call or WhatsApp with a photo and we\'ll provide a free no-obligation quote.',
    included: [
      'Door easing, hinge replacement, lock change',
      'Loose or cracked tile replacement',
      'Curtain pole, blind, shelf fitting',
      'TV and mirror wall mounting',
      'Silicone sealant renewal',
      'Loft hatch, drop-down ladder install',
      'Squeaky floor screw-down',
    ],
    keywords: ['handyman repairs Ayrshire', 'odd job man Kilmarnock', 'small repair Sorn'],
  },
  {
    slug: 'deck-building',
    name: 'Deck Building',
    short: 'Timber and composite decks, balustrading, steps — ten-year jobs, not five.',
    icon: '🪜',
    description:
      'Composite or pressure-treated timber, laid over a proper joist cage with air-gap, on concrete or adjustable pedestals. Balustrades, steps and built-in benches all in-house.',
    included: [
      'Joist cage and bearers',
      'Pressure-treated timber or WPC composite boards',
      'Balustrade with spindles',
      'Steps and landings',
      'Integrated bench or planter seats',
      'LED step lighting (on request)',
      'Old deck tear-out and disposal',
    ],
    keywords: ['deck builder Ayrshire', 'composite decking Kilmarnock', 'garden decking Sorn'],
  },
];

export type Area = {
  slug: string;
  name: string; // display name
  postcode?: string;
  intro: string;
  distance: string; // miles from Sorn HQ
  localJobs: string[]; // common local jobs, 3-5 bullets
  landmark?: string; // something to ground local-ness
  geo?: { lat: number; lon: number };
  keywords: string[];
  // extendedCopy: long-form, ~350+ words of genuinely local copy per town.
  // Rendered inside the area template as prose paragraphs (\n\n = new paragraph).
  extendedCopy: string;
};

export const areas: Area[] = [
  {
    slug: 'sorn',
    name: 'Sorn',
    postcode: 'KA5',
    intro:
      'Sorn is home. Our van is parked here most nights and the signs on the High Street are ours. Jobs in Sorn are usually on-site within an hour of the call — a thirty-second drive for us.',
    distance: '0 miles — our base',
    localJobs: [
      'Sandstone cottage gutter replacements on the Ayr Road',
      'Sorn Castle estate cottage repairs',
      'Back-lane fencing after winter storms',
      'River Ayr wall re-pointing',
    ],
    landmark: 'Sorn Parish Church',
    geo: { lat: 55.5183, lon: -4.2947 },
    keywords: ['handyman Sorn', 'joiner Sorn', 'plumber Sorn KA5'],
    extendedCopy: `Sorn is a small East Ayrshire village — one street wide, half a mile long, ringed by the River Ayr and a conservation area that keeps the sandstone buildings looking the way they did when Burns walked through. Most of the houses on the Main Street are 18th and 19th century stone, which means two things for a handyman: the walls are thick and solid, and absolutely nothing is square.\n\nWe know every close, every lane and every corner here. If you call from a Sorn postcode at 9am, we are usually on site by 9.30. We keep a full van stocked with the odd sizes — the long brass screws that 1840 joinery needs, the kind of render mix that matches harling without standing out.\n\nTypical jobs we do in Sorn week in, week out: gutter replacement on the Ayr Road cottages (sagging cast-iron swapped for deep-flow PVC in a matching black); dry-rot-adjacent sash-and-case window work on the High Street; fence and decking repairs behind the Cross; and the occasional late-night plumbing rescue when a burst pipe catches someone off guard.\n\nSorn Castle estate cottages are part of our regular rounds, too — holiday lets and estate staff homes that need steady maintenance. If you manage one, get in touch about our quarterly property-care rounds.\n\nWe are the only dedicated handyman business based in the village itself. Because we live and work here, we care what the postie, the pub landlord and the primary-school parents think — which is the most honest quality-control a trade can have.\n\nCall 07900 255876 at any hour. If it’s an emergency, we’re almost certainly already awake — we live just round the corner.`,
  },
  {
    slug: 'mauchline',
    name: 'Mauchline',
    postcode: 'KA5',
    intro:
      'Four miles west of the base, Mauchline is Robert Burns country — and the mix of Victorian stone terraces, post-war housing and new estates off the Cumnock Road means we\'re there most weeks.',
    distance: '4 miles',
    localJobs: [
      'Sash-and-case window joinery in the Cross',
      'Rear-garden decking on the new-builds off Barskimming Road',
      'Gutter replacements on High Street and Loudoun Street',
      'Fencing repairs after Auld Brig winds',
    ],
    landmark: 'Burns House Museum',
    geo: { lat: 55.5162, lon: -4.3881 },
    keywords: ['handyman Mauchline', 'joiner Mauchline', 'plumber Mauchline KA5'],
    extendedCopy: `Mauchline is Burns country — a working East Ayrshire town of about 4,000 people, best known for the Burns House Museum on the Cross and Poosie Nansie’s Inn which is still pulling pints a quarter of a millennium on. For a handyman business four miles away, it is one of our busiest patches.\n\nThe housing mix is unusual and genuinely interesting to work with. Around the Cross and Loudoun Street you have 18th and 19th century stone terraces with original sash windows and box-cornice gutters — proper joinery country. Head out towards Barskimming Road or Kilmarnock Road and it becomes post-war semi-detached council stock that needs steady maintenance: gutters, fascias, kitchens and bathrooms due a swap. Then on the edges of town you have newer estates — the fences blow down in the same winds, the decks rot at the same joists, the bathrooms leak at the same silicone lines.\n\nWe are in Mauchline almost every working day. If you call from a KA5 postcode, we can often come straight from a previous job — which usually means a same-day look or a same-day fix for small stuff.\n\nJobs we do most often here: gutter replacement and hopper repairs on High Street, joinery in the conservation area (where matching the existing moulding matters), kitchen-unit installation on the newer estates, fence-post replacement after the winter gales, bathroom tap-and-waste swap-outs, and a steady stream of flat-pack assembly for people who’ve just moved in.\n\nOur landlord and letting-agent customers in Mauchline use our property maintenance package — quarterly check-ups and a change-over visit between tenants. One point of contact, one invoice, photo reports after each visit.\n\nCall 07900 255876 or WhatsApp a photo of the job to +44 7472 223323. One of us — Fraser or Aidan — will reply personally inside the hour.`,
  },
  {
    slug: 'cumnock',
    name: 'Cumnock',
    postcode: 'KA18',
    intro:
      'Cumnock is our busiest town outside Sorn. The old Barrhill and Netherthird estates throw up a steady stream of roofing and fencing work, and the Town Square conservation area keeps our joinery skills honest.',
    distance: '7 miles',
    localJobs: [
      'Gutter and flashing repairs around Keir Hardie Hill',
      'Kitchen fitting on new-builds off Ayr Road',
      'Fence replacement across Netherthird',
      'Sash window repair on Glaisnock Street',
    ],
    landmark: 'Cumnock Town Hall',
    geo: { lat: 55.4530, lon: -4.2647 },
    keywords: ['handyman Cumnock', 'joiner Cumnock', 'fencer Cumnock KA18'],
    extendedCopy: `Cumnock is the largest town in our patch after Kilmarnock — a former mining town of around 9,000 people, seven miles south of Sorn, and the administrative heart of East Ayrshire Council. For us it is one of those places where the work never really stops: homes, rental stock, small shops, an endless list of the thousand maintenance jobs that keep a town ticking.\n\nWhen we work in Cumnock it is usually in one of four areas. Around the Square and Glaisnock Street you have the Victorian heart — stone tenements, shopfronts with old timber, the kind of joinery that deserves care. Around Keir Hardie Hill and into Netherthird you have post-war terraced housing; gutters and fencing are the workhorse of our week there. Up towards Barshare and Skerrington you get solid semis that are often 1970s and 1980s builds — kitchens and bathrooms hitting the end of their life all at once. And on the outer ring — the Bellfield Road estates and new-builds off the Ayr Road — it is all decking, fencing, flat-pack, and the occasional tap replacement.\n\nBecause Cumnock is the council seat, we get a steady flow of landlord maintenance work there too. Quarterly visits, change-over prep for rentals, exterior paint touch-ups, fence and gate check-ups before a new tenant signs. One call, one invoice, photo reports each time.\n\nCumnock is also where we get a surprising number of out-of-hours calls. Water fixture failures — a burst flexi hose under a sink, a toilet syphon blowing at midnight — always seem to happen here on a Saturday night. Aidan is on the WhatsApp at that point, and usually in the van within twenty minutes.\n\nCall 07900 255876 any time. If it’s not urgent, tell us — we’ll book you in for the next open slot and get back to sleep. If it is, we’re already getting boots on.`,
  },
  {
    slug: 'auchinleck',
    name: 'Auchinleck',
    postcode: 'KA18',
    intro:
      'Auchinleck (pronounced Ah-fleck locally, as you\'ll know) is five minutes up the road and full of solid post-war council stock that needs steady maintenance — perfect for our landlord contract work.',
    distance: '5 miles',
    localJobs: [
      'Internal door and skirting replacement across rented stock',
      'Bathroom tap and waste replacement',
      'Slabbing paths and bin store foundations',
      'Driveway power-wash and seal',
    ],
    landmark: 'Boswell Museum',
    geo: { lat: 55.4736, lon: -4.2920 },
    keywords: ['handyman Auchinleck', 'plumber Auchinleck', 'landlord handyman KA18'],
    extendedCopy: `Auchinleck — pronounced Ah-fleck if you’re local, Ock-in-leck if you’re not and we don’t mind either way — sits five miles south-west of the base and is one of those East Ayrshire villages with a long history punching above its weight. James Boswell’s Auchinleck House is on its edge, the Boswell Museum is in the village, and the housing stock tells the full story of 20th-century Scotland compressed into a few streets.\n\nA lot of our work in Auchinleck is landlord maintenance. The older council terraces around the High Street and the post-war estates behind them are solid bones but need steady attention — kitchens and bathrooms that were new in 1985 are ready for 2026. We specialise in rapid tap-and-waste swap-outs, flooring repairs, skirting and architrave renewal, and the full bathroom silicone-and-grout refresh that brings a rental back to a “move-in-ready” photograph.\n\nSlabbing and power-wash work is surprisingly busy in Auchinleck too. Drives and back paths that haven’t been touched since the cul-de-sac was built come back to life with a morning’s pressure washing and a re-joint. Fence replacement is steady on the Chapel Road and Lugar Crescent estates — solid 100×100 posts into fast-set, new concrete or timber, gravel boards, no shortcuts.\n\nAidan has a soft spot for Auchinleck because it is where a lot of his flat-pack calls come from — the village seems to take delivery of more KALLAX than it is entitled to. Short-notice IKEA builds, often same-evening, wall-anchored properly into stud or masonry, no wobble, packaging out of the house.\n\nIf you rent, let or live in Auchinleck and you want one number for the unglamorous maintenance side of the house — we are it. Call 07900 255876 or WhatsApp a photo to +44 7472 223323 any time.`,
  },
  {
    slug: 'catrine',
    name: 'Catrine',
    postcode: 'KA5',
    intro:
      'Catrine village, three miles from the base down the River Ayr, is all cottages and stone terraces. Mill-town stone sucks in damp and throws it out slow — gutters, harling and sash windows keep us busy here.',
    distance: '3 miles',
    localJobs: [
      'Harling touch-up and soft-wash on Mill Square',
      'Sash-and-case window draught-proofing',
      'River-facing garden fence and decking',
      'Slipped slate replacement across the old mill cottages',
    ],
    landmark: 'Catrine Voes',
    geo: { lat: 55.5046, lon: -4.3399 },
    keywords: ['handyman Catrine', 'sash window Catrine', 'gutter Catrine KA5'],
    extendedCopy: `Catrine sits three miles west of Sorn along the River Ayr — a former mill village with the kind of stone-built, slate-roofed cottages that make a handyman’s week interesting. The Voes (the old mill reservoirs, now nature reserve) and the Old Kirk give the village a postcard centre; the streets spreading out from it are a patchwork of terrace rows, individual houses and a few modern infills.\n\nWhen we work in Catrine, we work carefully. A lot of these cottages were built with lime mortar, solid walls and rubble cores — they do not forgive a heavy-handed render job or a power-wash set at the wrong pressure. Our approach is always low-pressure soft wash for stone and harling, lime-based filler where possible, and a matched colour rather than a close one.\n\nJobs we do a lot of here: sash-and-case window draught-proofing and sash-cord replacement (a Fraser speciality — he can rebalance a sash in an afternoon); slipped slate replacement on the old mill-row roofs; gutter renewal in cast-iron-look PVC for the conservation streets; river-facing garden fencing and decking that has to put up with occasional flood-adjacent damp; and the slow, steady work of bringing an older cottage interior into the 21st century without ripping out what should stay.\n\nCatrine also sees us for the small, sociable stuff — shelves up, loft hatches, curtain poles, TV brackets, silicone strips that should have been replaced three winters ago. No job too small. Phone or WhatsApp for a free no-obligation quote.\n\nOne last thing. If you have an older Catrine house with rising damp you are not sure about, call us — we won’t quote you for a chemical DPC unless it genuinely needs one. Nine times out of ten in Catrine stone, the “damp” is a blocked gutter and a downpipe throwing water at the wall. We’d rather fix that than gut your skirtings.`,
  },
  {
    slug: 'muirkirk',
    name: 'Muirkirk',
    postcode: 'KA18',
    intro:
      'Muirkirk sits up on the moor — the weather is its own problem. We\'ve replaced more ridge tiles here than anywhere else, and our fencing trucks carry extra post-mix because the wind takes fences down twice a year.',
    distance: '9 miles',
    localJobs: [
      'Ridge and chimney pointing after winter storms',
      'Fence replacement along the Glasgow Road',
      'Gutter replacement with extra brackets for the wind',
      'Exterior timber re-paint every 3–4 years',
    ],
    landmark: 'Kames Institute',
    geo: { lat: 55.5192, lon: -4.0659 },
    keywords: ['handyman Muirkirk', 'roof repair Muirkirk', 'fencer KA18'],
    extendedCopy: `Muirkirk sits up on the moor, nine miles east of the base on the A70, and the weather there is its own thing. When the lowland is still, Muirkirk is breezy. When the lowland is breezy, Muirkirk is gale-force. When the lowland is in a gale, Muirkirk is on the news.\n\nWhich means our van carries extra post-mix, extra brackets, extra ridge vents, a couple of spare slates per style and a lot of weather-rated screws specifically for Muirkirk jobs. Fencing here, we use nothing less than 100×100 posts into fast-set concrete, arris rails through the post rather than nailed to the face, and we sink the post a clear 600mm minimum. It costs a little more up front — and it saves you replacing the whole line twice in five years.\n\nRoofing is the other Muirkirk speciality. We do not strip and re-roof (that’s a roofer-with-scaffold job), but we fix what the wind takes off. Ridge-tile bedding after storms, slipped slates replaced, flashing re-dressed, chimney-head re-pointing where the mortar has gone. Almost every winter we end up on someone’s ridge in Muirkirk at 8am the day after the worst of it.\n\nGutter work here is a slightly different beast too. Because the rain on the moor comes in sideways, we tend to recommend deep-flow gutters over standard half-round, and double brackets at every run to stop flex. Little details, long lives.\n\nMuirkirk’s housing stock is mostly solid 19th and early 20th century stone cottages along Main Street, plus post-war semis at the Glasgow Road end. The bones are excellent — the weather is the maintenance problem. We know that, and we work to it.\n\nCall 07900 255876 the morning after the storm. We are very probably already on the A70 heading your way.`,
  },
  {
    slug: 'galston',
    name: 'Galston',
    postcode: 'KA4',
    intro:
      'Galston, over the hill into the Irvine valley, mixes lace-town terraces with the newer Barr Castle developments. We do fencing, decking and general maintenance here week in, week out.',
    distance: '10 miles',
    localJobs: [
      'Back-garden deck and balustrade',
      'Feather-edge fence replacement on Brewland Street',
      'Bathroom and kitchen tap changes',
      'Driveway and patio power-wash',
    ],
    landmark: 'Barr Castle',
    geo: { lat: 55.5996, lon: -4.3850 },
    keywords: ['handyman Galston', 'fencer Galston', 'decking Galston KA4'],
    extendedCopy: `Galston is over the hill into the Irvine Valley — the lace town, as the older generation still call it, a reference to the 19th-century textile trade. Barr Castle in the middle of the town is a clue to how far back the settlement goes. For us it is a 10-mile run from the base and a steady patch for fencing, decking and general household work.\n\nThe housing mix here is good for a handyman trade. Around Cross Street, Brewland Street and Henrietta Street you have the Victorian lace-town terraces — solid stone, original sashes, the kind of gutter work and re-pointing we enjoy doing properly. Moving out, the post-war estates (Alexander Drive, Bentinck Drive) keep a steady stream of fencing, decking and flat-pack jobs coming in. At the Barr Castle end of town you get the newer-build estates where back-garden deck projects are a summer staple.\n\nDecking is a Galston speciality for us. The gardens here are good-sized and south-facing in the right spots, so a raised composite deck with a proper joist cage and balustrade genuinely transforms how a family uses the garden for six months of the year. We build on adjustable pedestals over concrete or on concrete pad foundations, in WPC composite or pressure-treated timber, with spindles or glass balustrading. Every deck is different — phone for a free no-obligation quote.\n\nFencing around Galston is our other big workload — feather-edge on Brewland Street, close-board on the estates, post repairs after the valley winds. We set posts into Postfix fast-set concrete, use 100×100 pressure-treated, and don’t skimp on arris rails. No short cuts.\n\nAnd the small stuff. Taps, tiles, silicones, squeaky floors, loose banisters, Wayfair wardrobe builds. It all gets the same answer: give us a ring and we’ll be round this week.`,
  },
  {
    slug: 'kilmarnock',
    name: 'Kilmarnock',
    postcode: 'KA1',
    intro:
      'The big town — 12 miles north of Sorn but we\'re in Kilmarnock almost every day. The mix of Victorian tenements around the Cross, post-war estates and new-builds at Riverside means every kind of job is a call away.',
    distance: '12 miles',
    localJobs: [
      'Tenement stair and close joinery',
      'Kitchen and bathroom plumbing swaps',
      'Back-court gutter and downpipe replacements',
      'Fence and decking across Onthank, Shortlees, Crookedholm',
    ],
    landmark: 'Dean Castle',
    geo: { lat: 55.6117, lon: -4.4957 },
    keywords: ['handyman Kilmarnock', 'joiner Kilmarnock', 'plumber Kilmarnock KA1'],
    extendedCopy: `Kilmarnock is the biggest town in our patch — around 46,000 people, twelve miles north of Sorn, and we are there almost every working day. The range of work we do in Killie covers everything the business offers: joinery in the Victorian tenements around the Cross, kitchen and bathroom swap-outs across the post-war estates, decking and fencing on the new-builds at Riverside, landlord maintenance on the rental stock in Onthank and Shortlees, and a steady flow of flat-pack, TV-mount, shelf-up work anywhere the high street reaches.\n\nKilmarnock’s old centre — King Street, Bank Street, John Finnie Street — is a slow-moving conservation-area pocket where joinery matters. Sash-and-case windows, cornice details, original skirtings. Fraser came up on these kinds of houses. If you have a tenement flat that has been chopped about by a previous owner and you want it restored properly, we are the right call — not the cheapest, but the ones who will leave it looking like it always was.\n\nKilmarnock’s 1960s-1980s housing around Onthank, Bellfield, Shortlees, Crookedholm and New Farm Loch is our property-maintenance sweet spot. Landlords and private homeowners alike ring us for quarterly rounds: gutters, silicones, paint touch-ups, tap swap-outs, fence checks. One invoice, photo report each time.\n\nRiverside and the newer estates off the Ayr Road are our decking and fencing workload — new garden builds, composite or timber, with balustrades, integrated planters and LED step lighting if you want it.\n\nKilmarnock also generates most of our out-of-hours plumbing emergencies. Burst pipes, blown flexi hoses, toilets that choose the worst possible moment. Aidan handles those calls himself — reliably grumpy at 2am, always in the van within 30 minutes.\n\nCall 07900 255876 or WhatsApp +44 7472 223323. For Kilmarnock jobs we can usually get a same-day look in, and we don’t charge a call-out for quotes anywhere in East Ayrshire.`,
  },
  {
    slug: 'ayr',
    name: 'Ayr',
    postcode: 'KA7',
    intro:
      'Ayr is 15 miles west. We cover the whole town — seafront Victorian terraces, Alloway cottages and the Prestwick-edge new-builds — and salt-air maintenance is a big part of it. Render, timber and gutters all take a hammering.',
    distance: '15 miles',
    localJobs: [
      'Seafront render repair and soft-wash',
      'Timber window and door maintenance on Alloway cottages',
      'Decking and garden rooms on the new estates',
      'Emergency plumbing across the town centre',
    ],
    landmark: 'Auld Brig o\' Ayr',
    geo: { lat: 55.4586, lon: -4.6292 },
    keywords: ['handyman Ayr', 'plumber Ayr', 'decking Ayr KA7'],
    extendedCopy: `Ayr is fifteen miles west — a town of around 47,000 on the Firth of Clyde coast, with one of the oldest town centres in Scotland and a housing mix from medieval masonry to 2020s new-build. For a handyman business, working in Ayr means adapting constantly: every house has a different story and every street has a different problem.\n\nThe seafront and Esplanade properties are Ayr’s signature and Ayr’s maintenance headache. Salt-laden air is hard on render, timber and metal — render cracks, window frames soften, gutters and railings rust. Our Ayr workload is heavy on soft-wash render cleaning, exterior paint with marine-grade systems, and gutter renewal in robust deep-flow PVC. The mile of Victorian terraces running back from the seafront — Wellington Square, Racecourse Road, Barns Street — all benefit from the same treatment on a rolling five-to-seven year cycle.\n\nAlloway, where Burns was born, is a different set of problems. The listed cottages and the 20th-century houses around Rozelle and the Auld Brig need careful, slow, matched work — proper lime mortar, original-profile joinery, paint colours that blend rather than shout. We have the right paints and the right hand-planes in the van for Alloway days.\n\nNewer Ayr — the Prestwick-edge estates off the Monument Road and the big developments out past Dalmilling — is more straightforward: kitchens and bathrooms hitting their first refit, gardens wanting composite decking or new fencing, and a steady drumbeat of flat-pack assembly.\n\nAyr also gets us out on emergency plumbing more than any other town besides Kilmarnock. Town-centre flats with older copper supply lines, blocked macerator toilets, main-stopcock failures on a Sunday morning. Aidan answers the WhatsApp — one of us is in the van within the hour.\n\nCall 07900 255876 any time for a free no-obligation quote — we cover Ayr and the surrounding villages including Mossblown, Coylton, Tarbolton and Annbank.`,
  },
  {
    slug: 'troon',
    name: 'Troon',
    postcode: 'KA10',
    intro:
      'Troon, famous for the Open Championship course, sits on the coast 18 miles from Sorn. We handle holiday-home and second-home maintenance along the front, plus the high-spec new estates inland off the Prestwick Road.',
    distance: '18 miles',
    localJobs: [
      'Holiday-home change-over maintenance',
      'Exterior paint and render on seafront properties',
      'Composite decking on inland new-builds',
      'Gutter and roof repair after coastal gales',
    ],
    landmark: 'Royal Troon Golf Club',
    geo: { lat: 55.5420, lon: -4.6647 },
    keywords: ['handyman Troon', 'holiday home handyman Troon', 'decking Troon KA10'],
    extendedCopy: `Need a reliable handyman in Troon? We're Fraser and Aidan — a handyman team based in Sorn, about 25 miles east on the A77 and A71. We cover the whole KA10 postcode, from Troon town centre and the seafront across to Barassie, Loans, Muirhead and out to Monkton and Prestwick. We provide a free no-obligation quote for every job. Fraser picks up the phone on 07900 255876 and Aidan handles WhatsApp on 07472 223323.\n\nTroon's housing mix runs the full gauntlet. The town centre has handsome sandstone villas around South Beach, Bentinck Drive and Crosbie Road, plus classic seaside terraces along Titchfield Road, Templehill and Portland Street. Further out in Barassie you've got inter-war bungalows and post-war semis, with the Fullarton and Lochgreen estates full of newer family homes. A lot of Troon property sits close enough to the Firth of Clyde that weather wears gutters, fences, timber fascias and fence panels harder than it does inland — we do a lot of storm and salt-driven maintenance here.\n\nTypical jobs in Troon: cast-iron-to-uPVC gutter swaps on the bigger Victorian villas, sash-window easing and draught-proofing, fence repair and replacement after winter storms, pressure-washing monoblock driveways and patios on the run-in to summer, composite decking and garden joinery looking onto Royal Troon and Barassie Links, flat-pack assembly in the newer Lochgreen and Southwood estates, bathroom bath reseals, kitchen tap swaps, landlord turnarounds for holiday-let cottages used by visitors for the Open Championship and Royal Troon Golf Club.\n\nWe pass the Royal Troon clubhouse, Titchfield Road, the harbour, the promenade at South Beach, Walker Halls, Fullarton Woods and Loans Village regularly. South Ayrshire Council handles planning and building warrants in Troon — and conservation consents in the town-centre streets. WhatsApp Aidan a few photos for a free no-obligation quote. No job too small. If it's a list of wee jobs and a proper one, we'll bundle them in a single visit.`,
  },
  {
    slug: 'prestwick',
    name: 'Prestwick',
    postcode: 'KA9',
    intro:
      'Prestwick sits between Ayr and Troon on the Firth of Clyde — KA9, 17 miles from Sorn via the A70 and A77. We cover the whole town, from the seafront and Prestwick Cross out to Monkton, Kingcase and the airport estates.',
    distance: '17 miles',
    localJobs: [
      'Cast-iron to uPVC gutter swaps on Monkton Road villas',
      'Timber window repairs on the sandstone stock',
      'Flat-pack and fitted-wardrobe assembly near the airport',
      'Landlord turnarounds on holiday lets',
    ],
    landmark: 'Prestwick Cross',
    geo: { lat: 55.4948, lon: -4.6131 },
    keywords: ['handyman Prestwick', 'plumber Prestwick', 'gutter repair Prestwick KA9'],
    extendedCopy: `Looking for a handyman in Prestwick? We're Fraser and Aidan, a handyman team based in Sorn — 25 minutes east via the A70 and A77. We work across the whole KA9 postcode, from Prestwick town centre and the seafront across to Monkton, Kingcase, Adamton and up the coast to Troon. We provide a free no-obligation quote for every job. Fraser's on 07900 255876 and Aidan takes WhatsApp on 07472 223323 — send photos and we'll ballpark it before we even arrive.\n\nPrestwick's property stock is a mix of Edwardian and Victorian sandstone villas, inter-war semis and substantial family homes — particularly around Monkton Road, St Quivox Road, Berelands, Cunningham Drive and the streets off Main Street near Prestwick Cross. Further out towards Prestwick Airport and St Nicholas you'll find newer estates and 1970s-1990s terraces. Like Troon and Ayr, Prestwick catches Firth weather, so fascias, gutters, sash windows, fence panels and timber doors take a pounding every winter — that's a big chunk of what we fix.\n\nTypical jobs in Prestwick: cast-iron-to-uPVC gutter swaps on the sandstone villas, timber door and window repairs on the older stock, fence repair and full replacements (a lot of Prestwick back gardens need panels replaced after every winter), flat-pack and fitted-wardrobe assembly in the newer estates around Prestwick Airport, bathroom bath reseals, kitchen tap swaps and drainage clearance, composite decking looking onto gardens that back on to Prestwick Golf Club, landlord turnarounds on holiday lets near the airport terminal, painting and decorating refreshes, pressure-washing patios and driveways, small roof repairs after winter storms.\n\nWe're in Prestwick regularly — past Prestwick Cross, the Mercat Cross, the Boydfield Gardens bandstand, the seafront pavilion, Prestwick Golf Club clubhouse, Prestwick Airport, St Nicholas Church and the Links House. South Ayrshire Council handles planning and building-warrant approvals for the KA9 area. If your job's near a conservation boundary in the old town we'll flag it before quoting. No job too small — if it's a list of quick wins and one big one, we'll do the lot in a single visit.`,
  },
  {
    slug: 'irvine',
    name: 'Irvine',
    postcode: 'KA12',
    intro:
      'Irvine is the biggest town in North Ayrshire and a 25-minute run from the base. We cover the harbour-side new builds, Bourtreehill and Dreghorn with the same 24/7 call-out, and the industrial-estate landlord work is growing fast.',
    distance: '20 miles',
    localJobs: [
      'Bathroom and kitchen plumbing swaps',
      'Flat-pack wardrobe and kitchen builds',
      'Fence replacement across Bourtreehill',
      'Gutter and downpipe renewal on terraced stock',
    ],
    landmark: 'Harbour Arts Centre',
    geo: { lat: 55.6121, lon: -4.6689 },
    keywords: ['handyman Irvine', 'plumber Irvine', 'flat-pack Irvine KA12'],
    extendedCopy: `Need a handyman in Irvine? We're Fraser and Aidan — a handyman team based in Sorn — about 30 minutes west via the A71. We cover the whole Irvine area across the KA11 and KA12 postcodes, from the town centre and Irvine Cross across to Bourtreehill, Girdle Toll, Broomlands, Dreghorn, Castlepark and out to Dundonald Road and Kilwinning. We provide a free no-obligation quote for every job. Fraser picks up on 07900 255876 and Aidan handles WhatsApp on 07472 223323.\n\nIrvine has one of the youngest property portfolios in Ayrshire thanks to its history as a 1960s and 1970s New Town. Bourtreehill, Girdle Toll, Broomlands and Castlepark are dominated by large estates of semis, terraces and cluster-homes built in the New Town era — often with timber-clad gables, flat-roof porches, single-glazed panels that need upgrading, and concrete-slab fencing. Out in Dreghorn and Springside you've got older stone cottages and miners' rows. The town centre around the High Street, Glasgow Vennel and the Harbourside still has handsome Georgian and Victorian sandstone terraces, much of it inside the Irvine Harbourside Conservation Area or close to listed frontages.\n\nTypical Irvine jobs: flat-pack and fitted-wardrobe assembly across the New-Town estates, fence repair and replacement of concrete-post timber fencing in Bourtreehill and Girdle Toll back gardens, bathroom refits and bath reseals, kitchen tap swaps, leaking pipework, composite decking, pressure-washing monoblock driveways, painting and decorating refreshes, landlord turnarounds in the rental-heavy streets, cast-iron-to-uPVC gutter swaps on the town-centre terraces, timber door and window repairs on the older Harbourside stock, garden joinery and small roof repairs after winter storms blow in off the Firth.\n\nWe pass through Irvine regularly — the Rivergate Shopping Centre, Irvine Harbourside, the Scottish Maritime Museum, the Magnum Centre, Eglinton Country Park at the top end, Irvine Royal Academy, Ayrshire Central Hospital and Ayrshire College's Kilwinning campus nearby. North Ayrshire Council covers Irvine for planning, building warrants and conservation consents — if your job touches the Harbourside Conservation Area we'll flag it up front. Send Aidan a couple of photos on WhatsApp for a free no-obligation quote.`,
  },
  {
    slug: 'kilmaurs',
    name: 'Kilmaurs',
    postcode: 'KA3',
    intro:
      'Kilmaurs is a historic conservation village just north of Kilmarnock — KA3, 20 minutes south of Sorn via the A735. Listed Tolbooth cottages, Victorian sandstone terraces and newer Jocksthorn semis all need a careful pair of hands.',
    distance: '16 miles',
    localJobs: [
      'Sympathetic joinery on listed Tolbooth cottages',
      'Stone pointing and harling touch-ups',
      'Fence repair and full replacements',
      'Flat-pack assembly on Jocksthorn and Standalane builds',
    ],
    landmark: 'Kilmaurs Tolbooth',
    geo: { lat: 55.6394, lon: -4.5308 },
    keywords: ['handyman Kilmaurs', 'joiner Kilmaurs', 'listed building handyman KA3'],
    extendedCopy: `Need a handyman in Kilmaurs? We're Fraser and Aidan — a handyman team based in Sorn, 20 minutes south via the A735. We cover the whole Kilmaurs village area across the KA3 postcode, from the Kilmaurs Cross Tolbooth and Main Street across to Irvine Road, Jocksthorn, Crosshouse, Fenwick and the farms towards Stewarton. We provide a free no-obligation quote for every job. Fraser's on 07900 255876 and Aidan takes WhatsApp on 07472 223323 — send photos and we'll ballpark first.\n\nKilmaurs's property stock is classic Ayrshire village — and that brings its own jobs. The heart of the village around Kilmaurs Cross and the historic Tolbooth has 17th and 18th century stone-built cottages, many inside the Kilmaurs Conservation Area. Glencairn Street, Main Street, East Park Avenue and Irvine Road have Victorian sandstone terraces and substantial stone villas. Further out towards Jocksthorn and Crosshouse you find 1960s-1980s semis and bungalows, with newer developments at Standalane and the housing off the A735. A lot of properties are listed or sit inside the conservation boundary — we handle those sympathetically.\n\nTypical Kilmaurs jobs: sash-window easing and timber repairs on the historic village stock, sympathetic joinery on listed cottages, pointing repairs on stone walls, gutter swaps from cast iron to uPVC on the Victorian terraces, fence repair and replacement (village back gardens and farm-boundary fencing alike), flat-pack and fitted-wardrobe assembly in the newer Standalane and Jocksthorn homes, bathroom refits, bath reseals, kitchen tap swaps, composite decking, pressure-washing patios, painting and decorating refreshes, landlord turnarounds, small roof repairs after winter storms, punch-list days catching up on every small job that's been waiting.\n\nWe're in Kilmaurs regularly — past the Tolbooth and jougs, Glencairn Aisle, the Parish Church, the Jocksthorn pub, Kilmaurs railway station, Jock's Thorn farm and out toward Crosshouse Hospital. East Ayrshire Council covers Kilmaurs for planning, building warrants and conservation consents. If your job is inside the Conservation Area or touches a listed building we'll flag it up front. No job too small — and we turn up when we say we'll turn up.`,
  },
  {
    slug: 'stewarton',
    name: 'Stewarton',
    postcode: 'KA3',
    intro:
      'Stewarton — the Bonnet Toon — sits on the KA3 border with East Renfrewshire, 25 minutes north of Sorn via the A735. High Street tenements, Lainshaw villas and the Meiklewood new-builds all pass through our van most weeks.',
    distance: '18 miles',
    localJobs: [
      'Sash-window work on High Street terraces',
      'Composite decking in Meiklewood gardens',
      'Gutter and downpipe renewal on Avenue Street',
      'Fence replacement after winter gales',
    ],
    landmark: 'Lainshaw Parish Church',
    geo: { lat: 55.6803, lon: -4.5106 },
    keywords: ['handyman Stewarton', 'decking Stewarton', 'gutter Stewarton KA3'],
    extendedCopy: `Looking for a handyman in Stewarton? We're Fraser and Aidan — a handyman team based in Sorn, 25 minutes south via the A735. We cover the whole Stewarton area across the KA3 postcode, from the town centre and High Street across to Lainshaw, Cocklebie, Robertland, Dunlop Road, Kilmarnock Road and out to Dunlop, Fenwick and Lugton. We provide a free no-obligation quote for every job. Fraser picks up on 07900 255876 and Aidan handles WhatsApp on 07472 223323.\n\nStewarton — the 'Bonnet Toon' — has some of the most interesting village housing in East Ayrshire. The High Street, Avenue Street and Main Street are lined with Victorian sandstone terraces and townhouses, many inside the Stewarton Conservation Area or close to listed frontages. Lainshaw, Robertland and the streets off Dunlop Road bring large Edwardian villas and substantial Victorian family homes. Further out towards Cocklebie and Greenside you've got 1960s-1980s semis, bungalows and ex-council estates. The newer Meiklewood, Cunninghamhead and Hapland developments add 1990s-2020s family homes and flat-pack-heavy new-builds. The area also has a lot of old weaver and knitting-village cottages — the Bonnet Toon heritage runs deep.\n\nTypical Stewarton jobs: sash-window easing and timber repairs on the historic cottages, sympathetic joinery on listed buildings, cast-iron-to-uPVC gutter swaps on the High Street terraces, stone pointing touch-ups, fence repair and full replacements, flat-pack and fitted-furniture assembly in the newer Meiklewood and Hapland homes, bathroom refits, bath reseals, kitchen tap swaps, leaking pipework, composite decking, pressure-washing monoblock driveways, painting and decorating refreshes, landlord turnarounds, small roof repairs after winter storms and full punch-list days bundling the year's small jobs into one visit.\n\nWe're through Stewarton most weeks — past Stewarton railway station, the Lainshaw Parish Church, Lainshaw Primary School, the Blackbull pub, Dunlop Road, Stewarton Academy and the Glencairn Cricket Club. East Ayrshire Council covers Stewarton for planning, building warrants and conservation consents — if your job sits inside the Conservation Area or affects a listed building, we'll flag it before quoting. No job too small. Send photos on WhatsApp for a free no-obligation quote.`,
  },
  {
    slug: 'maybole',
    name: 'Maybole',
    postcode: 'KA19',
    intro:
      'Maybole is the historic capital of Carrick — KA19, 45 minutes south-west of Sorn via the A70 and A77. Tolbooth-era stone tenements, Victorian villas and the Culzean-Road holiday-let catchment keep us busy down the coast.',
    distance: '25 miles',
    localJobs: [
      'Sash-window and timber repairs on Castle Street cottages',
      'Stepped-fence replacement in Mochrum Hill gardens',
      'Gutter swaps on the Cassillis Road terraces',
      'Landlord turnarounds for Culzean holiday lets',
    ],
    landmark: 'Maybole Castle',
    geo: { lat: 55.3498, lon: -4.6817 },
    keywords: ['handyman Maybole', 'property maintenance Maybole', 'gutter Maybole KA19'],
    extendedCopy: `Looking for a handyman in Maybole? We're Fraser and Aidan — a handyman team based in Sorn, 45 minutes south-west via the A70 and A77. We cover the whole Maybole area across the KA19 postcode, from Maybole town centre and the High Street across to Kildoon, Cargill Road, Culzean Road, Mochrum Hill and out to Kirkoswald, Crosshill, Dunure and the Culzean estate. We provide a free no-obligation quote for every job. Fraser's on 07900 255876 and Aidan takes WhatsApp on 07472 223323.\n\nMaybole is one of the oldest burghs in South Ayrshire and it shows in the housing. The historic town centre around High Street, Cassillis Road, Whitehall Street and Castle Street has Tolbooth-era stone tenements, 18th and 19th century townhouses, and the landmark Maybole Castle itself — much of it inside the Maybole Conservation Area or close to listed frontages. Out towards Kildoon, Cargill Road and the Culzean Road area you've got substantial Victorian villas and inter-war semis. Ladywell, Gardenrose and Barns Terrace bring 1950s-1970s ex-council estates. Newer developments at Greenside, Mochrum Hill and the Cargill Road extensions add 1990s-2020s family homes and flat-pack-heavy new-builds. The whole town sits on a slope — some gardens are terraced, and retaining walls, stone steps and stepped fencing come up regularly.\n\nTypical Maybole jobs: sash-window easing and timber repairs on the historic town-centre stock, sympathetic joinery on listed cottages, stone pointing and mortar touch-ups, cast-iron-to-uPVC gutter swaps on Victorian terraces, fence repair and stepped-fence replacement on terraced back gardens, flat-pack and fitted-wardrobe assembly in the Greenside and Mochrum Hill new-builds, bathroom refits and bath reseals, kitchen tap swaps, leaking pipework, composite decking, pressure-washing driveways and patios, painting and decorating refreshes, landlord turnarounds for holiday lets near Culzean Castle, small roof repairs after winter storms and the classic punch-list day.\n\nWe're in Maybole regularly — past Maybole Town Hall, Maybole Castle, the Cassillis Road bypass, the High Street, the Miller Institute, the Carrick Academy, and out to Culzean Castle and Country Park and down the coast to Turnberry. South Ayrshire Council covers Maybole for planning, building warrants and conservation consents — if your job sits inside the Conservation Area or affects a listed building we'll tell you up front. No job too small — phone or WhatsApp for a free no-obligation quote.`,
  },
];

// FAQ (used on home + FAQ section on contact)
export const faqs = [
  {
    q: 'Are you really open 24/7?',
    a: 'Yes. One of us — Fraser or Aidan — answers every call, day or night. If it\'s non-urgent at 3am we\'ll book you in for first-light; if your kitchen\'s flooding we\'re in the van. No call-centre.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Phone Fraser on 07900 255876 or WhatsApp a photo to Aidan on 07472 223323. Every job is priced individually and we provide a free no-obligation quote.',
  },
  {
    q: 'What areas do you cover?',
    a: 'Sorn, Mauchline, Cumnock, Catrine, Auchinleck, Muirkirk, Galston, Kilmarnock, Ayr, Troon and Irvine as standard. Further afield by arrangement.',
  },
  {
    q: 'Do you do gas or electrical work?',
    a: 'No gas and no notifiable electrical work (Part P). We\'ll happily recommend a local trade and coordinate on site.',
  },
  {
    q: 'Can I get a quote without a site visit?',
    a: 'Often yes — send a WhatsApp photo to +44 7472 223323 with a short description and a measurement if you can. We\'ll come back same-day with a ballpark or a firm price.',
  },
  {
    q: 'How soon can you start?',
    a: 'Small jobs (under 2 hours) — usually within 24–48 hours. Bigger jobs — 1 to 2 weeks. Emergencies — now.',
  },
  {
    q: 'Do you clean up after the job?',
    a: 'Always. Dust sheets down before we start, everything bagged and taken away before we leave. We pay the tip fees, not you.',
  },
  {
    q: 'What payment do you accept?',
    a: 'Bank transfer or card (Stripe link sent by text). No cash surcharge; no card surcharge.',
  },
  {
    q: 'Do you give written quotes?',
    a: 'We provide a free no-obligation quote for every job. Phone 07900 255876 or WhatsApp 07472 223323.',
  },
];

export const processSteps = [
  {
    n: 1,
    title: 'Call or WhatsApp',
    body: 'One of us answers — Fraser or Aidan. 24/7, no call-centre. Send a photo if you can.',
  },
  {
    n: 2,
    title: 'Same-day quote',
    body: 'Ballpark price on the call, firm written quote by WhatsApp or email within a few hours.',
  },
  {
    n: 3,
    title: 'Booked and done',
    body: 'Small jobs usually within 48 hours. Clean, tidy, one-invoice at the end. Guaranteed.',
  },
];
