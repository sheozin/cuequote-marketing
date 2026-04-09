'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { PageHeader, Modal, Field, RowActions, Empty, S, useData, useAudit } from '@/components/admin/AdminShell';

interface Testimonial {
  id: string;
  author_name: string;
  author_title: string | null;
  author_company: string | null;
  quote: string;
  avatar_url: string | null;
  rating: number;
  is_featured: boolean;
  order_index: number;
}

const EMPTY: Testimonial = {
  id: '',
  author_name: '',
  author_title: '',
  author_company: '',
  quote: '',
  avatar_url: null,
  rating: 5,
  is_featured: false,
  order_index: 0,
};

export default function TestimonialsAdminPage() {
  const { data, loading, refresh } = useData<Testimonial>('cms_testimonials', 'order_index', true);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Testimonial>(EMPTY);
  const [saving, setSaving] = useState(false);
  const audit = useAudit();

  const save = async () => {
    if (!draft.author_name || !draft.quote) return;
    setSaving(true);
    const supabase = createClient();
    const payload = { ...draft };
    if (!draft.id) {
      delete (payload as Partial<Testimonial>).id;
      const { data: c } = await supabase.from('cms_testimonials').insert(payload).select().single();
      if (c) await audit('created', 'testimonial', c.id);
    } else {
      await supabase.from('cms_testimonials').update(payload).eq('id', draft.id);
      await audit('updated', 'testimonial', draft.id);
    }
    setSaving(false);
    setOpen(false);
    refresh();
  };

  const remove = async (id: string) => {
    const supabase = createClient();
    await supabase.from('cms_testimonials').delete().eq('id', id);
    await audit('deleted', 'testimonial', id);
    refresh();
  };

  return (
    <div style={S.page}>
      <PageHeader
        title="Testimonials"
        subtitle="Customer quotes shown on the site"
        actionLabel="New Testimonial"
        onAction={() => {
          setDraft(EMPTY);
          setOpen(true);
        }}
      />

      <div style={S.card}>
        {loading ? (
          <Empty message="Loading…" />
        ) : data.length === 0 ? (
          <Empty message="No testimonials yet." />
        ) : (
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Author</th>
                <th style={S.th}>Company</th>
                <th style={S.th}>Quote</th>
                <th style={S.th}>Rating</th>
                <th style={S.th}>Featured</th>
                <th style={{ ...S.th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((t) => (
                <tr key={t.id}>
                  <td style={{ ...S.td, color: '#f1f5f9', fontWeight: 500 }}>{t.author_name}</td>
                  <td style={S.td}>{t.author_company}</td>
                  <td style={{ ...S.td, color: '#94a3b8', maxWidth: '400px' }}>
                    {t.quote.length > 80 ? t.quote.slice(0, 80) + '…' : t.quote}
                  </td>
                  <td style={S.td}>{'★'.repeat(t.rating)}</td>
                  <td style={S.td}>{t.is_featured ? '★' : '—'}</td>
                  <td style={S.td}>
                    <RowActions
                      onEdit={() => {
                        setDraft(t);
                        setOpen(true);
                      }}
                      onDelete={() => remove(t.id)}
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
        title={draft.id ? 'Edit Testimonial' : 'New Testimonial'}
        onClose={() => setOpen(false)}
        onSave={save}
        saving={saving}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
          <Field label="Name">
            <input
              style={S.input}
              value={draft.author_name}
              onChange={(e) => setDraft({ ...draft, author_name: e.target.value })}
            />
          </Field>
          <Field label="Title">
            <input
              style={S.input}
              value={draft.author_title ?? ''}
              onChange={(e) => setDraft({ ...draft, author_title: e.target.value })}
            />
          </Field>
          <Field label="Company">
            <input
              style={S.input}
              value={draft.author_company ?? ''}
              onChange={(e) => setDraft({ ...draft, author_company: e.target.value })}
            />
          </Field>
        </div>
        <Field label="Quote">
          <textarea
            style={S.textarea}
            value={draft.quote}
            onChange={(e) => setDraft({ ...draft, quote: e.target.value })}
          />
        </Field>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
          <Field label="Rating (1-5)">
            <input
              type="number"
              min="1"
              max="5"
              style={S.input}
              value={draft.rating}
              onChange={(e) => setDraft({ ...draft, rating: parseInt(e.target.value) || 5 })}
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
          <Field label="Avatar URL">
            <input
              style={S.input}
              value={draft.avatar_url ?? ''}
              onChange={(e) => setDraft({ ...draft, avatar_url: e.target.value || null })}
            />
          </Field>
        </div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1', fontSize: '13px' }}>
          <input
            type="checkbox"
            checked={draft.is_featured}
            onChange={(e) => setDraft({ ...draft, is_featured: e.target.checked })}
          />
          Featured
        </label>
      </Modal>
    </div>
  );
}
