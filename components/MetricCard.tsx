'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  description: string;
  delay?: number;
}

export default function MetricCard({
  icon: Icon,
  value,
  suffix = '',
  label,
  description,
  delay = 0,
}: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const displayValue = Math.round(latest);
        ref.current.textContent = `${displayValue}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#00A859] to-[#8CC63F] rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      <div ref={ref} className="text-4xl font-bold text-gray-900 mb-2">
        0{suffix}
      </div>

      <div className="text-sm font-semibold text-[#00A859] mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </motion.div>
  );
}
