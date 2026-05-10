import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { defaultMetadata, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import ArticleCTA from '@/components/ArticleCTA'

export const metadata: Metadata = defaultMetadata({
  title: 'ADHaSi für Pädagogen & Therapeuten – ADHS Förderung | Zugang',
  description:
    'ADHaSi für Fachkräfte: Pädagogen, Therapeuten und Nachhilfelehrer begleiten ADHS-Kinder mit digitalem Förder-Dashboard. Zugang anfragen.',
  path: '/paedagogen-therapeuten-adhs',
})

export default function PaedagogenTherapeutenAdhsPage() {
  return (
    <>
      <StructuredData
        data={articleJsonLd({
          title: 'ADHaSi für Pädagogen & Therapeuten: ADHS-Förderung digital',
          description: 'Wie Pädagogen, Therapeuten und Fachkräfte ADHaSi in der ADHS-Förderung einsetzen — Zugang, Dashboard und DSGVO-konforme Datenverwaltung.',
          path: '/paedagogen-therapeuten-adhs',
          datePublished: '2026-04-01',
          dateModified: '2026-04-30',
        })}
      />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Für Pädagogen & Therapeuten', path: '/paedagogen-therapeuten-adhs' },
        ])}
      />
      <StructuredData
        data={faqJsonLd([
          { question: 'Wie beantrage ich einen Pädagogen-Zugang bei ADHaSi?', answer: 'Den Pädagogen-Zugang können Fachkräfte direkt über die ADHaSi Website anfragen. Nach Verifikation der Fachkraft erhalten sie einen separaten Login mit Zugang zu den Kind-Profilen der betreuten Kinder — nach ausdrücklicher Freigabe durch die Eltern.' },
          { question: 'Welche Daten sehen Pädagogen im ADHaSi-Dashboard?', answer: 'Pädagogen sehen Lernzeit, Übungsverteilung und Fortschrittskurven der ihnen zugewiesenen Kinder. Sie sehen keine persönlichen Kommunikationsdaten der Familie und haben keinen Zugang zu Eltern-Einstellungen oder Bezahlinformationen.' },
          { question: 'Ist ADHaSi DSGVO-konform?', answer: 'Ja. ADHaSi verarbeitet alle Daten DSGVO-konform auf Servern in Deutschland. Pädagogen- und Therapeutenzugänge basieren auf expliziter Eltern-Freigabe. Daten werden nicht an Dritte weitergegeben. Eine Auftragsverarbeitungsvereinbarung (AVV) ist auf Anfrage erhältlich.' },
          { question: 'Kann ADHaSi in der Ergotherapie eingesetzt werden?', answer: 'Ja — ADHaSi eignet sich als digitales Ergänzungswerkzeug in der Ergotherapie: als Hausaufgaben-Tool zwischen Therapiestunden, zur Dokumentation von Übungsfrequenz und als Motivationsinstrument. ADHaSi ersetzt keine Ergotherapie, ergänzt sie aber sinnvoll.' },
          { question: 'Gibt es Sonderkonditionen für Schulen oder Praxen?', answer: 'Ja. Für Schulen, Therapiepraxen und Nachhilfeinstitute gibt es Sonderkonditionen für Mehrfach-Lizenzen. Kontakt für institutionelle Zugänge über die Pädagogen-Anfrage-Seite.' },
          { question: 'Wie unterscheidet sich der Pädagogen-Zugang vom Eltern-Login?', answer: 'Der Eltern-Login ist der primäre Zugang — Eltern verwalten das Kind-Profil und geben Fachkräften explizit Lesezugang. Der Pädagogen-Zugang ist rein beobachtend: Fachkräfte sehen Lernprotokolle, können aber keine Einstellungen verändern.' },
        ])}
      />

      {/* Header */}
      <section className="bg-surface py-10 sm:py-14 border-b border-adhasi-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-600">Für Pädagogen & Therapeuten</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🎓</span>
            <span className="text-xs font-semibold bg-adhasi-green text-white px-3 py-1 rounded-full">10 min Lesezeit</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            ADHaSi für Pädagogen & Therapeuten: ADHS-Förderung digital
          </h1>
          <p className="font-body text-lg text-neutral-600">
            Digitale ADHS-Förderung, die zwischen Therapiestunden, Schulbegleitung und Nachhilfe
            weiterarbeitet. Wie Fachkräfte ADHaSi einsetzen — und was der Zugang genau ermöglicht.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/paedagogen/login"
              className="inline-flex items-center justify-center bg-adhasi-green text-white font-heading font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Pädagogen-Zugang anfragen →
            </Link>
            <Link
              href="/app"
              className="inline-flex items-center justify-center border border-adhasi-border text-neutral-700 font-body font-semibold text-sm px-6 py-3 rounded-full hover:border-neutral-400 transition-colors"
            >
              ADHaSi App kennenlernen
            </Link>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2>Warum digitale ADHS-Förderung für Fachkräfte relevant ist</h2>
          <p>
            ADHS-Förderung findet nicht nur in der Therapiestunde statt. Die 50 Minuten
            Verhaltenstherapie einmal pro Woche, die 45 Minuten Ergotherapie, die Lernförderung
            am Donnerstagnachmittag — all das ist wertvoll, aber wenig im Verhältnis zu den
            restlichen 160+ Stunden der Woche, in denen das Kind auf sich gestellt ist.
          </p>
          <p>
            Das ist der Kernvorteil digitaler Förderung: Sie arbeitet zwischen den Therapiestunden
            weiter. Sie dokumentiert, was in dieser Zeit passiert. Und sie gibt Fachkräften Daten,
            die bei der nächsten Stunde unmittelbar eingesetzt werden können.
          </p>
          <p>
            Für Pädagogen, Therapeuten und Fachkräfte ergeben sich drei konkrete Mehrwerte:
          </p>
          <ul>
            <li><strong>Kontinuität:</strong> Übungen, die in der Therapie eingeführt wurden, können als App-Version zuhause fortgeführt werden. Transfer von der Praxis in den Alltag.</li>
            <li><strong>Dokumentation:</strong> Lernprotokolle liefern objektive Daten statt Eltern-Berichten aus der Erinnerung. "Das Kind hat 12 von 14 Tagen geübt, durchschnittlich 8 Minuten" ist eine andere Grundlage für die Förderstunde als "ich glaube, es hat meistens geübt".</li>
            <li><strong>Motivation:</strong> Kinder, die ihre eigenen Fortschritte visualisiert sehen, sind in Förderstunden kooperativer und zielorientierter.</li>
          </ul>
          <p>
            Hintergründe zur ADHS-Förderung und wissenschaftlichen Evidenz:
            <Link href="/adhs-foerderung"> ADHS Förderung: Methoden, Therapie & was wirklich hilft</Link>.
          </p>

          <h2>Was Pädagogen & Therapeuten bei ADHaSi können</h2>
          <p>
            Der Pädagogen-Zugang bei ADHaSi ist ein separater Login, der Fachkräften nach
            expliziter Eltern-Freigabe Zugang zu den Lernprotokollen der betreuten Kinder gibt.
          </p>

          <h3>Lernprotokolle einsehen</h3>
          <p>
            Fachkräfte sehen für jedes freigegebene Kind:
          </p>
          <ul>
            <li>Tägliche und wöchentliche Lernzeit</li>
            <li>Verteilung auf Übungstypen (Fokus, Arbeitsgedächtnis, Impulskontrolle, Schulaufgaben)</li>
            <li>Fortschrittskurven über Zeit</li>
            <li>Streak-Anzeige: Wie regelmäßig übt das Kind?</li>
            <li>Schwierigkeitsniveau-Entwicklung: Steigt das Kind im Niveau auf?</li>
          </ul>

          <h3>Therapiebegleitend nutzen</h3>
          <p>
            Fachkräfte können die App-Daten in ihre Stunden integrieren:
          </p>
          <ul>
            <li>Lernprotokoll als Gesprächseinstieg mit dem Kind ("Was war deine liebste Aufgabe diese Woche?")</li>
            <li>Fortschrittsgrafik als positives Feedback-Tool</li>
            <li>Identifikation von Schwachstellen: Welcher Übungstyp wird gemieden?</li>
            <li>Formulierung konkreter Übungsziele für die nächste Woche</li>
          </ul>

          <h3>Eltern einbinden ohne Mehraufwand</h3>
          <p>
            Das Eltern-Dashboard zeigt dieselben Daten. Fachkräfte und Eltern sehen denselben
            Lernstand — das reduziert Abstimmungsaufwand und schafft eine gemeinsame Grundlage
            für Gespräche.
          </p>

        </div>
      </article>

      {/* Mid-page CTA */}
      <section className="bg-adhasi-green py-10 sm:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">Pädagogen-Zugang anfragen</h2>
          <p className="font-body text-white/90 text-base mb-6 max-w-xl mx-auto">
            Für Pädagogen, Therapeuten, Ergotherapeuten und Nachhilfelehrer. Kostenloser Testzugang
            auf Anfrage.
          </p>
          <Link
            href="/paedagogen/login"
            className="inline-flex items-center justify-center bg-white text-adhasi-green font-heading font-bold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Zugang anfragen →
          </Link>
        </div>
      </section>

      <article className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">

          <h2>DSGVO-konformer Datenzugriff: wie der Zugang funktioniert</h2>
          <p>
            Datenschutz ist bei ADHaSi kein Zusatz — er ist Grundlage. Vor allem bei der
            Verarbeitung von Kinderdaten sind Anforderungen besonders hoch.
          </p>

          <h3>Das Eltern-Freigabe-Prinzip</h3>
          <p>
            Kein Pädagoge und kein Therapeut erhält automatisch Zugang zu Kinderdaten.
            Der Ablauf ist immer:
          </p>
          <ol>
            <li>Eltern erstellen das Kind-Profil und sind alleinige Verwalter</li>
            <li>Eltern geben im Dashboard explizit eine oder mehrere Fachkräfte frei (per Einladungs-Link)</li>
            <li>Die eingeladene Fachkraft registriert sich mit einem eigenen Pädagogen-Account</li>
            <li>Ab Freigabe kann die Fachkraft Lernprotokolle einsehen — aber keine Einstellungen verändern</li>
            <li>Eltern können die Freigabe jederzeit widerrufen</li>
          </ol>

          <h3>Was Fachkräfte nicht können</h3>
          <ul>
            <li>Einstellungen oder Lernziele des Kindes verändern</li>
            <li>Bezahlinformationen einsehen</li>
            <li>Andere Familienmitglieder oder Kinder einsehen (außer explizit freigegebenen)</li>
            <li>Direkten Kontakt zu Eltern über die App initiieren</li>
          </ul>

          <h3>Technische Datenschutz-Details</h3>
          <ul>
            <li><strong>Server:</strong> Ausschließlich in Deutschland (ISO 27001 zertifiziert)</li>
            <li><strong>Verschlüsselung:</strong> TLS 1.3 für alle Datenübertragungen, AES-256 für ruhende Daten</li>
            <li><strong>Keine Weitergabe:</strong> Keine Datenweitergabe an Werbepartner oder Dritte</li>
            <li><strong>AVV:</strong> Auftragsverarbeitungsvereinbarung für institutionelle Nutzer auf Anfrage</li>
            <li><strong>Löschung:</strong> Vollständige Datenlöschung auf Anfrage innerhalb von 30 Tagen</li>
          </ul>

          <h2>Anwendungsfälle: Schule, Therapiepraxis, Nachhilfe</h2>

          <h3>Schulischer Kontext</h3>
          <p>
            Sonderpädagoginnen, Schulbegleiter und Inklusionsfachkräfte können ADHaSi als
            strukturiertes Übungsinstrument einsetzen:
          </p>
          <ul>
            <li>Fokus-Sprints als Alternative zu klassischen Hausaufgaben empfehlen</li>
            <li>Lernprotokolle als objektive Grundlage für Elterngespräche nutzen</li>
            <li>Fortschrittsdaten im Rahmen von Förderplänen dokumentieren</li>
            <li>Digitale Übungen gezielt für Bereiche empfehlen, die im Unterricht auffallen</li>
          </ul>
          <p>
            Hintergrund zu Nachteilsausgleich und schulischen Fördermaßnahmen:
            <Link href="/adhs-grundlagen"> ADHS Grundlagen: Diagnose & Nachteilsausgleich</Link>.
          </p>

          <h3>Therapiepraxis</h3>
          <p>
            Verhaltenstherapeuten und Kinder- und Jugendpsychotherapeuten können ADHaSi als
            Hausaufgaben-Tool zwischen Therapiestunden einsetzen:
          </p>
          <ul>
            <li>Übungsfrequenz und -regelmäßigkeit objektiv dokumentieren</li>
            <li>Therapieziele mit App-Übungsbereichen verknüpfen (z. B. "diese Woche täglich 1 Fokus-Sprint")</li>
            <li>Fortschrittsgrafiken als positives Feedback in der Stunde einsetzen</li>
            <li>Eltern-Coaching durch gemeinsame Dashboard-Besprechung ergänzen</li>
          </ul>

          <h3>Ergotherapie</h3>
          <p>
            Ergotherapeuten können ADHaSi als Brücke zwischen Praxis und Alltag nutzen:
            Übungen zur Handlungsplanung und Impulskontrolle, die in der Praxis eingeführt
            wurden, können als App-Version täglich geübt werden. Die Lernprotokoll-Daten
            zeigen, ob Transfer in den Alltag stattfindet.
          </p>

          <h3>Nachhilfe und Lernförderung</h3>
          <p>
            Nachhilfelehrer und Lerntherapeuten profitieren besonders von der Fortschrittsdokumentation:
            Sie können konkret zeigen, welche Bereiche sich verbessern — ein Argument für
            Eltern, die Fortschritte sehen wollen. ADHaSi ergänzt Nachhilfe durch tägliches
            Üben zwischen den Sessions.
          </p>

          <h2>Häufige Fragen für Fachkräfte</h2>

          <div className="not-prose flex flex-col divide-y divide-adhasi-border">
            {[
              { q: 'Wie beantrage ich einen Pädagogen-Zugang bei ADHaSi?', a: 'Den Pädagogen-Zugang können Fachkräfte direkt über die ADHaSi Website anfragen. Nach Verifikation erhalten sie einen separaten Login mit Zugang zu den Kind-Profilen der betreuten Kinder — nach ausdrücklicher Freigabe durch die Eltern.' },
              { q: 'Welche Daten sehen Pädagogen im ADHaSi-Dashboard?', a: 'Pädagogen sehen Lernzeit, Übungsverteilung und Fortschrittskurven der ihnen zugewiesenen Kinder. Sie sehen keine persönlichen Kommunikationsdaten der Familie und haben keinen Zugang zu Eltern-Einstellungen oder Bezahlinformationen.' },
              { q: 'Ist ADHaSi DSGVO-konform?', a: 'Ja. ADHaSi verarbeitet alle Daten DSGVO-konform auf Servern in Deutschland. Pädagogen- und Therapeutenzugänge basieren auf expliziter Eltern-Freigabe. Eine Auftragsverarbeitungsvereinbarung (AVV) ist auf Anfrage erhältlich.' },
              { q: 'Kann ADHaSi in der Ergotherapie eingesetzt werden?', a: 'Ja — ADHaSi eignet sich als digitales Ergänzungswerkzeug in der Ergotherapie: als Hausaufgaben-Tool zwischen Therapiestunden, zur Dokumentation von Übungsfrequenz und als Motivationsinstrument.' },
              { q: 'Gibt es Sonderkonditionen für Schulen oder Praxen?', a: 'Ja. Für Schulen, Therapiepraxen und Nachhilfeinstitute gibt es Sonderkonditionen für Mehrfach-Lizenzen. Kontakt über die Pädagogen-Anfrage-Seite.' },
              { q: 'Wie unterscheidet sich der Pädagogen-Zugang vom Eltern-Login?', a: 'Der Eltern-Login ist der primäre Zugang — Eltern verwalten das Kind-Profil und geben Fachkräften explizit Lesezugang. Der Pädagogen-Zugang ist rein beobachtend: Fachkräfte sehen Lernprotokolle, können aber keine Einstellungen verändern.' },
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
            <Link href="/app" className="bg-white border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all group">
              <span className="text-2xl block mb-1">📱</span>
              <span className="font-heading text-sm font-bold text-neutral-900 group-hover:text-adhasi-green">ADHaSi App</span>
              <p className="font-body text-xs text-neutral-500 mt-0.5">App für Eltern & Kinder</p>
            </Link>
          </div>
        </div>
      </section>

      <ArticleCTA />
    </>
  )
}
