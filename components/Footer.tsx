
import React from 'react';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { REFERENCE_LANDING_LINK, CURRENCY_MXN, CURRENCY_USD } from '../constants';

interface FooterProps {
  lang: 'ES' | 'EN';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const qrDemo = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(REFERENCE_LANDING_LINK)}&color=ffffff&bgcolor=050a14`;

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="py-20 border-t border-white/5 bg-[#050a14] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {/* LOGO FOOTER ORIGINAL RESTAURADO */}
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                 <span className="text-white font-black text-sm">N</span>
              </div>
              <span className="font-poppins font-bold text-xl tracking-tighter text-white">
                <span className="text-blue-500">STUDIO</span>&nbsp;&nbsp;NEXORA
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              {lang === 'ES' 
                ? 'Artesanos digitales enfocados en la excellence visual y la conversión. Tu éxito es nuestra métrica más importante.' 
                : 'Digital artisans focused on visual excellence and conversion. Your success is our most important metric.'}
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-12">
            <div className="text-center lg:text-right hidden sm:block">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-4">{lang === 'ES' ? 'Ecosistema' : 'Ecosystem'}</h4>
              <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                <li><a href="#hero" onClick={scrollToSection('hero')} className="hover:text-blue-400 transition-colors">{lang === 'ES' ? 'Inicio' : 'Home'}</a></li>
                <li><a href="#portfolio" onClick={scrollToSection('portfolio')} className="hover:text-blue-400 transition-colors">{lang === 'ES' ? 'Portafolio' : 'Portfolio'}</a></li>
                <li><a href="#faq" onClick={scrollToSection('faq')} className="hover:text-blue-400 transition-colors">{lang === 'ES' ? 'Ayuda' : 'Help'}</a></li>
              </ul>
            </div>
            
            {/* Bloque QR */}
            <div className="p-6 glass rounded-[2.5rem] border border-white/5 text-center group hover:border-white/20 transition-all duration-500 max-w-[216px]">
               <img src={qrDemo} alt="QR Demo" className="w-28 h-28 mx-auto rounded-xl mb-3 opacity-50 group-hover:opacity-100 transition-all" />
               <p className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Scann  Demo</p>
            </div>
          </div>
        </div>
        
        {/* NOTA DE VALOR ELITE - SOCIO NEXORA */}
        <div className="mt-20 pt-10 border-t border-white/5 space-y-4">
           <div className="max-w-4xl mx-auto text-center">
             <p className="text-[9px] md:text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] leading-relaxed italic opacity-80">
               {lang === 'ES' 
                ? `Nota: El modelo de referencia 'Oscar Tapia' corresponde al nivel de ingeniería de $${CURRENCY_MXN} MXN en promoción. El ecosistema digital 'Studio Nexora' que estás navegando actualmente integra tecnología de vanguardia y arquitectura dual-core valorada en más de $22,000.00 MXN ($1,200.00 USD).` 
                : `Note: The 'Oscar Tapia' reference model matches the $${CURRENCY_USD} USD promotional engineering level. The 'Studio Nexora' digital ecosystem you are currently browsing integrates cutting-edge technology and dual-core architecture valued at over $1,200.00 USD ($22,000.00 MXN).`}
             </p>
           </div>
           
           <div className="text-center text-[10px] text-slate-500 font-medium tracking-[0.2em] pt-4">
             <p>&copy; 2026 STUDIO  NEXORA.  ELITE  PARTNER  PROGRAM. ALL RIGHTS RESERVED.</p>
           </div>
        </div>
      </div>
    </footer>
  );
};
