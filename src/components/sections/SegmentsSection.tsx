import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { MagneticButton } from '../common/MagneticButton';
import { SEGMENTS_DATA } from '../../data/segmentsData';
import type { ProductItem } from '../../types';
import { 
  Apple, 
  Shirt, 
  Car, 
  Cog, 
  Building, 
  Layers, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Droplets, 
  Gauge, 
  FileText,
  X,
  Sparkles
} from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const SegmentsSection: React.FC = () => {
  const [selectedSegmentId, setSelectedSegmentId] = useState<string>(SEGMENTS_DATA[0].id);
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsGridRef = useRef<HTMLDivElement | null>(null);
  const isReducedMotion = useReducedMotion();

  const currentSegment = SEGMENTS_DATA.find((s) => s.id === selectedSegmentId) || SEGMENTS_DATA[0];

  useEffect(() => {
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(cardsGridRef.current?.children || [], {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isReducedMotion]);

  const getSegmentIcon = (iconName: string) => {
    switch (iconName) {
      case 'Apple':
        return <Apple className="w-5 h-5" />;
      case 'Shirt':
        return <Shirt className="w-5 h-5" />;
      case 'Car':
        return <Car className="w-5 h-5" />;
      case 'Cog':
        return <Cog className="w-5 h-5" />;
      case 'Building':
        return <Building className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="segmentos"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#060d1a] overflow-hidden w-full"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-orange-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1500px] 2xl:max-w-[1650px] mx-auto w-full">
        
        {/* HEADING */}
        <SectionHeading
          badge="Linhas Especializadas"
          badgeIcon={<Layers className="w-3.5 h-3.5 text-cyan-400" />}
          titleLight="Portfólio Químico de Alta Performance para"
          titleHighlight="5 Grandes Segmentos"
          description="Formulação técnica rigorosa, alto rendimento com diluições de até 1:300 e total conformidade sanitária para os setores industriais mais exigentes."
          className="mb-14"
        />

        {/* INTERACTIVE SEGMENT TABS */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {SEGMENTS_DATA.map((segment) => {
            const isSelected = segment.id === selectedSegmentId;
            return (
              <button
                key={segment.id}
                onClick={() => setSelectedSegmentId(segment.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-sky-600 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-[#0b192e]/80 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                {getSegmentIcon(segment.iconName)}
                <span>{segment.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE SEGMENT SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* LEFT: Segment Overview & Key Benefits */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-2xl bg-[#0b192e]/90 border border-cyan-500/25 backdrop-blur-xl relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold uppercase">
                  {currentSegment.heroBadge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Código: DIP-{currentSegment.id.toUpperCase()}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {currentSegment.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                {currentSegment.fullDescription}
              </p>

              {/* Specs Badge Strip */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
                    <Gauge className="w-3.5 h-3.5" />
                    <span>Faixa de pH</span>
                  </div>
                  <div className="text-xs font-bold text-white">
                    {currentSegment.phRange}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
                    <Droplets className="w-3.5 h-3.5" />
                    <span>Rendimento</span>
                  </div>
                  <div className="text-xs font-bold text-white">
                    {currentSegment.dilutionRatio}
                  </div>
                </div>
              </div>

              {/* Applications checklist */}
              <div className="space-y-2.5 mb-6">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                  Aplicações Típicas:
                </div>
                {currentSegment.applications.map((app, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <MagneticButton
                href="#orcamento"
                variant="orange"
                size="md"
                className="w-full"
              >
                <span>Cotar Linha {currentSegment.title.split('&')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>

          {/* RIGHT: Featured Technical Product Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Produtos em Destaque • Fórmulas Concentradas</span>
              </h4>
              <span className="text-xs text-slate-400">
                Clique para ver a ficha técnica
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentSegment.products.map((prod, idx) => (
                <GlassCard
                  key={idx}
                  accentBorder={prod.featured ? 'cyan' : 'none'}
                  tilt={true}
                  className="p-6 flex flex-col justify-between h-72 cursor-pointer group"
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                        {prod.category}
                      </span>
                      {prod.featured && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-500/20 text-orange-300 border border-orange-500/40">
                          Mais Vendido
                        </span>
                      )}
                    </div>

                    <h5 className="font-heading text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {prod.name}
                    </h5>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400">Diluição Máxima</div>
                      <div className="text-xs font-mono font-bold text-cyan-300">{prod.dilution}</div>
                    </div>

                    <button
                      onClick={() => setActiveModalProduct(prod)}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/30 flex items-center gap-1 transition-all"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Ficha Técnica</span>
                    </button>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Bottom Info Banner */}
            <div className="p-4 rounded-xl bg-[#0b192e]/60 border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300">
                  Precisa de uma concentração específica para o seu maquinário? Desenvolvemos formulações sob medida.
                </span>
              </div>
              <a
                href="#engenharia"
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 whitespace-nowrap underline"
              >
                Ver Engenharia Química →
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* TECHNICAL MODAL / PRODUCT INSPECTION */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0b192e] border border-cyan-500/40 p-6 shadow-2xl shadow-cyan-950/60">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-400 font-bold">
                {activeModalProduct.category}
              </span>
              {activeModalProduct.anvisaReg && (
                <span className="text-[10px] font-mono text-slate-400">
                  {activeModalProduct.anvisaReg}
                </span>
              )}
            </div>

            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              {activeModalProduct.name}
            </h3>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {activeModalProduct.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-[#060d1a] border border-slate-800">
              <div>
                <div className="text-xs font-mono text-slate-400 mb-1">Rendimento de Diluição</div>
                <div className="text-sm font-mono font-bold text-cyan-400">{activeModalProduct.dilution}</div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 mb-1">Potencial Hidrogeniônico</div>
                <div className="text-sm font-mono font-bold text-white">{activeModalProduct.ph}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MagneticButton
                href="#orcamento"
                variant="orange"
                size="md"
                className="flex-1"
                onClick={() => setActiveModalProduct(null)}
              >
                <span>Solicitar Amostra / Cotação</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <button
                onClick={() => setActiveModalProduct(null)}
                className="px-4 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 text-sm font-mono font-bold transition-all"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
