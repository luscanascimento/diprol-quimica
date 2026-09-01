import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { COMPETITIVE_ADVANTAGES } from '../../data/metricsData';
import { Factory, ShieldCheck, FileCheck, Truck, Sparkles, CheckCircle } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const DiferenciaisSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current?.children || [], {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isReducedMotion]);

  const getAdvantageIcon = (icon: string) => {
    switch (icon) {
      case 'Factory':
        return <Factory className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-orange-400" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-sky-400" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="diferenciais"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#040914] overflow-hidden w-full"
    >
      {/* Glow shapes */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1500px] 2xl:max-w-[1650px] mx-auto w-full">
        
        {/* HEADING */}
        <SectionHeading
          badge="Por Que a Diprol Química"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
          titleLight="Pilares que Garantem"
          titleHighlight="Continuidade & Economia"
          titleSuffix="na Sua Indústria"
          description="Nossa infraestrutura industrial e presença técnica no Vale do Paraíba eliminam os gargalos de abastecimento e garantem resultados operacionais superiores."
          className="mb-16"
        />

        {/* 4 STAGGER CARDS */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {COMPETITIVE_ADVANTAGES.map((adv) => (
            <GlassCard
              key={adv.id}
              accentBorder="cyan"
              tilt={true}
              className="p-7 sm:p-8 flex flex-col justify-between h-[420px] group hover:border-cyan-400/50 transition-all shadow-xl shadow-black/30"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                    {getAdvantageIcon(adv.icon)}
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded bg-slate-900/90 text-cyan-300 border border-slate-800">
                    {adv.badge}
                  </span>
                </div>

                <h3 className="font-heading text-xl xl:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                  {adv.title}
                </h3>

                <p className="text-xs sm:text-sm xl:text-base text-slate-300 font-normal leading-relaxed mb-6">
                  {adv.description}
                </p>
              </div>

              {/* Bottom Key Highlight */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-mono text-cyan-400">
                  <CheckCircle className="w-4 h-4 shrink-0 text-cyan-400 mt-0.5" />
                  <span className="leading-snug">{adv.highlight}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
