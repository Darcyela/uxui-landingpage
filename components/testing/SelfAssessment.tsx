'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string }[];
}

const questions: Question[] = [
  {
    id: 'stage',
    question: '¿En qué etapa está tu producto?',
    options: [
      { value: 'idea', label: 'Idea' },
      { value: 'prototype', label: 'Prototipo' },
      { value: 'active', label: 'Producto activo' },
    ],
  },
  {
    id: 'validate',
    question: '¿Qué deseas validar?',
    options: [
      { value: 'usability', label: 'Usabilidad' },
      { value: 'message', label: 'Mensaje' },
      { value: 'visual', label: 'Diseño visual' },
      { value: 'behavior', label: 'Comportamiento real' },
    ],
  },
  {
    id: 'users',
    question: '¿Tienes acceso a usuarios reales?',
    options: [
      { value: 'yes', label: 'Sí' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'detail',
    question: '¿Qué nivel de detalle buscas?',
    options: [
      { value: 'qualitative', label: 'Cualitativo' },
      { value: 'quantitative', label: 'Cuantitativo' },
    ],
  },
  {
    id: 'tools',
    question: '¿Tu equipo cuenta con herramientas de testeo?',
    options: [
      { value: 'yes', label: 'Sí' },
      { value: 'no', label: 'No' },
    ],
  },
];

interface Methodology {
  name: string;
  description: string;
  link: string;
}

function getMethodology(answers: Record<string, string>): Methodology {
  if (answers.stage === 'idea' || answers.stage === 'prototype') {
    if (answers.validate === 'usability') {
      return {
        name: 'Test de usabilidad con prototipo',
        description: 'Prueba tu prototipo con usuarios reales para validar flujos y decisiones de diseño antes de desarrollar. Utiliza herramientas como Maze o Figma para tests remotos.',
        link: 'https://www.nngroup.com/articles/usability-testing-101/',
      };
    }
    return {
      name: 'Entrevistas y Card Sorting',
      description: 'Realiza entrevistas con usuarios potenciales y organiza la información mediante card sorting para validar la arquitectura de información y prioridades.',
      link: 'https://www.nngroup.com/articles/card-sorting-definition/',
    };
  }

  if (answers.stage === 'active') {
    if (answers.tools === 'yes' && answers.detail === 'quantitative') {
      return {
        name: 'Test de usabilidad remoto con Maze',
        description: 'Ejecuta tests remotos moderados o no moderados con usuarios reales. Maze te permite medir tasas de éxito, tiempo de tarea y satisfacción con métricas cuantitativas.',
        link: 'https://www.nngroup.com/articles/remote-usability-tests/',
      };
    }
    if (answers.validate === 'behavior') {
      return {
        name: 'Análisis de Analytics y Heatmaps',
        description: 'Utiliza Google Analytics para datos cuantitativos y Hotjar para mapas de calor, grabaciones de sesión y análisis cualitativo del comportamiento real de los usuarios.',
        link: 'https://www.nngroup.com/articles/analytics-user-experience/',
      };
    }
    return {
      name: 'Test A/B y experimentación',
      description: 'Prueba diferentes versiones de tu producto en producción con usuarios reales. Mide resultados estadísticamente significativos para tomar decisiones basadas en datos.',
      link: 'https://www.nngroup.com/articles/ab-testing-usability-engineering/',
    };
  }

  return {
    name: 'Evaluación heurística',
    description: 'Una evaluación experta basada en principios de usabilidad. Es rápida, económica y no requiere usuarios. Ideal para identificar problemas antes de invertir en tests con usuarios.',
    link: 'https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/',
  };
}

export default function SelfAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Methodology | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResult(getMethodology(newAnswers));
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    return (
      <section className="py-20 bg-gradient-to-br from-[#27933E]/5 to-[#8CC63F]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="p-10 md:p-12 bg-white shadow-2xl border-2 border-[#27933E]/20">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#27933E] to-[#8CC63F] rounded-2xl mb-6 mx-auto">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                {result.name}
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
                {result.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(result.link, '_blank')}
                  className="px-8 py-3 bg-[#27933E] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow inline-flex items-center justify-center"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Leer más en NN/g
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReset}
                  className="px-8 py-3 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
                >
                  Reiniciar evaluación
                </motion.button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="self-assessment" className="py-20 bg-gradient-to-br from-[#27933E]/5 to-[#8CC63F]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#27933E]/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#27933E]" />
            <span className="text-sm font-medium text-[#27933E]">
              Autoevaluación Interactiva
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Qué metodología de testeo debo aplicar?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Responde algunas preguntas para descubrir la metodología de testing más adecuada para tu proyecto.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-gray-700">
                Pregunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className="text-sm font-semibold text-[#27933E]">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-[#27933E] to-[#8CC63F] h-3 rounded-full shadow-sm"
              />
            </div>
          </div>

          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8 md:p-10 bg-white shadow-xl border-2 border-gray-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <motion.button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-[#27933E]/10 border-2 border-transparent hover:border-[#27933E] rounded-full transition-all font-semibold text-gray-700 hover:text-[#27933E] shadow-sm hover:shadow-md"
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
