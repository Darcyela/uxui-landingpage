'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0097D7]/10 rounded-full">
              <Sparkles className="w-4 h-4 text-[#0097D7]" />
              <span className="text-sm font-medium text-[#0097D7]">
                Innovación en Diseño UX
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Plataforma{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A859] to-[#8CC63F]">
                UX + IA
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Visualiza cómo el equipo de diseño crea maquetas y prototipos
              funcionales con Inteligencia Artificial, acelerando la innovación
              y mejorando la experiencia del usuario.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/proceso">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#00A859] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  Explorar Proceso
                </motion.div>
              </Link>
              {/* HIDDEN: Ver Métricas button - uncomment to restore
              <a href="#impacto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-[#00A859] rounded-xl font-semibold border-2 border-[#00A859] hover:bg-[#00A859]/5 transition-colors cursor-pointer"
                >
                  Ver Métricas
                </motion.div>
              </a>
              */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Equipo colaborando en diseño"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-2xl mt-8"
              >
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                  alt="Diseñadores trabajando con tecnología"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#00A859]/20 to-[#8CC63F]/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-[#8CC63F]/20 to-[#00A859]/20 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
