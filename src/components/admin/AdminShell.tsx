'use client';

import { ReactNode, useEffect, useState } from 'react';
import { Plus, X, Trash2, Pencil, Save } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export const S = {
  page: { maxWidth: '1200px', margin: '0 auto' },
  header: { marginBottom: '24px' },
  h1: { fontSize: '24px', fontWeight: 700, color: '#f1f5f9', marginBottom: '4px' },
  sub: { color: '#64748b', fontSize: '14px' },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 14px',
    background: '#10b981',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
  } as const,
  btnGhost: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 14px',
    background: 'transparent',
    color: '#cbd5e1',
    border: '1px solid #1e293b',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
  } as const,
  btnDanger: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 14px',
    background: 'transparent',
    color: '#ef4444',
    border: '1px solid #7f1d1d',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
  } as const,
  card: {
    background: '#111827',
    border: '1px solid #1e293b',
    borderRadius: '12px',
    padding: '0',
    overflow: 'hidden',
  } as const,
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
  },
  th: {
    padding: '12px 16px',
    textAlign: 'left' as const,
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    color: '#64748b',
    borderBottom: '1px solid #1e293b',
    background: '#0d1420',
  },
  td: {
    padding: '14px 16px',
    fontSize: '13px',
    color: '#cbd5e1',
    borderBottom: '1px solid #1e293b',
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    background: '#0A0E1A',
    color: '#f1f5f9',
    border: '1px solid #1e293b',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: 'inherit',
  } as const,
  textarea: {
    width: '100%',
    padding: '10px 12px',
    background: '#0A0E1A',
    color: '#f1f5f9',
    border: '1px solid #1e293b',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: 'inherit',
    minHeight: '100px',
    resize: 'vertical' as const,
  },
  label: {
    display: 'block',
    fontSize: '12px',
    fontWeight: 600,
    color: '#94a3b8',
    marginBottom: '6px',
  },
  field: { marginBottom: '16px' },
  modalBackdrop: {
    position: 'fixed' as const,
    inset: 0,
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    padding: '24px',
  },
  modal: {
    background: '#0d1420',
    border: '1px solid #1e293b',
    borderRadius: '16px',
    padding: '28px',
    maxWidth: '640px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto' as const,
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    paddingBottom: '16px',
    borderBottom: '1px solid #1e293b',
  },
  modalTitle: { fontSize: '18px', fontWeight: 700, color: '#f1f5f9' },
  modalActions: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-end',
    marginTop: '24px',
    paddingTop: '16px',
    borderTop: '1px solid #1e293b',
  },
  pill: (bg: string, color: string) =>
    ({
      display: 'inline-block',
      padding: '3px 10px',
      background: bg,
      color,
      borderRadius: '10px',
      fontSize: '11px',
      fontWeight: 600,
    }) as const,
};

export function PageHeader({
  title,
  subtitle,
  actionLabel,
  onAction,
}: {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '24px',
      }}
    >
      <div>
        <h1 style={S.h1}>{title}</h1>
        {subtitle && <p style={S.sub}>{subtitle}</p>}
      </div>
      {actionLabel && onAction && (
        <button style={S.btn} onClick={onAction}>
          <Plus size={14} />
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export function Modal({
  open,
  title,
  onClose,
  onSave,
  saving,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  onSave?: () => void;
  saving?: boolean;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div style={S.modalBackdrop} onClick={onClose}>
      <div
        style={S.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div style={S.modalHeader}>
          <div style={S.modalTitle}>{title}</div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#64748b',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            <X size={18} />
          </button>
        </div>
        {children}
        {onSave && (
          <div style={S.modalActions}>
            <button style={S.btnGhost} onClick={onClose}>
              Cancel
            </button>
            <button style={S.btn} onClick={onSave} disabled={saving}>
              <Save size={14} />
              {saving ? 'Saving…' : 'Save'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function RowActions({
  onEdit,
  onDelete,
}: {
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
      <button
        onClick={onEdit}
        title="Edit"
        style={{
          background: 'transparent',
          border: '1px solid #1e293b',
          color: '#cbd5e1',
          padding: '6px 8px',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        <Pencil size={14} />
      </button>
      <button
        onClick={() => {
          if (confirm('Delete this item? This cannot be undone.')) onDelete();
        }}
        title="Delete"
        style={{
          background: 'transparent',
          border: '1px solid #7f1d1d',
          color: '#ef4444',
          padding: '6px 8px',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        <Trash2 size={14} />
      </button>
    </div>
  );
}

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div style={S.field}>
      <label style={S.label}>{label}</label>
      {children}
    </div>
  );
}

export function Empty({ message }: { message: string }) {
  return (
    <div
      style={{
        padding: '40px 20px',
        textAlign: 'center',
        color: '#64748b',
        fontSize: '14px',
      }}
    >
      {message}
    </div>
  );
}

export function useAudit() {
  const supabase = createClient();
  return async (action: string, entity_type: string, entity_id: string | null, diff?: unknown) => {
    const { data: { user } } = await supabase.auth.getUser();
    await supabase.from('cms_audit_log').insert({
      user_id: user?.id,
      user_email: user?.email,
      action,
      entity_type,
      entity_id,
      diff: diff ? (diff as object) : null,
    });
  };
}

export function useData<T>(table: string, orderBy: string = 'created_at', ascending = false) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    setLoading(true);
    const supabase = createClient();
    const { data } = await supabase.from(table).select('*').order(orderBy, { ascending });
    setData((data ?? []) as T[]);
    setLoading(false);
  };

  useEffect(() => {
    refresh();
  }, []);

  return { data, loading, refresh };
}
