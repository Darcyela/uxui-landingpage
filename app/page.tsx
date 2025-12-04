'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Workflow,
  Palette,
  FlaskConical,
  Clock,
  RotateCcw,
  Recycle,
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import MetricCard from '@/components/MetricCard';
import { supabase, Metrics } from '@/lib/supabase';

const navigationCards = [
  {
    title: 'Proceso',
    description: 'Descubre cómo integramos IA en nuestro flujo de trabajo UX',
    icon: Workflow,
    href: '/proceso',
    gradient: 'from-[#00A859] to-[#8CC63F]',
    available: true,
  },
  {
    title: 'Sistema de Diseño',
    description: 'Explora nuestra biblioteca de componentes y tokens',
    icon: Palette,
    href: '/sistema-de-diseno',
    gradient: 'from-[#8CC63F] to-[#00A859]',
    available: true,
  },
  {
    title: 'Testing',
    description: 'Conoce nuestros métodos de validación y resultados',
    icon: FlaskConical,
    href: '/testing',
    gradient: 'from-[#00A859] to-[#006D38]',
    available: true, // ← habilitada
  },
];

export default function HomePage() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);

  useEffect(() => {
    async function fetchMetrics() {
      const { data, error } = await supabase
        .from('metrics')
        .select('*')
        .maybeSingle();

      if (!error && data) {
        setMetrics(data);
      }
    }

    fetchMetrics();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Nuestra Plataforma"
            subtitle="Explora las diferentes secciones de nuestra metodología UX + IA"
            centered
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {navigationCards.map((card, index) => (
              <motion.div
                key={card.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={card.available ? card.href : '#'}
                  className={`block group ${
                    !card.available ? 'pointer-events-none' : ''
                  }`}
                >
                  <div
                    className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 h-full transition-all duration-300 ${
                      card.available
                        ? 'hover:shadow-2xl hover:scale-105 hover:border-[#00A859]'
                        : 'opacity-60'
                    }`}
                  >
                    {!card.available && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                        Próximamente
                      </div>
                    )}

                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform`}
                    >
                      <card.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {card.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {card.description}
                    </p>

                    {card.available && (
                      <div className="mt-6 flex items-center text-[#00A859] font-semibold group-hover:translate-x-2 transition-transform">
                        Ver más →
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIDDEN: Metrics section - uncomment to restore
      {metrics && (
        <section id="impacto" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Impacto Medible"
              subtitle="Los números que respaldan nuestra metodología"
              centered
            />

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <MetricCard
                icon={Clock}
                value={metrics.time_saved_pct}
                suffix="%"
                label="Tiempo Ahorrado"
                description="Reducción en tiempo de entrega vs proceso tradicional"
                delay={0}
              />
              <MetricCard
                icon={RotateCcw}
                value={metrics.avg_iterations}
                label="Iteraciones Promedio"
                description="Ciclos de refinamiento por proyecto"
                delay={0.1}
              />
              <MetricCard
                icon={Recycle}
                value={metrics.reuse_rate_pct}
                suffix="%"
                label="Tasa de Reutilización"
                description="Componentes y prompts reutilizados"
                delay={0.2}
              />
            </div>
          </div>
        </section>
      )}
      */}
    </div>
  );
}
