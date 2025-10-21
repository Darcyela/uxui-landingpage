'use client';

import { motion } from 'framer-motion';
import { SpacingToken } from '@/lib/tokens';

interface TokensSpacingRadiusProps {
  spacing: SpacingToken[];
}

const borderRadiusExamples = [
  { name: 'sm', value: '8px' },
  { name: 'md', value: '12px' },
  { name: 'lg', value: '16px' },
  { name: 'xl', value: '24px' },
];

export default function TokensSpacingRadius({ spacing }: TokensSpacingRadiusProps) {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Escala de Espaciado</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spacing.map((space, index) => (
            <motion.div
              key={space.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{space.name}</p>
                    <p className="text-sm text-gray-500 font-mono">{space.value}</p>
                  </div>
                </div>
                <div className="bg-gray-400 rounded-lg" style={{ height: space.value, maxHeight: '80px' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Radio de Bordes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {borderRadiusExamples.map((radius, index) => (
            <motion.div
              key={radius.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 capitalize">{radius.name}</p>
                  <p className="text-sm text-gray-500 font-mono">{radius.value}</p>
                </div>
                <div
                  className="bg-gray-400 h-24"
                  style={{ borderRadius: radius.value }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
