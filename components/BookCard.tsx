interface BookCardProps {
  title: string
  isbn: string
  description: string
  amazonUrl: string
}

export default function BookCard({ title, isbn, description, amazonUrl }: BookCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
      <div className="w-12 h-14 bg-adhasi-green-50 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
        📖
      </div>
      <h3 className="font-heading text-lg font-semibold text-neutral-900 leading-snug">{title}</h3>
      <p className="font-body text-sm text-neutral-600 leading-relaxed flex-1">{description}</p>
      <p className="text-xs text-neutral-400">ISBN: {isbn}</p>
      <a
        href={amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-adhasi-orange text-white font-body font-bold text-sm px-4 py-2 rounded-xl hover:bg-adhasi-orange-600 transition-colors mt-auto self-start"
      >
        Bei Amazon ansehen →
      </a>
    </article>
  )
}
