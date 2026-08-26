import React from 'react';
import { BrandSymbol } from './BrandSymbol';

export const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="relative w-full min-h-[100svh] bg-[#0E0C0C] flex flex-col justify-between overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-label="Seção 02 — Sobre o Studio e Jenefer Viana"
    >
      {/* 1. Atmospheric Studio Architecture & Golden Ring Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Subtle Ambient Radial Halos */}
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#9B7138]/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[350px] bg-[#C19A55]/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0E0C0C] to-transparent z-10" />

        {/* Studio Architectural Wall & Golden Floor Reflection Simulation */}
        <div className="absolute inset-0 opacity-85">
          {/* Curved Studio Wall Texture & Light Strip */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] bg-gradient-to-l from-[#181413] via-[#14100F] to-transparent">
            {/* Vertical Architectural Light Sconce */}
            <div className="hidden md:block absolute top-[18%] left-[24%] w-[3px] h-[48%] bg-gradient-to-b from-transparent via-[#F2EADF] to-[#C19A55]/30 shadow-[0_0_24px_rgba(242,234,223,0.8),0_0_60px_rgba(193,154,85,0.4)] opacity-75" />
            {/* Soft Wall Wash Behind Neon */}
            <div className="hidden md:block absolute top-[15%] left-[25%] w-32 h-[50%] bg-gradient-to-r from-[#9B7138]/20 to-transparent blur-xl" />
          </div>

          {/* Floor Horizon & Golden Sheen Reflections */}
          <div className="absolute bottom-0 inset-x-0 h-[38%] bg-gradient-to-t from-[#090808] via-[#120F0E]/90 to-transparent">
            <div className="absolute bottom-0 right-[5%] w-[45%] h-32 bg-radial from-[#C19A55]/18 via-[#9B7138]/8 to-transparent blur-2xl transform skew-x-12" />
          </div>
        </div>
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center">
        
        {/* DESKTOP & TABLET LAYOUT (MD & UP) */}
        <div className="hidden md:grid md:grid-cols-12 items-center gap-8 lg:gap-12 min-h-[calc(100svh-200px)]">
          
          {/* Left Column: Narrative (58% width -> 7 cols) */}
          <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-between max-w-[680px] py-4">
            
            <div>
              {/* Section Tag */}
              <div className="flex flex-col items-start mb-6">
                <span className="font-montserrat text-[11px] lg:text-xs tracking-[0.32em] text-[#C19A55] uppercase font-medium">
                  02 / SOBRE
                </span>
                <div className="w-10 h-[1.5px] bg-[#C19A55] mt-2.5" />
              </div>

              {/* Title */}
              <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-[4rem] text-[#F2EADF] font-normal leading-none tracking-[0.02em] mb-7">
                STUDIO <span className="text-[#C19A55] font-light mx-1">+</span> JENEFER
              </h2>

              {/* Main Statement */}
              <p className="font-cormorant text-2xl sm:text-3xl lg:text-[2.25rem] text-[#F2EADF] font-normal leading-[1.28] tracking-tight mb-10 max-w-[620px]">
                Quando <span className="text-[#C19A55] italic font-normal">estrutura</span> e{' '}
                <span className="text-[#C19A55] italic font-normal">experiência</span> se encontram, o resultado é você se sentir bem novamente.
              </p>

              {/* Fine Horizontal Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-[#C19A55]/35 via-[#6D625B]/30 to-transparent mb-8" />

              {/* Two Blocks Side by Side + Union '+' */}
              <div className="grid grid-cols-12 items-start gap-4 lg:gap-6 max-w-[620px]">
                {/* Block 1: DE UM LADO */}
                <div className="col-span-5 flex flex-col">
                  <span className="font-montserrat text-[10px] lg:text-[11px] tracking-[0.25em] text-[#C19A55] uppercase font-medium mb-3">
                    DE UM LADO
                  </span>
                  <p className="font-montserrat text-xs lg:text-[13px] font-light text-[#F2EADF]/80 leading-[1.7] tracking-wide">
                    Um studio preparado para oferecer conforto, tecnologia e segurança.
                  </p>
                </div>

                {/* Center Connection '+' */}
                <div className="col-span-2 flex items-center justify-center pt-5">
                  <span className="font-cormorant text-2xl lg:text-3xl text-[#C19A55] font-light select-none">
                    +
                  </span>
                </div>

                {/* Block 2: DO OUTRO */}
                <div className="col-span-5 flex flex-col">
                  <span className="font-montserrat text-[10px] lg:text-[11px] tracking-[0.25em] text-[#C19A55] uppercase font-medium mb-3">
                    DO OUTRO
                  </span>
                  <p className="font-montserrat text-xs lg:text-[13px] font-light text-[#F2EADF]/80 leading-[1.7] tracking-wide">
                    O olhar atento de Jenefer Viana, profissional que transformou conhecimento e experiência em protocolos exclusivos.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Left Signature */}
            <div className="flex items-center gap-3 pt-12">
              <div className="w-8 h-[1px] bg-[#6D625B]" />
              <span className="font-montserrat text-[9px] sm:text-[10px] tracking-[0.35em] text-[#6D625B] uppercase font-normal">
                JENEFER VIANA STUDIO
              </span>
            </div>

          </div>

          {/* Right Column: Luminous Golden Circular Neon Ring with Official Brand Symbol (42% width -> 5 cols) */}
          <div className="md:col-span-5 lg:col-span-5 relative flex items-center justify-center h-full min-h-[520px]">
            
            {/* Luminous Golden Ring Structure */}
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] flex items-center justify-center">
              
              {/* Outer Golden Neon Ring */}
              <div
                className="absolute inset-0 rounded-full border-[1.5px] border-[#C19A55] shadow-[0_0_35px_rgba(193,154,85,0.45),0_0_70px_rgba(193,154,85,0.25),inset_0_0_35px_rgba(193,154,85,0.15)] animate-pulse"
                style={{ animationDuration: '7s' }}
              />

              {/* Inner Soft Gradient Ring Flare */}
              <div className="absolute inset-6 rounded-full bg-radial from-[#C19A55]/14 via-[#9B7138]/6 to-transparent blur-md pointer-events-none" />

              {/* Official Brand Symbol Centered inside the Ring */}
              <div className="relative z-10 flex flex-col items-center justify-center p-8 transition-transform duration-700 hover:scale-105">
                <BrandSymbol
                  className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 filter drop-shadow-[0_0_20px_rgba(193,154,85,0.35)]"
                  color="#C19A55"
                />
              </div>

              {/* Discrete Tag: ESTRUTURA • EXPERIÊNCIA */}
              <div className="absolute bottom-8 right-2 lg:right-4 z-20">
                <span className="font-montserrat text-[9px] sm:text-[10px] tracking-[0.32em] text-[#C19A55]/85 uppercase font-light">
                  ESTRUTURA • EXPERIÊNCIA
                </span>
              </div>

              {/* Ground Ring Reflection Fade */}
              <div className="absolute -bottom-10 inset-x-8 h-20 bg-gradient-to-b from-[#C19A55]/20 to-transparent blur-xl pointer-events-none" />
            </div>

          </div>

        </div>

        {/* MOBILE LAYOUT (VERTICAL COMPOSITION) */}
        <div className="flex md:hidden flex-col justify-between space-y-8">
          
          {/* 1. Identification: 02 / SOBRE */}
          <div className="flex flex-col items-start pt-2">
            <span className="font-montserrat text-[10px] tracking-[0.3em] text-[#C19A55] uppercase font-medium">
              02 / SOBRE
            </span>
            <div className="w-8 h-[1.5px] bg-[#C19A55] mt-2" />
          </div>

          {/* 2. Official Brand Symbol integrated with Luminous Ring */}
          <div className="relative w-full py-4 flex items-center justify-center">
            <div className="relative w-[260px] h-[260px] xs:w-[280px] xs:h-[280px] flex items-center justify-center">
              {/* Luminous Neon Ring */}
              <div
                className="absolute inset-0 rounded-full border border-[#C19A55] shadow-[0_0_30px_rgba(193,154,85,0.4),inset_0_0_25px_rgba(193,154,85,0.15)] animate-pulse"
                style={{ animationDuration: '6s' }}
              />
              <div className="absolute inset-4 rounded-full bg-radial from-[#C19A55]/12 to-transparent blur-md" />
              
              {/* Official Symbol */}
              <BrandSymbol
                className="w-24 h-24 xs:w-28 xs:h-28 relative z-10 drop-shadow-[0_0_16px_rgba(193,154,85,0.35)]"
                color="#C19A55"
              />

              {/* Discrete Tag */}
              <div className="absolute bottom-3 right-0">
                <span className="font-montserrat text-[8px] tracking-[0.28em] text-[#C19A55]/80 uppercase font-light">
                  ESTRUTURA • EXPERIÊNCIA
                </span>
              </div>
            </div>
          </div>

          {/* 3. Title (2 lines on mobile) */}
          <div className="flex flex-col">
            <h2 className="font-cormorant text-3xl xs:text-4xl text-[#F2EADF] font-normal leading-[1.08] tracking-tight">
              <span className="block">STUDIO <span className="text-[#C19A55] font-light">+</span></span>
              <span className="block">JENEFER</span>
            </h2>
          </div>

          {/* 4. Main Statement */}
          <p className="font-cormorant text-xl xs:text-2xl text-[#F2EADF] font-normal leading-[1.3] tracking-tight">
            Quando <span className="text-[#C19A55] italic font-normal">estrutura</span> e{' '}
            <span className="text-[#C19A55] italic font-normal">experiência</span> se encontram, o resultado é você se sentir bem novamente.
          </p>

          {/* 5. Divider Line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-[#C19A55]/30 via-[#6D625B]/25 to-transparent" />

          {/* 6. Block 1: DE UM LADO */}
          <div className="flex flex-col space-y-1.5">
            <span className="font-montserrat text-[10px] tracking-[0.25em] text-[#C19A55] uppercase font-medium">
              DE UM LADO
            </span>
            <p className="font-montserrat text-xs font-light text-[#F2EADF]/85 leading-[1.65] tracking-wide">
              Um studio preparado para oferecer conforto, tecnologia e segurança.
            </p>
          </div>

          {/* 7. Golden '+' slightly shifted left */}
          <div className="flex items-center pl-1 -my-2">
            <span className="font-cormorant text-2xl text-[#C19A55] font-light">
              +
            </span>
          </div>

          {/* 8. Block 2: DO OUTRO */}
          <div className="flex flex-col space-y-1.5">
            <span className="font-montserrat text-[10px] tracking-[0.25em] text-[#C19A55] uppercase font-medium">
              DO OUTRO
            </span>
            <p className="font-montserrat text-xs font-light text-[#F2EADF]/85 leading-[1.65] tracking-wide">
              O olhar atento de Jenefer Viana, profissional que transformou conhecimento e experiência em protocolos exclusivos.
            </p>
          </div>

          {/* 9. Signature: JENEFER VIANA STUDIO */}
          <div className="flex items-center gap-3 pt-6 pb-2">
            <div className="w-6 h-[1px] bg-[#6D625B]" />
            <span className="font-montserrat text-[8.5px] tracking-[0.32em] text-[#6D625B] uppercase font-normal">
              JENEFER VIANA STUDIO
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
