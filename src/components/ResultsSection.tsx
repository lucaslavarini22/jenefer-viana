import React, { useState } from 'react';
import { TRANSFORMATION_CASES, TESTIMONIALS } from '../data/protocols';
import { Sparkles, Star, Quote, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { BrandSymbol } from './BrandSymbol';

interface ResultsSectionProps {
  onOpenBooking: () => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ onOpenBooking }) => {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const currentCase = TRANSFORMATION_CASES[activeCaseIdx];

  const handleNextCase = () => {
    setActiveCaseIdx((prev) => (prev + 1) % TRANSFORMATION_CASES.length);
  };

  const handlePrevCase = () => {
    setActiveCaseIdx((prev) => (prev - 1 + TRANSFORMATION_CASES.length) % TRANSFORMATION_CASES.length);
  };

  return (
    <section id="inspiracao" className="relative py-24 md:py-32 bg-[#0E0C0C] border-t border-[#6D625B]/20">
      {/* Anchor for backward compatibility */}
      <span id="resultados" className="absolute -top-24" />
      
      {/* Ambient background glows */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-radial from-[#C19A55]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <BrandSymbol className="w-4 h-4" color="#C19A55" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C19A55]">
              Resultados Reais & Evidências
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#F2EADF] leading-tight mb-6">
            Histórias de quem confiou e reencontrou sua melhor versão.
          </h2>
          <p className="font-montserrat text-sm sm:text-base text-[#F2EADF]/80 leading-relaxed font-light">
            Mais de 3.500 mulheres atendidas com respeito à individualidade biológica, silêncio acolhedor e foco em resultados visíveis e sustentáveis.
          </p>
        </div>

        {/* Featured Interactive Transformation Showcase */}
        <div className="bg-[#181515] border border-[#C19A55]/30 rounded-[15px] overflow-hidden shadow-2xl p-6 sm:p-10 mb-20">
          
          <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
            
            {/* Left: Case Info & Metrics */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest text-[#C19A55] font-bold bg-[#C19A55]/15 border border-[#C19A55]/30 px-3 py-1 rounded-full">
                  {currentCase.protocolName} • {currentCase.sessions}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevCase}
                    className="w-8 h-8 rounded-full border border-[#6D625B]/50 flex items-center justify-center text-[#F2EADF]/80 hover:text-[#C19A55] hover:border-[#C19A55] transition-colors cursor-pointer"
                    aria-label="Caso anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-[#F2EADF]/70">
                    {activeCaseIdx + 1} / {TRANSFORMATION_CASES.length}
                  </span>
                  <button
                    onClick={handleNextCase}
                    className="w-8 h-8 rounded-full border border-[#6D625B]/50 flex items-center justify-center text-[#F2EADF]/80 hover:text-[#C19A55] hover:border-[#C19A55] transition-colors cursor-pointer"
                    aria-label="Próximo caso"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h3 className="font-playfair text-2xl sm:text-3xl text-[#F2EADF] font-bold">
                {currentCase.title}
              </h3>

              <div className="relative pl-6 border-l-2 border-[#C19A55]">
                <Quote className="w-5 h-5 text-[#C19A55]/60 absolute -top-1 left-0" />
                <p className="font-playfair italic text-sm sm:text-base text-[#F2EADF] leading-relaxed">
                  "{currentCase.quote}"
                </p>
                <p className="text-xs text-[#C19A55] font-semibold tracking-wider mt-2">
                  — Paciente {currentCase.clientInitials}, {currentCase.age}
                </p>
              </div>

              {/* Verified results bullet points */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs uppercase tracking-wider text-[#F2EADF]/80 font-semibold">
                  Evolução Registrada em Avaliação:
                </p>
                {currentCase.results.map((res, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F2EADF]/85 font-light">
                    <div className="w-4 h-4 rounded-[4px] bg-[#C19A55]/15 border border-[#C19A55]/40 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-[#C19A55]" />
                    </div>
                    <span>{res}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#C19A55] text-[#0E0C0C] text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-3.5 rounded-full hover:bg-[#9B7138] hover:text-[#F2EADF] transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Quero Resultados Semelhantes</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Images Side-by-Side */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-[12px] overflow-hidden border border-[#6D625B]/40 bg-[#181515]">
                  <img
                    src={currentCase.beforeImage}
                    alt="Antes do tratamento"
                    className="w-full h-64 sm:h-72 object-cover filter brightness-90"
                  />
                  <div className="absolute top-3 left-3 bg-[#0E0C0C]/90 text-[#F2EADF]/80 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#6D625B]/50">
                    Avaliação Inicial
                  </div>
                </div>

                <div className="relative rounded-[12px] overflow-hidden border border-[#C19A55]/60 bg-[#181515] shadow-lg">
                  <img
                    src={currentCase.afterImage}
                    alt="Depois do tratamento"
                    className="w-full h-64 sm:h-72 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-[#C19A55] text-[#0E0C0C] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    Após {currentCase.sessions}
                  </div>
                </div>
              </div>

              <div className="mt-3 text-center">
                <span className="text-[11px] text-[#F2EADF]/60 font-light italic">
                  * Registros fotográficos com autorização de pacientes do Studio. Os resultados individuais podem variar conforme o biotipo.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Testimonial Cards */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-2xl sm:text-3xl text-[#F2EADF]">
              Depoimentos de Pacientes & Parceiros
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#181515] border border-[#6D625B]/25 p-6 rounded-[15px] flex flex-col justify-between hover:border-[#C19A55]/50 transition-colors shadow-lg"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#C19A55] fill-[#C19A55]" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#F2EADF]/85 font-light leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-5 mt-6 border-t border-[#6D625B]/20">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#C19A55]/40"
                  />
                  <div>
                    <h4 className="text-xs font-semibold text-[#F2EADF] uppercase tracking-wider">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-[#C19A55]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
