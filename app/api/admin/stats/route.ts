import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/adminAuth';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }
  const sb = getSupabaseAdmin();
  const { data, error } = await sb.rpc('ex_admin_stats', { p_app_id: 'adhasi-de' });
  if (error) {
    console.error('[admin/stats]', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}
