'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CodeBlock from './CodeBlock';

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

  return (
    <div className="space-y-8">
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
    </div>
  );
}
