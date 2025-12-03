'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slides = [
  {
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Título de máximo 41 caracteres',
    context: 'Contexto del banner de máximo 112 caracteres',
  },
  {
    image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Innovación en Salud Digital',
    context: 'Tecnología médica avanzada para el cuidado de tu bienestar y el de tu familia',
  },
  {
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Atención Médica Especializada',
    context: 'Profesionales capacitados para brindarte el mejor servicio en salud',
  },
];

interface CarouselDemoProps {
  isMobile?: boolean;
}

export default function CarouselDemo({ isMobile = false }: CarouselDemoProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (isMobile) {
    return (
      <div className="relative max-w-sm mx-auto">
        <div className="relative overflow-hidden rounded-2xl shadow-xl h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <Image
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 space-y-3">
                <h3 className="text-white text-xl font-bold leading-tight">
                  {slides[currentIndex].title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {slides[currentIndex].context}
                </p>

                <div className="space-y-2">
                  <button className="w-full px-4 py-2 bg-[#27933E] text-white rounded-full text-sm font-semibold hover:bg-[#13C045] transition-colors shadow-lg">
                    Call to action principal
                  </button>
                  <button className="w-full px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                    Call to action secundario
                  </button>
                </div>

                <div className="flex justify-center gap-4 pt-3">
                  <button
                    onClick={goToPrevious}
                    aria-label="Anterior"
                    className="w-10 h-10 bg-[#27933E] text-white rounded-full flex items-center justify-center hover:bg-[#13C045] transition-colors shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goToNext}
                    aria-label="Siguiente"
                    className="w-10 h-10 bg-[#27933E] text-white rounded-full flex items-center justify-center hover:bg-[#13C045] transition-colors shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-xl h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            <div className="absolute inset-y-0 left-0 flex items-center max-w-xl">
              <div className="p-10 space-y-3">
                <h2 className="text-white text-3xl font-bold leading-tight">
                  {slides[currentIndex].title}
                </h2>
                <p className="text-white/90 text-sm leading-relaxed">
                  {slides[currentIndex].context}
                </p>

                <div className="flex gap-3 pt-3">
                  <button className="px-4 py-2 bg-[#27933E] text-white rounded-full text-sm font-semibold hover:bg-[#13C045] transition-colors shadow-lg">
                    Call to action principal
                  </button>
                  <button className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                    Call to action secundario
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={goToPrevious}
              aria-label="Anterior"
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#27933E] text-white rounded-full flex items-center justify-center hover:bg-[#13C045] transition-all hover:scale-110 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Siguiente"
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#27933E] text-white rounded-full flex items-center justify-center hover:bg-[#13C045] transition-all hover:scale-110 shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
