import { business, services, areas } from '../data/business';

const SITE = business.siteUrl.replace(/\/$/, '');

const dayMap = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday',
} as const;

export function openingHoursSpec() {
  return (Object.entries(business.hours) as Array<[keyof typeof dayMap, string[]]>).map(([d, [opens, closes]]) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: `https://schema.org/${dayMap[d]}`,
    opens,
    closes,
  }));
}

// 10 miles in metres — per site spec, every area page schema uses a 10-mile GeoCircle.
export const TEN_MILE_RADIUS_M = 16093;

export function areaServed() {
  return areas.map((a) => ({
    '@type': 'GeoCircle',
    name: a.name,
    geoMidpoint: a.geo
      ? { '@type': 'GeoCoordinates', latitude: a.geo.lat, longitude: a.geo.lon }
      : undefined,
    geoRadius: TEN_MILE_RADIUS_M,
  }));
}

export function coreBusiness(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
    '@id': `${SITE}/#business`,
    name: business.name,
    alternateName: 'Sorn Handyman',
    description: business.description,
    url,
    telephone: business.phoneE164,
    email: business.email,
    image: `${SITE}/og-image.svg`,
    logo: `${SITE}/icon-512.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.lat,
      longitude: business.geo.lon,
    },
    areaServed: areaServed(),
    openingHoursSpecification: openingHoursSpec(),
    sameAs: [business.socials.facebook],
    // Honest: no aggregateRating until real reviews land (per CLAUDE.md §1).
    knowsAbout: services.map((s) => s.name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Handyman services — East Ayrshire',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name },
        areaServed: { '@type': 'AdministrativeArea', name: 'East Ayrshire' },
      })),
    },
  };
}

export function serviceSchema(slug: string, url: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE}/services/${s.slug}/#service`,
    name: s.name,
    description: s.description,
    serviceType: s.name,
    url,
    provider: { '@id': `${SITE}/#business` },
    areaServed: areaServed(),
    category: 'Handyman',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${SITE}/quote/`,
      description: `Every job quoted individually — call 07900 255876 or WhatsApp +44 7472 223323 for a FREE no-obligation quote.`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${s.name} — what we do`,
      itemListElement: s.included.map((inc) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: inc } })),
    },
  };
}

export function areaSchema(slug: string, url: string) {
  const a = areas.find((x) => x.slug === slug);
  if (!a) return null;
  return [
    {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
      '@id': `${SITE}/areas/${a.slug}/#service-area`,
      name: `${business.name} — ${a.name}`,
      description: `24/7 handyman services in ${a.name}${a.postcode ? ' ' + a.postcode : ''}.`,
      url,
      telephone: business.phoneE164,
      image: `${SITE}/og-image.svg`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: a.name,
        addressRegion: 'East Ayrshire',
        postalCode: a.postcode,
        addressCountry: 'GB',
      },
      geo: a.geo
        ? { '@type': 'GeoCoordinates', latitude: a.geo.lat, longitude: a.geo.lon }
        : undefined,
      areaServed: a.geo
        ? { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: a.geo.lat, longitude: a.geo.lon }, geoRadius: TEN_MILE_RADIUS_M }
        : { '@type': 'AdministrativeArea', name: a.name },
      openingHoursSpecification: openingHoursSpec(),
      parentOrganization: { '@id': `${SITE}/#business` },
      sameAs: [
        business.socials.facebook,
        business.socials.instagram,
      ].filter(Boolean),
    },
  ];
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
