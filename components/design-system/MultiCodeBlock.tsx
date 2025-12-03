'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CodeSnippet {
  html: string;
  tailwind: string;
  react: string;
}

interface MultiCodeBlockProps {
  snippets: CodeSnippet;
}

export default function MultiCodeBlock({ snippets }: MultiCodeBlockProps) {
  const [activeTab, setActiveTab] = useState<'html' | 'tailwind' | 'react'>('html');
  const [copied, setCopied] = useState(false);

  const currentCode = snippets[activeTab];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-gray-900 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('html')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'html'
                ? 'bg-[#27933E] text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            HTML
          </button>
          <button
            onClick={() => setActiveTab('tailwind')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'tailwind'
                ? 'bg-[#27933E] text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Tailwind
          </button>
          <button
            onClick={() => setActiveTab('react')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'react'
                ? 'bg-[#27933E] text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            React
          </button>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-700"
          aria-label="Copiar código"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                Copiado
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-1.5"
              >
                <Copy className="w-4 h-4" />
                Copiar código
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
      <AnimatePresence mode="wait">
        <motion.pre
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="p-4 overflow-x-auto max-h-96"
        >
          <code className="text-sm text-gray-100 font-mono whitespace-pre">
            {currentCode}
          </code>
        </motion.pre>
      </AnimatePresence>
    </div>
  );
}
