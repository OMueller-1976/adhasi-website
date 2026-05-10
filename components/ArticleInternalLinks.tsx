import Link from 'next/link'

export default function ArticleInternalLinks() {
  return (
    <section className="bg-surface border-t border-adhasi-border py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="font-heading text-xs font-bold text-neutral-400 uppercase tracking-wide mb-4">
          Weiterführende Artikel
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/ratgeber/adhs-verstehen"
            className="group flex items-center gap-3 bg-white border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all"
          >
            <span className="text-xl flex-shrink-0">🧠</span>
            <span className="font-body font-semibold text-sm text-neutral-800 group-hover:text-adhasi-green transition-colors">
              ADHS verstehen
            </span>
          </Link>
          <Link
            href="/ratgeber/lernmethodik"
            className="group flex items-center gap-3 bg-white border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all"
          >
            <span className="text-xl flex-shrink-0">📚</span>
            <span className="font-body font-semibold text-sm text-neutral-800 group-hover:text-adhasi-green transition-colors">
              Lernmethodik bei ADHS
            </span>
          </Link>
          <Link
            href="/app"
            className="group flex items-center gap-3 bg-white border border-adhasi-border rounded-xl px-4 py-3.5 hover:border-adhasi-green hover:shadow-sm transition-all"
          >
            <span className="text-xl flex-shrink-0">📱</span>
            <span className="font-body font-semibold text-sm text-neutral-800 group-hover:text-adhasi-green transition-colors">
              ADHaSi App
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
