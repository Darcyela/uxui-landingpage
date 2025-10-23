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
import LayoutExample from '@/components/design-system/LayoutExample';
import BreakpointsGrid from '@/components/design-system/BreakpointsGrid';
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

type TokenTab = 'colores' | 'tipografia' | 'espaciado' | 'componentes' | 'layout' | 'breakpoints';
type MainTab = 'tokens' | 'stack' | 'documentacion';

export default function SistemaDiseno() {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('tokens');
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
                    src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80"
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
                    src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
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
            title="Documentación del Sistema"
            subtitle="Explora tokens, componentes y recursos del equipo UX"
            centered
          />

          <div className="flex justify-center mb-12 mt-8">
            <div className="inline-flex bg-gray-100 rounded-xl p-1.5">
              <button
                onClick={() => setActiveMainTab('tokens')}
                className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeMainTab === 'tokens'
                    ? 'bg-white text-[#27933E] shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Tokens y Componentes
              </button>
              <button
                onClick={() => setActiveMainTab('stack')}
                className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeMainTab === 'stack'
                    ? 'bg-white text-[#27933E] shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Stack Team UX
              </button>
              <button
                onClick={() => setActiveMainTab('documentacion')}
                className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeMainTab === 'documentacion'
                    ? 'bg-white text-[#27933E] shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Guías y Assets
              </button>
            </div>
          </div>

          {activeMainTab === 'tokens' && (
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
                  <button
                    onClick={() => setActiveTokenTab('layout')}
                    className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                      activeTokenTab === 'layout'
                        ? 'bg-white text-[#27933E] shadow-md'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Layout
                  </button>
                  <button
                    onClick={() => setActiveTokenTab('breakpoints')}
                    className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                      activeTokenTab === 'breakpoints'
                        ? 'bg-white text-[#27933E] shadow-md'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Breakpoints
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

                {activeTokenTab === 'layout' && (
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
                    <h3 className="text-2xl font-bold text-[#27933E] mb-6">Layout Base</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Estructura general con Header, Sidebar, Main y Footer. Cambia entre Desktop y Mobile para ver el comportamiento responsive.
                    </p>
                    <LayoutExample />
                  </div>
                )}

                {activeTokenTab === 'breakpoints' && (
                  <BreakpointsGrid />
                )}
              </motion.div>
            </div>
          )}

          {activeMainTab === 'stack' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-12 space-y-12"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-[#27933E] mb-6">Materiales del Equipo UX</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Figma Design System</h4>
                    <p className="text-gray-600 mb-4">Biblioteca completa de componentes y tokens de diseño</p>
                    <a href={FIGMA_URL} target="_blank" rel="noopener noreferrer" className="text-[#2B6BDC] hover:underline font-semibold text-sm">
                      Abrir en Figma →
                    </a>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Guías de Accesibilidad</h4>
                    <p className="text-gray-600 mb-4">Estándares WCAG 2.1 AA y mejores prácticas</p>
                    <span className="text-[#2B6BDC] font-semibold text-sm">Próximamente →</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Recursos Visuales</h4>
                    <p className="text-gray-600 mb-4">Iconografía, ilustraciones y assets gráficos</p>
                    <span className="text-[#2B6BDC] font-semibold text-sm">Próximamente →</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Templates y Wireframes</h4>
                    <p className="text-gray-600 mb-4">Plantillas base para proyectos nuevos</p>
                    <span className="text-[#2B6BDC] font-semibold text-sm">Próximamente →</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-[#27933E] mb-6">Stack Tecnológico</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#CCF1DC] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-[#27933E]">F</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Figma</h4>
                    <p className="text-sm text-gray-600">Diseño y prototipado</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#CCF1DC] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-[#27933E]">R</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">React</h4>
                    <p className="text-sm text-gray-600">Framework frontend</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#CCF1DC] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-[#27933E]">T</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Tailwind</h4>
                    <p className="text-sm text-gray-600">Estilos CSS</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeMainTab === 'documentacion' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-12 space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#27933E] mb-6">Guía Visual</h3>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    El sistema de diseño ACHS se basa en principios de claridad, accesibilidad y consistencia.
                    Todos los componentes están diseñados para funcionar en conjunto y crear experiencias coherentes.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Colores basados en las marcas institucionales (Seguro, Salud, Servicios)</li>
                    <li>✓ Tipografía escalable con ACHS Sans y Montserrat</li>
                    <li>✓ Espaciado consistente basado en escala de 4px</li>
                    <li>✓ Componentes responsive y accesibles</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#27933E] mb-6">Assets y Recursos</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                    <Download className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Iconos del Sistema</h4>
                    <p className="text-sm text-gray-600 mb-4">Pack completo de iconos SVG</p>
                    <span className="text-xs text-gray-500">Próximamente</span>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                    <Download className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Tipografías</h4>
                    <p className="text-sm text-gray-600 mb-4">ACHS Sans en todos los pesos</p>
                    <span className="text-xs text-gray-500">Próximamente</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
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
