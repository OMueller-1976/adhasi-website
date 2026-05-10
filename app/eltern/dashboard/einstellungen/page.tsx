import { redirect } from 'next/navigation';
import { getSupabaseServer } from '@/lib/supabaseServer';
import EinstellungenClient from './EinstellungenClient';
import EducatorCodesSection from './EducatorCodesSection';

export default async function EinstellungenPage() {
  const sb = await getSupabaseServer();
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) redirect('/eltern/login');

  const { data: children } = await sb
    .from('child_profiles')
    .select('id, name')
    .eq('parent_id', user.id)
    .order('created_at', { ascending: true });

  const childIds = (children ?? []).map((c) => c.id as string);

  const { data: settingsRows } = await sb
    .from('child_settings')
    .select(
      'child_id, daily_exercise_target, weekly_exercise_target, free_days, push_reminder_time, weekly_report_enabled'
    )
    .in(
      'child_id',
      childIds.length ? childIds : ['00000000-0000-0000-0000-000000000000']
    );

  const kids = (children ?? []) as { id: string; name: string }[];

  return (
    <>
      <EinstellungenClient
        kids={kids}
        settings={(settingsRows ?? []) as Parameters<typeof EinstellungenClient>[0]['settings']}
      />
      {kids.length > 0 && (
        <div className="max-w-3xl mx-auto px-6 pb-10">
          <EducatorCodesSection kids={kids} />
        </div>
      )}
    </>
  );
}
