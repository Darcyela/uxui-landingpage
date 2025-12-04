'use client';

import { Heart } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/login') {
    return null;
  }

  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-[#00A859]" />
            <span className="text-sm">
              Creado con dedicación por el Equipo UX
            </span>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Asociación Chilena de Seguridad (Achs)
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Subgerencia Desarrollo Preventivo y Proyectos · {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
