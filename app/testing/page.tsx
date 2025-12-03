'use client';

import { motion } from 'framer-motion';
import { FlaskConical, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

export default function TestingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={FlaskConical}
            title="Testing y Validación"
            subtitle="Métodos de prueba, resultados de usabilidad y métricas de calidad"
            centered
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mt-16"
          >
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00A859] to-[#006D38] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Próximamente
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Estamos consolidando nuestros procesos de testing y validación de UX,
                incluyendo pruebas de usabilidad, tests A/B, métricas de satisfacción
                y resultados de validación con usuarios reales.
              </p>

              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#00A859]/10 rounded-full text-[#006D38] text-sm font-medium">
                <span>En desarrollo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
