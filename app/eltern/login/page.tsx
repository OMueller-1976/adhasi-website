import type { Metadata } from 'next';
import { Suspense } from 'react';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Eltern-Login | ADHaSi – ADHS Lern-App',
  description:
    'Melden Sie sich in Ihrem ADHaSi Eltern-Dashboard an und verfolgen Sie den Lernfortschritt Ihres Kindes mit ADHS.',
  alternates: { canonical: '/eltern/login' },
  robots: { index: false, follow: false },
};

export default function ElternLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
