import type { TestimonialItem } from '../types';

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    author: 'Eng. Carlos Eduardo Ramos',
    role: 'Gerente de Planta Industrial',
    company: 'Complexo Metalmecânico do Vale',
    city: 'São José dos Campos - SP',
    segment: 'Metalúrgica & Usinagem',
    quote: 'A substituição dos solventes clorados pelos desengraxantes alcalinos da Diprol reduziu nosso custo de tratamento de efluentes em 32% e eliminou totalmente os apontamentos de não conformidade em nossa auditoria ISO 14001.',
    savingAchieved: '-32% em efluentes e químicos',
    rating: 5,
    badge: 'Cliente há 8 anos'
  },
  {
    id: '2',
    author: 'Dra. Mariana Vasconcellos',
    role: 'Supervisora de Controle de Infecção & Hotelaria',
    company: 'Grupo Hospitalar Vale Saúde',
    city: 'Taubaté - SP',
    segment: 'Lavanderia & Institucional Hospitalar',
    quote: 'A estabilidade dos produtos da Diprol e os laudos com certificação REBLAS nos deram a segurança sanitária necessária para nosso centro cirúrgico. A durabilidade do nosso enxoval de algodão subiu quase 40%.',
    savingAchieved: '+40% vida útil do enxoval',
    rating: 5,
    badge: 'Auditoria ANVISA Nota Máxima'
  },
  {
    id: '3',
    author: 'Ricardo Silveira',
    role: 'Diretor de Operações e Qualidade',
    company: 'Frigorífico & Alimentos Dutra',
    city: 'Jacareí - SP',
    segment: 'Indústria Alimentícia',
    quote: 'A consultoria presencial da Diprol foi decisiva. Eles calibraram os sistemas de CIP e treinaram nossa equipe noturna de higienização. O consumo de sanitizantes caiu pela metade sem perder nem 1% de eficácia microbiológica.',
    savingAchieved: '-48% consumo de sanitizantes',
    rating: 5,
    badge: 'Controle Microbiológico 100%'
  },
  {
    id: '4',
    author: 'Fernanda Toledo',
    role: 'Gerente de Manutenção de Frotas',
    company: 'LogExpress Transportes Rodoviários',
    city: 'Pindamonhangaba - SP',
    segment: 'Linha Automotiva & Frotas',
    quote: 'Lavar mais de 80 carretas por dia exigia um desengraxante que agisse rápido sem danificar as partes de alumínio e a lona. Os produtos Diprol reduziram nosso tempo de lavagem por caminhão em 15 minutos.',
    savingAchieved: '15 min a menos por veículo',
    rating: 5,
    badge: 'Frota Pesada'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Metalúrgica & Aeroespacial SJC', tag: 'Aeroespacial' },
  { name: 'Rede Hospitalar Vale Sul', tag: 'Saúde & Clínicas' },
  { name: 'AgroAlimentos Dutra', tag: 'Frigoríficos & Laticínios' },
  { name: 'TransVale Logística', tag: 'Transportes & Frotas' },
  { name: 'Condomínios Corporativos Alpha', tag: 'Institucional' },
  { name: 'Cervejaria Artesanal Mantiqueira', tag: 'Bebidas & CIP' },
  { name: 'Polo Químico & Tintas SP', tag: 'Indústria Química' },
  { name: 'Hotel & Resort Serra Verde', tag: 'Hotelaria de Luxo' }
];

export const VALE_CITIES = [
  'São José dos Campos',
  'Taubaté',
  'Jacareí',
  'Pindamonhangaba',
  'Guaratinguetá',
  'Caçapava',
  'Lorena',
  'Aparecida',
  'Cruzeiro',
  'Tremembé',
  'Caraguatatuba (Litoral Norte)',
  'São Sebastião'
];
