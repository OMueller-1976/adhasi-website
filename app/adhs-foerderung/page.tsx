import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'

export const metadata: Metadata = defaultMetadata({
  title: 'ADHS Förderung: Methoden, Therapie & was wirklich hilft | ADHaSi',
  description:
    'ADHS Förderung für Kinder: Verhaltenstherapie, Medikamente, Ergotherapie und digitale Lernhilfen im Vergleich — was die Wissenschaft empfiehlt.',
  path: '/adhs-foerderung',
})

export default function AdhsForederungPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'ADHS Förderung: Methoden, Therapie & was wirklich hilft',
          description: 'Verhaltenstherapie, Medikamente, Ergotherapie und digitale Lernhilfen bei ADHS — Überblick über evidenzbasierte Förderansätze für Kinder.',
          path: '/adhs-foerderung',
          datePublished: '2026-04-01',
          dateModified: '2026-04-30',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'ADHS Förderung', path: '/adhs-foerderung' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Welche Therapien helfen bei ADHS wirklich?', answer: 'Laut aktueller Forschung (Cortese et al., 2018) sind Methylphenidat bei Kindern und Verhaltenstherapie die wirksamsten Einzelinterventionen. Die größte Wirkung zeigt die Kombination aus Medikamenten, Verhaltenstherapie und Elterntraining — das nennt man multimodale Therapie.' },
          { question: 'Ist Verhaltenstherapie bei ADHS wirksam ohne Medikamente?', answer: 'Ja — besonders bei leichteren Verläufen, jüngeren Kindern und wenn Elterntraining einbezogen wird. Bei schweren Symptomen ist die Kombination mit Methylphenidat in der Regel wirksamer. Die Entscheidung liegt beim behandelnden Kinder- und Jugendpsychiater.' },
          { question: 'Ab welchem Alter dürfen ADHS-Medikamente gegeben werden?', answer: 'Methylphenidat (Ritalin, Concerta) ist ab 6 Jahren zugelassen. Amphetamin-Präparate gelten als Second-Line-Option. Bei Kindern unter 6 Jahren steht das Elterntraining im Vordergrund.' },
          { question: 'Was ist Ergotherapie bei ADHS?', answer: 'Ergotherapie bei ADHS trainiert Handlungsplanung, Impulskontrolle und Alltagsorganisation durch konkrete Aktivitäten. Sie hilft Kindern, Aufgaben zu strukturieren und abzuschließen — ein Bereich, der durch neurobiologische ADHS-Muster besonders schwer fällt.' },
          { question: 'Hilft ADHS-Coaching für Kinder?', answer: 'ADHS-Coaching ist kein Ersatz für Therapie, ergänzt sie aber sinnvoll. Es trainiert konkrete Alltagsfertigkeiten: Zeitplanung, Aufgabenmanagement, Selbstregulation. Für ältere Kinder (ab 10 Jahren) und Jugendliche ist es besonders wirksam.' },
          { question: 'Kann eine App ADHS-Kinder wirklich fördern?', answer: 'Digitale Lernhilfen können Selbststeuerung und Konzentration trainieren, wenn sie auf ADHS-Prinzipien ausgelegt sind: kurze Einheiten, sofortiges Feedback, spielerische Elemente und Fortschrittsanzeigen. Sie ersetzen keine Therapie, sind aber wirksame Ergänzung im Alltag.' },
          { question: 'Was ist multimodale Therapie bei ADHS?', answer: 'Multimodale Therapie kombiniert mehrere Ansätze: Medikamente, Verhaltenstherapie, Elterntraining, schulische Förderung und ggf. Ergotherapie. Die S3-Leitlinie der DGKJP empfiehlt diesen Ansatz als Goldstandard bei mittelschwerer bis schwerer ADHS.' },
          { question: 'Wer bezahlt ADHS-Therapie in Deutschland?', answer: 'Verhaltenstherapie und Ergotherapie mit ärztlicher Verordnung werden von der gesetzlichen Krankenversicherung übernommen. Medikamente bei gesicherter ADHS-Diagnose ebenfalls. Coaching und digitale Lernhilfen sind meist Eigenleistung.' },
        ])}
      />

      {/* Header */}
      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">ADHS Förderung</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🌱</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">14 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            ADHS Förderung bei Kindern: Methoden & Therapie
          </h1>
          <p className="font-body text-lg text-neutral-600">
            Welche Förderung wirklich hilft — und welche nicht. Ein evidenzbasierter Überblick
            über Verhaltenstherapie, Medikamente, Ergotherapie und digitale Lernhilfen bei ADHS.
          </p>
        </div>
      </section>

      {/* TOC */}
      <nav aria-label="Inhaltsverzeichnis" className="bg-white border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Inhaltsverzeichnis</p>
          <ol className="flex flex-col gap-1.5 text-sm text-adhasi-green font-semibold">
            <li><a href="#warum-besondere-foerderung" className="hover:underline">1. Warum brauchen ADHS-Kinder besondere Förderung?</a></li>
            <li><a href="#verhaltenstherapie" className="hover:underline">2. Verhaltenstherapie bei ADHS</a></li>
            <li><a href="#medikamente" className="hover:underline">3. Medikamentöse Behandlung</a></li>
            <li><a href="#ergotherapie" className="hover:underline">4. Ergotherapie und Motopädagogik</a></li>
            <li><a href="#coaching" className="hover:underline">5. ADHS-Coaching</a></li>
            <li><a href="#digitale-lernhilfen" className="hover:underline">6. Digitale Lernhilfen</a></li>
            <li><a href="#schule-nachteilsausgleich" className="hover:underline">7. Schule und Nachteilsausgleich</a></li>
            <li><a href="#multimodale-therapie" className="hover:underline">8. Multimodale Therapie</a></li>
          </ol>
        </div>
      </nav>

      {/* Article */}
      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2 id="warum-besondere-foerderung">Warum brauchen ADHS-Kinder besondere Förderung?</h2>
          <p>
            ADHS ist keine Frage der Intelligenz oder des Willens. Die Störung basiert auf
            neurobiologischen Unterschieden in der Dopamin- und Noradrenalin-Verarbeitung —
            vor allem im präfrontalen Kortex, der Arbeitsgedächtnis, Impulskontrolle und
            Planung steuert. Das Gehirn von Kindern mit ADHS reguliert Aufmerksamkeit und
            Motivation anders als das von Kindern ohne ADHS.
          </p>
          <p>
            Konventionelle Lernumgebungen — lange Sitzzeiten, lineare Aufgaben, verzögerte
            Belohnung — sind auf ein neurotypisches Gehirn ausgerichtet. Kinder mit ADHS
            brauchen deshalb Förderansätze, die auf ihre spezifischen neuronalen Bedürfnisse
            eingehen: häufiges Feedback, kurze Einheiten, sofortige Konsequenzen und
            strukturierte Handlungsplanung.
          </p>
          <p>
            Eine verzögerte oder fehlende Förderung hat messbare Konsequenzen: schlechtere
            Schulleistungen, niedrigeres Selbstwertgefühl, höheres Risiko für Schulabbruch
            und komorbide Erkrankungen wie Angststörungen oder Depression. Frühe, gezielte
            Förderung macht einen nachweisbaren Unterschied — und je früher, desto besser.
          </p>
          <p>
            Mehr zu den neurobiologischen Grundlagen und Diagnosekriterien findet ihr in unserem
            Grundlagen-Artikel: <Link href="/adhs-grundlagen">ADHS verstehen: Grundlagen, Symptome & Diagnose</Link>.
          </p>

          <h2 id="verhaltenstherapie">Verhaltenstherapie bei ADHS</h2>
          <p>
            Kognitive Verhaltenstherapie (KVT) ist neben Medikamenten die am besten untersuchte
            Interventionsform bei ADHS. Meta-Analysen belegen ihre Wirksamkeit auf Kernsymptome —
            insbesondere in Kombination mit Elterntraining.
          </p>

          <h3>Wie funktioniert Verhaltenstherapie bei ADHS?</h3>
          <p>
            KVT bei ADHS arbeitet auf mehreren Ebenen:
          </p>
          <ul>
            <li><strong>Selbstinstruktion:</strong> Das Kind lernt, innere Selbstgespräche zu nutzen, um Aufgaben zu strukturieren und Impulsivität zu bremsen.</li>
            <li><strong>Problemlösestrategien:</strong> Systematische Techniken, um Aufgaben zu gliedern und Hindernisse vorherzusehen.</li>
            <li><strong>Selbstüberwachung:</strong> Das Kind lernt, eigenes Verhalten zu beobachten und zu bewerten — eine Kompetenz, die bei ADHS neurobiologisch schwieriger ist.</li>
            <li><strong>Token-Systeme:</strong> Sofortige, konkrete Belohnungen für erwünschtes Verhalten — besonders wirksam, weil das ADHS-Gehirn verzögerte Belohnungen schlechter verarbeitet.</li>
          </ul>

          <h3>Elterntraining als zentraler Baustein</h3>
          <p>
            Eines der stärksten Evidenzfelder bei ADHS-Therapie ist das Elterntraining. Programme
            wie THOP (Therapieprogramm für Kinder mit hyperkinetischer und oppositioneller Störung)
            zeigen, dass Eltern, die lernen, konsistent auf das Verhalten ihres Kindes zu reagieren,
            die Kernsymptome erheblich reduzieren können — ohne Medikamente.
          </p>
          <p>
            Elterntraining umfasst: klare Regeln und Konsequenzen, positives Feedback für
            erwünschtes Verhalten, Vorhersehbarkeit im Alltag und den Umgang mit Eskalationen.
            Der Schulpsychologische Dienst oder Erziehungsberatungsstellen bieten oft kostenlose
            Einführungen an.
          </p>

          <h3>Wo findet man Verhaltenstherapie für ADHS-Kinder?</h3>
          <p>
            Kinder- und Jugendlichenpsychotherapeuten mit dem Schwerpunkt Verhaltenstherapie.
            Kassenärztliche Vereinigung, ADHS Deutschland e.V. oder die Kinder- und
            Jugendpsychiatrie der nächsten Uniklinik bieten Beratung zur Therapeutensuche.
            Wartezeiten können lang sein — Frühzeitig anfangen.
          </p>

          <h2 id="medikamente">Medikamentöse Behandlung</h2>
          <p>
            Medikamentöse Behandlung ist bei ADHS kein Tabu — sie ist eine der wirksamsten
            Interventionen, die die Wissenschaft kennt. Die Entscheidung für oder gegen
            Medikamente liegt immer beim behandelnden Facharzt und den Eltern — nie bei
            Lehrern oder Beratungsstellen.
          </p>

          <h3>Methylphenidat — der Goldstandard</h3>
          <p>
            Methylphenidat (MPH, bekannte Marken: Ritalin, Concerta, Medikinet) ist die
            erstlinige medikamentöse Option bei Kindern ab 6 Jahren. Es blockiert die
            Wiederaufnahme von Dopamin und Noradrenalin im synaptischen Spalt — das
            verbessert Signalweiterleitung im präfrontalen Kortex.
          </p>
          <p>
            Die Wirkung ist gut belegt: In der Netzwerk-Meta-Analyse von Cortese et al.
            (2018, Lancet Psychiatry) war Methylphenidat bei Kindern das wirksamste
            einzelne Mittel bei ADHS-Kernsymptomen. Kurz wirksame Formulierungen
            (Ritalin) wirken 4–5 Stunden; retardierte Formen (Concerta, Medikinet retard)
            8–12 Stunden.
          </p>

          <h3>Amphetamine und Nicht-Stimulanzien</h3>
          <p>
            Als Second-Line-Option stehen Lisdexamfetamin (Elvanse) und Atomoxetin
            (Strattera) zur Verfügung. Atomoxetin ist ein Nicht-Stimulanz und wirkt über
            die Noradrenalin-Wiederaufnahmehemmung — es ist besonders bei komorbider
            Angststörung eine Option. Die Wirkung tritt erst nach 4–6 Wochen ein.
          </p>

          <h3>Was Medikamente nicht tun</h3>
          <p>
            Medikamente reduzieren Kernsymptome — sie vermitteln keine Fertigkeiten. Ein Kind,
            das unter Methylphenidat besser konzentriert ist, hat noch nicht gelernt, Aufgaben
            zu planen oder Impulse zu steuern. Deshalb ist die Kombination mit Verhaltenstherapie
            und schulischer Förderung entscheidend.
          </p>
          <p>
            Mögliche Nebenwirkungen (Appetitminderung, Schlafprobleme, leichte Stimmungsveränderungen)
            werden in der Praxis engmaschig beobachtet. Bei Bedenken immer den behandelnden
            Arzt ansprechen — Dosisanpassungen sind häufig nötig und möglich.
          </p>

          <h2 id="ergotherapie">Ergotherapie und Motopädagogik</h2>
          <p>
            Ergotherapie ist bei ADHS ein häufig verordneter Baustein — und wissenschaftlich
            sinnvoll, wenn sie auf konkrete Alltagsfertigkeiten ausgerichtet ist.
          </p>

          <h3>Was Ergotherapie bei ADHS trainiert</h3>
          <ul>
            <li><strong>Handlungsplanung (Praxie):</strong> Aufgaben in Schritte zerlegen, die richtige Reihenfolge planen und ausführen.</li>
            <li><strong>Arbeitsgedächtnis-Strategien:</strong> Externe Hilfsmittel (Checklisten, Erinnerungen) nutzen, um das schwächere Arbeitsgedächtnis zu kompensieren.</li>
            <li><strong>Selbstregulation:</strong> Erregungsniveau wahrnehmen und regulieren — z. B. durch sensorische Techniken oder Atemübungen.</li>
            <li><strong>Motorische Koordination:</strong> Viele ADHS-Kinder zeigen auch motorische Auffälligkeiten (DCD — Developmental Coordination Disorder). Ergotherapie adressiert beide Bereiche.</li>
          </ul>

          <h3>Motopädagogik</h3>
          <p>
            Motopädagogik kombiniert Bewegung und Lernen — besonders geeignet für jüngere
            ADHS-Kinder, die über Körpererfahrung lernen. Übungen in Gleichgewicht,
            Körperschema und rhythmischer Bewegung fördern gleichzeitig Konzentration
            und Selbststeuerung.
          </p>
          <p>
            Ergotherapie wird mit ärztlicher Verordnung von der Krankenkasse übernommen.
            Kinder- und Jugendärzte oder Kinder- und Jugendpsychiater stellen die Verordnung aus.
          </p>

          <h2 id="coaching" >ADHS-Coaching</h2>
          <p>
            ADHS-Coaching ist kein Ersatz für Therapie, aber ein wertvolles Ergänzungsangebot —
            besonders für Schulkinder ab 9 Jahren und Jugendliche.
          </p>

          <h3>Was Coaching leistet</h3>
          <p>
            Während Verhaltenstherapie auf Symptome und Komorbidität fokussiert, richtet sich
            Coaching auf konkrete Alltagsfertigkeiten und Ziele: Hausaufgabenplanung,
            Zeitmanagement, Prüfungsvorbereitung, Selbstmotivation. Ein guter ADHS-Coach
            arbeitet lösungsorientiert, nicht problemfokussiert.
          </p>
          <ul>
            <li>Tagesstruktur und To-Do-Systeme entwickeln</li>
            <li>Prokrastination erkennen und überwinden</li>
            <li>Stärken identifizieren und gezielt einsetzen</li>
            <li>Umgang mit Frustration und Rückschlägen</li>
          </ul>

          <h3>Coaching vs. Nachhilfe</h3>
          <p>
            ADHS-Coaching ist nicht Nachhilfe. Es geht nicht darum, Aufgaben zu erledigen —
            sondern darum, Systeme zu entwickeln, mit denen das Kind Aufgaben selbst erledigen
            kann. Wer Coaching mit Nachhilfe verwechselt, schafft Abhängigkeit statt
            Selbstwirksamkeit.
          </p>
          <p>
            ADHS-Coaching ist in der Regel keine Kassenleistung. Einige Jugendhilfemaßnahmen
            (§ 35a SGB VIII) können es abdecken — Erziehungsberatungsstellen beraten dazu.
          </p>

          <h2 id="digitale-lernhilfen">Digitale Lernhilfen</h2>
          <p>
            Apps und digitale Tools können ADHS-Kinder effektiv fördern — wenn sie auf die
            neurobiologischen Besonderheiten ausgelegt sind. Nicht jede Lern-App ist dafür
            geeignet.
          </p>

          <h3>Was eine gute ADHS-Lernhilfe ausmacht</h3>
          <ul>
            <li><strong>Kurze Einheiten:</strong> 5–10 Minuten statt 30–45 Minuten. Das ADHS-Gehirn braucht häufige Erfolgserlebnisse, keine langen Sitzungen.</li>
            <li><strong>Sofortiges Feedback:</strong> Jede Aufgabe wird direkt bewertet. Verzögerte Rückmeldung wirkt beim ADHS-Gehirn nicht motivierend.</li>
            <li><strong>Sichtbarer Fortschritt:</strong> Fortschrittsanzeigen, Abzeichen, Levels — Visualisierungen helfen dem Gehirn, Anstrengung mit Ergebnis zu verknüpfen.</li>
            <li><strong>Adaptivität:</strong> Aufgaben passen sich dem Niveau an — weder zu einfach (langweilig) noch zu schwer (frustrierend).</li>
          </ul>

          <h3>ADHaSi App</h3>
          <p>
            Die <Link href="/app">ADHaSi App</Link> wurde speziell für Kinder mit ADHS entwickelt:
            Fokus-Sprints von 5 Minuten, KI-gestützte Aufgaben, die das Niveau automatisch
            anpassen, und ein Eltern-Dashboard, das Lernfortschritte transparent macht.
            Das Ergebnis: Kinder üben regelmäßig — ohne Schuldruck.
          </p>

          <h2 id="schule-nachteilsausgleich">Schule und Nachteilsausgleich</h2>
          <p>
            Schule ist für ADHS-Kinder der tägliche Hauptbelastungsort. Neben therapeutischen
            Maßnahmen ist schulische Förderung deshalb unverzichtbar.
          </p>

          <h3>Nachteilsausgleich</h3>
          <p>
            Mit einer formalen ADHS-Diagnose haben Kinder in Deutschland Anspruch auf
            Nachteilsausgleich. Konkret bedeutet das:
          </p>
          <ul>
            <li><strong>Verlängerte Prüfungszeit</strong> — typischerweise 25–50 % mehr Zeit</li>
            <li><strong>Bewegungspausen</strong> während Klassenarbeiten</li>
            <li><strong>Ruhiger Sitzplatz</strong> mit weniger Ablenkung, ggf. separater Raum</li>
            <li><strong>Aufgabenunterteilung</strong> — große Aufgaben in Teilschritte</li>
            <li><strong>Mündliche statt schriftliche Prüfungen</strong>, wenn sinnvoll</li>
          </ul>

          <h3>Förderpläne</h3>
          <p>
            Schulen sind verpflichtet, bei Bedarf individuelle Förderpläne zu erstellen.
            Diese legen fest, welche Maßnahmen im Unterricht gelten und wie Fortschritte
            überprüft werden. Eltern haben das Recht, an der Erstellung beteiligt zu sein.
          </p>

          <h3>Zusammenarbeit mit Lehrkräften</h3>
          <p>
            Eltern, Therapeuten und Schule sollten regelmäßig kommunizieren. Ein kurzes
            Elterngespräch zu Schuljahresbeginn, in dem die wichtigsten ADHS-Strategien
            besprochen werden, kann den Jahresverlauf erheblich verbessern. Praktische Tipps
            für den Alltag findet ihr in unserem Ratgeber:
            <Link href="/adhs-eltern-tipps"> ADHS im Alltag: Tipps für Eltern</Link>.
          </p>

          <h2 id="multimodale-therapie">Multimodale Therapie</h2>
          <p>
            Die S3-Leitlinie der Deutschen Gesellschaft für Kinder- und Jugendpsychiatrie
            (DGKJP) empfiehlt bei mittelschwerer bis schwerer ADHS das <strong>multimodale
            Therapiekonzept</strong> — die Kombination mehrerer Ansätze.
          </p>

          <h3>Was multimodal bedeutet</h3>
          <p>
            Multimodale Therapie verbindet:
          </p>
          <ul>
            <li>Verhaltenstherapie (Kind + Elterntraining)</li>
            <li>Medikamentöse Behandlung (wenn indiziert)</li>
            <li>Schulische Maßnahmen (Nachteilsausgleich, Förderplan)</li>
            <li>Ergotherapie (falls motorische oder Planungsdefizite vorliegen)</li>
            <li>Psychoedukation für Kind und Familie</li>
          </ul>

          <h3>Warum Kombination wirksamer ist</h3>
          <p>
            Jeder Baustein adressiert andere Ebenen: Medikamente verbessern die neuronale
            Signalübertragung, Verhaltenstherapie vermittelt Strategien, Elterntraining
            verändert das häusliche Umfeld, Schule schafft strukturierte Bedingungen.
            Zusammen ergibt sich ein Wirkungsgrad, den keine Einzelmaßnahme erreicht.
          </p>
          <p>
            Die MTA-Studie (Multimodal Treatment Study of Children with ADHD) — eine
            der größten ADHS-Studien überhaupt — zeigte, dass multimodale Therapie
            bei allen Outcome-Maßen besser abschnitt als medikamentöse Behandlung
            oder Verhaltenstherapie allein.
          </p>

          <h3>Wie man multimodale Therapie koordiniert</h3>
          <p>
            Die Koordination übernimmt idealerweise ein Kinder- und Jugendpsychiater, der
            alle Maßnahmen überblickt und aufeinander abstimmt. Allgemeinärzte und
            Kinderärzte sind oft der erste Ansprechpartner, verweisen aber in der Regel
            für die Gesamtkoordination an spezialisierte Fachärzte.
          </p>

        </div>
      </article>

      {/* Sources */}
      <section className="bg-surface py-8 border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-lg font-bold text-neutral-800 mb-4">Wissenschaftliche Quellen</h2>
          <ol className="flex flex-col gap-2 text-sm text-neutral-600 font-body">
            <li className="pl-6 relative"><span className="absolute left-0 text-adhasi-green font-bold">1.</span>Cortese, S., et al. (2018). Comparative efficacy and tolerability of medications for ADHD in children, adolescents, and adults. <em>The Lancet Psychiatry, 5(9)</em>, 727–738.</li>
            <li className="pl-6 relative"><span className="absolute left-0 text-adhasi-green font-bold">2.</span>Deutsche Gesellschaft für Kinder- und Jugendpsychiatrie (2017). <em>S3-Leitlinie ADHS bei Kindern, Jugendlichen und Erwachsenen.</em> AWMF-Register Nr. 028-045.</li>
            <li className="pl-6 relative"><span className="absolute left-0 text-adhasi-green font-bold">3.</span>Barkley, R. A. (2015). <em>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment (4th ed.).</em> Guilford Press.</li>
            <li className="pl-6 relative"><span className="absolute left-0 text-adhasi-green font-bold">4.</span>MTA Cooperative Group (1999). A 14-month randomized clinical trial of treatment strategies for ADHD. <em>Archives of General Psychiatry, 56(12)</em>, 1073–1086.</li>
            <li className="pl-6 relative"><span className="absolute left-0 text-adhasi-green font-bold">5.</span>Sonuga-Barke, E., et al. (2013). Nonpharmacological interventions for ADHD: systematic review and meta-analyses. <em>American Journal of Psychiatry, 170(3)</em>, 275–289.</li>
          </ol>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-10 bg-white border-t border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">Häufige Fragen zur ADHS-Förderung</h2>
          <div className="flex flex-col divide-y divide-adhasi-border">
            {[
              { q: 'Welche Therapien helfen bei ADHS wirklich?', a: 'Laut aktueller Forschung (Cortese et al., 2018) sind Methylphenidat bei Kindern und Verhaltenstherapie die wirksamsten Einzelinterventionen. Die größte Wirkung zeigt die Kombination aus Medikamenten, Verhaltenstherapie und Elterntraining — das nennt man multimodale Therapie.' },
              { q: 'Ist Verhaltenstherapie bei ADHS wirksam ohne Medikamente?', a: 'Ja — besonders bei leichteren Verläufen, jüngeren Kindern und wenn Elterntraining einbezogen wird. Bei schweren Symptomen ist die Kombination mit Methylphenidat in der Regel wirksamer.' },
              { q: 'Ab welchem Alter dürfen ADHS-Medikamente gegeben werden?', a: 'Methylphenidat (Ritalin, Concerta) ist ab 6 Jahren zugelassen. Bei Kindern unter 6 Jahren steht das Elterntraining im Vordergrund.' },
              { q: 'Was ist Ergotherapie bei ADHS?', a: 'Ergotherapie bei ADHS trainiert Handlungsplanung, Impulskontrolle und Alltagsorganisation durch konkrete Aktivitäten. Sie hilft Kindern, Aufgaben zu strukturieren und abzuschließen.' },
              { q: 'Kann eine App ADHS-Kinder wirklich fördern?', a: 'Digitale Lernhilfen können Selbststeuerung und Konzentration trainieren, wenn sie auf ADHS-Prinzipien ausgelegt sind: kurze Einheiten, sofortiges Feedback, spielerische Elemente und Fortschrittsanzeigen. Sie ersetzen keine Therapie, sind aber wirksame Ergänzung im Alltag.' },
              { q: 'Was ist multimodale Therapie bei ADHS?', a: 'Multimodale Therapie kombiniert Medikamente, Verhaltenstherapie, Elterntraining, schulische Förderung und ggf. Ergotherapie. Die S3-Leitlinie der DGKJP empfiehlt diesen Ansatz als Goldstandard bei mittelschwerer bis schwerer ADHS.' },
              { q: 'Wer bezahlt ADHS-Therapie in Deutschland?', a: 'Verhaltenstherapie und Ergotherapie mit ärztlicher Verordnung werden von der gesetzlichen Krankenversicherung übernommen. Medikamente bei gesicherter ADHS-Diagnose ebenfalls. Coaching und digitale Lernhilfen sind meist Eigenleistung.' },
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
            <Link href="/adhs-eltern-tipps" className="bg-white border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all group">
              <span className="text-2xl block mb-1">💡</span>
              <span className="font-heading text-sm font-bold text-neutral-900 group-hover:text-adhasi-green">ADHS Alltag</span>
              <p className="font-body text-xs text-neutral-500 mt-0.5">Praktische Tipps für Eltern</p>
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
