import React from 'react';
import { Protocol } from '../types';
import { X, Clock, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { BrandSymbol } from './BrandSymbol';

interface ProtocolDetailModalProps {
  protocol: Protocol | null;
  onClose: () => void;
  onSelectForBooking: (protocol: Protocol) => void;
}

export const ProtocolDetailModal: React.FC<ProtocolDetailModalProps> = ({
  protocol,
  onClose,
  onSelectForBooking,
}) => {
  if (!protocol) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#211D1C] border border-[#C19A55]/40 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-[#F2EADF]/80 hover:text-[#C19A55] p-2 bg-[#0E0C0C]/80 rounded-full border border-[#6D625B]/50 transition-colors"
          aria-label="Fechar Detalhes"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#0E0C0C]">
          <img
            src={protocol.image}
            alt={protocol.name}
            className="w-full h-full object-cover filter brightness-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#211D1C] via-[#211D1C]/40 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <div className="inline-flex items-center gap-1.5 bg-[#C19A55] text-[#0E0C0C] text-[10px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-sm mb-2">
              <BrandSymbol className="w-3 h-3" color="#0E0C0C" />
              <span>{protocol.categoryLabel}</span>
            </div>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#F2EADF]">
              {protocol.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#C19A55] font-medium mt-1">
              {protocol.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-4 bg-[#0E0C0C] p-4 rounded-sm border border-[#6D625B]/30">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#C19A55]" />
              <div>
                <p className="text-[11px] text-[#F2EADF]/60 uppercase tracking-wider">Duração da Sessão</p>
                <p className="text-sm font-semibold text-[#F2EADF]">{protocol.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#C19A55]" />
              <div>
                <p className="text-[11px] text-[#F2EADF]/60 uppercase tracking-wider">Plano Recomendado</p>
                <p className="text-sm font-semibold text-[#F2EADF]">{protocol.sessionsRecommended}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C19A55] mb-2">
              Sobre o Tratamento
            </h4>
            <p className="text-sm text-[#F2EADF]/80 leading-relaxed font-light">
              {protocol.description}
            </p>
          </div>

          {/* Methodology */}
          <div className="bg-[#0E0C0C]/80 border-l-2 border-[#C19A55] p-4">
            <h4 className="text-xs font-semibold text-[#F2EADF] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <BrandSymbol className="w-3.5 h-3.5" color="#C19A55" />
              Metodologia Exclusiva Jenefer Viana
            </h4>
            <p className="text-xs text-[#F2EADF]/80 font-light leading-relaxed">
              {protocol.methodology}
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C19A55] mb-3">
              Benefícios e Resultados
            </h4>
            <ul className="space-y-2.5">
              {protocol.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F2EADF]">
                  <CheckCircle2 className="w-4 h-4 text-[#C19A55] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C19A55] mb-2">
              Indicação
            </h4>
            <div className="flex flex-wrap gap-2">
              {protocol.idealFor.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-[#0E0C0C] text-[#F2EADF]/80 border border-[#6D625B]/40 px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-6 bg-[#0E0C0C]/70 border-t border-[#6D625B]/40 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider font-semibold text-[#F2EADF]/70 hover:text-[#F2EADF] order-2 sm:order-1"
          >
            Voltar aos Protocolos
          </button>
          
          <button
            onClick={() => onSelectForBooking(protocol)}
            className="w-full sm:w-auto bg-[#C19A55] text-[#0E0C0C] text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 py-3.5 rounded-sm hover:bg-[#9B7138] hover:text-[#F2EADF] glow-champagne flex items-center justify-center gap-2 order-1 sm:order-2 cursor-pointer transition-all"
          >
            <span>Agendar Este Protocolo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
