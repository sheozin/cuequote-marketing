'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { PageHeader, Empty, S, useData, useAudit, Field } from '@/components/admin/AdminShell';
import { Save } from 'lucide-react';

interface Setting {
  key: string;
  value: unknown;
  description: string | null;
}

export default function SettingsAdminPage() {
  const { data, loading, refresh } = useData<Setting>('cms_site_settings', 'key', true);
  const [edits, setEdits] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const audit = useAudit();

  const setEdit = (key: string, value: string) => setEdits({ ...edits, [key]: value });

  const save = async () => {
    setSaving(true);
    const supabase = createClient();
    for (const [key, value] of Object.entries(edits)) {
      let parsed: unknown = value;
      try {
        parsed = JSON.parse(value);
      } catch {
        parsed = value;
      }
      await supabase.from('cms_site_settings').update({ value: parsed }).eq('key', key);
      await audit('updated', 'site_setting', null, { key, value: parsed });
    }
    setSaving(false);
    setEdits({});
    refresh();
  };

  return (
    <div style={S.page}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <h1 style={S.h1}>Site Settings</h1>
          <p style={S.sub}>Global configuration values</p>
        </div>
        {Object.keys(edits).length > 0 && (
          <button style={S.btn} onClick={save} disabled={saving}>
            <Save size={14} />
            {saving ? 'Saving…' : `Save ${Object.keys(edits).length} change${Object.keys(edits).length > 1 ? 's' : ''}`}
          </button>
        )}
      </div>

      <div style={{ ...S.card, padding: '24px' }}>
        {loading ? (
          <Empty message="Loading…" />
        ) : data.length === 0 ? (
          <Empty message="No settings configured." />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {data.map((s) => {
              const currentRaw =
                edits[s.key] ??
                (typeof s.value === 'string' ? s.value : JSON.stringify(s.value));
              return (
                <div
                  key={s.key}
                  style={{
                    padding: '16px 0',
                    borderBottom: '1px solid #1e293b',
                    display: 'grid',
                    gridTemplateColumns: '240px 1fr',
                    gap: '20px',
                    alignItems: 'start',
                  }}
                >
                  <div>
                    <div style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '13px' }}>{s.key}</div>
                    {s.description && (
                      <div style={{ color: '#64748b', fontSize: '12px', marginTop: '4px' }}>{s.description}</div>
                    )}
                  </div>
                  <input
                    style={S.input}
                    value={currentRaw}
                    onChange={(e) => setEdit(s.key, e.target.value)}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
