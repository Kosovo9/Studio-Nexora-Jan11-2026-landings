
import React, { useEffect, useState, useCallback } from 'react';
import { X, ArrowRight, Globe, DollarSign, Settings } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ES' | 'EN';
  currency: 'USD' | 'MXN';
  toggleLang: () => void;
  toggleCurrency: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, lang, currency, toggleLang, toggleCurrency }) => {
  const [activeSection, setActiveSection] = useState('hero');

  const menuItems = [
    { id: 'hero', label: lang === 'ES' ? 'INICIO' : 'HOME' },
    { id: 'portfolio', label: lang === 'ES' ? 'PORTAFOLIO' : 'PORTFOLIO' },
    { id: 'faq', label: lang === 'ES' ? 'AYUDA' : 'HELP' },
  ];

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 150;
    
    for (const item of menuItems) {
      const section = document.getElementById(item.id);
      if (section) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(item.id);
          break;
        }
      }
    }
  }, [lang]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNav = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      onClose();
      setTimeout(() => {
        const headerOffset = 96;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <>
      <div 
        className={`fixed inset-0 z-[200] bg-[#030711]/90 backdrop-blur-xl transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed top-0 left-0 bottom-0 z-[201] w-[300px] bg-[#030711] border-r border-white/5 transform transition-transform duration-500 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Header - Refinado */}
        <div className="p-6 flex items-center justify-between border-b border-white/5 bg-white/[0.01]">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-blue-500 font-black tracking-[0.25em] text-[9px] uppercase">Nexora OS Navigation</span>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-white transition-colors bg-white/5 rounded-lg border border-white/5" aria-label="Cerrar Menú">
            <X size={16} />
          </button>
        </div>

        {/* Navegación - Reducida un 25% para mayor elegancia (text-base md:text-lg) */}
        <nav className="flex-1 px-8 py-10 flex flex-col gap-6 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="group flex items-center justify-between text-left outline-none transition-transform active:scale-95 py-1"
            >
              <span className={`text-base md:text-lg font-black tracking-tighter transition-all duration-300 uppercase ${activeSection === item.id ? 'text-white translate-x-2' : 'text-slate-600 group-hover:text-slate-300 group-hover:translate-x-1'}`}>
                {item.label}
              </span>
              {activeSection === item.id && (
                <div className="w-1 h-1 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
              )}
            </button>
          ))}
        </nav>

        {/* Ajustes de Sesión */}
        <div className="px-8 py-8 bg-white/[0.02] border-t border-white/5">
           <div className="flex items-center gap-2 mb-5">
              <Settings size={12} className="text-blue-500" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{lang === 'ES' ? 'AJUSTES DE SESIÓN' : 'SESSION SETTINGS'}</span>
           </div>
           <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={toggleCurrency}
                className="flex items-center justify-center gap-2.5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white uppercase tracking-widest hover:bg-blue-600/10 transition-all active:scale-95"
              >
                <DollarSign size={14} className="text-blue-500" />
                {currency}
              </button>
              <button 
                onClick={toggleLang}
                className="flex items-center justify-center gap-2.5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white uppercase tracking-widest hover:bg-blue-600/10 transition-all active:scale-95"
              >
                <Globe size={14} className="text-blue-500" />
                {lang}
              </button>
           </div>
        </div>

        {/* Footer Sidebar */}
        <div className="p-8 border-t border-white/5 bg-blue-600/5">
           <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform">
                 <ArrowRight size={16} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="block text-white text-[10px] font-black uppercase tracking-[0.15em] leading-tight mb-0.5">Direct Sales</span>
                <span className="block text-blue-500 text-[9px] font-bold uppercase tracking-[0.2em]">Growth Mode</span>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};
