import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'

export const metadata: Metadata = defaultMetadata({
  title: 'ADHS App für Kinder – ADHaSi | Kostenlos testen',
  description:
    'ADHaSi ist die ADHS App für Kinder ab 6 Jahren: Fokus-Sprints, KI-Übungen und Eltern-Dashboard. 7 Tage kostenlos testen — keine Kreditkarte.',
  path: '/adhs-app',
})

export default function AdhsAppPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'ADHS App für Kinder: ADHaSi – fokussiert lernen',
          description: 'ADHaSi ist die ADHS-App für Kinder ab 6 Jahren mit Fokus-Sprints, KI-Übungen und Eltern-Dashboard.',
          path: '/adhs-app',
          datePublished: '2026-04-01',
          dateModified: '2026-04-30',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'ADHS App', path: '/adhs-app' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Für welches Alter ist die ADHaSi App geeignet?', answer: 'ADHaSi ist für Kinder ab 6 Jahren konzipiert — von der Vorschule bis zum Ende der Grundschulzeit. Die Aufgaben passen sich automatisch an das individuelle Niveau an, sodass die App mit dem Kind mitwächst.' },
          { question: 'Kostet die ADHaSi App etwas?', answer: 'Die ersten 7 Tage sind kostenlos und ohne Kreditkarte. Danach kostet das Abo 14,90 € pro Monat. Das Abo kann jederzeit monatlich gekündigt werden.' },
          { question: 'Was macht ADHaSi besser als allgemeine Lern-Apps?', answer: 'ADHaSi wurde speziell für die neurobiologischen Besonderheiten von ADHS entwickelt: Fokus-Sprints von 3–7 Minuten statt langer Sessions, sofortiges Feedback nach jeder Aufgabe, KI-gestützte Schwierigkeitsanpassung und ein Eltern-Dashboard. Allgemeine Lern-Apps sind nicht auf ADHS-typische Aufmerksamkeitsmuster ausgelegt.' },
          { question: 'Wie funktioniert das Eltern-Dashboard?', answer: 'Das Eltern-Dashboard zeigt täglich, wie lange das Kind geübt hat, welche Bereiche trainiert wurden und wo Fortschritte sichtbar sind. Eltern können Lernzeiten einstellen und Reminder aktivieren — ohne selbst dabei sitzen zu müssen.' },
          { question: 'Ersetzt ADHaSi Therapie oder Medikamente?', answer: 'Nein. ADHaSi ist eine digitale Ergänzung zu Verhaltenstherapie, Ergotherapie und ggf. medikamentöser Behandlung — kein Ersatz. Bei gesicherter ADHS-Diagnose sollte die Behandlung immer mit einem Facharzt abgestimmt sein.' },
          { question: 'Auf welchen Geräten funktioniert ADHaSi?', answer: 'ADHaSi ist als App für iOS (iPhone, iPad) und Android (Smartphone, Tablet) verfügbar. Eine Web-Version ist in Entwicklung.' },
        ])}
      />

      {/* Header */}
      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">ADHS App</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">📱</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">10 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            ADHS App für Kinder: ADHaSi – fokussiert lernen
          </h1>
          <p className="font-body text-lg text-neutral-600">
            Die meisten Lern-Apps sind nicht für ADHS gemacht. ADHaSi schon — mit Fokus-Sprints,
            KI-gestützten Übungen und einem Eltern-Dashboard, das Fortschritt sichtbar macht.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/app"
              className="inline-flex items-center justify-center bg-adhasi-green text-white font-heading font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              7 Tage kostenlos testen →
            </Link>
            <Link
              href="/adhs-uebungen"
              className="inline-flex items-center justify-center border border-adhasi-border text-neutral-700 font-body font-semibold text-sm px-6 py-3 rounded-full hover:border-neutral-400 transition-colors"
            >
              ADHS Übungen entdecken
            </Link>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2>Was macht eine gute ADHS-App aus?</h2>
          <p>
            Der App Store ist voll mit Lern-Apps. Die meisten davon sind nicht für Kinder mit
            ADHS konzipiert — sie folgen Designprinzipien, die für neurotypische Lernende
            funktionieren: lange Sessions, lineare Lernpfade, Belohnung erst am Ende.
          </p>
          <p>
            Für ein Kind mit ADHS ist das ein Problem. Das ADHS-Gehirn braucht Belohnung jetzt,
            nicht nach 20 Minuten. Es braucht Struktur, die von außen kommt, weil die
            innere Selbstregulation neurobiologisch schwächer ist. Es braucht Feedback in dem
            Moment, in dem eine Aufgabe erledigt wird — nicht am Ende der Stunde.
          </p>
          <p>Eine gute ADHS-App erfüllt vier Kriterien:</p>
          <ul>
            <li><strong>Kurze Einheiten:</strong> 3–10 Minuten statt 30–45. Das Gehirn von Kindern mit ADHS erschöpft Aufmerksamkeitsressourcen schneller — kurze Sessions sind kein Kompromiss, sie sind evidenzbasiertes Design.</li>
            <li><strong>Sofortiges Feedback:</strong> Jede richtige Antwort wird unmittelbar bestätigt. Verzögerte Rückmeldung motiviert das ADHS-Gehirn nicht.</li>
            <li><strong>Adaptive Schwierigkeit:</strong> Aufgaben passen sich automatisch an. Zu leicht = langweilig, zu schwer = frustrierend. Die "Zone of Proximal Development" muss dynamisch gehalten werden.</li>
            <li><strong>Elterneinbindung:</strong> Eltern müssen sehen, was das Kind übt — ohne dabei sitzen zu müssen. Transparenz ohne Kontrollzwang.</li>
          </ul>

          <h2>ADHaSi: die ADHS-App im Überblick</h2>
          <p>
            ADHaSi ist eine Lern- und Förder-App, die speziell für Kinder mit ADHS ab 6 Jahren
            entwickelt wurde. Sie verbindet evidenzbasierte Förderansätze mit ADHS-gerechtem
            App-Design.
          </p>

          <h3>Was das Kind in der App macht</h3>
          <ul>
            <li><strong>Fokus-Sprints:</strong> 3–7 Minuten strukturierte Lerneinheiten mit klarem Anfang und Ende. Das Kind wählt selbst, ob es einen weiteren Sprint startet — Selbstwirksamkeit durch Kontrolle.</li>
            <li><strong>Übungstypen:</strong> Konzentration, Arbeitsgedächtnis, Impulskontrolle und Lernaufgaben (Rechtschreibung, Mathematik) in einem spielerischen Format.</li>
            <li><strong>Fortschrittsanzeige:</strong> Das Kind sieht nach jeder Session, was es gelernt hat. Visualisierter Fortschritt ist ein starker Motivator für das ADHS-Gehirn.</li>
            <li><strong>Charaktere und Belohnungen:</strong> Spielerische Elemente, die Sitzungen motivierend machen — ohne den Lerncharakter zu verlieren.</li>
          </ul>

          <h3>Was Eltern in der App sehen</h3>
          <ul>
            <li>Tägliche Lernprotokolle: wie lange, welche Bereiche, welches Niveau</li>
            <li>Fortschrittsgrafiken über Zeit</li>
            <li>Einstellungen für Lernzeiten und Reminder</li>
            <li>Tipps für die Lernbegleitung zuhause</li>
          </ul>

          <h3>Technische Details</h3>
          <ul>
            <li>Verfügbar für iOS und Android</li>
            <li>DSGVO-konform, Server in Deutschland</li>
            <li>Keine Werbung, keine In-App-Käufe</li>
            <li>Eltern-Account und Kind-Account getrennt</li>
          </ul>

        </div>
      </article>

      {/* Mid-page CTA */}
      <section className="bg-adhasi-green py-10 sm:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">7 Tage gratis testen</h2>
          <p className="font-body text-white/90 text-base mb-2 max-w-xl mx-auto">
            Keine Kreditkarte nötig. Jederzeit kündbar. Danach 14,90 €/Monat.
          </p>
          <p className="font-body text-white/70 text-sm mb-6">Über 5.000 Familien nutzen ADHaSi bereits.</p>
          <Link
            href="/app"
            className="inline-flex items-center justify-center bg-white text-adhasi-green font-heading font-bold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Jetzt kostenlos starten →
          </Link>
        </div>
      </section>

      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2>Fokus-Sprint: ADHS-gerechtes Lernen in 3–7 Minuten</h2>
          <p>
            Der Fokus-Sprint ist das Herzstück von ADHaSi — und der deutlichste Unterschied zu
            allgemeinen Lern-Apps.
          </p>
          <p>
            Warum 3–7 Minuten? Forschung zur Aufmerksamkeitsspanne bei ADHS zeigt, dass Kinder
            bei interessanten, angepassten Aufgaben typischerweise 5–10 Minuten fokussiert
            arbeiten können, bevor die Aufmerksamkeit nachlässt. Diese Spanne variiert mit Alter,
            Tageszeit und Erregungsniveau.
          </p>
          <p>
            ADHaSi nutzt diese Spanne optimal: Die Session ist kurz genug, dass das Kind mit
            Konzentration beginnt und mit Erfolg endet — nie mit Erschöpfung. Das erzeugt ein
            Muster, das das Gehirn wiederholen will.
          </p>
          <p>
            Der Ablauf eines Fokus-Sprints:
          </p>
          <ol>
            <li>Kind öffnet die App und wählt einen Sprint</li>
            <li>3–7 Minuten strukturierte Aufgaben mit sofortigem Feedback</li>
            <li>Abschlussanimation mit Erfolgszusammenfassung</li>
            <li>Option: nächsten Sprint starten oder Pause</li>
          </ol>
          <p>
            Das Ergebnis: Kinder, die täglich einen einzigen Fokus-Sprint machen, üben
            konsequenter als Kinder, die einmal pro Woche eine lange Hausaufgabensession
            haben.
          </p>

          <h2>Eltern-Dashboard: Fortschritt im Blick</h2>
          <p>
            Eltern von ADHS-Kindern kämpfen oft mit demselben Problem: Sie wissen nicht, ob
            die Fördermaßnahmen wirken. Noten kommen einmal pro Quartal, Therapeuten-Feedback
            einmal pro Woche. Das ADHaSi Eltern-Dashboard schließt diese Lücke.
          </p>

          <h3>Was das Dashboard zeigt</h3>
          <ul>
            <li><strong>Tägliche Lernzeit:</strong> Wie viele Minuten hat das Kind heute geübt? Wurden die gesetzten Ziele erreicht?</li>
            <li><strong>Übungsverteilung:</strong> Fokus, Arbeitsgedächtnis, Impulskontrolle, Schulaufgaben — welche Bereiche wurden trainiert?</li>
            <li><strong>Wochenfortschritt:</strong> Wie entwickeln sich die Leistungen über die Zeit? Gibt es Bereiche mit besonders deutlichem Wachstum?</li>
            <li><strong>Streak und Regelmäßigkeit:</strong> Wie viele Tage in Folge hat das Kind geübt? Regelmäßigkeit ist bei ADHS-Förderung wichtiger als Intensität.</li>
          </ul>

          <h3>Was das Dashboard nicht zeigt</h3>
          <p>
            ADHaSi bewertet kein Gesamtergebnis und gibt keine Schulnote. Das ist Absicht:
            Das Dashboard soll Fortschritt zeigen, nicht Defizite. Eltern sehen, was
            besser wird — nicht, was noch fehlt.
          </p>

          <h2>Vergleich: ADHaSi vs. allgemeine Lern-Apps</h2>

          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm font-body border-collapse border border-adhasi-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left px-4 py-3 font-semibold text-neutral-700 border-b border-adhasi-border">Kriterium</th>
                  <th className="text-left px-4 py-3 font-semibold text-adhasi-green border-b border-adhasi-border">ADHaSi</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-500 border-b border-adhasi-border">Allgemeine Lern-Apps</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Session-Länge', '3–7 Minuten (ADHS-optimiert)', '20–45 Minuten'],
                  ['Feedback', 'Sofort nach jeder Aufgabe', 'Am Ende der Session'],
                  ['Schwierigkeit', 'KI-gestützte Echtzeit-Anpassung', 'Meist feste Stufen'],
                  ['ADHS-Design', 'Kernprinzip', 'Kein gezieltes ADHS-Design'],
                  ['Eltern-Dashboard', 'Täglich, detailliert', 'Oft nicht vorhanden'],
                  ['Werbung', 'Keine', 'Teils vorhanden'],
                  ['Datenschutz', 'DSGVO, Server DE', 'Variiert'],
                ].map(([k, a, b]) => (
                  <tr key={k} className="border-b border-adhasi-border last:border-0">
                    <td className="px-4 py-3 text-neutral-600 font-semibold">{k}</td>
                    <td className="px-4 py-3 text-neutral-700">{a}</td>
                    <td className="px-4 py-3 text-neutral-500">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Preise & Abo-Modell</h2>
          <p>
            ADHaSi hat ein einfaches, transparentes Preismodell — ohne versteckte Kosten
            oder In-App-Käufe.
          </p>

          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="border border-adhasi-border rounded-2xl p-6 bg-surface">
              <p className="font-heading text-lg font-bold text-neutral-900 mb-1">Trial</p>
              <p className="font-heading text-3xl font-bold text-adhasi-green mb-2">Kostenlos</p>
              <p className="font-body text-sm text-neutral-600 mb-4">7 Tage, keine Kreditkarte</p>
              <ul className="font-body text-sm text-neutral-600 space-y-1.5">
                <li>✓ Voller App-Zugang</li>
                <li>✓ Eltern-Dashboard</li>
                <li>✓ Alle Übungstypen</li>
                <li>✓ Kein Abo nötig zum Testen</li>
              </ul>
            </div>
            <div className="border-2 border-adhasi-green rounded-2xl p-6 bg-white relative">
              <span className="absolute -top-3 left-6 bg-adhasi-green text-white text-xs font-semibold px-3 py-1 rounded-full">Empfohlen</span>
              <p className="font-heading text-lg font-bold text-neutral-900 mb-1">Monatsabo</p>
              <p className="font-heading text-3xl font-bold text-neutral-900 mb-2">14,90 €<span className="text-base font-body font-normal text-neutral-500">/Monat</span></p>
              <p className="font-body text-sm text-neutral-600 mb-4">Jederzeit kündbar</p>
              <ul className="font-body text-sm text-neutral-600 space-y-1.5">
                <li>✓ Voller App-Zugang</li>
                <li>✓ Eltern-Dashboard</li>
                <li>✓ Alle Übungstypen & Updates</li>
                <li>✓ Prioritäts-Support</li>
              </ul>
            </div>
          </div>
          <p>
            Für Schulen, Therapeuten und Pädagogen gibt es separate Konditionen —
            mehr dazu auf der <Link href="/app">App-Seite</Link>.
          </p>

          <h2>Häufige Fragen zur ADHaSi App</h2>

          <div className="not-prose flex flex-col divide-y divide-adhasi-border">
            {[
              { q: 'Für welches Alter ist die ADHaSi App geeignet?', a: 'ADHaSi ist für Kinder ab 6 Jahren konzipiert — von der Vorschule bis zum Ende der Grundschulzeit. Die Aufgaben passen sich automatisch an das individuelle Niveau an.' },
              { q: 'Kostet die ADHaSi App etwas?', a: 'Die ersten 7 Tage sind kostenlos und ohne Kreditkarte. Danach kostet das Abo 14,90 € pro Monat — jederzeit kündbar.' },
              { q: 'Was macht ADHaSi besser als allgemeine Lern-Apps?', a: 'ADHaSi wurde speziell für die neurobiologischen Besonderheiten von ADHS entwickelt: Fokus-Sprints von 3–7 Minuten, sofortiges Feedback, KI-gestützte Schwierigkeitsanpassung und ein Eltern-Dashboard.' },
              { q: 'Wie funktioniert das Eltern-Dashboard?', a: 'Das Eltern-Dashboard zeigt täglich, wie lange das Kind geübt hat, welche Bereiche trainiert wurden und wo Fortschritte sichtbar sind. Eltern können Lernzeiten und Reminder einstellen.' },
              { q: 'Ersetzt ADHaSi Therapie oder Medikamente?', a: 'Nein. ADHaSi ist eine digitale Ergänzung zu Verhaltenstherapie, Ergotherapie und ggf. medikamentöser Behandlung — kein Ersatz.' },
              { q: 'Auf welchen Geräten funktioniert ADHaSi?', a: 'ADHaSi ist als App für iOS (iPhone, iPad) und Android (Smartphone, Tablet) verfügbar.' },
            ].map(({ q, a }) => (
              <details key={q} className="group py-4">
                <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-heading font-semibold text-neutral-900 text-base">
                  {q}
                  <span className="text-adhasi-green text-xl shrink-0 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="font-body text-sm text-neutral-600 mt-3 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>

        </div>
      </article>

      {/* Internal Links */}
      <section className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-body text-sm font-semibold text-neutral-500 mb-4 uppercase tracking-wider">Weiterführende Themen</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/adhs-grundlagen" className="bg-white border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all group">
              <span className="text-2xl block mb-1">🧠</span>
              <span className="font-heading text-sm font-bold text-neutral-900 group-hover:text-adhasi-green">ADHS Grundlagen</span>
              <p className="font-body text-xs text-neutral-500 mt-0.5">Symptome, Diagnose & Subtypen</p>
            </Link>
            <Link href="/adhs-foerderung" className="bg-white border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all group">
              <span className="text-2xl block mb-1">🌱</span>
              <span className="font-heading text-sm font-bold text-neutral-900 group-hover:text-adhasi-green">ADHS Förderung</span>
              <p className="font-body text-xs text-neutral-500 mt-0.5">Therapie & was wirklich hilft</p>
            </Link>
            <Link href="/adhs-uebungen" className="bg-white border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all group">
              <span className="text-2xl block mb-1">🎯</span>
              <span className="font-heading text-sm font-bold text-neutral-900 group-hover:text-adhasi-green">ADHS Übungen</span>
              <p className="font-body text-xs text-neutral-500 mt-0.5">Fokus & Impulskontrolle üben</p>
            </Link>
          </div>
        </div>
      </section>

      <ArticleCTA />
    </>
  )
}
