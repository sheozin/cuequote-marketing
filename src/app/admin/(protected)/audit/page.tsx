'use client';

import { PageHeader, Empty, S, useData } from '@/components/admin/AdminShell';
import { Download } from 'lucide-react';

interface AuditEntry {
  id: string;
  user_id: string | null;
  user_email: string | null;
  action: string;
  entity_type: string;
  entity_id: string | null;
  diff: unknown;
  created_at: string;
}

const ACTION_COLORS: Record<string, [string, string]> = {
  created: ['rgba(16,185,129,0.15)', '#10b981'],
  updated: ['rgba(59,130,246,0.15)', '#3b82f6'],
  deleted: ['rgba(239,68,68,0.15)', '#ef4444'],
};

export default function AuditAdminPage() {
  const { data, loading } = useData<AuditEntry>('cms_audit_log', 'created_at');

  const exportCSV = () => {
    const csv = [
      'timestamp,user,action,entity_type,entity_id',
      ...data.map((a) => `${a.created_at},${a.user_email ?? ''},${a.action},${a.entity_type},${a.entity_id ?? ''}`),
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cuequote-audit-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={S.page}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <h1 style={S.h1}>Audit Log</h1>
          <p style={S.sub}>All admin actions across the CMS</p>
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
          <Empty message="No audit events yet." />
        ) : (
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Timestamp</th>
                <th style={S.th}>User</th>
                <th style={S.th}>Action</th>
                <th style={S.th}>Entity</th>
                <th style={S.th}>ID</th>
              </tr>
            </thead>
            <tbody>
              {data.map((a) => {
                const colors = ACTION_COLORS[a.action] ?? ['rgba(148,163,184,0.15)', '#94a3b8'];
                return (
                  <tr key={a.id}>
                    <td style={{ ...S.td, color: '#64748b', fontFamily: 'monospace', fontSize: '12px' }}>
                      {new Date(a.created_at).toLocaleString()}
                    </td>
                    <td style={{ ...S.td, color: '#cbd5e1' }}>{a.user_email ?? '—'}</td>
                    <td style={S.td}>
                      <span style={S.pill(colors[0], colors[1])}>{a.action}</span>
                    </td>
                    <td style={{ ...S.td, color: '#f1f5f9', fontWeight: 500 }}>{a.entity_type}</td>
                    <td
                      style={{
                        ...S.td,
                        fontFamily: 'monospace',
                        fontSize: '11px',
                        color: '#64748b',
                      }}
                    >
                      {a.entity_id ? a.entity_id.slice(0, 8) + '…' : '—'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
