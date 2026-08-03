import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'
import ArticleInternalLinks from '@/components/ArticleInternalLinks'

export const metadata: Metadata = defaultMetadata({
  title: 'Lernmethodik bei ADHS — Pomodoro, Mikropausen & fokussiertes Lernen',
  description:
    'Welche Lernmethoden helfen bei ADHS wirklich? Pomodoro-Technik, Mikropausen und visuelles Feedback — effektives Lernen mit ADHS.',
  path: '/ratgeber/lernmethodik',
})

export default function LernmethodikPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'Lernmethodik bei ADHS — Pomodoro, Mikropausen & fokussiertes Lernen',
          description:
            'Welche Lernmethoden helfen Kindern mit ADHS wirklich? Pomodoro, Mikropausen, visuelle Strukturen und sofortiges Feedback.',
          path: '/ratgeber/lernmethodik',
          datePublished: '2026-04-01',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Ratgeber', path: '/ratgeber' },
          { name: 'Lernmethodik', path: '/ratgeber/lernmethodik' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          {
            question: 'Wie lange sollte ein Kind mit ADHS am Stück lernen?',
            answer: 'Kinder mit ADHS sollten in Blöcken von maximal 10–15 Minuten lernen, gefolgt von einer 5-minütigen Bewegungspause. Diese kurzen Einheiten sind deutlich wirksamer als lange Lernsessions, weil das Arbeitsgedächtnis bei ADHS schnell überlastet.',
          },
          {
            question: 'Was ist die Pomodoro-Technik für Kinder?',
            answer: 'Die Pomodoro-Technik für Kinder bedeutet: 10–15 Minuten konzentriert lernen, dann 5 Minuten Pause — mit einem sichtbaren Timer. Das gibt ADHS-Kindern eine klare zeitliche Struktur und macht das Ende einer Lernphase berechenbar, was Frustration erheblich reduziert.',
          },
          {
            question: 'Hilft ein Belohnungssystem bei ADHS?',
            answer: 'Ja, unmittelbares und konkretes Feedback hilft ADHS-Kindern sehr. Wichtig ist, dass die Belohnung sofort nach der Leistung kommt — verzögerte Belohnungen wirken bei ADHS kaum. Kleine, häufige Belohnungen sind wirkungsvoller als große, seltene.',
          },
        ])}
      />

      {/* Header */}
      <section className="bg-surface py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-adhasi-green">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/ratgeber" className="hover:text-adhasi-green">Ratgeber</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-700">Lernmethodik</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">⚡</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">6 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Lernmethodik bei ADHS: Was wirklich hilft
          </h1>
          <p className="font-body text-lg text-neutral-700">
            Kinder mit ADHS lernen anders — nicht schlechter. Mit den richtigen Methoden, kurzen
            Lernblöcken und klarer Struktur können sie ihre volle Leistungsfähigkeit entfalten.
            Dieser Artikel zeigt, wie es geht.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2>Was beim Lernen mit ADHS im Gehirn passiert</h2>
          <p>
            ADHS ist keine Faulheit und kein Wille. Im Gehirn von Kindern mit ADHS ist die
            Regulation von <strong>Dopamin und Noradrenalin</strong> verändert — zwei Botenstoffe,
            die für Aufmerksamkeit, Arbeitsgedächtnis und Impulskontrolle entscheidend sind.
          </p>
          <p>
            Das hat konkrete Auswirkungen beim Lernen:
          </p>
          <ul>
            <li><strong>Kurze Aufmerksamkeitsspanne:</strong> Ohne äußere Reize oder unmittelbare Belohnung lässt die Konzentration nach wenigen Minuten nach.</li>
            <li><strong>Impulsivität:</strong> Kinder unterbrechen sich selbst, springen von Aufgabe zu Aufgabe und haben Schwierigkeiten, bei einer Sache zu bleiben.</li>
            <li><strong>Schwaches Arbeitsgedächtnis:</strong> Informationen „verblassen" schnell — was kurz zuvor erklärt wurde, ist beim nächsten Schritt schon vergessen.</li>
            <li><strong>Zeitblindheit:</strong> Das Gefühl für Zeitabläufe ist bei ADHS oft unzuverlässig — eine Stunde fühlt sich an wie fünf Minuten oder umgekehrt.</li>
          </ul>
          <p>
            Diese Eigenschaften sind keine Defizite, die weg sollen — sie sind Ausgangspunkte,
            von denen aus die richtige Lernmethodik ansetzt.
          </p>

          <h2>Die Pomodoro-Technik für Kinder mit ADHS</h2>
          <p>
            Die Pomodoro-Technik ist eine der wirksamsten Methoden für ADHS-Kinder. Das Prinzip:
            <strong> kurze, fokussierte Lernblöcke mit definierten Pausen</strong>. Für Kinder
            bedeutet das:
          </p>
          <ul>
            <li>⏱️ <strong>10–15 Minuten</strong> konzentriert eine Aufgabe bearbeiten</li>
            <li>🛑 <strong>5 Minuten Pause</strong> — Bewegung, Wasser trinken, kurz ausschütteln</li>
            <li>🔁 Nach 3–4 Blöcken eine längere Pause von 15–20 Minuten</li>
          </ul>
          <p>
            Der Schlüssel ist ein <strong>sichtbarer Timer</strong>. Kinder mit ADHS profitieren
            enorm davon, wenn sie sehen können, wie viel Zeit noch verbleibt — ein analoger Küchentimer
            oder eine Timer-App auf einem Tablet macht die abstrakte Zeit konkret und berechenbar.
            Damit wird das Ende einer Lernphase vorhersehbar, was Frustration erheblich reduziert.
          </p>

          <h2>Mikropausen: Kleine Pausen, große Wirkung</h2>
          <p>
            Das Gehirn braucht Pausen, um Gelerntes zu verarbeiten. Bei ADHS ist dieser Mechanismus
            besonders wichtig, weil das Arbeitsgedächtnis schneller überlastet. <strong>Mikropausen
            von 2–3 Minuten</strong> zwischen Aufgabenblöcken helfen:
          </p>
          <ul>
            <li>Informationen zu konsolidieren (vom Kurz- ins Langzeitgedächtnis)</li>
            <li>den Dopaminspiegel kurz zu erholen</li>
            <li>den Körper aus einer starren Sitzhaltung zu lösen</li>
          </ul>
          <p>
            Was in einer Mikropause hilft: kurz aufstehen, ein Glas Wasser trinken, drei Mal tief
            durchatmen, oder auf einem Minitrampolin hüpfen. Körperliche Bewegung — auch kurz —
            erhöht nachweislich die Konzentrationsfähigkeit bei ADHS-Kindern.
          </p>

          <h2>Visuelle Strukturen als Anker</h2>
          <p>
            Kinder mit ADHS brauchen keine schwierigeren Aufgaben — sie brauchen
            <strong> klarere Strukturen</strong>. Visuelle Hilfsmittel reduzieren die kognitive
            Last erheblich:
          </p>
          <ul>
            <li>
              <strong>Aufgabenkarten:</strong> Jede Hausaufgabe auf einer eigenen Karte — so wird
              der Berg an Aufgaben überschaubar, und jede abgeschlossene Karte gibt ein konkretes
              Erfolgserlebnis.
            </li>
            <li>
              <strong>Checklisten:</strong> Eine sichtbare Liste mit drei bis vier Schritten für
              die Hausaufgabenroutine (Ranzen, Heft, Aufgaben lesen, anfangen). Kinder mit ADHS
              verlieren den Überblick schnell — Checklisten externalisieren den Überblick.
            </li>
            <li>
              <strong>Farbkodierung:</strong> Unterschiedliche Fächer in unterschiedlichen Farben —
              Mathe blau, Deutsch grün, Englisch orange. Visuelle Differenzierung reduziert die
              Orientierungszeit erheblich.
            </li>
            <li>
              <strong>Stundenplan sichtbar aufhängen:</strong> Ein großformatiger, farbiger Wochenplan
              an einem fixen Ort gibt tägliche Orientierung ohne Nachfragen.
            </li>
          </ul>

          <h2>Sofortiges Feedback: Warum es bei ADHS so wichtig ist</h2>
          <p>
            Das Belohnungssystem bei ADHS reagiert besonders stark auf <strong>unmittelbares
            Feedback</strong>. Verzögerte Rückmeldungen — wie eine Note, die eine Woche nach
            dem Test kommt — wirken kaum motivierend. Was hilft, ist Feedback, das sofort kommt:
          </p>
          <ul>
            <li>Direkt nach jeder gelösten Aufgabe loben, nicht erst am Ende</li>
            <li>Lern-Apps mit sofortigem Richtig/Falsch-Feedback nutzen</li>
            <li>Kleine sichtbare Belohnungen direkt nach dem Lernblock (Sticker, Punkte, Spielzeit)</li>
            <li>Fortschritt visualisieren: ein Thermometer-Chart, der sich füllt, ist besser als ein verbales Lob allein</li>
          </ul>

          <h2>Konkrete Tipps für Hausaufgaben</h2>

          <h3>Optimale Lernumgebung schaffen</h3>
          <p>
            Der Lernort beeinflusst die Konzentration erheblich. Für ADHS-Kinder gilt:
          </p>
          <ul>
            <li>Ruhiger Platz ohne Bildschirme im Sichtfeld</li>
            <li>Smartphone und Tablet in einem anderen Raum</li>
            <li>Ausreichend Licht und frische Luft</li>
            <li>Nur die aktuell benötigten Materialien auf dem Tisch</li>
            <li>Hintergrundmusik: instrumentale Musik in moderatem Tempo kann helfen, manche Kinder brauchen absolute Stille — ausprobieren</li>
          </ul>

          <h3>Hausaufgaben in 10–15 Minuten-Blöcke aufteilen</h3>
          <p>
            Niemals alle Hausaufgaben in einer langen Session erledigen. Stattdessen: eine Aufgabe,
            dann Pause, dann nächste Aufgabe. Was wie mehr Zeit klingt, spart tatsächlich Zeit —
            weil das Kind konzentriert bleibt statt 45 Minuten zu prokrastinieren.
          </p>

          <h3>Belohnungssystem konkret gestalten</h3>
          <p>
            Ein einfaches, wirksames Belohnungssystem: Pro abgeschlossenem Lernblock ein Sticker.
            Nach fünf Stickern eine konkrete Belohnung (30 Minuten Spielzeit, ein Eis, eine gemeinsame
            Aktivität). Das System muss transparent und verlässlich sein — Versprechen müssen eingehalten
            werden, sonst verliert es seine Wirkung.
          </p>

          <h3>Bewegungspausen einplanen</h3>
          <p>
            Bewegung ist bei ADHS kein Luxus, sondern eine neurologische Notwendigkeit. Kurze
            Bewegungseinheiten zwischen Lernblöcken — Hampelmann, kurz auf dem Trampolin, einmal
            ums Haus laufen — verbessern die Aufmerksamkeit messbar. Plant das aktiv ein, statt es
            als Ablenkung zu bekämpfen.
          </p>

          <h2>Rolle digitaler Lernhilfen bei ADHS</h2>
          <p>
            Gut gestaltete Lern-Apps sind für ADHS-Kinder besonders wertvoll, weil sie die
            Prinzipien guter ADHS-Methodik automatisch umsetzen: kurze Einheiten, sofortiges
            Feedback, Gamification, individuelle Anpassung des Schwierigkeitsgrades. Eine App
            ermüdet nie, schämt nie, und gibt immer sofort Rückmeldung.
          </p>
          <p>
            ADHaSi setzt genau auf diese Prinzipien: Der Fokus-Sprint-Modus hält Lerneinheiten
            kurz und überschaubar, die KI passt das Niveau laufend an, und ein sichtbares
            Belohnungssystem hält die Motivation aufrecht — ohne Druck.
          </p>

          <h2>Häufige Fragen zur Lernmethodik bei ADHS</h2>

          <h3>Wie lange sollte ein Kind mit ADHS am Stück lernen?</h3>
          <p>
            Maximal 10–15 Minuten pro Block, dann 5 Minuten Pause. Diese kurzen Einheiten sind
            deutlich wirksamer als lange Lernsessions, weil das Arbeitsgedächtnis bei ADHS schnell
            überlastet und die Konzentration danach rapide abnimmt.
          </p>

          <h3>Was ist die Pomodoro-Technik für Kinder?</h3>
          <p>
            Kurze Lernblöcke mit sichtbarem Timer, gefolgt von definierten Pausen. Für ADHS-Kinder
            besonders wirksam, weil die Zeitstruktur externalisiert wird — das Kind muss sich nicht
            auf sein inneres Zeitgefühl verlassen, das bei ADHS unzuverlässig ist.
          </p>

          <h3>Hilft ein Belohnungssystem bei ADHS?</h3>
          <p>
            Ja, aber nur wenn die Belohnung sofort kommt. Unmittelbares, konkretes Feedback wirkt
            bei ADHS deutlich besser als verzögerte Belohnungen. Kleine, häufige Belohnungen schlagen
            große, seltene.
          </p>

        </div>
      </article>

      {/* Related + App CTA */}
      <div className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-body text-sm text-neutral-500 mb-4">Das könnte Sie auch interessieren:</p>
          <div className="flex flex-wrap gap-3 mb-4">
            <Link href="/ratgeber/adhs-verstehen" className="text-adhasi-green underline text-sm font-semibold">ADHS verstehen</Link>
            <Link href="/ratgeber/digitale-hilfsmittel-adhs" className="text-adhasi-green underline text-sm font-semibold">Digitale Hilfsmittel für ADHS</Link>
            <Link href="/ratgeber/positive-erziehung-bei-lernschwierigkeiten" className="text-adhasi-green underline text-sm font-semibold">Positive Erziehung</Link>
          </div>
          <Link href="/buchempfehlungen" className="block mb-2 text-sm text-neutral-500 hover:text-neutral-700">
            → Mehr dazu in unseren Buchempfehlungen
          </Link>
          <Link href="/app" className="block text-sm text-neutral-500 hover:text-neutral-700">
            → ADHaSi App: Fokus-Sprint und Lernmethodik spielerisch umgesetzt
          </Link>
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
            <Link href="/ratgeber/adhs-verstehen" className="text-adhasi-green font-semibold hover:underline">
              ← ADHS verstehen
            </Link>
            <Link href="/ratgeber/hilfsorganisationen" className="text-adhasi-green font-semibold hover:underline">
              Weiter: Hilfsorganisationen →
            </Link>
          </div>
        </div>
      </div>
      <ArticleInternalLinks />
      <ArticleCTA />
    </>
  )
}
