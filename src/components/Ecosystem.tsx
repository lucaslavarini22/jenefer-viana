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
    description: 'Protocolos personalizados para diferentes objetivos corporais.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Contorno corporal e silhueta harmoniosa',
    relatedObjectiveId: 'contornos',
    procedures: [
      {
        id: 'slim-detox',
        number: '01',
        name: 'SLIM DETOX',
        description: 'Protocolo corporal voltado à sensação de leveza e ao cuidado com o contorno.',
      },
      {
        id: 'slim-power',
        number: '02',
        name: 'SLIM POWER',
        description: 'Cuidado corporal intensivo desenvolvido de acordo com o objetivo de cada pessoa.',
      },
      {
        id: 'metodo-slim-4d',
        number: '03',
        name: 'MÉTODO SLIM 4D',
        description: 'Combinação personalizada de etapas para trabalhar diferentes dimensões do contorno corporal.',
      },
      {
        id: 'slim-shape',
        number: '04',
        name: 'SLIM SHAPE',
        description: 'Protocolo direcionado à valorização da silhueta e à harmonia das formas.',
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
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    alt: 'Realce do contorno, aparência e firmeza dos glúteos',
    relatedObjectiveId: 'gluteos',
    procedures: [
      {
        id: 'remodelacao-pump',
        number: '01',
        name: 'REMODELAÇÃO DO GLÚTEO / PUMP-UP',
        description: 'Protocolo estético direcionado à valorização visual do contorno dos glúteos.',
      },
      {
        id: 'remodelacao-tonificacao',
        number: '02',
        name: 'REMODELAÇÃO DO GLÚTEO + TONIFICAÇÃO MUSCULAR',
        description: 'Combinação de cuidados estéticos e estímulos voltados à aparência e à tonificação.',
      },
      {
        id: 'bumbum-promax',
        number: '03',
        name: 'BUMBUM PROMAX',
        description: 'Protocolo exclusivo desenvolvido para trabalhar contorno, aparência e firmeza.',
      },
    ],
  },
  {
    id: 'pele-tecnologia',
    number: '03',
    index: 2,
    title: 'PELE & TECNOLOGIA',
    shortTitle: 'PELE & TECNOLOGIA',
    description: 'Tecnologia e cuidado estético para diferentes necessidades da pele e do corpo.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop',
    alt: 'Tecnologia e tratamentos avançados para pele corporal',
    relatedObjectiveId: 'pele',
    procedures: [
      {
        id: 'tratamento-celulite',
        number: '01',
        name: 'TRATAMENTO PARA CELULITE',
        description: 'Cuidado estético direcionado à aparência e às irregularidades da pele.',
      },
      {
        id: 'tratamento-estrias',
        number: '02',
        name: 'TRATAMENTO PARA ESTRIAS',
        description: 'Protocolo voltado ao cuidado com a textura e a aparência das estrias.',
      },
      {
        id: 'tratamento-lipedema',
        number: '03',
        name: 'TRATAMENTO PARA LIPEDEMA',
        description: 'Cuidado estético complementar voltado ao conforto e à aparência corporal.',
        note: 'Não substitui avaliação ou acompanhamento médico.',
      },
      {
        id: 'depilacao-laser',
        number: '04',
        name: 'DEPILAÇÃO A LASER',
        description: 'Procedimento de redução progressiva dos pelos, realizado após avaliação individual.',
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
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
    alt: 'Terapias manuais, drenagens e relaxamento sensorial',
    relatedObjectiveId: 'corpo-leve',
    procedures: [
      {
        id: 'massagem-localizada',
        number: '01',
        name: 'MASSAGEM TERAPÊUTICA LOCALIZADA',
        description: 'Cuidado direcionado a regiões específicas do corpo, de acordo com a necessidade apresentada.',
      },
      {
        id: 'massagem-corpo-todo',
        number: '02',
        name: 'MASSAGEM TERAPÊUTICA CORPO TODO',
        description: 'Experiência corporal completa voltada ao relaxamento, ao conforto e ao bem-estar.',
      },
      {
        id: 'drenagem-abdomen',
        number: '03',
        name: 'DRENAGEM LINFÁTICA — ABDÔMEN',
        description: 'Técnica manual direcionada à região abdominal e à sensação de leveza.',
      },
      {
        id: 'drenagem-corpo-todo',
        number: '04',
        name: 'DRENAGEM LINFÁTICA — CORPO TODO',
        description: 'Técnica manual realizada em diferentes regiões do corpo, de acordo com a avaliação.',
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
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    alt: 'Cuidados faciais de precisão e valorização do olhar',
    relatedObjectiveId: 'rosto-olhar',
    procedures: [
      {
        id: 'argiloterapia',
        number: '01',
        name: 'ARGILOTERAPIA',
        description: 'Aplicação de argilas selecionadas de acordo com as características e necessidades da pele.',
      },
      {
        id: 'revitalizacao',
        number: '02',
        name: 'REVITALIZAÇÃO',
        description: 'Cuidado facial voltado à aparência de frescor, luminosidade e vitalidade.',
      },
      {
        id: 'clareamento-glow',
        number: '03',
        name: 'CLAREAMENTO GLOW',
        description: 'Protocolo estético direcionado à uniformidade visual e à luminosidade da pele.',
      },
      {
        id: 'tratamento-facial-premium',
        number: '04',
        name: 'TRATAMENTO FACIAL PREMIUM',
        description: 'Sequência personalizada de cuidados faciais definida após avaliação.',
      },
      {
        id: 'limpeza-extracao',
        number: '05',
        name: 'LIMPEZA DE PELE COM EXTRAÇÃO',
        description: 'Higienização profunda da pele com extração realizada de maneira cuidadosa.',
      },
      {
        id: 'design-personalizado',
        number: '06',
        name: 'DESIGN PERSONALIZADO',
        description: 'Desenho das sobrancelhas pensado de acordo com as proporções e características do rosto.',
      },
      {
        id: 'design-henna',
        number: '07',
        name: 'DESIGN COM HENNA',
        description: 'Design com aplicação de henna para proporcionar preenchimento e definição temporária.',
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
              className="absolute inset-0 w-full h-full object-cover object-[center_right] filter contrast-[1.08] brightness-[0.6] transition-all duration-700"
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
          
          {/* Horizontal Nucleus Selector Pill Bar */}
          <div className="w-full overflow-x-auto pb-2 scrollbar-none flex gap-3 snap-x">
            {ECOSYSTEM_DATA.map((nucleus, idx) => {
              const isActive = activeNucleusIndex === idx;
              return (
                <button
                  key={nucleus.id}
                  onClick={() => handleSelectNucleus(idx)}
                  className={`snap-start shrink-0 px-4 py-2.5 border transition-all text-[11px] font-montserrat tracking-[0.2em] uppercase font-medium flex items-center gap-2 ${
                    isActive
                      ? 'border-[#C19A55] bg-[#C19A55]/10 text-[#F2EADF]'
                      : 'border-[#211D1C] bg-transparent text-[#6D625B]'
                  }`}
                >
                  <span className={isActive ? 'text-[#C19A55]' : 'text-[#6D625B]'}>
                    {nucleus.number}
                  </span>
                  <span>{nucleus.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Active Nucleus Hero Card for Mobile */}
          <div className="relative w-full h-[180px] border border-[#C19A55]/30 overflow-hidden flex flex-col justify-end p-5 shadow-lg">
            <img
              src={activeNucleus.image}
              alt={activeNucleus.alt}
              className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.6]"
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
