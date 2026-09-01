import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [closedManually, setClosedManually] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!closedManually) {
        setShowTooltip(true);
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, [closedManually]);

  const whatsappUrl =
    'https://wa.me/5512999999999?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20produtos%20qu%C3%ADmicos%20Diprol.';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 p-3.5 rounded-2xl bg-[#0b192e] border border-emerald-500/40 text-slate-100 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-right-4 max-w-xs">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <div className="text-xs leading-tight">
            <strong className="text-emerald-400 block font-heading">Consultor Online</strong>
            Cotações rápidas e suporte técnico no Vale do Paraíba.
          </div>
          <button
            onClick={() => {
              setShowTooltip(false);
              setClosedManually(true);
            }}
            className="p-1 text-slate-400 hover:text-white rounded-md transition-colors"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com consultor da Diprol Química"
        className="relative group w-14 h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-2xl bg-emerald-400/40 animate-ping opacity-60 pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 fill-slate-950 stroke-none"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-slate-950" />
      </a>
    </div>
  );
};
