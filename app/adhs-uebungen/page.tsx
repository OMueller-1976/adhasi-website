import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'

export const metadata: Metadata = defaultMetadata({
  title: 'ADHS Übungen für Kinder – kostenlos testen | ADHaSi',
  description:
    'ADHS Übungen für Kinder: Fokus, Impulskontrolle & Arbeitsgedächtnis spielerisch trainieren — für zuhause und digital mit der ADHaSi App.',
  path: '/adhs-uebungen',
})

export default function AdhsUebungenPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'ADHS Übungen für Kinder – spielerisch & strukturiert',
          description: 'Fokus, Impulskontrolle und Arbeitsgedächtnis bei ADHS gezielt trainieren — Übungen für zuhause und mit der ADHaSi App.',
          path: '/adhs-uebungen',
          datePublished: '2026-04-01',
          dateModified: '2026-04-30',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'ADHS Übungen', path: '/adhs-uebungen' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Welche Übungen helfen bei ADHS wirklich?', answer: 'Übungen, die Fokus, Impulskontrolle und Arbeitsgedächtnis trainieren, zeigen die stärkste Evidenz. Wichtig: kurze Einheiten (5–10 Minuten), sofortiges Feedback, klare Struktur. Bewegungsbasierte Übungen (z. B. Balancieren, Klettern) verbessern zusätzlich die Konzentration.' },
          { question: 'Wie lange sollte ein ADHS-Kind täglich üben?', answer: 'Faustregel: 5–15 Minuten täglich sind wirksamer als 60 Minuten einmal pro Woche. Regelmäßigkeit schlägt Intensität. Das ADHS-Gehirn braucht häufige, kurze Erfolgserlebnisse statt langer Sitzungen.' },
          { question: 'Ab welchem Alter sind ADHS-Übungen sinnvoll?', answer: 'Ab ca. 5–6 Jahren können erste strukturierte Übungen eingesetzt werden. Jüngere Kinder profitieren mehr von Bewegungsspielen und Routinen. Ab dem Schulalter sind kognitive Trainingseinheiten (Arbeitsgedächtnis, Fokus) sinnvoll.' },
          { question: 'Kann ich ADHS-Übungen selbst mit meinem Kind machen?', answer: 'Ja — viele wirksame Übungen lassen sich zuhause durchführen: Ich-packe-meinen-Koffer (Arbeitsgedächtnis), Stop-and-Go-Spiele (Impulskontrolle), Bildkonzentration (Fokus). Wichtig ist die regelmäßige Durchführung und positives Feedback.' },
          { question: 'Ersetzen Übungen bei ADHS die Therapie?', answer: 'Nein. Übungen sind eine sinnvolle Ergänzung zu Verhaltenstherapie, Ergotherapie und ggf. Medikamenten — aber kein Ersatz. Bei gesicherter ADHS-Diagnose sollte die Behandlung mit einem Facharzt abgestimmt sein.' },
          { question: 'Was ist der Unterschied zwischen digitalen und analogen ADHS-Übungen?', answer: 'Beide haben Stärken: Digitale Übungen bieten sofortiges Feedback und Gamification (höhere Motivation). Analoge Übungen fördern Handlungskompetenz und soziale Interaktion. Die Kombination ist am wirksamsten.' },
        ])}
      />

      {/* Header */}
      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">ADHS Übungen</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🎯</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">11 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            ADHS Übungen für Kinder: spielerisch & strukturiert
          </h1>
          <p className="font-body text-lg text-neutral-600">
            Fokus, Impulskontrolle und Arbeitsgedächtnis lassen sich trainieren — mit den richtigen
            Übungen, zur richtigen Zeit, in der richtigen Dosis. Was wirkt und wie ihr es zuhause
            umsetzen könnt.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/app"
              className="inline-flex items-center justify-center bg-adhasi-green text-white font-heading font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              ADHaSi 7 Tage kostenlos testen →
            </Link>
            <Link
              href="/adhs-grundlagen"
              className="inline-flex items-center justify-center border border-adhasi-border text-neutral-700 font-body font-semibold text-sm px-6 py-3 rounded-full hover:border-neutral-400 transition-colors"
            >
              ADHS Grundlagen verstehen
            </Link>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2>Warum brauchen ADHS-Kinder besondere Übungen?</h2>
          <p>
            Kinder mit ADHS lernen und üben anders — nicht schlechter, sondern anders. Das ADHS-Gehirn
            verarbeitet Belohnung, Aufmerksamkeit und Zeit neurobiologisch verschieden: Der präfrontale
            Kortex, zuständig für Planung, Impulskontrolle und Arbeitsgedächtnis, arbeitet mit einem
            anderen Dopamin-Gleichgewicht als bei neurotypischen Kindern.
          </p>
          <p>
            Das bedeutet für Übungen: Standardmethoden funktionieren oft nicht. 30 Minuten still auf
            einem Arbeitsblatt sitzen, Vokabeln 20-mal abschreiben, lange Aufmerksamkeit für eine
            einzelne Aufgabe halten — das sind Anforderungen, die ADHS-Kinder überfordern, nicht weil
            sie faul sind, sondern weil ihre Neuronalarchitektur kurzfristige Belohnung und
            Abwechslung braucht.
          </p>
          <p>
            Wirksame ADHS-Übungen berücksichtigen diese Realität:
          </p>
          <ul>
            <li><strong>Kurze Einheiten:</strong> 5–10 Minuten statt 30–45. Das ADHS-Gehirn erschöpft Aufmerksamkeitsressourcen schneller und braucht häufige Pausen.</li>
            <li><strong>Sofortiges Feedback:</strong> Jede richtige Antwort, jede abgeschlossene Aufgabe wird unmittelbar bestätigt. Verzögerte Belohnung motiviert das ADHS-Gehirn nicht.</li>
            <li><strong>Steigende Schwierigkeit:</strong> Aufgaben, die exakt am Kompetenzniveau liegen — nicht zu leicht (langweilig), nicht zu schwer (frustrierend). Diese "Zone of Proximal Development" ist bei ADHS besonders eng.</li>
            <li><strong>Strukturierte Regeln:</strong> Klarer Anfang und Ende, klare Erwartungen, vorhersehbarer Ablauf. Überraschungen und Regeländerungen kosten Energie, die dann fürs Üben fehlt.</li>
          </ul>
          <p>
            Mehr zu den neurobiologischen Hintergründen: <Link href="/adhs-grundlagen">ADHS Grundlagen: Symptome, Diagnose & Subtypen</Link>.
          </p>

          <h2>Die besten ADHS-Übungstypen: Fokus, Impulskontrolle, Arbeitsgedächtnis</h2>
          <p>
            Drei Bereiche profitieren bei ADHS am stärksten von gezieltem Training. Sie sind
            neurobiologisch miteinander verbunden — Verbesserungen in einem Bereich wirken
            auf die anderen.
          </p>

          <h3>Fokus und selektive Aufmerksamkeit</h3>
          <p>
            Selektive Aufmerksamkeit ist die Fähigkeit, relevante Reize zu beachten und irrelevante
            zu ignorieren. Bei ADHS ist dieser Filter schwächer — alles konkurriert gleichzeitig
            um Aufmerksamkeit.
          </p>
          <p>Wirksame Fokus-Übungen:</p>
          <ul>
            <li><strong>Wimmelbild-Aufgaben:</strong> Ein bestimmtes Objekt in einem unübersichtlichen Bild finden — trainiert gerichtete Aufmerksamkeit unter Ablenkung.</li>
            <li><strong>Fehlerbilder:</strong> Zwei fast identische Bilder vergleichen, Unterschiede finden. Trainiert anhaltende Konzentration auf Details.</li>
            <li><strong>Farbenwörter lesen (Stroop-Prinzip):</strong> Das Wort "Blau" ist in roter Farbe geschrieben — welche Farbe hat die Schrift? Trainiert selektive Inhibition.</li>
            <li><strong>Timer-Fokus:</strong> 5 Minuten ohne Unterbrechung an einer einzigen Aufgabe arbeiten. Timer setzt klare Grenzen — das Gehirn weiß, wann Pause ist.</li>
          </ul>

          <h3>Impulskontrolle</h3>
          <p>
            Impulskontrolle — die Fähigkeit, auf einen Handlungsimpuls nicht sofort zu reagieren —
            ist bei ADHS neurobiologisch geschwächt. Training verbessert die Hemmfunktion des
            präfrontalen Kortex.
          </p>
          <ul>
            <li><strong>Stop-and-Go-Spiele:</strong> Bei einem Signal (Klatschen, Wort) aufhören oder die Richtung wechseln. Klassiker: Reise nach Jerusalem, Statuen.</li>
            <li><strong>Red-Light-Green-Light (Ampel-Spiel):</strong> Beim roten Licht anhalten, beim grünen weitergehen. Einfach, aber neurobiologisch wirksam für Inhibitionstraining.</li>
            <li><strong>Kartensortierung mit Regelwechsel:</strong> Karten nach Farbe sortieren, dann nach dem Signal nach Form. Regelwechsel trainiert kognitive Flexibilität und Impulskontrolle gleichzeitig.</li>
            <li><strong>Warte-und-handle-Aufgaben:</strong> Auf das richtige Signal warten, bevor eine Aufgabe begonnen wird. Impulshemmung durch Delay-Übungen.</li>
          </ul>

          <h3>Arbeitsgedächtnis</h3>
          <p>
            Das Arbeitsgedächtnis ist bei ADHS-Kindern im Schnitt 2–3 Jahre hinter dem chronologischen
            Alter zurück. Es speichert Informationen kurz, während eine Aufgabe bearbeitet wird.
            Wenn es schwächelt, vergisst das Kind mitten im Satz, was es sagen wollte.
          </p>
          <ul>
            <li><strong>Ich packe meinen Koffer:</strong> Klassische Merkspiel-Kette — jeder fügt einen Gegenstand hinzu und wiederholt alle vorherigen. Schwierigkeitsgrad skalierbar.</li>
            <li><strong>Ziffernspanne rückwärts:</strong> Eine Zahlenfolge hören ("3-7-1-4"), dann rückwärts wiederholen ("4-1-7-3"). Trainiert Manipulation im Arbeitsgedächtnis.</li>
            <li><strong>Memory mit Zeitdruck:</strong> Paare suchen, aber nach kurzer Zeit die Karten wieder abdecken. Trainiert aktives Behalten.</li>
            <li><strong>Anweisungsfolgen:</strong> Mehrschrittige Anweisungen ohne Zwischennotizen ausführen ("Geh zur Tür, mach zweimal auf und zu, dann komm rückwärts zurück"). Alltagsnahes Arbeitsgedächtnistraining.</li>
          </ul>

        </div>
      </article>

      {/* Mid-page CTA */}
      <section className="bg-adhasi-green py-10 sm:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">ADHaSi: ADHS-Übungen digital</h2>
          <p className="font-body text-white/90 text-base mb-6 max-w-xl mx-auto">
            Fokus-Sprints, Impulskontrolle und Arbeitsgedächtnis — alle drei Bereiche in einer App.
            7 Tage kostenlos testen, keine Kreditkarte nötig.
          </p>
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

          <h2>Übungen für zuhause: konkrete Beispiele je Altersgruppe</h2>

          <h3>Vorschulkinder (4–6 Jahre)</h3>
          <p>
            In diesem Alter stehen Bewegung, Wahrnehmung und erste einfache Regeln im Vordergrund.
            Das Gehirn ist noch stark in der Entwicklung — Übungen sollten spielerisch und kurz sein.
          </p>
          <ul>
            <li><strong>Balancieren auf einer Linie:</strong> Eine Linie am Boden (Klebeband), entlanggehen ohne runterzufallen. Verbessert Körperkontrolle und Konzentration.</li>
            <li><strong>Tastbox:</strong> Gegenstände blind ertasten und benennen. Fördert sensorische Wahrnehmung und selektive Aufmerksamkeit.</li>
            <li><strong>Farb-Klang-Spiel:</strong> Rot = klatschen, blau = stampfen. Bei wechselnden Farben die richtige Reaktion zeigen — erstes Impulskontrolltraining.</li>
            <li><strong>Einfache Merkaufgaben:</strong> 3 Gegenstände auf dem Tisch, kurz verstecken, welcher fehlt? Kurze Merkspiele in 2–3 Minuten.</li>
          </ul>

          <h3>Grundschulkinder (7–10 Jahre)</h3>
          <p>
            Mit dem Schulalter werden strukturiertere Übungen möglich und sinnvoll. Aufmerksamkeit,
            Schulvorbereitung und Lernen können direkt adressiert werden.
          </p>
          <ul>
            <li><strong>Lernkarten-Rotation:</strong> 5 Karten, 5 Minuten, sofortiger Selbstcheck. Kein langes Vokabellernen — Micro-Sessions mit unmittelbarem Ergebnis.</li>
            <li><strong>Planungsübung:</strong> Das Kind erklärt, wie es eine Aufgabe angehen will, bevor es anfängt. Exekutivfunktion durch Verbalisierung trainieren.</li>
            <li><strong>Emotionskarten:</strong> Situations-Karten ziehen ("Der beste Freund nimmt das Spielzeug"), Reaktion wählen. Impulskontrolle im sozialen Kontext üben.</li>
            <li><strong>Konzentrations-Bingo:</strong> In einer Tabelle mit Zahlen alle Dreier in 3 Minuten markieren. Einfach, skalierbar, mit klarem Ergebnis.</li>
          </ul>

          <h3>Ältere Kinder & Jugendliche (11–16 Jahre)</h3>
          <p>
            Ab dem Jugendalter sind abstraktere und komplexere Übungen möglich. Selbstreflexion
            und Eigenverantwortung können einbezogen werden.
          </p>
          <ul>
            <li><strong>Aufgaben-Chunking:</strong> Eine große Aufgabe in 5 Minuten-Einheiten aufteilen. Das Ergebnis: Hausaufgaben werden planbar statt überwältigend.</li>
            <li><strong>Dual-Task-Training:</strong> Zwei einfache Aufgaben gleichzeitig — z. B. gehen und Zahlenfolgen rückwärts zählen. Trainiert geteilte Aufmerksamkeit.</li>
            <li><strong>Selbstmonitoring-Protokoll:</strong> Alle 5 Minuten kurz innehalten: "War ich gerade bei der Aufgabe?" — einfaches Bewusstseins-Training für Ablenkung.</li>
            <li><strong>Zeitschätzungs-Übung:</strong> Schätzen, wie lange eine Aufgabe dauert, dann Stoppuhr — ADHS-Kinder unterschätzen Zeit oft erheblich. Regelmäßiges Training verbessert das Zeitgefühl.</li>
          </ul>

          <h2>Digitale ADHS-Übungen vs. analoge Übungen</h2>
          <p>
            Die Frage "digital oder analog?" ist keine Entweder-oder-Entscheidung. Beide Formate
            haben spezifische Stärken — und die Kombination ist am wirksamsten.
          </p>

          <h3>Stärken digitaler Übungen</h3>
          <ul>
            <li><strong>Sofortiges, konsistentes Feedback:</strong> Eine App reagiert in Millisekunden — keine Wartezeit auf Eltern-Korrektur.</li>
            <li><strong>Automatische Schwierigkeitsanpassung:</strong> KI-gestützte Systeme passen das Niveau in Echtzeit an — die "Zone of Proximal Development" wird automatisch gehalten.</li>
            <li><strong>Motivationsstruktur:</strong> Punkte, Level, Fortschrittsanzeigen — Gamification nutzt dieselben Dopaminmechanismen, die das ADHS-Gehirn ansprechbar machen.</li>
            <li><strong>Konsistenz:</strong> Jede Session läuft gleich ab. Kein "Mama hat heute keine Geduld"-Faktor.</li>
          </ul>

          <h3>Stärken analoger Übungen</h3>
          <ul>
            <li><strong>Motorische Komponente:</strong> Handschrift, Basteln, Bauen — haptische Aktivitäten fördern Konzentration durch einen anderen Kanal.</li>
            <li><strong>Soziale Interaktion:</strong> Spiele mit anderen Kindern oder Eltern trainieren soziale Impulskontrolle und Frustrationstoleranz.</li>
            <li><strong>Bildschirmzeit-Balance:</strong> Analoge Übungen ergänzen digitales Lernen und verhindern einseitige Stimulation.</li>
          </ul>

          <h2>Wie ADHaSi ADHS-Übungen umsetzt</h2>
          <p>
            Die <Link href="/app">ADHaSi App</Link> wurde von Grund auf für die neurobiologischen
            Besonderheiten von Kindern mit ADHS entwickelt — nicht als Lern-App mit einem
            ADHS-Label, sondern als Förderinstrument, das ADHS-Prinzipien in jede Funktion
            eingebaut hat.
          </p>

          <h3>Der Fokus-Sprint</h3>
          <p>
            Kernfunktion der ADHaSi App ist der Fokus-Sprint: strukturierte Lerneinheiten von
            3–7 Minuten. Nicht 20, nicht 30 — sondern exakt die Zeitspanne, in der das ADHS-Gehirn
            konzentriert arbeiten kann, bevor die Aufmerksamkeit nachlässt.
          </p>
          <p>
            Nach jedem Fokus-Sprint folgt eine kurze Pause. Das Kind entscheidet selbst, ob es
            einen weiteren Sprint startet. Diese Kontrollwahrnehmung ist entscheidend für die
            intrinsische Motivation.
          </p>

          <h3>Sofortiges adaptives Feedback</h3>
          <p>
            Jede Aufgabe wird sofort bewertet. KI-gestützte Anpassung sorgt dafür, dass das
            Niveau immer am optimalen Punkt liegt — weder frustrierend schwer noch langweilig
            leicht. Das Ergebnis: Das Kind erlebt fast jede Session als Erfolg.
          </p>

          <h3>Das Eltern-Dashboard</h3>
          <p>
            Eltern sehen, welche Bereiche ihr Kind übt, wie lang die Sessions sind und wo
            Fortschritte sichtbar werden. Keine Interpretation, keine Noten — nur klare,
            verständliche Daten.
          </p>
          <p>
            Mehr zu evidenzbasierten Förderansätzen: <Link href="/adhs-foerderung">ADHS Förderung: Methoden & Therapie</Link>.
          </p>

          <h2>Häufige Fragen zu ADHS-Übungen</h2>

          <div className="not-prose flex flex-col divide-y divide-adhasi-border">
            {[
              { q: 'Welche Übungen helfen bei ADHS wirklich?', a: 'Übungen, die Fokus, Impulskontrolle und Arbeitsgedächtnis trainieren, zeigen die stärkste Evidenz. Wichtig: kurze Einheiten (5–10 Minuten), sofortiges Feedback, klare Struktur. Bewegungsbasierte Übungen verbessern zusätzlich die Konzentration.' },
              { q: 'Wie lange sollte ein ADHS-Kind täglich üben?', a: 'Faustregel: 5–15 Minuten täglich sind wirksamer als 60 Minuten einmal pro Woche. Regelmäßigkeit schlägt Intensität. Das ADHS-Gehirn braucht häufige, kurze Erfolgserlebnisse statt langer Sitzungen.' },
              { q: 'Ab welchem Alter sind ADHS-Übungen sinnvoll?', a: 'Ab ca. 5–6 Jahren können erste strukturierte Übungen eingesetzt werden. Jüngere Kinder profitieren mehr von Bewegungsspielen und Routinen. Ab dem Schulalter sind kognitive Trainingseinheiten sinnvoll.' },
              { q: 'Kann ich ADHS-Übungen selbst mit meinem Kind machen?', a: 'Ja — viele wirksame Übungen lassen sich zuhause durchführen: Ich-packe-meinen-Koffer (Arbeitsgedächtnis), Stop-and-Go-Spiele (Impulskontrolle), Fehlerbilder (Fokus). Wichtig ist die regelmäßige Durchführung und positives Feedback.' },
              { q: 'Ersetzen Übungen bei ADHS die Therapie?', a: 'Nein. Übungen sind eine sinnvolle Ergänzung zu Verhaltenstherapie, Ergotherapie und ggf. Medikamenten — aber kein Ersatz. Bei gesicherter ADHS-Diagnose sollte die Behandlung mit einem Facharzt abgestimmt sein.' },
              { q: 'Was ist der Unterschied zwischen digitalen und analogen ADHS-Übungen?', a: 'Digitale Übungen bieten sofortiges Feedback und Gamification (höhere Motivation). Analoge Übungen fördern Handlungskompetenz und soziale Interaktion. Die Kombination ist am wirksamsten.' },
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
            <Link href="/achtsamkeit" className="bg-white border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all group">
              <span className="text-2xl block mb-1">🌬</span>
              <span className="font-heading text-sm font-bold text-neutral-900 group-hover:text-adhasi-green">Mehr Ruhe für dein Kind</span>
              <p className="font-body text-xs text-neutral-500 mt-0.5">Unsere kostenlosen Achtsamkeitsübungen und Atemtechniken →</p>
            </Link>
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
          </div>
        </div>
      </section>

      <ArticleCTA />
    </>
  )
}
