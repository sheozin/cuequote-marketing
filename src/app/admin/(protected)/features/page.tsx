'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { PageHeader, Modal, Field, RowActions, Empty, S, useData, useAudit } from '@/components/admin/AdminShell';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon_name: string;
  category: string;
  is_visible: boolean;
  order_index: number;
}

const EMPTY: Feature = {
  id: '',
  title: '',
  description: '',
  icon_name: 'Sparkles',
  category: 'general',
  is_visible: true,
  order_index: 0,
};

export default function FeaturesAdminPage() {
  const { data, loading, refresh } = useData<Feature>('cms_features', 'order_index', true);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Feature>(EMPTY);
  const [saving, setSaving] = useState(false);
  const audit = useAudit();

  const save = async () => {
    if (!draft.title) return;
    setSaving(true);
    const supabase = createClient();
    const payload = { ...draft };
    if (!draft.id) {
      delete (payload as Partial<Feature>).id;
      const { data: c } = await supabase.from('cms_features').insert(payload).select().single();
      if (c) await audit('created', 'feature', c.id);
    } else {
      await supabase.from('cms_features').update(payload).eq('id', draft.id);
      await audit('updated', 'feature', draft.id);
    }
    setSaving(false);
    setOpen(false);
    refresh();
  };

  const remove = async (id: string) => {
    const supabase = createClient();
    await supabase.from('cms_features').delete().eq('id', id);
    await audit('deleted', 'feature', id);
    refresh();
  };

  return (
    <div style={S.page}>
      <PageHeader
        title="Features"
        subtitle="Feature cards on the homepage"
        actionLabel="New Feature"
        onAction={() => {
          setDraft(EMPTY);
          setOpen(true);
        }}
      />

      <div style={S.card}>
        {loading ? (
          <Empty message="Loading…" />
        ) : data.length === 0 ? (
          <Empty message="No features yet." />
        ) : (
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Order</th>
                <th style={S.th}>Title</th>
                <th style={S.th}>Description</th>
                <th style={S.th}>Icon</th>
                <th style={S.th}>Visible</th>
                <th style={{ ...S.th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((f) => (
                <tr key={f.id}>
                  <td style={S.td}>{f.order_index}</td>
                  <td style={{ ...S.td, color: '#f1f5f9', fontWeight: 500 }}>{f.title}</td>
                  <td style={{ ...S.td, color: '#64748b', maxWidth: '400px' }}>{f.description}</td>
                  <td style={S.td}>{f.icon_name}</td>
                  <td style={S.td}>{f.is_visible ? '✓' : '—'}</td>
                  <td style={S.td}>
                    <RowActions
                      onEdit={() => {
                        setDraft(f);
                        setOpen(true);
                      }}
                      onDelete={() => remove(f.id)}
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
        title={draft.id ? 'Edit Feature' : 'New Feature'}
        onClose={() => setOpen(false)}
        onSave={save}
        saving={saving}
      >
        <Field label="Title">
          <input style={S.input} value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
        </Field>
        <Field label="Description">
          <textarea
            style={S.textarea}
            value={draft.description}
            onChange={(e) => setDraft({ ...draft, description: e.target.value })}
          />
        </Field>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
          <Field label="Icon (Lucide name)">
            <input
              style={S.input}
              value={draft.icon_name}
              onChange={(e) => setDraft({ ...draft, icon_name: e.target.value })}
            />
          </Field>
          <Field label="Category">
            <input
              style={S.input}
              value={draft.category}
              onChange={(e) => setDraft({ ...draft, category: e.target.value })}
            />
          </Field>
          <Field label="Order">
            <input
              type="number"
              style={S.input}
              value={draft.order_index}
              onChange={(e) => setDraft({ ...draft, order_index: parseInt(e.target.value) || 0 })}
            />
          </Field>
        </div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1', fontSize: '13px' }}>
          <input
            type="checkbox"
            checked={draft.is_visible}
            onChange={(e) => setDraft({ ...draft, is_visible: e.target.checked })}
          />
          Visible
        </label>
      </Modal>
    </div>
  );
}
