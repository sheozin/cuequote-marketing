'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { PageHeader, Modal, Field, RowActions, Empty, S, useData, useAudit } from '@/components/admin/AdminShell';

interface Media {
  id: string;
  filename: string;
  url: string;
  file_type: string | null;
  size_bytes: number | null;
  width: number | null;
  height: number | null;
  alt_text: string | null;
  created_at: string;
}

const EMPTY: Media = {
  id: '',
  filename: '',
  url: '',
  file_type: null,
  size_bytes: null,
  width: null,
  height: null,
  alt_text: null,
  created_at: new Date().toISOString(),
};

export default function MediaAdminPage() {
  const { data, loading, refresh } = useData<Media>('cms_media', 'created_at');
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Media>(EMPTY);
  const [saving, setSaving] = useState(false);
  const audit = useAudit();

  const save = async () => {
    if (!draft.filename || !draft.url) return;
    setSaving(true);
    const supabase = createClient();
    const payload = { ...draft };
    delete (payload as Partial<Media>).created_at;
    if (!draft.id) {
      delete (payload as Partial<Media>).id;
      const { data: c } = await supabase.from('cms_media').insert(payload).select().single();
      if (c) await audit('created', 'media', c.id);
    } else {
      await supabase.from('cms_media').update(payload).eq('id', draft.id);
      await audit('updated', 'media', draft.id);
    }
    setSaving(false);
    setOpen(false);
    refresh();
  };

  const remove = async (id: string) => {
    const supabase = createClient();
    await supabase.from('cms_media').delete().eq('id', id);
    await audit('deleted', 'media', id);
    refresh();
  };

  return (
    <div style={S.page}>
      <PageHeader
        title="Media Library"
        subtitle="Manage image URLs (paste CDN or Supabase Storage URLs)"
        actionLabel="Add Media"
        onAction={() => {
          setDraft(EMPTY);
          setOpen(true);
        }}
      />

      {loading ? (
        <Empty message="Loading…" />
      ) : data.length === 0 ? (
        <div style={S.card}>
          <Empty message="No media yet. Add image URLs to manage them." />
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '16px',
          }}
        >
          {data.map((m) => (
            <div
              key={m.id}
              style={{
                background: '#111827',
                border: '1px solid #1e293b',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              {m.url && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={m.url}
                  alt={m.alt_text ?? m.filename}
                  style={{ width: '100%', height: '140px', objectFit: 'cover', background: '#0A0E1A' }}
                />
              )}
              <div style={{ padding: '12px' }}>
                <div style={{ fontSize: '13px', color: '#f1f5f9', fontWeight: 500, marginBottom: '4px' }}>
                  {m.filename}
                </div>
                <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '10px' }}>{m.file_type ?? '—'}</div>
                <RowActions
                  onEdit={() => {
                    setDraft(m);
                    setOpen(true);
                  }}
                  onDelete={() => remove(m.id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal
        open={open}
        title={draft.id ? 'Edit Media' : 'Add Media'}
        onClose={() => setOpen(false)}
        onSave={save}
        saving={saving}
      >
        <Field label="Filename">
          <input
            style={S.input}
            value={draft.filename}
            onChange={(e) => setDraft({ ...draft, filename: e.target.value })}
          />
        </Field>
        <Field label="URL">
          <input style={S.input} value={draft.url} onChange={(e) => setDraft({ ...draft, url: e.target.value })} />
        </Field>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
          <Field label="File Type">
            <input
              style={S.input}
              value={draft.file_type ?? ''}
              onChange={(e) => setDraft({ ...draft, file_type: e.target.value || null })}
            />
          </Field>
          <Field label="Width">
            <input
              type="number"
              style={S.input}
              value={draft.width ?? ''}
              onChange={(e) => setDraft({ ...draft, width: parseInt(e.target.value) || null })}
            />
          </Field>
          <Field label="Height">
            <input
              type="number"
              style={S.input}
              value={draft.height ?? ''}
              onChange={(e) => setDraft({ ...draft, height: parseInt(e.target.value) || null })}
            />
          </Field>
        </div>
        <Field label="Alt Text">
          <input
            style={S.input}
            value={draft.alt_text ?? ''}
            onChange={(e) => setDraft({ ...draft, alt_text: e.target.value || null })}
          />
        </Field>
      </Modal>
    </div>
  );
}
