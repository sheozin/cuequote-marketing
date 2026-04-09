'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { PageHeader, Modal, Field, RowActions, Empty, S, useData, useAudit } from '@/components/admin/AdminShell';

interface Page {
  id: string;
  slug: string;
  title: string;
  meta_description: string | null;
  meta_keywords: string | null;
  og_image_url: string | null;
  status: 'draft' | 'published' | 'archived';
}

const EMPTY: Page = {
  id: '',
  slug: '',
  title: '',
  meta_description: '',
  meta_keywords: '',
  og_image_url: null,
  status: 'published',
};

export default function PagesAdminPage() {
  const { data, loading, refresh } = useData<Page>('cms_pages', 'slug', true);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Page>(EMPTY);
  const [saving, setSaving] = useState(false);
  const audit = useAudit();

  const save = async () => {
    if (!draft.title || !draft.slug) return;
    setSaving(true);
    const supabase = createClient();
    const payload = { ...draft };
    if (!draft.id) {
      delete (payload as Partial<Page>).id;
      const { data: c } = await supabase.from('cms_pages').insert(payload).select().single();
      if (c) await audit('created', 'page', c.id);
    } else {
      await supabase.from('cms_pages').update(payload).eq('id', draft.id);
      await audit('updated', 'page', draft.id);
    }
    setSaving(false);
    setOpen(false);
    refresh();
  };

  const remove = async (id: string) => {
    const supabase = createClient();
    await supabase.from('cms_pages').delete().eq('id', id);
    await audit('deleted', 'page', id);
    refresh();
  };

  return (
    <div style={S.page}>
      <PageHeader
        title="Pages"
        subtitle="SEO metadata for static pages"
        actionLabel="New Page"
        onAction={() => {
          setDraft(EMPTY);
          setOpen(true);
        }}
      />

      <div style={S.card}>
        {loading ? (
          <Empty message="Loading…" />
        ) : data.length === 0 ? (
          <Empty message="No pages configured. Add one to override default SEO metadata." />
        ) : (
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Slug</th>
                <th style={S.th}>Title</th>
                <th style={S.th}>Status</th>
                <th style={{ ...S.th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((p) => (
                <tr key={p.id}>
                  <td style={{ ...S.td, color: '#f1f5f9' }}>/{p.slug}</td>
                  <td style={S.td}>{p.title}</td>
                  <td style={S.td}>
                    <span
                      style={S.pill(
                        p.status === 'published' ? 'rgba(16,185,129,0.15)' : 'rgba(148,163,184,0.15)',
                        p.status === 'published' ? '#10b981' : '#94a3b8',
                      )}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td style={S.td}>
                    <RowActions
                      onEdit={() => {
                        setDraft(p);
                        setOpen(true);
                      }}
                      onDelete={() => remove(p.id)}
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
        title={draft.id ? 'Edit Page' : 'New Page'}
        onClose={() => setOpen(false)}
        onSave={save}
        saving={saving}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px' }}>
          <Field label="Slug">
            <input style={S.input} value={draft.slug} onChange={(e) => setDraft({ ...draft, slug: e.target.value })} />
          </Field>
          <Field label="Title">
            <input style={S.input} value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
          </Field>
        </div>
        <Field label="Meta Description">
          <textarea
            style={S.textarea}
            value={draft.meta_description ?? ''}
            onChange={(e) => setDraft({ ...draft, meta_description: e.target.value })}
          />
        </Field>
        <Field label="Meta Keywords">
          <input
            style={S.input}
            value={draft.meta_keywords ?? ''}
            onChange={(e) => setDraft({ ...draft, meta_keywords: e.target.value })}
          />
        </Field>
        <Field label="OG Image URL">
          <input
            style={S.input}
            value={draft.og_image_url ?? ''}
            onChange={(e) => setDraft({ ...draft, og_image_url: e.target.value || null })}
          />
        </Field>
        <Field label="Status">
          <select
            style={S.input}
            value={draft.status}
            onChange={(e) => setDraft({ ...draft, status: e.target.value as Page['status'] })}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </Field>
      </Modal>
    </div>
  );
}
