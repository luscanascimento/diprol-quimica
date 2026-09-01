import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '../common/SectionHeading';
import { Counter } from '../common/Counter';
import { GlassCard } from '../common/GlassCard';
import { AUTHORITY_METRICS } from '../../data/metricsData';
import { CheckCircle2, ShieldCheck, Microscope, Factory, Award, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const AboutAuthoritySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(leftColRef.current, {
        opacity: 0,
        x: -40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      gsap.from(rightColRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
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
      id="quem-somos"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#040914] overflow-hidden w-full"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1500px] 2xl:max-w-[1650px] mx-auto w-full">
        
        {/* SECTION HEADER */}
        <SectionHeading
          badge="Autoridade & Tradição"
          badgeIcon={<ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />}
          titleLight="Engenharia Química que Transforma"
          titleHighlight="Eficiência em Lucratividade"
          description="Mais de duas décadas formulando soluções de alto rendimento para as indústrias mais exigentes do Vale do Paraíba, Litoral Norte e Sul de Minas."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Narrative & Technical Badges */}
          <div ref={leftColRef} className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0b192e]/80 border border-cyan-500/20 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-black/40">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4 text-xs sm:text-sm font-mono text-cyan-400 font-bold uppercase tracking-wider">
                <Factory className="w-4 h-4" />
                <span>Polo Industrial Diprol • São José dos Campos</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl xl:text-4xl font-bold text-white mb-4 leading-snug">
                Pioneirismo em Saneantes Profissionais e Química Especializada
              </h3>

              <p className="text-slate-300 text-sm sm:text-base xl:text-lg leading-relaxed mb-6 font-normal">
                Fundada com o propósito de elevar o padrão higiênico e técnico do setor produtivo regional, a <strong className="text-cyan-300 font-semibold">Diprol Química</strong> une capacidade fabril própria, pesquisa aplicada e atendimento presencial in-loco.
              </p>

              <p className="text-slate-300 text-sm sm:text-base xl:text-lg leading-relaxed mb-6 font-normal">
                Não somos apenas distribuidores de produtos: desenvolvemos a fórmula exata para a sua água e processo produtivo, instalamos equipamentos dosadores de última geração em comodato e capacitamos seus operadores para garantir <strong>desperdício zero</strong>.
              </p>

              {/* Pillars checklist */}
              <div className="space-y-3.5 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-3 text-sm sm:text-base text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Laboratório próprio de controle de qualidade lote a lote com rastreabilidade</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Produtos com laudos de eficácia microbiológica e registros ANVISA vigentes</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Equipe técnica com químicos e engenheiros disponíveis para visita em até 24h</span>
                </div>
              </div>
            </div>

            {/* Certifications strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <ShieldCheck className="w-6 h-6 text-cyan-400 mx-auto mb-1.5" />
                <div className="text-xs sm:text-sm font-mono font-bold text-white">ANVISA</div>
                <div className="text-[10px] sm:text-xs text-slate-400">Notificações Ativas</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <Award className="w-6 h-6 text-orange-400 mx-auto mb-1.5" />
                <div className="text-xs sm:text-sm font-mono font-bold text-white">CRQ-IV</div>
                <div className="text-[10px] sm:text-xs text-slate-400">Responsabilidade Técnica</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center col-span-2 sm:col-span-1">
                <Microscope className="w-6 h-6 text-sky-400 mx-auto mb-1.5" />
                <div className="text-xs sm:text-sm font-mono font-bold text-white">REBLAS</div>
                <div className="text-[10px] sm:text-xs text-slate-400">Laudos Laboratoriais</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Authority Metric Cards */}
          <div ref={rightColRef} className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {AUTHORITY_METRICS.map((metric) => (
              <GlassCard
                key={metric.id}
                accentBorder="cyan"
                tilt={true}
                className="p-6 sm:p-8 flex flex-col justify-between h-56 xl:h-64 group shadow-xl shadow-black/30"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-all">
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30">
                    Certificado
                  </span>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl xl:text-6xl font-heading font-black text-white group-hover:text-cyan-300 transition-colors">
                    <Counter
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      duration={2.2}
                    />
                  </div>
                  <div className="text-base sm:text-lg font-heading font-bold text-slate-200 mt-2">
                    {metric.label}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-snug">
                    {metric.sublabel}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
