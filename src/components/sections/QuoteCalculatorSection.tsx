import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { MagneticButton } from '../common/MagneticButton';
import type { QuoteFormData, SegmentId } from '../../types';
import { SEGMENTS_DATA } from '../../data/segmentsData';
import { sanitizeText, formatPhone, validateQuoteForm } from '../../utils/sanitizer';
import { 
  Calculator, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Building, 
  Mail, 
  Phone, 
  User, 
  Layers, 
  MessageSquare,
  Lock,
  ArrowRight,
  TrendingDown
} from 'lucide-react';

export const QuoteCalculatorSection: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    segment: 'alimenticia',
    volumeEstimate: '500L - 1.000L / mês',
    customRequirements: '',
    lgpdConsent: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Volume options for B2B simulation
  const volumeOptions = [
    { label: 'Até 300L / mês', estimatedSaving: 'Até 20% com dosadores' },
    { label: '500L - 1.000L / mês', estimatedSaving: 'Até 30% de economia' },
    { label: '1.000L - 5.000L / mês', estimatedSaving: 'Até 38% + comodato total' },
    { label: 'Acima de 5.000L (Planta Completa)', estimatedSaving: 'Engenharia química personalizada' },
  ];

  const handleInputChange = (field: keyof QuoteFormData, value: string | boolean) => {
    let sanitizedValue = value;
    if (typeof value === 'string') {
      if (field === 'phone') {
        sanitizedValue = formatPhone(value);
      } else {
        sanitizedValue = sanitizeText(value);
      }
    }

    setFormData((prev) => ({ ...prev, [field]: sanitizedValue }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateQuoteForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate high-security API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger Confetti Effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#f97316', '#38bdf8', '#ffffff'],
        });
      } catch {
        // Safe fallback
      }
    }, 1000);
  };

  const getWhatsAppDirectLink = () => {
    const selectedSeg = SEGMENTS_DATA.find((s) => s.id === formData.segment)?.title || formData.segment;
    const msg = encodeURIComponent(
      `Olá Diprol Química! Gostaria de solicitar uma proposta técnica.\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Empresa:* ${formData.company}\n` +
      `*Segmento:* ${selectedSeg}\n` +
      `*Volume Estimado:* ${formData.volumeEstimate}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Telefone:* ${formData.phone}`
    );
    return `https://wa.me/5512999999999?text=${msg}`;
  };

  return (
    <section
      id="orcamento"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#060d1a] overflow-hidden w-full"
    >
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl xl:max-w-[1450px] 2xl:max-w-[1600px] mx-auto relative z-10 w-full">
        
        {/* HEADING */}
        <SectionHeading
          badge="Cotação & Proposta Técnica B2B"
          badgeIcon={<Calculator className="w-3.5 h-3.5 text-cyan-400" />}
          titleLight="Solicite uma Avaliação &"
          titleHighlight="Orçamento Personalizado"
          description="Receba um estudo de viabilidade técnica com estimativa de redução de custos e comodato de dosadores em até 24 horas."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Instant Savings Estimator & Guarantees */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <GlassCard
              accentBorder="cyan"
              className="p-8 relative overflow-hidden"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Simulador de Economia Operacional</span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                Por que migrar para o Sistema Diprol?
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                Ao concentrar seus produtos químicos e dosar eletronicamente, sua operação elimina perdas por derramamento e dosagem incorreta.
              </p>

              {/* Volume selector preview */}
              <div className="space-y-2.5 mb-6">
                <label className="text-xs font-mono text-slate-300 uppercase font-semibold block">
                  Selecione seu porte de consumo:
                </label>
                {volumeOptions.map((opt) => {
                  const isSelected = formData.volumeEstimate === opt.label;
                  return (
                    <button
                      type="button"
                      key={opt.label}
                      onClick={() => handleInputChange('volumeEstimate', opt.label)}
                      className={`w-full p-3.5 rounded-xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                        isSelected
                          ? 'bg-cyan-950/80 border-cyan-400/60 shadow-md shadow-cyan-500/10'
                          : 'bg-[#060d1a]/80 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className={`text-xs font-bold font-heading ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {opt.label}
                        </div>
                        <div className="text-[11px] font-mono text-cyan-400 mt-0.5 flex items-center gap-1">
                          <TrendingDown className="w-3 h-3 text-cyan-400" />
                          <span>{opt.estimatedSaving}</span>
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-cyan-400 bg-cyan-400' : 'border-slate-600'}`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instalação gratuita de dosadores automáticos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Entrega rápida no Vale do Paraíba com frota própria</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Laudos de eficácia e FISPQ inclusos para auditorias</span>
                </div>
              </div>
            </GlassCard>

            {/* Direct WhatsApp fast track */}
            <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-1.5 mb-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>Atendimento Imediato</span>
                </div>
                <p className="text-xs text-slate-300">
                  Prefere falar direto com um especialista técnico agora?
                </p>
              </div>

              <a
                href="https://wa.me/5512999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento%20qu%C3%ADmico%20r%C3%A1pido."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold whitespace-nowrap shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-1.5"
              >
                <span>Chamar no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* RIGHT: High Security Form Card */}
          <div className="lg:col-span-7">
            <GlassCard
              accentBorder="cyan"
              className="p-8 sm:p-10 relative overflow-hidden"
            >
              {isSuccess ? (
                <div className="flex flex-col items-center text-center py-8 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-heading text-3xl font-bold text-white mb-2">
                    Solicitação Recebida com Sucesso!
                  </h3>

                  <p className="text-slate-300 text-base max-w-md mb-6 leading-relaxed">
                    Obrigado, <strong className="text-cyan-300">{formData.name}</strong> da empresa <strong className="text-cyan-300">{formData.company}</strong>. Nossa equipe técnica de São José dos Campos já está analisando suas informações.
                  </p>

                  <div className="p-4 rounded-xl bg-[#060d1a] border border-slate-800 max-w-md w-full mb-8 text-left text-xs font-mono text-slate-300 space-y-1.5">
                    <div>• <strong>Segmento:</strong> {formData.segment}</div>
                    <div>• <strong>Volume:</strong> {formData.volumeEstimate}</div>
                    <div>• <strong>Prazo de Retorno:</strong> Em até 4 horas úteis</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <a
                      href={getWhatsAppDirectLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold text-center transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Agilizar no WhatsApp Agora</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          name: '',
                          company: '',
                          email: '',
                          phone: '',
                          segment: 'alimenticia',
                          volumeEstimate: '500L - 1.000L / mês',
                          customRequirements: '',
                          lgpdConsent: true,
                        });
                      }}
                      className="py-3 px-4 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 font-mono text-xs font-bold transition-all"
                    >
                      Nova Consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white">
                        Formulário de Cotação Técnica
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Campos com proteção contra XSS e conformidade LGPD
                      </p>
                    </div>
                    <Lock className="w-4 h-4 text-cyan-400" />
                  </div>

                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Ex: Carlos Silva"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#060d1a] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                            errors.name
                              ? 'border-rose-500 focus:ring-rose-500'
                              : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                        Empresa / Razão Social *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Ex: Indústria Vale Ltda"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#060d1a] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                            errors.company
                              ? 'border-rose-500 focus:ring-rose-500'
                              : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                          }`}
                        />
                      </div>
                      {errors.company && (
                        <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                          {errors.company}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                        E-mail Corporativo *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="carlos@empresa.com.br"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#060d1a] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                            errors.email
                              ? 'border-rose-500 focus:ring-rose-500'
                              : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="(12) 99999-9999"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#060d1a] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                            errors.phone
                              ? 'border-rose-500 focus:ring-rose-500'
                              : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Segment Selection */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                      Segmento Principal de Interesse *
                    </label>
                    <div className="relative">
                      <Layers className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <select
                        value={formData.segment}
                        onChange={(e) => handleInputChange('segment', e.target.value as SegmentId)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#060d1a] border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all cursor-pointer"
                      >
                        {SEGMENTS_DATA.map((s) => (
                          <option key={s.id} value={s.id} className="bg-[#0b192e] text-white">
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Custom requirements */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                      Detalhes da Necessidade / Problema Atual (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.customRequirements}
                      onChange={(e) => handleInputChange('customRequirements', e.target.value)}
                      placeholder="Ex: Precisamos desengraxar peças usinadas de alumínio sem manchas e estamos gastando muito produto..."
                      className="w-full p-3.5 rounded-xl bg-[#060d1a] border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  {/* LGPD Consent Checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.lgpdConsent}
                        onChange={(e) => handleInputChange('lgpdConsent', e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
                      />
                      <span className="text-xs text-slate-400 leading-snug">
                        Concordo com o tratamento dos dados fornecidos para elaboração de proposta comercial conforme a Lei Geral de Proteção de Dados (LGPD).
                      </span>
                    </label>
                    {errors.lgpdConsent && (
                      <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                        {errors.lgpdConsent}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <MagneticButton
                    type="submit"
                    variant="orange"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full glow-orange-md"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Enviando Dados Técnicos...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Solicitar Estudo & Cotação B2B</span>
                      </>
                    )}
                  </MagneticButton>

                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Seus dados são protegidos e tratados com sigilo industrial.</span>
                  </div>

                </form>
              )}
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
