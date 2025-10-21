'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, ExternalLink, Download } from 'lucide-react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import TokensColorGrid from '@/components/design-system/TokensColorGrid';
import TokensTypographyScale from '@/components/design-system/TokensTypographyScale';
import TokensSpacingRadius from '@/components/design-system/TokensSpacingRadius';
import ComponentGallery from '@/components/design-system/ComponentGallery';
import DownloadStylesButton from '@/components/design-system/DownloadStylesButton';
import {
  getSeguroColors,
  getSaludColors,
  getServiciosColors,
  getTextColors,
  getSurfaceColors,
  getSemanticColors,
  getTypographyScale,
  getSpacingScale,
} from '@/lib/tokens';

const FIGMA_URL = 'https://www.figma.com/design/sistema-achs';

type TokenTab = 'colores' | 'tipografia' | 'espaciado' | 'componentes';

export default function SistemaDiseno() {
  const [activeTokenTab, setActiveTokenTab] = useState<TokenTab>('colores');

  const seguroColors = getSeguroColors();
  const saludColors = getSaludColors();
  const serviciosColors = getServiciosColors();
  const textColors = getTextColors();
  const surfaceColors = getSurfaceColors();
  const semanticColors = getSemanticColors();
  const mobileTypography = getTypographyScale('mobile');
  const desktopTypography = getTypographyScale('desktop');
  const spacing = getSpacingScale();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#27933E]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2B6BDC]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#2B6BDC]/10 rounded-full">
                <Palette className="w-4 h-4 text-[#2B6BDC]" />
                <span className="text-sm font-medium text-[#2B6BDC]">
                  Librería de Componentes
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-[#27933E] leading-tight">
                Sistema de Diseño ACHS
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                Guía rápida y accesible para entender y usar nuestros componentes en tus proyectos.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href={FIGMA_URL} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#27933E] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Descargar en Figma
                  </motion.div>
                </a>
                <DownloadStylesButton />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                    alt="Diseño de interfaz"
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
                    src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80"
                    alt="Sistema de diseño"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Tokens de Diseño y Componentes"
            subtitle="Los bloques fundamentales de nuestro sistema de diseño"
            centered
          />

          <div className="mt-12">
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setActiveTokenTab('colores')}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                    activeTokenTab === 'colores'
                      ? 'bg-white text-[#27933E] shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Colores
                </button>
                <button
                  onClick={() => setActiveTokenTab('tipografia')}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                    activeTokenTab === 'tipografia'
                      ? 'bg-white text-[#27933E] shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Tipografía
                </button>
                <button
                  onClick={() => setActiveTokenTab('espaciado')}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                    activeTokenTab === 'espaciado'
                      ? 'bg-white text-[#27933E] shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Espaciado y Radio
                </button>
                <button
                  onClick={() => setActiveTokenTab('componentes')}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                    activeTokenTab === 'componentes'
                      ? 'bg-white text-[#27933E] shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Componentes
                </button>
              </div>
            </div>

            <motion.div
              key={activeTokenTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {activeTokenTab === 'colores' && (
                <>
                  <TokensColorGrid colors={seguroColors} title="ACHS Seguro Laboral" />
                  <TokensColorGrid colors={saludColors} title="ACHS Salud" />
                  <TokensColorGrid colors={serviciosColors} title="ACHS Servicios" />
                  <TokensColorGrid colors={textColors} title="Colores de Texto" />
                  <TokensColorGrid colors={surfaceColors} title="Colores de Superficie" />
                  <TokensColorGrid colors={semanticColors} title="Colores Semánticos" />
                </>
              )}

              {activeTokenTab === 'tipografia' && (
                <TokensTypographyScale
                  mobileTypography={mobileTypography}
                  desktopTypography={desktopTypography}
                />
              )}

              {activeTokenTab === 'espaciado' && (
                <TokensSpacingRadius spacing={spacing} />
              )}

              {activeTokenTab === 'componentes' && (
                <ComponentGallery />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Esta librería usa tokens del Sistema de Diseño ACHS. Última actualización: 20 de Octubre del 2025
          </p>
        </div>
      </section>
    </div>
  );
}
