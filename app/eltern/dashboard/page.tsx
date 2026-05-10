import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getSupabaseServer } from '@/lib/supabaseServer';
import {
  buildRecommendations,
  getChildOverview,
  getStrengthsWeaknesses,
  emptyOverview,
  formatLastActive,
  type ChildOverview,
  type Recommendation,
} from '@/lib/parentAnalytics';

export default async function DashboardPage() {
  const sb = await getSupabaseServer();
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) redirect('/eltern/login');

  const { data: parent } = await sb
    .from('parent_profiles')
    .select('display_name, name')
    .eq('id', user.id)
    .maybeSingle();
  const displayName =
    (parent as { display_name?: string; name?: string } | null)?.display_name ||
    (parent as { display_name?: string; name?: string } | null)?.name ||
    'da';

  const { data: children } = await sb
    .from('child_profiles')
    .select('id, name, age, grade, avatar_id')
    .eq('parent_id', user.id)
    .order('created_at', { ascending: true });

  const childList = children ?? [];
  const parentId = user.id;

  const [overviews, swResults] = await Promise.all([
    Promise.all(childList.map((c) => getChildOverview(c.id as string, parentId))),
    Promise.all(childList.map((c) => getStrengthsWeaknesses(c.id as string, parentId))),
  ]);

  const recsByChild = childList.map((c, i) =>
    buildRecommendations(overviews[i] ?? emptyOverview, swResults[i].raw, String(c.name))
  );

  const { data: coachingPreviews } = await sb
    .from('coaching_content')
    .select('id, title, content, category, duration_minutes')
    .eq('section', 'eltern')
    .eq('is_active', true)
    .order('order_index', { ascending: true })
    .limit(8);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
      <section>
        <h1 className="text-3xl font-semibold text-stone-900">
          Willkommen zurück, {displayName}.
        </h1>
        {childList.length > 0 ? (
          <p className="text-stone-600 mt-2">
            {childList.length === 1
              ? `Hier ist der aktuelle Überblick für Ihr Kind ${String(childList[0].name)}.`
              : `Hier ist der aktuelle Überblick für Ihre ${childList.length} Kinder.`}
          </p>
        ) : (
          <p className="text-stone-600 mt-2">
            Noch kein Kind angelegt. Bitte legen Sie in der ADHaSi-App ein Kinderprofil an.
          </p>
        )}
      </section>

      {/* Kinder-Karten */}
      {childList.map((c, i) => {
        const o: ChildOverview = overviews[i] ?? emptyOverview;
        return (
          <section key={String(c.id)} className="space-y-4">
            <div className="flex items-end justify-between">
              <h2 className="text-xl font-semibold text-stone-900">{String(c.name)}</h2>
              <Link
                href={`/eltern/dashboard/kind/${String(c.id)}`}
                className="text-sm text-stone-600 hover:text-stone-900 underline-offset-4 hover:underline"
              >
                Detail-Auswertung →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Stat
                label="Übungen gesamt"
                value={String(o.total_exercises)}
                note={o.total_exercises > 0 ? `${o.total_correct} richtig` : undefined}
              />
              <Stat
                label="Aktuelle Streak"
                value={`${o.current_streak} Tage`}
                note={o.longest_streak > o.current_streak ? `Bestmarke: ${o.longest_streak}` : undefined}
                positive={o.current_streak >= 3}
              />
              <Stat
                label="Genauigkeit"
                value={o.total_exercises > 0 ? `${Math.round(o.accuracy_pct)} %` : '—'}
                positive={o.accuracy_pct >= 70}
              />
              <Stat
                label="Letzte Aktivität"
                value={formatLastActive(o.last_active_at)}
              />
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {recsByChild[i].map((r, idx) => (
                <RecBox key={idx} rec={r} />
              ))}
            </div>
          </section>
        );
      })}

      {/* Coaching-Vorschau */}
      {coachingPreviews && coachingPreviews.length > 0 && (
        <section>
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-xl font-semibold text-stone-900">Eltern-Coaching</h2>
            <Link
              href="/eltern/dashboard/coaching"
              className="text-sm text-stone-600 hover:underline"
            >
              Alle Inhalte →
            </Link>
          </div>
          <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {coachingPreviews.map((c) => (
              <Link
                key={String(c.id)}
                href={`/eltern/dashboard/coaching#${String(c.id)}`}
                className="bg-white rounded-xl border border-stone-200 p-3 hover:border-stone-400 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-medium text-stone-900 line-clamp-2 leading-snug">
                  {String(c.title)}
                </h3>
                {c.duration_minutes && (
                  <div className="text-xs text-stone-400 mt-2">
                    ⏱ {String(c.duration_minutes)} Min
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function Stat({
  label,
  value,
  note,
  positive,
}: {
  label: string;
  value: string;
  note?: string;
  positive?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-2xl border p-5 ${positive ? 'border-emerald-200' : 'border-stone-200'}`}
    >
      <div className="text-xs text-stone-500 uppercase tracking-wide">{label}</div>
      <div
        className={`text-2xl font-semibold mt-1 ${positive ? 'text-emerald-700' : 'text-stone-900'}`}
      >
        {value}
      </div>
      {note && <div className="text-xs text-stone-500 mt-2">{note}</div>}
    </div>
  );
}

function RecBox({ rec }: { rec: Recommendation }) {
  const styles: Record<string, string> = {
    positive: 'bg-emerald-50 border-emerald-200',
    info: 'bg-blue-50 border-blue-200',
    warning: 'bg-amber-50 border-amber-200',
  };
  return (
    <div className={`rounded-xl border p-4 ${styles[rec.level]}`}>
      <div className="font-medium text-stone-900">{rec.title}</div>
      <div className="text-sm text-stone-700 mt-1">{rec.body}</div>
    </div>
  );
}
