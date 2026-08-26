import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BrandSymbol } from './BrandSymbol';

export interface ObjectiveItem {
  id: string;
  number: string;
  index: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  category: string;
}

export const OBJECTIVES_DATA: ObjectiveItem[] = [
  {
    id: 'contornos',
    number: '01 / 06',
    index: 0,
    title: 'REDESENHAR MEUS CONTORNOS',
    description: 'Valorizar minhas formas e conquistar uma aparência mais harmoniosa através de mapeamento e protocolos personalizados.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Contornos corporais harmoniosos com iluminação suave e textura bronze',
    category: 'corporal',
  },
  {
    id: 'gluteos',
    number: '02 / 06',
    index: 1,
    title: 'REALÇAR MEUS GLÚTEOS',
    description: 'Valorizar o contorno, a firmeza e a aparência dos meus glúteos.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop',
    alt: 'Realce de curvas e firmeza corporal com estética elegante',
    category: 'gluteos',
  },
  {
    id: 'pele',
    number: '03 / 06',
    index: 2,
    title: 'CUIDAR DA MINHA PELE',
    description: 'Dar mais atenção à textura, à aparência e ao cuidado com a minha pele.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop',
    alt: 'Textura acetinada e cuidados com a pele em atmosfera intimista',
    category: 'pele',
  },
  {
    id: 'rosto-olhar',
    number: '04 / 06',
    index: 3,
    title: 'RENOVAR MEU ROSTO E MEU OLHAR',
    description: 'Cuidar da pele facial e valorizar minha expressão de forma personalizada.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    alt: 'Renovação e cuidado facial com iluminação quente',
    category: 'facial',
  },
  {
    id: 'corpo-leve',
    number: '05 / 06',
    index: 4,
    title: 'SENTIR MEU CORPO MAIS LEVE',
    description: 'Transformar o cuidado corporal em um momento de leveza e bem-estar.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
    alt: 'Momento de bem-estar corporal, drenagem e leveza sensorial',
    category: 'bem-estar',
  },
  {
    id: 'sentir-bem',
    number: '06 / 06',
    index: 5,
    title: 'VOLTAR A ME SENTIR BEM',
    description: 'Reconectar cuidado, autoestima e confiança em uma experiência feita para mim.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
    alt: 'Autoestima, confiança e serenidade em experiência personalizada',
    category: 'autoestima',
  },
];

interface ObjectiveProps {
  onSelectObjective?: (objective: ObjectiveItem) => void;
}

