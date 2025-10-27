'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FlaskConical, ExternalLink, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TestingHeroProps {
  onStartAssessment: () => void;
  onViewGuides: () => void;
}

export default function TestingHero({ onStartAssessment, onViewGuides }: TestingHeroProps) {
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#27933E]/10 rounded-full">
              <Sparkles className="w-4 h-4 text-[#27933E]" />
              <span className="text-sm font-medium text-[#27933E]">
                Validación y Mejora Continua
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Testing de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#27933E] to-[#8CC63F]">
                Experiencia
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Evalúa, mide y mejora tus productos diseñados con IA. Utiliza
              metodologías validadas y herramientas profesionales para garantizar
              la mejor experiencia de usuario.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onStartAssessment}
                className="px-8 py-3 bg-[#27933E] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow cursor-pointer inline-flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Comenzar autoevaluación
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onViewGuides}
                className="px-8 py-3 bg-white text-[#27933E] rounded-full font-semibold border-2 border-[#27933E] hover:bg-[#27933E]/5 transition-colors cursor-pointer inline-flex items-center"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Ver guías de conexión
              </motion.button>
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
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Testing de usabilidad"
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
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Análisis de datos"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#27933E]/20 to-[#8CC63F]/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-[#8CC63F]/20 to-[#27933E]/20 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
