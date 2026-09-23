import React, { useState, useRef } from 'react';
import { BrandSymbol } from './BrandSymbol';
import { ArrowUpRight } from 'lucide-react';

export interface MediaItem {
  id: number;
  number: string;
  image: string | null;
  imageAlt: string;
  vehicle: string;
  title: string;
  date: string;
  url: string;
  rotation: number;
}

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 1,
    number: '01',
    image: '/assets/midia-04-band.png',
    imageAlt: 'Jenefer Viana em entrevista exclusiva na TV Band Minas — Programa Momento Bem-Estar',
    vehicle: 'TV BAND MINAS',
    title: 'Beleza, autoestima e empreendedorismo: a trajetória de Jenefer Viana na estética avançada',
    date: 'ENTREVISTA NA TV',
    url: 'https://www.youtube.com/watch?v=978WprLbNso',
    rotation: -4,
  },
  {
    id: 2,
    number: '02',
    image: '/assets/midia-01-viativa.jpg',
    imageAlt: 'Jenefer Viana se destaca em Belo Horizonte como esteticista e designer — Viativa News',
    vehicle: 'VIATIVA NEWS',
    title: 'Jenefer Viana se destaca em Belo Horizonte trabalhando como esteticista e designer de sobrancelhas',
    date: 'DESTAQUE MÍDIA',
    url: '',
    rotation: 3,
  },
  {
    id: 3,
    number: '03',
    image: '/assets/midia-02-premio.jpg',
    imageAlt: 'Jenefer Viana no Prêmio Empreendedoras Mineiras',
    vehicle: 'PRÊMIO EMPREENDEDORAS MINEIRAS',
    title: 'Homenagem e reconhecimento ao empreendedorismo e liderança estética em Minas Gerais',
    date: 'PREMIAÇÃO OFICIAL',
    url: '',
    rotation: -2,
  },
  {
    id: 4,
    number: '04',
    image: '/assets/midia-03-presenca.jpg',
    imageAlt: 'Presença Confirmada Jenefer Viana — Empreendedoras Mineiras',
    vehicle: 'EMPREENDEDORAS MINEIRAS',
    title: 'Presença confirmada como referência e convidada de honra no cenário mineiro',
    date: 'CONVIDADA DE HONRA',
    url: '',
    rotation: 4,
  },
];

