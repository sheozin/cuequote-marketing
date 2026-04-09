'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialError =
    searchParams.get('error') === 'not_authorized'
      ? 'This account does not have admin access.'
      : null;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(initialError);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError || !data.user) {
      setError(signInError?.message ?? 'Unable to sign in');
      setLoading(false);
      return;
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('is_admin')
      .eq('id', data.user.id)
      .maybeSingle();

    if (!profile?.is_admin) {
      await supabase.auth.signOut();
      setError('This account does not have admin access.');
      setLoading(false);
      return;
    }

    router.push('/admin');
    router.refresh();
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0A0E1A',
        color: '#f1f5f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          background: '#111827',
          border: '1px solid #1e293b',
          borderRadius: '16px',
          padding: '40px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2px',
              textDecoration: 'none',
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 800,
              fontSize: '26px',
            }}
          >
            <span style={{ color: '#f1f5f9' }}>Cue</span>
            <span style={{ color: '#10b981' }}>Quote</span>
          </Link>
          <div
            style={{
              fontSize: '11px',
              color: '#64748b',
              marginTop: '4px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Admin Console
          </div>
        </div>

        <h1 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px', textAlign: 'center' }}>
          Sign in
        </h1>
        <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '24px', textAlign: 'center' }}>
          Authorized staff only.
        </p>

        {error && (
          <div
            style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#fca5a5',
              padding: '10px 12px',
              borderRadius: '8px',
              fontSize: '13px',
              marginBottom: '16px',
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#64748b', marginBottom: '6px', textTransform: 'uppercase' }}>
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              background: '#0f172a',
              color: '#f1f5f9',
              border: '1px solid #1e293b',
              borderRadius: '8px',
              padding: '12px',
              fontSize: '14px',
              marginBottom: '16px',
              fontFamily: 'inherit',
            }}
          />

          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#64748b', marginBottom: '6px', textTransform: 'uppercase' }}>
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              background: '#0f172a',
              color: '#f1f5f9',
              border: '1px solid #1e293b',
              borderRadius: '8px',
              padding: '12px',
              fontSize: '14px',
              marginBottom: '20px',
              fontFamily: 'inherit',
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: '#10b981',
              color: '#fff',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
