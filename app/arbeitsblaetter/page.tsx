import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = defaultMetadata({
  title: 'ADHS Arbeitsblätter kostenlos ausdrucken – 30 Übungsblätter | ADHaSi',
  description:
    '30 kostenlose ADHS-freundliche Arbeitsblätter als PDF zum Ausdrucken. Deutsch, Mathe, Englisch, Konzentration & Selbstregulation – für Kinder ab 6 Jahren. Kein Login.',
  path: '/arbeitsblaetter',
})

// ── Data ────────────────────────────────────────────────────────────────────

const sheets = [
  { icon: '📖', title: 'Lesedetektiv',          desc: 'Texte verstehen, Antworten finden – kurze Leseübung mit Mehrfachauswahl.' },
  { icon: '✂️', title: 'Silben klatschen',      desc: 'Wörter in Silben teilen und den richtigen Artikel finden.' },
  { icon: '➕', title: 'Rechenstationen',        desc: 'Plus und Minus in zwei kurzen Blöcken mit Pause dazwischen.' },
  { icon: '✖️', title: 'Einmaleins-Würfelweg',  desc: 'Multiplikation üben ohne Aufgabenflut – Feld für Feld.' },
  { icon: '🔍', title: 'Die 5 Sinne',            desc: 'Beobachten wie ein Forscher: sehen, hören, fühlen, riechen, schmecken.' },
  { icon: '🇬🇧', title: 'Colours & Animals',    desc: 'Englische Wörter zuordnen und erste Sätze schreiben.' },
  { icon: '🎯', title: 'Fokus-Finder',           desc: 'Buchstaben gezielt suchen – Aufmerksamkeit spielerisch trainieren.' },
  { icon: '📋', title: 'Plan-Profi',             desc: 'Schultasche packen und Reihenfolgen planen.' },
  { icon: '🚦', title: 'Ampel für Gefühle',      desc: 'Stopp – Nachdenken – Handeln: Selbstregulation in 3 Schritten.' },
  { icon: '🎨', title: 'Muster & Mini-Geschichte', desc: 'Feinmotorik üben und kreativ eine Geschichte schreiben.' },
]

const adhdFeatures = [
  { icon: '⏱', text: 'Kurze Blöcke – nie mehr als 12 Minuten am Stück' },
  { icon: '👋', text: 'Bewegungspausen auf jedem Blatt eingebaut' },
  { icon: '☆',  text: 'Stern-Aufgaben für schwierige Tage – weniger ist mehr' },
  { icon: '✓',  text: 'Mini-Check am Ende: Stolz sichtbar machen' },
]

const faqs = [
  {
    question: 'Für welches Alter sind die Arbeitsblätter geeignet?',
    answer: 'Ab 6 Jahren. Die Blätter sind nach Schwierigkeit geordnet – einfache Blätter eignen sich auch für jüngere Kinder mit Unterstützung.',
  },
  {
    question: 'Brauche ich besondere Vorkenntnisse als Elternteil?',
    answer: 'Nein. Jedes Blatt erklärt sich selbst. Auf der zweiten Seite des PDFs findest du kurze Hinweise zur Nutzung.',
  },
  {
    question: 'Darf ich die Blätter in der Schule oder Therapie nutzen?',
    answer: 'Ja – die Materialien sind kostenlos für den privaten und schulischen Einsatz freigegeben.',
  },
  {
    question: 'Ersetzen die Blätter eine Therapie?',
    answer: 'Nein. Die Übungsblätter sind pädagogische Begleitmaterialien und ersetzen keine Diagnostik, Therapie oder individuelle Förderplanung.',
  },
  {
    question: 'Gibt es auch digitale Übungen auf ADHaSi?',
    answer: 'Ja – unter Achtsamkeit findest du Atemübungen, ein Achtsamkeitstagebuch und Mandalas zum Ausdrucken.',
  },
]

// ── Page ────────────────────────────────────────────────────────────────────

