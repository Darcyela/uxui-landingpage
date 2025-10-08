'use client';

import { motion } from 'framer-motion';
import { Clock, CheckCircle2 } from 'lucide-react';
import { TimelineStep } from '@/lib/supabase';

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00A859] to-[#8CC63F]" />

      <div className="space-y-12">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
            >
              <div
                className={`w-full md:w-5/12 ${
                  isEven ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#00A859] hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.stage}
                    </h3>
                    <div className="flex items-center space-x-1 text-[#0097D7] text-sm font-semibold">
                      <Clock className="w-4 h-4" />
                      <span>{step.avg_duration_minutes} min</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-900 mb-2">
                      Herramientas:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-[#0097D7]/10 text-[#0097D7] text-xs font-medium rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 pt-4 border-t border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-[#00A859] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        Entregable:
                      </div>
                      <div className="text-sm text-gray-600">{step.output}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#00A859] to-[#8CC63F] rounded-full items-center justify-center shadow-lg z-10 border-4 border-white">
                <span className="text-white font-bold">{index + 1}</span>
              </div>

              <div className="md:hidden flex w-12 h-12 bg-gradient-to-br from-[#00A859] to-[#8CC63F] rounded-full items-center justify-center shadow-lg my-4 border-4 border-white">
                <span className="text-white font-bold">{index + 1}</span>
              </div>

              <div className="w-full md:w-5/12" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
