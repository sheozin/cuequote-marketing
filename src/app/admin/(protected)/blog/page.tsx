'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { PageHeader, Modal, Field, RowActions, Empty, S, useData, useAudit } from '@/components/admin/AdminShell';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string[];
  category: string;
  cover_image_url: string | null;
  tags: string[];
  read_time_minutes: number;
  status: 'draft' | 'published' | 'scheduled' | 'archived';
  published_at: string | null;
  author_name: string | null;
}

const EMPTY: BlogPost = {
  id: '',
  slug: '',
  title: '',
  excerpt: '',
  content: [],
  category: 'Guides',
  cover_image_url: null,
  tags: [],
  read_time_minutes: 5,
  status: 'draft',
  published_at: null,
  author_name: 'Sheriff',
};

export default function BlogAdminPage() {
  const { data, loading, refresh } = useData<BlogPost>('cms_blog_posts', 'published_at');
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<BlogPost>(EMPTY);
  const [saving, setSaving] = useState(false);
  const audit = useAudit();

  const openNew = () => {
    setDraft(EMPTY);
    setOpen(true);
  };
  const openEdit = (p: BlogPost) => {
    setDraft({ ...p, content: Array.isArray(p.content) ? p.content : [] });
    setOpen(true);
  };

  const save = async () => {
    if (!draft.title.trim() || !draft.slug.trim()) {
      alert('Title and slug are required');
      return;
    }
    setSaving(true);
    const supabase = createClient();
    const payload = {
      slug: draft.slug,
      title: draft.title,
      excerpt: draft.excerpt,
      content: draft.content,
      category: draft.category,
      cover_image_url: draft.cover_image_url,
      tags: draft.tags,
      read_time_minutes: draft.read_time_minutes,
      status: draft.status,
      published_at: draft.status === 'published' ? draft.published_at ?? new Date().toISOString() : draft.published_at,
      author_name: draft.author_name,
    };
    if (draft.id) {
      await supabase.from('cms_blog_posts').update(payload).eq('id', draft.id);
      await audit('updated', 'blog_post', draft.id);
    } else {
      const { data: created } = await supabase.from('cms_blog_posts').insert(payload).select().single();
      if (created) await audit('created', 'blog_post', created.id);
    }
    setSaving(false);
    setOpen(false);
    refresh();
  };

  const remove = async (id: string) => {
    const supabase = createClient();
    await supabase.from('cms_blog_posts').delete().eq('id', id);
    await audit('deleted', 'blog_post', id);
    refresh();
  };

  return (
    <div style={S.page}>
      <PageHeader
        title="Blog Posts"
        subtitle="Manage articles on cuequote.com/blog"
        actionLabel="New Post"
        onAction={openNew}
      />

      <div style={S.card}>
        {loading ? (
          <Empty message="Loading…" />
        ) : data.length === 0 ? (
          <Empty message="No blog posts yet. Create your first one." />
        ) : (
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Title</th>
                <th style={S.th}>Category</th>
                <th style={S.th}>Status</th>
                <th style={S.th}>Published</th>
                <th style={{ ...S.th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((p) => (
                <tr key={p.id}>
                  <td style={S.td}>
                    <div style={{ color: '#f1f5f9', fontWeight: 500 }}>{p.title}</div>
                    <div style={{ color: '#64748b', fontSize: '12px', marginTop: '2px' }}>/{p.slug}</div>
                  </td>
                  <td style={S.td}>{p.category}</td>
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
                    {p.published_at ? new Date(p.published_at).toLocaleDateString() : '—'}
                  </td>
                  <td style={S.td}>
                    <RowActions onEdit={() => openEdit(p)} onDelete={() => remove(p.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Modal
        open={open}
        title={draft.id ? 'Edit Post' : 'New Post'}
        onClose={() => setOpen(false)}
        onSave={save}
        saving={saving}
      >
        <Field label="Title">
          <input style={S.input} value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
        </Field>
        <Field label="Slug (URL)">
          <input style={S.input} value={draft.slug} onChange={(e) => setDraft({ ...draft, slug: e.target.value })} />
        </Field>
        <Field label="Excerpt">
          <textarea
            style={S.textarea}
            value={draft.excerpt ?? ''}
            onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })}
          />
        </Field>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
          <Field label="Category">
            <input style={S.input} value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} />
          </Field>
          <Field label="Read time (min)">
            <input
              type="number"
              style={S.input}
              value={draft.read_time_minutes}
              onChange={(e) => setDraft({ ...draft, read_time_minutes: parseInt(e.target.value) || 5 })}
            />
          </Field>
          <Field label="Status">
            <select
              style={S.input}
              value={draft.status}
              onChange={(e) => setDraft({ ...draft, status: e.target.value as BlogPost['status'] })}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="scheduled">Scheduled</option>
              <option value="archived">Archived</option>
            </select>
          </Field>
        </div>
        <Field label="Content (one paragraph per line)">
          <textarea
            style={{ ...S.textarea, minHeight: '200px' }}
            value={(draft.content ?? []).join('\n\n')}
            onChange={(e) => setDraft({ ...draft, content: e.target.value.split('\n\n').filter(Boolean) })}
          />
        </Field>
        <Field label="Cover image URL (optional)">
          <input
            style={S.input}
            value={draft.cover_image_url ?? ''}
            onChange={(e) => setDraft({ ...draft, cover_image_url: e.target.value || null })}
          />
        </Field>
      </Modal>
    </div>
  );
}
