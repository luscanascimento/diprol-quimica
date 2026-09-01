import type { AuthorityMetric, CompetitiveAdvantage, CustomEngineeringStep } from '../types';

export const AUTHORITY_METRICS: AuthorityMetric[] = [
  {
    id: 'years',
    value: 25,
    suffix: '+',
    label: 'Anos de Tradição',
    sublabel: 'Pioneirismo químico no Vale do Paraíba e Litoral Norte'
  },
  {
    id: 'volume',
    value: 12000,
    suffix: ' ton',
    label: 'Volume Anual',
    sublabel: 'Química formulada e distribuída com rastreabilidade total'
  },
  {
    id: 'industries',
    value: 650,
    suffix: '+',
    label: 'Clientes Corporativos',
    sublabel: 'Indústrias, redes hospitalares e operadores logísticos'
  },
  {
    id: 'compliance',
    value: 100,
    suffix: '%',
    label: 'Conformidade ANVISA',
    sublabel: 'Laudos técnicos de eficácia e licenças ambientais ativas'
  }
];

export const COMPETITIVE_ADVANTAGES: CompetitiveAdvantage[] = [
  {
    id: 'manufacturing',
    title: 'Fabricação Própria & P&D',
    badge: 'Controle de Qualidade',
    description: 'Parque fabril equipado com reatores modernos e laboratório de controle de qualidade lote a lote. Sem intermediários.',
    highlight: 'Fórmulas customizadas e rastreabilidade total de lote',
    icon: 'Factory'
  },
  {
    id: 'consulting',
    title: 'Consultoria Técnica Presencial',
    badge: 'In-Loco no Vale',
    description: 'Engenheiros e químicos realizam visitas técnicas periódicas, calibração de dosadores e treinamento de equipes operacionais.',
    highlight: 'Suporte presencial em até 24h na sua planta industrial',
    icon: 'ShieldCheck'
  },
  {
    id: 'certifications',
    title: 'Laudos de Eficácia & ANVISA',
    badge: 'Rigor Científico',
    description: 'Produtos com registros ativos na ANVISA, laudos virucidas/bactericidas de laboratórios REBLAS e FISPQ/FDS completas.',
    highlight: 'Segurança jurídica e sanitária para auditorias internacionais',
    icon: 'FileCheck'
  },
  {
    id: 'logistics',
    title: 'Logística Ágil & Frota Dedicada',
    badge: 'Entrega Expressa',
    description: 'Centro de distribuição estratégico e caminhões próprios para pronta-entrega em todo o eixo Dutra e Vale do Paraíba.',
    highlight: 'Zero parada de linha por falta de insumos químicos',
    icon: 'Truck'
  }
];

export const ENGINEERING_STEPS: CustomEngineeringStep[] = [
  {
    step: '01',
    title: 'Diagnóstico Químico In-Loco',
    badge: 'Análise Técnica',
    description: 'Nossa equipe de químicos industriais visita sua operação, audita tipos de sujidade, dureza da água e processos de lavagem/higienização.',
    deliverable: 'Relatório de Diagnóstico & Mapeamento de Pontos Críticos de Desperdício',
    costSavingEstimate: 'Identificação de 15% a 30% em perdas por sobredosagem'
  },
  {
    step: '02',
    title: 'Engenharia de Formulação Sob Medida',
    badge: 'P&D Diprol',
    description: 'Ajustamos a concentração dos tensoativos, solventes orgânicos ou agentes alcalinos/ácidos exatamente para a necessidade do seu substrato.',
    deliverable: 'Lote piloto para testes operacionais com validação microbiológica',
    costSavingEstimate: 'Eliminação de retrabalhos de lavagem ou desengraxe'
  },
  {
    step: '03',
    title: 'Instalação de Dosadores Automáticos em Comodato',
    badge: 'Tecnologia Aplicada',
    description: 'Instalamos centrais de dosagem eletrônica e bombas peristálticas de precisão sem custo de aquisição para sua empresa.',
    deliverable: 'Equipamentos calibrados com travas contra manipulação indevida',
    costSavingEstimate: 'Diluição milimétrica exata que impede o desperdício de produto'
  },
  {
    step: '04',
    title: 'Monitoramento Contínuo & Treinamento',
    badge: 'Economia Garantida',
    description: 'Treinamento operacional certificado para seus colaboradores com entrega de fichas de diluição e visitas mensais de aferição.',
    deliverable: 'Dashboard de consumo mensal e certificação técnica de equipe',
    costSavingEstimate: 'Redução média comprovada de 25% a 40% no custo mensal total'
  }
];
