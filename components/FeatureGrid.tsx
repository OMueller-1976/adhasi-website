const features = [
  {
    icon: '⚡',
    title: 'Der Fokus-Sprint',
    description:
      'Täglich 3–7 kurze Aufgaben im Fokus-Sprint-Modus – mit Mikropausen zwischen den Übungen. Ideal für Kinder mit ADHS.',
  },
  {
    icon: '🎯',
    title: 'Automatische Anpassung',
    description:
      'Die KI-Lernbegleitung passt Schwierigkeit und Tempo laufend an den Lernstand deines Kindes an — kein Kind bleibt zurück.',
  },
  {
    icon: '📊',
    title: 'Eltern-Dashboard',
    description:
      'Eltern sehen Lernfortschritt, Stärken und Schwächen auf einen Blick — wöchentliche Berichte inklusive.',
  },
  {
    icon: '🔔',
    title: 'Lern-Erinnerungen',
    description:
      'Tägliche Push-Benachrichtigungen erinnern ans Üben — zur gewünschten Uhrzeit, direkt auf dem Gerät des Kindes.',
  },
  {
    icon: '🧒',
    title: 'Kindgerechtes Design',
    description:
      'Keine Ablenkung, keine Werbung — nur klare, ruhige Oberflächen, die Kindern mit ADHS das Konzentrieren erleichtern.',
  },
  {
    icon: '🇩🇪',
    title: 'DSGVO-konform',
    description:
      'Entwickelt in Deutschland. Kinderdaten werden ausschließlich in Europa gespeichert — kein Tracking, kein Datenverkauf.',
  },
]

export default function FeatureGrid() {
  return (
    <section className="py-16 sm:py-20 bg-surface" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 id="features-heading" className="font-heading text-3xl sm:text-4xl font-bold text-center text-neutral-900 mb-4">
          Was macht ADHaSi besonders?
        </h2>
        <p className="text-center font-body text-neutral-500 mb-12 max-w-xl mx-auto">
          Basiert auf etablierten Methoden der ADHS-Förderung — entwickelt für den Alltag.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              className="bg-white rounded-2xl p-6 border border-adhasi-border shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-4xl mb-4">{f.icon}</p>
              <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-2">{f.title}</h3>
              <p className="font-body text-sm text-neutral-500 leading-relaxed">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
