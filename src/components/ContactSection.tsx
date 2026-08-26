import React, { useState } from 'react';
import { FAQS } from '../data/protocols';
import { MapPin, Phone, Mail, Clock, MessageSquare, ChevronDown, ChevronUp, Sparkles, Shield, Instagram } from 'lucide-react';
import { BrandSymbol } from './BrandSymbol';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section id="contato" className="relative py-24 md:py-32 bg-[#0E0C0C] border-t border-[#6D625B]/20">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-radial from-[#C19A55]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <BrandSymbol className="w-4 h-4" color="#C19A55" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C19A55]">
              Atendimento & Localização
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#F2EADF] leading-tight mb-6">
            Inicie sua jornada de transformação no Studio.
          </h2>
          <p className="font-montserrat text-sm sm:text-base text-[#F2EADF]/80 leading-relaxed font-light">
            Entre em contato com nossa recepção exclusiva e reserve seu momento de avaliação personalizada.
          </p>
        </div>

        {/* 2-Column: Contact & Studio Info + FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Studio Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Concierge Card */}
            <div className="bg-[#181515] border border-[#C19A55]/30 p-6 sm:p-8 rounded-[15px] shadow-xl space-y-6">
              <div className="flex items-center gap-2.5">
                <BrandSymbol className="w-6 h-6" color="#C19A55" />
                <h3 className="font-playfair text-2xl text-[#F2EADF] font-bold">
                  Jenefer Viana Studio
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#F2EADF]/80">
                  <MapPin className="w-5 h-5 text-[#C19A55] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F2EADF] block mb-0.5">Endereço Privativo:</strong>
                    <span>Av. Europa, Jardins — São Paulo / SP</span>
                    <span className="text-[11px] text-[#C19A55] block mt-1">Estacionamento privativo com concierge no local</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#F2EADF]/80">
                  <Clock className="w-5 h-5 text-[#C19A55] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F2EADF] block mb-0.5">Horários de Atendimento:</strong>
                    <span>Segunda a Sexta: 08h00 às 20h00</span>
                    <span className="block">Sábados: 08h00 às 14h00</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#F2EADF]/80">
                  <Phone className="w-5 h-5 text-[#C19A55] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F2EADF] block mb-0.5">Central VIP & WhatsApp:</strong>
                    <a href="tel:+5511999999999" className="hover:text-[#C19A55] transition-colors block">
                      (11) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#F2EADF]/80">
                  <Instagram className="w-5 h-5 text-[#C19A55] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F2EADF] block mb-0.5">Instagram Oficial:</strong>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F2EADF] text-[#C19A55] transition-colors"
                    >
                      @jenefervianastudio
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#6D625B]/25 space-y-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#C19A55] text-[#0E0C0C] font-semibold text-xs sm:text-sm uppercase tracking-wider py-3.5 rounded-full hover:bg-[#9B7138] hover:text-[#F2EADF] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Solicitar Horário de Avaliação</span>
                </button>

                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20os%20protocolos%20do%20Jenefer%20Viana%20Studio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#F2EADF] hover:bg-[#25D366]/25 font-semibold text-xs uppercase tracking-wider py-3 rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Falar no WhatsApp da Recepção</span>
                </a>
              </div>
            </div>

            {/* Privacy & Safety Guarantee */}
            <div className="p-4 bg-[#181515] border border-[#6D625B]/25 rounded-[12px] flex items-center gap-3 text-xs text-[#F2EADF]/80">
              <Shield className="w-6 h-6 text-[#C19A55] shrink-0" />
              <span>
                Total sigilo e privacidade garantidos. Atendimentos individuais em suítes exclusivas.
              </span>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest text-[#C19A55] font-semibold block mb-1">
                Dúvidas Frequentes
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl text-[#F2EADF]">
                Tudo o que você precisa saber antes da sua sessão
              </h3>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#181515] border border-[#6D625B]/25 rounded-[12px] overflow-hidden transition-colors hover:border-[#C19A55]/40"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-playfair text-base sm:text-lg text-[#F2EADF] hover:text-[#C19A55] transition-colors cursor-pointer"
                    >
                      <span className="font-medium">{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#C19A55] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#F2EADF]/60 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#F2EADF]/80 leading-relaxed font-light border-t border-[#6D625B]/15 animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
