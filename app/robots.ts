import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/eltern/',
          '/paedagogen/dashboard',
          '/konto-loeschen',
          '/email-abmelden',
          '/passwort-reset',
        ],
      },
    ],
    sitemap: 'https://www.adhasi.de/sitemap.xml',
  }
}
