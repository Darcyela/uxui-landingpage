import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
