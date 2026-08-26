import { Protocol, FaqItem, Testimonial, TransformationCase } from '../types';

export const PROTOCOLS: Protocol[] = [
  {
    id: 'lipomanual-sculpt',
    name: 'LipoManual Sculpt™',
    tagline: 'Remodelagem tridimensional imediata e afinamento de silhueta',
    category: 'remodelagem',
    categoryLabel: 'Remodelagem Corporal',
    duration: '60 a 75 min',
    sessionsRecommended: '5 a 10 sessões',
    description: 'Protocolo autoral que combina manobras manuais profundas com termoterapia ativa e ativos lipolíticos de alta penetração. Desenvolvido para esculpir o contorno da cintura, abdômen e flancos desde a primeira sessão.',
    benefits: [
      'Redução visível de até 3 a 7cm de circunferência nas primeiras sessões',
      'Descompactação do tecido adiposo resistente',
      'Definição dos contornos musculares e silhueta desenhada',
      'Estímulo circulatório com efeito detox imediato'
    ],
    idealFor: [
      'Gordura localizada resistente em abdômen e flancos',
      'Busca por contorno corporal refinado sem procedimentos invasivos',
      'Preparação para eventos e viagens'
    ],
    methodology: 'Manobras de alta precisão anatômica associadas a cosmecêuticos biocompatíveis com nanotecnologia liporedutora.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    badge: 'Mais Procurado'
  },
  {
    id: 'firmdeep-matrix',
    name: 'FirmDeep Matrix™',
    tagline: 'Reestruturação de colágeno e combate à flacidez dérmica',
    category: 'firmeza',
    categoryLabel: 'Firmeza & Tônus',
    duration: '60 min',
    sessionsRecommended: '6 a 12 sessões',
    description: 'Tratamento de alta performance focado na ativação de fibroblastos e redensificação tecidual. Ideal para peles que perderam elasticidade após oscilações de peso, gestação ou envelhecimento natural.',
    benefits: [
      'Aumento expressivo da densidade e elasticidade da pele',
      'Efeito lifting corporal com reposicionamento tecidual',
      'Estímulo contínuo de neocolagênese por até 45 dias pós-sessão',
      'Textura aveludada e hidratação profunda'
    ],
    idealFor: [
      'Flacidez pós-parto ou pós-emagrecimento',
      'Braços, abdômen interno de coxas e glúteos',
      'Pele desvitalizada e com aspecto frouxo'
    ],
    methodology: 'Massagem miofascial profunda combinada a peptídeos bioidênticos e ativos tensores de liberação prolongada.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
    badge: 'Alta Densidade'
  },
  {
    id: 'drenolinf-touch-pro',
    name: 'Drenolinf Touch Pro™',
    tagline: 'Desintoxicação profunda, drenagem sistêmica e leveza absoluta',
    category: 'pos-operatorio',
    categoryLabel: 'Drenagem & Detox',
    duration: '60 min',
    sessionsRecommended: 'Plano contínuo / 4 a 8 sessões',
    description: 'Método de drenagem linfática avançada com toques milimetricamente cadenciados que aceleram o fluxo linfático, eliminam toxinas estagnadas e proporcionam um alívio imediato de inchaço e cansaço.',
    benefits: [
      'Desinchaço instantâneo e sensação prolongada de leveza',
      'Ativação do sistema imunológico e metabólico',
      'Melhora significativa da circulação sanguínea de retorno',
      'Redução de retenção líquida pré-menstrual ou de estresse'
    ],
    idealFor: [
      'Retenção hídrica crônica e sensação de peso nas pernas',
      'Gestantes (com liberação médica) e pré/pós-viagens longas',
      'Equilíbrio e relaxamento profundo do sistema nervoso'
    ],
    methodology: 'Manobras suaves e ritmadas baseadas na fisiologia linfática avançada e aromaterapia integrativa.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'celluzero-harmonic',
    name: 'CelluZero Harmonic™',
    tagline: 'Tratamento multinível para celulite e sustentação glútea',
    category: 'celulite',
    categoryLabel: 'Celulite & Glúteos',
    duration: '75 min',
    sessionsRecommended: '8 a 10 sessões',
    description: 'Protocolo de choque focado no rompimento de septos fibrosos e na melhora do relevo cutâneo em glúteos e coxas. Promove aspecto liso, uniforme e efeito up instantâneo.',
    benefits: [
      'Suavização visível de ondulações e aspecto casca de laranja',
      'Efeito lifting e modelagem dos glúteos (Pump natural)',
      'Oxigenação celular intensa do tecido adiposo comprometido',
      'Prevenção de novas fibroses teciduais'
    ],
    idealFor: [
      'Celulite em graus I, II e III em glúteos e posterior de coxas',
      'Perda de sustentação e contorno glúteo',
      'Pele com aspecto irregular e retenção nas pernas'
    ],
    methodology: 'Terapia de vácuo modulado, manobras vigorosas circulares e complexos drenantes botânicos de alta pureza.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    badge: 'Efeito Up'
  },
  {
    id: 'recovery-post-op',
    name: 'Recovery Post-Op™',
    tagline: 'Reabilitação tecidual precoce e prevenção de fibroses cirúrgicas',
    category: 'pos-operatorio',
    categoryLabel: 'Pós-Cirúrgico',
    duration: '60 min',
    sessionsRecommended: '10 a 20 sessões personalizadas',
    description: 'Cuidado especializado para pacientes em pós-operatório de lipoaspiração, abdominoplastia, mamoplastia e outros procedimentos. Foco na cicatrização harmoniosa, conforto e restauração rápida da mobilidade.',
    benefits: [
      'Prevenção e tratamento de seromas e fibroses precoces',
      'Alívio de dores, tensões e sensibilidade pós-cirúrgica',
      'Aceleração expressiva da cicatrização e recuperação estética',
      'Acompanhamento e ajuste contínuo de placas e cintas'
    ],
    idealFor: [
      'Pós-cirúrgico recente (a partir das primeiras 48-72h)',
      'Prevenção de aderências e nós cicatriciais',
      'Pacientes que buscam recuperação segura com protocolo científico'
    ],
    methodology: 'Drenagem reversa especializada, mobilização tecidual suave e protocolos de desfibrosamento seguro.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f02e6988c52?auto=format&fit=crop&w=800&q=80',
    badge: 'Cuidado Médico Integrado'
  },
  {
    id: 'glow-bridal-exclusive',
    name: 'Glow & Bridal Exclusive™',
    tagline: 'Experiência de gala com efeito Cinderela e radiância corporal',
    category: 'especial',
    categoryLabel: 'Experiência VIP',
    duration: '90 min',
    sessionsRecommended: '1 a 3 sessões (Pré-Evento)',
    description: 'O ritual definitivo para momentos inesquecíveis. Combina esfoliação de cristais de quartzo, drenagem iluminadora, hidratação com partículas douradas e contorno instantâneo.',
    benefits: [
      'Pele com viço luminoso, sedosa e perfumada com essência autoral',
      'Desinchaço imediato para caimento perfeito de vestidos e trajes',
      'Relaxamento profundo para amenizar ansiedade pré-evento',
      'Contorno e colo iluminados para registros fotográficos perfeitos'
    ],
    idealFor: [
      'Noivas, madrinhas, formandas e aniversariantes',
      'Eventos de gala, premiações e ensaios fotográficos',
      'Presente ou dia de autocuidado memorável'
    ],
    methodology: 'Ritual multissensorial com cromoterapia suave, escalda-pés com ervas nobres e massagem com bálsamo iluminador.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    badge: 'Experiência Premium'
  }
];

