'use client';

import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { IterationTokens } from '@/lib/supabase';
import TokenCalculator from './TokenCalculator';

interface TokenChartProps {
  data: IterationTokens[];
}

export default function TokenChart({ data }: TokenChartProps) {
  const chartData = data.map((item) => ({
    iteration: `Iteración ${item.iteration_index}`,
    entrada: item.tokens_input,
    salida: item.tokens_output,
    total: item.tokens_total,
  }));

  const totalTokens = data.reduce((sum, item) => sum + item.tokens_total, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Consumo de Tokens por Iteración
        </h3>
        <p className="text-gray-600 mb-4">
          Visualización del uso de tokens de IA durante el proceso de diseño
        </p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#0097D7]/10 border border-[#0097D7]/20 rounded-xl p-4 text-sm text-gray-700 leading-relaxed"
        >
          <strong className="text-[#0097D7]">¿Qué son los tokens?</strong>{' '}
          Los tokens representan las unidades de procesamiento que utiliza la inteligencia artificial para analizar y generar información. Cada token equivale a una pequeña porción de texto o código que la IA interpreta durante el desarrollo. Un proyecto completo puede requerir millones de tokens, dependiendo de la complejidad de las pantallas, componentes y funciones generadas.
        </motion.div>
      </div>

      <div className="w-full h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorEntrada" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00A859" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#00A859" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorSalida" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0097D7" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0097D7" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="iteration"
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickLine={{ stroke: '#E5E7EB' }}
            />
            <YAxis
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickLine={{ stroke: '#E5E7EB' }}
              tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '12px',
              }}
              formatter={(value: number) => [
                value.toLocaleString('es-CL'),
                '',
              ]}
              labelStyle={{ fontWeight: 'bold', marginBottom: '8px' }}
            />
            <Legend
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => {
                const labels: Record<string, string> = {
                  entrada: 'Tokens de Entrada',
                  salida: 'Tokens de Salida',
                };
                return labels[value] || value;
              }}
            />
            <Area
              type="monotone"
              dataKey="entrada"
              stackId="1"
              stroke="#00A859"
              fill="url(#colorEntrada)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="salida"
              stackId="1"
              stroke="#0097D7"
              fill="url(#colorSalida)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gradient-to-br from-[#00A859]/5 to-[#8CC63F]/5 rounded-xl p-6 border border-[#00A859]/20">
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm text-gray-600 mb-1">Total acumulado</div>
              <div className="text-3xl font-bold text-[#00A859]">
                {(totalTokens / 1000000).toFixed(1)}M tokens
              </div>
            </div>
            <div className="text-sm text-gray-600 max-w-md">
              Estimación aproximada de{' '}
              <span className="font-semibold text-[#006D38]">
                5 millones de tokens
              </span>{' '}
              por proyecto completo, considerando todas las iteraciones y refinamientos.
            </div>
          </div>

          <TokenCalculator />
        </div>
      </div>
    </motion.div>
  );
}
