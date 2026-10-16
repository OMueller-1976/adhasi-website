import { defaultMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = defaultMetadata({
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung für adhasi.de gemäß DSGVO — Verantwortlicher: Oliver Markus Müller / OneTitel.',
  path: '/datenschutz',
  noIndex: true,
})

export default function DatenschutzPage() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">
        <h1>Datenschutzerklärung</h1>
        <p className="text-sm text-neutral-500">Stand: Oktober 2026</p>

        <h2>1. Verantwortlicher</h2>
        <p>
          <strong>Oliver Markus Müller / OneTitel</strong><br />
          Am Bruchborn 6<br />
          54570 Kirchweiler<br />
          Deutschland<br />
          E-Mail: <a href="mailto:datenschutz@adhasi.de">datenschutz@adhasi.de</a>
        </p>

        <h2>2. Grundsätze der Datenverarbeitung</h2>
        <p>
          Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Dienste
          erforderlich ist oder eine gesetzliche Grundlage besteht. Die Verarbeitung erfolgt auf
          Grundlage der Datenschutz-Grundverordnung (DSGVO) sowie des Bundesdatenschutzgesetzes (BDSG).
        </p>
        <p>
          Da sich unser Angebot auch an Kinder richtet, legen wir besonderen Wert auf den Schutz von
          Kinderdaten gemäß Art. 8 DSGVO. Für Kinder unter 16 Jahren ist die Einwilligung der
          Erziehungsberechtigten erforderlich. Die App selbst verarbeitet Kinderdaten ausschließlich
          zur Lernpersonalisierung und nicht zu Werbezwecken.
        </p>

        <h2>3. Welche Daten wir erheben</h2>

        <h3>3.1 Website-Besuch (adhasi.de)</h3>
        <p>
          Beim Besuch unserer Website werden automatisch technische Daten durch den Webserver
          protokolliert:
        </p>
        <ul>
          <li>IP-Adresse (anonymisiert nach 24 Stunden)</li>
          <li>Zeitpunkt des Zugriffs</li>
          <li>Aufgerufene URL</li>
          <li>HTTP-Statuscode</li>
          <li>Browser und Betriebssystem (User-Agent)</li>
          <li>Referrer-URL</li>
        </ul>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Systemsicherheit
          und Fehlerbehebung). Diese Daten werden nicht mit anderen Quellen zusammengeführt.
        </p>

        <h3>3.2 Newsletter / Launch-Benachrichtigung</h3>
        <p>
          Die Early-Access-Phase ist abgeschlossen. Bestehende Einwilligungen werden für den
          Launch-Newsletter genutzt und danach gelöscht. Erhoben wurden:
        </p>
        <ul>
          <li>E-Mail-Adresse (Pflichtfeld)</li>
          <li>Rolle (Elternteil / Lehrer / Therapeut) — optional, per Checkbox</li>
        </ul>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Du kannst deine Einwilligung
          jederzeit widerrufen, indem du uns eine E-Mail an{' '}
          <a href="mailto:datenschutz@adhasi.de">datenschutz@adhasi.de</a> sendest.
          Nach dem Widerruf löschen wir deine E-Mail-Adresse unverzüglich.
        </p>

        <h3>3.3 App-Nutzung (ADHaSi-App)</h3>
        <p>
          Bei der Nutzung der ADHaSi-App werden folgende Daten verarbeitet:
        </p>
        <ul>
          <li>Konto-Daten der Erziehungsberechtigten (E-Mail, Passwort-Hash)</li>
          <li>Kinderprofil (Vorname, Alter/Klassenstufe — kein vollständiger Name erforderlich)</li>
          <li>Lernfortschrittsdaten (bearbeitete Aufgaben, Fehlerquoten, Übungszeiten)</li>
          <li>App-Interaktionsdaten zur Personalisierung des Lernniveaus</li>
          <li>Zahlungsdaten (verarbeitet durch RevenueCat/Google Play — nicht direkt durch uns)</li>
          <li>
            <strong>Anonyme Testnutzung:</strong> Beim 7-Tage-Trial wird ein anonymes Konto ohne
            E-Mail erstellt. Dabei wird ein gerätespezifischer Fingerprint-Hash gespeichert
            (SHA-256, kein Rückschluss auf Person möglich) um Mehrfachnutzung des Trials zu
            verhindern.
          </li>
          <li>
            <strong>Lern-Erinnerungen:</strong> Lokale Push-Benachrichtigungen werden auf dem Gerät
            des Kindes geplant. Keine Datenübertragung an externe Server.
          </li>
          <li>
            <strong>Eltern-PIN:</strong> Eine 4-stellige Eltern-PIN wird verschlüsselt in unserer
            Datenbank gespeichert.
          </li>
          <li>
            <strong>Lern-ID:</strong> Eine öffentliche Lern-ID (Format: ADHS-XXXXX) wird für jeden
            Kindaccount generiert zur Verknüpfung mehrerer Geräte.
          </li>
        </ul>

        <h3>3.4 ADHaSi Begleiter (iOS-App für Erwachsene)</h3>
        <p>
          „ADHaSi Begleiter“ ist eine eigenständige App für Erwachsene mit ADHS. Sie benötigt{' '}
          <strong>kein Benutzerkonto</strong> und keine Anmeldung.
        </p>
        <ul>
          <li>
            <strong>Lokale Daten:</strong> Tagebucheinträge, Stimmung, Einflussfaktoren, Routinen,
            Gewohnheiten, Notizen, Name (optional) und Favoriten werden ausschließlich auf deinem
            Gerät gespeichert. Sie werden nicht an uns oder Dritte übertragen und nicht für Werbung
            oder Tracking verwendet.
          </li>
          <li>
            <strong>Arzttermin-Mappe (PDF):</strong> Das PDF wird lokal auf deinem Gerät erzeugt.
            Ob und wohin du es teilst (z. B. per E-Mail), entscheidest allein du über das
            iOS-Teilen-Menü.
          </li>
          <li>
            <strong>Pro-Kauf:</strong> Der einmalige Kauf „ADHaSi Begleiter Pro“ wird über Apple
            (App Store) abgewickelt. Zur Prüfung und Wiederherstellung des Kaufstatus nutzen wir
            RevenueCat Inc. Dabei werden eine anonyme App-User-ID und Kaufinformationen
            (Produkt, Kaufstatus) übertragen. Es werden keine Tagebuch- oder Gesundheitsdaten
            übertragen. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
          </li>
          <li>
            <strong>Keine Werbung, kein Tracking:</strong> Die App enthält keine Werbe-SDKs und
            keine Analyse-Dienste.
          </li>
          <li>
            <strong>Löschung:</strong> Du kannst alle lokalen Daten jederzeit in den Einstellungen
            der App löschen oder durch Deinstallation der App entfernen. Kaufdaten bei Apple
            verwaltest du über deine Apple-ID.
          </li>
          <li>
            <strong>Hinweis:</strong> Die App ist kein Medizinprodukt und ersetzt keine ärztliche
            oder therapeutische Beratung. Einzelne Inhalte können KI-gestützt erstellt sein.
          </li>
        </ul>

        <h3>3.5 Anonyme Authentifizierung</h3>
        <p>
          Bei der Trial-Nutzung wird Supabase Anonymous Auth verwendet. Die anonyme Session wird bei
          Registrierung mit dem Eltern-Account verknüpft. Alle Lerndaten bleiben erhalten.
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
        </p>

        <h2>4. Datenverarbeiter (Auftragsverarbeiter)</h2>
        <p>
          Wir setzen folgende Dienstleister ein, mit denen Auftragsverarbeitungsverträge (AVV) nach
          Art. 28 DSGVO geschlossen wurden oder werden:
        </p>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Dienstleister</th>
                <th>Zweck</th>
                <th>Standort</th>
                <th>Garantien (bei Drittlandtransfer)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Vercel Inc.</strong></td>
                <td>Hosting der Website (adhasi.de)</td>
                <td>USA (Region: EU-Rechenzentrum über AWS Frankfurt)</td>
                <td>EU-Standardvertragsklauseln (SCCs), Data Processing Agreement</td>
              </tr>
              <tr>
                <td><strong>Supabase Inc.</strong></td>
                <td>Datenbank für Early-Access-E-Mails und App-Nutzerdaten</td>
                <td>USA (Daten gespeichert in EU-Region eu-central-1)</td>
                <td>EU-SCCs, AVV nach Art. 28 DSGVO</td>
              </tr>
              <tr>
                <td><strong>Resend Inc.</strong></td>
                <td>Transaktions-E-Mails (Early-Access-Bestätigung)</td>
                <td>USA</td>
                <td>EU-SCCs, AVV nach Art. 28 DSGVO</td>
              </tr>
              <tr>
                <td><strong>Anthropic PBC</strong></td>
                <td>KI-Lernpersonalisierung (nur strukturierte Lernmetadaten, keine personenbezogenen Klardaten)</td>
                <td>USA</td>
                <td>EU-SCCs, kein Training auf Kundendaten (Zero-Retention Policy)</td>
              </tr>
              <tr>
                <td><strong>RevenueCat Inc.</strong></td>
                <td>Verwaltung von Abonnements und Käufen (In-App-Käufe, inkl. Pro-Kauf in ADHaSi Begleiter)</td>
                <td>USA</td>
                <td>EU-SCCs, AVV nach Art. 28 DSGVO</td>
              </tr>
              <tr>
                <td><strong>Google LLC (Play Store)</strong></td>
                <td>App-Distribution, Zahlungsabwicklung (Google Play Billing)</td>
                <td>USA (EU-Serverstandorte verfügbar)</td>
                <td>EU-SCCs, Google Cloud DPA</td>
              </tr>
              <tr>
                <td><strong>Apple Inc. (App Store)</strong></td>
                <td>App-Distribution und Zahlungsabwicklung (ADHaSi Begleiter, iOS)</td>
                <td>USA / Irland (Apple Distribution International)</td>
                <td>EU-SCCs, Apple Datenschutzbestimmungen</td>
              </tr>
              <tr>
                <td><strong>n8n GmbH</strong></td>
                <td>Workflow-Automatisierung (Push-Benachrichtigungen, interne Prozesse)</td>
                <td>Deutschland ✅</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>5. Datenübermittlung in Drittländer</h2>
        <p>
          Einige der oben genannten Dienstleister haben ihren Sitz in den USA, einem Land ohne
          unmittelbar gleichwertiges Datenschutzniveau (nach dem Schrems-II-Urteil des EuGH, C-311/18).
          Wir haben mit diesen Dienstleistern EU-Standardvertragsklauseln (SCC) nach Art. 46 Abs. 2
          lit. c DSGVO vereinbart. Zusätzlich haben wir für jeden Dienstleister eine
          Datenschutz-Folgenabschätzung (TIA — Transfer Impact Assessment) durchgeführt.
        </p>

        <h2>6. Cookies und Tracking</h2>
        <p>
          ADHaSi setzt <strong>keine Tracking-Cookies ohne deine Einwilligung</strong>. Wir verzichten
          vollständig auf verhaltensbasiertes Targeting, Meta Pixel und Hotjar.
        </p>
        <p>
          Nach deiner Einwilligung kann Google Analytics 4 über den Google Tag Manager aktiviert werden
          (pseudonymisierte Reichweitenmessung). Details dazu findest du in Abschnitt 11.
        </p>
        <p>
          Technisch notwendige Cookies können im Rahmen der Sitzungsverwaltung der App gesetzt werden.
          Diese enthalten kein persönlich identifizierbares Material und werden nicht weitergegeben.
        </p>

        <h2>7. Speicherdauer</h2>
        <ul>
          <li>
            <strong>Early-Access-E-Mails:</strong> Bis zur Versendung der Startnachricht, danach
            unverzügliche Löschung (spätestens nach 24 Monaten ohne Veröffentlichung).
          </li>
          <li>
            <strong>Serverprotokolle:</strong> 14 Tage, danach automatische Löschung.
          </li>
          <li>
            <strong>App-Nutzerdaten:</strong> Für die Dauer des aktiven Kontos. Nach Kontolöschung
            vollständige Datenlöschung innerhalb von 30 Tagen.
          </li>
          <li>
            <strong>Zahlungsdaten:</strong> Nach gesetzlichen Aufbewahrungsfristen (§ 257 HGB:
            10 Jahre für Buchungsbelege).
          </li>
        </ul>

        <h2>8. Deine Rechte</h2>
        <p>
          Nach der DSGVO stehen dir folgende Rechte zu:
        </p>
        <ul>
          <li><strong>Auskunft</strong> (Art. 15 DSGVO): Du kannst jederzeit Auskunft über die zu deiner Person gespeicherten Daten verlangen.</li>
          <li><strong>Berichtigung</strong> (Art. 16 DSGVO): Du kannst die Berichtigung unrichtiger Daten verlangen.</li>
          <li><strong>Löschung</strong> (Art. 17 DSGVO): Du kannst die Löschung deiner Daten verlangen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
          <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO).</li>
          <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO): Du kannst deine Daten in einem maschinenlesbaren Format erhalten.</li>
          <li><strong>Widerspruch</strong> (Art. 21 DSGVO): Du kannst der Verarbeitung deiner Daten auf Grundlage berechtigter Interessen widersprechen.</li>
          <li><strong>Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO): Einwilligungen können jederzeit widerrufen werden.</li>
        </ul>
        <p>
          Zur Ausübung deiner Rechte wende dich an:{' '}
          <a href="mailto:datenschutz@adhasi.de">datenschutz@adhasi.de</a>
        </p>

        <h2>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p>
          Du hast das Recht, dich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.
          Zuständig für OneTitel / Oliver Markus Müller ist:
        </p>
        <p>
          <strong>Landesbeauftragter für den Datenschutz Rheinland-Pfalz</strong><br />
          Hintere Bleiche 34<br />
          55116 Mainz<br />
          <a href="https://www.datenschutz.rlp.de" target="_blank" rel="noopener noreferrer">www.datenschutz.rlp.de</a>
        </p>

        <h2>10. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen unserer Dienste oder
          gesetzlichen Anforderungen zu aktualisieren. Die jeweils aktuelle Version ist auf dieser
          Seite abrufbar. Bei wesentlichen Änderungen informieren wir eingetragene Nutzer per E-Mail.
        </p>

        <h2>11. Google Tag Manager und Webanalyse</h2>
        <p>
          Wir nutzen den <strong>Google Tag Manager</strong> (Anbieter: Google Ireland Limited,
          Gordon House, Barrow Street, Dublin 4, Irland) zur Verwaltung von Analyse-Skripten.
          Der Tag Manager selbst setzt keine Cookies und erhebt keine personenbezogenen Daten.
          Er aktiviert andere Tags (z. B. Google Analytics 4) ausschließlich nach deiner Einwilligung.
        </p>
        <p>
          <strong>Google Analytics 4 (GA4)</strong> wird verwendet, um zu verstehen, wie Besucher
          unsere Website nutzen (z. B. meistbesuchte Seiten, Verweildauer). GA4 ist dabei nur aktiv,
          wenn du in der Cookie-Einwilligung Statistik-Cookies zugestimmt hast.
        </p>
        <p>
          Wir setzen <strong>Consent Mode v2</strong> ein: Ohne deine Zustimmung werden
          <code>analytics_storage</code> und <code>ad_storage</code> auf <em>denied</em> gesetzt —
          Google Analytics sendet dann keine vollständigen Messdaten und setzt keine Tracking-Cookies.
        </p>
        <ul>
          <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
          <li><strong>IP-Anonymisierung:</strong> Aktiviert; die IP-Adresse wird vor der Speicherung gekürzt</li>
          <li><strong>Datenübertragung in die USA:</strong> Google Ireland Ltd. ist Auftragsverarbeiter; Drittlandtransfer auf Basis von EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO)</li>
          <li><strong>Speicherdauer:</strong> Ereignisdaten in GA4 werden standardmäßig 14 Monate gespeichert</li>
          <li><strong>Google Tag Manager Container-ID:</strong> GTM-NDRXCBRR</li>
        </ul>
        <p>
          Du kannst deine Einwilligung jederzeit über den Link{' '}
          <a href="#" id="open-cookie-settings" className="font-bold underline hover:opacity-70">
            Cookie-Einstellungen
          </a>{' '}
          im Footer dieser Website widerrufen oder ändern.
        </p>
        <ul>
          <li>
            <strong>Datenschutzerklärung Google:</strong>{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/privacy
            </a>
          </li>
          <li>
            <strong>Google Analytics Opt-Out:</strong>{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              https://tools.google.com/dlpage/gaoptout
            </a>
          </li>
        </ul>

        <h2>Konto und Daten löschen</h2>
        <p>
          Sie können Ihr Konto und alle gespeicherten Daten jederzeit vollständig und unwiderruflich
          löschen. Die Löschung erfolgt sofort und kann nicht rückgängig gemacht werden.
        </p>
        <Link
          href="/konto-loeschen"
          className="inline-block not-prose bg-red-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-red-700 transition-colors"
        >
          Zum Konto-Löschbereich →
        </Link>
      </div>
    </section>
  )
}
