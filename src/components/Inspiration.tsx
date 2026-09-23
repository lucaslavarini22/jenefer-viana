import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BrandSymbol } from './BrandSymbol';

export interface InspirationItem {
  id: string;
  number: string;
  displayNumber: string;
  name: string;
  category: string;
  image?: string;
  alt: string;
  objectPosition?: string;
  sourceUrl?: string;
}

export const INSPIRATIONS_DATA: InspirationItem[] = [
  {
    id: 'ref-01',
    number: '01',
    displayNumber: '01',
    name: 'PAOLLA OLIVEIRA',
    category: 'BELEZA • CONTORNO • PRESENÇA',
    image: '/assets/insp-01.png',
    alt: 'Paolla Oliveira - Inspiração de beleza, contorno e presença',
    objectPosition: 'center 25%',
  },
  {
    id: 'ref-02',
    number: '02',
    displayNumber: '02',
    name: 'SABRINA SATO',
    category: 'TONIFICAÇÃO • RECUPERAÇÃO • CONTORNO',
    image: '/assets/insp-02.png',
    alt: 'Sabrina Sato - Inspiração de vitalidade, contorno e recuperação corporal',
    objectPosition: 'center 40%',
  },
  {
    id: 'ref-03',
    number: '03',
    displayNumber: '03',
    name: 'CAROLINA DIECKMANN',
    category: 'AUTOCUIDADO • NATURALIDADE • GLOW',
    image: '/assets/insp-03.jpg',
    alt: 'Carolina Dieckmann - Inspiração de autocuidado e naturalidade',
    objectPosition: 'center 25%',
  },
  {
    id: 'ref-04',
    number: '04',
    displayNumber: '04',
    name: 'JADE PICON',
    category: 'EXPRESSÃO • OLHAR • GLOW',
    image: '/assets/insp-04.jpg',
    alt: 'Jade Picon - Inspiração de olhar, design e presença marcante',
    objectPosition: 'center 20%',
  },
];

