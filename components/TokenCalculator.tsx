'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function TokenCalculator() {
  const [tokens, setTokens] = useState(5000000);
  const TOKEN_PRICE_CLP = 0.02;

  const calculateCost = (tokenAmount: number) => {
    return (tokenAmount * TOKEN_PRICE_CLP).toLocaleString('es-CL');
  };

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setTokens(value ? parseInt(value) : 0);
  };

  return (
    <div className="bg-white/50 rounded-lg p-4 border border-[#00A859]/30">
      <div className="flex items-center gap-2 mb-3">
        <Calculator className="w-4 h-4 text-[#00A859]" />
        <span className="text-sm font-semibold text-gray-900">
          Calculadora de Costos
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-gray-600 mb-1 block">
            Cantidad de tokens
          </label>
          <input
            type="text"
            value={tokens.toLocaleString('es-CL')}
            onChange={handleTokenChange}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A859] focus:border-transparent"
          />
        </div>

        <div>
          <label className="text-xs text-gray-600 mb-1 block">
            Costo en CLP
          </label>
          <div className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg font-semibold text-[#00A859]">
            ${calculateCost(tokens)}
          </div>
        </div>
      </div>

      <div className="mt-3 text-xs text-gray-500">
        Tarifa: $0,02 CLP por token
      </div>
    </div>
  );
}