export const Objective: React.FC<ObjectiveProps> = ({ onSelectObjective }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = OBJECTIVES_DATA.length;
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const selectObjective = (item: ObjectiveItem) => {
    if (onSelectObjective) {
      onSelectObjective(item);
    }
    // Smooth scroll to #ecossistema
    const target = document.getElementById('ecossistema');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'ecossistema';
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const section = document.getElementById('objetivo');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!isVisible) return;

      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -45) {
      goToNext();
    } else if (dragOffset > 45) {
      goToPrev();
    }
    setDragOffset(0);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -60) {
      goToNext();
    } else if (dragOffset > 60) {
      goToPrev();
    }
    setDragOffset(0);
  };

  const currentObjective = OBJECTIVES_DATA[currentIndex];
  const nextObjective = OBJECTIVES_DATA[(currentIndex + 1) % total];
  const prevObjective = OBJECTIVES_DATA[(currentIndex - 1 + total) % total];

  const progressPercent = ((currentIndex + 1) / total) * 100;

  return (
    <section
      id="objetivo"
      className="relative w-full min-h-[100svh] bg-[#0E0C0C] flex flex-col justify-between overflow-hidden py-16 sm:py-20 lg:py-24 select-none"
      aria-label="Seção 03 — Qual o seu objetivo?"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-[#9B7138]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#C19A55]/8 rounded-full blur-[130px]" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0E0C0C] to-transparent z-10" />
      </div>

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-between">
        
        {/* Top Header Row: Section Tag & Headline + Official Brand Symbol */}
        <div className="flex items-start justify-between w-full mb-8 lg:mb-12">
          
          <div className="flex flex-col items-start max-w-[650px]">
            {/* Section Tag */}
            <span className="font-montserrat text-[11px] lg:text-xs tracking-[0.32em] text-[#C19A55] uppercase font-medium">
              03 / OBJETIVO
            </span>
            <div className="w-10 h-[1.5px] bg-[#C19A55] mt-2.5 mb-5" />

            {/* Title */}
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-[4.2rem] text-[#F2EADF] font-normal leading-[1.08] tracking-tight">
              Qual o seu <span className="text-[#C19A55] italic font-normal">objetivo?</span>
            </h2>

            {/* Microphrase */}
            <p className="font-montserrat text-xs sm:text-sm lg:text-[14px] font-light text-[#F2EADF]/75 leading-[1.65] tracking-wide mt-3.5">
              Antes de escolher um procedimento, escolha como você quer se sentir.
            </p>
          </div>

          {/* Official Brand Symbol in Top Right */}
          <div className="hidden sm:flex items-center justify-center p-2 opacity-50 hover:opacity-80 transition-opacity duration-300">
            <BrandSymbol className="w-12 h-12 lg:w-16 lg:h-16" color="#C19A55" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP CAROUSEL AREA (MD & UP) */}
        {/* ========================================================= */}
        <div
          ref={carouselContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="hidden md:flex relative items-center justify-center w-full my-auto py-4 cursor-grab active:cursor-grabbing"
          aria-roledescription="carousel"
          aria-label="Carrossel de Objetivos"
        >
          {/* Previous Card Partial View (Left) */}
          <div
            onClick={goToPrev}
            className="absolute left-0 w-[240px] lg:w-[280px] h-[340px] lg:h-[400px] border border-[#C19A55]/15 bg-[#14100F]/90 rounded-none overflow-hidden opacity-30 hover:opacity-50 transition-all duration-500 cursor-pointer -translate-x-4 lg:translate-x-0 pointer-events-auto flex flex-col justify-end p-6 select-none"
          >
            <img
              src={prevObjective.image}
              alt={prevObjective.alt}
              className="absolute inset-0 w-full h-full object-cover object-center filter grayscale brightness-50 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0C] via-[#0E0C0C]/80 to-transparent" />
            <div className="relative z-10">
              <span className="font-montserrat text-[10px] tracking-[0.25em] text-[#C19A55] uppercase block mb-1">
                {prevObjective.number.split(' / ')[0]}
              </span>
              <h3 className="font-cormorant text-base lg:text-lg text-[#F2EADF] font-normal tracking-wide uppercase line-clamp-2">
                {prevObjective.title}
              </h3>
            </div>
          </div>

          {/* Left Chevron Control */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 lg:left-12 z-30 w-11 h-11 flex items-center justify-center text-[#C19A55] hover:text-[#F2EADF] hover:scale-110 transition-all focus:outline-none cursor-pointer"
            aria-label="Objetivo anterior"
          >
            <ChevronLeft className="w-8 h-8 stroke-[1.2]" />
          </button>

          {/* ACTIVE MAIN CARD (CENTER) */}
          <div
            className="relative z-20 w-full max-w-[860px] lg:max-w-[940px] h-[400px] lg:h-[460px] border border-[#C19A55]/45 bg-[#14100F] shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(193,154,85,0.12)] overflow-hidden transition-all duration-500 flex items-center"
            style={{
              transform: isDragging ? `translateX(${dragOffset * 0.4}px)` : 'translateX(0)',
            }}
          >
            {/* Background High-End Photograph */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={currentObjective.image}
                alt={currentObjective.alt}
                className="w-full h-full object-cover object-[center_right] filter contrast-[1.12] brightness-[0.8] transition-all duration-700"
              />
              {/* Left-to-Right & Bottom-to-Top Rich Cinematic Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C0C] via-[#0E0C0C]/85 to-transparent w-[80%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0C] via-transparent to-transparent" />
            </div>

            {/* Card Content (Left Aligned) */}
            <div className="relative z-10 w-full max-w-[540px] p-8 lg:p-14 flex flex-col justify-between h-full">
              
              {/* Number indicator */}
              <div>
                <span className="font-montserrat text-xs tracking-[0.3em] text-[#C19A55] uppercase font-medium">
                  {currentObjective.number}
                </span>

                {/* Title */}
                <h3 className="font-cormorant text-3xl lg:text-[2.6rem] text-[#F2EADF] font-normal leading-[1.12] tracking-wide uppercase mt-4 mb-4">
                  {currentObjective.title}
                </h3>

                {/* Description */}
                <p className="font-montserrat text-sm lg:text-[14.5px] font-light text-[#F2EADF]/85 leading-[1.7] tracking-wide max-w-[440px]">
                  {currentObjective.description}
                </p>
              </div>

              {/* Call to Action Button */}
              <div className="pt-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    selectObjective(currentObjective);
                  }}
                  className="group relative inline-flex items-center justify-center px-6 lg:px-8 py-3.5 border border-[#C19A55] bg-transparent text-[#F2EADF] font-montserrat text-[11px] lg:text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-[#C19A55] hover:text-[#0E0C0C] hover:shadow-[0_0_20px_rgba(193,154,85,0.4)] cursor-pointer"
                >
                  QUERO SABER O QUE É INDICADO PARA MIM
                </button>
              </div>

            </div>
          </div>

          {/* Right Chevron Control */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 lg:right-12 z-30 w-11 h-11 flex items-center justify-center text-[#C19A55] hover:text-[#F2EADF] hover:scale-110 transition-all focus:outline-none cursor-pointer"
            aria-label="Próximo objetivo"
          >
            <ChevronRight className="w-8 h-8 stroke-[1.2]" />
          </button>

          {/* Next Card Partial View (Right) */}
          <div
            onClick={goToNext}
            className="absolute right-0 w-[240px] lg:w-[280px] h-[340px] lg:h-[400px] border border-[#C19A55]/15 bg-[#14100F]/90 rounded-none overflow-hidden opacity-30 hover:opacity-50 transition-all duration-500 cursor-pointer translate-x-4 lg:translate-x-0 pointer-events-auto flex flex-col justify-end p-6 select-none"
          >
            <img
              src={nextObjective.image}
              alt={nextObjective.alt}
              className="absolute inset-0 w-full h-full object-cover object-center filter grayscale brightness-50 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0C] via-[#0E0C0C]/80 to-transparent" />
            <div className="relative z-10">
              <span className="font-montserrat text-[10px] tracking-[0.25em] text-[#C19A55] uppercase block mb-1">
                {nextObjective.number.split(' / ')[0]}
              </span>
              <h3 className="font-cormorant text-base lg:text-lg text-[#F2EADF] font-normal tracking-wide uppercase line-clamp-2">
                {nextObjective.title}
              </h3>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE CAROUSEL AREA (VERTICAL CARDS) */}
        {/* ========================================================= */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex md:hidden flex-col w-full my-auto py-2"
        >
          {/* Main Card Mobile */}
          <div className="relative w-full h-[460px] xs:h-[500px] border border-[#C19A55]/40 bg-[#14100F] overflow-hidden flex flex-col justify-between p-6 xs:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
            
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={currentObjective.image}
                alt={currentObjective.alt}
                className="w-full h-full object-cover object-[center_top] filter contrast-[1.12] brightness-[0.75]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0C] via-[#0E0C0C]/80 to-transparent h-[75%] top-auto" />
            </div>

            {/* Top Number */}
            <div className="relative z-10 flex justify-between items-center">
              <span className="font-montserrat text-[11px] tracking-[0.28em] text-[#C19A55] uppercase font-medium">
                {currentObjective.number}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 flex flex-col pt-12">
              <h3 className="font-cormorant text-2xl xs:text-3xl text-[#F2EADF] font-normal leading-[1.12] tracking-wide uppercase mb-3">
                {currentObjective.title}
              </h3>

              <p className="font-montserrat text-xs xs:text-[13px] font-light text-[#F2EADF]/85 leading-[1.65] tracking-wide mb-6">
                {currentObjective.description}
              </p>

              {/* Mobile CTA Button with min 48px height */}
              <button
                onClick={() => selectObjective(currentObjective)}
                className="w-full min-h-[48px] px-4 py-3.5 border border-[#C19A55] bg-transparent text-[#F2EADF] font-montserrat text-[10px] xs:text-[11px] tracking-[0.16em] uppercase font-medium active:bg-[#C19A55] active:text-[#0E0C0C] transition-colors flex items-center justify-center text-center"
              >
                QUERO SABER O QUE É INDICADO PARA MIM
              </button>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* PROGRESS BAR & CONTROLS FOOTER */}
        {/* ========================================================= */}
        <div className="w-full pt-6 lg:pt-8 flex flex-col space-y-3">
          {/* Progress Track Line */}
          <div className="w-full h-[2px] bg-[#211D1C] relative overflow-hidden">
            <div
              className="h-full bg-[#C19A55] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Bottom Indicators & Label */}
          <div className="flex items-center justify-between">
            
            {/* Desktop Drag Tip / Mobile Swipe Tip */}
            <div className="flex items-center gap-2">
              <span className="hidden md:inline font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#6D625B]">
                ARRASTE PARA EXPLORAR →
              </span>
              <span className="inline md:hidden font-montserrat text-[9.5px] tracking-[0.25em] uppercase text-[#6D625B]">
                DESLIZE PARA EXPLORAR →
              </span>
            </div>

            {/* Counter */}
            <div className="font-montserrat text-xs tracking-[0.3em] text-[#C19A55] uppercase font-medium">
              {currentObjective.number}
            </div>

          </div>

          {/* Mobile Discrete Next Indicator */}
          <div className="flex md:hidden justify-end pt-1">
            <span className="font-montserrat text-[8.5px] tracking-[0.22em] text-[#6D625B] uppercase">
              PRÓXIMO: {nextObjective.title}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
