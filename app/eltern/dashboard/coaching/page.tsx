import { redirect } from 'next/navigation';
import { getSupabaseServer } from '@/lib/supabaseServer';

export default async function CoachingPage() {
  const sb = await getSupabaseServer();
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) redirect('/eltern/login');

  const { data: items } = await sb
    .from('coaching_content')
    .select('id, title, content, category, duration_minutes, content_type, age_group')
    .eq('section', 'eltern')
    .eq('is_active', true)
    .order('order_index', { ascending: true });

  const { data: progressRows } = await sb
    .from('parent_coaching_progress')
    .select('coaching_id, completed')
    .eq('parent_id', user.id);

  const doneSet = new Set(
    (progressRows ?? [])
      .filter((p) => p.completed)
      .map((p) => String(p.coaching_id))
  );

  // Nach category gruppieren
  const groups = new Map<string, typeof items>();
  for (const it of items ?? []) {
    const key = String(it.category ?? 'Allgemein');
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(it);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
      <div>
        <h1 className="text-3xl font-semibold text-stone-900">Eltern-Coaching</h1>
        <p className="text-stone-600 mt-2">
          Tipps, Strategien und Hintergrundwissen für Eltern von ADHS-Kindern.
        </p>
      </div>

      {Array.from(groups.entries()).map(([cat, list]) => (
        <section key={cat}>
          <h2 className="text-xl font-semibold text-stone-900 mb-4">{cat}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {(list ?? []).map((c) => (
              <article
                key={String(c.id)}
                id={String(c.id)}
                className="bg-white rounded-2xl border border-stone-200 p-5 flex flex-col"
              >
                <div className="flex items-center justify-between text-xs text-stone-500 uppercase tracking-wide">
                  <span>{String(c.content_type ?? 'Artikel')}</span>
                  {doneSet.has(String(c.id)) && (
                    <span className="text-emerald-700">✓ gelesen</span>
                  )}
                </div>
                <h3 className="font-semibold text-stone-900 mt-2">{String(c.title)}</h3>
                <p className="text-sm text-stone-700 mt-2 flex-1 whitespace-pre-line">
                  {String(c.content ?? '')}
                </p>
                {c.duration_minutes && (
                  <div className="text-xs text-stone-400 mt-4">
                    ⏱ ca. {String(c.duration_minutes)} Min Lesezeit
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}

      {(!items || items.length === 0) && (
        <p className="text-stone-500">Noch keine Coaching-Inhalte verfügbar.</p>
      )}
    </div>
  );
}
