import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'
import ArticleInternalLinks from '@/components/ArticleInternalLinks'

export const metadata: Metadata = defaultMetadata({
  title: 'Digitale Hilfsmittel für Kinder mit ADHS — Timer, Fokus-Apps & mehr',
  description:
    'Beste digitale Hilfsmittel für ADHS-Kinder: Timer-Apps, Fokus-Tools, Lern-Apps und Elternkontrolle — mit konkreten Empfehlungen.',
  path: '/ratgeber/digitale-hilfsmittel-adhs',
})

const tools = [
  {
    name: 'Forest – Fokus-Timer',
    platform: 'iOS & Android',
    category: 'Fokus-Timer',
    description:
      'Forest lässt Kinder einen virtuellen Baum wachsen, solange sie ihr Handy nicht berühren. Für ADHS-Kinder ist das visuelle Feedback (der wachsende Baum) ein starker Motivator, fokussiert zu bleiben. Die Lernzeit lässt sich in 10–25 Minuten-Blöcke aufteilen — ideal für die Pomodoro-Technik.',
    price: 'Kostenpflichtig (~2 €)',
  },
  {
    name: 'Be Focused Pro',
    platform: 'iOS / macOS',
    category: 'Fokus-Timer',
    description:
      'Professionelle Pomodoro-App mit konfigurierbaren Lernblöcken und Pausenintervallen. Eltern können mit dem Kind gemeinsam die Blockdauer einstellen (z. B. 12 Min. Lernen, 5 Min. Pause). Übersichtliche Statistiken zeigen, wie viele Blöcke pro Tag absolviert wurden.',
    price: 'Kostenlos (Basis) / ~3 € (Pro)',
  },
  {
    name: 'Todoist',
    platform: 'iOS, Android & Web',
    category: 'Aufgabenstrukturierung',
    description:
      'Todoist hilft dabei, Hausaufgaben und Aufgaben in kleine Teilschritte zu zerlegen. Für ADHS-Kinder ab ca. 10 Jahren gut geeignet: jede Aufgabe wird als einzelne To-do-Karte angelegt, Fälligkeiten sichtbar gemacht, erledigte Aufgaben mit einem befriedigenden Haken abgehakt. Eltern können eine gemeinsame Aufgabenliste führen.',
    price: 'Kostenlos (Basis)',
  },
  {
    name: 'Microsoft To-Do',
    platform: 'iOS, Android & Windows',
    category: 'Aufgabenstrukturierung',
    description:
      'Einfache, übersichtliche Aufgaben-App ohne Ablenkungen — gut geeignet für jüngere Kinder. Der "Mein Tag"-Bereich hilft, den Fokus auf die Aufgaben des aktuellen Tages zu legen. Synchronisiert sich mit dem Windows-Schulcomputer, was die Alltagsintegration erleichtert.',
    price: 'Kostenlos',
  },
  {
    name: 'Google Family Link',
    platform: 'Android & iOS',
    category: 'Elternkontrolle',
    description:
      'Google Family Link erlaubt Eltern, Bildschirmzeiten zu begrenzen, Apps zu genehmigen und den Standort des Kindes zu sehen. Für ADHS-Kinder besonders nützlich: App-Timer, die nach der Lernzeit automatisch blockieren, und die Möglichkeit, Lernzeiten fest einzuplanen.',
    price: 'Kostenlos',
  },
  {
    name: 'Apple Screen Time',
    platform: 'iOS / iPadOS',
    category: 'Elternkontrolle',
    description:
      'Integrierte Elternkontrolle auf Apple-Geräten. Ermöglicht App-Limits, Ruhezeiten (z. B. keine Spiele während der Hausaufgabenzeit) und Content-Filter. Für ADHS-Kinder ideal: Das Gerät kann so konfiguriert werden, dass in der Lernzeit nur zugelassene Lern-Apps verfügbar sind.',
    price: 'Kostenlos (integriert)',
  },
  {
    name: 'ADHaSi',
    platform: 'Android (bald iOS)',
    category: 'Lern-App',
    description:
      'ADHaSi ist speziell für Kinder mit ADHS entwickelt: kurze Fokus-Sprint-Einheiten (5–10 Minuten), sofortiges Feedback nach jeder Aufgabe, Gamification ohne Reizüberflutung, und ein Eltern-Dashboard mit Fortschrittsberichten. Die KI passt das Niveau laufend an — kein Kind bleibt zurück.',
    price: '7 Tage kostenlos testen',
  },
]

export default function DigitaleHilfsmittelPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'Digitale Hilfsmittel für Kinder mit ADHS',
          description: 'Übersicht: Timer-Apps, Fokus-Tools, Aufgabenstrukturierung, Lern-Apps und Elternkontrolle für ADHS-Kinder.',
          path: '/ratgeber/digitale-hilfsmittel-adhs',
          datePublished: '2026-04-01',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Ratgeber', path: '/ratgeber' },
          { name: 'Digitale Hilfsmittel für ADHS', path: '/ratgeber/digitale-hilfsmittel-adhs' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Welche Timer-App ist am besten für ADHS-Kinder?', answer: 'Forest ist besonders beliebt, weil der wachsende Baum ein starkes visuelles Feedback gibt. Be Focused eignet sich gut für die Pomodoro-Technik mit konfigurierbaren Blockzeiten. Für jüngere Kinder reicht oft ein einfacher analoger Küchentimer.' },
          { question: 'Was macht ADHS-gerechte Software aus?', answer: 'ADHS-gerechte Software ist klar strukturiert, hat keine ablenkenden Animationen, gibt sofortiges Feedback, hält Einheiten kurz (5–15 Minuten), und hat ein sichtbares Fortschritts- oder Belohnungssystem. Weniger ist mehr: einfache Interfaces ohne Reizüberflutung.' },
          { question: 'Darf mein Kind mit ADHS digitale Hilfsmittel in der Schule nutzen?', answer: 'Mit einem anerkannten Nachteilsausgleich ja — Timer-Apps und strukturierende Tools sind in vielen Bundesländern zulässig. Eine formale ADHS-Diagnose ist Voraussetzung. Der Schulpsychologische Dienst berät kostenlos.' },
        ])}
      />

      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/ratgeber" className="hover:text-neutral-700">Ratgeber</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">Digitale Hilfsmittel für ADHS</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🔧</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">7 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Digitale Hilfsmittel für Kinder mit ADHS — Timer, Fokus-Apps & mehr
          </h1>
          <p className="font-body text-lg text-neutral-600">
            Die richtigen digitalen Tools können den Lernalltag von ADHS-Kindern erheblich erleichtern —
            wenn sie gezielt eingesetzt werden. Eine Übersicht der wirksamsten Apps und wie sie
            ADHS-gerecht eingesetzt werden.
          </p>
        </div>
      </section>

      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2>Was macht eine App ADHS-gerecht?</h2>
          <p>
            Nicht jede App ist für Kinder mit ADHS geeignet — manche tun das Gegenteil von dem, was
            helfen soll. ADHS-gerechte Software erfüllt bestimmte Kriterien:
          </p>
          <ul>
            <li><strong>Keine Reizüberflutung:</strong> Ruhige Interfaces ohne Daueranimationen, Popups oder unnötige Geräusche</li>
            <li><strong>Klare Struktur:</strong> Eindeutige Navigation, wenige Entscheidungen pro Schritt</li>
            <li><strong>Sofortiges Feedback:</strong> Richtig/Falsch wird unmittelbar angezeigt, nicht erst am Ende</li>
            <li><strong>Kurze Einheiten:</strong> Sessions von 5–15 Minuten mit klarem Ende</li>
            <li><strong>Sichtbarer Fortschritt:</strong> Balken, Punkte oder andere visuelle Fortschrittsanzeigen</li>
            <li><strong>Belohnungssystem:</strong> Kleine, häufige Belohnungen halten die Motivation aufrecht</li>
          </ul>
          <p>
            Die unten aufgeführten Tools erfüllen diese Kriterien — jedes auf seine Art.
          </p>

          <h2>Die wichtigsten Tools im Überblick</h2>
          <p className="text-sm text-neutral-500">
            Hinweis: Die genannten Apps sind externe Produkte. ADHaSi hat keine wirtschaftliche
            Verbindung zu diesen Anbietern — die Auswahl ist redaktionell.
          </p>

        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-4 flex flex-col gap-4">
          {tools.map((tool) => (
            <div key={tool.name} className="bg-surface rounded-2xl border border-adhasi-border p-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-heading font-semibold text-neutral-900 text-lg">{tool.name}</span>
                <span className="text-xs bg-white border border-adhasi-border text-neutral-500 px-2 py-0.5 rounded-full">{tool.platform}</span>
                <span className="text-xs bg-adhasi-green-50 text-adhasi-green-700 border border-adhasi-green-100 px-2 py-0.5 rounded-full font-semibold">{tool.category}</span>
              </div>
              <p className="font-body text-sm text-neutral-600 leading-relaxed mb-2">{tool.description}</p>
              <p className="text-xs text-neutral-400">{tool.price}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose mt-8">

          <h2>Timer-Apps: Warum sichtbare Zeit bei ADHS so wichtig ist</h2>
          <p>
            Kinder mit ADHS leiden häufig unter <strong>Zeitblindheit</strong> — das innere Zeitgefühl
            ist unzuverlässig. Eine Stunde kann sich wie zehn Minuten anfühlen oder umgekehrt.
            Timer-Apps externalisieren die Zeit: Das Kind sieht, wie viel noch verbleibt — das
            reduziert Prokrastination und macht das Ende einer Lernphase berechenbar.
          </p>
          <p>
            Tipp: Für jüngere Kinder (unter 8 Jahren) ist ein sichtbarer analoger Timer (z. B.
            der Time Timer) oft wirkungsvoller als eine App, weil das visuelle Feedback noch
            direkter ist.
          </p>

          <h2>Aufgabenstrukturierung: Chaos in Ordnung bringen</h2>
          <p>
            Das Arbeitsgedächtnis bei ADHS ist begrenzt. Wenn ein Kind gleichzeitig an die
            Mathe-Hausaufgabe, das Englisch-Vokabelheft und die morgige Präsentation denken muss,
            bricht das System zusammen. Aufgaben-Apps externalisieren das Gedächtnis:
          </p>
          <ul>
            <li>Jede Aufgabe als eigene Karte — keine mentale Last mehr</li>
            <li>Fälligkeiten sichtbar — keine vergessenen Hausaufgaben</li>
            <li>Erledigte Aufgaben abhaken — gibt Dopamin-Feedback</li>
            <li>Eltern können mitlesen und bei Bedarf erinnern</li>
          </ul>

          <h2>Elternkontrolle: Struktur statt Streit</h2>
          <p>
            Family Link und Screen Time sind nicht dazu da, das Kind zu überwachen — sondern
            um klare Rahmenbedingungen zu schaffen, die das Kind nicht selbst setzen kann.
            Ein ADHS-Kind, das von sich aus aufhört zu spielen und mit Hausaufgaben anfängt,
            kämpft gegen seine eigene Neurologie. Elternkontroll-Tools nehmen dieser Situation
            den Konflikt: Das Gerät schaltet ab, nicht Mama oder Papa.
          </p>
          <p>
            Empfehlung: Die Regeln gemeinsam mit dem Kind festlegen, nicht über seinen Kopf hinweg.
            Kinder, die verstehen, warum eine Grenze gesetzt wird, akzeptieren sie deutlich besser.
          </p>

          <h2>Häufige Fragen zu digitalen Hilfsmitteln bei ADHS</h2>

          <h3>Welche Timer-App ist am besten für ADHS-Kinder?</h3>
          <p>Forest ist besonders beliebt wegen des visuellen Baum-Feedbacks. Be Focused eignet sich gut für die Pomodoro-Technik. Für Kinder unter 8 Jahren ist oft ein analoger Timer (Time Timer) wirkungsvoller.</p>

          <h3>Was macht ADHS-gerechte Software aus?</h3>
          <p>Klare Struktur ohne Ablenkungen, sofortiges Feedback, kurze Einheiten von 5–15 Minuten, sichtbarer Fortschritt und ein einfaches Belohnungssystem. Weniger visuelle Reize ist besser als mehr.</p>

          <h3>Darf mein Kind digitale Hilfsmittel in der Schule nutzen?</h3>
          <p>Mit Nachteilsausgleich ja — strukturierende Tools und Timer sind in vielen Bundesländern zugelassen. Eine formale ADHS-Diagnose ist Voraussetzung. Der Schulpsychologische Dienst berät kostenlos.</p>

        </div>
      </article>

      <div className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-body text-sm text-neutral-500 mb-4">Das könnte Sie auch interessieren:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/ratgeber/medienkompetenz-bei-adhs" className="text-adhasi-green underline text-sm font-semibold">Medienkompetenz bei ADHS</Link>
            <Link href="/ratgeber/lernmethodik" className="text-adhasi-green underline text-sm font-semibold">Lernmethodik bei ADHS</Link>
            <Link href="/ratgeber/hilfsorganisationen" className="text-adhasi-green underline text-sm font-semibold">Hilfsorganisationen</Link>
          </div>
          <Link href="/buchempfehlungen" className="block mt-4 text-sm text-neutral-500 hover:text-neutral-700">
            → Mehr dazu in unseren Buchempfehlungen
          </Link>
          <Link href="/app" className="block mt-1 text-sm text-neutral-500 hover:text-neutral-700">
            → ADHaSi App: speziell für ADHS-Kinder entwickelt
          </Link>
          <div className="flex justify-between mt-6">
            <Link href="/ratgeber/selbstwert-staerken" className="text-adhasi-green font-semibold hover:underline text-sm">← Selbstwert stärken</Link>
            <Link href="/ratgeber" className="text-adhasi-green font-semibold hover:underline text-sm">Alle Artikel →</Link>
          </div>
        </div>
      </div>
      <ArticleInternalLinks />
      <ArticleCTA />
    </>
  )
}
