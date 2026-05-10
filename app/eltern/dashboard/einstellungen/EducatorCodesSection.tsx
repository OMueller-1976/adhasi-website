'use client';

import { useEffect, useState, useCallback } from 'react';
import { getSupabaseBrowser } from '@/lib/supabaseBrowser';

type Code = {
  id: string;
  code: string;
  child_id: string;
  note: string | null;
  created_at: string;
  used_at: string | null;
  is_active: boolean;
};

export default function EducatorCodesSection({
  kids,
}: {
  kids: { id: string; name: string }[];
}) {
  const [codes, setCodes] = useState<Code[]>([]);
  const [loading, setLoading] = useState(true);
  const [generatingFor, setGeneratingFor] = useState<string | null>(null);
  const [noteInput, setNoteInput] = useState<Record<string, string>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const sb = getSupabaseBrowser();
    const { data } = await sb
      .from('educator_access_codes')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });
    setCodes(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function generate(childId: string) {
    setGeneratingFor(childId);
    const sb = getSupabaseBrowser();
    const note = noteInput[childId]?.trim() || null;
    const { error } = await sb.rpc('generate_educator_code', {
      p_child_id: childId,
      p_note: note,
    });
    setGeneratingFor(null);
    if (error) {
      alert('Code-Erstellung fehlgeschlagen: ' + error.message);
      return;
    }
    setNoteInput((prev) => ({ ...prev, [childId]: '' }));
    await load();
  }

  async function revoke(codeId: string) {
    if (!confirm('Diesen Code wirklich deaktivieren?')) return;
    const sb = getSupabaseBrowser();
    const { error } = await sb
      .from('educator_access_codes')
      .update({ is_active: false })
      .eq('id', codeId);
    if (error) {
      alert('Fehler: ' + error.message);
    } else {
      await load();
    }
  }

  async function copyCode(c: Code) {
    await navigator.clipboard.writeText(c.code);
    setCopiedId(c.id);
    setTimeout(() => setCopiedId(null), 1500);
  }

  function fmtDate(s: string) {
    return new Date(s).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  if (loading) return null;

  return (
    <section className="bg-white rounded-2xl border border-stone-200 p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-stone-900">Pädagogen-Zugang</h2>
        <p className="text-sm text-stone-600 mt-1">
          Generieren Sie einen 8-stelligen Code für Lehrkräfte oder
          Lerntherapeut:innen. Mit diesem Code können sie sich auf adhasi.de
          registrieren und erhalten Einsicht in den Lernfortschritt Ihres Kindes
          (kein Schreibzugriff). Sie können Codes jederzeit deaktivieren oder
          neue Codes für weitere Pädagog:innen erstellen.
        </p>
      </div>

      {kids.map((c) => {
        const childCodes = codes.filter((x) => x.child_id === c.id);
        return (
          <div
            key={c.id}
            className="border-t border-stone-100 pt-4 first:border-t-0 first:pt-0"
          >
            <h3 className="font-medium text-stone-900 mb-3">{c.name}</h3>

            <div className="flex gap-2 items-center mb-4">
              <input
                type="text"
                placeholder="Notiz (optional, z.B. 'Frau Müller, Klasse 3a')"
                value={noteInput[c.id] ?? ''}
                onChange={(e) =>
                  setNoteInput((prev) => ({ ...prev, [c.id]: e.target.value }))
                }
                className="flex-1 px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-stone-400 outline-none"
              />
              <button
                onClick={() => generate(c.id)}
                disabled={generatingFor === c.id}
                className="px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-700 disabled:opacity-50 text-sm font-medium whitespace-nowrap transition-colors"
              >
                {generatingFor === c.id ? 'Erstelle…' : 'Code generieren'}
              </button>
            </div>

            {childCodes.length === 0 && (
              <p className="text-sm text-stone-500">
                Keine aktiven Codes für {c.name}.
              </p>
            )}

            <div className="space-y-2">
              {childCodes.map((code) => {
                const used = !!code.used_at;
                return (
                  <div
                    key={code.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${
                      used
                        ? 'bg-blue-50 border-blue-200'
                        : 'bg-emerald-50 border-emerald-200'
                    }`}
                  >
                    <div className="font-mono text-lg font-bold tracking-wider text-stone-900">
                      {code.code}
                    </div>
                    <div className="flex-1 text-xs text-stone-600">
                      {code.note && (
                        <div className="font-medium text-stone-800">{code.note}</div>
                      )}
                      <div>
                        Erstellt am {fmtDate(code.created_at)}
                        {used && ` · eingelöst am ${fmtDate(code.used_at!)}`}
                      </div>
                    </div>
                    {!used && (
                      <button
                        onClick={() => copyCode(code)}
                        className="text-xs px-3 py-1.5 bg-white border border-stone-300 rounded hover:bg-stone-50 transition-colors"
                      >
                        {copiedId === code.id ? '✓ Kopiert' : 'Kopieren'}
                      </button>
                    )}
                    <button
                      onClick={() => revoke(code.id)}
                      className="text-xs px-3 py-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                    >
                      Deaktivieren
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
