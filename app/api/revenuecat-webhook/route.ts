import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

// RevenueCat sends the shared secret as a plain Bearer token
// in the Authorization header.
function isValidSignature(req: NextRequest): boolean {
  const secret = process.env.REVENUECAT_WEBHOOK_SECRET;
  if (!secret) return false;
  const auth = req.headers.get('authorization') ?? '';
  return auth === secret;
}

type SubscriptionStatus = 'active' | 'expired';

const EVENT_STATUS_MAP: Record<string, SubscriptionStatus> = {
  INITIAL_PURCHASE: 'active',
  RENEWAL:         'active',
  CANCELLATION:    'expired',
  EXPIRATION:      'expired',
  BILLING_ISSUE:   'expired',
};

export async function POST(req: NextRequest) {
  if (!isValidSignature(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const event = (body as { event?: Record<string, unknown> })?.event;
  if (!event || typeof event !== 'object') {
    return NextResponse.json({ error: 'Missing event' }, { status: 400 });
  }

  const type      = event['type'] as string | undefined;
  const userId    = event['app_user_id'] as string | undefined;

  if (!type || !userId) {
    return NextResponse.json({ error: 'Missing type or app_user_id' }, { status: 400 });
  }

  const newStatus = EVENT_STATUS_MAP[type];
  if (!newStatus) {
    // Unknown / unhandled event – acknowledge without action
    return NextResponse.json({ received: true, action: 'ignored' });
  }

  const admin = getSupabaseAdmin();
  const { error } = await admin
    .from('parent_profiles')
    .update({ subscription_status: newStatus })
    .eq('id', userId);

  if (error) {
    console.error('revenuecat-webhook: supabase update failed', { userId, type, error });
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }

  console.log('revenuecat-webhook: updated', { userId, type, newStatus });
  return NextResponse.json({ received: true });
}
