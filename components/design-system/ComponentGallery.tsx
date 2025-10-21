'use client';

import { useState } from 'react';
import { ChevronDown, X, CheckCircle, AlertCircle, Info, AlertTriangle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CodeBlock from './CodeBlock';
import LayoutExample from './LayoutExample';

interface ComponentExampleProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
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

export default function ComponentGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<'seguro' | 'salud' | 'servicios'>('seguro');

  return (
    <div className="space-y-8">
      <ComponentExample
        title="Layout Base"
        description="Estructura general con Header, Sidebar, Main y Footer. Cambia entre Desktop y Mobile."
        preview={<LayoutExample />}
        code={`<div class="layout">
  <header class="layout__header">
    <button class="menu-toggle">☰</button>
    <h2>ACHS App</h2>
    <div class="user-avatar"></div>
  </header>

  <div class="layout__body">
    <aside class="layout__sidebar">
      <nav>
        <a href="#" class="nav-item nav-item--active">Inicio</a>
        <a href="#" class="nav-item">Usuarios</a>
        <a href="#" class="nav-item">Documentos</a>
      </nav>
    </aside>

    <main class="layout__main">
      <h3>Contenido Principal</h3>
      <!-- Contenido aquí -->
    </main>
  </div>

  <footer class="layout__footer">
    © 2025 ACHS
  </footer>
</div>`}
      />
      <ComponentExample
        title="Botones"
        description="Variantes de botones con diferentes estilos, tamaños y estados."
        preview={
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-[#27933E] text-white rounded-full font-semibold hover:bg-[#13C045] transition-colors shadow-md">
              Primario
            </button>
            <button className="px-6 py-3 bg-[#2B6BDC] text-white rounded-full font-semibold hover:bg-[#348FFF] transition-colors shadow-md">
              Secundario
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-[#27933E] text-[#27933E] rounded-full font-semibold hover:bg-[#CCF1DC] transition-colors">
              Ghost
            </button>
            <button className="px-4 py-2 bg-[#27933E] text-white rounded-full text-sm font-semibold hover:bg-[#13C045] transition-colors">
              Pequeño
            </button>
            <button className="px-8 py-4 bg-[#27933E] text-white rounded-full text-lg font-semibold hover:bg-[#13C045] transition-colors shadow-lg">
              Grande
            </button>
            <button className="px-6 py-3 bg-[#66D495] text-white rounded-full font-semibold cursor-not-allowed opacity-60" disabled>
              Deshabilitado
            </button>
          </div>
        }
        code={`<!-- Botón Primario -->
<button class="btn btn--primary">Primario</button>

<!-- Botón Secundario -->
<button class="btn btn--secondary">Secundario</button>

<!-- Botón Ghost -->
<button class="btn btn--ghost">Ghost</button>

<!-- Botón Pequeño -->
<button class="btn btn--primary btn--sm">Pequeño</button>

<!-- Botón Grande -->
<button class="btn btn--primary btn--lg">Grande</button>

<!-- Botón Deshabilitado -->
<button class="btn btn--primary" disabled>Deshabilitado</button>`}
      />

      <ComponentExample
        title="Cards"
        description="Tarjetas con encabezado, cuerpo y acción opcional."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <h5 className="text-lg font-bold text-[#373737] mb-3">Tarjeta Básica</h5>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Esta es una tarjeta simple con contenido de ejemplo. Ideal para mostrar información breve y concisa.
              </p>
              <button className="px-4 py-2 bg-[#27933E] text-white rounded-lg text-sm font-semibold hover:bg-[#13C045] transition-colors">
                Acción
              </button>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <h5 className="text-lg font-bold text-[#373737] mb-3">Con Imagen</h5>
              <div className="bg-gradient-to-br from-[#27933E] to-[#2B6BDC] h-32 rounded-xl mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                Tarjeta con imagen decorativa superior.
              </p>
            </div>
          </div>
        }
        code={`<!-- Card Básica -->
<div class="card">
  <h5 class="card__header">Tarjeta Básica</h5>
  <p class="card__body">
    Esta es una tarjeta simple con contenido de ejemplo.
  </p>
  <button class="btn btn--primary btn--sm">Acción</button>
</div>

<!-- Card con Imagen -->
<div class="card">
  <h5 class="card__header">Con Imagen</h5>
  <img src="imagen.jpg" alt="Descripción" class="card__image">
  <p class="card__body">
    Tarjeta con imagen decorativa superior.
  </p>
</div>`}
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
                    ? 'bg-[#FFA726] text-white'
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
                    : 'text-[#FFA726]'
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
