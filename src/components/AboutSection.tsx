import React from 'react';
import { Sparkles, Award, HeartHandshake, BookOpen, Compass, ShieldCheck } from 'lucide-react';
import { BrandSymbol } from './BrandSymbol';

interface AboutSectionProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking, onOpenQuiz }) => {
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-[#0E0C0C] border-t border-[#6D625B]/20 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial from-[#C19A55]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-radial from-[#9B7138]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <BrandSymbol className="w-4 h-4" color="#C19A55" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C19A55]">
              Essência da Marca & Método
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#F2EADF] leading-tight mb-6">
            Transformação com presença.{' '}
            <span className="text-gold-gradient italic font-normal">Cuidado com propósito.</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#C19A55]/60 mx-auto" />
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Luxury Border & Quote Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-3 border border-[#C19A55]/25 rounded-[18px] pointer-events-none" />
              
              <div className="relative overflow-hidden rounded-[15px] shadow-2xl bg-[#181515]">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
                  alt="Jenefer Viana em atendimento no Studio"
                  className="w-full h-[460px] sm:h-[520px] object-cover filter brightness-90 contrast-105 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0C] via-transparent to-transparent opacity-85" />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#181515]/95 border border-[#C19A55]/35 p-5 rounded-[12px] shadow-2xl max-w-xs backdrop-blur-md">
                <p className="font-playfair italic text-xs sm:text-sm text-[#F2EADF] leading-relaxed mb-2">
                  "Jenefer conduz a transformação. O studio cria a atmosfera, o método e a segurança para que cada pessoa volte a se perceber com confiança."
                </p>
                <span className="text-[11px] font-semibold text-[#C19A55] uppercase tracking-wider block">
                  — Jenefer Viana Studio
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Brand Pillars (From Manual Page 03) */}
          <div className="lg:col-span-7 space-y-7">
            <div>
              <h3 className="font-playfair text-2xl sm:text-3xl text-[#F2EADF] mb-4">
                O símbolo traduz movimento sem perder precisão
              </h3>
              <p className="font-montserrat text-sm sm:text-base text-[#F2EADF]/80 leading-relaxed mb-4 font-light">
                Com mais de uma década dedicada ao aprimoramento da estética não invasiva de alto padrão, <strong className="text-[#F2EADF] font-medium">Jenefer Viana</strong> desenvolveu protocolos autorais que unem ciência anatômica, descompactação tecidual profunda e respeito absoluto aos limites biológicos de cada corpo.
              </p>
              <p className="font-montserrat text-sm sm:text-base text-[#F2EADF]/80 leading-relaxed font-light">
                O luxo do studio aparece na textura, no toque acolhedor e na precisão dos gestos — nunca no excesso.
              </p>
            </div>

            {/* 3 Pillars Grid (Transformação / Autoria / Equilíbrio - Brand Manual Page 03) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#181515] border border-[#6D625B]/25 p-5 rounded-[15px] hover:border-[#C19A55]/50 transition-all duration-300">
                <div className="w-9 h-9 rounded-[8px] bg-[#C19A55]/15 border border-[#C19A55]/30 flex items-center justify-center text-[#C19A55] mb-3.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-playfair text-base text-[#F2EADF] font-semibold mb-1">Transformação</h4>
                <p className="text-xs text-[#F2EADF]/70 leading-relaxed font-light">
                  Mudança consciente, leveza corporal e uma nova forma de se perceber no espelho.
                </p>
              </div>

              <div className="bg-[#181515] border border-[#6D625B]/25 p-5 rounded-[15px] hover:border-[#C19A55]/50 transition-all duration-300">
                <div className="w-9 h-9 rounded-[8px] bg-[#C19A55]/15 border border-[#C19A55]/30 flex items-center justify-center text-[#C19A55] mb-3.5">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-playfair text-base text-[#F2EADF] font-semibold mb-1">Autoria</h4>
                <p className="text-xs text-[#F2EADF]/70 leading-relaxed font-light">
                  Método exclusivo e manobras autorais conectadas diretamente à expertise de Jenefer.
                </p>
              </div>

              <div className="bg-[#181515] border border-[#6D625B]/25 p-5 rounded-[15px] hover:border-[#C19A55]/50 transition-all duration-300">
                <div className="w-9 h-9 rounded-[8px] bg-[#C19A55]/15 border border-[#C19A55]/30 flex items-center justify-center text-[#C19A55] mb-3.5">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-playfair text-base text-[#F2EADF] font-semibold mb-1">Equilíbrio</h4>
                <p className="text-xs text-[#F2EADF]/70 leading-relaxed font-light">
                  A união perfeita entre sensibilidade humana, rigor biomecânico e resultado visível.
                </p>
              </div>
            </div>

            {/* CTAs in About */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#C19A55] text-[#0E0C0C] font-semibold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-[#9B7138] hover:text-[#F2EADF] transition-colors cursor-pointer shadow-md"
              >
                Agendar Avaliação VIP
              </button>
              <button
                onClick={onOpenQuiz}
                className="text-[#C19A55] text-xs sm:text-sm uppercase tracking-wider font-semibold hover:underline flex items-center gap-1.5 cursor-pointer py-3"
              >
                <Sparkles className="w-4 h-4" />
                Descobrir o protocolo ideal para o meu corpo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

