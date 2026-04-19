// Per-area local long-tail content for the /areas/[slug] pages.
// Each block adds ~60-100 words of unique, visible copy below the hero,
// focused on housing stock, typical jobs, travel time from the Sorn base
// and one recognisable local landmark or street. British English throughout.

export type AreaLocalContent = {
  housingNote: string;
  jobsNote: string;
  travelNote: string;
  landmark: string;
};

export const areaLocalContent: Record<string, AreaLocalContent> = {
  sorn: {
    housingNote:
      'Sorn housing is mostly sandstone cottages along the Main Street and the Ayr Road, with a cluster of 1970s semis behind the primary school and a handful of rural cottages on the Glenlogan and Cleughearn farm roads.',
    jobsNote:
      'This week alone we have swapped a leaking kitchen flexi on Gate Road, hung a fire door in a Main Street close and re-fitted a feather-edge panel behind the Parish Church. Typical village work: sash repair, harling touch-ups, gutter clearance, flat-pack builds.',
    travelNote: 'Under a minute from our Sorn workshop — we usually walk if the van is boxed in.',
    landmark: 'From the Cross to Sorn Castle estate cottages and along the River Ayr footbridge.',
  },
  mauchline: {
    housingNote:
      'Mauchline blends 18th and 19th century stone terraces round the Cross with post-war semis on the Cumnock Road and newer infill estates off Barskimming Road. Each bracket calls for a different toolkit — a sash weight for one, a Roofix screw for the next.',
    jobsNote:
      'Regular Mauchline jobs: sash-cord re-roping near the Burns House Museum, box-cornice gutter replacement on Loudoun Street, composite decking on the Barskimming new-builds, and landlord change-over maintenance for flats above the High Street shops.',
    travelNote: 'About 10 minutes from our Sorn workshop via the B743.',
    landmark: 'From Poosie Nansie’s Inn to the Auld Brig and out past the National Burns Memorial.',
  },
  cumnock: {
    housingNote:
      'Cumnock runs the full span: Victorian stone tenements on Glaisnock Street and the Square, 1950s ex-council terraces through Netherthird and Barrhill, solid 1970s–80s semis at Skerrington, and new-builds off the Bellfield and Ayr roads.',
    jobsNote:
      'Most weeks in Cumnock we are fitting a kitchen tap on Auchinleck Road, sistering a blown fence post in Netherthird, clearing a moss-packed back-court downpipe, or doing a landlord turnaround between tenants on Bank Glen.',
    travelNote: 'Roughly 15 minutes from our Sorn workshop down the A76.',
    landmark: 'From Cumnock Town Hall and Keir Hardie’s statue out to Dumfries House gates.',
  },
  auchinleck: {
    housingNote:
      'Auchinleck is heavy on post-war council terraces around Chapel Road and Lugar Crescent, with older stone rows along the High Street and a pocket of newer semis by the Boswell Museum. A lot of the rental stock is hitting its first proper refit.',
    jobsNote:
      'Typical Auchinleck calls: bath reseal and silicone refresh on a let, skirting and architrave renewal after a tenant change, a bin-store slab laid in an afternoon, and the almost-weekly PAX wardrobe build that arrives by courier.',
    travelNote: 'About 12 minutes from our Sorn workshop via Catrine and the B7036.',
    landmark: 'From the Boswell Museum down to Auchinleck railway station and out to Lugar.',
  },
  catrine: {
    housingNote:
      'Catrine is mill-village stone — dense rows of lime-mortar cottages around the Voes and Mill Square, a thin strip of inter-war semis on the Sorn Road, and a few modern infills looking over the river.',
    jobsNote:
      'We do a lot of careful Catrine work: sash-and-case draught-proofing on Newton Street, low-pressure soft-wash on harling, slate replacement on the old mill-row roofs, and river-facing fence and deck repairs where the ground stays damp into May.',
    travelNote: 'Five minutes from our Sorn workshop along the A76 and B705.',
    landmark: 'From the Catrine Voes nature reserve past the Old Kirk to Mill Square.',
  },
  muirkirk: {
    housingNote:
      'Muirkirk is a high moor village — mostly sturdy 19th and early-20th century stone cottages down the Main Street, a run of post-war semis at the Glasgow Road end, and a smattering of isolated farm houses exposed to every direction the wind picks.',
    jobsNote:
      'The weather writes the job list here: ridge-tile bedding after a February gale, double-bracketed deep-flow gutters that can take sideways rain, 100×100 fence posts sunk 600mm into Postfix, and exterior timber repainted on a three-year cycle instead of five.',
    travelNote: 'About 20 minutes from our Sorn workshop east on the A70.',
    landmark: 'From the Kames Institute past the Covenanter memorial up to Cairn Table.',
  },
  galston: {
    housingNote:
      'Galston, over the hill in the Irvine Valley, mixes lace-town Victorian terraces around Cross Street and Brewland Street with 1960s ex-council semis on Alexander Drive and newer family homes on the Barr Castle side.',
    jobsNote:
      'Galston work leans outdoors: composite decks with glass balustrades on south-facing gardens, feather-edge fence replacements after valley winds, monoblock driveway power-washing in spring, and the steady flow of flat-pack kitchens on the newer estates.',
    travelNote: 'Roughly 20 minutes from our Sorn workshop via Hurlford and the A719.',
    landmark: 'From Barr Castle through the Lace Conservation Area to Loudoun Gowf Club.',
  },
  kilmarnock: {
    housingNote:
      'Killie has every housing stock going: tenement closes around John Finnie Street and the Cross, 1960s–80s semis through Onthank, Shortlees and Crookedholm, student lets near the college, and riverside new-builds off the Ayr Road.',
    jobsNote:
      'On a typical Killie day we are hanging a close door on Bank Street, mounting a 55" TV in a Crookedholm semi, clearing a back-court downpipe in Shortlees, and building three flat-pack wardrobes in a college-let flat before the tenants move in.',
    travelNote: 'About 20 minutes from our Sorn workshop via the A719.',
    landmark: 'From the Dick Institute along John Finnie Street out to Dean Castle Country Park.',
  },
  ayr: {
    housingNote:
      'Ayr housing stock jumps from medieval burgh stone around the Auld Brig to salt-air Victorian terraces on Wellington Square, listed Alloway cottages, and the Prestwick-edge new-builds at Dalmilling and Heathfield.',
    jobsNote:
      'Seafront work dominates: soft-washed render on Racecourse Road, deep-flow gutters replacing rusted cast iron on Barns Street, marine-grade exterior paint on Esplanade villas, plus a steady run of late-night plumbing callouts to town-centre flats.',
    travelNote: 'Around 30 minutes from our Sorn workshop via Mauchline and the A77.',
    landmark: 'From the Auld Brig o’ Ayr down the Esplanade to Burns Cottage in Alloway.',
  },
  troon: {
    housingNote:
      'Troon runs from Victorian sandstone villas on Bentinck Drive and Crosbie Road through Titchfield Road seaside terraces to inter-war bungalows in Barassie and new family homes at Lochgreen and Southwood.',
    jobsNote:
      'Coastal weather drives the workload: fence panels replaced after every Atlantic gale, cast-iron-to-uPVC gutter swaps on the seafront, holiday-let turnarounds during Open Championship weeks, and composite decks looking onto Royal Troon and Barassie Links.',
    travelNote: 'About 35 minutes from our Sorn workshop via the A71 and A77.',
    landmark: 'From Royal Troon’s clubhouse along the South Beach promenade to Troon harbour-side.',
  },
  prestwick: {
    housingNote:
      'Prestwick is mostly Edwardian and Victorian sandstone villas around Monkton Road and St Quivox Road, inter-war semis through Kingcase, and 1970s–90s terraces and new-builds out towards the airport and St Nicholas.',
    jobsNote:
      'Prestwick calls cluster around Firth-weather damage: timber door repairs on the older sandstone stock, fence panels swapped after every blow, fitted-wardrobe builds in the airport-side estates, and landlord turnarounds on the short-let flats near the terminal.',
    travelNote: 'Around 30 minutes from our Sorn workshop via the A70 and A77.',
    landmark: 'From Prestwick Cross and the Mercat Cross down to the Boydfield Gardens bandstand.',
  },
  irvine: {
    housingNote:
      'Irvine reflects its New Town years: big estates of timber-clad semis and cluster-homes at Bourtreehill, Girdle Toll and Broomlands, Harbourside Georgian terraces, and older miners’ rows out in Dreghorn and Springside.',
    jobsNote:
      'Most Irvine jobs are concrete-post timber fencing replacements in New-Town back gardens, fitted-wardrobe builds in Castlepark, bath reseals in the rental-heavy streets, and cast-iron-to-uPVC gutter swaps in the Harbourside conservation pocket.',
    travelNote: 'About 35 minutes from our Sorn workshop via the A71.',
    landmark: 'From the Harbour Arts Centre along the Rivergate out to Eglinton Country Park.',
  },
  kilmaurs: {
    housingNote:
      'Kilmaurs village is tight historic stock — 17th and 18th century cottages around the Tolbooth and Cross, Victorian sandstone terraces on Main Street and Glencairn Street, and 1960s–80s bungalows towards Jocksthorn and Standalane.',
    jobsNote:
      'Conservation-area work is the daily fare: sympathetic sash repair on listed cottages, lime-mortar pointing touch-ups, gutter swaps on the Victorian terraces, and flat-pack assembly runs for families moving into the newer Standalane builds.',
    travelNote: 'Roughly 25 minutes from our Sorn workshop via Kilmarnock and the A735.',
    landmark: 'From the Kilmaurs Tolbooth and jougs past Glencairn Aisle to the railway station.',
  },
  stewarton: {
    housingNote:
      'Stewarton — the Bonnet Toon — lines the High Street and Avenue Street with Victorian sandstone terraces, adds Edwardian villas around Lainshaw and Robertland, and finishes with Meiklewood and Hapland new-builds on the Dunlop Road edge.',
    jobsNote:
      'Weekly work in Stewarton: sash-window easing on High Street flats, composite decks in Meiklewood back gardens, downpipe and hopper renewal on Avenue Street, and feather-edge fence runs replaced after a winter of east-coast gales.',
    travelNote: 'About 35 minutes from our Sorn workshop via Kilmarnock and the A735.',
    landmark: 'From Lainshaw Parish Church past the Mercat Cross to Stewarton railway station.',
  },
  maybole: {
    housingNote:
      'Maybole is Carrick’s historic capital — Tolbooth-era tenements and townhouses around the High Street and Castle Street, Victorian villas on Cargill and Culzean Road, post-war ex-council estates through Ladywell and Gardenrose, and hillside new-builds at Mochrum Hill.',
    jobsNote:
      'Slope and salt-air shape the jobs: stepped-fence replacement in terraced back gardens, sash and timber repair on Castle Street cottages, gutter swaps on the Cassillis Road terraces, and landlord turnarounds for Culzean-Road holiday lets between guests.',
    travelNote: 'Around 45 minutes from our Sorn workshop via Mauchline, Ayr and the A77.',
    landmark: 'From Maybole Castle and the Tolbooth out to Culzean Castle and Country Park.',
  },
};
