import type { Metadata } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import CookieConsent from '@/components/CookieConsent'

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.adhasi.de'),
  title: {
    default: 'ADHaSi — Lernapp für Kinder mit ADHS',
    template: '%s | ADHaSi',
  },
  description:
    'ADHaSi ist die spielerische Lernapp für Kinder mit ADHS. ' +
    'KI-gestützt, DSGVO-konform, werbefrei. Jetzt im App Store verfügbar.',
  authors: [{ name: 'ADHaSi / OneTitel', url: 'https://www.adhasi.de' }],
  creator: 'OneTitel – Oliver M. Müller',
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.adhasi.de',
    siteName: 'ADHaSi',
    title: 'ADHaSi — Lernapp für Kinder mit ADHS',
    description: 'Spielerisch Deutsch und Englisch üben — KI-Lernbegleitung für Kinder mit ADHS.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ADHaSi – Lernapp für Kinder mit ADHS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADHaSi — Lernapp für Kinder mit ADHS',
    description: 'Spielerisch Deutsch und Englisch üben — KI-Lernbegleitung für Kinder mit ADHS.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: '/' },
  verification: {
    google: 'GdMKV3fRiZ4SILoWDp70zEZuFPK_OUs_B4jldpv8xYU',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fredoka.variable} ${nunito.variable}`}>
      <head>
        {/* Consent Mode v2 defaults — must fire BEFORE GTM loads */}
        <Script id="gtm-consent-init" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage:     'denied',
            ad_storage:            'denied',
            ad_user_data:          'denied',
            ad_personalization:    'denied',
            functionality_storage: 'granted',
            security_storage:      'granted',
            wait_for_update:       500,
          });
          gtag('set', 'ads_data_redaction', true);
          gtag('set', 'url_passthrough', false);
        `}</Script>
        {/* GTM head snippet — loads after Consent Mode defaults */}
        <Script id="gtm-head" strategy="beforeInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NDRXCBRR');
        `}</Script>
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDRXCBRR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <CookieBanner />
        <CookieConsent />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
