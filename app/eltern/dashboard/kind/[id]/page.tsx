import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { getSupabaseServer } from '@/lib/supabaseServer';
import {
  buildRecommendations,
  getChildOverview,
  getStrengthsWeaknesses,
  getDailyHeatmap,
  emptyOverview,
  formatLastActive,
  type CategoryRow,
  type Recommendation,
} from '@/lib/parentAnalytics';
import { categoryLabel } from '@/lib/exerciseLabels';

export default async function KindDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sb = await getSupabaseServer();
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) redirect('/eltern/login');

  const { data: child } = await sb
    .from('child_profiles')
    .select('id, name, age, grade, avatar_id, parent_id')
    .eq('id', id)
    .maybeSingle();

  if (!child || child.parent_id !== user.id) notFound();

  const parentId = user.id;
  const childId = child.id as string;

  const [overviewRaw, swResult, heatmap] = await Promise.all([
    getChildOverview(childId, parentId),
    getStrengthsWeaknesses(childId, parentId),
    getDailyHeatmap(childId, parentId, 42),
  ]);

  const overview = overviewRaw ?? emptyOverview;
  const recs = buildRecommendations(overview, swResult.raw, String(child.name));
  const { strengths, weaknesses } = swResult;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
      <div>
        <Link
          href="/eltern/dashboard"
          className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
        >
          ← Zurück zur Übersicht
        </Link>
        <h1 className="text-3xl font-semibold text-stone-900 mt-2">
          {String(child.name)}
        </h1>
        <p className="text-stone-600 mt-1">
          {child.age ? `${String(child.age)} Jahre` : ''}
          {child.grade ? ` · Klasse ${String(child.grade)}` : ''}
        </p>
      </div>

      {/* Kennzahlen */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat
          label="Übungen gesamt"
          value={String(overview.total_exercises)}
          note={overview.total_exercises > 0 ? `${overview.total_correct} richtig` : undefined}
        />
        <Stat
          label="Streak"
          value={`${overview.current_streak} Tage`}
          note={`Bestmarke: ${overview.longest_streak}`}
        />
        <Stat
          label="Genauigkeit"
          value={overview.total_exercises > 0 ? `${Math.round(overview.accuracy_pct)} %` : '—'}
        />
        <Stat
          label="Letzte Aktivität"
          value={formatLastActive(overview.last_active_at)}
        />
      </section>

      {/* Heatmap */}
      <section>
        <h2 className="text-xl font-semibold text-stone-900 mb-4">
          Aktivität letzte 6 Wochen
        </h2>
        <div className="bg-white rounded-2xl border border-stone-200 p-6">
          <div className="grid grid-cols-7 gap-1.5">
            {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((d) => (
              <div key={d} className="text-xs text-stone-400 text-center pb-1">
                {d}
              </div>
            ))}
            {heatmap.map((h) => {
              const intensity =
                h.exercise_count === 0
                  ? 'bg-stone-100'
                  : h.exercise_count < 3
                    ? 'bg-emerald-200'
                    : h.exercise_count < 6
                      ? 'bg-emerald-400'
                      : h.exercise_count < 10
                        ? 'bg-emerald-600'
                        : 'bg-emerald-800';
              return (
                <div
                  key={h.activity_date}
                  className={`aspect-square rounded ${intensity}`}
                  title={`${h.activity_date}: ${h.exercise_count} Übungen`}
                />
              );
            })}
          </div>
          <div className="flex items-center gap-2 mt-4 text-xs text-stone-500">
            <span>weniger</span>
            {['bg-stone-100', 'bg-emerald-200', 'bg-emerald-400', 'bg-emerald-600', 'bg-emerald-800'].map(
              (c) => (
                <div key={c} className={`w-3 h-3 rounded ${c}`} />
              )
            )}
            <span>mehr</span>
          </div>
        </div>
      </section>

      {/* Stärken / Schwächen */}
      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Stärken</h2>
          <div className="space-y-2">
            {strengths.length === 0 && (
              <p className="text-sm text-stone-500">Noch zu wenige Daten.</p>
            )}
            {strengths.map((s, i) => (
              <SkillBar key={i} sw={s} positive />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-stone-900 mb-4">
            Verbesserungsfelder
          </h2>
          <div className="space-y-2">
            {weaknesses.length === 0 && (
              <p className="text-sm text-stone-500">Noch zu wenige Daten.</p>
            )}
            {weaknesses.map((s, i) => (
              <SkillBar key={i} sw={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Empfehlungen */}
      <section>
        <h2 className="text-xl font-semibold text-stone-900 mb-4">Empfehlungen</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {recs.map((r, idx) => (
            <RecBox key={idx} rec={r} />
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-5">
      <div className="text-xs text-stone-500 uppercase tracking-wide">{label}</div>
      <div className="text-2xl font-semibold mt-1 text-stone-900">{value}</div>
      {note && <div className="text-xs text-stone-500 mt-2">{note}</div>}
    </div>
  );
}

function SkillBar({ sw, positive }: { sw: CategoryRow; positive?: boolean }) {
  const acc = Number(sw.accuracy_pct);
  const color = positive ? 'bg-emerald-500' : acc < 50 ? 'bg-red-500' : 'bg-amber-500';
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-4">
      <div className="flex justify-between items-baseline">
        <div>
          <div className="font-medium text-stone-900">
            {categoryLabel(sw.exercise_category)}
          </div>
          <div className="text-xs text-stone-500">{sw.total_count} Übungen</div>
        </div>
        <div className="font-semibold text-stone-900">{Math.round(acc)} %</div>
      </div>
      <div className="mt-2 h-2 bg-stone-100 rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${acc}%` }} />
      </div>
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
