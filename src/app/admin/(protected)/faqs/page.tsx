'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { PageHeader, Modal, Field, RowActions, Empty, S, useData, useAudit } from '@/components/admin/AdminShell';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  is_published: boolean;
  order_index: number;
}

const EMPTY: FAQ = {
  id: '',
  question: '',
  answer: '',
  category: 'general',
  is_published: true,
  order_index: 0,
};

export default function FAQsAdminPage() {
  const { data, loading, refresh } = useData<FAQ>('cms_faqs', 'order_index', true);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<FAQ>(EMPTY);
  const [saving, setSaving] = useState(false);
  const audit = useAudit();

  const save = async () => {
    if (!draft.question) return;
    setSaving(true);
    const supabase = createClient();
    const payload = { ...draft };
    if (!draft.id) {
      delete (payload as Partial<FAQ>).id;
      const { data: c } = await supabase.from('cms_faqs').insert(payload).select().single();
      if (c) await audit('created', 'faq', c.id);
    } else {
      await supabase.from('cms_faqs').update(payload).eq('id', draft.id);
      await audit('updated', 'faq', draft.id);
    }
    setSaving(false);
    setOpen(false);
    refresh();
  };

  const remove = async (id: string) => {
    const supabase = createClient();
    await supabase.from('cms_faqs').delete().eq('id', id);
    await audit('deleted', 'faq', id);
    refresh();
  };

  return (
    <div style={S.page}>
      <PageHeader
        title="FAQs"
        subtitle="Frequently asked questions"
        actionLabel="New FAQ"
        onAction={() => {
          setDraft(EMPTY);
          setOpen(true);
        }}
      />

      <div style={S.card}>
        {loading ? (
          <Empty message="Loading…" />
        ) : data.length === 0 ? (
          <Empty message="No FAQs yet." />
        ) : (
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>#</th>
                <th style={S.th}>Question</th>
                <th style={S.th}>Category</th>
                <th style={S.th}>Published</th>
                <th style={{ ...S.th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((f) => (
                <tr key={f.id}>
                  <td style={S.td}>{f.order_index}</td>
                  <td style={{ ...S.td, color: '#f1f5f9', fontWeight: 500, maxWidth: '500px' }}>{f.question}</td>
                  <td style={S.td}>{f.category}</td>
                  <td style={S.td}>{f.is_published ? '✓' : '—'}</td>
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
        title={draft.id ? 'Edit FAQ' : 'New FAQ'}
        onClose={() => setOpen(false)}
        onSave={save}
        saving={saving}
      >
        <Field label="Question">
          <input style={S.input} value={draft.question} onChange={(e) => setDraft({ ...draft, question: e.target.value })} />
        </Field>
        <Field label="Answer">
          <textarea
            style={{ ...S.textarea, minHeight: '120px' }}
            value={draft.answer}
            onChange={(e) => setDraft({ ...draft, answer: e.target.value })}
          />
        </Field>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <Field label="Category">
            <input style={S.input} value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} />
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
            checked={draft.is_published}
            onChange={(e) => setDraft({ ...draft, is_published: e.target.checked })}
          />
          Published
        </label>
      </Modal>
    </div>
  );
}
