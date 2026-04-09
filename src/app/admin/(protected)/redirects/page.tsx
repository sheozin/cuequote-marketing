'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { PageHeader, Modal, Field, RowActions, Empty, S, useData, useAudit } from '@/components/admin/AdminShell';

interface Redirect {
  id: string;
  from_path: string;
  to_path: string;
  status_code: number;
  is_active: boolean;
}

const EMPTY: Redirect = {
  id: '',
  from_path: '',
  to_path: '',
  status_code: 301,
  is_active: true,
};

export default function RedirectsAdminPage() {
  const { data, loading, refresh } = useData<Redirect>('cms_redirects', 'from_path', true);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Redirect>(EMPTY);
  const [saving, setSaving] = useState(false);
  const audit = useAudit();

  const save = async () => {
    if (!draft.from_path || !draft.to_path) return;
    setSaving(true);
    const supabase = createClient();
    const payload = { ...draft };
    if (!draft.id) {
      delete (payload as Partial<Redirect>).id;
      const { data: c } = await supabase.from('cms_redirects').insert(payload).select().single();
      if (c) await audit('created', 'redirect', c.id);
    } else {
      await supabase.from('cms_redirects').update(payload).eq('id', draft.id);
      await audit('updated', 'redirect', draft.id);
    }
    setSaving(false);
    setOpen(false);
    refresh();
  };

  const remove = async (id: string) => {
    const supabase = createClient();
    await supabase.from('cms_redirects').delete().eq('id', id);
    await audit('deleted', 'redirect', id);
    refresh();
  };

  return (
    <div style={S.page}>
      <PageHeader
        title="Redirects"
        subtitle="URL redirects for the marketing site"
        actionLabel="New Redirect"
        onAction={() => {
          setDraft(EMPTY);
          setOpen(true);
        }}
      />

      <div style={S.card}>
        {loading ? (
          <Empty message="Loading…" />
        ) : data.length === 0 ? (
          <Empty message="No redirects configured." />
        ) : (
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>From</th>
                <th style={S.th}>To</th>
                <th style={S.th}>Code</th>
                <th style={S.th}>Active</th>
                <th style={{ ...S.th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((r) => (
                <tr key={r.id}>
                  <td style={{ ...S.td, fontFamily: 'monospace', color: '#f1f5f9' }}>{r.from_path}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', color: '#10b981' }}>→ {r.to_path}</td>
                  <td style={S.td}>{r.status_code}</td>
                  <td style={S.td}>{r.is_active ? '✓' : '—'}</td>
                  <td style={S.td}>
                    <RowActions
                      onEdit={() => {
                        setDraft(r);
                        setOpen(true);
                      }}
                      onDelete={() => remove(r.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Modal
        open={open}
        title={draft.id ? 'Edit Redirect' : 'New Redirect'}
        onClose={() => setOpen(false)}
        onSave={save}
        saving={saving}
      >
        <Field label="From path (e.g. /old-page)">
          <input
            style={S.input}
            value={draft.from_path}
            onChange={(e) => setDraft({ ...draft, from_path: e.target.value })}
          />
        </Field>
        <Field label="To path or full URL">
          <input
            style={S.input}
            value={draft.to_path}
            onChange={(e) => setDraft({ ...draft, to_path: e.target.value })}
          />
        </Field>
        <Field label="Status code">
          <select
            style={S.input}
            value={draft.status_code}
            onChange={(e) => setDraft({ ...draft, status_code: parseInt(e.target.value) })}
          >
            <option value={301}>301 — Permanent</option>
            <option value={302}>302 — Temporary</option>
            <option value={307}>307 — Temporary (method preserved)</option>
            <option value={308}>308 — Permanent (method preserved)</option>
          </select>
        </Field>
        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1', fontSize: '13px' }}>
          <input
            type="checkbox"
            checked={draft.is_active}
            onChange={(e) => setDraft({ ...draft, is_active: e.target.checked })}
          />
          Active
        </label>
      </Modal>
    </div>
  );
}
