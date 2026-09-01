import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield, ArrowRight, MessageSquare } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Segmentos', href: '#segmentos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Engenharia Química', href: '#engenharia' },
    { label: 'Clientes', href: '#depoimentos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#060d1a]/90 backdrop-blur-2xl border-b border-cyan-500/15 shadow-2xl shadow-black/70'
          : 'py-4 sm:py-5 bg-[#060d1a]/40 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* LOGO (LEFT) */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/30 flex items-center justify-center p-2 group-hover:border-cyan-400 transition-all shadow-lg shadow-cyan-500/10">
            <svg viewBox="0 0 64 64" fill="none" className="w-full h-full transform group-hover:rotate-12 transition-transform duration-500">
              <polygon points="32,4 58,18 58,46 32,60 6,46 6,18" stroke="#38bdf8" strokeWidth="4" fill="#0b192e" />
              <path d="M32 20 C32 20, 23 33, 23 40 C23 45.52 27.03 49 32 49 C36.97 49 41 45.52 41 40 C41 33 32 20 32 20 Z" fill="#06b6d4" />
              <circle cx="48" cy="24" r="4" fill="#f97316" />
            </svg>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                DIPROL
              </span>
              <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                QUÍMICA
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 tracking-wider flex items-center gap-1">
              <Shield className="w-2.5 h-2.5 text-cyan-400" />
              Vale do Paraíba & Região
            </span>
          </div>
        </a>

        {/* DESKTOP NAV LINKS (CENTER) */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#0b192e]/80 border border-cyan-500/15 rounded-full px-5 py-2 backdrop-blur-md shadow-inner shadow-cyan-950/40">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs xl:text-sm font-medium uppercase tracking-wider text-slate-300 hover:text-cyan-300 px-4 py-1.5 rounded-full hover:bg-cyan-500/10 transition-all font-mono"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ACTIONS & CTA (RIGHT) */}
        <div className="hidden sm:flex items-center gap-3.5 shrink-0">
          <a
            href="tel:+551239000000"
            className="hidden xl:flex items-center gap-2 text-xs xl:text-sm font-mono text-slate-300 hover:text-white px-3.5 py-2 rounded-xl border border-slate-800 hover:border-cyan-500/40 bg-slate-900/50 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>(12) 3900-0000</span>
          </a>

          <MagneticButton
            href="#orcamento"
            variant="orange"
            size="md"
            className="shadow-orange-500/20 text-xs xl:text-sm"
          >
            <span>Orçamento B2B</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </MagneticButton>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-800 transition-all"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bg-[#060d1a]/98 backdrop-blur-2xl border-b border-cyan-500/20 p-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider border-b border-slate-800 pb-2">
              Navegação Institucional
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-cyan-300 py-2 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-cyan-500/50" />
              </a>
            ))}
            
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="https://wa.me/5512999999999?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20produtos%20Diprol%20Qu%C3%ADmica."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm font-mono transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Atendimento WhatsApp Direto</span>
              </a>

              <MagneticButton
                href="#orcamento"
                variant="orange"
                size="md"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Solicitar Cotação B2B</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
