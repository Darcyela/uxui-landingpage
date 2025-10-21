'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { ColorToken } from '@/lib/tokens';

interface TokensColorGridProps {
  colors: ColorToken[];
  title: string;
}

function getContrast(hexColor: string): string {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  if (luminance > 0.7) return 'AAA';
  if (luminance > 0.5) return 'AA';
  return 'A';
}

export default function TokensColorGrid({ colors, title }: TokensColorGridProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (value: string, index: number) => {
    await navigator.clipboard.writeText(value);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colors.map((color, index) => (
          <motion.div
            key={color.path}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div
              className="h-32 relative"
              style={{ backgroundColor: color.value }}
            >
              <div className="absolute top-2 right-2">
                <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md text-xs font-semibold text-gray-700">
                  {getContrast(color.value)}
                </span>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{color.name}</p>
                  <p className="text-gray-500 text-xs font-mono mt-1">{color.value.toUpperCase()}</p>
                </div>
                <button
                  onClick={() => handleCopy(color.value, index)}
                  className="ml-2 p-2 text-gray-400 hover:text-[#27933E] hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label={`Copiar ${color.value}`}
                >
                  {copiedIndex === index ? (
                    <Check className="w-4 h-4 text-[#27933E]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
