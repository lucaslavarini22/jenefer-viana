import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Objective, ObjectiveItem } from './components/Objective';
import { Ecosystem } from './components/Ecosystem';
import { Inspiration } from './components/Inspiration';
import { Contact } from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedObjective, setSelectedObjective] = useState<ObjectiveItem | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const contactEl = document.getElementById('contato');
      const inspiracoesEl = document.getElementById('inspiracoes');
      const ecosystemEl = document.getElementById('ecossistema');
      const objectiveEl = document.getElementById('objetivo');
      const aboutEl = document.getElementById('sobre');
      
      const scrollPos = window.innerHeight * 0.45;

      if (contactEl && contactEl.getBoundingClientRect().top <= scrollPos) {
        setActiveSection('contato');
      } else if (inspiracoesEl && inspiracoesEl.getBoundingClientRect().top <= scrollPos) {
        setActiveSection('inspiracoes');
      } else if (ecosystemEl && ecosystemEl.getBoundingClientRect().top <= scrollPos) {
        setActiveSection('ecossistema');
      } else if (objectiveEl && objectiveEl.getBoundingClientRect().top <= scrollPos) {
        setActiveSection('objetivo');
      } else if (aboutEl && aboutEl.getBoundingClientRect().top <= scrollPos) {
        setActiveSection('sobre');
      } else {
        setActiveSection('inicio');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectObjective = (item: ObjectiveItem) => {
    setSelectedObjective(item);
  };

  return (
    <div className="min-h-[100svh] bg-[#0E0C0C] text-[#F2EADF] flex flex-col selection:bg-[#C19A55]/30 selection:text-[#F2EADF] overflow-x-hidden scroll-smooth">
      {/* Header Navigation (Desktop & Mobile) */}
      <Header activeSection={activeSection} />

      {/* Main Sections Flow */}
      <main className="flex-1 w-full flex flex-col">
        {/* Seção 01 — Capa / Hero */}
        <Hero />

        {/* Seção 02 — Sobre */}
        <About />

        {/* Seção 03 — Objetivo */}
        <Objective onSelectObjective={handleSelectObjective} />

        {/* Seção 04 — Ecossistema */}
        <Ecosystem selectedObjective={selectedObjective} />

        {/* Seção 05 — Inspirações */}
        <Inspiration />

        {/* Seção 06 — Contato */}
        <Contact />
      </main>
    </div>
  );
}
