import { requireAdmin } from '@/lib/adminAuth';
import ReviewClient from './ReviewClient';

export default async function Page() {
  await requireAdmin();
  return <ReviewClient />;
}
