import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { MagneticButton } from '../common/MagneticButton';
import { ENGINEERING_STEPS } from '../../data/metricsData';
import { FlaskConical, CheckCircle2, TrendingDown, ArrowRight, Wrench } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const CustomEngineeringSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const isReducedMotion = useReducedMotion();

  const activeStep = ENGINEERING_STEPS[activeStepIndex];

  useEffect(() => {
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(timelineRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="engenharia"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#060d1a] overflow-hidden w-full"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-orange-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1500px] 2xl:max-w-[1650px] mx-auto w-full">
        
        {/* HEADING */}
        <SectionHeading
          badge="Engenharia de Soluções"
          badgeIcon={<FlaskConical className="w-3.5 h-3.5 text-cyan-400" />}
          titleLight="Química Sob Medida &"
          titleHighlight="Diluição Automatizada"
          description="Como nosso processo de 4 etapas reduz o custo operacional químico da sua indústria em até 40% com comodato de dosadores eletrônicos."
          className="mb-16"
        />

        {/* TIMELINE & INTERACTIVE PROCESS CONTAINER */}
        <div ref={timelineRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Step Selector Navigation */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {ENGINEERING_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-start gap-4 p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-[#0b192e] border-cyan-400/50 shadow-xl shadow-cyan-500/10 translate-x-2'
                      : 'bg-[#0b192e]/40 border-slate-800/80 hover:bg-[#0b192e]/80 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-heading font-black text-base shrink-0 transition-colors ${
                      isActive
                        ? 'bg-gradient-to-br from-cyan-500 to-sky-600 text-slate-950 shadow-md shadow-cyan-500/30'
                        : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    {step.step}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                        {step.badge}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      )}
                    </div>
                    <h4 className="font-heading text-base sm:text-lg font-bold text-white mt-1">
                      {step.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Active Step In-Depth Breakdown Card */}
          <div className="lg:col-span-7 flex">
            <GlassCard
              accentBorder="cyan"
              className="p-8 sm:p-10 flex flex-col justify-between w-full h-full relative overflow-hidden bg-gradient-to-br from-[#0b192e]/90 to-[#060d1a]/95"
            >
              {/* Chemical formula watermark */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 pointer-events-none text-cyan-400">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>

              <div>
                {/* Step badge & numbering */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase">
                    <span>Etapa {activeStep.step} de 04</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    Engenharia de Processos
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  {activeStep.title}
                </h3>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                  {activeStep.description}
                </p>

                {/* Deliverable Box */}
                <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 mb-6">
                  <div className="text-xs font-mono uppercase text-slate-400 font-bold mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Entregável Técnico:</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {activeStep.deliverable}
                  </div>
                </div>

                {/* Cost Saving Impact Box */}
                <div className="p-5 rounded-xl bg-gradient-to-r from-orange-500/10 to-amber-500/5 border border-orange-500/30">
                  <div className="text-xs font-mono uppercase text-orange-400 font-bold mb-1 flex items-center gap-1.5">
                    <TrendingDown className="w-4 h-4 text-orange-400" />
                    <span>Impacto Financeiro Estimado:</span>
                  </div>
                  <div className="text-sm font-bold text-orange-200">
                    {activeStep.costSavingEstimate}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Wrench className="w-4 h-4 text-cyan-400" />
                  <span>Comodato de dosadores eletrônicos sem taxa de adesão</span>
                </div>

                <MagneticButton
                  href="#orcamento"
                  variant="orange"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  <span>Agendar Diagnóstico Gratuito</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </div>

            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
