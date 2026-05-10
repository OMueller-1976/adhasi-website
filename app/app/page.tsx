import {
  Brain, Star, BookOpen, BarChart2, Shield, EyeOff,
} from 'lucide-react'
import EarlyAccessForm from '@/components/EarlyAccessForm'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, breadcrumbJsonLd, faqJsonLd, softwareApplicationJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = defaultMetadata({
  title: 'ADHaSi App – ADHS Lern-App für Kinder | Preise & Features',
  description:
    'Die ADHS Lern-App für Kinder ab 6 Jahren. Fokus-Sprint, KI-Übungen, Eltern-Dashboard. Ab 14,90 €/Monat.',
  path: '/app',
})

const features = [
  {
    Icon: Brain,
    title: 'KI-gestützte Anpassung',
    description:
      'Jede Aufgabe wird individuell an das Lerntempo und den Fortschritt des Kindes angepasst — keine Über- und keine Unterforderung.',
  },
  {
    Icon: Star,
    title: 'Spielerisch motivieren',
    description:
      'Sterne, Coins, Streaks und Belohnungen halten Kinder am Ball. ADHaSi macht aus täglichem Üben ein motivierendes Abenteuer.',
  },
  {
    Icon: BookOpen,
    title: 'Deutsch & Englisch',
    description:
      'Rechtschreibung, Grammatik, Lesen und Wortschatz in beiden Sprachen — mit Aufgaben, die zum Schulstoff passen.',
  },
  {
    Icon: BarChart2,
    title: 'Eltern-Dashboard',
    description:
      'Lernfortschritt transparent einsehen, Stärken und Schwächen erkennen, wöchentliche Berichte — für Eltern und Lehrkräfte.',
  },
  {
    Icon: Shield,
    title: 'DSGVO-konform',
    description:
      'Kinderdaten werden sicher in europäischen Rechenzentren verarbeitet. Volle Datenhoheit, kein Profiling.',
  },
  {
    Icon: EyeOff,
    title: 'Werbefrei & ohne Tracking',
    description:
      'Kein Targeting, keine In-App-Käufe für Kinder, keine Drittanbieter-Analytics. Maximale Ruhe beim Lernen.',
  },
]

const steps = [
  {
    number: '1',
    title: 'Konto einrichten',
    description:
      'Eltern registrieren sich und erstellen ein Kinderprofil mit Klassenstufe und Fächern (Deutsch, Englisch). In unter 3 Minuten.',
  },
  {
    number: '2',
    title: 'Kind lernt täglich',
    description:
      'Das Kind öffnet die App und lernt mit KI-gestützten, adaptiven Übungen — spielerisch, ohne Schulstress.',
  },
  {
    number: '3',
    title: 'Fortschritt verfolgen',
    description:
      'Eltern sehen im Dashboard, was ihr Kind gelernt hat, wo noch Übung fehlt und wie sich das Niveau entwickelt.',
  },
]

const plans = [
  {
    name: 'Monatlich',
    price: '14,90 €',
    period: 'pro Monat',
    desc: '7 Tage kostenlos testen, danach monatlich kündbar.',
    highlight: false,
    cta: 'Kostenlos testen',
  },
  {
    name: 'Jährlich',
    price: '119 €',
    period: 'pro Jahr',
    desc: 'Entspricht 9,90 €/Monat — 33 % Ersparnis gegenüber monatlicher Zahlung.',
    highlight: true,
    badge: 'Empfohlen',
    cta: 'Jetzt sparen',
  },
  {
    name: 'Familie',
    price: '19,90 €',
    period: 'pro Monat',
    desc: 'Bis zu 3 Kinder — kommt bald.',
    highlight: false,
    disabled: true,
    cta: 'Bald verfügbar',
  },
]

