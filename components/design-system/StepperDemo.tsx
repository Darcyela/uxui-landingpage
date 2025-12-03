'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

const steps = [
  'Descubrimiento',
  'Ideación',
  'Diseño',
  'Validación',
];

export default function StepperDemo() {
  const [currentStep, setCurrentStep] = useState(0);

  const goToPrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const goToNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1">
              <div className="flex items-center w-full">
                {idx > 0 && (
                  <div
                    className={`flex-1 h-0.5 ${
                      idx <= currentStep ? 'bg-[#27933E]' : 'bg-gray-300'
                    }`}
                  />
                )}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                    idx < currentStep
                      ? 'bg-[#27933E] text-white'
                      : idx === currentStep
                      ? 'bg-[#27933E] text-white ring-4 ring-[#CCF1DC]'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {idx < currentStep ? <Check className="w-6 h-6" /> : idx + 1}
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 ${
                      idx < currentStep ? 'bg-[#27933E]' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
              <span
                className={`mt-3 text-sm font-semibold text-center ${
                  idx === currentStep ? 'text-[#27933E]' : 'text-gray-600'
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-bold text-gray-900 mb-2">
          Paso {currentStep + 1}: {steps[currentStep]}
        </h4>
        <p className="text-gray-600">
          Contenido del paso {steps[currentStep].toLowerCase()}. Aquí se muestra la información relevante para esta etapa del proceso.
        </p>
      </div>

      <div className="flex justify-between">
        <button
          onClick={goToPrevious}
          disabled={currentStep === 0}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Anterior
        </button>
        <button
          onClick={goToNext}
          disabled={currentStep === steps.length - 1}
          className="px-6 py-3 bg-[#27933E] text-white rounded-lg font-semibold hover:bg-[#13C045] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}
