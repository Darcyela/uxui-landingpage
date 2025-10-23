'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { LogOut, User } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Proceso', href: '/proceso' },
  { name: 'Sistema de Diseño', href: '/sistema-de-diseno' },
  { name: 'Testing', href: '/testing' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-32 h-20 transform group-hover:scale-105 transition-transform">
              <Image
                src="/Icon-UXUI-Vhoriz.svg"
                alt="Equipo UX/UI ACHS"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-1 sm:space-x-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0097D7] transition-colors"
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0097D7]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {user && (
              <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-xs font-medium text-gray-700">{user.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Cerrar sesión"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Salir</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
