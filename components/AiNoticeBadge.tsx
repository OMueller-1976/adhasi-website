type Props = {
  editorName?: string
  reviewedDate?: string
}

export default function AiNoticeBadge({ editorName, reviewedDate }: Props) {
  const showEditorVariant = editorName && reviewedDate

  return (
    <div className="bg-adhasi-green-50 border-b border-adhasi-green-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-2 flex items-center gap-2">
        <span
          className="shrink-0 text-xs font-semibold font-body text-adhasi-green-700 bg-adhasi-green-100 px-2 py-0.5 rounded-full"
          aria-hidden="true"
        >
          KI
        </span>
        <p className="font-body text-xs text-neutral-600 leading-snug">
          {showEditorVariant ? (
            <>KI-unterstützt erstellt, redaktionell geprüft von {editorName}, {reviewedDate}.</>
          ) : (
            <>
              Hinweis: Dieser Inhalt wurde mit Unterstützung Künstlicher Intelligenz erstellt
              (Art.&nbsp;50 Abs.&nbsp;4 KI-VO).
            </>
          )}
        </p>
      </div>
    </div>
  )
}
