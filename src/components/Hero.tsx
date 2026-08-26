import React, { useState, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenQuiz?: () => void;
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
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

  return (
    <section
      id="inicio"
      className="relative w-full min-h-[100svh] bg-[#0E0C0C] flex flex-col justify-between overflow-hidden pt-28 sm:pt-32 pb-8 sm:pb-12"
      aria-label="Capa Principal — Jenefer Viana Studio"
    >
      {/* 1. Ambient Lighting & Subtle Dark Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft amber-gold background ambiance */}
        <div
          className="absolute top-1/4 right-1/4 w-[420px] h-[420px] sm:w-[580px] sm:h-[580px] bg-[#9B7138]/10 rounded-full blur-[140px] opacity-70 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#211D1C]/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[300px] bg-[#C19A55]/8 rounded-full blur-[100px]" />
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center">
        
        {/* DESKTOP & TABLET LAYOUT (MD & UP) */}
        <div className="hidden md:grid md:grid-cols-12 items-center gap-8 lg:gap-12 min-h-[calc(100svh-180px)]">
          
          {/* Left Column: Typography & Narrative (55% width approx -> 7 cols) */}
          <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-center max-w-[660px] pt-4 lg:pt-0">
            
            {/* Main Headline */}
            <h1 className="font-cormorant text-[#F2EADF] text-4xl sm:text-5xl lg:text-[4.2rem] xl:text-[4.75rem] font-normal leading-[1.08] tracking-[-0.01em]">
              <span className="block opacity-95">E se a sua</span>
              <span className="block font-cormorant italic text-[#C19A55] text-[1.18em] font-normal tracking-wide my-1 transition-transform duration-700 hover:scale-[1.01] origin-left">
                transformação
              </span>
              <span className="block opacity-95">tivesse nome, método</span>
              <span className="block opacity-95">e propósito?</span>
            </h1>

            {/* Small Gold Divider Bar */}
            <div className="w-12 h-[1.5px] bg-[#C19A55] mt-8 mb-6 transition-all duration-500" />

            {/* Specialist Name */}
            <h2 className="font-montserrat text-xs lg:text-sm font-medium tracking-[0.28em] text-[#C19A55] uppercase mb-4">
              JENEFER VIANA
            </h2>

            {/* Professional Description */}
            <p className="font-montserrat text-sm lg:text-[15px] font-light text-[#F2EADF]/85 leading-[1.75] tracking-wide max-w-[520px]">
              Especialista em estética corporal, criadora de protocolos exclusivos e mentora de profissionais da beleza.
            </p>
          </div>

          {/* Right Column: Photograph Integrated with Golden Halo + Flashlight / Lantern Effect */}
          <div className="md:col-span-5 lg:col-span-5 relative flex items-center justify-center lg:justify-end h-full min-h-[500px] lg:min-h-[620px]">
            
            {/* Luminous Golden Halo Circle behind portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full pointer-events-none">
              {/* Thin Golden Ring Line */}
              <div
                className="w-full h-full rounded-full border border-[#C19A55]/65 shadow-[0_0_40px_rgba(193,154,85,0.22),inset_0_0_30px_rgba(193,154,85,0.12)] animate-pulse"
                style={{ animationDuration: '6s' }}
              />
              {/* Inner ambient soft glow */}
              <div className="absolute inset-4 rounded-full bg-radial from-[#C19A55]/12 via-[#9B7138]/5 to-transparent blur-md" />
            </div>

            {/* Interactive Portrait Container with Torch Lighting */}
            <div
              ref={portraitDesktopRef}
              onMouseMove={handleMouseMoveDesktop}
              onMouseEnter={() => setIsHoveringDesktop(true)}
              onMouseLeave={() => setIsHoveringDesktop(false)}
              className="relative z-10 w-full max-w-[420px] lg:max-w-[480px] flex items-end justify-center select-none cursor-crosshair group"
            >
              {/* 1. Base Layer: Moody Contrast Silhouette */}
              <img
                src={photoUrl}
                alt="Jenefer Viana — Especialista em Estética Corporal"
                className="w-full h-auto max-h-[580px] lg:max-h-[640px] object-cover object-bottom filter contrast-[1.1] brightness-[0.4] grayscale-[30%] transition-all duration-300"
                style={{
                  maskImage: 'linear-gradient(to top, transparent 0%, black 22%, black 100%)',
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 22%, black 100%)',
                }}
              />

              {/* 2. Top Vivid Layer: Illuminated dynamically by the Flashlight cone */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-200"
                style={{
                  opacity: isHoveringDesktop ? 1 : 0.45,
                  maskImage: isHoveringDesktop
                    ? `radial-gradient(circle 170px at ${torchPosDesktop.x}% ${torchPosDesktop.y}%, black 25%, rgba(0,0,0,0.55) 60%, transparent 100%), linear-gradient(to top, transparent 0%, black 22%, black 100%)`
                    : `radial-gradient(circle 130px at 50% 32%, black 20%, rgba(0,0,0,0.4) 55%, transparent 100%), linear-gradient(to top, transparent 0%, black 22%, black 100%)`,
                  WebkitMaskImage: isHoveringDesktop
                    ? `radial-gradient(circle 170px at ${torchPosDesktop.x}% ${torchPosDesktop.y}%, black 25%, rgba(0,0,0,0.55) 60%, transparent 100%), linear-gradient(to top, transparent 0%, black 22%, black 100%)`
                    : `radial-gradient(circle 130px at 50% 32%, black 20%, rgba(0,0,0,0.4) 55%, transparent 100%), linear-gradient(to top, transparent 0%, black 22%, black 100%)`,
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'destination-in',
                }}
              >
                <img
                  src={photoUrl}
                  alt="Jenefer Viana — Iluminada"
                  className="w-full h-auto max-h-[580px] lg:max-h-[640px] object-cover object-bottom filter brightness-125 contrast-125 saturate-110"
                />
                {/* Subtle champagne warmth wash inside the cone */}
                <div className="absolute inset-0 bg-[#C19A55]/12 mix-blend-color-dodge" />
              </div>

              {/* 3. Golden Lantern Flashlight Aura at Cursor Position */}
              {isHoveringDesktop && (
                <div
                  className="absolute z-20 pointer-events-none -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full transition-transform duration-75"
                  style={{
                    left: `${torchPosDesktop.x}%`,
                    top: `${torchPosDesktop.y}%`,
                    background:
                      'radial-gradient(circle, rgba(242, 234, 223, 0.45) 0%, rgba(193, 154, 85, 0.25) 45%, transparent 70%)',
                    mixBlendMode: 'screen',
                  }}
                >
                  {/* Subtle Optical Reticle / Lens */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-[#C19A55]/70 shadow-[0_0_22px_#C19A55]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F2EADF] shadow-[0_0_8px_#ffffff]" />
                  </div>
                </div>
              )}

              {/* Bottom floor blending shadow */}
              <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#0E0C0C] via-[#0E0C0C]/80 to-transparent pointer-events-none z-30" />
            </div>
          </div>

        </div>

        {/* MOBILE LAYOUT (VERTICAL COMPOSITION) */}
        <div className="flex md:hidden flex-col justify-between pt-2 pb-6 min-h-[calc(100svh-140px)]">
          
          {/* Top Section: Title & Identity */}
          <div className="flex flex-col pt-2">
            <h1 className="font-cormorant text-[#F2EADF] text-[2.5rem] xs:text-[2.75rem] font-normal leading-[1.12] tracking-tight">
              <span className="block opacity-95">E se a sua</span>
              <span className="block font-cormorant italic text-[#C19A55] text-[1.18em] font-normal tracking-wide my-1">
                transformação
              </span>
              <span className="block opacity-95">tivesse nome, método</span>
              <span className="block opacity-95">e propósito?</span>
            </h1>

            {/* Small Gold Divider Line */}
            <div className="w-10 h-[1.5px] bg-[#C19A55] mt-5 mb-4" />

            {/* Name */}
            <h2 className="font-montserrat text-[11px] font-medium tracking-[0.25em] text-[#C19A55] uppercase mb-2.5">
              JENEFER VIANA
            </h2>

            {/* Professional Description */}
            <p className="font-montserrat text-[13px] font-light text-[#F2EADF]/85 leading-[1.65] tracking-wide">
              Especialista em estética corporal, criadora de protocolos exclusivos e mentora de profissionais da beleza.
            </p>
          </div>

          {/* Lower Section: Portrait with Golden Halo Arc behind + Touch Flashlight */}
          <div className="relative mt-6 mb-2 flex items-center justify-center min-h-[320px] xs:min-h-[380px]">
            
            {/* Luminous Golden Ring behind in mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] rounded-full pointer-events-none">
              <div
                className="w-full h-full rounded-full border border-[#C19A55]/55 shadow-[0_0_35px_rgba(193,154,85,0.2)] animate-pulse"
                style={{ animationDuration: '6s' }}
              />
              <div className="absolute inset-2 rounded-full bg-radial from-[#C19A55]/10 to-transparent blur-sm" />
            </div>

            {/* Interactive Jenefer's Portrait with Touch Flashlight */}
            <div
              ref={portraitMobileRef}
              onTouchMove={handleTouchMoveMobile}
              onTouchStart={() => setIsHoveringMobile(true)}
              onTouchEnd={() => setIsHoveringMobile(false)}
              className="relative z-10 w-full max-w-[320px] xs:max-w-[360px] flex items-end justify-center select-none touch-none"
            >
              {/* 1. Base Dark Silhouette */}
              <img
                src={photoUrl}
                alt="Jenefer Viana — Especialista em Estética Corporal"
                className="w-full h-auto max-h-[420px] object-cover object-bottom filter contrast-[1.1] brightness-[0.4] grayscale-[30%]"
                style={{
                  maskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 100%)',
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 100%)',
                }}
              />

              {/* 2. Top Vivid Layer Illuminated by Touch */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-200"
                style={{
                  opacity: isHoveringMobile ? 1 : 0.6,
                  maskImage: isHoveringMobile
                    ? `radial-gradient(circle 130px at ${torchPosMobile.x}% ${torchPosMobile.y}%, black 25%, rgba(0,0,0,0.5) 60%, transparent 100%), linear-gradient(to top, transparent 0%, black 20%, black 100%)`
                    : `radial-gradient(circle 110px at 50% 32%, black 20%, rgba(0,0,0,0.4) 55%, transparent 100%), linear-gradient(to top, transparent 0%, black 20%, black 100%)`,
                  WebkitMaskImage: isHoveringMobile
                    ? `radial-gradient(circle 130px at ${torchPosMobile.x}% ${torchPosMobile.y}%, black 25%, rgba(0,0,0,0.5) 60%, transparent 100%), linear-gradient(to top, transparent 0%, black 20%, black 100%)`
                    : `radial-gradient(circle 110px at 50% 32%, black 20%, rgba(0,0,0,0.4) 55%, transparent 100%), linear-gradient(to top, transparent 0%, black 20%, black 100%)`,
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'destination-in',
                }}
              >
                <img
                  src={photoUrl}
                  alt="Jenefer Viana — Iluminada"
                  className="w-full h-auto max-h-[420px] object-cover object-bottom filter brightness-125 contrast-125 saturate-110"
                />
                <div className="absolute inset-0 bg-[#C19A55]/12 mix-blend-color-dodge" />
              </div>

              {/* 3. Golden Flashlight Beam on Touch */}
              {isHoveringMobile && (
                <div
                  className="absolute z-20 pointer-events-none -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
                  style={{
                    left: `${torchPosMobile.x}%`,
                    top: `${torchPosMobile.y}%`,
                    background:
                      'radial-gradient(circle, rgba(242, 234, 223, 0.45) 0%, rgba(193, 154, 85, 0.25) 45%, transparent 70%)',
                    mixBlendMode: 'screen',
                  }}
                />
              )}

              {/* Bottom floor blending shadow */}
              <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#0E0C0C] via-[#0E0C0C]/80 to-transparent pointer-events-none z-30" />
            </div>
          </div>

        </div>

      </div>

      {/* 3. Bottom Scroll Indicator ("ROLE PARA CONHECER") */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-start pt-2">
        <a
          href="#sobre"
          className="group flex flex-col items-start gap-2 text-[#6D625B] hover:text-[#C19A55] transition-colors duration-300 focus:outline-none"
          aria-label="Rolar para conhecer o Studio"
        >
          <span className="font-montserrat text-[9px] sm:text-[10px] tracking-[0.32em] uppercase font-normal text-[#6D625B] group-hover:text-[#C19A55] transition-colors">
            ROLE PARA CONHECER
          </span>
          <div
            className="flex items-center justify-center w-5 h-5 text-[#C19A55] animate-bounce"
            style={{ animationDuration: '2.4s' }}
          >
            <ArrowDown className="w-3.5 h-3.5 stroke-[1.5] transition-transform duration-300 group-hover:translate-y-1" />
          </div>
        </a>
      </div>

    </section>
  );
};
