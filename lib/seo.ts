import type { Metadata } from 'next'

const BASE_URL = 'https://www.adhasi.de'
const SITE_NAME = 'ADHaSi'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`

// ── Default Metadata Builder ──────────────────────────────────────────────

export function defaultMetadata(options: {
  title: string
  description: string
  path: string
  ogImage?: string
  noIndex?: boolean
}): Metadata {
  const { title, description, path, ogImage = DEFAULT_OG_IMAGE, noIndex = false } = options
  const url = `${BASE_URL}${path}`

  const titleMeta: Metadata['title'] = title.includes('ADHaSi') ? { absolute: title } : title

  return {
    title: titleMeta,
    description,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'de_DE',
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

// ── JSON-LD Builders ──────────────────────────────────────────────────────

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ADHaSi',
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/suche?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ADHaSi',
    url: BASE_URL,
    logo: `${BASE_URL}/Logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@adhasi.de',
      contactType: 'customer support',
      availableLanguage: 'German',
    },
    sameAs: [],
  }
}

export function softwareApplicationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ADHaSi',
    description:
      'Lern-App für Kinder mit ADHS. Kurze Fokus-Sprints, KI-gestützte Übungen, Eltern-Dashboard.',
    applicationCategory: 'EducationApplication',
    operatingSystem: 'Android, iOS',
    offers: {
      '@type': 'Offer',
      price: '14.90',
      priceCurrency: 'EUR',
      priceValidUntil: '2027-12-31',
    },
    url: `${BASE_URL}/app`,
  }
}

export function articleJsonLd(options: {
  title: string
  description: string
  path: string
  datePublished?: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    url: `${BASE_URL}${options.path}`,
    datePublished: options.datePublished ?? '2025-01-01',
    dateModified: options.dateModified ?? new Date().toISOString().split('T')[0],
    author: { '@type': 'Organization', name: 'ADHaSi' },
    publisher: {
      '@type': 'Organization',
      name: 'ADHaSi',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/Logo.png` },
    },
  }
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  }
}
