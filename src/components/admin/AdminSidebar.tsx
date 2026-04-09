'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  Files,
  Image as ImageIcon,
  Tag,
  Sparkles,
  HelpCircle,
  MessageSquare,
  Users,
  History,
  Mail,
  Send,
  ScrollText,
  Settings,
  ArrowRightLeft,
  LogOut,
} from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

type NavItem = { href: string; label: string; icon: React.ComponentType<{ size?: number }> };
type NavSection = { label: string; items: NavItem[] };

const sections: NavSection[] = [
  {
    label: 'Overview',
    items: [{ href: '/admin', label: 'Dashboard', icon: LayoutDashboard }],
  },
  {
    label: 'Content',
    items: [
      { href: '/admin/blog', label: 'Blog', icon: FileText },
      { href: '/admin/pages', label: 'Pages', icon: Files },
      { href: '/admin/media', label: 'Media', icon: ImageIcon },
    ],
  },
  {
    label: 'Marketing',
    items: [
      { href: '/admin/pricing', label: 'Pricing', icon: Tag },
      { href: '/admin/features', label: 'Features', icon: Sparkles },
      { href: '/admin/faqs', label: 'FAQs', icon: HelpCircle },
      { href: '/admin/testimonials', label: 'Testimonials', icon: MessageSquare },
      { href: '/admin/team', label: 'Team', icon: Users },
      { href: '/admin/changelog', label: 'Changelog', icon: History },
    ],
  },
  {
    label: 'Platform',
    items: [
      { href: '/admin/contacts', label: 'Contacts', icon: Mail },
      { href: '/admin/newsletter', label: 'Newsletter', icon: Send },
      { href: '/admin/audit', label: 'Audit Log', icon: ScrollText },
      { href: '/admin/settings', label: 'Site Settings', icon: Settings },
      { href: '/admin/redirects', label: 'Redirects', icon: ArrowRightLeft },
    ],
  },
];

export default function AdminSidebar({ userEmail }: { userEmail: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <aside
      style={{
        width: '240px',
        background: '#0A0E1A',
        borderRight: '1px solid #1e293b',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid #1e293b' }}>
        <Link
          href="/admin"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            textDecoration: 'none',
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 800,
            fontSize: '20px',
          }}
        >
          <span style={{ color: '#f1f5f9' }}>Cue</span>
          <span style={{ color: '#10b981' }}>Quote</span>
        </Link>
        <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Admin Console
        </div>
      </div>

      <nav style={{ flex: 1, padding: '16px 12px', overflowY: 'auto' }}>
        {sections.map((section) => (
          <div key={section.label} style={{ marginBottom: '20px' }}>
            <div
              style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#64748b',
                padding: '0 12px 8px',
              }}
            >
              {section.label}
            </div>
            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === '/admin'
                  ? pathname === '/admin'
                  : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    color: isActive ? '#10b981' : '#cbd5e1',
                    background: isActive ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: isActive ? 600 : 500,
                    marginBottom: '2px',
                  }}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div style={{ padding: '16px', borderTop: '1px solid #1e293b' }}>
        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Signed in as</div>
        <div
          style={{
            fontSize: '13px',
            color: '#f1f5f9',
            marginBottom: '12px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {mounted ? userEmail : ''}
        </div>
        <button
          onClick={handleSignOut}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            background: 'transparent',
            color: '#cbd5e1',
            border: '1px solid #1e293b',
            padding: '8px 12px',
            borderRadius: '8px',
            fontSize: '13px',
            cursor: 'pointer',
          }}
        >
          <LogOut size={14} />
          Sign out
        </button>
      </div>
    </aside>
  );
}
