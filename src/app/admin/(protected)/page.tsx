'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import {
  FileText,
  Tag,
  HelpCircle,
  MessageSquare,
  Mail,
  Send,
  Sparkles,
  ScrollText,
  ExternalLink,
} from 'lucide-react';
import { S } from '@/components/admin/AdminShell';

interface Stats {
  blogPosts: number;
  pricingPlans: number;
  features: number;
  faqs: number;
  testimonials: number;
  contacts: number;
  newsletter: number;
  audit: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    blogPosts: 0,
    pricingPlans: 0,
    features: 0,
    faqs: 0,
    testimonials: 0,
    contacts: 0,
    newsletter: 0,
    audit: 0,
  });
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState<
    Array<{ id: string; action: string; entity_type: string; created_at: string; user_email: string | null }>
  >([]);

  useEffect(() => {
    const supabase = createClient();
    (async () => {
      const tables = [
        'cms_blog_posts',
        'cms_pricing_plans',
        'cms_features',
        'cms_faqs',
        'cms_testimonials',
        'cms_contact_submissions',
        'cms_newsletter_subscribers',
        'cms_audit_log',
      ];
      const counts = await Promise.all(
        tables.map((t) =>
          supabase
            .from(t)
            .select('id', { count: 'exact', head: true })
            .then(({ count }) => count ?? 0),
        ),
      );
      const { data: recent } = await supabase
        .from('cms_audit_log')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(8);
      setStats({
        blogPosts: counts[0],
        pricingPlans: counts[1],
        features: counts[2],
        faqs: counts[3],
        testimonials: counts[4],
        contacts: counts[5],
        newsletter: counts[6],
        audit: counts[7],
      });
      setActivity((recent ?? []) as Array<{ id: string; action: string; entity_type: string; created_at: string; user_email: string | null }>);
      setLoading(false);
    })();
  }, []);

  const cards = [
    { label: 'Blog Posts', value: stats.blogPosts, href: '/admin/blog', icon: FileText, color: '#10b981' },
    { label: 'Pricing Plans', value: stats.pricingPlans, href: '/admin/pricing', icon: Tag, color: '#3b82f6' },
    { label: 'Features', value: stats.features, href: '/admin/features', icon: Sparkles, color: '#8b5cf6' },
    { label: 'FAQs', value: stats.faqs, href: '/admin/faqs', icon: HelpCircle, color: '#f59e0b' },
    { label: 'Testimonials', value: stats.testimonials, href: '/admin/testimonials', icon: MessageSquare, color: '#ec4899' },
    { label: 'New Contacts', value: stats.contacts, href: '/admin/contacts', icon: Mail, color: '#06b6d4' },
    { label: 'Newsletter', value: stats.newsletter, href: '/admin/newsletter', icon: Send, color: '#14b8a6' },
    { label: 'Audit Events', value: stats.audit, href: '/admin/audit', icon: ScrollText, color: '#94a3b8' },
  ];

  return (
    <div style={S.page}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={S.h1}>Dashboard</h1>
        <p style={S.sub}>Welcome back — CueQuote CMS overview</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          marginBottom: '28px',
        }}
      >
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.label}
              href={c.href}
              style={{
                background: '#111827',
                border: '1px solid #1e293b',
                borderRadius: '12px',
                padding: '20px',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                }}
              >
                <Icon size={20} color={c.color} />
                <span style={{ fontSize: '11px', color: '#64748b' }}>view →</span>
              </div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#f1f5f9' }}>
                {loading ? '—' : c.value}
              </div>
              <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>{c.label}</div>
            </Link>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '20px' }}>
        <div
          style={{
            background: '#111827',
            border: '1px solid #1e293b',
            borderRadius: '12px',
            padding: '20px',
          }}
        >
          <h2 style={{ fontSize: '15px', fontWeight: 700, color: '#f1f5f9', marginBottom: '16px' }}>
            Recent Activity
          </h2>
          {loading ? (
            <div style={{ color: '#64748b', fontSize: '13px' }}>Loading…</div>
          ) : activity.length === 0 ? (
            <div style={{ color: '#64748b', fontSize: '13px' }}>No activity yet.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {activity.map((a) => (
                <div
                  key={a.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    background: '#0A0E1A',
                    borderRadius: '8px',
                    fontSize: '13px',
                  }}
                >
                  <div>
                    <span style={{ color: '#10b981', fontWeight: 600 }}>{a.action}</span>{' '}
                    <span style={{ color: '#cbd5e1' }}>{a.entity_type}</span>
                    {a.user_email && (
                      <span style={{ color: '#64748b', marginLeft: '6px' }}>by {a.user_email}</span>
                    )}
                  </div>
                  <span style={{ color: '#64748b', fontSize: '12px' }}>
                    {new Date(a.created_at).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          style={{
            background: '#111827',
            border: '1px solid #1e293b',
            borderRadius: '12px',
            padding: '20px',
          }}
        >
          <h2 style={{ fontSize: '15px', fontWeight: 700, color: '#f1f5f9', marginBottom: '16px' }}>
            Quick Links
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { label: 'View live marketing site', href: 'https://cuequote.com' },
              { label: 'Open CueQuote app', href: 'https://app.cuequote.com' },
              { label: 'Supabase Dashboard', href: 'https://supabase.com/dashboard/project/rurazinghbfskuoeikwi' },
              { label: 'Stripe Dashboard', href: 'https://dashboard.stripe.com' },
              { label: 'Vercel Dashboard', href: 'https://vercel.com' },
            ].map((q) => (
              <a
                key={q.label}
                href={q.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 12px',
                  background: '#0A0E1A',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#cbd5e1',
                  fontSize: '13px',
                }}
              >
                {q.label}
                <ExternalLink size={13} color="#64748b" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
