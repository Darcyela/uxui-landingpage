'use client';

import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DownloadStylesButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/api/design-tokens.css';
    link.download = 'achs-tokens.css';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#27933E] border-2 border-[#27933E] rounded-xl font-semibold hover:bg-[#27933E]/5 transition-colors shadow-lg"
    >
      <Download className="w-5 h-5" />
      Descargar hoja de estilos
    </motion.button>
  );
}
