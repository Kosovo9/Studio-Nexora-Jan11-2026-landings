
import React, { useState } from 'react';
import { Globe, DollarSign, Menu, X, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface HeaderProps {
  lang: 'ES' | 'EN';
  toggleLang: () => void;
  currency: 'USD' | 'MXN';
  toggleCurrency: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, toggleLang, currency, toggleCurrency }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hero", text: lang === 'ES' ? 'INICIO' : 'HOME' },
    { href: "#presentation", text: lang === 'ES' ? 'PRESENTACIÓN' : 'SHOWCASE' },
    { href: "#portfolio", text: lang === 'ES' ? 'PORTAFOLIO' : 'PORTFOLIO' },
    { href: "#faq", text: lang === 'ES' ? 'PREGUNTAS' : 'FAQ' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-[#050a14]/90 backdrop-blur-3xl border-b border-white/5">
      <div className="max-w-[1600px] mx-auto px-10 h-24 flex items-center justify-between">
        
        {/* Logo - Consistente con el estilo Nexora */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)]">
             <span className="text-white font-black text-2xl tracking-tighter">N</span>
          </div>
          <span className="font-poppins font-black text-xl tracking-tighter text-white uppercase flex items-center">
            <span className="text-blue-500 mr-2">STUDIO</span>NEXORA
          </span>
        </div>

        {/* Desktop Nav - Letras muy juntas y mayúsculas */}
        <nav className="hidden xl:flex items-center gap-14">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 hover:text-white transition-all"
            >
              {link.text}
            </a>
          ))}
        </nav>
        
        {/* Desktop Actions - RÉPLICA EXACTA DE BOTONES PILL */}
        <div className="hidden lg:flex items-center gap-5">
          <button 
            onClick={toggleCurrency}
            className="header-pill"
          >
            <DollarSign size={16} className="text-blue-500" />
            $ {currency}
          </button>
          <button 
            onClick={toggleLang}
            className="header-pill"
          >
            <Globe size={16} className="text-blue-500" />
            {lang}
          </button>
          <a 
            href={WHATSAPP_LINK}
            className="flex items-center gap-3 px-10 py-4 bg-blue-600 text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 group"
          >
            {lang === 'ES' ? 'CONTACTO' : 'CONTACT'}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white"
        >
          {isMobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-24 z-50 bg-[#050a14] transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col p-12 gap-12 text-center">
          <nav className="flex flex-col gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-5xl font-black uppercase tracking-tighter text-white"
              >
                {link.text}
              </a>
            ))}
          </nav>
          <div className="grid grid-cols-2 gap-4">
             <button onClick={toggleCurrency} className="py-8 rounded-full bg-white/5 border border-white/10 text-[14px] font-black text-white uppercase">$ {currency}</button>
             <button onClick={toggleLang} className="py-8 rounded-full bg-white/5 border border-white/10 text-[14px] font-black text-white uppercase">{lang}</button>
          </div>
          <a href={WHATSAPP_LINK} className="w-full py-8 bg-blue-600 text-white font-black text-center rounded-3xl uppercase tracking-[0.2em] text-lg shadow-2xl shadow-blue-500/20">
            {lang === 'ES' ? 'INICIAR PROYECTO' : 'START PROJECT'}
          </a>
        </div>
      </div>
    </header>
  );
};
