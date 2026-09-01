import React from 'react';
import { VALE_CITIES } from '../../data/testimonialsData';
import { MapPin, Phone, Mail, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="relative bg-[#040914] border-t border-cyan-500/20 text-slate-400 pt-20 pb-12 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* TOP REGIONAL COVERAGE BANNER */}
        <div className="p-8 rounded-2xl bg-[#0b192e]/80 border border-cyan-500/20 backdrop-blur-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold uppercase mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Logística Dedicada</span>
              </div>
              <h3 className="font-heading text-2xl font-extrabold text-white mb-2">
                Raio de Atendimento Direto
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Frota própria e centros de distribuição com pronta-entrega e atendimento presencial em todo o eixo da Rodovia Presidente Dutra e Litoral.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="flex flex-wrap gap-2">
                {VALE_CITIES.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/30 flex items-center justify-center p-2">
                <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                  <polygon points="32,4 58,18 58,46 32,60 6,46 6,18" stroke="#38bdf8" strokeWidth="4" fill="#0b192e" />
                  <path d="M32 20 C32 20, 23 33, 23 40 C23 45.52 27.03 49 32 49 C36.97 49 41 45.52 41 40 C41 33 32 20 32 20 Z" fill="#06b6d4" />
                  <circle cx="48" cy="24" r="4" fill="#f97316" />
                </svg>
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  DIPROL
                </span>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest ml-1.5 px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/30">
                  QUÍMICA
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Fabricação e distribuição de produtos químicos especiais, saneantes e soluções de higiene profissional. Alta tecnologia para redução de custos na indústria.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>ANVISA Notificado</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <Award className="w-4 h-4 text-orange-400" />
                <span>CRQ-IV Ativo</span>
              </div>
            </div>
          </div>

          {/* Col 2: Linhas Químicas */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 font-mono text-cyan-400">
              Linhas Químicas
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#segmentos" className="hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>Indústria Alimentícia & CIP</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              </li>
              <li>
                <a href="#segmentos" className="hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>Lavanderia Hospitalar & Hoteleira</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              </li>
              <li>
                <a href="#segmentos" className="hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>Linha Automotiva & Frotas</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              </li>
              <li>
                <a href="#segmentos" className="hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>Metalúrgica & Usinagem</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              </li>
              <li>
                <a href="#segmentos" className="hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>Higiene Institucional & Clínicas</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegação Rápida */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 font-mono text-cyan-400">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#quem-somos" className="hover:text-cyan-300 transition-colors">Quem Somos</a></li>
              <li><a href="#diferenciais" className="hover:text-cyan-300 transition-colors">Diferenciais</a></li>
              <li><a href="#engenharia" className="hover:text-cyan-300 transition-colors">Engenharia Química</a></li>
              <li><a href="#depoimentos" className="hover:text-cyan-300 transition-colors">Clientes & Casos</a></li>
              <li><a href="#orcamento" className="hover:text-cyan-300 transition-colors">Solicitar Orçamento</a></li>
            </ul>
          </div>

          {/* Col 4: Contato & Matriz */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-1 font-mono text-cyan-400">
              Atendimento Industrial
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs sm:text-sm">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
              <div>
                <div className="text-white font-semibold">(12) 3900-0000</div>
                <div className="text-xs text-slate-400">Seg a Sex: 07h30 às 17h30</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
              <div>
                <div className="text-white font-semibold">comercial@diprolquimica.com.br</div>
                <div className="text-xs text-slate-400">Retorno em até 4h úteis</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
              <div>
                <div className="text-white font-semibold">Parque Industrial</div>
                <div className="text-xs text-slate-400">São José dos Campos - SP • Brasil</div>
              </div>
            </div>
          </div>

        </div>

        {/* COPYRIGHT & COMPLIANCE BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Diprol Química Industrial Ltda. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 transition-colors">Termos de Uso</span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors">Privacidade & LGPD</span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors">FISPQ / FDS Online</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
