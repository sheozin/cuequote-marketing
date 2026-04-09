'use client';

import { createClient } from '@/lib/supabase/client';
import { PageHeader, Empty, S, useData, useAudit } from '@/components/admin/AdminShell';
import { Download, Trash2 } from 'lucide-react';

interface Subscriber {
  id: string;
  email: string;
  subscribed_at: string;
  status: 'active' | 'unsubscribed';
}

export default function NewsletterAdminPage() {
  const { data, loading, refresh } = useData<Subscriber>('cms_newsletter_subscribers', 'subscribed_at');
  const audit = useAudit();

  const remove = async (id: string) => {
    if (!confirm('Delete this subscriber?')) return;
    const supabase = createClient();
    await supabase.from('cms_newsletter_subscribers').delete().eq('id', id);
    await audit('deleted', 'newsletter_subscriber', id);
    refresh();
  };

  const exportCSV = () => {
    const csv = ['email,status,subscribed_at', ...data.map((s) => `${s.email},${s.status},${s.subscribed_at}`)].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cuequote-newsletter-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={S.page}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <h1 style={S.h1}>Newsletter</h1>
          <p style={S.sub}>{data.length} subscriber{data.length !== 1 ? 's' : ''}</p>
        </div>
        {data.length > 0 && (
          <button style={S.btn} onClick={exportCSV}>
            <Download size={14} />
            Export CSV
          </button>
        )}
      </div>

      <div style={S.card}>
        {loading ? (
          <Empty message="Loading…" />
        ) : data.length === 0 ? (
          <Empty message="No subscribers yet." />
        ) : (
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Email</th>
                <th style={S.th}>Status</th>
                <th style={S.th}>Subscribed</th>
                <th style={{ ...S.th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((s) => (
                <tr key={s.id}>
                  <td style={{ ...S.td, color: '#f1f5f9', fontWeight: 500 }}>{s.email}</td>
                  <td style={S.td}>
                    <span
                      style={S.pill(
                        s.status === 'active' ? 'rgba(16,185,129,0.15)' : 'rgba(148,163,184,0.15)',
                        s.status === 'active' ? '#10b981' : '#94a3b8',
                      )}
                    >
                      {s.status}
                    </span>
                  </td>
                  <td style={S.td}>{new Date(s.subscribed_at).toLocaleDateString()}</td>
                  <td style={S.td}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => remove(s.id)}
                        style={{
                          background: 'transparent',
                          border: '1px solid #7f1d1d',
                          color: '#ef4444',
                          padding: '6px 8px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
