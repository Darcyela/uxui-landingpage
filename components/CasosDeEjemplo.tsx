'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Clock, Zap } from 'lucide-react';
import Image from 'next/image';

interface CaseStudy {
  title: string;
  description: string;
  timeCreated: string;
  tokensUsed: string;
  link: string;
  imageMock: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Gestión Preventiva Inacap',
    description:
      'Experiencia digital colaborativa diseñada para optimizar la gestión preventiva de equipos académicos y operativos. Integra flujos de trabajo impulsados por IA para el seguimiento, análisis y visualización de tareas en tiempo real.',
    timeCreated: '1 semana',
    tokensUsed: '7 millones',
    link: 'https://ssoma-inacap-compreh-48ba.bolt.host/',
    imageMock: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    title: 'Feature Minutas (CPHS)',
    description:
      'Módulo funcional para la gestión de minutas de reuniones CPHS, diseñado con iteraciones asistidas por IA para mejorar la usabilidad y automatizar la redacción y validación de acuerdos.',
    timeCreated: '2 semanas',
    tokensUsed: '10 millones',
    link: 'https://minutas-cphs-v2-qhev.bolt.host/minutas',
    imageMock: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    title: 'Pintemos Chile de Verde',
    description:
      'Formulario digital creado para recopilar datos de referidos de ACHS y facilitar el primer contacto entre el referido y la organización. Este flujo automatizado permite gestionar la información de manera segura y optimizar la comunicación inicial.',
    timeCreated: '8 horas',
    tokensUsed: '3 millones',
    link: 'https://full-stack-form-app-z13v.bolt.host/',
    imageMock: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
  },
];

export default function CasosDeEjemplo() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Casos de ejemplo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ejemplos reales de proyectos creados con IA y diseño UX colaborativo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.imageMock}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {study.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                    {study.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="w-4 h-4 text-achs-blue-salud" />
                      <span className="text-gray-700">
                        <strong>Tiempo:</strong> {study.timeCreated}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Zap className="w-4 h-4 text-achs-blue-salud" />
                      <span className="text-gray-700">
                        <strong>Tokens:</strong> {study.tokensUsed}
                      </span>
                    </div>
                  </div>

                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full px-4 py-2.5 bg-achs-green-primary text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <span>Ver</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
