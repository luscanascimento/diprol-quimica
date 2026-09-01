import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { TESTIMONIALS_DATA, CLIENT_LOGOS } from '../../data/testimonialsData';
import { Star, Building2, Quote, TrendingDown, MapPin } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const SocialProofSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current?.children || [], {
        opacity: 0,
        y: 40,
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

  // Triple the client logos to ensure infinite continuous animation without gaps
  const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      ref={sectionRef}
      id="depoimentos"
      className="relative py-24 sm:py-32 bg-[#040914] overflow-hidden w-full"
    >
      {/* Background ambient orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-orange-500/5 blur-[150px] pointer-events-none" />

      {/* HEADING (Contained) */}
      <div className="max-w-7xl xl:max-w-[1500px] 2xl:max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-12">
        <SectionHeading
          badge="Prova Social & Resultados"
          badgeIcon={<Building2 className="w-3.5 h-3.5 text-cyan-400" />}
          titleLight="Quem Confia na Química de Alta Performance da"
          titleHighlight="Diprol Química"
          description="Relatos de diretores industriais, químicos responsáveis e gestores de suprimentos que transformaram seus custos operacionais no Vale do Paraíba."
          className="mb-8"
        />
      </div>

      {/* FULL-WIDTH INFINITE MARQUEE TICKER (Spanning edge-to-edge with complete top/bottom border) */}
      <div className="w-full border-y border-cyan-500/20 bg-[#0b192e]/60 py-5 mb-16 relative overflow-hidden backdrop-blur-md shadow-2xl shadow-black/50">
        <div className="w-full marquee-mask overflow-hidden">
          <div className="animate-marquee-infinite flex items-center gap-6">
            {marqueeItems.map((logo, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 text-slate-200 font-mono text-xs sm:text-sm font-semibold whitespace-nowrap shadow-lg shadow-black/30 transition-all shrink-0"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-white font-medium">{logo.name}</span>
                <span className="px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] bg-cyan-950/90 text-cyan-300 border border-cyan-500/40 font-bold">
                  {logo.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS GRID (Responsive for 1080p, 720p and Mobile) */}
      <div className="max-w-7xl xl:max-w-[1500px] 2xl:max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <GlassCard
              key={t.id}
              accentBorder="cyan"
              tilt={true}
              className="p-8 sm:p-10 flex flex-col justify-between h-full group border border-cyan-500/25 hover:border-cyan-400/60 shadow-xl shadow-cyan-950/20"
            >
              <div>
                {/* Header: Stars & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-500/40">
                    {t.badge}
                  </span>
                </div>

                {/* Quote text */}
                <div className="relative mb-6">
                  <Quote className="w-10 h-10 text-cyan-500/20 absolute -top-4 -left-2 pointer-events-none" />
                  <p className="text-slate-200 text-sm sm:text-base xl:text-lg leading-relaxed pl-6 italic font-normal">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              <div>
                {/* Saving Impact Badge */}
                <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs sm:text-sm font-mono font-bold">
                  <TrendingDown className="w-4 h-4 text-orange-400" />
                  <span>Resultado Atingido: {t.savingAchieved}</span>
                </div>

                {/* Author Info */}
                <div className="pt-5 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-white text-base sm:text-lg">
                      {t.author}
                    </h4>
                    <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                      {t.role} • <strong className="text-slate-200">{t.company}</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-cyan-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{t.city.split('-')[0]}</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
