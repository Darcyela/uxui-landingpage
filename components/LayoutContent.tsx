'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <>
      <Navbar />
      <main className={isLoginPage ? '' : 'pt-16'}>{children}</main>
      <Footer />
    </>
  );
}
