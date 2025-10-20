'use client';

import { useEffect, useState } from 'react';
import { Workflow, Clock, RotateCcw, Recycle } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import Timeline from '@/components/Timeline';
import TokenChart from '@/components/TokenChart';
import MetricCard from '@/components/MetricCard';
import CasosDeEjemplo from '@/components/CasosDeEjemplo';
import RequestFab from '@/components/proceso/RequestFab';
import { supabase, TimelineStep, IterationTokens, Metrics } from '@/lib/supabase';

export default function ProcesoPage() {
  const [timelineSteps, setTimelineSteps] = useState<TimelineStep[]>([]);
  const [tokenData, setTokenData] = useState<IterationTokens[]>([]);
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [stepsResult, tokensResult, metricsResult] = await Promise.all([
        supabase
          .from('timeline_steps')
          .select('*')
          .order('order_index', { ascending: true }),
        supabase
          .from('iterations_tokens')
          .select('*')
          .order('iteration_index', { ascending: true }),
        supabase.from('metrics').select('*').maybeSingle(),
      ]);

      if (stepsResult.data) setTimelineSteps(stepsResult.data);
      if (tokensResult.data) setTokenData(tokensResult.data);
      if (metricsResult.data) setMetrics(metricsResult.data);

      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#00A859] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Cargando proceso...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Workflow}
            title="Nuestro Proceso UX + IA"
            subtitle="Descubre cómo combinamos la experiencia de usuario con inteligencia artificial para crear productos digitales excepcionales de forma más rápida y eficiente."
          />

          <div className="mt-16">
            <Timeline steps={timelineSteps} />
          </div>
        </div>
      </section>

      {/* HIDDEN: Token usage section - uncomment to restore
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Uso de Tokens IA"
              subtitle="Medición del consumo de recursos de inteligencia artificial durante el proceso de diseño"
            />

            <TokenChart data={tokenData} />
          </div>
        </div>
      </section>
      */}

      <CasosDeEjemplo />

      {/* HIDDEN: Metrics section - uncomment to restore
      {metrics && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Métricas de Rendimiento"
              subtitle="Resultados cuantificables de nuestra metodología UX + IA"
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

      <RequestFab />
    </div>
  );
}
