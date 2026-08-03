import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'
import ArticleInternalLinks from '@/components/ArticleInternalLinks'

export const metadata: Metadata = defaultMetadata({
  title: 'ADHS verstehen: Symptome, Ursachen & Diagnose',
  description:
    'Was ist ADHS? Neurobiologische Grundlagen, die 3 Subtypen, Diagnoseverfahren und häufige Missverständnisse — erklärt für Eltern.',
  path: '/ratgeber/adhs-verstehen',
})

export default function LrsVerstehenPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'ADHS verstehen: Symptome, Ursachen & Diagnose',
          description:
            'Was ist ADHS? Neurobiologische Grundlagen, 3 Subtypen, Diagnose mit Conners-Skalen und häufige Missverständnisse — für Eltern verständlich erklärt.',
          path: '/ratgeber/adhs-verstehen',
          datePublished: '2026-04-01',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Ratgeber', path: '/ratgeber' },
          { name: 'ADHS verstehen', path: '/ratgeber/adhs-verstehen' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          {
            question: 'Ist ADHS heilbar?',
            answer: 'ADHS ist keine Krankheit und daher nicht "heilbar" im medizinischen Sinne. Es ist eine neurobiologische Besonderheit. Mit gezielter Förderung, Therapie und gegebenenfalls Medikation können Symptome deutlich reduziert werden. Viele Erwachsene mit ADHS entwickeln wirksame Strategien und führen erfolgreiche Berufs- und Privatleben.',
          },
          {
            question: 'Welche 3 Subtypen von ADHS gibt es?',
            answer: 'Der vorwiegend unaufmerksame Typ (Träumerkinder, die keine Unruhe zeigen), der vorwiegend hyperaktiv-impulsive Typ (körperlich unruhig, handeln vor dem Denken) und der kombinierte Typ (sowohl Unaufmerksamkeit als auch Hyperaktivität/Impulsivität). Der kombinierte Typ ist am häufigsten.',
          },
          {
            question: 'Ab welchem Alter kann ADHS diagnostiziert werden?',
            answer: 'Eine formale ADHS-Diagnose ist ab dem Vorschulalter möglich, wird in der Praxis aber meist ab dem Grundschulalter gestellt, wenn die Anforderungen an Konzentration und Selbstregulation zunehmen. Die Symptome müssen in mindestens zwei Lebensbereichen (z. B. Schule und zuhause) auftreten.',
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
            <span className="text-neutral-700">ADHS verstehen</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🧠</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">8 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            ADHS verstehen: Symptome, Ursachen & Diagnose
          </h1>
          <p className="font-body text-lg text-neutral-700">
            ADHS betrifft 5–10 % aller Schulkinder — und wird trotzdem oft missverstanden,
            spät erkannt und falsch behandelt. Dieser Artikel erklärt, was wirklich dahinter steckt.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2>Was ist ADHS?</h2>
          <p>
            ADHS steht für <strong>Aufmerksamkeitsdefizit-Hyperaktivitätsstörung</strong>. Es handelt
            sich um eine neurobiologische Entwicklungsstörung, die die Fähigkeit zur Steuerung von
            Aufmerksamkeit, Impulsen und motorischer Aktivität betrifft. Die Weltgesundheitsorganisation
            (WHO) klassifiziert ADHS im ICD-11 unter dem Code <strong>6A05</strong>.
          </p>
          <p>
            Wichtig: ADHS ist kein Erziehungsfehler, keine Faulheit und kein Zeichen von Intelligenzproblemen.
            Es ist eine anerkannte Störung mit neurobiologischer Grundlage — und eine der am besten
            erforschten psychiatrischen Diagnosen des Kindesalters.
          </p>

          <h2>Wie häufig ist ADHS?</h2>
          <p>
            Aktuelle Studien gehen davon aus, dass <strong>5 bis 10 % aller Schulkinder</strong> von
            einer klinisch relevanten ADHS betroffen sind. In Deutschland sind das schätzungsweise
            <strong> rund 800.000 Kinder und Jugendliche</strong>. In einer durchschnittlichen Schulklasse
            mit 25 Kindern sitzt damit statistisch mindestens ein bis zwei Kinder mit ADHS.
          </p>
          <p>
            ADHS tritt in allen Gesellschaftsschichten auf und ist unabhängig von Intelligenz oder
            sozialem Umfeld. Jungen werden häufiger diagnostiziert als Mädchen — Mädchen zeigen jedoch
            oft den unaufmerksamen Subtyp, der weniger auffällig ist und dadurch öfter übersehen wird.
          </p>

          <h2>Was passiert im Gehirn bei ADHS?</h2>
          <p>
            Der Schlüssel liegt im <strong>Dopamin- und Noradrenalinsystem</strong>. Diese Botenstoffe
            sind entscheidend für die Steuerung von Aufmerksamkeit, Motivation und Impulskontrolle.
            Bei Kindern mit ADHS ist die Regulation dieser Systeme verändert — besonders im präfrontalen
            Kortex, dem Teil des Gehirns, der für Planung, Selbststeuerung und Impulskontrolle zuständig ist.
          </p>
          <p>
            Konkret führt das zu Schwierigkeiten bei:
          </p>
          <ul>
            <li>
              <strong>Arbeitsgedächtnis:</strong> Informationen kurzfristig halten und verwenden —
              z. B. eine mehrstufige Aufgabe bis zum Ende im Kopf behalten.
            </li>
            <li>
              <strong>Inhibition (Impulskontrolle):</strong> Automatische Reaktionen hemmen —
              z. B. warten, bevor man antwortet, oder aufhören zu spielen, wenn es Zeit ist.
            </li>
            <li>
              <strong>Zeitwahrnehmung:</strong> ADHS-Kinder leben oft im „Jetzt" — Zeitgefühl und
              Vorausplanung fallen neurobiologisch bedingt schwer.
            </li>
            <li>
              <strong>Belohnungsaufschub:</strong> Auf spätere Belohnungen hinarbeiten ist schwieriger
              als bei Kindern ohne ADHS. Sofortige Belohnungen wirken deutlich stärker.
            </li>
          </ul>
          <p>
            Bildgebungsstudien (fMRT) zeigen messbare Unterschiede in der Aktivierung und Struktur
            des präfrontalen Kortex, der Basalganglien und des Kleinhirns.
          </p>

          <h2>Die 3 Subtypen von ADHS</h2>
          <p>
            ADHS ist kein einheitliches Bild. Das DSM-5 und ICD-11 unterscheiden drei Subtypen:
          </p>

          <h3>1. Vorwiegend unaufmerksamer Typ</h3>
          <p>
            Diese Kinder wirken oft wie „Träumer". Sie fallen wenig auf, stören den Unterricht
            nicht — und werden deshalb oft spät erkannt. Typisch: Aufgaben werden begonnen aber
            nicht beendet, Details übersehen, Sachen verloren, leicht abgelenkt durch Gedanken.
            Besonders Mädchen werden häufig diesem Subtyp zugeordnet.
          </p>

          <h3>2. Vorwiegend hyperaktiv-impulsiver Typ</h3>
          <p>
            Diese Kinder sind körperlich sehr unruhig, reden viel, handeln bevor sie denken,
            können schwer warten. Sie unterbrechen Gespräche, rennen in gefährliche Situationen,
            stehen mitten im Unterricht auf. Dieser Typ wird am häufigsten und frühzeitigsten erkannt.
          </p>

          <h3>3. Kombinierter Typ (häufigster)</h3>
          <p>
            Sowohl Unaufmerksamkeit als auch Hyperaktivität und Impulsivität sind deutlich ausgeprägt.
            Dies ist der am häufigsten diagnostizierte Subtyp und zeigt das breiteste Spektrum
            an Herausforderungen im Schulalltag.
          </p>

          <h2>Symptome nach Alter</h2>
          <p>
            ADHS zeigt sich unterschiedlich, je nach Entwicklungsstand. Was im Vorschulalter
            als extreme Unruhe auffällt, verlagert sich im Jugendalter oft zu innerer Unruhe
            und Planungsschwäche.
          </p>

          <h3>Im Vorschulalter (3–6 Jahre)</h3>
          <ul>
            <li>Extreme Unruhe — kann nicht ruhig sitzen, rennt ständig</li>
            <li>Impulsive Handlungen ohne Nachdenken (andere schlagen, weglaufen)</li>
            <li>Rasche Stimmungswechsel und niedrige Frustrationstoleranz</li>
            <li>Schwierigkeiten beim Warten (in der Schlange, Spiele mit Regeln)</li>
            <li>Sehr kurze Aufmerksamkeitsspanne, außer bei Lieblingsaktivitäten</li>
          </ul>

          <h3>In der Grundschule (6–12 Jahre)</h3>
          <ul>
            <li>Hausaufgaben werden begonnen aber nicht beendet — Ablenkung durch alles</li>
            <li>Verlieren von Schulmaterial, Vergessen von Aufgaben</li>
            <li>Impulsive Zwischenrufe im Unterricht, schwer mit Warten</li>
            <li>Konflikte mit Mitschülern durch Impulsivität</li>
            <li>Großer Aufwand für kleine schulische Ergebnisse — Erschöpfung nach der Schule</li>
            <li>„Weiß ich doch alles" — Überschätzung der eigenen Leistung (Selbstwahrnehmungsproblem)</li>
          </ul>

          <h3>In der Sekundarschule (ab Klasse 5)</h3>
          <ul>
            <li>Planung und Organisation komplexer Aufgaben scheitert</li>
            <li>Prokrastination — Aufgaben werden bis zur letzten Minute aufgeschoben</li>
            <li>Innere Unruhe statt körperlicher (Hyperaktivität wird weniger sichtbar)</li>
            <li>Risikoverhalten, Konflikte mit Autoritäten</li>
            <li>Sekundäre Folgen: Angststörungen, Depression, geringes Selbstwertgefühl</li>
          </ul>

          <h2>Ursachen von ADHS</h2>
          <p>
            ADHS ist multifaktoriell — mehrere Faktoren spielen zusammen:
          </p>
          <h3>Genetische Faktoren</h3>
          <p>
            ADHS hat eine der stärksten genetischen Komponenten aller psychiatrischen Diagnosen.
            Zwillingsstudien zeigen eine Heritabilität von <strong>70–80 %</strong>. Wenn ein Elternteil
            ADHS hat, ist die Wahrscheinlichkeit für das Kind deutlich erhöht. Mehrere Kandidatengene
            wurden identifiziert — vor allem Gene, die das Dopamin- und Noradrenalinsystem regulieren
            (z. B. DRD4, DAT1, DRD5).
          </p>
          <h3>Neurologische Faktoren</h3>
          <p>
            Bildgebende Studien zeigen, dass bei Kindern mit ADHS der präfrontale Kortex langsamer
            reift — im Durchschnitt um ca. 3 Jahre. Das Gehirn holt diese Entwicklung oft nach,
            was erklärt, warum ADHS-Symptome bei manchen Menschen im Erwachsenenalter abnehmen.
          </p>
          <h3>Umweltfaktoren</h3>
          <p>
            Frühgeburtlichkeit, niedriges Geburtsgewicht, Nikotinexposition in der Schwangerschaft
            und frühe Traumata können das ADHS-Risiko erhöhen — können aber eine genetische Disposition
            nicht allein auslösen oder verhindern.
          </p>

          <h2>Diagnose: Wie wird ADHS festgestellt?</h2>
          <p>
            Die ADHS-Diagnose ist ein mehrstufiger Prozess und wird von <strong>Kinder- und Jugendpsychiatern,
            -psychologen oder dem Schulpsychologischen Dienst</strong> durchgeführt.
          </p>
          <p>
            Ein vollständiges Diagnoseverfahren umfasst:
          </p>
          <ul>
            <li>
              <strong>Standardisierte Fragebögen</strong> (z. B. Conners-Skalen, SDQ, DISYPS) —
              Eltern, Lehrkräfte und das Kind selbst bewerten das Verhalten in verschiedenen Situationen
            </li>
            <li>
              <strong>Strukturiertes klinisches Interview</strong> — ausführliche Exploration der
              Entwicklungsgeschichte, Symptomatik und Beeinträchtigung
            </li>
            <li>
              <strong>Leistungsdiagnostik</strong> — Aufmerksamkeitstests (z. B. Testbatterie zur
              Aufmerksamkeitsprüfung für Kinder, KiTAP) zur objektiven Messung
            </li>
            <li>
              <strong>Ausschluss anderer Ursachen</strong> — Hör- und Sehprobleme, Schilddrüsenerkrankungen,
              Angststörungen, Schlafstörungen oder andere Erklärungen für die Symptome
            </li>
            <li>
              <strong>Verhaltensbeobachtung</strong> — direkte Beobachtung des Kindes in verschiedenen
              Situationen
            </li>
          </ul>
          <p>
            Für die Diagnose müssen die Symptome in <strong>mindestens zwei Lebensbereichen</strong> (z. B.
            Schule und Zuhause) auftreten und eine deutliche Beeinträchtigung verursachen. Eine formale
            Diagnose ist Voraussetzung für Nachteilsausgleiche in der Schule.
          </p>

          <h2>Häufige Missverständnisse über ADHS</h2>
          <ul>
            <li>
              <strong>„Das Kind ist einfach faul."</strong> — Falsch. Kinder mit ADHS strengen sich
              oft überdurchschnittlich an — für im Vergleich schlechtere Ergebnisse. Der neurologische
              Aufwand für Aufmerksamkeitsregulation ist erheblich größer.
            </li>
            <li>
              <strong>„Das wächst sich aus."</strong> — Teilweise. Hyperaktivität nimmt oft ab, aber
              Unaufmerksamkeit und Impulskontrollschwäche bleiben häufig bis ins Erwachsenenalter bestehen.
              Unbehandelte ADHS hat nachgewiesene Folgen für Schulabschluss, Beziehungen und Beruf.
            </li>
            <li>
              <strong>„Mit Disziplin und Strenge geht das."</strong> — Falsch. ADHS ist neurobiologisch —
              kein Verhalten, das durch stärkere Disziplin wegtrainiert werden kann. Strenge ohne Verständnis
              verschlimmert die Situation durch zusätzlichen Stress und Scham.
            </li>
            <li>
              <strong>„ADHS gibt es nur bei Jungs."</strong> — Falsch. Mädchen haben oft den unaufmerksamen
              Subtyp, werden seltener diagnostiziert und suchen deshalb erst als Erwachsene Hilfe.
            </li>
            <li>
              <strong>„Medikamente machen Kinder zu Zombies."</strong> — Überholt. Moderne ADHS-Medikation
              (Methylphenidat, Atomoxetin) ist gut erforscht und verbessert bei richtiger Dosierung die
              Selbstregulation ohne Persönlichkeitsveränderung.
            </li>
          </ul>

          <h2>Externe Ressourcen</h2>
          <ul>
            <li>
              <a href="https://www.adhs-deutschland.de" target="_blank" rel="noopener noreferrer">ADHS Deutschland e. V.</a> — Größter Selbsthilfeverband mit Beratungsstellensuche
            </li>
            <li>
              <a href="https://www.zentrales-adhs-netz.de" target="_blank" rel="noopener noreferrer">Zentrales ADHS-Netz</a> — Evidenzbasierte Informationen zu Diagnostik und Therapie
            </li>
          </ul>

          <h2>Was tun bei Verdacht auf ADHS?</h2>
          <ol>
            <li>
              <strong>Lehrkraft ansprechen</strong> — Konkrete Beobachtungen schildern (welche Situationen,
              wie häufig, seit wann). Um schulinterne Beobachtung und Förderdiagnostik bitten.
            </li>
            <li>
              <strong>Schulpsychologischen Dienst kontaktieren</strong> — Kostenlose Erstberatung und
              Diagnostik, meist über die Schule vermittelbar.
            </li>
            <li>
              <strong>Kinderarzt einschalten</strong> — Ausschluss organischer Ursachen, Überweisung an
              Kinder- und Jugendpsychiatrie oder -psychologie.
            </li>
            <li>
              <strong>Struktur zuhause einführen</strong> — Parallel zur Diagnose können bereits
              strukturierende Maßnahmen helfen: feste Routinen, klare Regeln, visuelle Tagesplanung.
            </li>
          </ol>

          <h2>Häufige Fragen zu ADHS</h2>

          <h3>Ist ADHS heilbar?</h3>
          <p>
            ADHS ist keine Krankheit und nicht „heilbar" im medizinischen Sinne. Es ist eine neurobiologische
            Besonderheit. Mit Förderung, Therapie und ggf. Medikation können Symptome deutlich reduziert
            werden. Viele Erwachsene mit ADHS entwickeln wirksame Strategien und führen erfolgreiche Leben.
          </p>

          <h3>Welche 3 Subtypen von ADHS gibt es?</h3>
          <p>
            Der vorwiegend unaufmerksame Typ (Träumerkinder), der vorwiegend hyperaktiv-impulsive Typ
            (körperliche Unruhe, handeln vor dem Denken) und der kombinierte Typ (beides ausgeprägt).
            Der kombinierte Typ ist am häufigsten diagnostiziert.
          </p>

          <h3>Ab welchem Alter kann ADHS diagnostiziert werden?</h3>
          <p>
            Formal ist eine Diagnose ab dem Vorschulalter möglich. In der Praxis wird sie meist
            im Grundschulalter gestellt, wenn Anforderungen an Konzentration und Selbstregulation
            deutlich zunehmen. Symptome müssen in mindestens zwei Lebensbereichen auftreten.
          </p>

        </div>
      </article>

      {/* Related + App CTA */}
      <div className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-body text-sm text-neutral-500 mb-4">Das könnte Sie auch interessieren:</p>
          <div className="flex flex-wrap gap-3 mb-4">
            <Link href="/ratgeber/lernmethodik" className="text-adhasi-green underline text-sm font-semibold">Lernmethodik bei ADHS</Link>
            <Link href="/ratgeber/hilfsorganisationen" className="text-adhasi-green underline text-sm font-semibold">Hilfsorganisationen</Link>
            <Link href="/ratgeber/selbstwert-staerken" className="text-adhasi-green underline text-sm font-semibold">Selbstwert stärken</Link>
          </div>
          <Link href="/buchempfehlungen" className="block mb-2 text-sm text-neutral-500 hover:text-neutral-700">
            → Mehr dazu in unseren Buchempfehlungen
          </Link>
          <Link href="/app" className="block text-sm text-neutral-500 hover:text-neutral-700">
            → ADHaSi App: Förderung spielerisch umgesetzt
          </Link>
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
            <Link href="/ratgeber" className="text-adhasi-green font-semibold hover:underline">
              ← Alle Ratgeber-Artikel
            </Link>
            <Link href="/ratgeber/lernmethodik" className="text-adhasi-green font-semibold hover:underline">
              Weiter: Lernmethodik bei ADHS →
            </Link>
          </div>
        </div>
      </div>
      <ArticleInternalLinks />
      <ArticleCTA />
    </>
  )
}
