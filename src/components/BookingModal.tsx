import React, { useState } from 'react';
import { Protocol } from '../types';
import { PROTOCOLS } from '../data/protocols';
import { X, Calendar, CheckCircle2, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { BrandSymbol } from './BrandSymbol';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProtocol?: Protocol | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedProtocol,
}) => {
  const [protocolId, setProtocolId] = useState<string>(
    selectedProtocol?.id || PROTOCOLS[0].id
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [period, setPeriod] = useState<'manha' | 'tarde' | 'noite'>('manha');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentSelected =
    PROTOCOLS.find((p) => p.id === protocolId) || PROTOCOLS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const message = encodeURIComponent(
      `✨ *NOVO AGENDAMENTO EXCLUSIVO - JENEFER VIANA STUDIO*\n\n` +
      `👤 *Nome:* ${name}\n` +
      `📱 *WhatsApp:* ${phone}\n` +
      `✉️ *E-mail:* ${email}\n` +
      `💆‍♀️ *Protocolo Escolhido:* ${currentSelected.name}\n` +
      `📅 *Data Preferencial:* ${date || 'A combinar'}\n` +
      `⏰ *Período:* ${period === 'manha' ? 'Manhã (08h - 12h)' : period === 'tarde' ? 'Tarde (13h - 17h)' : 'Noite (17h - 20h)'}\n` +
      (notes ? `📝 *Observações / Objetivo:* ${notes}\n\n` : '\n') +
      `Gostaria de confirmar a disponibilidade para esta data.`
    );

    // Open WhatsApp after short feedback
    setTimeout(() => {
      window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setDate('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200">
      <div
        className="bg-[#211D1C] border border-[#C19A55]/40 w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-sm shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-[#6D625B]/30 flex items-center justify-between bg-[#0E0C0C]/70">
          <div className="flex items-center gap-3">
            <BrandSymbol className="w-6 h-6" color="#C19A55" />
            <div>
              <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#F2EADF]">
                Agendar Avaliação Inicial
              </h3>
              <p className="text-[10px] text-[#C19A55] tracking-widest uppercase font-semibold">
                Jenefer Viana Studio · Atendimento Exclusivo
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[#F2EADF]/70 hover:text-[#C19A55] p-2 hover:bg-[#211D1C] rounded-full transition-colors cursor-pointer"
            aria-label="Fechar Agendamento"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Protocol Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#C19A55] font-semibold mb-2">
                Selecione o Protocolo Desejado
              </label>
              <select
                value={protocolId}
                onChange={(e) => setProtocolId(e.target.value)}
                className="w-full bg-[#0E0C0C] border border-[#6D625B]/50 text-[#F2EADF] text-sm p-3.5 rounded-sm focus:border-[#C19A55] focus:outline-none"
              >
                {PROTOCOLS.map((p) => (
                  <option key={p.id} value={p.id} className="bg-[#211D1C] text-[#F2EADF]">
                    {p.name} ({p.categoryLabel})
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-[#F2EADF]/70 mt-1 font-light">
                {currentSelected.tagline} • Duração: {currentSelected.duration}
              </p>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#F2EADF]/80 font-medium mb-1.5">
                  Seu Nome Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#C19A55] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Maria Clara Silva"
                    className="w-full bg-[#0E0C0C] border border-[#6D625B]/50 text-[#F2EADF] text-sm pl-10 pr-3.5 py-3 rounded-sm focus:border-[#C19A55] focus:outline-none placeholder:text-[#F2EADF]/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#F2EADF]/80 font-medium mb-1.5">
                  WhatsApp com DDD *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#C19A55] absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-[#0E0C0C] border border-[#6D625B]/50 text-[#F2EADF] text-sm pl-10 pr-3.5 py-3 rounded-sm focus:border-[#C19A55] focus:outline-none placeholder:text-[#F2EADF]/40"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#F2EADF]/80 font-medium mb-1.5">
                E-mail para Confirmação
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#C19A55] absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="w-full bg-[#0E0C0C] border border-[#6D625B]/50 text-[#F2EADF] text-sm pl-10 pr-3.5 py-3 rounded-sm focus:border-[#C19A55] focus:outline-none placeholder:text-[#F2EADF]/40"
                />
              </div>
            </div>

            {/* Date & Period */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#F2EADF]/80 font-medium mb-1.5">
                  Data de Preferência
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#0E0C0C] border border-[#6D625B]/50 text-[#F2EADF] text-sm p-3 rounded-sm focus:border-[#C19A55] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#F2EADF]/80 font-medium mb-1.5">
                  Período Preferido
                </label>
                <select
                  value={period}
                  onChange={(e) => setPeriod(e.target.value as any)}
                  className="w-full bg-[#0E0C0C] border border-[#6D625B]/50 text-[#F2EADF] text-sm p-3.5 rounded-sm focus:border-[#C19A55] focus:outline-none"
                >
                  <option value="manha" className="bg-[#211D1C]">Manhã (08h às 12h)</option>
                  <option value="tarde" className="bg-[#211D1C]">Tarde (13h às 17h)</option>
                  <option value="noite" className="bg-[#211D1C]">Noite (17h às 20h)</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#F2EADF]/80 font-medium mb-1.5">
                Objetivo Principal ou Observação
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ex: Redução de retenção, descompactação fascial..."
                className="w-full bg-[#0E0C0C] border border-[#6D625B]/50 text-[#F2EADF] text-sm p-3 rounded-sm focus:border-[#C19A55] focus:outline-none placeholder:text-[#F2EADF]/40"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full bg-[#C19A55] text-[#0E0C0C] font-semibold text-xs sm:text-sm uppercase tracking-wider py-4 rounded-sm hover:bg-[#9B7138] hover:text-[#F2EADF] transition-all flex items-center justify-center gap-2 cursor-pointer glow-champagne"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirmar & Enviar para a Recepção</span>
              </button>
              <p className="text-center text-[11px] text-[#F2EADF]/60 mt-2 font-light">
                Atendimento sigiloso. Nossa concierge entrará em contato via WhatsApp.
              </p>
            </div>
          </form>
        ) : (
          /* Confirmation State */
          <div className="p-8 text-center space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#C19A55]/15 border border-[#C19A55] flex items-center justify-center text-[#C19A55] mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="font-playfair text-2xl sm:text-3xl text-[#F2EADF] font-bold">
                Solicitação de Avaliação Enviada!
              </h4>
              <p className="text-sm text-[#F2EADF]/80 font-light max-w-md mx-auto">
                Obrigado, <strong className="text-[#F2EADF]">{name}</strong>. Sua solicitação para o protocolo <strong className="text-[#C19A55]">{currentSelected.name}</strong> foi recebida com sucesso pelo Jenefer Viana Studio.
              </p>
            </div>

            <div className="bg-[#0E0C0C] border border-[#6D625B]/40 p-4 rounded-sm text-left max-w-md mx-auto text-xs space-y-1.5 text-[#F2EADF]/80">
              <p><strong className="text-[#F2EADF]">Data Solicitada:</strong> {date || 'A combinar'}</p>
              <p><strong className="text-[#F2EADF]">Período:</strong> {period === 'manha' ? 'Manhã' : period === 'tarde' ? 'Tarde' : 'Noite'}</p>
              <p><strong className="text-[#F2EADF]">WhatsApp:</strong> {phone}</p>
            </div>

            <button
              onClick={handleReset}
              className="bg-[#C19A55] text-[#0E0C0C] font-semibold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-sm hover:bg-[#9B7138] hover:text-[#F2EADF] transition-colors cursor-pointer glow-champagne"
            >
              Concluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
