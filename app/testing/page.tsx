'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import TestingHero from '@/components/testing/TestingHero';
import TestingProcess from '@/components/testing/TestingProcess';
import SelfAssessment from '@/components/testing/SelfAssessment';
import HeuristicEvaluator from '@/components/testing/HeuristicEvaluator';
import { Card } from '@/components/ui/card';
import { ExternalLink, BarChart3, MousePointerClick, TestTube2 } from 'lucide-react';

const tools = [
  {
    name: 'Hotjar',
    icon: MousePointerClick,
    description: 'Mapas de calor, grabaciones de sesión y análisis de comportamiento del usuario.',
    link: 'https://www.hotjar.com/',
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'Google Analytics',
    icon: BarChart3,
    description: 'Análisis cuantitativo de tráfico, conversiones y métricas de rendimiento.',
    link: 'https://analytics.google.com/',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Maze',
    icon: TestTube2,
    description: 'Tests de usabilidad remotos, tree testing y validación de prototipos.',
    link: 'https://maze.co/',
    color: 'from-purple-500 to-pink-500',
  },
];

export default function TestingPage() {
  const [showGuides, setShowGuides] = useState(false);
  const assessmentRef = useRef<HTMLDivElement>(null);

  const handleViewGuides = () => {
    setShowGuides(true);
    setTimeout(() => {
      document.getElementById('guides-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleStartAssessment = () => {
    setTimeout(() => {
      document.getElementById('self-assessment')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <TestingHero onStartAssessment={handleStartAssessment} onViewGuides={handleViewGuides} />

      <TestingProcess />

      {showGuides && (
        <section id="guides-section" className="py-20 bg-gradient-to-br from-[#2B6BDC]/5 to-[#27933E]/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Herramientas de Testing
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conecta estas herramientas profesionales para comenzar a medir y mejorar la experiencia de usuario.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#27933E]">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{tool.name}</h3>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">
                      {tool.description}
                    </p>
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#27933E] hover:text-[#1f7330] font-bold transition-colors"
                    >
                      Visitar sitio web
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div ref={assessmentRef}>
        <SelfAssessment />
      </div>

      <HeuristicEvaluator />
    </div>
  );
}