const faqs = [
  {
    q: 'Für welche Altersgruppe ist ADHaSi geeignet?',
    a: 'ADHaSi ist für Kinder zwischen 8 und 16 Jahren konzipiert. Die Aufgaben passen sich automatisch an Klassenstufe und Lernstand an.',
  },
  {
    q: 'Brauchen Kinder eine eigene App?',
    a: 'Nein. Eltern verwalten das Konto, das Kind nutzt die App direkt — keine eigene E-Mail-Adresse erforderlich.',
  },
  {
    q: 'Funktioniert ADHaSi ohne Internet?',
    a: 'Die Kernfunktionen benötigen eine Internetverbindung, da die KI-Anpassung in Echtzeit stattfindet. Ein Offline-Modus für bestimmte Übungen ist in Planung.',
  },
  {
    q: 'Ersetzt ADHaSi eine ADHS-Therapie?',
    a: 'Nein. ADHaSi ist eine spielerische Ergänzung, keine klinische Therapie. Wir empfehlen, ADHaSi parallel zu einer fachlichen Förderung zu nutzen.',
  },
  {
    q: 'Wie sicher sind die Daten meines Kindes?',
    a: 'Alle Daten werden auf Servern in Europa gespeichert. Kinderdaten werden gemäß DSGVO Art. 8 geschützt — kein Tracking, kein Profiling, kein Datenverkauf.',
  },
  {
    q: 'Gibt es Werbung in der App?',
    a: 'Nein. ADHaSi ist vollständig werbefrei. Es gibt keine Drittanbieter-Werbung und kein Behavioral Targeting.',
  },
  {
    q: 'Kann ich jederzeit kündigen?',
    a: 'Ja. Das Abonnement kann jederzeit über Google Play verwaltet und gekündigt werden. Keine Mindestlaufzeit beim Monatsplan.',
  },
  {
    q: 'Gibt es eine iOS-Version?',
    a: 'Aktuell fokussieren wir uns auf Android (Google Play Store). Eine iOS-Version ist in Planung — trag dich für den Early Access ein, um benachrichtigt zu werden.',
  },
]

export default function AppPage() {
  return (
    <>
      <StructuredData data={softwareApplicationJsonLd()} />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'ADHaSi App', path: '/app' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Für welche Altersgruppe ist ADHaSi geeignet?', answer: 'ADHaSi ist für Kinder zwischen 8 und 16 Jahren konzipiert. Die Aufgaben passen sich automatisch an Klassenstufe und Lernstand an.' },
          { question: 'Brauchen Kinder eine eigene App?', answer: 'Nein. Eltern verwalten das Konto, das Kind nutzt die App direkt — keine eigene E-Mail-Adresse erforderlich.' },
          { question: 'Funktioniert ADHaSi ohne Internet?', answer: 'Die Kernfunktionen benötigen eine Internetverbindung, da die KI-Anpassung in Echtzeit stattfindet. Ein Offline-Modus für bestimmte Übungen ist in Planung.' },
          { question: 'Ersetzt ADHaSi eine ADHS-Therapie?', answer: 'Nein. ADHaSi ist eine spielerische Ergänzung, keine klinische Therapie. Wir empfehlen, ADHaSi parallel zu einer fachlichen Förderung zu nutzen.' },
          { question: 'Wie sicher sind die Daten meines Kindes?', answer: 'Alle Daten werden auf Servern in Europa gespeichert. Kinderdaten werden gemäß DSGVO Art. 8 geschützt — kein Tracking, kein Profiling, kein Datenverkauf.' },
          { question: 'Gibt es Werbung in der App?', answer: 'Nein. ADHaSi ist vollständig werbefrei. Es gibt keine Drittanbieter-Werbung und kein Behavioral Targeting.' },
          { question: 'Kann ich jederzeit kündigen?', answer: 'Ja. Das Abonnement kann jederzeit über Google Play verwaltet und gekündigt werden. Keine Mindestlaufzeit beim Monatsplan.' },
          { question: 'Gibt es eine iOS-Version?', answer: 'Aktuell fokussieren wir uns auf Android (Google Play Store). Eine iOS-Version ist in Planung — trag dich für den Early Access ein, um benachrichtigt zu werden.' },
        ])}
      />

      {/* HERO */}
      <section className="bg-white py-16 sm:py-24 border-b border-adhasi-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-surface border border-adhasi-border text-neutral-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-adhasi-green inline-block" />
              Bald im Play Store verfügbar
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              ADHaSi App – spielerisch lernen mit ADHS
            </h1>
            <p className="font-body text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Die Lernapp, die Kinder mit Lese- und Rechtschreibschwäche spielerisch unterstützt —
              mit KI-gestützter Lernbegleitung, angepasst an ihr Tempo.
            </p>
            <div id="early-access-app">
              <EarlyAccessForm />
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-[360px] lg:h-[360px]" style={{ borderRadius: '40px', overflow: 'hidden', background: 'white' }}>
              <video
                src="/laden-ani.webm"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full"
                style={{ background: 'transparent', border: 'none', objectFit: 'cover', transform: 'scale(1.05)' }}
              >
                <source src="/laden-ani.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 id="features-heading" className="font-heading text-3xl sm:text-4xl font-bold text-center text-neutral-900 mb-4">
            Diese Lernbereiche trainiert ADHaSi
          </h2>
          <p className="text-center font-body text-neutral-500 mb-12 max-w-xl mx-auto">
            Basiert auf etablierten Methoden der ADHS-Förderung.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ Icon, title, description }) => (
              <article key={title} className="bg-white rounded-2xl p-6 border border-adhasi-border shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-adhasi-green" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-2">{title}</h3>
                <p className="font-body text-sm text-neutral-500 leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-20 bg-white border-y border-adhasi-border" aria-labelledby="how-app-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 id="how-app-heading" className="font-heading text-3xl sm:text-4xl font-bold text-center text-neutral-900 mb-4">
            So funktioniert ADHaSi
          </h2>
          <p className="text-center font-body text-neutral-500 mb-12 max-w-xl mx-auto">
            In drei Schritten startklar — ohne technisches Vorwissen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.number} className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-adhasi-green flex items-center justify-center text-white font-heading text-2xl font-bold">
                  {s.number}
                </div>
