interface ToolCardProps {
  id: string
  title: string
  description: string
  children: React.ReactNode
  showPrivacyNote?: boolean
}

export default function ToolCard({
  id,
  title,
  description,
  children,
  showPrivacyNote = true,
}: ToolCardProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="my-10 rounded-2xl border border-adhasi-border bg-surface p-5 sm:p-7 scroll-mt-24"
    >
      <p className="font-body text-xs font-bold uppercase tracking-wide text-adhasi-green mb-1">
        Kostenloses Tool
      </p>
      <h2
        id={`${id}-title`}
        className="font-heading text-xl sm:text-2xl font-bold text-neutral-900 mb-2"
      >
        {title}
      </h2>
      <p className="font-body text-sm sm:text-base text-neutral-600 mb-5">{description}</p>
      {children}
      {showPrivacyNote && (
        <p className="font-body text-xs text-neutral-400 mt-5">
          Ihre Eingaben bleiben auf Ihrem Gerät (lokaler Speicher des Browsers) und werden nicht an
          uns übertragen.
        </p>
      )}
    </section>
  )
}
