import React, { useState } from 'react';
import { Globe, DollarSign, ArrowRight, Menu, X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Sidebar } from './Sidebar';

interface HeaderProps {
  lang: 'ES' | 'EN';
  toggleLang: () => void;
  currency: 'USD' | 'MXN';
  toggleCurrency: () => void;
  onOpenAdmin: () => void;
  referralCode?: string | null;
  onContactClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, toggleLang, currency, toggleCurrency, onOpenAdmin, referralCode, onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[#030711]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between gap-2">
          
          {/* Logo y Menu Trigger */}
          <div className="flex items-center gap-2 md:gap-6">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              aria-label={lang === 'ES' ? 'Abrir menú de navegación' : 'Open navigation menu'}
            >
              <Menu size={24} className="md:w-7 md:h-7" />
            </button>
            
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 md:gap-4 cursor-pointer group"
              role="link"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-transform group-hover:scale-110">
                 <span className="text-white font-black text-lg md:text-xl tracking-tighter">N</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-poppins font-black text-sm md:text-lg tracking-[-0.05em] text-white uppercase flex items-center">
                  <span className="text-blue-500 mr-1 md:mr-2">STUDIO</span>NEXORA
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                   <CheckCircle2 size={8} className="text-amber-500" />
                   <span className="text-[8px] font-black text-amber-500 uppercase tracking-[0.2em]">
                     English Proficiency
                   </span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions - Ahora visibles en móvil */}
          <div className="flex items-center gap-1.5 md:gap-4">
            {/* Admin Secret Button (Solo visible para el socio) */}
            <button 
              onDoubleClick={onOpenAdmin}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white/5 hover:text-blue-500/40 transition-colors group relative"
              title="Admin Access"
            >
              <ShieldCheck size={14} className="md:w-4 md:h-4" />
            </button>

            {/* Currency Toggle - Compacto en móvil */}
            <button 
              onClick={toggleCurrency}
              className="flex items-center gap-1 md:gap-2 px-2.5 py-2 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-lg md:rounded-xl text-[9px] md:text-[11px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-all animate-flash-elite"
            >
              <DollarSign size={14} className="text-blue-500 md:w-[18px] md:h-[18px]" />
              <span className="hidden xs:inline">$</span> {currency}
            </button>

            {/* Lang Toggle - Compacto en móvil */}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1 md:gap-2 px-2.5 py-2 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-lg md:rounded-xl text-[9px] md:text-[11px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-all animate-flash-elite"
            >
              <Globe size={14} className="text-blue-500 md:w-[18px] md:h-[18px]" />
              {lang}
            </button>

            {/* Launch Button - Ajustado para móvil */}
            <button 
              onClick={onContactClick}
              className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-8 md:py-3.5 bg-blue-600 text-white text-[9px] md:text-[11px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] rounded-lg md:rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 group ml-1 md:ml-0"
            >
              <span className="hidden xs:inline">{lang === 'ES' ? 'ESTRENAR' : 'LAUNCH'}</span>
              <span className="xs:hidden">{lang === 'ES' ? 'GO' : 'GO'}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform md:w-4 md:h-4" />
            </button>
          </div>
        </div>
      </header>

      <Sidebar 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        lang={lang} 
        currency={currency}
        toggleLang={toggleLang}
        toggleCurrency={toggleCurrency}
      />
    </>
  );
};