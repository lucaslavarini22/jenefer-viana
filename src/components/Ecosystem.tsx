import React, { useState, useEffect } from 'react';
import { BrandSymbol } from './BrandSymbol';
import { ObjectiveItem } from './Objective';

export interface ProcedureItem {
  id: string;
  number: string;
  name: string;
  description: string;
  note?: string;
}

export interface NucleusItem {
  id: string;
  number: string;
  index: number;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  alt: string;
  objectPosition?: string;
  procedures: ProcedureItem[];
  relatedObjectiveId?: string;
}

export const ECOSYSTEM_DATA: NucleusItem[] = [
  {
    id: 'slim-contorno',
    number: '01',
    index: 0,
    title: 'SLIM & CONTORNO',
    shortTitle: 'SLIM & CONTORNO',
    description: 'Protocolos personalizados para gordura localizada, contorno corporal e redução de medidas.',
    image: '/assets/eco-01-slim.jpg',
    alt: 'Contorno corporal e silhueta harmoniosa',
    relatedObjectiveId: 'contornos',
    procedures: [
      {
        id: 'slim-detox',
        number: '01',
        name: 'SLIM DETOX',
        description: 'Promove a desintoxicação corporal, auxilia na eliminação de toxinas e reduz o inchaço e a retenção de líquidos.',
      },
      {
        id: 'slim-shape',
        number: '02',
        name: 'SLIM SHAPE',
        description: 'Tratamento com aplicação de hidrolipoclasia diretamente na região de gordura localizada, auxiliando na quebra da gordura e na redução de medidas.',
      },
      {
        id: 'metodo-slim-4d',
        number: '03',
        name: 'SLIM MÉTODO 4D',
        description: 'Tratamento para gordura localizada e celulite, atuando em regiões como abdômen e coxas para auxiliar na quebra de gordura e redução de medidas.',
      },
      {
        id: 'slim-power',
        number: '04',
        name: 'SLIM POWER',
        description: 'Protocolo avançado e intensivo que atua de forma potencializada na gordura localizada, redução de medidas e retenção de líquidos.',
      },
      {
        id: 'slim-contorno-proc',
        number: '05',
        name: 'SLIM CONTORNO',
        description: 'Focado nas famosas dobrinhas e nos pneuzinhos, atua na gordura localizada e auxilia na redução do inchaço e da retenção de líquidos.',
      },
    ],
  },
  {
    id: 'gluteos-tonificacao',
    number: '02',
    index: 1,
    title: 'GLÚTEOS & TONIFICAÇÃO',
    shortTitle: 'GLÚTEOS & TONIFICAÇÃO',
    description: 'Cuidados pensados para valorizar o contorno, a aparência e a firmeza dos glúteos.',
    image: '/assets/eco-02-gluteos.jpg',
    alt: 'Realce do contorno, aparência e firmeza dos glúteos',
    relatedObjectiveId: 'gluteos',
    procedures: [
      {
        id: 'remodelacao-pump',
        number: '01',
        name: 'REMODELAÇÃO DE GLÚTEO / PUMP-UP',
        description: 'Protocolo para remodelar, empinar e valorizar os glúteos, trabalhando também a lateral para um contorno mais definido e harmonioso.',
      },
      {
        id: 'remodelacao-tonificacao',
        number: '02',
        name: 'REMODELAÇÃO DE GLÚTEO + TONIFICAÇÃO MUSCULAR',
        description: 'Tratamento que combina remodelação dos glúteos e tonificação muscular para valorizar o volume, a firmeza e o contorno da região.',
      },
      {
        id: 'bumbum-promax',
        number: '03',
        name: 'BUMBUM PRO MAX',
        description: 'Protocolo completo para glúteos, combinando tecnologias para tratar gordura localizada, celulite e bananinhas, além de estimular a tonificação muscular e melhorar o contorno corporal.',
      },
    ],
  },
  {
    id: 'pele-tecnologia',
    number: '03',
    index: 2,
    title: 'PELE & TECNOLOGIA',
    shortTitle: 'PELE & TECNOLOGIA',
    description: 'Tecnologia e cuidado estético avançado para diferentes necessidades da pele e do corpo.',
    image: '/assets/eco-03-pele.jpg',
    alt: 'Tecnologia e tratamentos avançados para pele corporal',
    relatedObjectiveId: 'pele',
    procedures: [
      {
        id: 'tratamento-celulite',
        number: '01',
        name: 'TRATAMENTO PARA CELULITE',
        description: 'Protocolo direcionado para uma região, combinando ozonioterapia, endermoterapia, Celutec e atuar na celulite e melhorar o contorno da pele.',
      },
      {
        id: 'tratamento-estrias',
        number: '02',
        name: 'TRATAMENTO PARA ESTRIAS',
        description: 'Protocolo desenvolvido para tratar estrias, combinando técnicas de renovação da pele, microdermoabrasão, dermoterapia, ácidos e séruns específicos.',
      },
      {
        id: 'depilacao-laser',
        number: '03',
        name: 'DEPILAÇÃO A LASER',
        description: 'Tecnologia para redução progressiva dos pelos, proporcionando uma pele mais lisa, uniforme e livre da necessidade constante de depilação.',
      },
      {
        id: 'clareamento-laser',
        number: '04',
        name: 'CLAREAMENTO A LASER',
        description: 'Tratamento com laser que auxilia na renovação celular e no clareamento da pele, promovendo uma aparência mais uniforme e revitalizada.',
      },
    ],
  },
  {
    id: 'terapias-drenagem',
    number: '04',
    index: 3,
    title: 'TERAPIAS & DRENAGEM',
    shortTitle: 'TERAPIAS & DRENAGEM',
    description: 'Experiências de cuidado voltadas ao conforto, à leveza e ao bem-estar corporal.',
    image: '/assets/eco-04-terapias.png',
    alt: 'Terapias manuais, drenagens e relaxamento sensorial',
    relatedObjectiveId: 'corpo-leve',
    procedures: [
      {
        id: 'massagem-localizada',
        number: '01',
        name: 'MASSAGEM TERAPÊUTICA LOCALIZADA',
        description: 'Massagem direcionada para regiões específicas, combinando pedras quentes, aparelho e técnicas terapêuticas para aliviar tensões, dores e desconfortos.',
      },
      {
        id: 'massagem-corpo-todo',
        number: '02',
        name: 'MASSAGEM TERAPÊUTICA CORPORAL',
        description: 'Massagem realizada em todo o corpo, combinando pedras quentes, aparelho e técnicas terapêuticas para aliviar tensões, dores e desconfortos, promovendo relaxamento e bem-estar.',
      },
      {
        id: 'drenagem-abdomen',
        number: '03',
        name: 'DRENAGEM LINFÁTICA ABDOMINAL',
        description: 'Drenagem realizada na região abdominal, indicada para auxiliar na redução do inchaço e da retenção de líquidos, promovendo uma sensação de leveza e bem-estar.',
      },
      {
        id: 'drenagem-corpo-todo',
        number: '04',
        name: 'DRENAGEM LINFÁTICA CORPO TODO',
        description: 'Drenagem realizada em todo o corpo para estimular o sistema linfático, auxiliar na redução do inchaço e da retenção de líquidos, proporcionando mais leveza e bem-estar.',
      },
    ],
  },
  {
    id: 'face-olhar',
    number: '05',
    index: 4,
    title: 'FACE & OLHAR',
    shortTitle: 'FACE & OLHAR',
    description: 'Cuidados personalizados para valorizar a pele, a expressão e o olhar.',
    image: '/assets/eco-05-face.jpg',
    alt: 'Cuidados faciais de precisão e valorização do olhar',
    objectPosition: '45% 20%',
    relatedObjectiveId: 'rosto-olhar',
    procedures: [
      {
        id: 'argiloterapia',
        number: '01',
        name: 'ARGILOTERAPIA',
        description: 'Tratamento personalizado de acordo com as necessidades da pele, auxiliando no controle da oleosidade, clareamento e melhora da aparência da pele.',
      },
      {
        id: 'revitalizacao-facial',
        number: '02',
        name: 'REVITALIZAÇÃO FACIAL',
        description: 'Protocolo de revitalização que combina limpeza, peeling ultrassônico, peeling de diamante e LEDterapia para renovar e devolver luminosidade à pele.',
      },
      {
        id: 'glow-facial',
        number: '03',
        name: 'GLOW FACIAL',
        description: 'Protocolo facial que combina clareamento a laser e máscara de ouro para revitalizar a pele e auxiliar no tratamento de manchas, melasma, acne e poros.',
      },
      {
        id: 'tratamento-facial-premium',
        number: '04',
        name: 'TRATAMENTO FACIAL PREMIUM',
        description: 'Limpeza de pele ultra profunda com tratamentos personalizados de acordo com as necessidades da pele, promovendo renovação, cuidado e revitalização.',
      },
      {
        id: 'limpeza-extracao',
        number: '05',
        name: 'LIMPEZA DE PELE COM EXTRAÇÃO',
        description: 'Limpeza de pele completa para renovação facial, com esfoliação, aparelho vibratório e radiofrequência, promovendo uma pele mais limpa e renovada.',
      },
      {
        id: 'design-personalizado',
        number: '06',
        name: 'DESIGN PERSONALIZADO',
        description: 'Design desenvolvido a partir do mapeamento facial, respeitando a estrutura natural do rosto para valorizar e harmonizar o olhar.',
      },
      {
        id: 'design-henna',
        number: '07',
        name: 'DESIGN COM HENNA',
        description: 'Design personalizado com aplicação de henna, valorizando o formato das sobrancelhas e proporcionando um olhar mais definido e harmonioso.',
      },
    ],
  },
];

