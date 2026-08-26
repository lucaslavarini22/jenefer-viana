import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20protocolos%20do%20Jenefer%20Viana%20Studio!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.45)] hover:scale-110 hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center group"
      aria-label="Atendimento no WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-semibold uppercase tracking-wider pl-0 group-hover:pl-2">
        Falar com a Recepção VIP
      </span>
    </a>
  );
};
