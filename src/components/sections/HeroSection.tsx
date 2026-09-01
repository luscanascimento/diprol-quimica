import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChemicalHeroScene } from '../3d/ChemicalHeroScene';
import { MagneticButton } from '../common/MagneticButton';
import { ShieldCheck, ArrowRight, Sparkles, PhoneCall, Award, FlaskConical } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.0 },
          '-=0.5'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.5'
        );
    }, heroRef);

    return () => ctx.revert();
  }, [isReducedMotion]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-tech-grid overflow-hidden w-full"
      id="hero"
    >
      {/* 3D WebGL Canvas Layer */}
      <ChemicalHeroScene />

      {/* Radial Gradient Vignette for text contrast */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-0" />

      {/* Ambient glowing orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-orange-500/10 blur-[140px] pointer-events-none" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col items-center text-center my-auto w-full">
        
        {/* TOP BADGE */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0b192e]/85 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider mb-6 sm:mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/10"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <FlaskConical className="w-4 h-4 text-cyan-400" />
          <span>Soluções Químicas & Higiene Profissional no Vale do Paraíba</span>
        </div>

        {/* HERO TITLE */}
        <h1
          ref={titleRef}
          className="font-heading text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.06]"
        >
          Tradição & Confiança em{' '}
          <span className="text-gradient-cyan block sm:inline">
            Higiene Profissional
          </span>
        </h1>

        {/* HERO SUBTITLE */}
        <p
          ref={subtitleRef}
          className="mt-6 sm:mt-8 text-base sm:text-xl xl:text-2xl text-slate-300 max-w-3xl xl:max-w-4xl font-normal leading-relaxed"
        >
          Especialistas na fabricação e distribuição de produtos químicos de alto desempenho no Vale do Paraíba e região. Engenharia química sob medida, conformidade ANVISA e consultoria técnica presencial na sua fábrica.
        </p>

        {/* CTA BUTTONS */}
        <div
          ref={ctaRef}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <MagneticButton
            href="#orcamento"
            variant="orange"
            size="lg"
            className="w-full sm:w-auto glow-orange-sm text-sm sm:text-base px-8 sm:px-10 py-4"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Falar com Consultor</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </MagneticButton>

          <MagneticButton
            href="#segmentos"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto glow-cyan-sm text-sm sm:text-base px-8 sm:px-10 py-4"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Conhecer Linhas Químicas</span>
          </MagneticButton>
        </div>

        {/* COMPLIANCE MINI BADGES */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono text-slate-300">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>100% Notificado ANVISA</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <Award className="w-4 h-4 text-orange-400" />
            <span>Responsabilidade Técnica CRQ-IV</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Dosadores em Comodato</span>
          </div>
        </div>

      </div>

      {/* BOTTOM METRIC STRIP (Expanded for 1080p & 1440p) */}
      <div
        ref={statsRef}
        className="relative z-10 max-w-6xl xl:max-w-[1500px] 2xl:max-w-[1650px] mx-auto w-full mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6"
      >
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0b192e]/70 border border-cyan-500/20 backdrop-blur-xl text-center group hover:border-cyan-400/50 hover:bg-[#0b192e]/90 transition-all shadow-xl shadow-black/40">
          <div className="text-2xl sm:text-4xl xl:text-5xl font-heading font-extrabold text-white group-hover:text-cyan-300 transition-colors">
            +25 Anos
          </div>
          <div className="text-xs sm:text-sm font-mono text-slate-300 mt-1 sm:mt-2">
            Tradição Industrial no Vale
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#0b192e]/70 border border-cyan-500/20 backdrop-blur-xl text-center group hover:border-cyan-400/50 hover:bg-[#0b192e]/90 transition-all shadow-xl shadow-black/40">
          <div className="text-2xl sm:text-4xl xl:text-5xl font-heading font-extrabold text-white group-hover:text-cyan-300 transition-colors">
            12.000 ton
          </div>
          <div className="text-xs sm:text-sm font-mono text-slate-300 mt-1 sm:mt-2">
            Distribuídas anualmente
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#0b192e]/70 border border-cyan-500/20 backdrop-blur-xl text-center group hover:border-cyan-400/50 hover:bg-[#0b192e]/90 transition-all shadow-xl shadow-black/40">
          <div className="text-2xl sm:text-4xl xl:text-5xl font-heading font-extrabold text-white group-hover:text-cyan-300 transition-colors">
            +650
          </div>
          <div className="text-xs sm:text-sm font-mono text-slate-300 mt-1 sm:mt-2">
            Indústrias & Empresas Atendidas
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#0b192e]/70 border border-cyan-500/20 backdrop-blur-xl text-center group hover:border-cyan-400/50 hover:bg-[#0b192e]/90 transition-all shadow-xl shadow-black/40">
          <div className="text-2xl sm:text-4xl xl:text-5xl font-heading font-extrabold text-white group-hover:text-cyan-300 transition-colors">
            Até -40%
          </div>
          <div className="text-xs sm:text-sm font-mono text-slate-300 mt-1 sm:mt-2">
            Redução de Custo em Diluição
          </div>
        </div>
      </div>

    </section>
  );
};
