'use client';

import { useState } from 'react';
import { Heart, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function CardsDemo() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <div className="inline-flex bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setIsMobile(false)}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
              !isMobile
                ? 'bg-white text-[#27933E] shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Vista Desktop
          </button>
          <button
            onClick={() => setIsMobile(true)}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
              isMobile
                ? 'bg-white text-[#27933E] shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Vista Mobile
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h5 className="text-sm font-bold text-gray-700 mb-4">Cards Básicas</h5>
          <div
            className={`grid gap-6 mx-auto transition-all ${
              isMobile ? 'grid-cols-1 max-w-sm' : 'grid-cols-1 md:grid-cols-2 max-w-5xl'
            }`}
          >
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tarjeta Básica</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Esta es una tarjeta simple con contenido de ejemplo. Ideal para mostrar información breve y concisa.
              </p>
              <button className="px-6 py-2 bg-[#27933E] text-white rounded-lg text-sm font-semibold hover:bg-[#13C045] transition-colors">
                Acción
              </button>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-[#27933E] to-[#13C045] h-32"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Con Imagen</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tarjeta con imagen decorativa superior para destacar contenido visual.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-bold text-gray-700 mb-4">Card V1: Imagen + Label + Título + Botón</h5>
          <div
            className={`grid gap-6 mx-auto transition-all ${
              isMobile ? 'grid-cols-1 max-w-sm' : 'grid-cols-1 md:grid-cols-2 max-w-5xl'
            }`}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Salud"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#CCF1DC] text-[#27933E] text-xs font-bold rounded-full mb-3">
                  Destacado
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Atención Médica de Excelencia
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Contamos con los mejores profesionales para cuidar tu salud y bienestar.
                </p>
                <button className="w-full px-6 py-3 bg-[#27933E] text-white rounded-lg font-semibold hover:bg-[#13C045] transition-colors">
                  Ver más
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Prevención"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#E3F2FD] text-[#2B6BDC] text-xs font-bold rounded-full mb-3">
                  Nuevo
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Prevención y Bienestar
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Programas diseñados para mantener tu salud en óptimas condiciones.
                </p>
                <button className="w-full px-6 py-3 bg-transparent border-2 border-[#27933E] text-[#27933E] rounded-lg font-semibold hover:bg-[#CCF1DC] transition-colors">
                  Explorar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-bold text-gray-700 mb-4">Card V2: Ícono + Título + Botón + Imagen</h5>
          <div
            className={`grid gap-6 mx-auto transition-all ${
              isMobile ? 'grid-cols-1 max-w-sm' : 'grid-cols-1 md:grid-cols-2 max-w-5xl'
            }`}
          >
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className={`flex gap-4 ${isMobile ? 'flex-col' : ''}`}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#E3F2FD] rounded-xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-[#2B6BDC]" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Cuidado Integral
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Servicios de salud completos para toda tu familia con atención personalizada.
                  </p>
                  <button className="w-full px-6 py-2 bg-[#2B6BDC] text-white rounded-lg font-semibold hover:bg-[#348FFF] transition-colors mb-4">
                    Conocer más
                  </button>
                  <div className="relative h-32 rounded-xl overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Apoyo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className={`flex gap-4 ${isMobile ? 'flex-col' : ''}`}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#D4E9D8] rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#27933E]" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Plan Completo
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Accede a todos nuestros servicios con cobertura total y sin complicaciones.
                  </p>
                  <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                    <span className="text-2xl font-bold text-[#27933E]">$49.990</span>
                    <span className="text-sm text-gray-500">/mes</span>
                  </div>
                  <button className="w-full px-6 py-2 bg-[#27933E] text-white rounded-lg font-semibold hover:bg-[#13C045] transition-colors">
                    Contratar ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
