import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Iniciando análise molecular...');
  const preloaderRef = useRef<HTMLDivElement | null>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isReducedMotion) {
      onComplete();
      return;
    }

    const messages = [
      'Iniciando análise molecular...',
      'Calibrando tensoativos e agentes tensoativos...',
      'Carregando laudos de conformidade ANVISA...',
      'Otimizando ambiente 3D WebGL 60 FPS...',
      'Diprol Química: Prontidão Operacional 100%'
    ];

    const ctx = gsap.context(() => {
      const obj = { p: 0 };

      gsap.to(obj, {
        p: 100,
        duration: 1.8,
        ease: 'power2.inOut',
        onUpdate: () => {
          const val = Math.floor(obj.p);
          setProgress(val);
          const msgIndex = Math.min(Math.floor((val / 100) * messages.length), messages.length - 1);
          setStatusText(messages[msgIndex]);
        },
        onComplete: () => {
          gsap.to(preloaderRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: 'expo.inOut',
            onComplete: () => {
              onComplete();
            }
          });
        }
      });
    }, preloaderRef);

    return () => ctx.revert();
  }, [onComplete, isReducedMotion]);

  if (isReducedMotion) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040914] text-white select-none overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-subtle" />
      <div className="absolute w-80 h-80 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        
        {/* Animated Molecular Hexagon Brand Icon */}
        <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 animate-ping opacity-30" />
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full animate-float">
            <polygon points="32,4 58,18 58,46 32,60 6,46 6,18" stroke="#38bdf8" strokeWidth="3" fill="#0b192e" />
            <path d="M32 20 C32 20, 23 33, 23 40 C23 45.52 27.03 49 32 49 C36.97 49 41 45.52 41 40 C41 33 32 20 32 20 Z" fill="#06b6d4" />
            <circle cx="48" cy="24" r="4" fill="#f97316" />
            <circle cx="16" cy="40" r="3" fill="#38bdf8" />
          </svg>
        </div>

        {/* Brand Name */}
        <div className="flex items-center gap-2 mb-2">
          <h1 className="font-heading text-2xl font-extrabold tracking-wider text-white">
            DIPROL
          </h1>
          <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40">
            QUÍMICA
          </span>
        </div>

        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-8">
          Tecnologia & Higiene Industrial
        </p>

        {/* Numeric Progress Counter */}
        <div className="text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-orange-400 font-mono mb-3">
          {progress}%
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden mb-4 border border-slate-700/50">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-orange-500 rounded-full transition-all duration-75 ease-out shadow-sm shadow-cyan-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Technical Status */}
        <div className="text-xs font-mono text-cyan-300/80 h-5 truncate">
          {statusText}
        </div>
      </div>
    </div>
  );
};