interface EcosystemProps {
  selectedObjective?: ObjectiveItem | null;
}

export const Ecosystem: React.FC<EcosystemProps> = ({ selectedObjective }) => {
  const [activeNucleusIndex, setActiveNucleusIndex] = useState(0);
  const [expandedProcedureId, setExpandedProcedureId] = useState<string | null>(null);

  // Sync with selected objective from Section 03
  useEffect(() => {
    if (!selectedObjective) return;
    
    switch (selectedObjective.id) {
      case 'contornos':
        setActiveNucleusIndex(0); // 01 Slim & Contorno
        break;
      case 'gluteos':
        setActiveNucleusIndex(1); // 02 Glúteos & Tonificação
        break;
      case 'pele':
        setActiveNucleusIndex(2); // 03 Pele & Tecnologia
        break;
      case 'rosto-olhar':
        setActiveNucleusIndex(4); // 05 Face & Olhar
        break;
      case 'corpo-leve':
      case 'sentir-bem':
        setActiveNucleusIndex(3); // 04 Terapias & Drenagem
        break;
      default:
        break;
    }
  }, [selectedObjective]);

  const activeNucleus = ECOSYSTEM_DATA[activeNucleusIndex];

  const handleSelectNucleus = (index: number) => {
    setActiveNucleusIndex(index);
    setExpandedProcedureId(null);
  };

  const toggleProcedure = (procId: string) => {
    setExpandedProcedureId((prev) => (prev === procId ? null : procId));
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'contato';
    }
  };

  return (
    <section
      id="ecossistema"
      className="relative w-full min-h-[100svh] bg-[#0E0C0C] flex flex-col justify-between py-16 sm:py-20 lg:py-24 text-[#F2EADF] select-none"
      aria-label="Seção 04 — Ecossistema Viana"
    >
      {/* Subtle atmospheric ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-[#9B7138]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#C19A55]/8 rounded-full blur-[140px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-between">
        
        {/* Top Header Row: Section Tag & Title + Official Brand Symbol */}
        <div className="flex items-start justify-between w-full mb-8 lg:mb-14">
          <div className="flex flex-col items-start max-w-[700px]">
            {/* Tag */}
            <span className="font-montserrat text-[11px] lg:text-xs tracking-[0.32em] text-[#C19A55] uppercase font-medium">
              04 / ECOSSISTEMA
            </span>
            <div className="w-10 h-[1.5px] bg-[#C19A55] mt-2.5 mb-5" />

            {/* Title */}
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-[4.2rem] text-[#F2EADF] font-normal leading-[1.06] tracking-tight">
              ECOSSISTEMA <span className="text-[#C19A55] italic font-normal">VIANA</span>
            </h2>

            {/* Main Phrase */}
            <p className="font-cormorant text-xl sm:text-2xl lg:text-3xl text-[#F2EADF] font-light mt-3 tracking-wide">
              Seu objetivo encontra um caminho.
            </p>

            {/* Microphrase */}
            <p className="font-montserrat text-xs sm:text-sm lg:text-[14px] font-light text-[#F2EADF]/75 leading-[1.65] tracking-wide mt-2">
              Explore cada núcleo e conheça os cuidados que podem fazer parte da sua jornada.
            </p>
          </div>

          {/* Official Brand Symbol in Top Right */}
          <div className="hidden sm:flex items-center justify-center p-2 opacity-50 hover:opacity-80 transition-opacity duration-300">
            <BrandSymbol className="w-12 h-12 lg:w-16 lg:h-16" color="#C19A55" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP 3-REGION GRID (MD & UP) */}
        {/* ========================================================= */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 w-full my-auto items-start relative">
          
          {/* REGIÃO 1: NAVEGAÇÃO DOS NÚCLEOS (VERTICAL LIST) */}
          <div className="col-span-4 lg:col-span-3 flex flex-col space-y-7 pt-2">
            <span className="font-montserrat text-[10.5px] tracking-[0.32em] text-[#6D625B] uppercase font-medium">
              NÚCLEOS
            </span>

            <nav className="flex flex-col space-y-6" aria-label="Navegação de Núcleos">
              {ECOSYSTEM_DATA.map((nucleus, idx) => {
                const isActive = activeNucleusIndex === idx;
                return (
                  <button
                    key={nucleus.id}
                    onClick={() => handleSelectNucleus(idx)}
                    className="group relative flex flex-col items-start text-left focus:outline-none cursor-pointer transition-all duration-300"
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <div className="flex items-center gap-3 w-full">
                      {/* Number */}
                      <span
                        className={`font-montserrat text-xs tracking-[0.25em] transition-colors duration-300 font-medium ${
                          isActive ? 'text-[#C19A55]' : 'text-[#6D625B] group-hover:text-[#F2EADF]/70'
                        }`}
                      >
                        {nucleus.number}
                      </span>

                      {/* Title */}
                      <span
                        className={`font-cormorant text-base lg:text-lg tracking-wider uppercase transition-all duration-300 ${
                          isActive
                            ? 'text-[#F2EADF] font-normal scale-[1.02] origin-left'
                            : 'text-[#F2EADF]/40 group-hover:text-[#F2EADF]/75 font-light'
                        }`}
                      >
                        {nucleus.shortTitle}
                      </span>
                    </div>

                    {/* Gold indicator line with circular bead when active */}
                    {isActive && (
                      <div className="relative w-full h-[1.5px] bg-[#C19A55] mt-2.5 flex items-center transition-all duration-500 animate-in fade-in">
                        <div className="absolute right-0 w-2 h-2 rounded-full bg-[#C19A55] shadow-[0_0_8px_#C19A55]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* REGIÃO 2: CONTEÚDO ATIVO DO NÚCLEO (CENTER/RIGHT) */}
          <div className="col-span-8 lg:col-span-6 flex flex-col space-y-6 z-10">
            {/* Header info */}
            <div>
              <span className="font-montserrat text-xs tracking-[0.28em] text-[#C19A55] uppercase font-medium block mb-2">
                {activeNucleus.number} / 05
              </span>
              <h3 className="font-cormorant text-3xl lg:text-[2.6rem] text-[#F2EADF] font-normal tracking-wide uppercase leading-tight">
                {activeNucleus.title}
              </h3>
              <p className="font-montserrat text-xs lg:text-[13.5px] font-light text-[#F2EADF]/80 leading-[1.65] tracking-wide mt-2">
                {activeNucleus.description}
              </p>
            </div>

            {/* Grid of Procedure Cards (2 Columns) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-2">
              {activeNucleus.procedures.map((proc) => {
                const isExpanded = expandedProcedureId === proc.id;
                return (
                  <div
                    key={proc.id}
                    onClick={() => toggleProcedure(proc.id)}
                    className={`p-5 lg:p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                      isExpanded
                        ? 'border-[#C19A55] bg-[#1a1412] shadow-[0_4px_25px_rgba(193,154,85,0.15)]'
                        : 'border-[#C19A55]/25 hover:border-[#C19A55]/60 bg-[#14100F]/80 hover:bg-[#181312]'
                    }`}
                  >
                    <div>
                      <span className="font-montserrat text-[10.5px] tracking-[0.25em] text-[#C19A55] uppercase block mb-1 font-medium">
                        {proc.number}
                      </span>
                      <h4 className="font-cormorant text-base lg:text-lg text-[#F2EADF] font-normal tracking-wide uppercase leading-snug group-hover:text-[#F2EADF] transition-colors">
                        {proc.name}
                      </h4>

                      {/* Expandable description in-place */}
                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-[#C19A55]/20 animate-in fade-in duration-300">
                          <p className="font-montserrat text-xs font-light text-[#F2EADF]/85 leading-[1.65]">
                            {proc.description}
                          </p>
                          {proc.note && (
                            <p className="font-montserrat text-[10.5px] text-[#C19A55]/85 italic mt-2">
                              * {proc.note}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <span className="font-montserrat text-[9.5px] tracking-[0.22em] text-[#C19A55] group-hover:text-[#F2EADF] uppercase font-medium transition-colors flex items-center gap-1">
                        {isExpanded ? 'RECOLHER PROTOCOLO ↑' : 'ENTENDER O PROTOCOLO →'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* REGIÃO 3: VISUAL IMAGEM INTEGRADA & MARCA D'ÁGUA (RIGHT) */}
          <div className="hidden lg:flex col-span-3 h-[480px] relative rounded-none overflow-hidden flex-col justify-end items-end p-6 border border-[#C19A55]/15">
            {/* Background Image with Cinematic Overlay */}
            <img
              src={activeNucleus.image}
              alt={activeNucleus.alt}
              className="absolute inset-0 w-full h-full object-cover filter contrast-[1.08] brightness-[0.6] transition-all duration-700"
              style={{ objectPosition: activeNucleus.objectPosition ?? 'center right' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0C] via-[#0E0C0C]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C0C]/80 via-transparent to-transparent" />

            {/* Giant Subtle Watermark Number */}
            <div className="relative z-10 font-cormorant text-[120px] lg:text-[140px] text-[#C19A55]/20 leading-none select-none font-normal">
              {activeNucleus.number}
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* MOBILE STACKED ACCORDION VIEW (MD DOWN) */}
        {/* ========================================================= */}
        <div className="flex md:hidden flex-col w-full space-y-6 my-auto py-2">
          
          {/* Floating Guidance Chip with generous spacing */}
          <div className="w-full flex items-center justify-center pt-2 pb-4">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1C1715] border border-[#C19A55]/35 text-[#C19A55] text-[10px] font-montserrat tracking-[0.18em] uppercase font-medium shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C19A55] animate-pulse" />
              Toque no núcleo para ver os procedimentos ✦
            </div>
          </div>

          {/* Symmetrical & Elegant 2-Column Grid for the 5 Nuclei on Mobile */}
          <div className="w-full grid grid-cols-2 gap-2.5 pb-3">
            {ECOSYSTEM_DATA.map((nucleus, idx) => {
              const isActive = activeNucleusIndex === idx;
              const isLast = idx === ECOSYSTEM_DATA.length - 1;

              return (
                <button
                  key={nucleus.id}
                  onClick={() => handleSelectNucleus(idx)}
                  className={`min-h-[46px] px-2.5 py-2.5 rounded-xl border transition-all duration-300 font-montserrat text-[10px] xs:text-[10.5px] tracking-[0.1em] uppercase font-medium flex items-center justify-center text-center gap-1.5 cursor-pointer active:scale-95 ${
                    isLast ? 'col-span-2 max-w-[260px] mx-auto w-full' : 'w-full'
                  } ${
                    isActive
                      ? 'border-[#C19A55] bg-gradient-to-r from-[#C19A55] via-[#D4AD68] to-[#9B7138] text-[#0E0C0C] font-bold shadow-[0_4px_20px_rgba(193,154,85,0.45)]'
                      : 'border-[#3D322C] bg-[#161211]/90 text-[#F2EADF]/75 hover:border-[#C19A55]/60 hover:text-[#F2EADF] shadow-sm'
                  }`}
                >
                  <span className={isActive ? 'text-[#0E0C0C] font-black' : 'text-[#C19A55] font-bold'}>
                    {nucleus.number} •
                  </span>
                  <span className="truncate">{nucleus.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Active Nucleus Hero Card for Mobile */}
          <div className="relative w-full h-[180px] border border-[#C19A55]/30 overflow-hidden flex flex-col justify-end p-5 shadow-lg">
            <img
              src={activeNucleus.image}
              alt={activeNucleus.alt}
              className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] brightness-[0.6]"
              style={{ objectPosition: activeNucleus.objectPosition ?? 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0C] via-[#0E0C0C]/70 to-transparent" />

            <div className="relative z-10">
              <span className="font-montserrat text-[10px] tracking-[0.25em] text-[#C19A55] uppercase font-medium block">
                {activeNucleus.number} / 05
              </span>
              <h3 className="font-cormorant text-2xl text-[#F2EADF] uppercase font-normal leading-tight mt-1">
                {activeNucleus.title}
              </h3>
              <p className="font-montserrat text-[11px] font-light text-[#F2EADF]/80 leading-relaxed mt-1 line-clamp-2">
                {activeNucleus.description}
              </p>
            </div>
          </div>

          {/* Procedures Accordion List for Mobile */}
          <div className="flex flex-col divide-y divide-[#211D1C] border-t border-b border-[#211D1C]">
            {activeNucleus.procedures.map((proc) => {
              const isOpen = expandedProcedureId === proc.id;
              return (
                <div key={proc.id} className="py-4">
                  <button
                    onClick={() => toggleProcedure(proc.id)}
                    aria-expanded={isOpen}
                    aria-controls={`proc-desc-${proc.id}`}
                    className="w-full flex items-center justify-between text-left focus:outline-none group"
                  >
                    <div className="flex items-center gap-3 pr-2">
                      <span className="font-montserrat text-[10px] tracking-[0.2em] text-[#C19A55] font-medium">
                        {proc.number}
                      </span>
                      <span className="font-cormorant text-lg text-[#F2EADF] font-normal tracking-wide uppercase">
                        {proc.name}
                      </span>
                    </div>

                    <span className="font-montserrat text-lg text-[#C19A55] font-light px-2 shrink-0 transition-transform duration-300">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`proc-desc-${proc.id}`}
                      className="pt-3 pl-7 pr-2 animate-in fade-in duration-300"
                    >
                      <p className="font-montserrat text-xs font-light text-[#F2EADF]/80 leading-[1.65]">
                        {proc.description}
                      </p>
                      {proc.note && (
                        <p className="font-montserrat text-[10.5px] text-[#C19A55]/90 italic mt-2">
                          * {proc.note}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM CALL TO ACTION ROW */}
        {/* ========================================================= */}
        <div className="w-full pt-10 sm:pt-14 border-t border-[#211D1C] mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col max-w-[620px]">
            <h4 className="font-cormorant text-2xl sm:text-3xl text-[#F2EADF] font-normal tracking-wide">
              Ainda não sabe qual caminho combina com você?
            </h4>
            <p className="font-montserrat text-xs sm:text-sm font-light text-[#6D625B] leading-relaxed mt-1.5">
              Uma avaliação pode transformar seu objetivo em um protocolo personalizado.
            </p>
          </div>

          <a
            href="#contato"
            onClick={handleContactClick}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 border border-[#C19A55] bg-transparent text-[#F2EADF] font-montserrat text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-[#C19A55] hover:text-[#0E0C0C] hover:shadow-[0_0_20px_rgba(193,154,85,0.4)] flex items-center justify-center text-center cursor-pointer"
          >
            QUERO CONVERSAR COM O STUDIO
          </a>
        </div>

      </div>
    </section>
  );
};
