import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/adminAuth';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

export async function GET(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const filter = searchParams.get('filter') ?? 'pending'; // pending | blocked | reviewed | all
  const category = searchParams.get('category');
  const type = searchParams.get('type');

  const sb = getSupabaseAdmin();
  let q = sb
    .from('ex_pool')
    .select('*')
    .eq('app_id', 'adhasi-de')
    .order('created_at', { ascending: false })
    .limit(100);

  if (filter === 'pending') q = q.eq('status', 'validated').is('reviewed_by_admin_at', null);
  else if (filter === 'blocked') q = q.eq('status', 'blocked');
  else if (filter === 'reviewed') q = q.not('reviewed_by_admin_at', 'is', null);

  if (category) q = q.eq('exercise_category', category);
  if (type) q = q.eq('exercise_type', type);

  const { data, error } = await q;
  if (error) {
    console.error('[admin/queue]', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ items: data });
}
