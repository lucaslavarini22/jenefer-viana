export interface Protocol {
  id: string;
  name: string;
  tagline: string;
  category: 'remodelagem' | 'firmeza' | 'celulite' | 'pos-operatorio' | 'especial';
  categoryLabel: string;
  duration: string;
  sessionsRecommended: string;
  description: string;
  benefits: string[];
  idealFor: string[];
  methodology: string;
  image: string;
  badge?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    protocolId: string;
    icon: string;
  }[];
}

export interface TransformationCase {
  id: string;
  title: string;
  protocolName: string;
  sessions: string;
  clientInitials: string;
  age: string;
  quote: string;
  results: string[];
  beforeImage: string;
  afterImage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  protocol: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'protocolos' | 'agendamento' | 'mentoria';
}
