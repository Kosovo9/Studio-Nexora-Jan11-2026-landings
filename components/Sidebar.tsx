
import React, { useEffect, useState, useCallback } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ES' | 'EN';
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, lang }) => {
  const [activeSection, setActiveSection] = useState('hero');

  // ELIMINADO REWARDS PARA MODO STANDBY
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
      // Pequeño retraso para permitir que el sidebar empiece a cerrarse antes del scroll
      setTimeout(() => {
        const headerOffset = 96; // Altura del header h-24 = 96px
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
      {/* Overlay con blur elite */}
      <div 
        className={`fixed inset-0 z-[200] bg-[#030711]/90 backdrop-blur-xl transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Panel Lateral Nexora OS */}
      <div className={`fixed top-0 left-0 bottom-0 z-[201] w-[320px] bg-[#030711] border-r border-white/5 transform transition-transform duration-500 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-blue-500 font-black tracking-widest text-[10px] uppercase">Nexora OS Navigation</span>
          </div>
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-white transition-colors" aria-label="Cerrar Menú">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-10 py-16 flex flex-col gap-8 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="group flex items-center justify-between text-left outline-none transition-transform active:scale-95"
            >
              <span className={`text-4xl font-black tracking-tighter transition-all duration-300 uppercase ${activeSection === item.id ? 'text-white translate-x-4' : 'text-slate-700 group-hover:text-slate-300 group-hover:translate-x-2'}`}>
                {item.label}
              </span>
              {activeSection === item.id && (
                <div className="w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,1)]" />
              )}
            </button>
          ))}
        </nav>

        {/* Footer del Sidebar con Status Elite */}
        <div className="p-10 border-t border-white/5 bg-blue-600/5">
           <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 opacity-50">Studio  Status: Direct Sales Mode</p>
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                 <ArrowRight size={18} className="text-white" />
              </div>
              <div>
                <span className="block text-white text-[11px] font-black uppercase tracking-widest leading-none mb-1">Direct Access</span>
                <span className="block text-blue-500 text-[9px] font-bold uppercase tracking-widest">Growth Phase 1</span>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};
