'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypographyToken } from '@/lib/tokens';

interface TokensTypographyScaleProps {
  mobileTypography: TypographyToken[];
  desktopTypography: TypographyToken[];
}

export default function TokensTypographyScale({
  mobileTypography,
  desktopTypography,
}: TokensTypographyScaleProps) {
  const [activeView, setActiveView] = useState<'mobile' | 'desktop'>('desktop');
  const typography = activeView === 'mobile' ? mobileTypography : desktopTypography;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900">Tipografías</h3>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveView('mobile')}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
              activeView === 'mobile'
                ? 'bg-white text-[#27933E] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Móvil
          </button>
          <button
            onClick={() => setActiveView('desktop')}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
              activeView === 'desktop'
                ? 'bg-white text-[#27933E] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Escritorio
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {typography.map((typo, index) => (
          <motion.div
            key={typo.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="space-y-4">
              <p
                style={{
                  fontSize: typo.fontSize,
                  lineHeight: typo.lineHeight,
                  fontWeight: typo.fontWeight,
                }}
                className="text-gray-900"
              >
                El diseño es la inteligencia hecha visible
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 border-t pt-4">
                <div>
                  <span className="font-semibold text-gray-900">{typo.name}</span>
                </div>
                <div className="flex gap-1">
                  <span className="text-gray-500">Tamaño:</span>
                  <span className="font-mono">{typo.fontSize}</span>
                </div>
                <div className="flex gap-1">
                  <span className="text-gray-500">Altura:</span>
                  <span className="font-mono">{typo.lineHeight}</span>
                </div>
                <div className="flex gap-1">
                  <span className="text-gray-500">Peso:</span>
                  <span className="font-mono">{typo.fontWeight}</span>
                </div>
                <div className="flex gap-1">
                  <span className="text-gray-500">Fuente:</span>
                  <span className="font-mono text-xs">{typo.fontFamily}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
