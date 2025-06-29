'use client';

import { useAuth } from '@/context/AuthContext';
import { usePathname, useRouter } from 'next/navigation';

import { useEffect } from 'react';

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!user && !isLoading) {
      router.replace(`/login?redirect=${pathname}`);
    }
  }, [user, pathname, router, isLoading]);

  if (!user || isLoading) return <div>Loading...</div>;
  return (
    <div>
      AuthenticatedLayout
      {children}
    </div>
  );
};
export default AuthenticatedLayout;
