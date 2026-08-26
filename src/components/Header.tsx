import React, { useState } from 'react';
import { BrandSymbol } from './BrandSymbol';
import { X } from 'lucide-react';

interface HeaderProps {
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection = 'inicio' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', id: 'inicio', label: 'INÍCIO' },
    { href: '#sobre', id: 'sobre', label: 'SOBRE' },
    { href: '#objetivo', id: 'objetivo', label: 'OBJETIVO' },
    { href: '#ecossistema', id: 'ecossistema', label: 'ECOSSISTEMA' },
    { href: '#inspiracoes', id: 'inspiracoes', label: 'INSPIRAÇÕES' },
    { href: '#contato', id: 'contato', label: 'CONTATO' },
  ];

  return (
    <>
      <header
        id="main-header"
        className="w-full absolute top-0 left-0 z-40 bg-transparent"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-7 pb-5 flex items-center justify-between">
          
          {/* Official Full Brand Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 sm:gap-4 group focus:outline-none transition-opacity hover:opacity-90"
            aria-label="Jenefer Viana Studio"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center shrink-0">
              <BrandSymbol
                className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105"
                color="#C19A55"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-cormorant text-base sm:text-lg md:text-xl tracking-[0.24em] text-[#F2EADF] uppercase font-medium leading-none">
                JENEFER VIANA
              </span>
              <span className="font-montserrat text-[8px] sm:text-[9px] tracking-[0.46em] text-[#C19A55] uppercase font-light mt-1.5 leading-none">
                STUDIO
              </span>
            </div>
          </a>

          {/* Desktop Horizontal Navigation Menu */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-12"
            aria-label="Navegação Principal"
          >
            {navLinks.map((link) => {
              const isActive = link.id === activeSection || (activeSection === '' && link.id === 'inicio');
              return (
                <div key={link.id} className="relative flex flex-col items-center">
                  <a
                    href={link.href}
                    className={`font-montserrat text-[11px] lg:text-[12px] tracking-[0.22em] uppercase transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-[#F2EADF] font-semibold'
                        : 'text-[#F2EADF]/75 hover:text-[#C19A55]'
                    }`}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <span className="absolute -bottom-1.5 w-7 h-[1.5px] bg-[#C19A55] rounded-full transition-all duration-300" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger (MENU text + 2 sleek horizontal bars) */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex items-center gap-2 text-[#C19A55] hover:text-[#F2EADF] transition-colors cursor-pointer py-1.5 px-2 focus:outline-none"
            aria-label="Abrir Menu"
          >
            <span className="font-montserrat text-[11px] tracking-[0.25em] text-[#F2EADF] uppercase font-normal">
              MENU
            </span>
            <div className="flex flex-col gap-1.5 w-6">
              <span className="w-full h-[1.5px] bg-[#C19A55] transition-all" />
              <span className="w-full h-[1.5px] bg-[#C19A55] transition-all" />
            </div>
          </button>
        </div>

        {/* Fine Header Bottom Divider Line (from desktop reference) */}
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C19A55]/30 to-transparent" />
        </div>
      </header>

      {/* Elegant Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-50 bg-[#0E0C0C]/98 backdrop-blur-2xl flex flex-col justify-between px-8 py-10 md:hidden transition-all duration-300 animate-in fade-in"
        >
          {/* Top Bar of Mobile Overlay */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <BrandSymbol className="w-8 h-8" color="#C19A55" />
              <div className="flex flex-col">
                <span className="font-cormorant text-base tracking-[0.22em] text-[#F2EADF] uppercase font-medium">
                  JENEFER VIANA
                </span>
                <span className="font-montserrat text-[8px] tracking-[0.42em] text-[#C19A55] uppercase font-light">
                  STUDIO
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F2EADF]/80 hover:text-[#C19A55] p-2 transition-colors focus:outline-none"
              aria-label="Fechar Menu"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center justify-center space-y-7 my-auto">
            {navLinks.map((link) => {
              const isActive = link.id === activeSection;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-cormorant text-2xl sm:text-3xl tracking-[0.2em] uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-[#C19A55] italic font-semibold'
                      : 'text-[#F2EADF]/85 hover:text-[#C19A55]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Bottom Accent */}
          <div className="flex flex-col items-center gap-3 text-center pb-4">
            <div className="w-10 h-[1px] bg-[#C19A55]/40" />
            <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#6D625B]">
              Estética Corporal & Protocolos Exclusivos
            </p>
          </div>
        </div>
      )}
    </>
  );
};
