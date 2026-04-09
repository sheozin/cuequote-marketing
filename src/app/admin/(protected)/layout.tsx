import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminTopbar from '@/components/admin/AdminTopbar';

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('is_admin')
    .eq('id', user.id)
    .maybeSingle();

  if (!profile?.is_admin) {
    redirect('/admin/login?error=not_authorized');
  }

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: '#0A0E1A',
        color: '#f1f5f9',
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
      }}
    >
      <AdminSidebar userEmail={user.email ?? ''} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <AdminTopbar />
        <main style={{ flex: 1, padding: '32px', overflowX: 'auto' }}>{children}</main>
      </div>
    </div>
  );
}
