import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é o seu objetivo corporal prioritário?',
    subtitle: 'Selecione a transformação que você mais deseja conquistar hoje',
    options: [
      {
        label: 'Reduzir medidas e desenhar a cintura',
        description: 'Eliminar gordura localizada persistente e afinar silhueta',
        protocolId: 'lipomanual-sculpt',
        icon: 'straighten'
      },
      {
        label: 'Combater flacidez e recuperar firmeza',
        description: 'Redensificar a pele e estimular colágeno pós-parto ou pós-emagrecimento',
        protocolId: 'firmdeep-matrix',
        icon: 'auto_fix_high'
      },
      {
        label: 'Eliminar celulites e modelar os glúteos',
        description: 'Suavizar relevo ondulado e conquistar efeito up natural',
        protocolId: 'celluzero-harmonic',
        icon: 'spa'
      },
      {
        label: 'Desinchar, drenar toxinas e aliviar cansaço',
        description: 'Sensação profunda de leveza corporal e ativação metabólica',
        protocolId: 'drenolinf-touch-pro',
        icon: 'water_drop'
      },
      {
        label: 'Reabilitação pós-cirurgia plástica',
        description: 'Prevenção de fibroses e recuperação rápida e segura',
        protocolId: 'recovery-post-op',
        icon: 'healing'
      },
      {
        label: 'Preparação para casamento ou evento especial',
        description: 'Radiância, desinchaço imediato e experiência de gala',
        protocolId: 'glow-bridal-exclusive',
        icon: 'diamond'
      }
    ]
  },
  {
    id: 2,
    question: 'Qual área do seu corpo você deseja priorizar?',
    subtitle: 'Nossos protocolos são personalizados para focar exatamente no seu foco de atenção',
    options: [
      {
        label: 'Abdômen, cintura e flancos',
        description: 'Foco em contorno frontal e lateral',
        protocolId: 'lipomanual-sculpt',
        icon: 'accessibility_new'
      },
      {
        label: 'Glúteos e posterior de coxas',
        description: 'Foco em sustentação, lifting e textura lisa',
        protocolId: 'celluzero-harmonic',
        icon: 'fitness_center'
      },
      {
        label: 'Braços, costas e colo',
        description: 'Foco em firmeza tecidual e tonificação dérmica',
        protocolId: 'firmdeep-matrix',
        icon: 'airline_seat_recline_extra'
      },
      {
        label: 'Corpo inteiro (Sistêmico)',
        description: 'Drenagem, detox completo e alívio de peso',
        protocolId: 'drenolinf-touch-pro',
        icon: 'bubble_chart'
      }
    ]
  },
  {
    id: 3,
    question: 'Qual é o seu prazo ou expectativa de tempo?',
    subtitle: 'Para adequarmos o cronograma de sessões ao seu estilo de vida',
    options: [
      {
        label: 'Urgente — Quero resultado visível para os próximos dias',
        description: 'Foco em efeito express imediato e desinchaço instantâneo',
        protocolId: 'glow-bridal-exclusive',
        icon: 'bolt'
      },
      {
        label: 'Plano Estrutural — Quero transformação de 4 a 8 semanas',
        description: 'Protocolo completo com reestruturação profunda e duradoura',
        protocolId: 'lipomanual-sculpt',
        icon: 'calendar_month'
      },
      {
        label: 'Manutenção Contínua de Estilo de Vida',
        description: 'Sessões periódicas para manter o corpo desenhado e leve',
        protocolId: 'drenolinf-touch-pro',
        icon: 'all_inclusive'
      }
    ]
  }
];
