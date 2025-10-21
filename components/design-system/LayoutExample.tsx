'use client';

import { useState } from 'react';
import { Menu, X, Home, Settings, Users, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ViewportMode = 'desktop' | 'mobile';

export default function LayoutExample() {
  const [viewportMode, setViewportMode] = useState<ViewportMode>('desktop');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setViewportMode('desktop')}
          className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
            viewportMode === 'desktop'
              ? 'bg-[#27933E] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Desktop
        </button>
        <button
          onClick={() => setViewportMode('mobile')}
          className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
            viewportMode === 'mobile'
              ? 'bg-[#27933E] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Mobile
        </button>
      </div>

      <div
        className={`mx-auto bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 ${
          viewportMode === 'desktop' ? 'max-w-5xl' : 'max-w-sm'
        }`}
      >
        <div className="flex flex-col h-[600px]">
          <header className="bg-[#27933E] text-white px-6 py-4 flex items-center justify-between">
            {viewportMode === 'mobile' && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}
            <h2 className="text-lg font-bold">ACHS App</h2>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          </header>

          <div className="flex flex-1 overflow-hidden relative">
            <AnimatePresence>
              {(viewportMode === 'desktop' || sidebarOpen) && (
                <motion.aside
                  initial={viewportMode === 'mobile' ? { x: -280 } : false}
                  animate={{ x: 0 }}
                  exit={{ x: -280 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-gray-50 border-r border-gray-200 flex flex-col ${
                    viewportMode === 'desktop' ? 'w-64' : 'w-64 absolute left-0 top-0 bottom-0 z-10 shadow-xl'
                  }`}
                >
                  <nav className="flex-1 p-4 space-y-2">
                    <a
                      href="#"
                      className="flex items-center gap-3 px-4 py-3 bg-[#CCF1DC] text-[#27933E] rounded-lg font-semibold"
                    >
                      <Home className="w-5 h-5" />
                      Inicio
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Users className="w-5 h-5" />
                      Usuarios
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <FileText className="w-5 h-5" />
                      Documentos
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Settings className="w-5 h-5" />
                      Configuración
                    </a>
                  </nav>
                </motion.aside>
              )}
            </AnimatePresence>

            {viewportMode === 'mobile' && sidebarOpen && (
              <div
                className="absolute inset-0 bg-black/30 z-[5]"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            <main className="flex-1 overflow-y-auto p-6 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contenido Principal</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Card de Ejemplo</h4>
                  <p className="text-gray-600 text-sm">
                    Este es el área principal donde va el contenido de la aplicación.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Otra Card</h4>
                  <p className="text-gray-600 text-sm">
                    El layout se adapta automáticamente entre desktop y mobile.
                  </p>
                </div>
              </div>
            </main>
          </div>

          <footer className="bg-gray-50 border-t border-gray-200 px-6 py-4 text-center text-sm text-gray-600">
            © 2025 ACHS. Todos los derechos reservados.
          </footer>
        </div>
      </div>

      <div className="bg-gray-100 rounded-xl p-6">
        <h4 className="font-bold text-gray-900 mb-3">Estructura del Layout</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>Header:</strong> Barra superior con navegación y usuario</li>
          <li>• <strong>Sidebar:</strong> Menú lateral colapsable en mobile</li>
          <li>• <strong>Main:</strong> Área principal de contenido</li>
          <li>• <strong>Footer:</strong> Pie de página con información adicional</li>
        </ul>
      </div>
    </div>
  );
}
