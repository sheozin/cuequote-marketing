'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { PageHeader, Modal, Field, RowActions, Empty, S, useData, useAudit } from '@/components/admin/AdminShell';

interface ChangelogItem {
  id: string;
  version: string;
  title: string;
  description: string | null;
  change_type: 'new' | 'improved' | 'fixed' | 'deprecated';
  published_at: string;
  is_published: boolean;
}

const EMPTY: ChangelogItem = {
  id: '',
  version: '',
  title: '',
  description: '',
  change_type: 'new',
  published_at: new Date().toISOString(),
  is_published: true,
};

const COLORS: Record<string, [string, string]> = {
  new: ['rgba(16,185,129,0.15)', '#10b981'],
  improved: ['rgba(59,130,246,0.15)', '#3b82f6'],
  fixed: ['rgba(245,158,11,0.15)', '#f59e0b'],
  deprecated: ['rgba(239,68,68,0.15)', '#ef4444'],
};

export default function ChangelogAdminPage() {
  const { data, loading, refresh } = useData<ChangelogItem>('cms_changelog', 'published_at');
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<ChangelogItem>(EMPTY);
  const [saving, setSaving] = useState(false);
  const audit = useAudit();

  const save = async () => {
    if (!draft.title || !draft.version) return;
    setSaving(true);
    const supabase = createClient();
    const payload = { ...draft };
    if (!draft.id) {
      delete (payload as Partial<ChangelogItem>).id;
      const { data: c } = await supabase.from('cms_changelog').insert(payload).select().single();
      if (c) await audit('created', 'changelog', c.id);
    } else {
      await supabase.from('cms_changelog').update(payload).eq('id', draft.id);
      await audit('updated', 'changelog', draft.id);
    }
    setSaving(false);
    setOpen(false);
    refresh();
  };

  const remove = async (id: string) => {
    const supabase = createClient();
    await supabase.from('cms_changelog').delete().eq('id', id);
    await audit('deleted', 'changelog', id);
    refresh();
  };

  return (
    <div style={S.page}>
      <PageHeader
        title="Changelog"
        subtitle="Release notes and product updates"
        actionLabel="New Entry"
        onAction={() => {
          setDraft(EMPTY);
          setOpen(true);
        }}
      />

      <div style={S.card}>
        {loading ? (
          <Empty message="Loading…" />
        ) : data.length === 0 ? (
          <Empty message="No entries yet." />
        ) : (
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Version</th>
                <th style={S.th}>Title</th>
                <th style={S.th}>Type</th>
                <th style={S.th}>Published</th>
                <th style={{ ...S.th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((c) => {
                const [bg, color] = COLORS[c.change_type];
                return (
                  <tr key={c.id}>
                    <td style={{ ...S.td, color: '#f1f5f9', fontWeight: 600 }}>{c.version}</td>
                    <td style={S.td}>{c.title}</td>
                    <td style={S.td}>
                      <span style={S.pill(bg, color)}>{c.change_type}</span>
                    </td>
                    <td style={S.td}>{new Date(c.published_at).toLocaleDateString()}</td>
                    <td style={S.td}>
                      <RowActions
                        onEdit={() => {
                          setDraft(c);
                          setOpen(true);
                        }}
                        onDelete={() => remove(c.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <Modal
        open={open}
        title={draft.id ? 'Edit Entry' : 'New Entry'}
        onClose={() => setOpen(false)}
        onSave={save}
        saving={saving}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px' }}>
          <Field label="Version">
            <input
              style={S.input}
              value={draft.version}
              onChange={(e) => setDraft({ ...draft, version: e.target.value })}
            />
          </Field>
          <Field label="Title">
            <input style={S.input} value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
          </Field>
        </div>
        <Field label="Description">
          <textarea
            style={S.textarea}
            value={draft.description ?? ''}
            onChange={(e) => setDraft({ ...draft, description: e.target.value })}
          />
        </Field>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <Field label="Type">
            <select
              style={S.input}
              value={draft.change_type}
              onChange={(e) => setDraft({ ...draft, change_type: e.target.value as ChangelogItem['change_type'] })}
            >
              <option value="new">New</option>
              <option value="improved">Improved</option>
              <option value="fixed">Fixed</option>
              <option value="deprecated">Deprecated</option>
            </select>
          </Field>
          <Field label="Publish Date">
            <input
              type="date"
              style={S.input}
              value={draft.published_at.split('T')[0]}
              onChange={(e) => setDraft({ ...draft, published_at: new Date(e.target.value).toISOString() })}
            />
          </Field>
        </div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1', fontSize: '13px' }}>
          <input
            type="checkbox"
            checked={draft.is_published}
            onChange={(e) => setDraft({ ...draft, is_published: e.target.checked })}
          />
          Published
        </label>
      </Modal>
    </div>
  );
}
