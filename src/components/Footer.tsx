import React from 'react';
import { Instagram, MapPin, Phone, ArrowUp } from 'lucide-react';
import { BrandSymbol } from './BrandSymbol';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenQuiz }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0E0C0C] border-t border-[#6D625B]/30 text-[#F2EADF]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 md:px-12 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <BrandSymbol className="w-8 h-8" color="#C19A55" />
              <div className="flex flex-col">
                <span className="font-playfair text-xl tracking-[0.18em] font-semibold text-[#F2EADF] uppercase leading-none">
                  Jenefer Viana
                </span>
                <span className="text-[9px] tracking-[0.35em] text-[#C19A55] uppercase font-light mt-1">
                  Studio · Edição 01
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F2EADF]/80 leading-relaxed font-light max-w-sm">
              Especialista em estética corporal autoral de alta precisão, criadora de protocolos exclusivos e mentora de profissionais da beleza em todo o Brasil.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#211D1C] border border-[#6D625B]/40 flex items-center justify-center text-[#C19A55] hover:bg-[#C19A55] hover:text-[#0E0C0C] transition-colors glow-champagne"
                aria-label="Instagram Jenefer Viana"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#211D1C] border border-[#6D625B]/40 flex items-center justify-center text-[#C19A55] hover:bg-[#C19A55] hover:text-[#0E0C0C] transition-colors glow-champagne"
                aria-label="WhatsApp Recepção"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-playfair text-base text-[#C19A55] font-semibold uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F2EADF]/80">
              <li>
                <a href="#inicio" className="hover:text-[#C19A55] transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#C19A55] transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#objetivo" className="hover:text-[#C19A55] transition-colors">Objetivo</a>
              </li>
              <li>
                <a href="#ecossistema" className="hover:text-[#C19A55] transition-colors">Ecossistema</a>
              </li>
              <li>
                <a href="#inspiracao" className="hover:text-[#C19A55] transition-colors">Inspiração</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#C19A55] transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Signature Protocols & Actions */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-playfair text-base text-[#C19A55] font-semibold uppercase tracking-wider">
              Atendimento Exclusivo
            </h4>
            <p className="text-xs text-[#F2EADF]/80 font-light leading-relaxed">
              Agendamentos com hora marcada para atendimento individualizado, confortável e privativo.
            </p>
            <div className="space-y-2.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full bg-[#C19A55] text-[#0E0C0C] text-xs font-semibold uppercase tracking-wider py-3.5 rounded-full hover:bg-[#9B7138] hover:text-[#F2EADF] transition-colors cursor-pointer shadow-md"
              >
                Agendar Avaliação Inicial
              </button>
              <button
                onClick={onOpenQuiz}
                className="w-full border border-[#C19A55]/50 text-[#C19A55] text-xs font-semibold uppercase tracking-wider py-3.5 rounded-full hover:bg-[#C19A55]/10 transition-colors cursor-pointer"
              >
                Diagnóstico de Protocolo Online
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#6D625B]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F2EADF]/60">
          <p>© {new Date().getFullYear()} Jenefer Viana Studio · Edição 01. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#F2EADF] transition-colors">Termos de Privacidade</a>
            <a href="#" className="hover:text-[#F2EADF] transition-colors">Condições de Atendimento</a>
            <button
              onClick={scrollToTop}
              className="hover:text-[#C19A55] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
