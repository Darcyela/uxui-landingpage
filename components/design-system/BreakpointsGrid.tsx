'use client';

import CodeBlock from './CodeBlock';

export default function BreakpointsGrid() {
  const breakpoints = [
    {
      name: 'Mobile',
      size: '< 640px',
      token: 'sm',
      description: 'Pantallas móviles pequeñas',
      devices: 'iPhone SE, Galaxy S8',
    },
    {
      name: 'Tablet Portrait',
      size: '≥ 640px',
      token: 'md',
      description: 'Tablets en vertical y móviles grandes',
      devices: 'iPad Mini, Tablets 7-8"',
    },
    {
      name: 'Tablet Landscape',
      size: '≥ 768px',
      token: 'lg',
      description: 'Tablets horizontales',
      devices: 'iPad, Tablets 9-10"',
    },
    {
      name: 'Desktop',
      size: '≥ 1024px',
      token: 'xl',
      description: 'Pantallas de escritorio estándar',
      devices: 'Laptops, Monitores HD',
    },
    {
      name: 'Large Desktop',
      size: '≥ 1280px',
      token: '2xl',
      description: 'Pantallas grandes',
      devices: 'Monitores Full HD',
    },
    {
      name: 'Extra Large',
      size: '≥ 1536px',
      token: '3xl',
      description: 'Pantallas muy grandes',
      devices: 'Monitores 2K, 4K',
    },
  ];

  const tailwindConfig = `// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
}`;

  const cssMediaQueries = `/* CSS Media Queries */

/* Mobile First Approach */
/* Estilos base para mobile (< 640px) */
.container {
  padding: 1rem;
}

/* Tablet Portrait (≥ 640px) */
@media (min-width: 640px) {
  .container {
    padding: 1.5rem;
  }
}

/* Tablet Landscape (≥ 768px) */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 768px;
  }
}

/* Desktop (≥ 1024px) */
@media (min-width: 1024px) {
  .container {
    padding: 2.5rem;
    max-width: 1024px;
  }
}

/* Large Desktop (≥ 1280px) */
@media (min-width: 1280px) {
  .container {
    padding: 3rem;
    max-width: 1280px;
  }
}

/* Extra Large (≥ 1536px) */
@media (min-width: 1536px) {
  .container {
    padding: 4rem;
    max-width: 1536px;
  }
}`;

  const tailwindExample = `<!-- Ejemplos de uso con Tailwind CSS -->

<!-- Texto responsive -->
<h1 class="text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
  Título Responsive
</h1>

<!-- Grid responsive -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <!-- Contenido -->
</div>

<!-- Padding responsive -->
<div class="p-4 md:p-6 lg:p-8 xl:p-12">
  <!-- Contenido -->
</div>

<!-- Ocultar/Mostrar elementos -->
<div class="hidden md:block">
  <!-- Visible solo en tablet y superior -->
</div>

<div class="block md:hidden">
  <!-- Visible solo en mobile -->
</div>

<!-- Layout responsive -->
<div class="flex flex-col lg:flex-row gap-4">
  <aside class="w-full lg:w-64">Sidebar</aside>
  <main class="flex-1">Contenido</main>
</div>`;

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
        <h3 className="text-2xl font-bold text-[#27933E] mb-6">Breakpoints del Sistema</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Sistema de breakpoints basado en Tailwind CSS para diseño responsive.
          Utilizamos un enfoque mobile-first donde los estilos base se aplican a móviles
          y se van sobrescribiendo para pantallas más grandes.
        </p>

        <div className="grid gap-4 mb-8">
          {breakpoints.map((bp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{bp.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{bp.description}</p>
                </div>
                <span className="px-3 py-1 bg-[#CCF1DC] text-[#27933E] rounded-full text-xs font-mono font-semibold">
                  {bp.token}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-[#2B6BDC] font-semibold">{bp.size}</span>
                <span className="text-gray-500">{bp.devices}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Configuración Tailwind CSS</h4>
            <CodeBlock code={tailwindConfig} language="javascript" />
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Media Queries CSS Nativo</h4>
            <CodeBlock code={cssMediaQueries} language="css" />
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Ejemplos de Uso con Tailwind</h4>
            <CodeBlock code={tailwindExample} language="html" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
        <h3 className="text-2xl font-bold text-[#27933E] mb-4">Mejores Prácticas</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-[#D4E9D8] text-[#27933E] rounded-full flex items-center justify-center text-xs font-bold">
              1
            </span>
            <span>
              <strong>Mobile First:</strong> Diseña primero para móviles y luego añade estilos para pantallas más grandes
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-[#D4E9D8] text-[#27933E] rounded-full flex items-center justify-center text-xs font-bold">
              2
            </span>
            <span>
              <strong>Contenido Fluido:</strong> Usa unidades relativas (%, rem) en lugar de píxeles fijos
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-[#D4E9D8] text-[#27933E] rounded-full flex items-center justify-center text-xs font-bold">
              3
            </span>
            <span>
              <strong>Toca Target:</strong> Botones y enlaces deben tener al menos 44x44px en móvil
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-[#D4E9D8] text-[#27933E] rounded-full flex items-center justify-center text-xs font-bold">
              4
            </span>
            <span>
              <strong>Tipografía Escalable:</strong> Ajusta tamaños de fuente según el breakpoint
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-[#D4E9D8] text-[#27933E] rounded-full flex items-center justify-center text-xs font-bold">
              5
            </span>
            <span>
              <strong>Prueba en Dispositivos Reales:</strong> Los emuladores no siempre reflejan la experiencia real
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
