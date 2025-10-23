import './globals.css';
import type { Metadata } from 'next';
import { AuthProvider } from '@/lib/auth-context';
import LayoutContent from '@/components/LayoutContent';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Plataforma UX + IA | ACHS',
  description: 'Visualiza cómo el equipo de diseño crea maquetas y prototipos con Inteligencia Artificial',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <LayoutContent>{children}</LayoutContent>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
