'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {Icon && (
        <div
          className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#00A859] to-[#8CC63F] rounded-xl mb-4 ${
            centered ? 'mx-auto' : ''
          }`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
