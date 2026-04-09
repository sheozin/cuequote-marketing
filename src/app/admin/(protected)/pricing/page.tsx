'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { PageHeader, Modal, Field, RowActions, Empty, S, useData, useAudit } from '@/components/admin/AdminShell';

interface Plan {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  price_monthly: number;
  price_annual: number | null;
  currency: string;
  features: string[];
  cta_label: string;
  cta_url: string;
  icon_name: string;
  is_popular: boolean;
  is_visible: boolean;
  order_index: number;
  stripe_price_id: string | null;
}

const EMPTY: Plan = {
  id: '',
  slug: '',
  name: '',
  description: '',
  price_monthly: 0,
  price_annual: null,
  currency: 'EUR',
  features: [],
  cta_label: 'Get Started',
  cta_url: 'https://app.cuequote.com/signup',
  icon_name: 'Zap',
  is_popular: false,
  is_visible: true,
  order_index: 0,
  stripe_price_id: null,
};

export default function PricingAdminPage() {
  const { data, loading, refresh } = useData<Plan>('cms_pricing_plans', 'order_index', true);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Plan>(EMPTY);
  const [saving, setSaving] = useState(false);
  const audit = useAudit();

  const save = async () => {
    if (!draft.name || !draft.slug) return alert('Name and slug required');
    setSaving(true);
    const supabase = createClient();
    const payload = { ...draft };
    if (!draft.id) {
      delete (payload as Partial<Plan>).id;
      const { data: c } = await supabase.from('cms_pricing_plans').insert(payload).select().single();
      if (c) await audit('created', 'pricing_plan', c.id);
    } else {
      await supabase.from('cms_pricing_plans').update(payload).eq('id', draft.id);
      await audit('updated', 'pricing_plan', draft.id);
    }
    setSaving(false);
    setOpen(false);
    refresh();
  };

  const remove = async (id: string) => {
    const supabase = createClient();
    await supabase.from('cms_pricing_plans').delete().eq('id', id);
    await audit('deleted', 'pricing_plan', id);
    refresh();
  };

  return (
    <div style={S.page}>
      <PageHeader
        title="Pricing Plans"
        subtitle="Manage plans shown on /pricing"
        actionLabel="New Plan"
        onAction={() => {
          setDraft(EMPTY);
          setOpen(true);
        }}
      />

      <div style={S.card}>
        {loading ? (
          <Empty message="Loading…" />
        ) : data.length === 0 ? (
          <Empty message="No plans yet." />
        ) : (
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Order</th>
                <th style={S.th}>Name</th>
                <th style={S.th}>Price</th>
                <th style={S.th}>Popular</th>
                <th style={S.th}>Visible</th>
                <th style={{ ...S.th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((p) => (
                <tr key={p.id}>
                  <td style={S.td}>{p.order_index}</td>
                  <td style={S.td}>
                    <div style={{ color: '#f1f5f9', fontWeight: 500 }}>{p.name}</div>
                    <div style={{ color: '#64748b', fontSize: '12px' }}>{p.description}</div>
                  </td>
                  <td style={S.td}>
                    {p.currency} {p.price_monthly}/mo
                  </td>
                  <td style={S.td}>
                    {p.is_popular && <span style={S.pill('rgba(16,185,129,0.15)', '#10b981')}>popular</span>}
                  </td>
                  <td style={S.td}>{p.is_visible ? '✓' : '—'}</td>
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
        title={draft.id ? 'Edit Plan' : 'New Plan'}
        onClose={() => setOpen(false)}
        onSave={save}
        saving={saving}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <Field label="Name">
            <input style={S.input} value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
          </Field>
          <Field label="Slug">
            <input style={S.input} value={draft.slug} onChange={(e) => setDraft({ ...draft, slug: e.target.value })} />
          </Field>
        </div>
        <Field label="Description">
          <textarea
            style={S.textarea}
            value={draft.description ?? ''}
            onChange={(e) => setDraft({ ...draft, description: e.target.value })}
          />
        </Field>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
          <Field label="Price (monthly)">
            <input
              type="number"
              style={S.input}
              value={draft.price_monthly}
              onChange={(e) => setDraft({ ...draft, price_monthly: parseFloat(e.target.value) || 0 })}
            />
          </Field>
          <Field label="Currency">
            <input style={S.input} value={draft.currency} onChange={(e) => setDraft({ ...draft, currency: e.target.value })} />
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
        <Field label="Features (one per line)">
          <textarea
            style={S.textarea}
            value={(draft.features ?? []).join('\n')}
            onChange={(e) => setDraft({ ...draft, features: e.target.value.split('\n').filter(Boolean) })}
          />
        </Field>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <Field label="CTA Label">
            <input style={S.input} value={draft.cta_label} onChange={(e) => setDraft({ ...draft, cta_label: e.target.value })} />
          </Field>
          <Field label="CTA URL">
            <input style={S.input} value={draft.cta_url} onChange={(e) => setDraft({ ...draft, cta_url: e.target.value })} />
          </Field>
        </div>
        <Field label="Stripe Price ID">
          <input
            style={S.input}
            value={draft.stripe_price_id ?? ''}
            onChange={(e) => setDraft({ ...draft, stripe_price_id: e.target.value || null })}
          />
        </Field>
        <div style={{ display: 'flex', gap: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1', fontSize: '13px' }}>
            <input
              type="checkbox"
              checked={draft.is_popular}
              onChange={(e) => setDraft({ ...draft, is_popular: e.target.checked })}
            />
            Popular
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1', fontSize: '13px' }}>
            <input
              type="checkbox"
              checked={draft.is_visible}
              onChange={(e) => setDraft({ ...draft, is_visible: e.target.checked })}
            />
            Visible
          </label>
        </div>
      </Modal>
    </div>
  );
}
