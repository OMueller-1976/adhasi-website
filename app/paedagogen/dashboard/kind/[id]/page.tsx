import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { getPaedagogenSessionFromCookies } from '@/lib/paedagogenSession';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
import { categoryLabel } from '@/lib/exerciseLabels';

// ── RPC response shapes ───────────────────────────────────────────────────────

interface ChildDetail {
  child: {
    id: string;
    name: string;
    age: number | null;
    grade: number | null;
  };
  overview: {
    total_exercises:   number;
    accuracy_pct:      number | null;
    current_streak:    number;
    longest_streak:    number;
    active_days_30:    number;
    last_active_at:    string | null;
  };
  by_category: Array<{
    category:     string;
    n_exercises:  number;
    accuracy_pct: number;
  }>;
  heatmap: Record<string, number>;          // { "2025-04-01": 3, ... }
  response_times: {
    n:      number;
    avg_ms: number | null;
    p50_ms: number | null;
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function relativeDate(iso: string | null): string {
  if (!iso) return '—';
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (diff === 0) return 'heute';
  if (diff === 1) return 'vor 1 Tag';
  if (diff < 7)  return `vor ${diff} Tagen`;
  if (diff < 14) return 'vor 1 Woche';
  const weeks = Math.floor(diff / 7);
  return `vor ${weeks} Wochen`;
}

function statusLabel(activeDays: number): string {
  if (activeDays >= 20) return 'Sehr regelmäßig';
  if (activeDays >= 10) return 'Regelmäßig';
  if (activeDays >= 5)  return 'Gelegentlich';
  if (activeDays >= 1)  return 'Selten';
  return 'Inaktiv';
}

function barColor(pct: number): string {
  if (pct >= 80) return 'bg-emerald-500';
  if (pct >= 65) return 'bg-yellow-400';
  if (pct >= 50) return 'bg-orange-400';
  return 'bg-red-500';
}

// ── Observations ──────────────────────────────────────────────────────────────

interface Observation {
  title: string;
  body:  string;
  tint:  string;
}

function buildObservations(detail: ChildDetail): Observation[] {
  const obs: Observation[] = [];
  const cats = detail.by_category;

  // 1. Förderschwerpunkt: lowest accuracy with >= 5 exercises
  const eligible = cats.filter((c) => c.n_exercises >= 5);
  if (eligible.length > 0) {
    const worst = eligible.reduce((a, b) => (a.accuracy_pct <= b.accuracy_pct ? a : b));
    if (worst.accuracy_pct < 70) {
      obs.push({
        title: `Förderschwerpunkt: ${categoryLabel(worst.category)}`,
        body:  `Genauigkeit aktuell ${worst.accuracy_pct}% bei ${worst.n_exercises} Übungen. Gezielte Förderung in diesem Bereich könnte hilfreich sein.`,
        tint:  'bg-red-50 border-red-200',
      });
    }
  }

  // 2. Kontrastiver Befund: high strength + low weakness
  const best = eligible.length > 0
    ? eligible.reduce((a, b) => (a.accuracy_pct >= b.accuracy_pct ? a : b))
    : null;
  const worst2 = eligible.length > 0
    ? eligible.reduce((a, b) => (a.accuracy_pct <= b.accuracy_pct ? a : b))
    : null;
  if (best && worst2 && best !== worst2 && best.accuracy_pct >= 90 && worst2.accuracy_pct < 50) {
    obs.push({
      title: 'Auffällige Diskrepanz',
      body:  `In „${categoryLabel(best.category)}" erreicht das Kind ${best.accuracy_pct}%, in „${categoryLabel(worst2.category)}" nur ${worst2.accuracy_pct}%. Mögliche Ursache: spezifische Teilleistungsschwäche im Bereich ${categoryLabel(worst2.category)}.`,
      tint:  'bg-yellow-50 border-yellow-200',
    });
  }

  // 3. Response-time
  const rt = detail.response_times;
  if (rt.n >= 10 && rt.avg_ms !== null) {
    const avgS = (rt.avg_ms / 1000).toFixed(1);
    if (rt.avg_ms > 8000) {
      obs.push({
        title: 'Verarbeitungsgeschwindigkeit',
        body:  `Das Kind benötigt im Schnitt ${avgS}s pro Übung — deutlich über Durchschnitt. Hinweis auf erhöhten kognitiven Aufwand.`,
        tint:  'bg-blue-50 border-blue-200',
      });
    } else if (rt.avg_ms < 3000) {
      obs.push({
        title: 'Verarbeitungsgeschwindigkeit',
        body:  `Das Kind antwortet sehr schnell (Mittel ${avgS}s). Eventuell auf Impulsivität achten.`,
        tint:  'bg-blue-50 border-blue-200',
      });
    }
  }

  // 4. Low activity
  const active = detail.overview.active_days_30;
  if (active < 5) {
    obs.push({
      title: 'Geringe Nutzungshäufigkeit',
      body:  `Nur an ${active} ${active === 1 ? 'Tag' : 'Tagen'} in den letzten 30 Tagen aktiv. Regelmäßigeres Üben könnte den Fortschritt beschleunigen.`,
      tint:  'bg-stone-50 border-stone-300',
    });
  }

  return obs;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function KindDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const session = await getPaedagogenSessionFromCookies();
  if (!session) redirect('/paedagogen/login');
  if (session.child_id !== id) notFound();

  const admin = getSupabaseAdmin();
  const { data: raw, error } = await admin.rpc('paedagogen_get_child_detail', {
    p_child_id: session.child_id,
  });

  if (error || !raw) {
    console.error('[paedagogen/kind] RPC error', error?.message);
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="text-stone-500">Daten konnten nicht geladen werden.</p>
      </div>
    );
  }

  const detail = raw as ChildDetail;
  const { child, overview, by_category, heatmap, response_times } = detail;

  // Build heatmap array: last 42 days
  const heatmapDays: { date: string; count: number }[] = [];
  for (let i = 41; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    heatmapDays.push({ date: key, count: heatmap[key] ?? 0 });
  }

  const strengths  = by_category.filter((c) => c.accuracy_pct >= 80)
                                 .sort((a, b) => b.accuracy_pct - a.accuracy_pct)
                                 .slice(0, 5);
  const weaknesses = by_category.filter((c) => c.accuracy_pct < 65)
                                 .sort((a, b) => a.accuracy_pct - b.accuracy_pct)
                                 .slice(0, 5);

  const observations = buildObservations(detail);

  const subtitleParts: string[] = [];
  if (child.age)   subtitleParts.push(`${child.age} Jahre`);
  if (child.grade) subtitleParts.push(`Klasse ${child.grade}`);

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">

        {/* Header */}
        <div>
          <Link href="/paedagogen/dashboard" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">
            ← Zurück zur Übersicht
          </Link>
          <h1 className="text-3xl font-semibold text-stone-900 mt-2">{child.name}</h1>
          {subtitleParts.length > 0 && (
            <p className="text-stone-600 mt-1">{subtitleParts.join(' · ')}</p>
          )}
        </div>

        {/* Stat tiles */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat
            label="Streak"
            value={`${overview.current_streak} Tage`}
            note={`Bestmarke: ${overview.longest_streak}`}
          />
          <Stat
            label="Genauigkeit 30 Tage"
            value={overview.accuracy_pct !== null ? `${overview.accuracy_pct} %` : '—'}
          />
          <Stat
            label="Letzte Aktivität"
            value={relativeDate(overview.last_active_at)}
          />
          <Stat
            label="Status"
            value={statusLabel(overview.active_days_30)}
            note={`${overview.active_days_30} Tage aktiv`}
          />
        </section>

        {/* Heatmap */}
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Aktivität letzte 6 Wochen</h2>
          <div className="bg-white rounded-2xl border border-stone-200 p-6">
            <div className="grid grid-cols-7 gap-1.5">
              {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((d) => (
                <div key={d} className="text-xs text-stone-400 text-center pb-1">{d}</div>
              ))}
              {heatmapDays.map((h) => {
                const intensity =
                  h.count === 0 ? 'bg-stone-100' :
                  h.count <= 3  ? 'bg-emerald-200' :
                  h.count <= 7  ? 'bg-emerald-400' : 'bg-emerald-700';
                return (
                  <div
                    key={h.date}
                    className={`aspect-square rounded ${intensity}`}
                    title={`${h.date}: ${h.count} Übungen`}
                  />
                );
              })}
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-stone-500">
              <span>weniger</span>
              <div className="w-3 h-3 rounded bg-stone-100" />
              <div className="w-3 h-3 rounded bg-emerald-200" />
              <div className="w-3 h-3 rounded bg-emerald-400" />
              <div className="w-3 h-3 rounded bg-emerald-700" />
              <span>mehr</span>
            </div>
          </div>
        </section>

        {/* Stärken & Förderbedarf */}
        <section className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">Stärken</h2>
            <div className="space-y-3">
              {strengths.length === 0
                ? <p className="text-sm text-stone-500">Noch keine Kategorie mit ≥ 80 %.</p>
                : strengths.map((c) => <CategoryBar key={c.category} cat={c} />)
              }
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">Förderbedarf</h2>
            <div className="space-y-3">
              {weaknesses.length === 0
                ? <p className="text-sm text-stone-500">Keine Kategorie unter 65 % — gut!</p>
                : weaknesses.map((c) => <CategoryBar key={c.category} cat={c} />)
              }
            </div>
          </div>
        </section>

        {/* Pädagogische Beobachtungen */}
        {observations.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">Pädagogische Beobachtungen</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {observations.map((o, i) => (
                <div key={i} className={`rounded-xl border p-4 ${o.tint}`}>
                  <div className="font-medium text-stone-900">{o.title}</div>
                  <div className="text-sm text-stone-700 mt-1">{o.body}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Response time detail */}
        {response_times.n >= 10 && (
          <section className="bg-white rounded-2xl border border-stone-200 p-6">
            <h2 className="text-lg font-semibold text-stone-900 mb-2">Antwortzeiten</h2>
            <div className="flex gap-8 text-sm">
              <div>
                <div className="text-stone-500">Ø Antwortzeit</div>
                <div className="text-xl font-semibold text-stone-900">
                  {response_times.avg_ms !== null ? `${(response_times.avg_ms / 1000).toFixed(1)}s` : '—'}
                </div>
              </div>
              <div>
                <div className="text-stone-500">Median (p50)</div>
                <div className="text-xl font-semibold text-stone-900">
                  {response_times.p50_ms !== null ? `${(response_times.p50_ms / 1000).toFixed(1)}s` : '—'}
                </div>
              </div>
              <div>
                <div className="text-stone-500">Auswertung aus</div>
                <div className="text-xl font-semibold text-stone-900">{response_times.n} Übungen</div>
              </div>
            </div>
          </section>
        )}

        <p className="text-xs text-stone-400 text-center">
          Daten basierend auf {overview.total_exercises} Übungen aus der ADHaSi-App (letzte 30 Tage).
        </p>
      </div>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function Stat({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-5">
      <div className="text-xs text-stone-500 uppercase tracking-wide">{label}</div>
      <div className="text-2xl font-semibold mt-1 text-stone-900">{value}</div>
      {note && <div className="text-xs text-stone-500 mt-1">{note}</div>}
    </div>
  );
}

function CategoryBar({
  cat,
}: {
  cat: { category: string; n_exercises: number; accuracy_pct: number };
}) {
  const color = barColor(cat.accuracy_pct);
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-4">
      <div className="flex justify-between items-baseline mb-1">
        <div>
          <div className="font-medium text-stone-900">{categoryLabel(cat.category)}</div>
          <div className="text-xs text-stone-500">{cat.n_exercises} Übungen</div>
        </div>
        <div className="font-semibold text-stone-900 ml-2">{cat.accuracy_pct} %</div>
      </div>
      <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${cat.accuracy_pct}%` }} />
      </div>
    </div>
  );
}
