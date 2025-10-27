'use client';

import { useState } from 'react';
import { ChevronDown, X, CheckCircle, AlertCircle, Info, AlertTriangle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CodeBlock from './CodeBlock';
import MultiCodeBlock from './MultiCodeBlock';
import LayoutExample from './LayoutExample';
import AccordionDemo from './AccordionDemo';
import CarouselDemo from './CarouselDemo';
import StepperDemo from './StepperDemo';
import CardsDemo from './CardsDemo';

interface ComponentExampleProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
}

interface MultiCodeExampleProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  snippets: {
    html: string;
    tailwind: string;
    react: string;
  };
}

function ComponentExample({ title, description, preview, code }: ComponentExampleProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
    >
      <div className="p-6 border-b border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
        {preview}
      </div>

      <div className="p-4 border-t border-gray-100">
        <button
          onClick={() => setShowCode(!showCode)}
          className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold text-[#27933E] hover:bg-gray-50 rounded-lg transition-colors"
        >
          <span>{showCode ? 'Ocultar código' : 'Ver código'}</span>
          <motion.div
            animate={{ rotate: showCode ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>

        <AnimatePresence>
          {showCode && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 overflow-hidden"
            >
              <CodeBlock code={code} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function MultiCodeExample({ title, description, preview, snippets }: MultiCodeExampleProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
    >
      <div className="p-6 border-b border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div id="achs-ui">
          {preview}
        </div>
      </div>

      <div className="p-4 border-t border-gray-100">
        <button
          onClick={() => setShowCode(!showCode)}
          className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold text-[#27933E] hover:bg-gray-50 rounded-lg transition-colors"
        >
          <span>{showCode ? 'Ocultar código' : 'Ver código'}</span>
          <motion.div
            animate={{ rotate: showCode ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>

        <AnimatePresence>
          {showCode && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 overflow-hidden"
            >
              <MultiCodeBlock snippets={snippets} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ComponentGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<'seguro' | 'salud' | 'servicios'>('seguro');

  return (
    <div className="space-y-8">
      <MultiCodeExample
        title="Acordeones"
        description="Acordeones interactivos con animación suave y accesibilidad integrada."
        preview={<AccordionDemo />}
        snippets={{
          html: `<!-- Acordeón Accesible -->
<div class="accordion">
  <div class="accordion-item">
    <button
      aria-expanded="true"
      aria-controls="panel-1"
      class="accordion-button"
    >
      Título 1
      <span class="accordion-icon">▼</span>
    </button>
    <div id="panel-1" role="region" class="accordion-panel">
      <p>Contenido del primer acordeón.</p>
    </div>
  </div>

  <div class="accordion-item">
    <button
      aria-expanded="false"
      aria-controls="panel-2"
      class="accordion-button"
    >
      Título 2
      <span class="accordion-icon">▼</span>
    </button>
    <div id="panel-2" role="region" class="accordion-panel hidden">
      <p>Contenido del segundo acordeón.</p>
    </div>
  </div>
</div>`,
          tailwind: `<!-- Acordeón con Tailwind -->
<div class="bg-white rounded-xl shadow-md overflow-hidden">
  <div class="border-b border-gray-200">
    <button
      aria-expanded="true"
      aria-controls="panel-1"
      class="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
    >
      <span class="text-base font-semibold text-gray-900">Título 1</span>
      <svg class="w-5 h-5 text-green-600 transform rotate-180 transition-transform" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7 10l5 5 5-5z"/>
      </svg>
    </button>
    <div id="panel-1" role="region" class="px-6 pb-4 text-gray-700">
      Contenido del primer acordeón con espaciado consistente.
    </div>
  </div>
</div>

<style>
  .accordion-button[aria-expanded="false"] svg {
    transform: rotate(0deg);
  }
</style>`,
          react: `import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    { title: 'Título 1', content: 'Contenido 1' },
    { title: 'Título 2', content: 'Contenido 2' },
    { title: 'Título 3', content: 'Contenido 3' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {items.map((item, idx) => (
        <div key={idx} className="border-b border-gray-200">
          <button
            onClick={() => setOpenIndex(idx === openIndex ? null : idx)}
            aria-expanded={openIndex === idx}
            className="w-full flex items-center justify-between px-6 py-4"
          >
            <span className="font-semibold">{item.title}</span>
            <ChevronDown
              className={\`w-5 h-5 transition-transform \${
                openIndex === idx ? 'rotate-180' : ''
              }\`}
            />
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}`
        }}
      />

      <MultiCodeExample
        title="Carrusel de Imágenes"
        description="Banner carrusel con título, contexto y botones de acción. Versión desktop panorámica y mobile vertical."
        preview={
          <div className="space-y-8">
            <div>
              <h5 className="text-sm font-bold text-gray-700 mb-4">Versión Desktop</h5>
              <CarouselDemo isMobile={false} />
            </div>
            <div>
              <h5 className="text-sm font-bold text-gray-700 mb-4">Versión Mobile</h5>
              <CarouselDemo isMobile={true} />
            </div>
          </div>
        }
        snippets={{
          html: `<!-- Carrusel Desktop -->
<div class="carousel carousel--desktop">
  <div class="carousel-slide">
    <img src="imagen.jpg" alt="Banner" />
    <div class="carousel-overlay">
      <div class="carousel-content">
        <h2>Título de máximo 41 caracteres</h2>
        <p>Contexto del banner de máximo 112 caracteres</p>
        <div class="carousel-actions">
          <button class="btn btn--primary">Call to action principal</button>
          <button class="btn btn--secondary">Call to action secundario</button>
        </div>
      </div>
    </div>
  </div>
  <button aria-label="Anterior" class="carousel-control left">←</button>
  <button aria-label="Siguiente" class="carousel-control right">→</button>
</div>

<!-- Carrusel Mobile -->
<div class="carousel carousel--mobile">
  <div class="carousel-slide">
    <img src="imagen.jpg" alt="Banner" />
    <div class="carousel-overlay">
      <div class="carousel-content">
        <h3>Título de máximo 41 caracteres</h3>
        <p>Contexto del banner de máximo 112 caracteres</p>
        <button class="btn btn--primary">Call to action principal</button>
        <button class="btn btn--secondary">Call to action secundario</button>
        <div class="carousel-controls">
          <button aria-label="Anterior">←</button>
          <button aria-label="Siguiente">→</button>
        </div>
      </div>
    </div>
  </div>
</div>`,
          tailwind: `<!-- Carrusel Desktop con Tailwind -->
<div class="relative max-w-6xl mx-auto">
  <div class="relative overflow-hidden rounded-2xl shadow-xl aspect-[21/9]">
    <img src="imagen.jpg" alt="Banner" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

    <div class="absolute inset-y-0 left-0 flex items-center max-w-xl">
      <div class="p-12 space-y-4">
        <h2 class="text-white text-4xl font-bold leading-tight">
          Título de máximo 41 caracteres
        </h2>
        <p class="text-white/90 text-base leading-relaxed">
          Contexto del banner de máximo 112 caracteres
        </p>
        <div class="flex gap-4 pt-4">
          <button class="px-8 py-3 bg-green-600 text-white rounded-full font-semibold">
            Call to action principal
          </button>
          <button class="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold">
            Call to action secundario
          </button>
        </div>
      </div>
    </div>

    <button class="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-green-600 text-white rounded-full">
      ←
    </button>
    <button class="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-green-600 text-white rounded-full">
      →
    </button>
  </div>
</div>

<!-- Carrusel Mobile con Tailwind -->
<div class="relative max-w-sm mx-auto">
  <div class="relative overflow-hidden rounded-2xl shadow-xl aspect-[9/16]">
    <img src="imagen.jpg" alt="Banner" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    <div class="absolute inset-x-0 bottom-0 p-6 space-y-4">
      <h3 class="text-white text-2xl font-bold">Título de máximo 41 caracteres</h3>
      <p class="text-white/90 text-sm">Contexto del banner de máximo 112 caracteres</p>

      <div class="space-y-3">
        <button class="w-full px-6 py-3 bg-green-600 text-white rounded-full font-semibold">
          Call to action principal
        </button>
        <button class="w-full px-6 py-3 bg-white text-gray-900 rounded-full font-semibold">
          Call to action secundario
        </button>
      </div>

      <div class="flex justify-center gap-4 pt-4">
        <button class="w-12 h-12 bg-green-600 text-white rounded-full">←</button>
        <button class="w-12 h-12 bg-green-600 text-white rounded-full">→</button>
      </div>
    </div>
  </div>
</div>`,
          react: `import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/imagen1.jpg',
    title: 'Título de máximo 41 caracteres',
    context: 'Contexto del banner de máximo 112 caracteres',
  },
];

export default function Carousel({ isMobile = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  if (isMobile) {
    return (
      <div className="relative max-w-sm mx-auto">
        <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[9/16]">
          <img src={slides[currentIndex].image} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 space-y-4">
            <h3 className="text-white text-2xl font-bold">{slides[currentIndex].title}</h3>
            <p className="text-white/90 text-sm">{slides[currentIndex].context}</p>

            <div className="space-y-3">
              <button className="w-full px-6 py-3 bg-green-600 text-white rounded-full">
                Call to action principal
              </button>
              <button className="w-full px-6 py-3 bg-white text-gray-900 rounded-full">
                Call to action secundario
              </button>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <button onClick={goToPrevious} className="w-12 h-12 bg-green-600 text-white rounded-full">
                <ChevronLeft />
              </button>
              <button onClick={goToNext} className="w-12 h-12 bg-green-600 text-white rounded-full">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[21/9]">
        <img src={slides[currentIndex].image} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-y-0 left-0 flex items-center max-w-xl">
          <div className="p-12 space-y-4">
            <h2 className="text-white text-4xl font-bold">{slides[currentIndex].title}</h2>
            <p className="text-white/90 text-base">{slides[currentIndex].context}</p>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-green-600 text-white rounded-full">
                Call to action principal
              </button>
              <button className="px-8 py-3 bg-white text-gray-900 rounded-full">
                Call to action secundario
              </button>
            </div>
          </div>
        </div>

        <button onClick={goToPrevious} className="absolute left-8 top-1/2 -translate-y-1/2">
          <ChevronLeft />
        </button>
        <button onClick={goToNext} className="absolute right-8 top-1/2 -translate-y-1/2">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}`
        }}
      />

      <MultiCodeExample
        title="Stepper (4 Pasos)"
        description="Indicador de progreso con 4 etapas, estado actual destacado, controles de navegación y estados deshabilitados."
        preview={<StepperDemo />}
        snippets={{
          html: `<!-- Stepper HTML -->
<div class="stepper">
  <div class="stepper-steps">
    <div class="stepper-step completed">
      <div class="stepper-circle">✓</div>
      <span class="stepper-label">Descubrimiento</span>
    </div>
    <div class="stepper-line completed"></div>

    <div class="stepper-step active">
      <div class="stepper-circle">2</div>
      <span class="stepper-label">Ideación</span>
    </div>
    <div class="stepper-line"></div>

    <div class="stepper-step">
      <div class="stepper-circle">3</div>
      <span class="stepper-label">Diseño</span>
    </div>
    <div class="stepper-line"></div>

    <div class="stepper-step">
      <div class="stepper-circle">4</div>
      <span class="stepper-label">Validación</span>
    </div>
  </div>

  <div class="stepper-controls">
    <button class="btn-secondary">← Anterior</button>
    <button class="btn-primary">Siguiente →</button>
  </div>
</div>`,
          tailwind: `<!-- Stepper con Tailwind -->
<div class="bg-white rounded-xl shadow-md p-8">
  <div class="flex items-center justify-between mb-8">
    <!-- Paso 1: Completado -->
    <div class="flex flex-col items-center flex-1">
      <div class="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
        ✓
      </div>
      <span class="mt-3 text-sm font-semibold text-gray-600">Descubrimiento</span>
    </div>
    <div class="flex-1 h-0.5 bg-green-600"></div>

    <!-- Paso 2: Actual -->
    <div class="flex flex-col items-center flex-1">
      <div class="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold ring-4 ring-green-100">
        2
      </div>
      <span class="mt-3 text-sm font-semibold text-green-600">Ideación</span>
    </div>
    <div class="flex-1 h-0.5 bg-gray-300"></div>

    <!-- Pasos restantes... -->
  </div>

  <div class="flex justify-between">
    <button class="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold">
      ← Anterior
    </button>
    <button class="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold">
      Siguiente →
    </button>
  </div>
</div>`,
          react: `import { useState } from 'react';
import { Check } from 'lucide-react';

const steps = ['Descubrimiento', 'Ideación', 'Diseño', 'Validación'];

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center flex-1">
            <div className="flex items-center w-full">
              {idx > 0 && (
                <div className={\`flex-1 h-0.5 \${
                  idx <= currentStep ? 'bg-green-600' : 'bg-gray-300'
                }\`} />
              )}
              <div className={\`w-12 h-12 rounded-full flex items-center justify-center font-bold \${
                idx < currentStep
                  ? 'bg-green-600 text-white'
                  : idx === currentStep
                  ? 'bg-green-600 text-white ring-4 ring-green-100'
                  : 'bg-gray-200 text-gray-500'
              }\`}>
                {idx < currentStep ? <Check /> : idx + 1}
              </div>
              {idx < steps.length - 1 && (
                <div className={\`flex-1 h-0.5 \${
                  idx < currentStep ? 'bg-green-600' : 'bg-gray-300'
                }\`} />
              )}
            </div>
            <span className={\`mt-3 text-sm font-semibold \${
              idx === currentStep ? 'text-green-600' : 'text-gray-600'
            }\`}>
              {step}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
        >
          ← Anterior
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}`
        }}
      />

      <MultiCodeExample
        title="Cards (Variantes)"
        description="Tarjetas con múltiples variantes: con imagen superior, con ícono lateral, y vista mobile/desktop."
        preview={<CardsDemo />}
        snippets={{
          html: `<!-- Card Variante 1: Imagen + Label + Título + Botón -->
<div class="card">
  <img src="imagen.jpg" alt="Card" class="card-image" />
  <div class="card-content">
    <span class="card-label">Destacado</span>
    <h3 class="card-title">Atención Médica de Excelencia</h3>
    <p class="card-text">Cuidamos tu salud y bienestar.</p>
    <button class="btn-primary">Ver más</button>
  </div>
</div>

<!-- Card Variante 2: Ícono + Título + Botón + Imagen -->
<div class="card card-horizontal">
  <div class="card-icon">❤</div>
  <div class="card-content">
    <h3 class="card-title">Cuidado Integral</h3>
    <p class="card-text">Servicios completos para tu familia.</p>
    <button class="btn-primary">Conocer más</button>
    <img src="imagen.jpg" alt="Apoyo" class="card-image-small" />
  </div>
</div>`,
          tailwind: `<!-- Card V1: Imagen Superior con Tailwind -->
<div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
  <div class="relative h-48 bg-gradient-to-br from-green-600 to-green-500">
    <img src="imagen.jpg" alt="Salud" class="w-full h-full object-cover" />
  </div>
  <div class="p-6">
    <span class="inline-block px-3 py-1 bg-green-100 text-green-600 text-xs font-bold rounded-full mb-3">
      Destacado
    </span>
    <h3 class="text-xl font-bold text-gray-900 mb-3">
      Atención Médica de Excelencia
    </h3>
    <p class="text-gray-600 mb-4">
      Contamos con los mejores profesionales para cuidar tu salud.
    </p>
    <button class="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">
      Ver más
    </button>
  </div>
</div>

<!-- Card V2: Ícono Lateral -->
<div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl">
  <div class="flex gap-4">
    <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
      ❤
    </div>
    <div class="flex-1">
      <h3 class="text-xl font-bold mb-2">Cuidado Integral</h3>
      <p class="text-gray-600 mb-4">Servicios completos.</p>
      <button class="px-6 py-2 bg-blue-600 text-white rounded-lg">
        Conocer más
      </button>
    </div>
  </div>
</div>`,
          react: `import { Heart, CheckCircle } from 'lucide-react';

export default function Cards() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Card V1: Imagen Superior */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
        <div className="relative h-48">
          <img
            src="/imagen.jpg"
            alt="Salud"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-600 text-xs font-bold rounded-full mb-3">
            Destacado
          </span>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Atención Médica
          </h3>
          <p className="text-gray-600 mb-4">
            Cuidamos tu salud y bienestar.
          </p>
          <button className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold">
            Ver más
          </button>
        </div>
      </div>

      {/* Card V2: Ícono Lateral */}
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl">
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
            <Heart className="w-8 h-8 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Cuidado Integral</h3>
            <p className="text-gray-600 mb-4">Servicios completos.</p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
              Conocer más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`
        }}
      />

      <ComponentExample
        title="Botones"
        description="Variantes de botones con diferentes estilos y todos los tamaños disponibles."
        preview={
          <div className="space-y-8">
            <div>
              <h5 className="text-sm font-bold text-gray-700 mb-4">Botones Primarios - Todos los Tamaños</h5>
              <div className="flex flex-wrap items-center gap-3">
                <button className="px-2 py-1 bg-[#27933E] text-white rounded-full text-xs font-semibold hover:bg-[#13C045] transition-colors">
                  XS - Primario
                </button>
                <button className="px-3 py-1.5 bg-[#27933E] text-white rounded-full text-sm font-semibold hover:bg-[#13C045] transition-colors">
                  S - Primario
                </button>
                <button className="px-4 py-2 bg-[#27933E] text-white rounded-full text-sm font-semibold hover:bg-[#13C045] transition-colors">
                  M - Primario
                </button>
                <button className="px-6 py-3 bg-[#27933E] text-white rounded-full text-base font-semibold hover:bg-[#13C045] transition-colors shadow-md">
                  L - Primario
                </button>
                <button className="px-8 py-4 bg-[#27933E] text-white rounded-full text-lg font-semibold hover:bg-[#13C045] transition-colors shadow-lg">
                  XL - Primario
                </button>
                <button className="px-10 py-5 bg-[#27933E] text-white rounded-full text-xl font-semibold hover:bg-[#13C045] transition-colors shadow-xl">
                  XXL - Primario
                </button>
              </div>
            </div>

            <div>
              <h5 className="text-sm font-bold text-gray-700 mb-4">Botones Secundarios - Todos los Tamaños</h5>
              <div className="flex flex-wrap items-center gap-3">
                <button className="px-2 py-1 bg-[#2B6BDC] text-white rounded-full text-xs font-semibold hover:bg-[#348FFF] transition-colors">
                  XS - Secundario
                </button>
                <button className="px-3 py-1.5 bg-[#2B6BDC] text-white rounded-full text-sm font-semibold hover:bg-[#348FFF] transition-colors">
                  S - Secundario
                </button>
                <button className="px-4 py-2 bg-[#2B6BDC] text-white rounded-full text-sm font-semibold hover:bg-[#348FFF] transition-colors">
                  M - Secundario
                </button>
                <button className="px-6 py-3 bg-[#2B6BDC] text-white rounded-full text-base font-semibold hover:bg-[#348FFF] transition-colors shadow-md">
                  L - Secundario
                </button>
                <button className="px-8 py-4 bg-[#2B6BDC] text-white rounded-full text-lg font-semibold hover:bg-[#348FFF] transition-colors shadow-lg">
                  XL - Secundario
                </button>
                <button className="px-10 py-5 bg-[#2B6BDC] text-white rounded-full text-xl font-semibold hover:bg-[#348FFF] transition-colors shadow-xl">
                  XXL - Secundario
                </button>
              </div>
            </div>

            <div>
              <h5 className="text-sm font-bold text-gray-700 mb-4">Botones Ghost - Todos los Tamaños</h5>
              <div className="flex flex-wrap items-center gap-3">
                <button className="px-2 py-1 bg-transparent border border-[#27933E] text-[#27933E] rounded-full text-xs font-semibold hover:bg-[#CCF1DC] transition-colors">
                  XS - Ghost
                </button>
                <button className="px-3 py-1.5 bg-transparent border border-[#27933E] text-[#27933E] rounded-full text-sm font-semibold hover:bg-[#CCF1DC] transition-colors">
                  S - Ghost
                </button>
                <button className="px-4 py-2 bg-transparent border-2 border-[#27933E] text-[#27933E] rounded-full text-sm font-semibold hover:bg-[#CCF1DC] transition-colors">
                  M - Ghost
                </button>
                <button className="px-6 py-3 bg-transparent border-2 border-[#27933E] text-[#27933E] rounded-full text-base font-semibold hover:bg-[#CCF1DC] transition-colors">
                  L - Ghost
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-[#27933E] text-[#27933E] rounded-full text-lg font-semibold hover:bg-[#CCF1DC] transition-colors">
                  XL - Ghost
                </button>
                <button className="px-10 py-5 bg-transparent border-2 border-[#27933E] text-[#27933E] rounded-full text-xl font-semibold hover:bg-[#CCF1DC] transition-colors">
                  XXL - Ghost
                </button>
              </div>
            </div>

            <div>
              <h5 className="text-sm font-bold text-gray-700 mb-4">Estados Especiales</h5>
              <div className="flex flex-wrap items-center gap-3">
                <button className="px-6 py-3 bg-[#66D495] text-white rounded-full font-semibold cursor-not-allowed opacity-60" disabled>
                  Deshabilitado
                </button>
                <button className="px-6 py-3 bg-[#FF7466] text-white rounded-full font-semibold hover:bg-[#FF5A4D] transition-colors shadow-md">
                  Peligro
                </button>
                <button className="px-6 py-3 bg-[#FFA726] text-white rounded-full font-semibold hover:bg-[#FF9800] transition-colors shadow-md">
                  Advertencia
                </button>
              </div>
            </div>
          </div>
        }
        code={`<!-- Tamaño XS -->
<button class="btn btn--primary btn--xs">XS - Primario</button>
<button class="btn btn--secondary btn--xs">XS - Secundario</button>
<button class="btn btn--ghost btn--xs">XS - Ghost</button>

<!-- Tamaño S -->
<button class="btn btn--primary btn--s">S - Primario</button>
<button class="btn btn--secondary btn--s">S - Secundario</button>
<button class="btn btn--ghost btn--s">S - Ghost</button>

<!-- Tamaño M (por defecto) -->
<button class="btn btn--primary">M - Primario</button>
<button class="btn btn--secondary">M - Secundario</button>
<button class="btn btn--ghost">M - Ghost</button>

<!-- Tamaño L -->
<button class="btn btn--primary btn--l">L - Primario</button>
<button class="btn btn--secondary btn--l">L - Secundario</button>
<button class="btn btn--ghost btn--l">L - Ghost</button>

<!-- Tamaño XL -->
<button class="btn btn--primary btn--xl">XL - Primario</button>
<button class="btn btn--secondary btn--xl">XL - Secundario</button>
<button class="btn btn--ghost btn--xl">XL - Ghost</button>

<!-- Tamaño XXL -->
<button class="btn btn--primary btn--xxl">XXL - Primario</button>
<button class="btn btn--secondary btn--xxl">XXL - Secundario</button>
<button class="btn btn--ghost btn--xxl">XXL - Ghost</button>

<!-- Estados Especiales -->
<button class="btn btn--primary" disabled>Deshabilitado</button>
<button class="btn btn--danger">Peligro</button>
<button class="btn btn--warning">Advertencia</button>`}
      />

      <ComponentExample
        title="Tablas"
        description="Tabla responsive con estados de hover y filas seleccionables."
        preview={
          <div className="overflow-x-auto bg-white rounded-xl shadow-md">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#373737]">Nombre</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#373737]">Rol</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#373737]">Estado</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'María González', role: 'Diseñadora UX', status: 'Activo' },
                  { name: 'Juan Pérez', role: 'Desarrollador', status: 'Activo' },
                  { name: 'Ana Silva', role: 'Product Manager', status: 'Inactivo' },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    onClick={() => setSelectedRow(idx)}
                    className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedRow === idx ? 'bg-[#CCF1DC]' : ''
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.role}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        row.status === 'Activo'
                          ? 'bg-[#D4E9D8] text-[#27933E]'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
        code={`<table class="table">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Rol</th>
      <th>Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>María González</td>
      <td>Diseñadora UX</td>
      <td><span class="badge badge--success">Activo</span></td>
    </tr>
    <tr>
      <td>Juan Pérez</td>
      <td>Desarrollador</td>
      <td><span class="badge badge--success">Activo</span></td>
    </tr>
  </tbody>
</table>`}
      />

      <ComponentExample
        title="Tabs"
        description="Pestañas interactivas con estados activo e inactivo."
        preview={
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex gap-2 border-b-2 border-gray-200 mb-6">
              {['Resumen', 'Detalles', 'Configuración'].map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-6 py-3 font-semibold text-sm border-b-3 transition-all ${
                    activeTab === idx
                      ? 'text-[#27933E] border-[#27933E]'
                      : 'text-gray-500 border-transparent hover:text-gray-900'
                  }`}
                  style={{ borderBottomWidth: '3px', marginBottom: '-2px' }}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-4">
              <p className="text-gray-600">
                Contenido de la pestaña <strong className="text-[#27933E]">{['Resumen', 'Detalles', 'Configuración'][activeTab]}</strong>
              </p>
            </div>
          </div>
        }
        code={`<div class="tabs">
  <button class="tabs__item tabs__item--active">Resumen</button>
  <button class="tabs__item">Detalles</button>
  <button class="tabs__item">Configuración</button>
</div>`}
      />

      <ComponentExample
        title="Formularios"
        description="Campos de formulario con labels, helpers y mensajes de error."
        preview={
          <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#373737] mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  placeholder="Ingresa tu nombre"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#27933E] focus:outline-none transition-colors"
                />
                <p className="mt-2 text-xs text-gray-500">Este campo es requerido</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#373737] mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  className="w-full px-4 py-3 border-2 border-[#FF7466] rounded-lg focus:outline-none"
                />
                <p className="mt-2 text-xs text-[#FF7466]">Por favor ingresa un correo válido</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#373737] mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  placeholder="Escribe tu mensaje aquí"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#27933E] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button className="px-6 py-3 bg-[#27933E] text-white rounded-full font-semibold hover:bg-[#13C045] transition-colors shadow-md">
                Enviar Formulario
              </button>
            </form>
          </div>
        }
        code={`<form>
  <!-- Campo Normal -->
  <div class="form-field">
    <label class="form-field__label">Nombre completo</label>
    <input type="text" class="form-field__input" placeholder="Ingresa tu nombre">
    <p class="form-field__helper">Este campo es requerido</p>
  </div>

  <!-- Campo con Error -->
  <div class="form-field">
    <label class="form-field__label">Correo electrónico</label>
    <input type="email" class="form-field__input form-field__input--error" placeholder="correo@ejemplo.com">
    <p class="form-field__error">Por favor ingresa un correo válido</p>
  </div>

  <!-- Textarea -->
  <div class="form-field">
    <label class="form-field__label">Mensaje</label>
    <textarea class="form-field__input" rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
  </div>

  <button class="btn btn--primary">Enviar Formulario</button>
</form>`}
      />

      <ComponentExample
        title="Modal / Dialog"
        description="Ventana modal con dos acciones (Aceptar y Cancelar)."
        preview={
          <>
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-3 bg-[#27933E] text-white rounded-full font-semibold hover:bg-[#13C045] transition-colors shadow-md"
            >
              Abrir Modal
            </button>

            <AnimatePresence>
              {showModal && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowModal(false)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      onClick={(e) => e.stopPropagation()}
                      className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">Confirmar Acción</h3>
                        <button
                          onClick={() => setShowModal(false)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        ¿Estás seguro que deseas continuar con esta acción? Esta operación no se puede deshacer.
                      </p>
                      <div className="flex gap-3 justify-end">
                        <button
                          onClick={() => setShowModal(false)}
                          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={() => setShowModal(false)}
                          className="px-6 py-3 bg-[#27933E] text-white rounded-lg font-semibold hover:bg-[#13C045] transition-colors"
                        >
                          Aceptar
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </>
        }
        code={`<div class="modal">
  <div class="modal__overlay">
    <div class="modal__content">
      <div class="modal__header">
        <h3>Confirmar Acción</h3>
        <button class="modal__close">×</button>
      </div>
      <div class="modal__body">
        <p>¿Estás seguro que deseas continuar?</p>
      </div>
      <div class="modal__footer">
        <button class="btn btn--secondary">Cancelar</button>
        <button class="btn btn--primary">Aceptar</button>
      </div>
    </div>
  </div>
</div>`}
      />

      <ComponentExample
        title="Toast / Alerts"
        description="Mensajes de notificación con 4 variantes: Success, Error, Warning, Info."
        preview={
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-start gap-3 bg-[#D4E9D8] border border-[#27933E] rounded-xl p-4">
              <CheckCircle className="w-5 h-5 text-[#27933E] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h5 className="font-bold text-[#27933E] mb-1">Éxito</h5>
                <p className="text-sm text-gray-700">La operación se completó correctamente.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#FFE5E5] border border-[#FF7466] rounded-xl p-4">
              <AlertCircle className="w-5 h-5 text-[#FF7466] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h5 className="font-bold text-[#FF7466] mb-1">Error</h5>
                <p className="text-sm text-gray-700">Ocurrió un error al procesar la solicitud.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#FFF4E5] border border-[#FFA726] rounded-xl p-4">
              <AlertTriangle className="w-5 h-5 text-[#FFA726] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h5 className="font-bold text-[#FFA726] mb-1">Advertencia</h5>
                <p className="text-sm text-gray-700">Ten cuidado antes de proceder.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#E3F2FD] border border-[#2B6BDC] rounded-xl p-4">
              <Info className="w-5 h-5 text-[#2B6BDC] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h5 className="font-bold text-[#2B6BDC] mb-1">Información</h5>
                <p className="text-sm text-gray-700">Aquí hay información relevante para ti.</p>
              </div>
            </div>
          </div>
        }
        code={`<!-- Success -->
<div class="alert alert--success">
  <span class="alert__icon">✓</span>
  <div>
    <h5 class="alert__title">Éxito</h5>
    <p class="alert__message">La operación se completó.</p>
  </div>
</div>

<!-- Error -->
<div class="alert alert--error">
  <span class="alert__icon">✕</span>
  <div>
    <h5 class="alert__title">Error</h5>
    <p class="alert__message">Ocurrió un error.</p>
  </div>
</div>

<!-- Warning -->
<div class="alert alert--warning">
  <span class="alert__icon">⚠</span>
  <div>
    <h5 class="alert__title">Advertencia</h5>
    <p class="alert__message">Ten cuidado.</p>
  </div>
</div>

<!-- Info -->
<div class="alert alert--info">
  <span class="alert__icon">ℹ</span>
  <div>
    <h5 class="alert__title">Información</h5>
    <p class="alert__message">Información relevante.</p>
  </div>
</div>`}
      />

      <ComponentExample
        title="Tooltip"
        description="Información contextual que aparece al hacer hover."
        preview={
          <div className="flex justify-center">
            <div
              className="relative inline-block"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <button className="px-6 py-3 bg-[#27933E] text-white rounded-full font-semibold">
                Pasa el mouse aquí
              </button>
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap"
                  >
                    Este es un tooltip de ayuda
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        }
        code={`<div class="tooltip-container">
  <button class="btn btn--primary">Hover me</button>
  <div class="tooltip">
    Este es un tooltip de ayuda
  </div>
</div>`}
      />

      <ComponentExample
        title="Badge / Tag"
        description="Etiquetas para estados, categorías y metadatos."
        preview={
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[#D4E9D8] text-[#27933E] rounded-full text-sm font-semibold">
              Activo
            </span>
            <span className="px-4 py-2 bg-[#E3F2FD] text-[#2B6BDC] rounded-full text-sm font-semibold">
              Nuevo
            </span>
            <span className="px-4 py-2 bg-[#FFF4E5] text-[#FFA726] rounded-full text-sm font-semibold">
              Pendiente
            </span>
            <span className="px-4 py-2 bg-[#FFE5E5] text-[#FF7466] rounded-full text-sm font-semibold">
              Rechazado
            </span>
            <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold">
              Inactivo
            </span>
          </div>
        }
        code={`<span class="badge badge--success">Activo</span>
<span class="badge badge--info">Nuevo</span>
<span class="badge badge--warning">Pendiente</span>
<span class="badge badge--error">Rechazado</span>
<span class="badge badge--neutral">Inactivo</span>`}
      />

      <ComponentExample
        title="Loader / Spinner"
        description="Indicador de carga que cambia según la marca seleccionada."
        preview={
          <div className="space-y-6">
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setSelectedBrand('seguro')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedBrand === 'seguro'
                    ? 'bg-[#27933E] text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Seguro
              </button>
              <button
                onClick={() => setSelectedBrand('salud')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedBrand === 'salud'
                    ? 'bg-[#2B6BDC] text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Salud
              </button>
              <button
                onClick={() => setSelectedBrand('servicios')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedBrand === 'servicios'
                    ? 'bg-[#4B4196] text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Servicios
              </button>
            </div>

            <div className="flex flex-col items-center gap-6 py-8">
              <Loader2
                className={`w-12 h-12 animate-spin ${
                  selectedBrand === 'seguro'
                    ? 'text-[#27933E]'
                    : selectedBrand === 'salud'
                    ? 'text-[#2B6BDC]'
                    : 'text-[#4B4196]'
                }`}
              />
              <p className="text-sm text-gray-600">Cargando contenido...</p>
            </div>
          </div>
        }
        code={`<!-- Loader Simple -->
<div class="loader"></div>

<!-- Con Mensaje -->
<div class="loader-container">
  <div class="loader loader--seguro"></div>
  <p>Cargando contenido...</p>
</div>

<!-- Variantes por marca -->
<div class="loader loader--seguro"></div>
<div class="loader loader--salud"></div>
<div class="loader loader--servicios"></div>`}
      />
    </div>
  );
}
