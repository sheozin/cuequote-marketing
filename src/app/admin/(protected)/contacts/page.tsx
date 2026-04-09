'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { PageHeader, Modal, Empty, S, useData, useAudit } from '@/components/admin/AdminShell';
import { Archive, Eye, Trash2, Mail } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived' | 'spam';
  created_at: string;
}

const STATUS_COLORS: Record<string, [string, string]> = {
  new: ['rgba(16,185,129,0.15)', '#10b981'],
  read: ['rgba(148,163,184,0.15)', '#94a3b8'],
  replied: ['rgba(59,130,246,0.15)', '#3b82f6'],
  archived: ['rgba(100,116,139,0.15)', '#64748b'],
  spam: ['rgba(239,68,68,0.15)', '#ef4444'],
};

export default function ContactsAdminPage() {
  const { data, loading, refresh } = useData<Contact>('cms_contact_submissions', 'created_at');
  const [selected, setSelected] = useState<Contact | null>(null);
  const audit = useAudit();

  const updateStatus = async (id: string, status: Contact['status']) => {
    const supabase = createClient();
    await supabase.from('cms_contact_submissions').update({ status }).eq('id', id);
    await audit('updated', 'contact_submission', id, { status });
    refresh();
    setSelected(null);
  };

  const remove = async (id: string) => {
    if (!confirm('Delete this submission?')) return;
    const supabase = createClient();
    await supabase.from('cms_contact_submissions').delete().eq('id', id);
    await audit('deleted', 'contact_submission', id);
    refresh();
    setSelected(null);
  };

  return (
    <div style={S.page}>
      <PageHeader title="Contact Submissions" subtitle="Inquiries from the /contact form" />

      <div style={S.card}>
        {loading ? (
          <Empty message="Loading…" />
        ) : data.length === 0 ? (
          <Empty message="No contact submissions yet." />
        ) : (
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>From</th>
                <th style={S.th}>Subject</th>
                <th style={S.th}>Status</th>
                <th style={S.th}>Received</th>
                <th style={{ ...S.th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((c) => {
                const [bg, color] = STATUS_COLORS[c.status];
                return (
                  <tr key={c.id} style={{ cursor: 'pointer' }} onClick={() => setSelected(c)}>
                    <td style={S.td}>
                      <div style={{ color: '#f1f5f9', fontWeight: 500 }}>{c.name}</div>
                      <div style={{ color: '#64748b', fontSize: '12px' }}>{c.email}</div>
                    </td>
                    <td style={{ ...S.td, color: '#cbd5e1', maxWidth: '350px' }}>{c.subject ?? '—'}</td>
                    <td style={S.td}>
                      <span style={S.pill(bg, color)}>{c.status}</span>
                    </td>
                    <td style={S.td}>{new Date(c.created_at).toLocaleDateString()}</td>
                    <td style={S.td}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected(c);
                        }}
                        style={{
                          background: 'transparent',
                          border: '1px solid #1e293b',
                          color: '#cbd5e1',
                          padding: '6px 10px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          cursor: 'pointer',
                        }}
                      >
                        <Eye size={13} style={{ display: 'inline', marginRight: '4px' }} />
                        View
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <Modal open={!!selected} title="Contact Submission" onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>FROM</div>
              <div style={{ color: '#f1f5f9', fontWeight: 600 }}>{selected.name}</div>
              <a
                href={`mailto:${selected.email}`}
                style={{ color: '#10b981', fontSize: '13px', textDecoration: 'none' }}
              >
                {selected.email}
              </a>
            </div>
            {selected.subject && (
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>SUBJECT</div>
                <div style={{ color: '#cbd5e1' }}>{selected.subject}</div>
              </div>
            )}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>MESSAGE</div>
              <div
                style={{
                  color: '#cbd5e1',
                  whiteSpace: 'pre-wrap',
                  background: '#0A0E1A',
                  padding: '14px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  lineHeight: 1.6,
                }}
              >
                {selected.message}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href={`mailto:${selected.email}?subject=Re: ${selected.subject ?? 'Your message'}`} style={{ ...S.btn, textDecoration: 'none' }}>
                <Mail size={14} /> Reply
              </a>
              <button style={S.btnGhost} onClick={() => updateStatus(selected.id, 'replied')}>
                Mark replied
              </button>
              <button style={S.btnGhost} onClick={() => updateStatus(selected.id, 'archived')}>
                <Archive size={14} /> Archive
              </button>
              <button style={S.btnDanger} onClick={() => remove(selected.id)}>
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
