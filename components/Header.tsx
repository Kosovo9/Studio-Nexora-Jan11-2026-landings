
import React, { useState } from 'react';
import { Globe, DollarSign, ArrowRight, Menu, X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';
import { Sidebar } from './Sidebar';

interface HeaderProps {
  lang: 'ES' | 'EN';
  toggleLang: () => void;
  currency: 'USD' | 'MXN';
  toggleCurrency: () => void;
  onOpenAdmin: () => void;
  referralCode?: string | null;
}

export const Header: React.FC<HeaderProps> = ({ lang, toggleLang, currency, toggleCurrency, onOpenAdmin, referralCode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const baseMessage = lang === 'ES' 
    ? "Hola Nexora! Me interesa el paquete Socio Nexora." 
    : "Hi Nexora! I'm interested in the Socio Nexora pack.";
  
  const fullMessage = referralCode 
    ? `${baseMessage} REF: ${referralCode}` 
    : baseMessage;
  
  const waLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(fullMessage)}`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[#030711]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-8 h-24 flex items-center justify-between">
          
          {/* Logo y Menu Trigger */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <Menu size={28} />
            </button>
            
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-4 cursor-pointer group"
            >
              {/* LOGO ORIGINAL RESTAURADO */}
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-transform group-hover:scale-110">
                 <span className="text-white font-black text-xl tracking-tighter">N</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-poppins font-black text-lg tracking-[-0.05em] text-white uppercase flex items-center">
                  <span className="text-blue-500 mr-2">STUDIO</span>NEXORA
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                   <CheckCircle2 size={10} className="text-amber-500" />
                   <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.22em] drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]">
                     English Proficiency Certified
                   </span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onDoubleClick={onOpenAdmin}
              className="w-10 h-10 flex items-center justify-center text-white/5 hover:text-blue-500/20 transition-colors"
              title="Admin Access (Double Click)"
            >
              <ShieldCheck size={16} />
            </button>

            <button 
              onClick={toggleCurrency}
              className="header-pill hidden lg:flex"
            >
              <DollarSign size={20} className="text-blue-500" />
              $ {currency}
            </button>
            <button 
              onClick={toggleLang}
              className="header-pill hidden md:flex"
            >
              <Globe size={20} className="text-blue-500" />
              {lang}
            </button>
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3.5 bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 group"
            >
              {lang === 'ES' ? 'CONTACTO' : 'CONTACT'}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      <Sidebar 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        lang={lang} 
      />
    </>
  );
};
