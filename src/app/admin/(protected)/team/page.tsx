'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { PageHeader, Modal, Field, RowActions, Empty, S, useData, useAudit } from '@/components/admin/AdminShell';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  photo_url: string | null;
  linkedin_url: string | null;
  email: string | null;
  is_visible: boolean;
  order_index: number;
}

const EMPTY: TeamMember = {
  id: '',
  name: '',
  role: '',
  bio: '',
  photo_url: null,
  linkedin_url: null,
  email: null,
  is_visible: true,
  order_index: 0,
};

export default function TeamAdminPage() {
  const { data, loading, refresh } = useData<TeamMember>('cms_team_members', 'order_index', true);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<TeamMember>(EMPTY);
  const [saving, setSaving] = useState(false);
  const audit = useAudit();

  const save = async () => {
    if (!draft.name || !draft.role) return;
    setSaving(true);
    const supabase = createClient();
    const payload = { ...draft };
    if (!draft.id) {
      delete (payload as Partial<TeamMember>).id;
      const { data: c } = await supabase.from('cms_team_members').insert(payload).select().single();
      if (c) await audit('created', 'team_member', c.id);
    } else {
      await supabase.from('cms_team_members').update(payload).eq('id', draft.id);
      await audit('updated', 'team_member', draft.id);
    }
    setSaving(false);
    setOpen(false);
    refresh();
  };

  const remove = async (id: string) => {
    const supabase = createClient();
    await supabase.from('cms_team_members').delete().eq('id', id);
    await audit('deleted', 'team_member', id);
    refresh();
  };

  return (
    <div style={S.page}>
      <PageHeader
        title="Team"
        subtitle="Team members shown on About page"
        actionLabel="Add Member"
        onAction={() => {
          setDraft(EMPTY);
          setOpen(true);
        }}
      />

      <div style={S.card}>
        {loading ? (
          <Empty message="Loading…" />
        ) : data.length === 0 ? (
          <Empty message="No team members yet." />
        ) : (
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Name</th>
                <th style={S.th}>Role</th>
                <th style={S.th}>Email</th>
                <th style={S.th}>Visible</th>
                <th style={{ ...S.th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((m) => (
                <tr key={m.id}>
                  <td style={{ ...S.td, color: '#f1f5f9', fontWeight: 500 }}>{m.name}</td>
                  <td style={S.td}>{m.role}</td>
                  <td style={S.td}>{m.email}</td>
                  <td style={S.td}>{m.is_visible ? '✓' : '—'}</td>
                  <td style={S.td}>
                    <RowActions
                      onEdit={() => {
                        setDraft(m);
                        setOpen(true);
                      }}
                      onDelete={() => remove(m.id)}
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
        title={draft.id ? 'Edit Member' : 'New Member'}
        onClose={() => setOpen(false)}
        onSave={save}
        saving={saving}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <Field label="Name">
            <input style={S.input} value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
          </Field>
          <Field label="Role">
            <input style={S.input} value={draft.role} onChange={(e) => setDraft({ ...draft, role: e.target.value })} />
          </Field>
        </div>
        <Field label="Bio">
          <textarea
            style={S.textarea}
            value={draft.bio ?? ''}
            onChange={(e) => setDraft({ ...draft, bio: e.target.value })}
          />
        </Field>
        <Field label="Photo URL">
          <input
            style={S.input}
            value={draft.photo_url ?? ''}
            onChange={(e) => setDraft({ ...draft, photo_url: e.target.value || null })}
          />
        </Field>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <Field label="LinkedIn URL">
            <input
              style={S.input}
              value={draft.linkedin_url ?? ''}
              onChange={(e) => setDraft({ ...draft, linkedin_url: e.target.value || null })}
            />
          </Field>
          <Field label="Email">
            <input
              style={S.input}
              value={draft.email ?? ''}
              onChange={(e) => setDraft({ ...draft, email: e.target.value || null })}
            />
          </Field>
        </div>
        <Field label="Order">
          <input
            type="number"
            style={S.input}
            value={draft.order_index}
            onChange={(e) => setDraft({ ...draft, order_index: parseInt(e.target.value) || 0 })}
          />
        </Field>
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