export const Inspiration: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = INSPIRATIONS_DATA.length;
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const section = document.getElementById('inspiracoes');
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
    if (dragOffset < -40) {
      goToNext();
    } else if (dragOffset > 40) {
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
    if (dragOffset < -50) {
      goToNext();
    } else if (dragOffset > 50) {
      goToPrev();
    }
    setDragOffset(0);
  };

  const currentRef = INSPIRATIONS_DATA[currentIndex];
  const nextRef = INSPIRATIONS_DATA[(currentIndex + 1) % total];
  const prevRef = INSPIRATIONS_DATA[(currentIndex - 1 + total) % total];

  const formattedTotal = total.toString().padStart(2, '0');
  const formattedCurrent = (currentIndex + 1).toString().padStart(2, '0');
  const progressPercent = ((currentIndex + 1) / total) * 100;

  return (
    <section
      id="inspiracoes"
      className="relative w-full min-h-[100svh] bg-[#0E0C0C] flex flex-col justify-between py-16 sm:py-20 lg:py-24 text-[#F2EADF] select-none"
      aria-label="Seção 05 — Inspirações"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#9B7138]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-12 left-12 w-[450px] h-[450px] bg-[#C19A55]/8 rounded-full blur-[140px]" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0E0C0C] to-transparent z-10" />
      </div>

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-between">
        
        {/* Top Header Row & Official Symbol */}
        <div className="flex items-start justify-between w-full mb-8 lg:mb-12">
          <div className="flex flex-col items-start max-w-[680px]">
            <span className="font-montserrat text-[11px] lg:text-xs tracking-[0.32em] text-[#C19A55] uppercase font-medium">
              05 / INSPIRAÇÕES
            </span>
            <div className="w-10 h-[1.5px] bg-[#C19A55] mt-2.5 mb-5" />

            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-[4.2rem] text-[#F2EADF] font-normal leading-[1.06] tracking-tight">
              INSPIRAÇÕES
            </h2>
          </div>

          {/* Official Brand Symbol in Top Right */}
          <div className="hidden sm:flex items-center justify-center p-2 opacity-50 hover:opacity-80 transition-opacity duration-300">
            <BrandSymbol className="w-12 h-12 lg:w-16 lg:h-16" color="#C19A55" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP SPLIT VIEW: ~45% TEXT (LEFT) & ~55% GALLERY (RIGHT) */}
        {/* ========================================================= */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-14 w-full my-auto items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT (~45%) */}
          <div className="col-span-5 flex flex-col justify-center pr-4">
            
            {/* Main Headline */}
            <h3 className="font-cormorant text-3xl lg:text-4xl xl:text-[2.75rem] text-[#F2EADF] font-normal leading-[1.2] tracking-wide">
              Se cuidar também faz parte da rotina de quem{' '}
              <span className="text-[#C19A55] italic font-normal">inspira milhões.</span>
            </h3>

            {/* Microphrase */}
            <p className="font-montserrat text-xs sm:text-sm lg:text-[14px] font-light text-[#F2EADF]/75 leading-[1.7] tracking-wide mt-6 max-w-[480px]">
              Deslize para conhecer referências públicas de beleza, cuidado e transformação.
            </p>

            {/* Divider line */}
            <div className="w-full h-[1px] bg-[#211D1C] my-8" />

            {/* Secondary Group: Uma Escolha Pessoal */}
            <div className="flex flex-col space-y-2">
              <span className="font-montserrat text-[10px] tracking-[0.3em] text-[#C19A55] uppercase font-medium">
                UMA ESCOLHA PESSOAL
              </span>
              <p className="font-cormorant text-xl lg:text-2xl text-[#F2EADF] font-light leading-snug">
                Cada referência pode inspirar.
              </p>
              <p className="font-montserrat text-xs lg:text-[13px] font-light text-[#6D625B] leading-relaxed">
                Seu cuidado começa pelo que faz sentido para você.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: CAROUSEL GALLERY (~55%) */}
          <div
            ref={carouselContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="col-span-7 relative flex items-center justify-center h-[520px] cursor-grab active:cursor-grabbing"
            aria-roledescription="carousel"
            aria-label="Galeria de Inspirações"
          >
            {/* PREVIOUS CARD (PARTIAL VIEW LEFT) */}
            <div
              onClick={goToPrev}
              className="absolute left-0 w-[180px] lg:w-[220px] h-[360px] lg:h-[400px] border border-[#C19A55]/20 bg-[#14100F] overflow-hidden opacity-30 hover:opacity-50 transition-all duration-500 cursor-pointer -translate-x-6 lg:-translate-x-4 pointer-events-auto flex flex-col justify-between p-5 select-none relative"
            >
              {prevRef.image && (
                <img
                  src={prevRef.image}
                  alt={prevRef.alt}
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-40"
                  style={{ objectPosition: prevRef.objectPosition ?? 'center' }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0C] via-[#0E0C0C]/70 to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="font-montserrat text-[9px] tracking-[0.25em] text-[#C19A55] uppercase font-medium">
                  ANTERIOR
                </span>
              </div>

              {/* Number watermark */}
              <div className="relative z-10 my-auto text-center">
                <span className="font-cormorant text-6xl lg:text-7xl text-[#C19A55]/30 font-normal leading-none">
                  {prevRef.number}
                </span>
              </div>

              <div className="relative z-10">
                <span className="font-montserrat text-[9px] tracking-[0.2em] text-[#F2EADF]/70 uppercase block font-medium">
                  {prevRef.name}
                </span>
              </div>
            </div>

            {/* PREVIOUS CHEVRON CONTROL */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-2 lg:left-6 z-30 w-10 h-10 flex items-center justify-center text-[#C19A55] hover:text-[#F2EADF] hover:scale-110 transition-all focus:outline-none cursor-pointer"
              aria-label="Referência anterior"
            >
              <ChevronLeft className="w-8 h-8 stroke-[1.2]" />
            </button>

            {/* ACTIVE MAIN CARD (CENTER) */}
            <div
              className="relative z-20 w-[320px] sm:w-[360px] lg:w-[400px] h-[480px] lg:h-[520px] border border-[#C19A55] bg-[#14100F] shadow-[0_12px_45px_rgba(0,0,0,0.85),0_0_35px_rgba(193,154,85,0.22)] overflow-hidden transition-all duration-500 flex flex-col justify-between p-6 lg:p-8"
              style={{
                transform: isDragging ? `translateX(${dragOffset * 0.35}px)` : 'translateX(0)',
              }}
            >
              {/* Persona Image Background */}
              {currentRef.image && (
                <img
                  src={currentRef.image}
                  alt={currentRef.alt}
                  className="absolute inset-0 w-full h-full object-cover filter contrast-[1.08] brightness-[0.75] transition-all duration-700"
                  style={{ objectPosition: currentRef.objectPosition ?? 'center' }}
                />
              )}

              {/* Rich Cinematic Gradient Overlays for optimal text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0C] via-[#0E0C0C]/50 to-transparent h-[70%] top-auto pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0E0C0C]/80 via-transparent to-transparent h-[35%] pointer-events-none" />

              {/* Top Reference Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-montserrat text-[10.5px] tracking-[0.3em] text-[#C19A55] uppercase font-medium bg-[#0E0C0C]/60 px-2.5 py-1 border border-[#C19A55]/30">
                  REFERÊNCIA {currentRef.number}
                </span>
              </div>

              {/* Bottom Caption & Category Block */}
              <div className="relative z-10 pt-4 border-t border-[#C19A55]/40 bg-[#0E0C0C]/40 -mx-6 -mb-6 lg:-mx-8 lg:-mb-8 p-6 lg:p-8 backdrop-blur-xs">
                <h4 className="font-cormorant text-2xl lg:text-3xl text-[#F2EADF] uppercase font-normal tracking-wide leading-tight">
                  {currentRef.name}
                </h4>
                <span className="font-montserrat text-[9.5px] tracking-[0.22em] text-[#C19A55] uppercase block mt-1 font-medium">
                  {currentRef.category}
                </span>
              </div>
            </div>

            {/* NEXT CHEVRON CONTROL */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 lg:right-6 z-30 w-10 h-10 flex items-center justify-center text-[#C19A55] hover:text-[#F2EADF] hover:scale-110 transition-all focus:outline-none cursor-pointer"
              aria-label="Próxima referência"
            >
              <ChevronRight className="w-8 h-8 stroke-[1.2]" />
            </button>

            {/* NEXT CARD (PARTIAL VIEW RIGHT) */}
            <div
              onClick={goToNext}
              className="absolute right-0 w-[180px] lg:w-[220px] h-[360px] lg:h-[400px] border border-[#C19A55]/20 bg-[#14100F] overflow-hidden opacity-30 hover:opacity-50 transition-all duration-500 cursor-pointer translate-x-6 lg:translate-x-4 pointer-events-auto flex flex-col justify-between p-5 select-none relative"
            >
              {nextRef.image && (
                <img
                  src={nextRef.image}
                  alt={nextRef.alt}
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-40"
                  style={{ objectPosition: nextRef.objectPosition ?? 'center' }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0C] via-[#0E0C0C]/70 to-transparent" />

              <div className="relative z-10 flex items-center justify-end">
                <span className="font-montserrat text-[9px] tracking-[0.25em] text-[#C19A55] uppercase font-medium">
                  PRÓXIMA
                </span>
              </div>

              {/* Number watermark */}
              <div className="relative z-10 my-auto text-center">
                <span className="font-cormorant text-6xl lg:text-7xl text-[#C19A55]/30 font-normal leading-none">
                  {nextRef.number}
                </span>
              </div>

              <div className="relative z-10 text-right">
                <span className="font-montserrat text-[9px] tracking-[0.2em] text-[#F2EADF]/70 uppercase block font-medium">
                  {nextRef.name}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE LAYOUT (MD DOWN) */}
        {/* ========================================================= */}
        <div className="flex md:hidden flex-col w-full space-y-6 my-auto py-2">
          
          {/* Main Headline Mobile */}
          <h3 className="font-cormorant text-2xl xs:text-3xl text-[#F2EADF] font-normal leading-[1.2] tracking-wide">
            Se cuidar também faz parte da rotina de quem{' '}
            <span className="text-[#C19A55] italic font-normal">inspira milhões.</span>
          </h3>

          {/* Microphrase Mobile */}
          <p className="font-montserrat text-xs font-light text-[#F2EADF]/75 leading-[1.65] tracking-wide">
            Deslize para conhecer referências públicas de beleza, cuidado e transformação.
          </p>

          {/* Mobile Carousel Area with swipe */}
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full py-2 flex items-center overflow-hidden"
          >
            {/* Active Card Mobile */}
            <div className="relative w-[85%] h-[440px] border border-[#C19A55] bg-[#14100F] shadow-xl p-6 flex flex-col justify-between shrink-0 overflow-hidden">
              {/* Persona Image Background Mobile */}
              {currentRef.image && (
                <img
                  src={currentRef.image}
                  alt={currentRef.alt}
                  className="absolute inset-0 w-full h-full object-cover filter contrast-[1.08] brightness-[0.75]"
                  style={{ objectPosition: currentRef.objectPosition ?? 'center' }}
                />
              )}

              {/* Gradient overlays for Mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0C] via-[#0E0C0C]/60 to-transparent h-[70%] top-auto pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0E0C0C]/80 via-transparent to-transparent h-[30%] pointer-events-none" />

              {/* Tag */}
              <div className="relative z-10">
                <span className="font-montserrat text-[10px] tracking-[0.28em] text-[#C19A55] uppercase font-medium bg-[#0E0C0C]/60 px-2 py-0.5 border border-[#C19A55]/30">
                  REFERÊNCIA {currentRef.number}
                </span>
              </div>

              {/* Bottom Caption Mobile */}
              <div className="relative z-10 pt-3 border-t border-[#C19A55]/40 bg-[#0E0C0C]/50 -mx-6 -mb-6 p-5 backdrop-blur-xs">
                <h4 className="font-cormorant text-2xl text-[#F2EADF] uppercase font-normal tracking-wide leading-tight">
                  {currentRef.name}
                </h4>
                <span className="font-montserrat text-[9px] tracking-[0.2em] text-[#C19A55] uppercase block mt-1 font-medium">
                  {currentRef.category}
                </span>
              </div>
            </div>

            {/* Next Card Peak (Mobile Right) */}
            <div
              onClick={goToNext}
              className="w-[15%] h-[380px] border-l border-t border-b border-[#C19A55]/20 bg-[#14100F] ml-3 shrink-0 p-2 opacity-35 flex flex-col justify-center items-center relative overflow-hidden cursor-pointer"
            >
              {nextRef.image && (
                <img
                  src={nextRef.image}
                  alt={nextRef.alt}
                  className="absolute inset-0 w-full h-full object-cover filter grayscale brightness-40"
                  style={{ objectPosition: nextRef.objectPosition ?? 'center' }}
                />
              )}
              <div className="absolute inset-0 bg-[#0E0C0C]/70" />
              <span className="relative z-10 font-cormorant text-2xl text-[#C19A55]">
                {nextRef.number}
              </span>
            </div>
          </div>

          {/* Complementary Text Mobile */}
          <div className="pt-2 flex flex-col space-y-1">
            <p className="font-cormorant text-xl text-[#F2EADF] font-light">
              Cada referência pode inspirar.
            </p>
            <p className="font-montserrat text-xs font-light text-[#6D625B] leading-relaxed">
              Seu cuidado começa pelo que faz sentido para você.
            </p>
          </div>

        </div>

        {/* ========================================================= */}
        {/* PROGRESS BAR & CONTROLS FOOTER */}
        {/* ========================================================= */}
        <div className="w-full pt-8 lg:pt-10 flex flex-col space-y-4">
          
          {/* Progress Bar & Indicators */}
          <div className="flex flex-col space-y-3">
            {/* Progress Track Line */}
            <div className="w-full h-[1.5px] bg-[#211D1C] relative overflow-hidden">
              <div
                className="h-full bg-[#C19A55] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Counter and "DESLIZE →" hint */}
            <div className="flex items-center justify-between">
              <div className="font-montserrat text-xs tracking-[0.3em] text-[#C19A55] uppercase font-medium">
                {formattedCurrent} / {formattedTotal}
              </div>

              <div className="font-montserrat text-[10px] tracking-[0.28em] text-[#6D625B] uppercase flex items-center gap-1">
                DESLIZE →
              </div>
            </div>
          </div>

          {/* Mandatory Public Reference Disclaimer */}
          <div className="pt-4 border-t border-[#211D1C]/70">
            <p className="font-montserrat text-[10px] sm:text-[11px] font-light text-[#6D625B] leading-relaxed tracking-wide">
              Conteúdo de referência. As personalidades apresentadas não possuem vínculo com o Jenefer Viana Studio.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
