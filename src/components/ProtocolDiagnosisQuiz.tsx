import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quiz';
import { PROTOCOLS } from '../data/protocols';
import { Protocol } from '../types';
import { X, ArrowRight, ArrowLeft, CheckCircle2, RotateCcw, Calendar, MessageSquare } from 'lucide-react';
import { BrandSymbol } from './BrandSymbol';

interface ProtocolDiagnosisQuizProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProtocol: (protocol: Protocol) => void;
}

export const ProtocolDiagnosisQuiz: React.FC<ProtocolDiagnosisQuizProps> = ({
  isOpen,
  onClose,
  onSelectProtocol,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (protocolId: string) => {
    const updatedAnswers = { ...answers, [currentStep]: protocolId };
    setAnswers(updatedAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
  };

  // Determine winning recommended protocol
  const getRecommendedProtocol = (): Protocol => {
    const primaryId = answers[0] || 'lipomanual-sculpt';
    const match = PROTOCOLS.find((p) => p.id === primaryId);
    return match || PROTOCOLS[0];
  };

  const recommended = getRecommendedProtocol();

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Olá, Jenefer Viana Studio! Fiz o diagnóstico corporal online no site e meu protocolo recomendado foi o *${recommended.name}*. Gostaria de agendar minha avaliação VIP!`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-lg animate-in fade-in duration-300">
      <div
        className="bg-[#211D1C] border border-[#C19A55]/40 w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-sm shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#6D625B]/30 flex items-center justify-between bg-[#0E0C0C]/70">
          <div className="flex items-center gap-3">
            <BrandSymbol className="w-6 h-6" color="#C19A55" />
            <div>
              <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#F2EADF]">
                Diagnóstico Corporal Exclusivo
              </h3>
              <p className="text-[10px] text-[#C19A55] tracking-widest uppercase font-semibold">
                {isCompleted ? 'Resultado Final' : `Etapa ${currentStep + 1} de ${QUIZ_QUESTIONS.length}`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[#F2EADF]/70 hover:text-[#C19A55] p-2 hover:bg-[#211D1C] rounded-full transition-colors"
            aria-label="Fechar Quiz"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {!isCompleted && (
          <div className="w-full bg-[#0E0C0C] h-1.5">
            <div
              className="bg-[#C19A55] h-full transition-all duration-300 ease-out"
              style={{
                width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%`,
              }}
            />
          </div>
        )}

        {/* Question View */}
        {!isCompleted ? (
          <div className="p-6 sm:p-8 space-y-6 flex-1">
            <div className="space-y-2">
              <h4 className="font-playfair text-xl sm:text-2xl text-[#F2EADF] leading-tight">
                {currentQuestion.question}
              </h4>
              <p className="text-xs sm:text-sm text-[#F2EADF]/80 font-light">
                {currentQuestion.subtitle}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQuestion.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.protocolId)}
                  className="w-full text-left p-4 rounded-sm bg-[#0E0C0C] border border-[#6D625B]/40 hover:border-[#C19A55] hover:bg-[#211D1C] transition-all duration-200 flex items-start justify-between group cursor-pointer"
                >
                  <div className="flex items-start gap-3.5 pr-4">
                    <span className="material-symbols-outlined text-[#C19A55] text-xl mt-0.5 group-hover:scale-110 transition-transform">
                      {opt.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#F2EADF] group-hover:text-[#C19A55] transition-colors">
                        {opt.label}
                      </p>
                      <p className="text-xs text-[#F2EADF]/70 font-light mt-0.5">
                        {opt.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C19A55] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </button>
              ))}
            </div>

            {/* Navigation Footer */}
            {currentStep > 0 && (
              <div className="pt-4 border-t border-[#6D625B]/30 flex justify-start">
                <button
                  onClick={handleBack}
                  className="text-xs uppercase tracking-wider text-[#F2EADF]/70 hover:text-[#C19A55] flex items-center gap-1.5 font-medium cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar à pergunta anterior
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Result View */
          <div className="p-6 sm:p-8 space-y-6 flex-1">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-[#C19A55]/15 border border-[#C19A55]/40 text-[#C19A55] text-xs uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                98% de Compatibilidade Identificada
              </div>
              <h4 className="font-playfair text-2xl sm:text-3xl text-[#F2EADF]">
                Seu Protocolo Ideal é o:
              </h4>
            </div>

            {/* Recommended Protocol Spotlight Card */}
            <div className="bg-[#0E0C0C] border border-[#C19A55]/40 rounded-sm overflow-hidden p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row gap-5 items-center">
                <img
                  src={recommended.image}
                  alt={recommended.name}
                  className="w-full sm:w-36 h-36 object-cover rounded-sm border border-[#6D625B]/40"
                />
                <div className="space-y-1.5 text-center sm:text-left flex-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#C19A55] font-bold bg-[#C19A55]/10 px-2 py-0.5 rounded-sm">
                    {recommended.categoryLabel}
                  </span>
                  <h5 className="font-playfair text-2xl text-[#F2EADF] font-bold">
                    {recommended.name}
                  </h5>
                  <p className="text-xs text-[#C19A55] font-medium">
                    {recommended.tagline}
                  </p>
                  <p className="text-xs text-[#F2EADF]/80 font-light line-clamp-2 pt-1">
                    {recommended.description}
                  </p>
                </div>
              </div>

              {/* Benefits Highlights */}
              <div className="pt-3 border-t border-[#6D625B]/40 space-y-2">
                <p className="text-[11px] uppercase tracking-wider text-[#F2EADF]/80 font-semibold">
                  O que você vai conquistar:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {recommended.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#F2EADF]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C19A55] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onSelectProtocol(recommended);
                }}
                className="w-full bg-[#C19A55] text-[#0E0C0C] font-semibold text-xs sm:text-sm uppercase tracking-wider py-4 rounded-sm hover:bg-[#9B7138] hover:text-[#F2EADF] glow-champagne shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Avaliação com Este Protocolo</span>
              </button>

              <button
                onClick={handleWhatsAppShare}
                className="w-full bg-[#25D366]/20 border border-[#25D366]/50 text-[#F2EADF] hover:bg-[#25D366]/30 font-medium text-xs sm:text-sm uppercase tracking-wider py-3 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Conversar no WhatsApp sobre o Diagnóstico</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full text-center text-xs text-[#F2EADF]/60 hover:text-[#C19A55] py-2 flex items-center justify-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Refazer diagnóstico com outras respostas</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
