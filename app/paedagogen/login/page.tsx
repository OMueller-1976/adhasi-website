import { Suspense } from 'react';
import { defaultMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata: Metadata = defaultMetadata({
  title: 'Pädagogen-Login — ADHaSi',
  description:
    'Login für Pädagogen, Förderlehrkräfte und Lerntherapeuten. Zugang zum ADHaSi-Dashboard zur Begleitung von Kindern mit ADHS und ADHS.',
  path: '/paedagogen/login',
});

export default function PaedagogenLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
