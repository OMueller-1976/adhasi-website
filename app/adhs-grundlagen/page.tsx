import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ArticleCTA from '@/components/ArticleCTA'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = defaultMetadata({
  title: 'ADHS bei Kindern: Grundlagen, Symptome & Diagnose | ADHaSi',
  description:
    'Was ist ADHS? Neurobiologische Grundlagen, die 3 Subtypen, Diagnose und Behandlung bei Kindern — umfassend erklärt für Eltern und Fachkräfte.',
  path: '/adhs-grundlagen',
})

const tocItems = [
  { id: 'was-ist-adhs', label: 'Was ist ADHS?' },
  { id: 'haeufigkeit', label: 'Wie häufig ist ADHS?' },
  { id: 'subtypen', label: 'Die 3 ADHS-Subtypen' },
  { id: 'symptome-alter', label: 'Symptome nach Alter' },
  { id: 'ursachen', label: 'Ursachen von ADHS' },
  { id: 'diagnose', label: 'Diagnose: Wer, Wie, Wann?' },
  { id: 'behandlung', label: 'Behandlung & Therapie' },
  { id: 'schule', label: 'ADHS und Schule' },
]

const faqs = [
  {
    question: 'Ist ADHS eine Krankheit oder eine Behinderung?',
    answer:
      'ADHS ist eine neurobiologische Entwicklungsbesonderheit, die im ICD-11 als psychische Störung (6A05) klassifiziert wird. Sie ist weder „Willenschwäche" noch eine Folge von Erziehungsfehlern. Viele Betroffene bevorzugen den Begriff „Neurodivergenz", um zu betonen, dass das Gehirn anders — nicht schlechter — funktioniert.',
  },
  {
    question: 'Kann man ADHS im Erwachsenenalter erstmals diagnostiziert bekommen?',
    answer:
      'Ja. ADHS beginnt in der Kindheit, wird aber bei vielen — besonders bei Frauen — erst im Erwachsenenalter erkannt. Voraussetzung für eine Diagnose ist der Nachweis, dass Symptome bereits vor dem 12. Lebensjahr vorhanden waren, auch wenn sie erst später störend aufgefallen sind.',
  },
  {
    question: 'Ist ADHS erblich?',
    answer:
      'Zu 70–80 % hat ADHS eine genetische Komponente — es ist eine der am stärksten erblichen psychischen Störungen überhaupt. Hat ein Elternteil ADHS, liegt die Wahrscheinlichkeit bei ca. 40–50 %, dass das Kind ebenfalls betroffen ist. Bei eineiigen Zwillingen liegt die Konkordanzrate bei über 75 %.',
  },
  {
    question: 'Verwächst sich ADHS?',
    answer:
      'Nicht vollständig. Bei etwa 60–70 % der Kinder bleiben ADHS-Symptome auch im Erwachsenenalter in abgewandelter Form bestehen. Hyperaktivität nimmt häufig ab, während Unaufmerksamkeit und Impulsivität fortbestehen. Mit geeigneten Strategien und ggf. Therapie können Betroffene ein sehr erfülltes Leben führen.',
  },
  {
    question: 'Wer kann eine ADHS-Diagnose stellen?',
    answer:
      'In Deutschland sind Kinder- und Jugendpsychiater sowie Kinder- und Jugendpsychotherapeuten die wichtigsten Anlaufstellen. Auch spezialisierte Kinderärzte und Schulpsychologische Dienste können zur Diagnostik beitragen. Entscheidend ist eine umfassende Anamnese mit Eltern- und Lehrerfragebögen sowie standardisierten Tests wie den Conners-Skalen.',
  },
  {
    question: 'Macht Zucker Kinder hyperaktiver?',
    answer:
      'Nein — dieser weit verbreitete Mythos ist wissenschaftlich widerlegt. Mehr als ein Dutzend kontrollierter Studien haben keinen Zusammenhang zwischen Zuckerkonsum und ADHS-Symptomen gefunden. Der vermeintliche „Zuckereffekt" ist oft auf den Kontext (Partys, festliche Anlässe) zurückzuführen, nicht auf den Zucker selbst.',
  },
  {
    question: 'Was ist der Unterschied zwischen ADS und ADHS?',
    answer:
      'ADS (Aufmerksamkeitsdefizit-Syndrom ohne Hyperaktivität) ist der umgangssprachliche Begriff für den vorwiegend unaufmerksamen ADHS-Subtypen. Im ICD-11 und DSM-5 wird dieser als „ADHS, vorwiegend unaufmerksam" bezeichnet. Die Hyperaktivität fehlt oder tritt kaum in Erscheinung — diese Kinder wirken oft als „Träumer".',
  },
  {
    question: 'Hilft Sport bei ADHS?',
    answer:
      'Ja, erheblich. Sport erhöht den Dopamin- und Noradrenalinspiegel im Gehirn — genau die Neurotransmitter, die bei ADHS unterreguliert sind. Mehrere Studien zeigen, dass regelmäßige körperliche Aktivität (besonders Ausdauersport und Kampfsport) Konzentration, Impulsivität und Selbstregulation deutlich verbessern kann.',
  },
]

