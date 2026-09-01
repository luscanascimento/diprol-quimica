import type { SegmentData } from '../types';

export const SEGMENTS_DATA: SegmentData[] = [
  {
    id: 'alimenticia',
    title: 'Indústria Alimentícia & Frigoríficos',
    subtitle: 'Higiene e Sanatização de Grau Alimentício com Laudos Microbiológicos',
    shortDesc: 'Sanitizantes e detergentes de alta performance para frigoríficos, laticínios, cervejarias e cozinhas industriais em conformidade ANVISA e MAPA.',
    iconName: 'Apple',
    accentColor: 'cyan',
    heroBadge: 'Grau Alimentício & CIP',
    fullDescription: 'Formulações químicas desenvolvidas para eliminar biofilmes, patógenos e sujidades proteicas/lipídicas em plantas de processamento de alimentos, com total segurança para superfícies de contato.',
    applications: [
      'Sistemas CIP (Clean-In-Place) automatizados',
      'Desinfecção de esteiras, tanques e tubulações',
      'Sanitização por espuma de alta aderência vertical',
      'Desincrustação alcalina e ácida de trocadores de calor'
    ],
    keyBenefits: [
      'Eliminação comprovada de Salmonella e Listeria',
      'Fórmulas não corrosivas para aço inox 304 e 316',
      'Altíssimo rendimento em dosadores automatizados'
    ],
    phRange: 'pH 1.0 a 13.5 (Ácidos & Alcalinos)',
    dilutionRatio: 'Até 1:200 em água',
    standards: ['ANVISA RDC', 'Conformidade MAPA', 'Laudo Virucida/Bactericida'],
    products: [
      {
        name: 'DiproSan CIP 500',
        category: 'Sanitizante Ácido Peracético',
        description: 'Sanitizante oxidante para enxágue final sem resíduos tóxicos em linhas de envase e laticínios.',
        dilution: '1:500',
        ph: 'pH 2.2',
        anvisaReg: 'Reg. ANVISA 3.2451.0112',
        featured: true
      },
      {
        name: 'DiproKleen Foam Forte',
        category: 'Detergente Alcalino Clorado Espumante',
        description: 'Poderoso removedor de gorduras e proteínas para câmaras frigoríficas e pisos industriais.',
        dilution: '1:100 a 1:200',
        ph: 'pH 12.8',
        anvisaReg: 'Reg. ANVISA 3.2451.0098',
        featured: true
      },
      {
        name: 'DiproDesinc Acid',
        category: 'Desincrustante Inorgânico Especial',
        description: 'Remoção de depósitos minerais e pedras de leite em tanques e pasteurizadores.',
        dilution: '1:50',
        ph: 'pH 1.2',
        anvisaReg: 'Reg. ANVISA 3.2451.0105'
      }
    ]
  },
  {
    id: 'lavanderia',
    title: 'Lavanderia Industrial & Hospitalar',
    subtitle: 'Tecnologia de Fibras, Desinfecção Térmica/Química e Brancura Superior',
    shortDesc: 'Linha completa para lavanderias hospitalares, hotelaria e uniformes pesados com preservação do enxoval e redução de ciclos térmicos.',
    iconName: 'Shirt',
    accentColor: 'blue',
    heroBadge: 'Preservação de Enxoval',
    fullDescription: 'Sistemas dosados eletronicamente que garantem remoção de sangue, medicamentos, graxas e manchas difíceis, com ativos oxidantes suaves que prolongam a vida útil do tecido em até 35%.',
    applications: [
      'Lavanderias hospitalares e centros cirúrgicos (grau termoquímico)',
      'Lavanderias industriais de uniformes com graxa pesada',
      'Enxoval de alta densidade para hotelaria 4 e 5 estrelas',
      'Neutralização de pH e remoção de cloro residual'
    ],
    keyBenefits: [
      'Redução drástica do descarte prematuro de tecidos',
      'Desinfecção comprovada em temperaturas mais baixas (economia de vapor)',
      'Menor consumo de água por quilo de roupa lavada'
    ],
    phRange: 'pH 4.5 a 11.5',
    dilutionRatio: '2 a 8 ml por kg de roupa seca',
    standards: ['ANVISA Hospitalar', 'Testes de Resistência Têxtil', 'Biodegradabilidade'],
    products: [
      {
        name: 'DiproWash Ultra Liquid',
        category: 'Detergente Umectante Enzimático',
        description: 'Quebra enzimática de sangue, urina e fluidos corpóreos sem agredir fibras de algodão.',
        dilution: '3ml / kg roupa',
        ph: 'pH 8.5',
        anvisaReg: 'Reg. ANVISA 3.2451.0144',
        featured: true
      },
      {
        name: 'DiproOxi White 200',
        category: 'Alvejante à Base de Oxigênio Ativo',
        description: 'Branqueamento e desinfecção termoquímica sem desgaste fibroso típico do cloro.',
        dilution: '4ml / kg roupa',
        ph: 'pH 3.0',
        anvisaReg: 'Reg. ANVISA 3.2451.0132',
        featured: true
      },
      {
        name: 'DiproSoft Antiacolor',
        category: 'Amaciante & Neutralizante Catiônico',
        description: 'Regula o pH têxtil para neutralidade biológica da pele e confere toque aveludado duradouro.',
        dilution: '2ml / kg roupa',
        ph: 'pH 5.5',
        anvisaReg: 'Reg. ANVISA 3.2451.0150'
      }
    ]
  },
  {
    id: 'automotiva',
    title: 'Linha Automotiva & Frotas Pesadas',
    subtitle: 'Desengraxe Profundo, Brilho Sem Resíduos e Proteção de Chassis',
    shortDesc: 'Desengraxantes biodegradáveis, shampoos técnicos e acabamento para transportadoras, concessionárias e centros de estética.',
    iconName: 'Car',
    accentColor: 'orange',
    heroBadge: 'Frotas & Estética Técnica',
    fullDescription: 'Química formulada para remover fuligem de freio, piche, barro argiloso e películas oleosas de frotas rodoviárias e urbanas, sem manchar alumínios, borrachas ou pinturas vitrificadas.',
    applications: [
      'Lavagem rápida e profunda de chassis e motores',
      'Descontaminação ferrosa de rodas e carrocerias',
      'Shampoos espumantes para lavagem sem toque (Touchless)',
      'Desengraxe interno de baús frigoríficos e tanques'
    ],
    keyBenefits: [
      'Biodegradabilidade com rápido descarte em caixas separadoras (SAO)',
      'Não mancha frisos de alumínio polido ou plásticos automotivos',
      'Alta concentração com diluições de até 1:100'
    ],
    phRange: 'pH 6.0 a 13.0',
    dilutionRatio: '1:20 a 1:100',
    standards: ['Laudo Biodegradabilidade', 'Compatibilidade com Pinturas OEM'],
    products: [
      {
        name: 'DiproDegrease Heavy Truck',
        category: 'Desengraxante Flotador Alcalino',
        description: 'Desprende graxa pesada de motores e chassis sem necessidade de esfrega mecânica excessiva.',
        dilution: '1:40 a 1:80',
        ph: 'pH 12.5',
        featured: true
      },
      {
        name: 'DiproShampoo HydroShield',
        category: 'Shampoo Automotivo com Polímeros',
        description: 'pH neutro com surfactantes de alta lubricidade e efeito anti-estático que repele poeira.',
        dilution: '1:100',
        ph: 'pH 7.0',
        featured: true
      },
      {
        name: 'DiproClean Wheel & Iron',
        category: 'Descontaminante Ferroso Neutro',
        description: 'Reage quimicamente com partículas metálicas de pastilha de freio mudando de cor.',
        dilution: 'Pronto Uso / 1:2',
        ph: 'pH 6.8'
      }
    ]
  },
  {
    id: 'metalurgica',
    title: 'Indústria Metalúrgica & Usinagem',
    subtitle: 'Tratamento de Superfícies, Desengraxe Industrial e Proteção Anticorrosiva',
    shortDesc: 'Soluções de engenharia química para desengraxe pós-usinagem, decapagem e passivação de peças usinadas no polo aeroespacial e automotivo.',
    iconName: 'Cog',
    accentColor: 'indigo',
    heroBadge: 'Polo Aeroespacial & Usinagem',
    fullDescription: 'Desenvolvido sob medida para as altas exigências técnicas do Vale do Paraíba. Fórmulas livres de solventes clorados nocivos, garantindo desengraxe ultrassônico e proteção temporária contra oxidação.',
    applications: [
      'Desengraxe em lavadoras automáticas tipo túnel e ultrassom',
      'Fosfatização e pré-pintura eletrostática (KTL e pó)',
      'Decapagem química e desoxidação de ligas metálicas',
      'Fluidos protetivos hidrorrepelentes e óleos de estampagem'
    ],
    keyBenefits: [
      'Segurança do operador: isento de solventes halogenados perigosos',
      'Excelente ancoragem para tintas e revestimentos posteriores',
      'Proteção contra corrosão inter-operacional de até 60 dias'
    ],
    phRange: 'pH 1.5 a 12.0',
    dilutionRatio: '1:10 a 1:50',
    standards: ['ISO 14001 Compliant', 'RoHS / REACH Friendly', 'Laudos de Corrosão Salt-Spray'],
    products: [
      {
        name: 'DiproSonic MetalClean 80',
        category: 'Desengraxante Ultrassônico Neutro/Alcalino',
        description: 'Alta cavitação para remoção de cavacos e óleos sintéticos de corte em peças usinadas.',
        dilution: '1:20 a 1:50',
        ph: 'pH 9.5',
        featured: true
      },
      {
        name: 'DiproPhos Phosphating 300',
        category: 'Fosfatizante a Frio 3 em 1',
        description: 'Desengraxa, decapa oxidações leves e cria camada micrométrica de fosfato para ancoragem.',
        dilution: '1:10',
        ph: 'pH 2.0',
        featured: true
      },
      {
        name: 'DiproGuard Anti-Rust Oil',
        category: 'Protetivo Anticorrosivo Desaguante',
        description: 'Repele umidade instantaneamente formando película cerosa ultrafina auto-reparadora.',
        dilution: 'Puro',
        ph: 'N/A'
      }
    ]
  },
  {
    id: 'institucional',
    title: 'Higiene Institucional & Condomínios',
    subtitle: 'Desinfecção de Alto Nível para Hospitais, Escolas e Edifícios Comerciais',
    shortDesc: 'Higienização profissional com alto rendimento, aromas refinados, ceras de alta durabilidade e desinfetantes hospitalares de 5ª geração.',
    iconName: 'Building',
    accentColor: 'emerald',
    heroBadge: 'Alto Tráfego & Clínicas',
    fullDescription: 'Linha completa com sistemas de diluição que padronizam o consumo e eliminam o desperdício em redes hospitalares, universidades, condomínios corporativos e shoppings.',
    applications: [
      'Desinfecção de superfícies críticas em ambientes de saúde',
      'Tratamento de pisos com ceras acrílicas de alto tráfego (High Speed)',
      'Higienização de sanitários com neutralização enzimática de odores',
      'Sabonetes líquidos perolizados e espumas bactericidas com glicerina'
    ],
    keyBenefits: [
      'Economia de até 45% com dosagem controlada por refil lacrado',
      'Fragrâncias exclusivas com fixação prolongada de tecnologia microencapsulada',
      'Atendimento rigoroso às normas da ANVISA para ambientes coletivos'
    ],
    phRange: 'pH 6.5 a 8.5 (Neutro e Seguro)',
    dilutionRatio: 'Até 1:300',
    standards: ['ANVISA Grau 2', 'Laudos de Inativação Microbiana', 'Dermatologicamente Testado'],
    products: [
      {
        name: 'DiproQuat 5G Hospitalar',
        category: 'Desinfetante Quaternário de Amônio 5ª Geração',
        description: 'Ação bactericida e fungicida em 5 minutos para superfícies fixas e artigos não críticos.',
        dilution: '1:100 a 1:200',
        ph: 'pH 7.0',
        anvisaReg: 'Reg. ANVISA 3.2451.0162',
        featured: true
      },
      {
        name: 'DiproFloor Diamond Finish',
        category: 'Impermeabilizante Acrílico Termoplástico',
        description: 'Película ultra resistente antiderrapante com brilho espelhado tipo molhado para alto tráfego.',
        dilution: 'Puro (Rendimento 80m²/L)',
        ph: 'pH 8.2',
        featured: true
      },
      {
        name: 'DiproFresh OdorLock',
        category: 'Limpador Neutralizador Enzimático',
        description: 'Degrada fontes bacterianas de odores desagradáveis com perfume cítrico sofisticado.',
        dilution: '1:50 a 1:150',
        ph: 'pH 7.2'
      }
    ]
  }
];
