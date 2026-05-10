import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/adminAuth';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

export async function POST(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { action, id, reason } = body as {
    action: 'approve' | 'block' | 'gold';
    id: string;
    reason?: string;
  };

  if (!id || !action) {
    return NextResponse.json({ error: 'missing params' }, { status: 400 });
  }

  const sb = getSupabaseAdmin();
  const now = new Date().toISOString();

  if (action === 'approve') {
    const { error } = await sb
      .from('ex_pool')
      .update({ reviewed_by_admin_at: now })
      .eq('id', id);
    if (error) {
      console.error('[admin/action] approve', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } else if (action === 'block') {
    const { error } = await sb
      .from('ex_pool')
      .update({
        status: 'blocked',
        block_reason: reason || 'admin_block',
        reviewed_by_admin_at: now,
      })
      .eq('id', id);
    if (error) {
      console.error('[admin/action] block', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } else if (action === 'gold') {
    const { error } = await sb
      .from('ex_pool')
      .update({ status: 'gold', reviewed_by_admin_at: now })
      .eq('id', id);
    if (error) {
      console.error('[admin/action] gold', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
