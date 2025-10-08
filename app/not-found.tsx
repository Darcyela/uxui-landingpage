'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-[#00A859] to-[#006D38] rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <AlertCircle className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Página no encontrada
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8 max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida.
            Por favor verifica la URL o regresa a la página principal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00A859] to-[#8CC63F] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Home className="w-5 h-5" />
                Ir al inicio
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-[#00A859] transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver atrás
            </motion.button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Si crees que esto es un error, por favor contacta al equipo de soporte.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
