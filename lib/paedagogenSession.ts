import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'paedagogen_session';
const ALGORITHM  = 'HS256';
const TTL_SECONDS = 60 * 60 * 24; // 24 h

export interface PaedagogenSessionPayload {
  child_id:   string;
  parent_id:  string;
  child_name: string;
  code_id:    string;
}

function getSecret(): Uint8Array {
  const s = process.env.PAEDAGOGEN_SESSION_SECRET;
  if (!s) throw new Error('PAEDAGOGEN_SESSION_SECRET env var missing');
  return new TextEncoder().encode(s);
}

export async function createPaedagogenSessionToken(
  payload: PaedagogenSessionPayload
): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: ALGORITHM })
    .setIssuedAt()
    .setExpirationTime(`${TTL_SECONDS}s`)
    .sign(getSecret());
}

export async function verifyPaedagogenSessionToken(
  token: string
): Promise<PaedagogenSessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret(), { algorithms: [ALGORITHM] });
    return payload as unknown as PaedagogenSessionPayload;
  } catch {
    return null;
  }
}

export async function getPaedagogenSessionFromCookies(): Promise<PaedagogenSessionPayload | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyPaedagogenSessionToken(token);
}

export { COOKIE_NAME, TTL_SECONDS };