<h3 className="font-heading text-xl font-semibold text-neutral-900">{s.title}</h3>
                <p className="font-body text-sm text-neutral-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="pricing-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id="pricing-heading" className="font-heading text-3xl sm:text-4xl font-bold text-center text-neutral-900 mb-4">
            Einfache, transparente Preise
          </h2>
          <p className="text-center font-body text-neutral-500 mb-12 max-w-xl mx-auto">
            Keine versteckten Kosten. Kündbar wann immer du möchtest.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl p-6 border flex flex-col gap-3 ${
                  p.highlight
                    ? 'border-adhasi-orange bg-white shadow-md'
                    : 'border-adhasi-border bg-white shadow-sm'
                } ${p.disabled ? 'opacity-60' : ''}`}
              >
                {p.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-adhasi-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold text-neutral-900">{p.name}</h3>
                <p className="font-heading text-3xl font-bold text-neutral-900">
                  {p.price}
                  <span className="text-base font-body font-normal text-neutral-500 ml-1">{p.period}</span>
                </p>
                <p className="font-body text-sm text-neutral-500 flex-1">{p.desc}</p>
                <button
                  disabled={p.disabled}
                  className={`w-full py-2.5 rounded-xl font-body font-bold text-sm transition-colors ${
                    p.highlight
                      ? 'bg-adhasi-orange text-white hover:bg-adhasi-orange-600'
                      : p.disabled
                      ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                      : 'bg-white border border-adhasi-border text-neutral-700 hover:border-neutral-400'
                  }`}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="text-center font-body text-sm text-neutral-500">
            Lehrer und Therapeuten: Bitte kontaktieren Sie uns für vergünstigte Konditionen unter{' '}
            <a href="mailto:lehrer@adhasi.de" className="text-adhasi-blue underline">
              lehrer@adhasi.de
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white border-t border-adhasi-border" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="faq-heading" className="font-heading text-3xl sm:text-4xl font-bold text-center text-neutral-900 mb-12">
            Häufige Fragen
          </h2>
          <div className="flex flex-col divide-y divide-adhasi-border">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none font-heading text-lg font-semibold text-neutral-900 gap-4">
                  {q}
                  <span className="flex-shrink-0 w-5 h-5 rounded-full border border-adhasi-border flex items-center justify-center text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                    +
                  </span>
                </summary>
                <p className="font-body text-neutral-600 text-sm leading-relaxed mt-3">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-20 bg-adhasi-orange" aria-labelledby="app-cta-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 id="app-cta-heading" className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Werde Teil der ADHaSi-Familie
          </h2>
          <p className="font-body text-white/90 text-lg mb-8">
            Trag dich jetzt ein — du bekommst eine E-Mail, sobald ADHaSi im Play Store verfügbar ist.
          </p>
          <div className="flex justify-center">
            <EarlyAccessForm />
          </div>
        </div>
      </section>
    </>
  )
}
