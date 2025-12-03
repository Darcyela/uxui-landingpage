'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ChevronUp, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface HeuristicResult {
  id: number;
  name: string;
  score: number;
  findings: string;
  recommendations: string;
}

interface EvaluationResult {
  overallScore: number;
  strengths: string;
  opportunities: string;
  recommendation: string;
  heuristics: HeuristicResult[];
}

const heuristicNames = [
  'Visibilidad del estado del sistema',
  'Correspondencia con el mundo real',
  'Control y libertad del usuario',
  'Consistencia y estándares',
  'Prevención de errores',
  'Reconocimiento antes que recuerdo',
  'Flexibilidad y eficiencia de uso',
  'Estética y diseño minimalista',
  'Recuperación ante errores',
  'Ayuda y documentación',
];

function generateMockEvaluation(url: string): EvaluationResult {
  const scores = [4.2, 3.5, 4.8, 4.0, 3.2, 4.5, 3.8, 4.7, 3.9, 4.1];
  const overallScore = Number((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1));

  const heuristics: HeuristicResult[] = heuristicNames.map((name, index) => ({
    id: index + 1,
    name,
    score: scores[index],
    findings: getFindingsForHeuristic(index, scores[index]),
    recommendations: getRecommendationsForHeuristic(index, scores[index]),
  }));

  return {
    overallScore,
    strengths: 'El diseño presenta una estética limpia y moderna, con buen uso de patrones consistentes y navegación intuitiva.',
    opportunities: 'Se detectaron oportunidades de mejora en la visibilidad del estado del sistema y prevención de errores.',
    recommendation: 'Añadir feedback visual en procesos largos y validación en tiempo real en formularios para mejorar la experiencia.',
    heuristics,
  };
}

function getFindingsForHeuristic(index: number, score: number): string {
  const findings = [
    'Falta feedback visual claro durante procesos de carga y transiciones entre estados.',
    'La terminología utilizada es clara y familiar para los usuarios del dominio.',
    'Los usuarios tienen buenas opciones para deshacer acciones y navegar libremente.',
    'Excelente aplicación de patrones de diseño y convenciones de la industria.',
    'Algunos formularios carecen de validación en tiempo real y mensajes de prevención.',
    'La interfaz hace buen uso de elementos reconocibles sin sobrecargar la memoria del usuario.',
    'Buenas opciones de navegación rápida, aunque faltan algunos atajos de teclado.',
    'El diseño es limpio y minimalista, con jerarquía visual clara y sin elementos innecesarios.',
    'Los mensajes de error son claros pero podrían ofrecer más opciones de recuperación.',
    'La documentación está presente pero podría ser más accesible y contextual.',
  ];
  return findings[index];
}

function getRecommendationsForHeuristic(index: number, score: number): string {
  const recommendations = [
    'Implementar indicadores de progreso y spinners en todas las operaciones asíncronas.',
    'Continuar usando lenguaje orientado al usuario y evitar jerga técnica innecesaria.',
    'Mantener las opciones de cancelar/deshacer y añadir confirmaciones en acciones críticas.',
    'Seguir manteniendo la consistencia en patrones visuales y de interacción.',
    'Añadir validación inline en formularios y mensajes preventivos antes de errores críticos.',
    'Continuar reduciendo la carga cognitiva con elementos visuales reconocibles y claros.',
    'Implementar atajos de teclado para usuarios avanzados y mejorar navegación por tabs.',
    'Mantener el enfoque minimalista y continuar eliminando elementos decorativos innecesarios.',
    'Expandir opciones de recuperación en mensajes de error con acciones sugeridas.',
    'Hacer la ayuda más contextual y accesible directamente desde las áreas de trabajo.',
  ];
  return recommendations[index];
}

function getScoreColor(score: number): { bg: string; text: string; icon: any } {
  if (score >= 4.0) {
    return { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle };
  }
  if (score >= 2.6) {
    return { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: AlertTriangle };
  }
  return { bg: 'bg-red-100', text: 'text-red-800', icon: AlertCircle };
}

