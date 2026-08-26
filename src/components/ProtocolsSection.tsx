import React, { useState } from 'react';
import { PROTOCOLS } from '../data/protocols';
import { Protocol } from '../types';
import { Sparkles, Clock, Calendar, ArrowRight, Eye, Check } from 'lucide-react';
import { ProtocolDetailModal } from './ProtocolDetailModal';
import { BrandSymbol } from './BrandSymbol';

interface ProtocolsSectionProps {
  onOpenBooking: (protocol?: Protocol) => void;
  onOpenQuiz: () => void;
}

export const ProtocolsSection: React.FC<ProtocolsSectionProps> = ({
  onOpenBooking,
  onOpenQuiz,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeModalProtocol, setActiveModalProtocol] = useState<Protocol | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Protocolos' },
    { id: 'remodelagem', label: 'Remodelagem & Gordura' },
    { id: 'firmeza', label: 'Firmeza & Colágeno' },
    { id: 'celulite', label: 'Celulite & Glúteos' },
    { id: 'pos-operatorio', label: 'Drenagem & Pós-Op' },
    { id: 'especial', label: 'Experiência VIP' },
  ];

  const filteredProtocols =
    selectedCategory === 'todos'
      ? PROTOCOLS
      : PROTOCOLS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="objetivo"
      className="relative py-24 md:py-32 bg-[#0E0C0C] border-t border-[#6D625B]/20"
    >
      {/* Anchor for backward compatibility */}
      <span id="protocolos" className="absolute -top-24" />
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <BrandSymbol className="w-4 h-4" color="#C19A55" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C19A55]">
              Menu de Tratamentos & Protocolos Autorais
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#F2EADF] leading-tight mb-6">
            Projetados para o seu objetivo, calibrados para o seu corpo.
          </h2>
          <p className="font-montserrat text-sm sm:text-base text-[#F2EADF]/80 leading-relaxed font-light">
            Cada protocolo começa entendendo seu objetivo — unindo matéria pura, silêncio visual e técnica manual milimétrica.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs uppercase tracking-wider px-4 py-2.5 rounded-full transition-all duration-300 font-medium cursor-pointer ${
                  isActive
                    ? 'bg-[#C19A55] text-[#0E0C0C] glow-champagne font-semibold'
                    : 'bg-[#211D1C] text-[#F2EADF]/80 hover:text-[#F2EADF] hover:bg-[#211D1C]/90 border border-[#6D625B]/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Protocols Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProtocols.map((protocol) => (
            <div
              key={protocol.id}
              className="bg-[#181515] border border-[#6D625B]/25 rounded-[15px] overflow-hidden flex flex-col transition-all duration-300 hover:border-[#C19A55]/50 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] group"
            >
              {/* Image & Badges */}
              <div className="relative h-52 w-full overflow-hidden bg-[#181515]">
                <img
                  src={protocol.image}
                  alt={protocol.name}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181515] via-transparent to-transparent" />
                
                {protocol.badge && (
                  <span className="absolute top-3.5 right-3.5 bg-[#C19A55] text-[#0E0C0C] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {protocol.badge}
                  </span>
                )}

                <span className="absolute bottom-3 left-4 text-[11px] text-[#C19A55] font-medium tracking-widest uppercase">
                  {protocol.categoryLabel}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-playfair text-2xl text-[#F2EADF] font-bold group-hover:text-[#C19A55] transition-colors leading-snug">
                    {protocol.name}
                  </h3>
                  <p className="text-xs text-[#C19A55] font-medium mt-1 mb-3">
                    {protocol.tagline}
                  </p>
                  <p className="text-xs sm:text-[13px] text-[#F2EADF]/75 line-clamp-3 font-light leading-relaxed">
                    {protocol.description}
                  </p>
                </div>

                {/* Key Benefits Preview */}
                <div className="space-y-2 pt-3 border-t border-[#6D625B]/20">
                  {protocol.benefits.slice(0, 2).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-[#F2EADF]/85 font-light">
                      <div className="w-4 h-4 rounded-[4px] bg-[#C19A55]/15 border border-[#C19A55]/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#C19A55]" />
                      </div>
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Meta details */}
                <div className="flex items-center justify-between text-[11px] text-[#F2EADF]/60 pt-2 border-t border-[#6D625B]/15">
                  <span className="flex items-center gap-1.5 font-light">
                    <Clock className="w-3.5 h-3.5 text-[#C19A55]" />
                    {protocol.duration}
                  </span>
                  <span className="flex items-center gap-1.5 font-light">
                    <Calendar className="w-3.5 h-3.5 text-[#C19A55]" />
                    {protocol.sessionsRecommended.split('/')[0]}
                  </span>
                </div>

                {/* Card Actions */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <button
                    onClick={() => setActiveModalProtocol(protocol)}
                    className="border border-[#6D625B]/50 text-[#F2EADF]/80 hover:text-[#F2EADF] hover:border-[#C19A55] text-xs font-semibold uppercase tracking-wider py-2.5 rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Detalhes</span>
                  </button>

                  <button
                    onClick={() => onOpenBooking(protocol)}
                    className="bg-[#C19A55] text-[#0E0C0C] hover:bg-[#9B7138] hover:text-[#F2EADF] text-xs font-semibold uppercase tracking-wider py-2.5 rounded-full transition-colors flex items-center justify-center gap-1 shadow-sm cursor-pointer"
                  >
                    <span>Agendar</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personalized Quiz Callout Banner */}
        <div className="mt-16 bg-[#211D1C] border border-[#C19A55]/30 p-8 sm:p-10 rounded-sm shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#C19A55]">
              <Sparkles className="w-4 h-4 text-[#C19A55]" />
              Diagnóstico Corporal Personalizado
            </div>
            <h3 className="font-playfair text-2xl sm:text-3xl text-[#F2EADF]">
              Qual transformação faria sentido para você agora?
            </h3>
            <p className="text-xs sm:text-sm text-[#F2EADF]/80 max-w-xl font-light">
              Responda a 3 perguntas rápidas e receba a recomendação clínica ideal formulada com base no seu objetivo e rotina.
            </p>
          </div>

          <button
            onClick={onOpenQuiz}
            className="shrink-0 bg-[#C19A55] text-[#0E0C0C] font-semibold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-[#9B7138] hover:text-[#F2EADF] transition-all duration-300 glow-champagne flex items-center gap-2 cursor-pointer"
          >
            <span>Fazer Diagnóstico em 1 Minuto</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Protocol Detail Modal */}
      <ProtocolDetailModal
        protocol={activeModalProtocol}
        onClose={() => setActiveModalProtocol(null)}
        onSelectForBooking={(p) => {
          setActiveModalProtocol(null);
          onOpenBooking(p);
        }}
      />
    </section>
  );
};
