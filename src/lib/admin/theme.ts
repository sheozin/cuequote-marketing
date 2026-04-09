import type { CSSProperties } from 'react';

export const colors = {
  bg: '#0A0E1A',
  card: '#111827',
  border: '#1e293b',
  accent: '#10b981',
  accentHover: '#059669',
  text: '#f1f5f9',
  muted: '#64748b',
  danger: '#ef4444',
  warning: '#f59e0b',
  input: '#0f172a',
};

export const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: colors.bg,
    color: colors.text,
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
  },
  container: {
    padding: '32px',
    maxWidth: '1400px',
  },
  h1: {
    fontSize: '28px',
    fontWeight: 700,
    marginBottom: '8px',
    color: colors.text,
  },
  subtitle: {
    fontSize: '14px',
    color: colors.muted,
    marginBottom: '24px',
  },
  card: {
    background: colors.card,
    border: `1px solid ${colors.border}`,
    borderRadius: '12px',
    padding: '20px',
  },
  button: {
    background: colors.accent,
    color: '#fff',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  },
  buttonSecondary: {
    background: 'transparent',
    color: colors.text,
    border: `1px solid ${colors.border}`,
    padding: '10px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  buttonDanger: {
    background: 'transparent',
    color: colors.danger,
    border: `1px solid ${colors.danger}`,
    padding: '8px 14px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    background: colors.card,
    border: `1px solid ${colors.border}`,
    borderRadius: '12px',
    overflow: 'hidden',
  },
  th: {
    textAlign: 'left' as const,
    padding: '12px 16px',
    fontSize: '12px',
    textTransform: 'uppercase' as const,
    color: colors.muted,
    fontWeight: 600,
    borderBottom: `1px solid ${colors.border}`,
    background: '#0f172a',
  },
  td: {
    padding: '14px 16px',
    fontSize: '14px',
    borderBottom: `1px solid ${colors.border}`,
    color: colors.text,
  },
  tr: {
    cursor: 'pointer',
  },
  input: {
    width: '100%',
    background: colors.input,
    color: colors.text,
    border: `1px solid ${colors.border}`,
    borderRadius: '8px',
    padding: '10px 12px',
    fontSize: '14px',
    fontFamily: 'inherit',
  },
  textarea: {
    width: '100%',
    background: colors.input,
    color: colors.text,
    border: `1px solid ${colors.border}`,
    borderRadius: '8px',
    padding: '10px 12px',
    fontSize: '14px',
    fontFamily: 'inherit',
    minHeight: '120px',
    resize: 'vertical' as const,
  },
  label: {
    display: 'block',
    fontSize: '12px',
    fontWeight: 600,
    color: colors.muted,
    textTransform: 'uppercase' as const,
    marginBottom: '6px',
    marginTop: '12px',
  },
  modal: {
    position: 'fixed' as const,
    inset: 0,
    background: 'rgba(0,0,0,0.75)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'auto',
    padding: '40px 20px',
  },
  modalBody: {
    background: colors.card,
    border: `1px solid ${colors.border}`,
    borderRadius: '12px',
    padding: '28px',
    width: '100%',
    maxWidth: '640px',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  badge: {
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: '999px',
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
  },
};

export async function logAudit(
  supabase: {
    from: (t: string) => { insert: (r: Record<string, unknown>) => Promise<unknown> };
    auth: { getUser: () => Promise<{ data: { user: { id?: string; email?: string } | null } }> };
  },
  action: string,
  entityType: string,
  entityId: string | number,
  diff?: Record<string, unknown>
) {
  try {
    const { data } = await supabase.auth.getUser();
    await supabase.from('cms_audit_log').insert({
      user_id: data.user?.id ?? null,
      user_email: data.user?.email ?? null,
      action,
      entity_type: entityType,
      entity_id: String(entityId),
      diff: diff ?? null,
    });
  } catch {
    // swallow audit failures
  }
}