export default function HeuristicEvaluator() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [expandedHeuristic, setExpandedHeuristic] = useState<number | null>(null);

  const handleEvaluate = async () => {
    if (!url.trim()) {
      return;
    }

    try {
      new URL(url);
    } catch {
      alert('Por favor ingresa una URL válida para evaluar.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setResult(generateMockEvaluation(url));
      setLoading(false);
    }, 2500);
  };

  const handleReset = () => {
    setUrl('');
    setResult(null);
    setExpandedHeuristic(null);
  };

  const toggleHeuristic = (id: number) => {
    setExpandedHeuristic(expandedHeuristic === id ? null : id);
  };

  if (result) {
    const scoreColor = getScoreColor(result.overallScore);
    const ScoreIcon = scoreColor.icon;

    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white shadow-xl border-2 border-gray-100 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Resultado General</h3>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="text-sm"
                  >
                    Nueva evaluación
                  </Button>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  <div className="flex-shrink-0">
                    <div className={`w-32 h-32 rounded-2xl ${scoreColor.bg} flex flex-col items-center justify-center`}>
                      <ScoreIcon className={`w-8 h-8 ${scoreColor.text} mb-2`} />
                      <span className={`text-4xl font-bold ${scoreColor.text}`}>
                        {result.overallScore}
                      </span>
                      <span className={`text-sm ${scoreColor.text}`}>/ 5.0</span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Fortalezas
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        ✅ {result.strengths}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Oportunidades
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        ⚠️ {result.opportunities}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Recomendación
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        📋 {result.recommendation}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {result.heuristics.filter(h => h.score >= 4.0).length}
                    </div>
                    <div className="text-sm text-gray-600">Alta usabilidad</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">
                      {result.heuristics.filter(h => h.score >= 2.6 && h.score < 4.0).length}
                    </div>
                    <div className="text-sm text-gray-600">Mejoras necesarias</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">
                      {result.heuristics.filter(h => h.score < 2.6).length}
                    </div>
                    <div className="text-sm text-gray-600">Problemas críticos</div>
                  </div>
                </div>
              </Card>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Heurísticas Detalladas
                </h3>
                {result.heuristics.map((heuristic) => {
                  const hColor = getScoreColor(heuristic.score);
                  const isExpanded = expandedHeuristic === heuristic.id;

                  return (
                    <Card key={heuristic.id} className="overflow-hidden">
                      <button
                        onClick={() => toggleHeuristic(heuristic.id)}
                        className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className={`w-12 h-12 rounded-xl ${hColor.bg} flex items-center justify-center flex-shrink-0`}>
                            <span className={`text-lg font-bold ${hColor.text}`}>
                              {heuristic.score}
                            </span>
                          </div>
                          <div className="text-left">
                            <h4 className="font-semibold text-gray-900">
                              {heuristic.id}. {heuristic.name}
                            </h4>
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-gray-100"
                          >
                            <div className="p-6 space-y-4 bg-gray-50">
                              <div>
                                <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                  Hallazgos
                                </h5>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {heuristic.findings}
                                </p>
                              </div>
                              <div>
                                <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                  Recomendaciones
                                </h5>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {heuristic.recommendations}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Evaluación Heurística con IA
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Analiza tu producto automáticamente usando las 10 heurísticas de Jakob Nielsen.
            Obtén un diagnóstico completo con puntajes y recomendaciones.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#27933E] to-[#1f7330] rounded-2xl mb-6 mx-auto">
              <Sparkles className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Ingresa la URL de tu producto
            </h3>

            <div className="space-y-4">
              <Input
                type="url"
                placeholder="https://ejemplo.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-12 text-base"
                disabled={loading}
              />

              <Button
                onClick={handleEvaluate}
                disabled={loading || !url.trim()}
                className="w-full bg-[#27933E] hover:bg-[#1f7330] text-white h-12 rounded-full text-base font-semibold"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Evaluando con IA...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Evaluar con IA
                  </>
                )}
              </Button>
            </div>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-sm text-blue-800 text-center">
                <strong>Nota:</strong> Esta evaluación utiliza IA para analizar tu producto
                basándose en las 10 heurísticas de Nielsen.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