export default function ArbeitsblaetterPage() {
  return (
    <>
      <StructuredData data={faqJsonLd(faqs)} />

      {/* ── 1. HERO ───────────────────────────────────────────────── */}
      <section className="bg-surface py-12 sm:py-18 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-adhasi-green">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-700">Arbeitsblätter</span>
          </nav>

          <p className="font-heading text-lg text-neutral-500 mb-2">
            Wenn es doch mal analog sein soll …
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-5 leading-tight">
            ADHaSi-Übungsblätter –<br className="hidden sm:block" /> kostenlos ausdrucken
          </h1>
          <p className="font-body text-lg text-neutral-600 leading-relaxed max-w-2xl">
            30 druckfertige Arbeitsblätter für Kinder mit ADHS ab 6 Jahren.
            Deutsch, Mathe, Englisch, Konzentration, Selbstregulation und mehr –
            pädagogisch aufbereitet, ADHS-gerecht strukturiert.
          </p>
        </div>
      </section>

      {/* ── 2. DOWNLOAD BOX ──────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-white border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-2 border-adhasi-orange bg-adhasi-orange-50 px-8 py-10 flex flex-col items-center gap-4 text-center">
            <a
              href="/adhs-arbeitsblaetter-30-seiten.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-semibold bg-adhasi-orange text-white text-base px-8 py-4 rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <span>⬇</span>
              Alle 30 Arbeitsblätter herunterladen (PDF, kostenlos)
            </a>
            <p className="font-body text-sm text-neutral-500">
              30 Seiten · A4 · schwarz-weiß druckbar · kein Login · keine Anmeldung
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. WAS IST DRIN ──────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-surface border-b border-adhasi-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mb-8">
            Was ist drin?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sheets.map((s) => (
              <div
                key={s.title}
                className="flex items-start gap-4 rounded-2xl border border-adhasi-border bg-white p-5"
              >
                <span className="text-2xl mt-0.5 shrink-0">{s.icon}</span>
                <div>
                  <p className="font-heading font-semibold text-neutral-900 mb-1">{s.title}</p>
                  <p className="font-body text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WARUM ANALOG ──────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
            Warum ausdruckbare Übungsblätter bei ADHS sinnvoll sind
          </h2>
          <div className="font-body text-base text-neutral-600 leading-8 space-y-4">
            <p>
              Bildschirme bieten Kindern mit ADHS eine Fülle an Reizen – und genau das macht sie
              für längeres konzentriertes Lernen oft ungeeignet. Jede Benachrichtigung, jede
              Animation und jeder Klick konkurriert mit der eigentlichen Aufgabe um knappe
              Aufmerksamkeitsressourcen. Papier ist anders: Es bleibt still.
            </p>
            <p>
              Das haptische Erleben – Stift in der Hand, Papier auf dem Tisch – aktiviert andere
              Sinne als der Touchscreen. Für viele Kinder mit ADHS schafft dieser Wechsel des
              Mediums allein schon einen spürbaren Unterschied in der Fokusqualität. Gleichzeitig
              fördert das Schreiben per Hand die Feinmotorik und die Handschrift.
            </p>
            <p>
              Die Blätter sind konsequent in kurze Blöcke von maximal 12 Minuten aufgeteilt –
              eingebettete Bewegungspausen machen das pädagogische Konzept der Wechselbelastung
              sichtbar und erfahrbar. Kinder wissen: Nach diesem Abschnitt ist Pause. Das senkt
              den Widerstand vor dem Start.
            </p>
            <p>
              Am Ende jedes Blatts steht ein Mini-Check: „Was hat gut geklappt?" Dieser sichtbare
              Abschluss ist für Kinder mit ADHS ein unterschätzter Motivationsanker. Er gibt dem
              Lernerlebnis eine klare Grenze – und eine Möglichkeit, sich zu freuen.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. ADHS-FREUNDLICH ───────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-surface border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mb-7">
            ADHS-freundlich von Anfang bis Ende
          </h2>
          <ul className="flex flex-col gap-4">
            {adhdFeatures.map((f) => (
              <li key={f.text} className="flex items-start gap-4">
                <span className="text-2xl shrink-0 mt-0.5 w-8 text-center">{f.icon}</span>
                <p className="font-body text-base text-neutral-700 leading-relaxed">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 6. BEISPIEL-AUFGABE ──────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mb-8">
            So sieht ein Arbeitsblatt aus
          </h2>

          {/* Simulated worksheet */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 overflow-hidden shadow-sm">
            {/* Header bar */}
            <div className="bg-[#1a5c37] px-6 py-3">
              <p className="font-heading font-bold text-white text-sm tracking-wide">
                Arbeitsblatt 1 · Lesedetektiv · Deutsch / Lesen
              </p>
            </div>

            <div className="p-6 flex flex-col gap-5">
              {/* Zeit / Ziel / Material */}
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { label: 'Zeit', value: '10 min' },
                  { label: 'Ziel', value: 'Leseverstehen' },
                  { label: 'Material', value: 'Stift' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-neutral-200 bg-white py-2 px-3">
                    <p className="font-body text-xs text-neutral-400 mb-0.5">{item.label}</p>
                    <p className="font-body font-semibold text-sm text-neutral-800">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Example text */}
              <div className="rounded-xl border border-neutral-200 bg-white px-5 py-4">
                <p className="font-body text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-2">
                  Lies den Text
                </p>
                <p className="font-body text-sm text-neutral-700 leading-7">
                  Mila sucht ihren roten Ball. Er ist nicht unter dem Bett und auch nicht im Regal.
                  Dann sieht sie ihn – hinter der Couch!
                </p>
              </div>

              {/* Sample question */}
              <div className="rounded-xl border border-neutral-200 bg-white px-5 py-4">
                <p className="font-body text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-3">
                  Beantworte die Frage
                </p>
                <p className="font-body text-sm text-neutral-700 mb-3">Wer sucht den Ball?</p>
                <div className="flex flex-wrap gap-5 font-body text-sm text-neutral-700">
                  <label className="flex items-center gap-2 cursor-default">
                    <span className="w-4 h-4 border border-neutral-400 rounded inline-block shrink-0" />
                    Mila
                  </label>
                  <label className="flex items-center gap-2 cursor-default">
                    <span className="w-4 h-4 border border-neutral-400 rounded inline-block shrink-0" />
                    Leo
                  </label>
                  <label className="flex items-center gap-2 cursor-default">
                    <span className="w-4 h-4 border border-neutral-400 rounded inline-block shrink-0" />
                    der Tisch
                  </label>
                </div>
              </div>

              {/* Movement break */}
              <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-3">
                <p className="font-body text-sm text-amber-800">
                  <span className="font-semibold">Bewegungspause:</span>{' '}
                  10 Sekunden strecken, 3 tiefe Atemzüge.
                </p>
              </div>

              {/* Mini-Check */}
              <div className="rounded-xl border border-purple-200 bg-purple-50 px-5 py-4">
                <p className="font-body text-xs font-semibold text-purple-500 uppercase tracking-wide mb-3">
                  Mini-Check
                </p>
                <div className="flex flex-col gap-2 font-body text-sm text-purple-900">
                  <label className="flex items-center gap-2 cursor-default">
                    <span className="w-4 h-4 border border-purple-300 rounded inline-block shrink-0" />
                    Ich habe langsam gearbeitet.
                  </label>
                  <label className="flex items-center gap-2 cursor-default">
                    <span className="w-4 h-4 border border-purple-300 rounded inline-block shrink-0" />
                    Ich bin stolz auf: ___________________________
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ───────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-surface border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mb-8">
            Häufige Fragen zu den Arbeitsblättern
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-adhasi-border bg-white p-6"
              >
                <p className="font-heading font-semibold text-neutral-900 mb-2">{faq.question}</p>
                <p className="font-body text-sm text-neutral-600 leading-7">
                  {faq.question === 'Gibt es auch digitale Übungen auf ADHaSi?' ? (
                    <>
                      Ja – unter{' '}
                      <Link href="/achtsamkeit" className="text-adhasi-green hover:underline font-semibold">
                        Achtsamkeit
                      </Link>{' '}
                      findest du Atemübungen, ein Achtsamkeitstagebuch und Mandalas zum Ausdrucken.
                    </>
                  ) : (
                    faq.answer
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ───────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">
            Noch mehr kostenlose Materialien
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/achtsamkeit/mandalas-adhs-kinder"
              className="font-body font-semibold bg-adhasi-orange text-white text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Mandalas ausdrucken
            </Link>
            <Link
              href="/achtsamkeit/atemubungen-kinder"
              className="font-body font-semibold border border-neutral-300 text-neutral-700 text-sm px-6 py-3 rounded-full hover:border-neutral-500 transition-colors"
            >
              Atemübungen für Kinder
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