export default function AdhsGrundlagenPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'ADHS bei Kindern: Grundlagen, Symptome & Diagnose',
          description:
            'Was ist ADHS? Neurobiologische Grundlagen, die 3 Subtypen, Diagnose und Behandlung bei Kindern — umfassend erklärt für Eltern und Fachkräfte.',
          path: '/adhs-grundlagen',
          datePublished: '2026-04-01',
          dateModified: '2026-04-30',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'ADHS Grundlagen', path: '/adhs-grundlagen' },
        ])}
      />
      <StructuredData data={faqJsonLd(faqs.map((f) => ({ question: f.question, answer: f.answer })))} />

      {/* Header */}
      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-adhasi-green">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-700">ADHS Grundlagen</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🧠</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">15 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            ADHS bei Kindern verstehen: Grundlagen, Symptome & Diagnose
          </h1>
          <p className="font-body text-lg text-neutral-700 leading-relaxed">
            ADHS betrifft 5–10 % aller Schulkinder weltweit. Dieser umfassende Leitfaden erklärt, was hinter der Diagnose steckt,
            welche Symptome auftreten, wie die Diagnose gestellt wird — und was Eltern konkret tun können.
          </p>
        </div>
      </section>

      {/* TOC */}
      <section className="bg-white border-b border-adhasi-border py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-heading text-xs font-bold text-neutral-400 uppercase tracking-wide mb-4">Inhaltsverzeichnis</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-start gap-2 font-body text-sm text-neutral-700 hover:text-adhasi-green transition-colors group"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-surface border border-adhasi-border text-xs flex items-center justify-center text-neutral-500 group-hover:bg-adhasi-green group-hover:text-white group-hover:border-adhasi-green transition-all mt-0.5">
                    {i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-neutral max-w-none">

          {/* Section 1 */}
          <h2 id="was-ist-adhs" className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mt-10 mb-4">
            1. Was ist ADHS?
          </h2>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            ADHS steht für <strong>Aufmerksamkeitsdefizit-Hyperaktivitätsstörung</strong> — eine neurobiologische Entwicklungsstörung, die durch anhaltende Unaufmerksamkeit, Hyperaktivität und Impulsivität gekennzeichnet ist. Die internationale Klassifikation ICD-11 führt ADHS unter dem Code <strong>6A05</strong> als psychische Störung mit frühkindlichem Beginn.
          </p>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            Entgegen weit verbreiteter Missverständnisse ist ADHS keine Modeerscheinung, kein Erziehungsproblem und kein Ausdruck fehlender Disziplin. Es handelt sich um eine gut dokumentierte, neurobiologisch begründete Besonderheit der Gehirnentwicklung, die seit Jahrzehnten intensiv erforscht wird. Der World Federation of ADHD International Consensus Statement (Faraone et al., 2021) fasst 208 evidenzbasierte Schlussfolgerungen zusammen und unterstreicht die biologische Grundlage der Störung.
          </p>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            Im ADHS-Gehirn arbeiten bestimmte Schaltkreise — insbesondere das dopaminerge und noradrenerge System — anders als bei neurotypischen Menschen. Bereiche, die für Planung, Impulskontrolle und Aufmerksamkeitssteuerung zuständig sind (vor allem der präfrontale Kortex und das striatale System), reifen langsamer und kommunizieren weniger effizient. Das Ergebnis: Das Kind hat trotz ausreichender Intelligenz Schwierigkeiten, die eigene Aufmerksamkeit zu lenken, Impulse zu bremsen und Handlungen zu planen.
          </p>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            Wichtig zu verstehen: ADHS-Kinder können sich <em>sehr wohl</em> konzentrieren — wenn ein Thema sie wirklich interessiert (Hyperfokus). Das zeigt, dass kein genereller „Aufmerksamkeitsmangel" vorliegt, sondern ein Problem der Aufmerksamkeits<em>steuerung</em>. Diese Unterscheidung ist entscheidend für das Verständnis und die Förderung.
          </p>
          <p className="font-body text-neutral-700 leading-relaxed mb-6">
            Der Begriff „ADHS" umfasst ein breites Spektrum: Manche Kinder sind vor allem unaufmerksam und verträumt, andere vor allem hyperaktiv und impulsiv, viele beides in Kombination. Dementsprechend unterscheidet das ICD-11 drei Subtypen (dazu mehr in Abschnitt 3).
          </p>

          {/* Section 2 */}
          <h2 id="haeufigkeit" className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            2. Wie häufig ist ADHS bei Kindern?
          </h2>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            ADHS ist eine der häufigsten Entwicklungsstörungen im Kindes- und Jugendalter. Weltweit liegt die Prävalenzrate bei Schulkindern bei <strong>5–7 %</strong>, in einigen Studien bis zu 10 %. In Deutschland sind nach Schätzungen des Robert Koch-Instituts (KiGGS-Studie) etwa <strong>4,8 % der Kinder und Jugendlichen</strong> zwischen 3 und 17 Jahren betroffen — das entspricht rund 500.000 Kindern.
          </p>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            ADHS kommt in allen Kulturen, Ländern und sozialen Schichten vor. Jungen werden etwa <strong>dreimal häufiger diagnostiziert</strong> als Mädchen. Das liegt jedoch nicht daran, dass Jungen biologisch häufiger betroffen wären — bei Mädchen überwiegt oft der unaufmerksame Subtyp, der weniger auffällt und daher seltener erkannt wird. Viele Mädchen mit ADHS erhalten ihre Diagnose erst in der Pubertät oder im Erwachsenenalter.
          </p>
          <p className="font-body text-neutral-700 leading-relaxed mb-6">
            Die DiagnoseRate ist in den letzten Jahren gestiegen — ein Zeichen verbesserter Diagnosemethoden, nicht unbedingt einer echten Zunahme der Störung. Gleichzeitig gibt es weiterhin eine erhebliche Unterversorgung, da gerade in ländlichen Regionen lange Wartezeiten auf spezialisierte Diagnose- und Behandlungsplätze die Hürde darstellen.
          </p>

          {/* Section 3 */}
          <h2 id="subtypen" className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            3. Die 3 ADHS-Subtypen
          </h2>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            Das ICD-11 unterscheidet drei Subtypen von ADHS, die sich in ihren Leitsymptomen unterscheiden:
          </p>

          <div className="space-y-5 mb-6">
            <div className="bg-surface rounded-xl p-5 border border-adhasi-border">
              <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-2">
                Subtyp 1: Vorwiegend unaufmerksam (ICD-11: 6A05.0)
              </h3>
              <p className="font-body text-sm text-neutral-700 leading-relaxed">
                Früher als „ADS" bezeichnet. Kinder dieses Subtyps sind häufig verträumt, vergesslich und schwer zu motivieren. Sie verlieren schnell den Faden, vergessen Hausaufgaben, verlegen Sachen und haben Schwierigkeiten, angefangene Aufgaben zu beenden. Hyperaktivität ist kaum vorhanden — diese Kinder wirken ruhig, manchmal sogar teilnahmslos. Gerade bei Mädchen ist dieser Subtyp häufig und wird lange übersehen.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-5 border border-adhasi-border">
              <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-2">
                Subtyp 2: Vorwiegend hyperaktiv-impulsiv (ICD-11: 6A05.1)
              </h3>
              <p className="font-body text-sm text-neutral-700 leading-relaxed">
                Dieser Subtyp tritt häufiger bei jüngeren Kindern auf. Betroffene sind motorisch sehr unruhig, reden viel, unterbrechen andere, handeln vor dem Denken und haben Schwierigkeiten, zu warten. In der Schule fällt dieser Typ am stärksten auf. Mit zunehmendem Alter entwickelt sich bei vielen dieser Kinder auch eine Unaufmerksamkeitskomponente, sodass sie dann den kombinierten Typ erfüllen.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-5 border border-adhasi-border">
              <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-2">
                Subtyp 3: Kombinierter Typ (ICD-11: 6A05.2) — häufigste Form
              </h3>
              <p className="font-body text-sm text-neutral-700 leading-relaxed">
                Der kombinierte Typ vereint signifikante Unaufmerksamkeit UND Hyperaktivität/Impulsivität. Er ist mit Abstand der häufigste Subtyp und macht etwa 50–75 % aller ADHS-Diagnosen aus. Betroffene Kinder haben gleichzeitig Probleme mit Konzentration, Selbstkontrolle und motorischer Ruhe — und benötigen deshalb oft eine besonders umfassende Unterstützung.
              </p>
            </div>
          </div>
          <p className="font-body text-neutral-700 leading-relaxed mb-6">
            Es ist wichtig zu wissen, dass die Subtypen nicht statisch sind. Viele Kinder wechseln im Laufe der Entwicklung zwischen den Subtypen — was zeigt, dass ADHS ein dynamisches Spektrum ist, kein starres Kategoriesystem.
          </p>

          {/* Section 4 */}
          <h2 id="symptome-alter" className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            4. ADHS-Symptome nach Alter
          </h2>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            ADHS-Symptome verändern sich mit dem Alter — was als ADHS zählt, sieht mit 5 Jahren anders aus als mit 15. Eltern und Fachkräfte müssen die entwicklungsgerechten Ausprägungen kennen:
          </p>

          <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">Vorschulalter (3–6 Jahre)</h3>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            In dieser Phase ist körperliche Unruhe fast immer das erste Warnsignal. Das Kind kann nicht stillsitzen, läuft unkontrolliert, klettert auf alles, wechselt Spielzeug im Minutentakt. Es hat Schwierigkeiten, auf seinen Zug beim Spielen zu warten, handelt impulsiv (greift, schlägt, beißt ohne Vorwarnung) und reagiert auf Grenzsetzungen mit intensiven Wutausbrüchen.
          </p>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            Wichtig: Viel Energie und Impulsivität sind im Vorschulalter normal. Eine ADHS-Diagnose sollte in diesem Alter nur bei sehr ausgeprägten, in mehreren Settings auftretenden Symptomen gestellt werden — und erfordert spezialisierte Fachleute.
          </p>

          <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">Grundschulalter (6–12 Jahre)</h3>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            Mit Schuleintritt werden ADHS-Symptome für die meisten Familien erstmals wirklich problematisch. Die schulischen Anforderungen (längeres Sitzen, Zuhören, Hausaufgaben, Lesen) kollidieren direkt mit den Kernsymptomen. Typische Zeichen:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body text-sm text-neutral-700 mb-4">
            <li>Vergisst Hausaufgaben, verliert Hefte und Stifte regelmäßig</li>
            <li>Beginnt Aufgaben, ohne die Anweisung vollständig gehört zu haben</li>
            <li>Schwierigkeiten beim Lesen (Konzentration bricht weg)</li>
            <li>Unterbricht den Unterricht, ruft rein, kann nicht warten</li>
            <li>Schlechte Frustrationstoleranz bei schwierigen Aufgaben</li>
            <li>Soziale Konflikte durch Impulsivität (andere anstoßen, Grenzen nicht respektieren)</li>
          </ul>

          <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">Sekundarschulstufe (12+ Jahre)</h3>
          <p className="font-body text-neutral-700 leading-relaxed mb-6">
            In der Pubertät rückt Hyperaktivität oft in den Hintergrund — stattdessen dominieren Selbstorganisationsprobleme, emotionale Dysregulation und Prokrastination. Jugendliche mit ADHS haben häufig Schwierigkeiten mit langfristiger Planung (Prüfungsvorbereitung), Zeitmanagement, dem Einhalten von Abgabefristen und der eigenen Stimmungsregulation. Gleichzeitig steigt das Risiko für Sekundärprobleme wie Schulversagen, Depression, Angststörungen und risikoreiche Verhaltensweisen.
          </p>

          {/* Section 5 */}
          <h2 id="ursachen" className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            5. Ursachen von ADHS
          </h2>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            ADHS hat keine einzelne Ursache — es ist ein komplexes Zusammenspiel genetischer und biologischer Faktoren:
          </p>
          <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">Genetik (70–80 %)</h3>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            ADHS gehört zu den am stärksten erblichen psychischen Störungen. Metaanalysen zeigen eine Heritabilität von 70–80 %. Gene, die den Dopamin- und Noradrenalinstoffwechsel regulieren (u. a. DRD4, DAT1, SNAP25), sind besonders betroffen. Hat ein Elternteil ADHS, liegt das Risiko für das Kind bei etwa 40–50 %. Das bedeutet auch: Wenn ein Kind ADHS hat, erkennen Eltern oft zum ersten Mal ihre eigenen früheren Schwierigkeiten.
          </p>
          <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">Neurobiologische Faktoren</h3>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            Bildgebende Studien zeigen strukturelle und funktionelle Unterschiede im ADHS-Gehirn: Der präfrontale Kortex (zuständig für Exekutivfunktionen) ist im Schnitt etwas kleiner und entwickelt sich langsamer. Die Kommunikation zwischen präfrontalem Kortex, Basalganglien und Kleinhirn ist weniger effizient. Das dopaminerge und noradrenerge System arbeitet unterreguliert.
          </p>
          <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">Was ADHS NICHT verursacht</h3>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            Wissenschaftlich widerlegt sind folgende Mythen:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body text-sm text-neutral-700 mb-4">
            <li><strong>Erziehungsfehler:</strong> Eltern verursachen ADHS nicht — auch wenn Erziehungsstil die Symptome verstärken oder abmildern kann.</li>
            <li><strong>Zuckerkonsum:</strong> Mehr als 12 kontrollierte Studien fanden keinen ursächlichen Zusammenhang.</li>
            <li><strong>Zu viel Bildschirmzeit:</strong> Bildschirmzeit kann Symptome verstärken, ist aber keine Ursache für ADHS.</li>
            <li><strong>Zu wenig Strenge:</strong> Mehr Disziplin allein hilft nicht und schadet oft.</li>
          </ul>
          <p className="font-body text-neutral-700 leading-relaxed mb-6">
            Umweltfaktoren wie Frühgeburt, niedriges Geburtsgewicht, pränatale Tabak- oder Alkoholexposition und frühe Stresserfahrungen können das ADHS-Risiko erhöhen — sind aber keine alleinigen Ursachen.
          </p>

          {/* Section 6 */}
          <h2 id="diagnose" className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            6. ADHS-Diagnose: Wer, Wie, Wann?
          </h2>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            Eine ADHS-Diagnose ist kein einfacher Test, sondern ein umfassender diagnostischer Prozess, der mehrere Schritte umfasst:
          </p>
          <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">Wer darf diagnostizieren?</h3>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            In Deutschland sind folgende Fachleute zur ADHS-Diagnose berechtigt: Kinder- und Jugendpsychiater (Facharzt), Kinder- und Jugendpsychotherapeuten, spezialisierte Kinderärzte sowie Schulpsychologischer Dienst (diagnostischer Beitrag, keine Diagnose im medizinischen Sinne). Die Diagnose durch den Kinder- und Jugendpsychiater ist der Goldstandard.
          </p>
          <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">Der Diagnoseprozess</h3>
          <ul className="list-disc pl-6 space-y-2 font-body text-sm text-neutral-700 mb-4">
            <li><strong>Ausführliche Anamnese:</strong> Entwicklungsgeschichte, Symptome, Familiengeschichte, schulische Situation</li>
            <li><strong>Standardisierte Fragebögen:</strong> Conners-Skalen (Eltern- und Lehrerversion), SDQ, CBCL — ausgefüllt von Eltern UND Lehrkräften</li>
            <li><strong>Klinische Beobachtung:</strong> Direktes Gespräch und Beobachtung des Kindes</li>
            <li><strong>Kognitive Tests:</strong> Konzentrations- und Intelligenztests (z. B. WISC-V, d2-R), um ADHS von anderen Ursachen abzugrenzen</li>
            <li><strong>Medizinische Untersuchung:</strong> Ausschluss körperlicher Ursachen (Schilddrüse, Schlafstörungen, Sehprobleme)</li>
          </ul>
          <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">Diagnosekriterien</h3>
          <p className="font-body text-neutral-700 leading-relaxed mb-6">
            Nach ICD-11 müssen Symptome vor dem 12. Lebensjahr aufgetreten sein, in mindestens zwei Lebensbereichen (z. B. Schule und zuhause) vorhanden sein, das Funktionsniveau deutlich beeinträchtigen und durch keine andere Störung besser erklärbar sein. Differentialdiagnosen umfassen Angststörungen, Schlafstörungen, Autismus-Spektrum-Störung und emotionale Belastungsreaktionen.
          </p>

          {/* Section 7 */}
          <h2 id="behandlung" className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            7. ADHS-Behandlung: Therapie, Medikamente & Coaching
          </h2>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            Die DGKJP-Leitlinie (S3-Leitlinie ADHS, 2017) empfiehlt einen <strong>multimodalen Behandlungsansatz</strong> — das bedeutet: Eine Kombination verschiedener Maßnahmen ist wirksamer als jede einzelne Intervention allein.
          </p>
          <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">Verhaltenstherapie</h3>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            Kognitiv-behaviorale Therapie (KBT) ist die erste Wahl bei milden bis mittelschweren ADHS-Symptomen und bei jüngeren Kindern. Sie zielt auf konkrete Alltagsstrategien: Selbstbeobachtung, Belohnungssysteme, Problemlösung, Kommunikation. Elterntraining ist ein gleichwertiger Baustein — Eltern lernen, konsistent, strukturiert und wertschätzend zu reagieren.
          </p>
          <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">Medikamentöse Behandlung</h3>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            Bei mittelschwerem bis schwerem ADHS empfiehlt die S3-Leitlinie Stimulanzien als medikamentöse Erstlinientherapie. <strong>Methylphenidat</strong> (z. B. Ritalin, Concerta, Medikinet) erhöht die Dopamin- und Noradrenalinverfügbarkeit im Gehirn und verbessert bei 70–80 % der Kinder Konzentration, Impulsivität und Selbstregulation. Lisdexamfetamin (Vyvanse) ist eine Alternative bei unzureichender Methylphenidat-Wirkung. Medikamente sind kein Allheilmittel — sie wirken am besten in Kombination mit therapeutischen und pädagogischen Maßnahmen.
          </p>
          <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">Ergotherapie & Coaching</h3>
          <p className="font-body text-neutral-700 leading-relaxed mb-6">
            Ergotherapie verbessert Feinmotorik, Selbstorganisation und Alltagskompetenzen. ADHS-Coaching für ältere Kinder und Jugendliche fokussiert auf Selbstmanagement, Zeitplanung und Zielsetzung. Digitale Lernhilfen wie ADHaSi bieten kurze, gamifizierte Übungseinheiten, die das Training in den Alltag integrieren — ohne zusätzlichen Stress.
          </p>

          {/* Section 8 */}
          <h2 id="schule" className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            8. ADHS und Schule: Nachteilsausgleich, Lehrkräfte & Tipps
          </h2>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            Die Schule ist für viele Kinder mit ADHS der schwierigste Lebensbereich — aber auch der, in dem gezielte Unterstützung den größten Unterschied machen kann.
          </p>
          <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">Nachteilsausgleich</h3>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            In allen deutschen Bundesländern haben Kinder mit ADHS (bei entsprechender Diagnose) Anspruch auf Nachteilsausgleich. Das können sein:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body text-sm text-neutral-700 mb-4">
            <li>Zeitverlängerung bei Klassenarbeiten (häufig 25–50 %)</li>
            <li>Sitzplatz in der Nähe der Lehrkraft</li>
            <li>Aufgaben in Teilschritten präsentiert bekommen</li>
            <li>Pausen während langer Prüfungen</li>
            <li>Individuelle Hausaufgabenpläne</li>
            <li>Notenschutz in bestimmten Bereichen (je nach Bundesland und Diagnose)</li>
          </ul>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            Den Nachteilsausgleich beantragen Eltern schriftlich beim Schulleiter — idealerweise mit ärztlichem Attest und einem konkreten Vorschlag, welche Maßnahmen hilfreich wären. Die Schulpsychologin oder der Schulpsychologe kann dabei unterstützen.
          </p>
          <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">Kommunikation mit Lehrkräften</h3>
          <p className="font-body text-neutral-700 leading-relaxed mb-4">
            Ein offenes, konstruktives Gespräch mit den Lehrkräften ist entscheidend. Hilfreich ist es, die Diagnose frühzeitig mitzuteilen, konkrete Bedürfnisse des Kindes zu benennen (nicht Ausreden) und gemeinsam Strategien zu entwickeln (z. B. Sitzplan, Aufgabenheft, kurze Feedback-Runden). Viele Lehrkräfte sind sehr kooperativ, wenn sie verstehen, dass das Kind nicht böswillig handelt, sondern neurologische Unterstützung braucht.
          </p>
          <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">Praktische Tipps für zu Hause</h3>
          <ul className="list-disc pl-6 space-y-2 font-body text-sm text-neutral-700 mb-6">
            <li>Feste Hausaufgabenzeit — immer zum gleichen Zeitpunkt, mit kurzen Pausen</li>
            <li>Ablenkungsquellen minimieren (Handy weg, leiser Raum)</li>
            <li>Aufgaben in kleinste Schritte unterteilen</li>
            <li>Sofortiges, positives Feedback nach erledigten Aufgaben</li>
            <li>Digitale Lernhilfen wie ADHaSi als motivierende Ergänzung einsetzen</li>
          </ul>

          {/* Sources */}
          <div className="mt-12 pt-8 border-t border-adhasi-border">
            <h2 className="font-heading text-lg font-bold text-neutral-800 mb-4">Quellenangaben</h2>
            <ul className="space-y-2 font-body text-sm text-neutral-500">
              <li>ADHS Deutschland e.V. – <em>Informationen für Eltern und Fachleute</em>. adhs-deutschland.de</li>
              <li>World Health Organization – <em>ICD-11, Kapitel 6A05: ADHS</em>. WHO, 2022.</li>
              <li>Deutsche Gesellschaft für Kinder- und Jugendpsychiatrie – <em>S3-Leitlinie ADHS bei Kindern, Jugendlichen und Erwachsenen</em>. AWMF-Register Nr. 028-045, 2017.</li>
              <li>Faraone, S. V., et al. – <em>The World Federation of ADHD International Consensus Statement</em>. Neuroscience & Biobehavioral Reviews, 128, 2021.</li>
              <li>Döpfner, M., Frölich, J., Lehmkuhl, G. – <em>ADHS — Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung</em>. Hogrefe, 2013.</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="mt-12 pt-8 border-t border-adhasi-border">
            <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">Häufige Fragen zu ADHS Grundlagen</h2>
            <div className="flex flex-col divide-y divide-adhasi-border">
              {faqs.map(({ question, answer }) => (
                <details key={question} className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-heading text-base font-semibold text-neutral-900 gap-4">
                    {question}
                    <span className="flex-shrink-0 w-5 h-5 rounded-full border border-adhasi-border flex items-center justify-center text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                  </summary>
                  <p className="font-body text-neutral-600 text-sm leading-relaxed mt-3">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Internal Links */}
      <section className="bg-surface border-t border-adhasi-border py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-heading text-xs font-bold text-neutral-400 uppercase tracking-wide mb-4">
            Weiterführende Themen
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/adhs-foerderung" className="group flex items-center gap-3 bg-white border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all">
              <span className="text-xl flex-shrink-0">🎯</span>
              <span className="font-body font-semibold text-sm text-neutral-800 group-hover:text-adhasi-green transition-colors">ADHS Förderung</span>
            </Link>
            <Link href="/adhs-eltern-tipps" className="group flex items-center gap-3 bg-white border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all">
              <span className="text-xl flex-shrink-0">💡</span>
              <span className="font-body font-semibold text-sm text-neutral-800 group-hover:text-adhasi-green transition-colors">Eltern-Tipps</span>
            </Link>
            <Link href="/app" className="group flex items-center gap-3 bg-white border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all">
              <span className="text-xl flex-shrink-0">📱</span>
              <span className="font-body font-semibold text-sm text-neutral-800 group-hover:text-adhasi-green transition-colors">ADHaSi App</span>
            </Link>
          </div>
        </div>
      </section>

      <ArticleCTA />
    </>
  )
}
