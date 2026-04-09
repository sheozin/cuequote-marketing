'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ExternalLink, LogOut } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export default function AdminTopbar() {
  const pathname = usePathname() || '/admin';
  const router = useRouter();

  const segments = pathname.split('/').filter(Boolean);
  const crumbs = segments.map((seg, i) => {
    const href = '/' + segments.slice(0, i + 1).join('/');
    const label = seg.charAt(0).toUpperCase() + seg.slice(1);
    return { href, label };
  });

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <div
      style={{
        background: '#0A0E1A',
        borderBottom: '1px solid #1e293b',
        padding: '14px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
        {crumbs.map((c, i) => (
          <span key={c.href} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {i > 0 && <span style={{ color: '#334155' }}>/</span>}
            <Link
              href={c.href}
              style={{
                color: i === crumbs.length - 1 ? '#f1f5f9' : '#64748b',
                textDecoration: 'none',
                fontWeight: i === crumbs.length - 1 ? 600 : 500,
              }}
            >
              {c.label}
            </Link>
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Link
          href="/"
          target="_blank"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#cbd5e1',
            fontSize: '13px',
            textDecoration: 'none',
            padding: '8px 12px',
            border: '1px solid #1e293b',
            borderRadius: '8px',
          }}
        >
          <ExternalLink size={14} />
          View Live Site
        </Link>
        <button
          onClick={handleSignOut}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#cbd5e1',
            fontSize: '13px',
            background: 'transparent',
            border: '1px solid #1e293b',
            borderRadius: '8px',
            padding: '8px 12px',
            cursor: 'pointer',
          }}
        >
          <LogOut size={14} />
          Sign out
        </button>
      </div>
    </div>
  );
}
