import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'

export const metadata: Metadata = defaultMetadata({
  title: 'ADHS Alltag: Tipps für Eltern – Routine, Hausaufgaben & mehr | ADHaSi',
  description:
    'Praktische ADHS-Tipps für den Elternalltag: Tagesroutine, Hausaufgaben, Morgenroutine, Schlaf, Ernährung und Schulkommunikation.',
  path: '/adhs-eltern-tipps',
})

export default function AdhsElternTippsPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'ADHS Alltag: Tipps für Eltern – Routine, Hausaufgaben & mehr',
          description: 'Tagesroutine, Hausaufgaben, Morgenroutine, Schlaf und Schulkommunikation — praktische Strategien für Eltern von ADHS-Kindern.',
          path: '/adhs-eltern-tipps',
          datePublished: '2026-04-01',
          dateModified: '2026-04-30',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'ADHS Tipps für Eltern', path: '/adhs-eltern-tipps' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Wie schaffe ich eine Tagesroutine für mein ADHS-Kind?', answer: 'Feste, visuelle Routinen helfen am meisten: Bildkarten oder Checklisten für Morgen- und Abendroutine, Lernzeit immer zur gleichen Uhrzeit, klare Übergänge mit Vorwarnung (z. B. Timer). Routinen müssen konsequent eingehalten werden — auch am Wochenende.' },
          { question: 'Was tun wenn mein ADHS-Kind Hausaufgaben verweigert?', answer: 'Nicht eskalieren. Kurze Pause einlegen, dann ruhig zurückkehren. Aufgaben auf ein erreichbares Minimum reduzieren. 20-Wörter-Diktat auf 5 Wörter kürzen ist keine Niederlage — es ist ADHS-gerechte Förderplanung.' },
          { question: 'Wie lange sollte ein ADHS-Kind Hausaufgaben machen?', answer: 'Faustregel: Klassenstufe × 5 Minuten mit Pausen. Ein Drittklässler: 15 Minuten Konzentration, dann 5 Minuten Pause, dann nochmals 15 Minuten. Übers Ziel hinaus zu arbeiten erzeugt keine besseren Ergebnisse — nur mehr Frust.' },
          { question: 'Warum schläft mein ADHS-Kind so schlecht?', answer: 'Schlafstörungen sind bei ADHS sehr häufig — bis zu 70 % betroffen. Das ADHS-Gehirn hat Schwierigkeiten, abends runterzuregulieren (verzögerter Melatonin-Anstieg). Feste Einschlafzeit, Bildschirmverzicht 60 Minuten vor dem Schlafen und Entspannungsrituale helfen nachweislich.' },
          { question: 'Hilft Ernährung bei ADHS wirklich?', answer: 'Die Evidenz für spezifische Diäten ist schwach. Omega-3-Fettsäuren (Fisch, Leinöl) zeigen in Meta-Analysen eine moderate positive Wirkung auf ADHS-Symptome. Zuckerverzicht allein ist nicht belegt. Allgemein gesunde Ernährung mit ausreichend Protein und Mikronährstoffen unterstützt aber Konzentration und Wohlbefinden.' },
          { question: 'Wie oft sollte ich mit der Lehrerin über ADHS sprechen?', answer: 'Mindestens zu Schuljahresbeginn, nach dem ersten Zeugnis und bei Ereignissen. Kurze, sachliche Updates per E-Mail (max. 3 Zeilen) funktionieren oft besser als lange Gesprächsanfragen. Ziel ist ein kooperatives Verhältnis, kein Eltern-gegen-Schule.' },
          { question: 'Was ist Eltern-Selbstfürsorge bei ADHS und warum ist sie wichtig?', answer: 'Eltern von ADHS-Kindern haben signifikant höhere Stressbelastung als Eltern neurotypischer Kinder. Eigene Erschöpfung überträgt sich auf das Kind. Regelmäßige Pausen, Austausch in Elterngruppen (z. B. ADHS Deutschland e.V.) und ggf. eigene Beratung schützen die Beziehungsqualität.' },
          { question: 'Wie erkläre ich Geschwistern, dass ihr Bruder/ihre Schwester ADHS hat?', answer: 'Altersgerecht und konkret: "Dein Bruder hat ein Gehirn, das manche Dinge schwerer findet als du — und andere Dinge leichter. Deshalb bekommt er manchmal andere Regeln." Geschwister brauchen auch Aufmerksamkeit außerhalb des ADHS-Kontexts und eigene Einzelzeit mit den Eltern.' },
        ])}
      />

      {/* Header */}
      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">ADHS Tipps für Eltern</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💡</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">16 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            ADHS im Alltag: Praktische Tipps für Eltern
          </h1>
          <p className="font-body text-lg text-neutral-600">
            Von der Morgenroutine bis zum Einschlafen — wie Eltern den Alltag mit ADHS strukturieren,
            ohne täglich zu kämpfen. Praxiserprobte Strategien auf Basis aktueller ADHS-Forschung.
          </p>
        </div>
      </section>

      {/* TOC */}
      <nav aria-label="Inhaltsverzeichnis" className="bg-white border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Inhaltsverzeichnis</p>
          <ol className="flex flex-col gap-1.5 text-sm text-adhasi-green font-semibold">
            <li><a href="#tagesroutine" className="hover:underline">1. Tagesroutine & Struktur</a></li>
            <li><a href="#hausaufgaben" className="hover:underline">2. Hausaufgaben ohne Kampf</a></li>
            <li><a href="#morgenroutine" className="hover:underline">3. Die Morgenroutine</a></li>
            <li><a href="#schlaf" className="hover:underline">4. Schlaf und Einschlafen</a></li>
            <li><a href="#ernaehrung-bewegung" className="hover:underline">5. Ernährung und Bewegung</a></li>
            <li><a href="#geschwister-familie" className="hover:underline">6. Geschwister und Familie</a></li>
            <li><a href="#schulkommunikation" className="hover:underline">7. Kommunikation mit der Schule</a></li>
            <li><a href="#eltern-selbstfuersorge" className="hover:underline">8. Selbstfürsorge für Eltern</a></li>
          </ol>
        </div>
      </nav>

      {/* Article */}
      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2 id="tagesroutine">Tagesroutine & Struktur</h2>
          <p>
            Das ADHS-Gehirn braucht externe Struktur, weil die interne Selbstregulation
            neurobiologisch schwächer ausgeprägt ist. Vorhersehbare Abläufe reduzieren die
            kognitive Last des Entscheidens: Das Kind muss nicht täglich neu aushandeln,
            wann es was macht. Das spart Energie — für Lernen und Konzentration.
          </p>

          <h3>Grundprinzipien einer ADHS-gerechten Tagesstruktur</h3>
          <ul>
            <li><strong>Feste Zeiten:</strong> Aufstehen, Essen, Lernzeit, Freizeit, Schlafenszeit — immer zur gleichen Uhrzeit, auch am Wochenende.</li>
            <li><strong>Visuelle Unterstützung:</strong> Tagesplan als Bildkarte oder Checkliste, die das Kind selbst abhaken kann. Digitaluhren mit Countdowns sind besonders hilfreich.</li>
            <li><strong>Übergänge ankündigen:</strong> 10 Minuten vorher und 5 Minuten vorher warnen: "In 10 Minuten machen wir die Hausaufgaben." Unangekündigte Unterbrechungen sind für ADHS-Kinder besonders schwierig.</li>
            <li><strong>Pufferzeit einplanen:</strong> Alles dauert länger. Morgenroutine 15 Minuten früher beginnen als notwendig — nicht weil das Kind schlecht ist, sondern weil das Zeitgefühl bei ADHS neurologisch beeinträchtigt ist.</li>
          </ul>

          <h3>Der Wochenplan</h3>
          <p>
            Ein sichtbarer Wochenplan (Whiteboard oder gerahmtes Blatt an der Wand) gibt dem
            Kind Orientierung über die nächsten Tage. Besondere Termine werden farbig markiert.
            Das reduziert Überraschungen und die damit verbundene emotionale Dysregulation.
          </p>
          <p>
            Für weitere Alltagsstrategien und den Umgang mit Schulfrust:
            <Link href="/ratgeber"> ADHS Ratgeber für Eltern</Link>.
          </p>

          <h2 id="hausaufgaben">Hausaufgaben ohne Kampf</h2>
          <p>
            Hausaufgaben sind für viele Familien mit ADHS-Kindern der größte Alltagskonfliktherd.
            Das ist verständlich: Hausaufgaben verlangen genau die Fähigkeiten, die bei ADHS am
            schwierigsten sind — Selbststartfähigkeit, Ausdauer bei schwierigen Aufgaben und
            Impulskontrolle.
          </p>

          <h3>Der optimale Hausaufgaben-Rahmen</h3>
          <ul>
            <li><strong>Feste Zeit:</strong> Immer zur gleichen Uhrzeit, 30–45 Minuten nach Schulschluss. Nicht sofort nach der Schule (Erholung nötig), nicht abends (Konzentration schlechter).</li>
            <li><strong>Ruhiger Ort:</strong> Eigener Platz, kein Bildschirm in Sichtweite, kein lauter Hintergrund. Manche Kinder konzentrieren sich besser mit leiser instrumentaler Musik (Forschungslage gemischt — ausprobieren).</li>
            <li><strong>Aufgaben priorisieren:</strong> Schwerste Aufgaben zuerst, wenn die Konzentration noch frisch ist. Routineaufgaben (Lesen üben) ans Ende.</li>
            <li><strong>Timer nutzen:</strong> 15 Minuten arbeiten, 5 Minuten Pause — Pomodoro-Technik, angepasst für Kinder. Der Timer gibt Kontrolle zurück: Das Kind weiß, wann Pause ist.</li>
          </ul>

          <h3>Was Eltern vermeiden sollten</h3>
          <p>
            Jeden Schritt begleiten und sofort eingreifen signalisiert: "Ich traue dir das alleine
            nicht zu." Aufgaben erklären — dann das Zimmer verlassen. Auf Nachfrage zurückkommen,
            nicht aus eigenem Antrieb. Das baut Selbstwirksamkeit auf.
          </p>
          <p>
            Bei kompletter Verweigerung: nicht eskalieren. Kurze Auszeit ("Wir machen in 10 Minuten
            weiter"), dann ruhig zurückkehren. Aufgabenumfang reduzieren wenn nötig — 5 Wörter üben
            ist besser als 0 Wörter nach einem Kampf.
          </p>

          <h3>Wie lange Hausaufgaben dauern sollten</h3>
          <p>
            Faustregel: Klassenstufe × 5 Minuten Konzentration, dann Pause. Klasse 3: 15 Minuten
            arbeiten, 5 Minuten Pause. Klasse 6: 30 Minuten arbeiten, 10 Minuten Pause. Was darüber
            hinausgeht, erzeugt in der Regel keinen Lerneffekt mehr — nur Erschöpfung und Frust.
          </p>

          <h2 id="morgenroutine">Die Morgenroutine</h2>
          <p>
            Morgende mit ADHS-Kindern sind oft chaotisch: Das Kind findet seine Schuhe nicht,
            vergisst das Frühstück und kommt trotz frühzeitigem Aufwachen zu spät. Das ist kein
            schlechter Wille — es ist die neurobiologische Schwäche im Zeitgefühl und der
            Handlungsplanung.
          </p>

          <h3>Die Morgenroutine-Karte</h3>
          <p>
            Eine laminierte Karte oder ein Poster mit 6–8 Bildern für die Morgenroutine:
            Aufstehen → Toilette → Anziehen → Frühstück → Zähneputzen → Schulranzen checken →
            Jacke an → Raus. Jeder Schritt wird abgehakt. Das Kind braucht keine Anweisungen —
            es folgt der Karte.
          </p>
          <ul>
            <li><strong>Abend vorbereiten:</strong> Schulranzen packen, Kleidung herrichten — alles am Vorabend. So reduziert der Morgen sich auf Ausführen statt Planen.</li>
            <li><strong>Früh genug aufstehen:</strong> ADHS-Kinder brauchen mehr Zeit. Wecker 20 Minuten früher als eigentlich nötig.</li>
            <li><strong>Kein Bildschirm am Morgen:</strong> Bildschirme aktivieren das Belohnungssystem und erschweren den Wechsel zur nächsten Aufgabe enorm. Konsequent vermeiden bis nach der Schule.</li>
          </ul>

          <h3>Frühstück und kein Frühstück</h3>
          <p>
            Viele ADHS-Kinder, die Methylphenidat nehmen, haben morgens wenig Appetit
            (Appetitunterdrückung als Nebenwirkung). Kleines, nährstoffreiches Frühstück
            ist besser als keines — Vollkornbrot, Ei oder Nussbutter liefern länger anhaltende
            Energie als Zucker-Cerealien.
          </p>

          <h2 id="schlaf">Schlaf und Einschlafen</h2>
          <p>
            Schlafstörungen sind bei Kindern mit ADHS sehr häufig — Studien schätzen die
            Prävalenz auf 50–70 %. Die Ursachen sind neurobiologisch: Das ADHS-Gehirn
            produziert abends verzögert Melatonin, der interne "Schlaf-an"-Schalter reagiert
            langsamer.
          </p>

          <h3>Häufige Schlafprobleme bei ADHS</h3>
          <ul>
            <li><strong>Einschlafschwierigkeiten:</strong> Das Kind kann abends nicht abschalten, obwohl es müde ist.</li>
            <li><strong>Unruhiger Schlaf:</strong> Häufiges Aufwachen, Sprechen im Schlaf, motorische Unruhe.</li>
            <li><strong>Aufwachschwierigkeiten:</strong> Morgens extrem schwer aus dem Bett — trotz ausreichend Stunden Schlaf.</li>
          </ul>

          <h3>Was hilft</h3>
          <ul>
            <li><strong>Feste Schlafenszeit:</strong> Täglich, auch am Wochenende. Abweichungen von mehr als 30 Minuten stören den zirkadianen Rhythmus.</li>
            <li><strong>Bildschirmverzicht:</strong> 60–90 Minuten vor dem Schlafen kein Bildschirm. Blaues Licht unterdrückt Melatonin — bei ADHS-Kindern, die ohnehin später ausschütten, besonders problematisch.</li>
            <li><strong>Entspannungsritual:</strong> Immer dieselbe Abfolge: Baden/Duschen → Lesen → Lichter aus. Das Ritual signalisiert dem Gehirn: Schlaf kommt.</li>
            <li><strong>Kühles, dunkles Zimmer:</strong> 18–20 °C, Verdunkelungsvorhänge.</li>
            <li><strong>Melatonin:</strong> In niedrigen Dosen (0,5–1 mg, 30 Min vor Schlafenszeit) gut belegt für ADHS-bedingte Einschlafschwierigkeiten. Immer mit dem Kinderarzt besprechen.</li>
          </ul>

          <h2 id="ernaehrung-bewegung">Ernährung und Bewegung</h2>

          <h3>Ernährung bei ADHS</h3>
          <p>
            Die Evidenz für spezifische ADHS-Diäten ist begrenzt. Die häufig behauptete
            Zuckertheorie ("Zucker macht Kinder hyperaktiv") gilt als wissenschaftlich
            nicht haltbar — Studien zeigen keinen Kausalzusammenhang.
          </p>
          <p>
            Was die Forschung unterstützt:
          </p>
          <ul>
            <li><strong>Omega-3-Fettsäuren:</strong> Meta-Analysen zeigen moderate positive Effekte auf Aufmerksamkeit und Impulsivität. Fettreicher Fisch (Lachs, Makrele), Leinsamen, Walnüsse — oder EPA/DHA-Supplement.</li>
            <li><strong>Ausreichend Protein:</strong> Protein hält den Blutzucker stabil und fördert die Dopaminproduktion. Frühstück und Mittagessen mit Protein-Anteil.</li>
            <li><strong>Mikronährstoffe:</strong> Eisenmangel und Zinkmangel sind bei ADHS-Kindern häufiger als in der Allgemeinbevölkerung und können Symptome verstärken. Bei Verdacht: Blutbild durch den Kinderarzt.</li>
          </ul>

          <h3>Bewegung bei ADHS</h3>
          <p>
            Bewegung ist eine der wirksamsten nicht-pharmakologischen Interventionen bei ADHS.
            Aerobes Training (Laufen, Schwimmen, Radfahren) erhöht Dopamin- und Noradrenalinspiegel
            — die gleichen Neurotransmitter, die Methylphenidat beeinflusst.
          </p>
          <p>
            Praktisch bedeutet das: 30 Minuten Sport vor den Hausaufgaben verbessert die
            Konzentrationsfähigkeit messbar. Sportvereine, Kletterparks oder einfaches
            Draußenspielen — die Aktivität ist zweitrangig, Regelmäßigkeit zählt.
          </p>

          <h2 id="geschwister-familie">Geschwister und Familie</h2>
          <p>
            ADHS ist eine Familiendiagnose — nicht nur das betroffene Kind, sondern das
            gesamte Familiensystem ist betroffen. Geschwister brauchen besondere Aufmerksamkeit,
            damit die erhöhte elterliche Beschäftigung mit dem ADHS-Kind nicht als Ungleichheit
            erlebt wird.
          </p>

          <h3>Geschwister erklären und einbeziehen</h3>
          <p>
            Altersgerecht erklären: "Dein Bruder hat ein Gehirn, das manche Dinge schwerer findet
            als du — und andere Dinge leichter. Deshalb bekommt er manchmal andere Regeln. Das
            ist nicht unfair, das ist wie beim Brillenträger: Er bekommt eine Brille, du nicht,
            weil du sie nicht brauchst."
          </p>
          <p>
            Geschwister brauchen:
          </p>
          <ul>
            <li>Eigene, ungeteilte Aufmerksamkeit der Eltern — regelmäßige Einzelzeit</li>
            <li>Das Recht, eigene Probleme einzubringen, die nicht mit ADHS zu tun haben</li>
            <li>Keine Erwartung, "Rücksicht zu nehmen" — das überfordert auf Dauer</li>
          </ul>

          <h3>Paardynamik und Elternkonsistenz</h3>
          <p>
            ADHS-Kinder sind Meister im Herausfinden, welcher Elternteil nachgibt. Eltern müssen
            konsistent dieselben Regeln anwenden — was schwierig ist, wenn Erschöpfung die
            Geduld mindert. Regelmäßige kurze Absprachen ("Was machen wir bei Hausaufgabenverweigerung?")
            reduzieren Situationskonflikte erheblich.
          </p>

          <h2 id="schulkommunikation">Kommunikation mit der Schule</h2>
          <p>
            Die Beziehung zwischen Eltern und Schule kann ein ADHS-Kind enorm unterstützen —
            oder erheblich belasten. Ziel ist ein sachliches, kooperatives Verhältnis: Eltern
            als Experten für ihr Kind, Lehrkraft als Expertin für Lernstrategien.
          </p>

          <h3>Das Erstgespräch zu Schuljahresbeginn</h3>
          <p>
            Proaktiv ein kurzes Gespräch zu Beginn des Schuljahres anbieten — nicht um sich zu
            beschweren, sondern um zu informieren: "Unser Kind hat ADHS. Hier sind drei Dinge,
            die ihm helfen: [konkreter Sitzplatz, Timer, kurze Aufgabeneinheiten]. Und hier ist,
            was wir zuhause tun."
          </p>
          <ul>
            <li>Kurze schriftliche Zusammenfassung mitgeben (A4, 5 Punkte)</li>
            <li>Nachteilsausgleich ansprechen falls noch nicht beantragt</li>
            <li>Ansprechpartner klären: Wer ist bei Schwierigkeiten der erste Kontakt?</li>
          </ul>

          <h3>Laufende Kommunikation</h3>
          <p>
            Kurze E-Mails (max. 3–4 Zeilen) funktionieren besser als lange Gesprächsanfragen.
            Positives ansprechen wenn möglich: "Danke, dass Sie sich die Zeit genommen haben für..."
            Eltern, die ausschließlich mit Problemen auf Lehrkräfte zukommen, werden unbewusst
            anders behandelt als Eltern, die auch Kooperation signalisieren.
          </p>

          <h3>Wenn die Schule nicht kooperiert</h3>
          <p>
            Falls eine Schule trotz Diagnose und Antrag keinen Nachteilsausgleich gewährt, können
            Schulpsychologischer Dienst oder Schulamt eingeschaltet werden. Eltern haben formale
            Rechte — ruhige, dokumentierte Kommunikation ist dabei wirkungsvoller als Eskalation.
          </p>
          <p>
            Ausführliche Informationen zu Therapie und Förderung in der Schule:
            <Link href="/adhs-foerderung"> ADHS Förderung: Methoden & Therapie</Link>.
          </p>

          <h2 id="eltern-selbstfuersorge">Selbstfürsorge für Eltern</h2>
          <p>
            Eltern von Kindern mit ADHS berichten signifikant höhere Stressniveaus, mehr
            Erschöpfung und häufigere Partnerschaftskonflikte als Eltern neurotypischer Kinder.
            Das ist keine Schwäche — es ist die realistische Folge einer dauerhaft anspruchsvollen
            Situation.
          </p>

          <h3>Warum Selbstfürsorge keine Selbstsucht ist</h3>
          <p>
            Erschöpfte Eltern reagieren gereizter, konsistenter in Worten, inkonsistenter in
            Konsequenzen. Das verstärkt ADHS-Symptome. Eigene Erholung ist keine Luxus-Option —
            es ist eine Fördermaßnahme für das Kind.
          </p>

          <h3>Praktische Selbstfürsorge</h3>
          <ul>
            <li><strong>Elterngruppen:</strong> ADHS Deutschland e.V. bietet regionale Selbsthilfegruppen für Eltern. Der Austausch mit Menschen in derselben Situation ist oft wirksamer als professionelle Beratung — und kostenlos.</li>
            <li><strong>Eigene Beratung:</strong> Erziehungsberatungsstellen sind kostenlos und helfen auch Eltern, eigene Muster zu erkennen.</li>
            <li><strong>Paarzeit:</strong> Regelmäßig Zeit als Paar — ohne Kinder, ohne ADHS als Thema. Selbst 90 Minuten pro Woche machen einen messbaren Unterschied für die Beziehungsqualität.</li>
            <li><strong>Realistische Erwartungen:</strong> Kein Familienleben mit ADHS sieht aus wie in Familienratgebern. Das Ziel ist Funktionieren und Verbindung — nicht Perfektion.</li>
          </ul>

          <h3>ADHS-Diagnose bei einem Elternteil</h3>
          <p>
            ADHS ist stark vererblich. Häufig haben ein oder beide Elternteile selbst ADHS —
            diagnostiziert oder nicht. Falls eigene Konzentrationsprobleme oder Organisationsprobleme
            bekannt sind: Erwachsenendiagnose und ggf. Behandlung kann die Erziehungsrolle
            erheblich erleichtern.
          </p>

        </div>
      </article>

      {/* Sources */}
      <section className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-lg font-bold text-neutral-800 mb-4">Wissenschaftliche Quellen</h2>
          <ol className="flex flex-col gap-2 text-sm text-neutral-600 font-body">
            <li className="pl-6 relative"><span className="absolute left-0 text-adhasi-green font-bold">1.</span>Barkley, R. A. (2015). <em>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment (4th ed.).</em> Guilford Press.</li>
            <li className="pl-6 relative"><span className="absolute left-0 text-adhasi-green font-bold">2.</span>Döpfner, M., Frölich, J., & Lehmkuhl, G. (2013). <em>ADHS — Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung.</em> Hogrefe Verlag.</li>
            <li className="pl-6 relative"><span className="absolute left-0 text-adhasi-green font-bold">3.</span>Sung, V., et al. (2014). Melatonin for sleep problems in children with neurodevelopmental disorders: randomised double-masked placebo-controlled trial. <em>BMJ, 350</em>, g6763.</li>
            <li className="pl-6 relative"><span className="absolute left-0 text-adhasi-green font-bold">4.</span>Halperin, J. M., & Healey, D. M. (2011). The influences of environmental enrichment, cognitive enhancement, and physical exercise on brain development. <em>Neuroscience & Biobehavioral Reviews, 35(3)</em>, 621–634.</li>
            <li className="pl-6 relative"><span className="absolute left-0 text-adhasi-green font-bold">5.</span>Johnston, C., & Mash, E. J. (2001). Families of children with attention-deficit/hyperactivity disorder: Review and recommendations for future research. <em>Clinical Child and Family Psychology Review, 4(3)</em>, 183–207.</li>
          </ol>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-10 bg-white border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">Häufige Fragen zum ADHS-Alltag</h2>
          <div className="flex flex-col divide-y divide-adhasi-border">
            {[
              { q: 'Wie schaffe ich eine Tagesroutine für mein ADHS-Kind?', a: 'Feste, visuelle Routinen helfen am meisten: Bildkarten oder Checklisten für Morgen- und Abendroutine, Lernzeit immer zur gleichen Uhrzeit, klare Übergänge mit Vorwarnung (z. B. Timer). Routinen müssen konsequent eingehalten werden — auch am Wochenende.' },
              { q: 'Was tun, wenn mein ADHS-Kind Hausaufgaben verweigert?', a: 'Nicht eskalieren. Kurze Pause einlegen, dann ruhig zurückkehren. Aufgaben auf ein erreichbares Minimum reduzieren. 20-Wörter-Diktat auf 5 Wörter kürzen ist keine Niederlage — es ist ADHS-gerechte Förderplanung.' },
              { q: 'Wie lange sollte ein ADHS-Kind Hausaufgaben machen?', a: 'Faustregel: Klassenstufe × 5 Minuten mit Pausen. Ein Drittklässler: 15 Minuten Konzentration, dann 5 Minuten Pause, dann nochmals 15 Minuten. Übers Ziel hinaus zu arbeiten erzeugt keine besseren Ergebnisse — nur mehr Frust.' },
              { q: 'Warum schläft mein ADHS-Kind so schlecht?', a: 'Schlafstörungen sind bei ADHS sehr häufig — bis zu 70 % betroffen. Das ADHS-Gehirn hat Schwierigkeiten, abends runterzuregulieren (verzögerter Melatonin-Anstieg). Feste Einschlafzeit, Bildschirmverzicht 60 Minuten vor dem Schlafen und Entspannungsrituale helfen nachweislich.' },
              { q: 'Hilft Ernährung bei ADHS wirklich?', a: 'Die Evidenz für spezifische Diäten ist schwach. Omega-3-Fettsäuren zeigen in Meta-Analysen eine moderate positive Wirkung. Zuckerverzicht allein ist nicht belegt. Allgemein gesunde Ernährung mit ausreichend Protein und Mikronährstoffen unterstützt aber Konzentration.' },
              { q: 'Wie erkläre ich Geschwistern, dass ihr Bruder/ihre Schwester ADHS hat?', a: 'Altersgerecht und konkret: "Dein Bruder hat ein Gehirn, das manche Dinge schwerer findet als du — und andere Dinge leichter. Deshalb bekommt er manchmal andere Regeln." Geschwister brauchen auch eigene Aufmerksamkeit außerhalb des ADHS-Kontexts.' },
              { q: 'Wie oft sollte ich mit der Lehrerin über ADHS sprechen?', a: 'Mindestens zu Schuljahresbeginn, nach dem ersten Zeugnis und bei Ereignissen. Kurze, sachliche Updates per E-Mail (max. 3–4 Zeilen) funktionieren oft besser als lange Gesprächsanfragen.' },
              { q: 'Was ist Eltern-Selbstfürsorge bei ADHS und warum ist sie wichtig?', a: 'Eltern von ADHS-Kindern haben signifikant höhere Stressbelastung. Erschöpfung überträgt sich auf das Kind. Regelmäßige Pausen, Austausch in Elterngruppen (z. B. ADHS Deutschland e.V.) und ggf. eigene Beratung schützen die Beziehungsqualität.' },
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
      </section>

      {/* Internal Links to other pillar pages */}
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
              <p className="font-body text-xs text-neutral-500 mt-0.5">Therapie, Methoden & was hilft</p>
            </Link>
            <Link href="/app" className="bg-white border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all group">
              <span className="text-2xl block mb-1">📱</span>
              <span className="font-heading text-sm font-bold text-neutral-900 group-hover:text-adhasi-green">ADHaSi App</span>
              <p className="font-body text-xs text-neutral-500 mt-0.5">Digitale Lernhilfe testen</p>
            </Link>
          </div>
        </div>
      </section>

      <ArticleCTA />
    </>
  )
}
