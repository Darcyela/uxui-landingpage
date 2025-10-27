'use client';

import { motion } from 'framer-motion';
import { Settings, Target, PlayCircle, BarChart3, RefreshCw, CheckCircle2, Clock } from 'lucide-react';

const steps = [
  {
    icon: Settings,
    stage: 'Configuración inicial',
    description: 'Conecta tu producto con Hotjar, Google Analytics o Maze para comenzar a recopilar datos de comportamiento y métricas de usuario.',
    tools: ['Hotjar', 'Google Analytics', 'Maze'],
    output: 'Integración completa con tracking activo',
    duration: '30-45 min',
  },
  {
    icon: Target,
    stage: 'Definición de objetivos',
    description: 'Establece qué métricas y comportamientos observar según tus objetivos de negocio y las necesidades de tus usuarios.',
    tools: ['KPIs', 'User Flows', 'Métricas clave'],
    output: 'Plan de testing documentado',
    duration: '45-60 min',
  },
  {
    icon: PlayCircle,
    stage: 'Ejecución remota',
    description: 'Realiza pruebas con usuarios reales en entornos digitales sin intervención directa, obteniendo insights auténticos.',
    tools: ['Tests remotos', 'A/B Testing', 'Card Sorting'],
    output: 'Datos de interacción de usuarios',
    duration: '1-2 semanas',
  },
  {
    icon: BarChart3,
    stage: 'Análisis de resultados',
    description: 'Revisa mapas de calor, clics, sesiones grabadas y métricas cuantitativas para identificar patrones y problemas.',
    tools: ['Heatmaps', 'Session Replay', 'Analytics'],
    output: 'Reporte de hallazgos y oportunidades',
    duration: '60-90 min',
  },
  {
    icon: RefreshCw,
    stage: 'Iteración',
    description: 'Aplica aprendizajes, registra hallazgos en el sistema de diseño y mejora continuamente tu producto.',
    tools: ['Design System', 'Documentación', 'Backlog'],
    output: 'Mejoras implementadas y documentadas',
    duration: 'Continuo',
  },
];

export default function TestingProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cómo hacemos Testing en ACHS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un proceso estructurado que combina herramientas profesionales con metodologías validadas
            para garantizar productos de alta calidad.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#27933E] to-[#8CC63F]" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#27933E] hover:shadow-xl transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#27933E] to-[#1f7330] rounded-xl flex items-center justify-center flex-shrink-0">
                            <step.icon className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {step.stage}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-1 text-[#2B6BDC] text-sm font-semibold">
                          <Clock className="w-4 h-4" />
                          <span>{step.duration}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="mb-4">
                        <div className="text-sm font-semibold text-gray-900 mb-2">
                          Herramientas:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {step.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="px-3 py-1 bg-[#2B6BDC]/10 text-[#2B6BDC] text-xs font-medium rounded-full"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 pt-4 border-t border-gray-100">
                        <CheckCircle2 className="w-5 h-5 text-[#27933E] flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            Entregable:
                          </div>
                          <div className="text-sm text-gray-600">{step.output}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#27933E] to-[#8CC63F] rounded-full items-center justify-center shadow-lg z-10 border-4 border-white">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>

                  <div className="md:hidden flex w-12 h-12 bg-gradient-to-br from-[#27933E] to-[#8CC63F] rounded-full items-center justify-center shadow-lg my-4 border-4 border-white">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>

                  <div className="w-full md:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
