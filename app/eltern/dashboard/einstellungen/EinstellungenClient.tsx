'use client';

import { useState } from 'react';
import { getSupabaseBrowser } from '@/lib/supabaseBrowser';

const WEEKDAYS = [
  { key: 'monday', label: 'Mo' },
  { key: 'tuesday', label: 'Di' },
  { key: 'wednesday', label: 'Mi' },
  { key: 'thursday', label: 'Do' },
  { key: 'friday', label: 'Fr' },
  { key: 'saturday', label: 'Sa' },
  { key: 'sunday', label: 'So' },
];

type ChildSettings = {
  daily_exercise_target: number;
  weekly_exercise_target: number;
  free_days: string[];
  push_reminder_time: string;
  weekly_report_enabled: boolean;
};

export default function EinstellungenClient({
  kids,
  settings,
}: {
  kids: { id: string; name: string }[];
  settings: (ChildSettings & { child_id: string })[];
}) {
  const initial = new Map<string, ChildSettings>();
  for (const c of kids) {
    const s = settings.find((x) => x.child_id === c.id);
    initial.set(c.id, {
      daily_exercise_target: s?.daily_exercise_target ?? 5,
      weekly_exercise_target: s?.weekly_exercise_target ?? 25,
      free_days: s?.free_days ?? ['sunday'],
      push_reminder_time: s?.push_reminder_time ?? '16:00:00',
      weekly_report_enabled: s?.weekly_report_enabled ?? true,
    });
  }

  const [state, setState] = useState<Map<string, ChildSettings>>(initial);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [savedFor, setSavedFor] = useState<string | null>(null);

  async function save(childId: string) {
    setSavingId(childId);
    const sb = getSupabaseBrowser();
    const cur = state.get(childId)!;
    const time =
      cur.push_reminder_time.length === 5
        ? cur.push_reminder_time + ':00'
        : cur.push_reminder_time;

    const { error } = await sb
      .from('child_settings')
      .update({
        daily_exercise_target: cur.daily_exercise_target,
        weekly_exercise_target: cur.weekly_exercise_target,
        free_days: cur.free_days,
        push_reminder_time: time,
        weekly_report_enabled: cur.weekly_report_enabled,
        updated_at: new Date().toISOString(),
      })
      .eq('child_id', childId);

    setSavingId(null);
    if (!error) {
      setSavedFor(childId);
      setTimeout(() => setSavedFor(null), 2000);
    } else {
      alert('Speichern fehlgeschlagen: ' + error.message);
    }
  }

  function update(childId: string, patch: Partial<ChildSettings>) {
    const next = new Map(state);
    next.set(childId, { ...next.get(childId)!, ...patch });
    setState(next);
  }

  function toggleDay(childId: string, day: string) {
    const cur = state.get(childId)!;
    const days = cur.free_days.includes(day)
      ? cur.free_days.filter((d) => d !== day)
      : [...cur.free_days, day];
    update(childId, { free_days: days });
  }

  if (kids.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-stone-600">Noch kein Kind angelegt.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-stone-900">Einstellungen</h1>
        <p className="text-stone-600 mt-2">
          Lernziele, freie Tage, Erinnerungen — pro Kind anpassbar.
        </p>
      </div>

      {kids.map((c) => {
        const s = state.get(c.id)!;
        return (
          <section
            key={c.id}
            className="bg-white rounded-2xl border border-stone-200 p-6 space-y-6"
          >
            <h2 className="text-xl font-semibold text-stone-900">{c.name}</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Tagesziel (Übungen)">
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={s.daily_exercise_target}
                  onChange={(e) =>
                    update(c.id, {
                      daily_exercise_target: parseInt(e.target.value || '1'),
                    })
                  }
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 outline-none"
                />
              </Field>
              <Field label="Wochenziel (Übungen)">
                <input
                  type="number"
                  min={1}
                  max={300}
                  value={s.weekly_exercise_target}
                  onChange={(e) =>
                    update(c.id, {
                      weekly_exercise_target: parseInt(e.target.value || '1'),
                    })
                  }
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 outline-none"
                />
              </Field>
            </div>

            <Field label="Freie Tage (kein Tagesziel-Druck)">
              <div className="flex gap-2 flex-wrap mt-1">
                {WEEKDAYS.map((d) => {
                  const active = s.free_days.includes(d.key);
                  return (
                    <button
                      type="button"
                      key={d.key}
                      onClick={() => toggleDay(c.id, d.key)}
                      className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                        active
                          ? 'bg-stone-900 text-white border-stone-900'
                          : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                      }`}
                    >
                      {d.label}
                    </button>
                  );
                })}
              </div>
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Tägliche Erinnerung (Uhrzeit)">
                <input
                  type="time"
                  value={s.push_reminder_time.slice(0, 5)}
                  onChange={(e) =>
                    update(c.id, { push_reminder_time: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 outline-none"
                />
              </Field>
              <Field label="Wöchentlicher E-Mail-Report">
                <label className="flex items-center gap-2 mt-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={s.weekly_report_enabled}
                    onChange={(e) =>
                      update(c.id, { weekly_report_enabled: e.target.checked })
                    }
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-stone-700">Aktivieren</span>
                </label>
              </Field>
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-stone-100">
              <button
                onClick={() => save(c.id)}
                disabled={savingId === c.id}
                className="px-5 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-700 disabled:opacity-50 text-sm font-medium transition-colors"
              >
                {savingId === c.id ? 'Speichere…' : 'Speichern'}
              </button>
              {savedFor === c.id && (
                <span className="text-sm text-emerald-700">✓ Gespeichert</span>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-sm text-stone-700 block mb-1">{label}</label>
      {children}
    </div>
  );
}