export const Evidence: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Position presets for 4-polaroid organic editorial composition
  const desktopPositions = [
    { top: '4%', left: '3%', zIndex: 10 },
    { top: '2%', right: '5%', zIndex: 20 },
    { top: '38%', left: '16%', zIndex: 30 },
    { bottom: '4%', right: '6%', zIndex: 25 },
  ];

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = 300;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveMobileIndex(Math.min(Math.max(0, index), MEDIA_ITEMS.length - 1));
  };

  return (
    <section
      id="midia"
      className="relative w-full min-h-[100svh] bg-[#0E0C0C] flex flex-col justify-between py-16 sm:py-20 lg:py-24 text-[#F2EADF] select-none overflow-hidden"
      aria-label="Seção 06 — Jenefer em Evidência"
    >
      {/* 1. Subtle Atmospheric Ambiance Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[520px] h-[520px] bg-[#9B7138]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-12 left-10 w-[450px] h-[450px] bg-[#C19A55]/8 rounded-full blur-[140px]" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0E0C0C] to-transparent z-10" />
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-between">
        
        {/* Top Header Row */}
        <div className="flex items-start justify-between w-full mb-8 lg:mb-12">
          <div className="flex flex-col items-start max-w-[700px]">
            {/* Identification tag */}
            <span className="font-montserrat text-[11px] lg:text-xs tracking-[0.32em] text-[#C19A55] uppercase font-medium">
              06 / JENEFER EM EVIDÊNCIA
            </span>
            <div className="w-10 h-[1.5px] bg-[#C19A55] mt-2.5 mb-5" />

            {/* Main Headline */}
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.35rem] text-[#F2EADF] font-normal leading-[1.08] tracking-tight">
              QUANDO UMA HISTÓRIA INSPIRA,<br />
              ELA <span className="text-[#C19A55] italic font-normal">GANHA VOZ.</span>
            </h2>

            {/* Complementary Text */}
            <p className="font-montserrat text-xs sm:text-sm lg:text-[14.5px] font-light text-[#F2EADF]/80 leading-[1.75] tracking-wide mt-5 max-w-[540px]">
              Uma trajetória construída com conhecimento, propósito e resultados — e reconhecida também fora do Studio.
            </p>

            {/* Editorial Badge */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#211D1C]">
              <span className="font-montserrat text-[10px] lg:text-[11px] tracking-[0.28em] text-[#C19A55] uppercase font-medium">
                MATÉRIAS • ENTREVISTAS • PARTICIPAÇÕES
              </span>
            </div>
          </div>

          {/* Official Brand Symbol */}
          <div className="hidden sm:flex items-center justify-center p-2 opacity-50 hover:opacity-80 transition-opacity duration-300">
            <BrandSymbol className="w-12 h-12 lg:w-16 lg:h-16" color="#C19A55" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP 3-POLAROID COMPOSITION (MD & UP) */}
        {/* ========================================================= */}
        <div className="hidden md:block relative w-full h-[580px] lg:h-[620px] my-auto">
          {MEDIA_ITEMS.map((item, idx) => {
            const isHovered = hoveredId === item.id;
            const isAnyHovered = hoveredId !== null;
            const pos = desktopPositions[idx] || { top: '0', left: '0', zIndex: 10 };
            const effectiveRotation = isHovered ? 0 : item.rotation;
            const hasUrl = Boolean(item.url && item.url.trim() !== '');

            return (
              <div
                key={item.id}
                tabIndex={0}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(item.id)}
                onBlur={() => setHoveredId(null)}
                className={`absolute w-[290px] lg:w-[320px] transition-all duration-500 ease-out cursor-pointer focus:outline-none ${
                  isHovered
                    ? 'z-40 scale-105 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(193,154,85,0.25)]'
                    : isAnyHovered
                    ? 'opacity-65 scale-95 shadow-[0_12px_30px_rgba(0,0,0,0.65)]'
                    : 'opacity-95 hover:opacity-100 shadow-[0_15px_35px_rgba(0,0,0,0.7)]'
                }`}
                style={{
                  ...pos,
                  transform: `rotate(${effectiveRotation}deg)`,
                  transformOrigin: 'center center',
                }}
              >
                {/* Translucent Bronze Tape Accent on top */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#9B7138]/45 border border-[#C19A55]/50 backdrop-blur-xs shadow-sm z-30 pointer-events-none"
                  style={{ transform: `rotate(${(idx % 2 === 0 ? -1.5 : 2)}deg)` }}
                />

                {/* Polaroid Frame: Sophisticated Beige-Champagne */}
                <div className="relative w-full bg-[#E8DFC8] border border-[#C19A55]/45 p-3.5 pb-5 rounded-xs transition-colors duration-300">
                  
                  {/* Image Viewport */}
                  <div className="relative w-full aspect-[4/4.2] bg-[#14100F] border border-[#C19A55]/20 overflow-hidden flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.imageAlt || `Matéria ${item.number}`}
                        className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center p-4 select-none">
                        <span className="font-montserrat text-[10px] tracking-[0.3em] text-[#C19A55] uppercase font-semibold">
                          MATÉRIA {item.number}
                        </span>
                      </div>
                    )}

                    {/* Subtle Watermark Brand Symbol inside photo */}
                    <div className="absolute bottom-2 right-2 pointer-events-none opacity-20">
                      <BrandSymbol className="w-5 h-5" color="#C19A55" />
                    </div>
                  </div>

                  {/* Polaroid Lower Caption Area */}
                  <div className="pt-3.5 px-1 flex flex-col justify-between min-h-[64px]">
                    <div>
                      {item.vehicle && (
                        <span className="font-montserrat text-[9px] tracking-[0.22em] text-[#8C6D37] uppercase font-semibold block truncate">
                          {item.vehicle}
                        </span>
                      )}

                      {item.title && (
                        <h4 className="font-cormorant text-sm text-[#1A1513] font-normal leading-snug tracking-wide line-clamp-2 mt-0.5">
                          {item.title}
                        </h4>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#C19A55]/20 mt-2">
                      <span className="font-montserrat text-[8px] tracking-[0.15em] text-[#6D625B] uppercase">
                        {item.date || `EDIÇÃO ${item.number}`}
                      </span>

                      {hasUrl && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-montserrat text-[8.5px] tracking-[0.2em] text-[#8C6D37] hover:text-[#1A1513] font-semibold uppercase flex items-center gap-1 transition-colors bg-[#C19A55]/15 px-2 py-0.5 rounded-xs"
                          aria-label={`Assistir matéria ${item.number}`}
                        >
                          <span>ASSISTIR MATÉRIA</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* MOBILE HORIZONTAL SWIPE CAROUSEL (MD DOWN) */}
        {/* ========================================================= */}
        <div className="flex md:hidden flex-col w-full space-y-4 my-auto py-2">
          
          {/* Scrollable Track */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-2 scrollbar-none -mx-6 px-6"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {MEDIA_ITEMS.map((item) => {
              const hasUrl = Boolean(item.url && item.url.trim() !== '');

              return (
                <div
                  key={item.id}
                  className="snap-center shrink-0 w-[275px] xs:w-[295px] relative"
                >
                  {/* Tape Accent */}
                  <div
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#9B7138]/45 border border-[#C19A55]/50 backdrop-blur-xs shadow-sm z-30 pointer-events-none"
                    style={{ transform: `rotate(${item.rotation > 0 ? 1 : -1}deg)` }}
                  />

                  {/* Polaroid Frame */}
                  <div className="w-full bg-[#E8DFC8] border border-[#C19A55]/45 p-3 pb-4 rounded-xs shadow-[0_10px_28px_rgba(0,0,0,0.7)]">
                    
                    {/* Image Viewport */}
                    <div className="relative w-full aspect-[4/4.2] bg-[#14100F] border border-[#C19A55]/20 overflow-hidden flex items-center justify-center">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.imageAlt || `Matéria ${item.number}`}
                          className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-center p-3 select-none">
                          <span className="font-montserrat text-[10px] tracking-[0.28em] text-[#C19A55] uppercase font-semibold">
                            MATÉRIA {item.number}
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-2 right-2 pointer-events-none opacity-20">
                        <BrandSymbol className="w-4 h-4" color="#C19A55" />
                      </div>
                    </div>

                    {/* Lower Caption */}
                    <div className="pt-3 px-0.5 flex flex-col justify-between min-h-[58px]">
                      <div>
                        {item.vehicle && (
                          <span className="font-montserrat text-[8.5px] tracking-[0.2em] text-[#8C6D37] uppercase font-semibold block truncate">
                            {item.vehicle}
                          </span>
                        )}

                        {item.title && (
                          <h4 className="font-cormorant text-sm text-[#1A1513] font-normal leading-snug tracking-wide line-clamp-2 mt-0.5">
                            {item.title}
                          </h4>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-[#C19A55]/20 mt-2">
                        <span className="font-montserrat text-[7.5px] tracking-[0.15em] text-[#6D625B] uppercase">
                          {item.date || `EDIÇÃO ${item.number}`}
                        </span>

                        {hasUrl && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-montserrat text-[8px] tracking-[0.18em] text-[#8C6D37] font-semibold uppercase flex items-center gap-1 bg-[#C19A55]/15 px-2 py-0.5 rounded-xs"
                            aria-label={`Assistir matéria ${item.number}`}
                          >
                            <span>ASSISTIR MATÉRIA</span>
                            <ArrowUpRight className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Footer Indicator & Counter */}
          <div className="flex items-center justify-between pt-2 border-t border-[#211D1C]">
            <div className="font-montserrat text-xs tracking-[0.28em] text-[#C19A55] uppercase font-medium">
              {String(activeMobileIndex + 1).padStart(2, '0')} / {String(MEDIA_ITEMS.length).padStart(2, '0')}
            </div>

            <div className="font-montserrat text-[9.5px] tracking-[0.25em] text-[#6D625B] uppercase flex items-center gap-1">
              DESLIZE PARA EXPLORAR →
            </div>
          </div>

        </div>

        {/* 3. Bottom Subtle Transition Divider Line */}
        <div className="w-full pt-8 sm:pt-10 border-t border-[#211D1C]/80 mt-4 flex items-center justify-between">
          <span className="font-montserrat text-[9px] sm:text-[10px] tracking-[0.25em] text-[#6D625B] uppercase font-light">
            JENEFER VIANA • PRESENÇA, IMPRENSA E RECONHECIMENTO.
          </span>
          <a
            href="#contato"
            className="font-montserrat text-[9px] sm:text-[10px] tracking-[0.28em] text-[#C19A55] hover:text-[#F2EADF] uppercase font-medium transition-colors focus:outline-none"
            aria-label="Avançar para contato"
          >
            AGENDAR AVALIAÇÃO ↓
          </a>
        </div>

      </div>
    </section>
  );
};
