import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const email = body?.email ?? '(leer)'
  const role = body?.role ?? null

  // V1: nur loggen
  console.log(`[early-access] Anmeldung: ${email}${role ? ` | Rolle: ${role}` : ''}`)

  // TODO V2: In Supabase table early_access_signups speichern + Resend-Bestätigungsmail senden
  // import { createClient } from '@supabase/supabase-js'
  // await supabase.from('early_access_signups').insert({ email, role, created_at: new Date() })

  return NextResponse.json({ success: true }, { status: 200 })
}
