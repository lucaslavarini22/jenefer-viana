import React, { useState, useRef } from 'react';
import { BrandSymbol } from './BrandSymbol';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// TODO: inserir o número oficial do WhatsApp do Jenefer Viana Studio
const WHATSAPP_NUMBER: string = '';

export const Contact: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Flashlight / Spotlight position & state for Desktop & Mobile
  const [torchPosDesktop, setTorchPosDesktop] = useState({ x: 50, y: 35 });
  const [isHoveringDesktop, setIsHoveringDesktop] = useState(false);
  const portraitDesktopRef = useRef<HTMLDivElement>(null);

  const [torchPosMobile, setTorchPosMobile] = useState({ x: 50, y: 35 });
  const [isHoveringMobile, setIsHoveringMobile] = useState(false);
  const portraitMobileRef = useRef<HTMLDivElement>(null);

  const handleMouseMoveDesktop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!portraitDesktopRef.current) return;
    const rect = portraitDesktopRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setTorchPosDesktop({ x, y });
  };

  const handleTouchMoveMobile = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!portraitMobileRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = portraitMobileRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100));
    setTorchPosMobile({ x, y });
  };

  const photoUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBJFinjn6QaQhQ2KZP6Mg6w5NUbCRuQ5PYEXMJ4-U0-hGJ3mL4gTK6ETe2C5z9dzG7it6SgLuxSACZOVeXb3N7w5jAlLt6vp18pwxFTcA4L4wI-y-mschtO7yEZZj_pwV0oTaI7B1V_aIVInj8yBE9TzR5DhQqX_xBR-lm8HvGMJ-toWsduKn3jWPKg06Glw6A8tyD90n08SDaEPmQkBBxeycAoWRBz7wTQlVrRvqfNq9wR3AOUMXZMEl0FtFkJcpsfZg';

  const handleAction = (message: string) => {
    if (WHATSAPP_NUMBER && WHATSAPP_NUMBER.trim() !== '') {
      const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
      const encodedMsg = encodeURIComponent(message);
      const url = `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setToastMessage('O WhatsApp do Studio será disponibilizado em breve.');
      setTimeout(() => {
        setToastMessage(null);
      }, 4500);
    }
  };

  const handleEvaluationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleAction('Olá! Vim pelo site do Jenefer Viana Studio e gostaria de agendar uma avaliação.');
  };

  const handleProcedureClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleAction('Olá! Vim pelo site do Jenefer Viana Studio e gostaria de agendar um procedimento.');
  };

  const handleWhatsAppInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleAction('Olá! Vim pelo site do Jenefer Viana Studio e gostaria de conversar.');
  };

  return (
    <section
      id="contato"
      className="relative w-full min-h-[100svh] bg-[#0E0C0C] flex flex-col justify-between overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 text-[#F2EADF]"
      aria-label="Seção 06 — Contato"
    >
      {/* Subtle Toast / Notification Banner for WhatsApp unavailable */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1A1615] border border-[#C19A55] text-[#F2EADF] px-6 py-3.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(193,154,85,0.25)] flex items-center gap-3 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
        >
          <BrandSymbol className="w-5 h-5 shrink-0" color="#C19A55" />
          <span className="font-montserrat text-xs sm:text-sm font-medium tracking-wide">
            {toastMessage}
          </span>
        </div>
      )}

      {/* Atmospheric Background Lighting */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Golden ambiance glow in right quadrant */}
        <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#9B7138]/12 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#C19A55]/8 rounded-full blur-[140px]" />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0E0C0C] to-transparent z-10" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-between">
        
        {/* ========================================================= */}
        {/* DESKTOP & TABLET LAYOUT (MD & UP) */}
        {/* ========================================================= */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-14 items-center my-auto min-h-[calc(100svh-180px)]">
          
          {/* LEFT COLUMN: NARRATIVE & ACTION BUTTONS (55% width -> 7 cols) */}
          <div className="md:col-span-7 flex flex-col justify-between py-4 max-w-[660px]">
            <div>
              {/* Section Tag */}
              <div className="flex flex-col items-start mb-6">
                <span className="font-montserrat text-[11px] lg:text-xs tracking-[0.32em] text-[#C19A55] uppercase font-medium">
                  06 / CONTATO
                </span>
                <div className="w-10 h-[1.5px] bg-[#C19A55] mt-2.5" />
              </div>

              {/* Title */}
              <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-[4rem] text-[#F2EADF] font-normal leading-none tracking-tight mb-8">
                CONTATO
              </h2>

              {/* Main Headline */}
              <div className="font-cormorant text-3xl sm:text-4xl lg:text-[2.85rem] text-[#F2EADF] font-normal leading-[1.22] tracking-wide mb-6">
                <span>E se o seu próximo</span>
                <div className="mt-1">
                  <span className="text-[#C19A55] italic font-normal text-[1.12em] mr-2">
                    glow up
                  </span>
                  <span>começasse agora?</span>
                </div>
              </div>

              {/* Supporting Paragraph */}
              <p className="font-montserrat text-xs sm:text-sm lg:text-[14px] font-light text-[#F2EADF]/80 leading-[1.75] tracking-wide max-w-[540px] mb-9">
                Sua transformação começa com uma conversa. Agende uma avaliação personalizada e descubra o cuidado que faz sentido para você.
              </p>

              {/* Choices Eyebrow & Buttons */}
              <div className="flex flex-col space-y-4 mb-12">
                <span className="font-montserrat text-[10.5px] tracking-[0.28em] text-[#C19A55] uppercase font-medium">
                  ESCOLHA COMO DESEJA COMEÇAR
                </span>

                {/* Two Action Buttons Side-by-Side */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  {/* Primary Champagne Button */}
                  <button
                    onClick={handleEvaluationClick}
                    className="group h-[52px] px-7 bg-[#C19A55] text-[#0E0C0C] font-montserrat text-[11px] lg:text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#D4AD68] hover:shadow-[0_0_30px_rgba(193,154,85,0.4)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                    aria-label="Agendar minha avaliação no WhatsApp"
                  >
                    <span>AGENDAR MINHA AVALIAÇÃO</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  {/* Secondary Transparent Border Button */}
                  <button
                    onClick={handleProcedureClick}
                    className="h-[52px] px-7 bg-transparent border border-[#C19A55]/70 text-[#F2EADF] font-montserrat text-[11px] lg:text-xs font-normal tracking-[0.2em] uppercase transition-all duration-300 hover:border-[#C19A55] hover:bg-[#C19A55]/10 hover:text-[#F2EADF] active:scale-[0.98] flex items-center justify-center cursor-pointer focus:outline-none"
                    aria-label="Agendar um procedimento no WhatsApp"
                  >
                    <span>AGENDAR UM PROCEDIMENTO</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom 3 Columns Info: WhatsApp, Instagram, Localização */}
            <div>
              <div className="w-full h-[1px] bg-[#211D1C] mb-8" />

              <div className="grid grid-cols-3 gap-6 items-start">
                {/* WhatsApp */}
                <div className="flex flex-col">
                  <span className="font-montserrat text-[10px] tracking-[0.28em] text-[#C19A55] uppercase font-medium mb-1.5">
                    WHATSAPP
                  </span>
                  <button
                    onClick={handleWhatsAppInfoClick}
                    className="text-left font-montserrat text-xs lg:text-[13px] font-light text-[#F2EADF]/85 hover:text-[#C19A55] transition-colors focus:outline-none"
                  >
                    Converse com o Studio
                  </button>
                </div>

                {/* Instagram */}
                <div className="flex flex-col">
                  <span className="font-montserrat text-[10px] tracking-[0.28em] text-[#C19A55] uppercase font-medium mb-1.5">
                    INSTAGRAM
                  </span>
                  <a
                    href="https://www.instagram.com/jeneferviana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-montserrat text-xs lg:text-[13px] font-light text-[#F2EADF]/85 hover:text-[#C19A55] transition-colors focus:outline-none"
                    aria-label="Instagram de Jenefer Viana (@jeneferviana)"
                  >
                    @jeneferviana
                  </a>
                </div>

                {/* Localização */}
                <div className="flex flex-col">
                  <span className="font-montserrat text-[10px] tracking-[0.28em] text-[#C19A55] uppercase font-medium mb-1.5">
                    LOCALIZAÇÃO
                  </span>
                  <span className="font-montserrat text-xs lg:text-[13px] font-light text-[#F2EADF]/85">
                    Belo Horizonte • MG
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: JENEFER PORTRAIT WITH GOLDEN RING (45% width -> 5 cols) */}
          <div className="md:col-span-5 relative flex items-center justify-center h-[540px] lg:h-[580px]">
            
            {/* Official Brand Symbol Discreetly in Top Right */}
            <div className="absolute top-2 right-2 z-30 opacity-60 hover:opacity-100 transition-opacity">
              <BrandSymbol className="w-12 h-12 lg:w-14 lg:h-14" color="#C19A55" />
            </div>

            {/* Golden Circle Halo Ring Backdrop with Flashlight / Spotlight interaction */}
            <div
              ref={portraitDesktopRef}
              onMouseMove={handleMouseMoveDesktop}
              onMouseEnter={() => setIsHoveringDesktop(true)}
              onMouseLeave={() => setIsHoveringDesktop(false)}
              className="relative w-[380px] h-[380px] lg:w-[440px] lg:h-[440px] flex items-center justify-center cursor-crosshair"
            >
              
              {/* Outer Golden Neon Ring */}
              <div className="absolute inset-0 rounded-full border border-[#C19A55]/70 shadow-[0_0_40px_rgba(193,154,85,0.3),inset_0_0_30px_rgba(193,154,85,0.15)] animate-pulse" style={{ animationDuration: '6s' }} />
              
              {/* Dark Translucent Inner Circle */}
              <div className="absolute inset-2 rounded-full bg-[#120E0D]/90 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9B7138]/10 to-[#0E0C0C]" />
              </div>

              {/* Jenefer Cut-out Portrait Framed within Circle */}
              <div className="relative z-20 w-full h-[520px] lg:h-[570px] flex items-end justify-center -mb-6 pointer-events-none select-none">
                
                {/* 1. Base Layer: Moody Contrast Silhouette */}
                <img
                  src={photoUrl}
                  alt="Fotografia de Jenefer Viana, fundadora do Jenefer Viana Studio"
                  className="h-full w-auto object-contain object-bottom filter contrast-[1.1] brightness-[0.55] grayscale-[25%] transition-all duration-300 drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]"
                  referrerPolicy="no-referrer"
                />

                {/* 2. Top Vivid Layer: Illuminated dynamically by Flashlight / Spotlight cone */}
                <div
                  className="absolute inset-0 flex items-end justify-center pointer-events-none transition-opacity duration-200"
                  style={{
                    opacity: isHoveringDesktop ? 1 : 0.65,
                    maskImage: isHoveringDesktop
                      ? `radial-gradient(circle 160px at ${torchPosDesktop.x}% ${torchPosDesktop.y}%, black 25%, rgba(0,0,0,0.5) 60%, transparent 100%)`
                      : `radial-gradient(circle 130px at 50% 32%, black 20%, rgba(0,0,0,0.4) 55%, transparent 100%)`,
                    WebkitMaskImage: isHoveringDesktop
                      ? `radial-gradient(circle 160px at ${torchPosDesktop.x}% ${torchPosDesktop.y}%, black 25%, rgba(0,0,0,0.5) 60%, transparent 100%)`
                      : `radial-gradient(circle 130px at 50% 32%, black 20%, rgba(0,0,0,0.4) 55%, transparent 100%)`,
                  }}
                >
                  <img
                    src={photoUrl}
                    alt="Jenefer Viana Iluminada"
                    className="h-full w-auto object-contain object-bottom filter brightness-[1.18] contrast-[1.18] saturate-[1.12]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Warm champagne glow wash */}
                  <div className="absolute inset-0 bg-[#C19A55]/12 mix-blend-color-dodge" />
                </div>

                {/* 3. Golden Lantern Aura at Cursor */}
                {isHoveringDesktop && (
                  <div
                    className="absolute z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full transition-transform duration-75"
                    style={{
                      left: `${torchPosDesktop.x}%`,
                      top: `${torchPosDesktop.y}%`,
                      background:
                        'radial-gradient(circle, rgba(242, 234, 223, 0.4) 0%, rgba(193, 154, 85, 0.22) 45%, transparent 70%)',
                      mixBlendMode: 'screen',
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full border border-[#C19A55]/70 shadow-[0_0_20px_#C19A55]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F2EADF] shadow-[0_0_8px_#ffffff]" />
                    </div>
                  </div>
                )}

                {/* Bottom Floor Fade to avoid harsh cut */}
                <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#0E0C0C] via-[#0E0C0C]/85 to-transparent z-20" />
              </div>

            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* MOBILE LAYOUT (MD DOWN) */}
        {/* ========================================================= */}
        <div className="flex md:hidden flex-col w-full space-y-6 my-auto py-2">
          
          {/* Header Row Mobile */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col items-start">
              <span className="font-montserrat text-[10.5px] tracking-[0.3em] text-[#C19A55] uppercase font-medium">
                06 / CONTATO
              </span>
              <div className="w-9 h-[1.5px] bg-[#C19A55] mt-2 mb-4" />
              
              <h2 className="font-cormorant text-3xl sm:text-4xl text-[#F2EADF] font-normal leading-none tracking-tight">
                CONTATO
              </h2>
            </div>

            {/* Official Symbol Mobile */}
            <div className="opacity-60 pt-1">
              <BrandSymbol className="w-10 h-10" color="#C19A55" />
            </div>
          </div>

          {/* Headline Mobile */}
          <div className="font-cormorant text-2xl xs:text-3xl text-[#F2EADF] font-normal leading-[1.22] tracking-wide">
            <span>E se o seu próximo</span>
            <div className="mt-0.5">
              <span className="text-[#C19A55] italic font-normal text-[1.12em] mr-1.5">
                glow up
              </span>
              <span>começasse agora?</span>
            </div>
          </div>

          {/* Supporting Text Mobile */}
          <p className="font-montserrat text-xs font-light text-[#F2EADF]/80 leading-[1.65] tracking-wide">
            Sua transformação começa com uma conversa. Agende uma avaliação personalizada e descubra o cuidado que faz sentido para você.
          </p>

          {/* Signature tag */}
          <div className="pt-1">
            <span className="font-montserrat text-[10px] tracking-[0.3em] text-[#C19A55] uppercase font-medium">
              JENEFER VIANA • STUDIO
            </span>
          </div>

          {/* Central Portrait in Golden Ring Mobile with interactive touch flashlight */}
          <div
            ref={portraitMobileRef}
            onTouchStart={() => setIsHoveringMobile(true)}
            onTouchMove={handleTouchMoveMobile}
            onTouchEnd={() => setIsHoveringMobile(false)}
            className="relative w-full h-[320px] flex items-center justify-center my-2 select-none"
          >
            {/* Golden Circle */}
            <div className="relative w-[260px] h-[260px] rounded-full border border-[#C19A55]/60 shadow-[0_0_30px_rgba(193,154,85,0.25)] flex items-center justify-center bg-[#120E0D]/80">
              <div className="absolute inset-0 rounded-full bg-radial from-[#9B7138]/15 via-transparent to-transparent" />
            </div>

            {/* Photo Container */}
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
              {/* 1. Silhouette Layer */}
              <img
                src={photoUrl}
                alt="Fotografia de Jenefer Viana"
                className="h-[310px] w-auto object-contain object-bottom filter contrast-[1.1] brightness-[0.55] grayscale-[25%] transition-all duration-300 drop-shadow-[0_10px_25px_rgba(0,0,0,0.95)]"
                referrerPolicy="no-referrer"
              />

              {/* 2. Top Vivid Spotlight Layer on Touch */}
              <div
                className="absolute inset-0 flex items-end justify-center pointer-events-none transition-opacity duration-200"
                style={{
                  opacity: isHoveringMobile ? 1 : 0.65,
                  maskImage: isHoveringMobile
                    ? `radial-gradient(circle 120px at ${torchPosMobile.x}% ${torchPosMobile.y}%, black 25%, rgba(0,0,0,0.5) 60%, transparent 100%)`
                    : `radial-gradient(circle 100px at 50% 35%, black 20%, rgba(0,0,0,0.4) 55%, transparent 100%)`,
                  WebkitMaskImage: isHoveringMobile
                    ? `radial-gradient(circle 120px at ${torchPosMobile.x}% ${torchPosMobile.y}%, black 25%, rgba(0,0,0,0.5) 60%, transparent 100%)`
                    : `radial-gradient(circle 100px at 50% 35%, black 20%, rgba(0,0,0,0.4) 55%, transparent 100%)`,
                }}
              >
                <img
                  src={photoUrl}
                  alt="Jenefer Viana Iluminada"
                  className="h-[310px] w-auto object-contain object-bottom filter brightness-[1.18] contrast-[1.18] saturate-[1.12]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#C19A55]/12 mix-blend-color-dodge" />
              </div>

              {/* 3. Golden Flashlight Ring at touch location */}
              {isHoveringMobile && (
                <div
                  className="absolute z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full transition-transform duration-75"
                  style={{
                    left: `${torchPosMobile.x}%`,
                    top: `${torchPosMobile.y}%`,
                    background:
                      'radial-gradient(circle, rgba(242, 234, 223, 0.4) 0%, rgba(193, 154, 85, 0.25) 45%, transparent 70%)',
                    mixBlendMode: 'screen',
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border border-[#C19A55]/70 shadow-[0_0_15px_#C19A55]" />
                  </div>
                </div>
              )}

              {/* Bottom Fade */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#0E0C0C] via-[#0E0C0C]/85 to-transparent z-20" />
            </div>
          </div>

          {/* Action Buttons Mobile (Stacked & Full Width) */}
          <div className="flex flex-col space-y-3 w-full pt-2">
            <button
              onClick={handleEvaluationClick}
              className="w-full min-h-[52px] px-6 bg-[#C19A55] active:bg-[#D4AD68] text-[#0E0C0C] font-montserrat text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2 shadow-lg transition-all focus:outline-none"
              aria-label="Agendar minha avaliação"
            >
              <span>AGENDAR MINHA AVALIAÇÃO</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleProcedureClick}
              className="w-full min-h-[52px] px-6 bg-transparent border border-[#C19A55]/70 active:bg-[#C19A55]/10 text-[#F2EADF] font-montserrat text-xs font-normal tracking-[0.2em] uppercase flex items-center justify-center transition-all focus:outline-none"
              aria-label="Agendar um procedimento"
            >
              <span>AGENDAR UM PROCEDIMENTO</span>
            </button>
          </div>

          {/* Contact Details Mobile */}
          <div className="w-full pt-4 border-t border-[#211D1C] grid grid-cols-3 gap-2 text-left">
            <div className="flex flex-col">
              <span className="font-montserrat text-[8.5px] tracking-[0.2em] text-[#C19A55] uppercase font-medium">
                WHATSAPP
              </span>
              <button
                onClick={handleWhatsAppInfoClick}
                className="font-montserrat text-[10px] font-light text-[#F2EADF]/80 mt-1 text-left"
              >
                ATENDIMENTO DIRETO
              </button>
            </div>

            <div className="flex flex-col">
              <span className="font-montserrat text-[8.5px] tracking-[0.2em] text-[#C19A55] uppercase font-medium">
                INSTAGRAM
              </span>
              <a
                href="https://www.instagram.com/jeneferviana/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-[10px] font-light text-[#F2EADF]/80 mt-1"
              >
                @JENEFERVIANA
              </a>
            </div>

            <div className="flex flex-col">
              <span className="font-montserrat text-[8.5px] tracking-[0.2em] text-[#C19A55] uppercase font-medium">
                LOCALIZAÇÃO
              </span>
              <span className="font-montserrat text-[10px] font-light text-[#F2EADF]/80 mt-1">
                BELO HORIZONTE
              </span>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* FOOTER SIGNATURE & BACK TO TOP LINK */}
        {/* ========================================================= */}
        <div className="w-full pt-10 sm:pt-12 border-t border-[#211D1C]/80 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          {/* Brand Signature */}
          <p className="font-montserrat text-[9px] sm:text-[10.5px] tracking-[0.25em] text-[#6D625B] uppercase font-light">
            JENEFER VIANA STUDIO • BELEZA, CUIDADO E TRANSFORMAÇÃO COM PROPÓSITO.
          </p>

          {/* Back to Top */}
          <a
            href="#inicio"
            className="font-montserrat text-[9px] sm:text-[10.5px] tracking-[0.28em] text-[#C19A55] hover:text-[#F2EADF] uppercase font-medium transition-colors flex items-center gap-1 focus:outline-none"
            aria-label="Voltar ao início da página"
          >
            VOLTAR AO TOPO ↑
          </a>

        </div>

      </div>
    </section>
  );
};