export const TRANSFORMATION_CASES: TransformationCase[] = [
  {
    id: 'case-1',
    title: 'Transformação de Abdômen & Flancos',
    protocolName: 'LipoManual Sculpt™',
    sessions: '8 Sessões',
    clientInitials: 'M. V.',
    age: '34 anos',
    quote: 'Eu achava que só cirurgia resolveria o inchaço e a gordura lateral que sobraram da gestação. O método da Jenefer redefiniu meu corpo sem dor e com resultado inacreditável.',
    results: ['-6.5 cm de circunferência abdominal', 'Eliminação da retenção hídrica lateral', 'Definição da linha alba e cintura desenhada'],
    beforeImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'case-2',
    title: 'Reestruturação de Glúteos & Posterior',
    protocolName: 'CelluZero Harmonic™',
    sessions: '6 Sessões',
    clientInitials: 'C. S.',
    age: '29 anos',
    quote: 'O relevo da minha pele mudou completamente. Os buraquinhos de celulite que me incomodavam há anos praticamente sumiram e o bumbum ficou muito mais firme.',
    results: ['Nivelamento do relevo cutâneo em 85%', 'Efeito Up nos glúteos comprovado', 'Pele visivelmente mais densa e hidratada'],
    beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'case-3',
    title: 'Recuperação Rápida Pós-Lipo HD',
    protocolName: 'Recovery Post-Op™',
    sessions: '12 Sessões',
    clientInitials: 'P. L.',
    age: '41 anos',
    quote: 'Meu cirurgião elogiou muito o resultado da minha cicatrização. Não tive uma única fibrose graças ao cuidado cirúrgico e atento da equipe Jenefer Viana.',
    results: ['Zero formação de fibroses aderentes', 'Recuperação do conforto 40% mais rápida', 'Delineamento perfeito dos gominhos da Lipo HD'],
    beforeImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dra. Camila Albuquerque',
    role: 'Médica Dermatologista & Cliente',
    content: 'Como médica, sou extremamente criteriosa com a fundamentação de qualquer procedimento. A Jenefer domina a anatomia corporal como poucos no Brasil. Os resultados são visíveis e muito seguros.',
    rating: 5,
    protocol: 'LipoManual Sculpt™',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-2',
    name: 'Renata Mendonça',
    role: 'Empresária',
    content: 'O Studio é um refúgio de paz no meio da correria. O atendimento é ultra privativo, elegante e o resultado corporal é imediato. Não troco por nada.',
    rating: 5,
    protocol: 'FirmDeep Matrix™',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-3',
    name: 'Juliana Paes Fontes',
    role: 'Esteticista & Aluna da Mentoria VIP',
    content: 'Fazer a formação com a Jenefer transformou meu faturamento e meu posicionamento. Aprendi técnicas que nenhuma faculdade ensina e hoje atendo o público high-end da minha cidade.',
    rating: 5,
    protocol: 'Mentoria & Método Autoral',
    avatar: 'https://images.unsplash.com/photo-1534751516642-a171ed808544?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Em quantas sessões já é possível notar os primeiros resultados?',
    answer: 'Na grande maioria dos nossos protocolos autorais, como o LipoManual Sculpt™ e Drenolinf Touch Pro™, a diferença de medidas, desinchaço e textura da pele é nítida já ao final da PRIMEIRA sessão. Para resultados cumulativos e estruturais, montamos um plano de 5 a 10 sessões conforme a sua avaliação corporal.',
    category: 'protocolos'
  },
  {
    question: 'Como funciona a Avaliação VIP Inicial no Studio?',
    answer: 'A Avaliação VIP é uma consulta minuciosa de 45 minutos onde analisamos seu biotipo, grau de retenção, tecido adiposo, tônus muscular e histórico de saúde. A partir dessa análise clínica, a especialista prescreve um cronograma personalizado combinando as técnicas ideais.',
    category: 'agendamento'
  },
  {
    question: 'Os protocolos são dolorosos ou causam hematomas?',
    answer: 'Não. Nossa metodologia autoral preza pela harmonia tecidual. Através de manobras precisas e de biomecânica apurada, atingimos camadas profundas de gordura e fáscia sem gerar hematomas ou desconforto desnecessário.',
    category: 'protocolos'
  },
  {
    question: 'Como funciona a Mentoria e Formação Profissional para Esteticistas?',
    answer: 'A Mentoria Jenefer Viana Academy é um programa de imersão presencial e online para esteticistas, fisioterapeutas dermatofuncionais e biomédicos. Abrange o ensino prático do método de massagem autoral, biomecânica sem desgaste físico, protocolo de atendimento 5 estrelas e vendas de alto ticket.',
    category: 'mentoria'
  },
  {
    question: 'Onde o Studio está localizado e como é o atendimento?',
    answer: 'O Jenefer Viana Studio está situado em uma localização nobre e de fácil acesso, com estacionamento privativo e recepção com concierge. Todos os atendimentos são estritamente individuais com hora marcada para garantir total privacidade.',
    category: 'agendamento'
  }
];
