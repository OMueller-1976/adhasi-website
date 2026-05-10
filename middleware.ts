import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

async function verifyPaedagogenCookie(req: NextRequest): Promise<boolean> {
  const token = req.cookies.get('paedagogen_session')?.value;
  if (!token) return false;
  const secret = process.env.PAEDAGOGEN_SESSION_SECRET;
  if (!secret) return false;
  try {
    await jwtVerify(token, new TextEncoder().encode(secret), { algorithms: ['HS256'] });
    return true;
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // ── Pädagogen dashboard — cookie-based auth (no Supabase Auth) ──────────
  if (path.startsWith('/paedagogen/dashboard')) {
    const valid = await verifyPaedagogenCookie(req);
    if (!valid) {
      const url = req.nextUrl.clone();
      url.pathname = '/paedagogen/login';
      url.searchParams.set('redirect', path);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // ── Eltern dashboard — Supabase Auth ────────────────────────────────────
  if (path.startsWith('/eltern/dashboard')) {
    let res = NextResponse.next({ request: req });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll: () => req.cookies.getAll(),
          setAll: (toSet) => {
            toSet.forEach(({ name, value, options }) => {
              req.cookies.set(name, value);
              res.cookies.set(name, value, options);
            });
          },
        },
      }
    );

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      const url = req.nextUrl.clone();
      url.pathname = '/eltern/login';
      url.searchParams.set('redirect', path);
      return NextResponse.redirect(url);
    }

    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/eltern/:path*', '/paedagogen/:path*'],
};
