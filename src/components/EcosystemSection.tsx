import React, { useState } from 'react';
import { Sparkles, GraduationCap, Building2, FlaskConical, CheckCircle2, ArrowRight, Award, Users, Star } from 'lucide-react';
import { BrandSymbol } from './BrandSymbol';

interface EcosystemSectionProps {
  onOpenBooking: () => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'clinica' | 'academy' | 'metodo'>('clinica');

  return (
    <section id="ecossistema" className="relative py-24 md:py-32 bg-[#0E0C0C] border-t border-[#6D625B]/20">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-radial from-[#C19A55]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <BrandSymbol className="w-4 h-4" color="#C19A55" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C19A55]">
              O Ecossistema Jenefer Viana Studio
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#F2EADF] leading-tight mb-6">
            Mais que um studio: um centro de transformação e formação de elite.
          </h2>
          <p className="font-montserrat text-sm sm:text-base text-[#F2EADF]/80 leading-relaxed font-light">
            Da excelência no acolhimento ao treinamento de profissionais que lideram a estética no Brasil e no exterior.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#181515] p-1.5 rounded-full border border-[#6D625B]/30 inline-flex flex-wrap gap-1 max-w-full shadow-lg">
            <button
              onClick={() => setActiveTab('clinica')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'clinica'
                  ? 'bg-[#C19A55] text-[#0E0C0C] shadow-md'
                  : 'text-[#F2EADF]/70 hover:text-[#F2EADF]'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>O Studio & Atmosfera</span>
            </button>

            <button
              onClick={() => setActiveTab('academy')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'academy'
                  ? 'bg-[#C19A55] text-[#0E0C0C] shadow-md'
                  : 'text-[#F2EADF]/70 hover:text-[#F2EADF]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Mentoria & Formação</span>
            </button>

            <button
              onClick={() => setActiveTab('metodo')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'metodo'
                  ? 'bg-[#C19A55] text-[#0E0C0C] shadow-md'
                  : 'text-[#F2EADF]/70 hover:text-[#F2EADF]'
              }`}
            >
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Método & Biomecânica</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Studio & Atmosfera (Page 10 & 13 Brand Manual) */}
        {activeTab === 'clinica' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#C19A55]">
                <Building2 className="w-4 h-4 text-[#C19A55]" />
                A marca vira ambiente
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-[#F2EADF]">
                Privacidade, elegância e dedicação exclusiva a você.
              </h3>
              <p className="font-montserrat text-sm sm:text-base text-[#F2EADF]/80 font-light leading-relaxed">
                Cada detalhe no Jenefer Viana Studio traduz acolhimento, precisão e uma presença que permanece na memória. Metal champagne, pedra mineral escura, vidro fumê e luz quente indireta compõem um refúgio exclusivo de autocuidado.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  'Avaliação bioimpedância e morfologia individualizada',
                  'Atendimento 1 a 1 com hora marcada rigorosa e sem espera',
                  'Linha de cuidados pós-sessão e robes em tecido acetinado',
                  'Bebidas funcionais, infusões relaxantes e concierge VIP'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#F2EADF]/85 font-light">
                    <div className="w-4 h-4 rounded-[4px] bg-[#C19A55]/15 border border-[#C19A55]/40 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-[#C19A55]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#C19A55] text-[#0E0C0C] text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-3.5 rounded-full hover:bg-[#9B7138] hover:text-[#F2EADF] transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Conhecer o Studio Pessoalmente</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-[15px] overflow-hidden border border-[#6D625B]/30 shadow-2xl bg-[#181515]">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"
                  alt="Espaço VIP Jenefer Viana Studio"
                  className="w-full h-[400px] sm:h-[460px] object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0C] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-5 left-5 right-5 bg-[#181515]/95 backdrop-blur-md p-4 rounded-[12px] border border-[#C19A55]/30">
                  <p className="text-xs font-semibold text-[#F2EADF] uppercase tracking-wider">
                    Santuário de Bem-Estar Corporal
                  </p>
                  <p className="text-[11px] text-[#C19A55] mt-0.5 font-light">
                    Metal champagne · Luz indireta · Parede mineral · Toque sensorial
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Academy & Mentoria */}
        {activeTab === 'academy' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#C19A55]">
                <GraduationCap className="w-4 h-4 text-[#C19A55]" />
                Formação Profissional de Alto Padrão
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-[#F2EADF]">
                Mentoria & Cursos para Esteticistas de Sucesso
              </h3>
              <p className="font-montserrat text-sm sm:text-base text-[#F2EADF]/80 font-light leading-relaxed">
                Jenefer Viana compartilha os segredos que a tornaram uma das profissionais mais valorizadas do país. Domine a massagem autoral, proteja suas articulações com biomecânica correta e aprenda a lotar a sua agenda com clientes que valorizam o seu trabalho.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-[#181515] p-4 rounded-[12px] border border-[#6D625B]/30">
                  <p className="font-playfair text-2xl text-[#C19A55] font-bold">+800</p>
                  <p className="text-xs text-[#F2EADF]/70 font-light">Alunas Formadas</p>
                </div>
                <div className="bg-[#181515] p-4 rounded-[12px] border border-[#6D625B]/30">
                  <p className="font-playfair text-2xl text-[#C19A55] font-bold">100%</p>
                  <p className="text-xs text-[#F2EADF]/70 font-light">Método Prático & Validado</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {[
                  'Imersões presenciais VIP no Studio (Vagas limitadas)',
                  'Módulo completo de biomecânica corporal do terapeuta',
                  'Estratégias de vendas de pacotes de alto ticket e posicionamento de marca',
                  'Certificado de Especialista Reconhecido e comunidade de alunas'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#F2EADF]/85 font-light">
                    <div className="w-4 h-4 rounded-[4px] bg-[#C19A55]/15 border border-[#C19A55]/40 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-[#C19A55]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20a%20Mentoria%20e%20Cursos%20da%20Jenefer%20Viana!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C19A55] text-[#0E0C0C] text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-3.5 rounded-full hover:bg-[#9B7138] hover:text-[#F2EADF] transition-colors shadow-md"
                >
                  <span>Candidatar-se à Próxima Turma</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-[15px] overflow-hidden border border-[#6D625B]/30 shadow-2xl bg-[#181515]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                  alt="Alunas da Mentoria Jenefer Viana"
                  className="w-full h-[400px] sm:h-[460px] object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0C] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-5 left-5 right-5 bg-[#181515]/95 backdrop-blur-md p-4 rounded-[12px] border border-[#C19A55]/30">
                  <div className="flex items-center gap-2 text-[#C19A55] mb-1">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Jenefer Viana Academy</span>
                  </div>
                  <p className="text-xs text-[#F2EADF] font-light">
                    Treinamentos práticos com turmas reduzidas para acompanhamento minucioso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Método & Biomecânica */}
        {activeTab === 'metodo' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#C19A55]">
                <FlaskConical className="w-4 h-4 text-[#C19A55]" />
                Fundamentação & Método
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-[#F2EADF]">
                Por que o Método Jenefer Viana entrega resultados consistentes?
              </h3>
              <p className="font-montserrat text-sm sm:text-base text-[#F2EADF]/80 font-light leading-relaxed">
                Ao contrário de manobras que causam dor ou hematomas, nosso método respeita a fisiologia linfática, a descompressão das fáscias e o estímulo térmico localizado.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="bg-[#181515] p-4 rounded-[12px] border border-[#6D625B]/25">
                  <h4 className="font-playfair text-base text-[#C19A55] font-semibold mb-1">
                    1. Descompactação Fascial Não Invasiva
                  </h4>
                  <p className="text-xs text-[#F2EADF]/75 font-light leading-relaxed">
                    Libera o tecido conjuntivo retraído, permitindo que a linfa flua livremente e o tecido adiposo seja mobilizado com delicadeza e precisão.
                  </p>
                </div>

                <div className="bg-[#181515] p-4 rounded-[12px] border border-[#6D625B]/25">
                  <h4 className="font-playfair text-base text-[#C19A55] font-semibold mb-1">
                    2. Cosmecêuticos de Alta Pureza
                  </h4>
                  <p className="text-xs text-[#F2EADF]/75 font-light leading-relaxed">
                    Ativos biocompatíveis encapsulados que permeiam a barreira epidérmica e agem por até 24 horas após a sessão.
                  </p>
                </div>

                <div className="bg-[#181515] p-4 rounded-[12px] border border-[#6D625B]/25">
                  <h4 className="font-playfair text-base text-[#C19A55] font-semibold mb-1">
                    3. Efeito Cumulativo & Seguro
                  </h4>
                  <p className="text-xs text-[#F2EADF]/75 font-light leading-relaxed">
                    O organismo é estimulado a desinchar e manter a resposta fisiológica positiva ao longo dos protocolos.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-[15px] overflow-hidden border border-[#6D625B]/30 shadow-2xl bg-[#181515]">
                <img
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80"
                  alt="Aplicação do método autoral"
                  className="w-full h-[400px] sm:h-[460px] object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0C] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-5 left-5 right-5 bg-[#181515]/95 backdrop-blur-md p-4 rounded-[12px] border border-[#C19A55]/30">
                  <p className="text-xs font-semibold text-[#F2EADF] uppercase tracking-wider">
                    Harmonia Tecidual & Precisão
                  </p>
                  <p className="text-[11px] text-[#C19A55] mt-0.5 font-light">
                    Manobras refinadas para resultados visíveis e sustentáveis
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
