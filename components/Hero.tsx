import React from 'react';
import { Zap, Lightbulb, MessageSquare } from 'lucide-react';

interface HeroProps {
  lang: 'ES' | 'EN';
  currency: 'USD' | 'MXN';
}

export const Hero: React.FC<HeroProps> = ({ lang, currency }) => {
  const priceMain = currency === 'MXN' ? "2,999" : "165";
  const originalPriceValue = currency === 'MXN' ? "9,000.00" : "500.00";
  
  // Textos dinámicos para el timer
  const promoText = lang === 'ES' 
    ? 'LANZAMIENTO: 12/01/2026 • FINALIZA: 19/01/2026 (7 DÍAS ÚNICAMENTE)'
    : 'LAUNCH: 01/12/2026 • ENDS: 01/19/2026 (7 DAYS ONLY)';
  
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-[#030711]">
      {/* Glow ambiental */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/[0.04] blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto text-center relative z-10 flex flex-col items-center w-full">
        
        {/* Status Badge 2026 */}
        <div className="flex justify-center mb-10 reveal">
          <div className="inline-flex items-center gap-5 px-9 py-3 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-xl">
             <div className="flex items-center gap-2.5">
               <span className="text-[10px] font-black tracking-[0.2em] text-white uppercase">9 PROYECTOS EN CURSO</span>
               <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
             </div>
             <div className="w-px h-4 bg-white/20"></div>
             <div className="flex items-center gap-2.5">
               <Lightbulb size={14} className="text-amber-500 animate-pulse" />
               <span className="text-[10px] font-bold text-white tracking-widest uppercase italic">TEMPORADA 2026</span>
             </div>
          </div>
        </div>

        {/* Promo Bar con Efecto de Flasheo */}
        <div className="flex justify-center mb-14 reveal" style={{ transitionDelay: '100ms' }}>
          <div className="px-10 py-4 rounded-full border border-blue-500/20 bg-blue-500/5 flex items-center gap-4 animate-flash-elite">
            <Zap size={14} className="text-blue-500 fill-blue-500/20" />
            <span className="text-blue-400 text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em]">
              {promoText}
            </span>
          </div>
        </div>

        {/* TITULAR MONOLITO */}
        <div className="monolith-text mb-12 w-full">
          <span className="text-white-pure reveal" style={{ transitionDelay: '300ms' }}>
            {lang === 'ES' ? 'ESTRENA TU' : 'LAUNCH YOUR'}
          </span>
          <span className="text-metallic-gold reveal" style={{ transitionDelay: '500ms' }}>
            {lang === 'ES' ? 'LANDING ELITE' : 'ELITE LANDING'}
          </span>
        </div>

        {/* ÁREA DE PRECIOS */}
        <div className="flex flex-col items-center w-full">
          
          {/* Valor Real Tachado */}
          <div className="reveal mb-8 flex justify-center w-full" style={{ transitionDelay: '700ms' }}>
            <span className="luxury-strike text-slate-500 text-lg md:text-2xl font-black italic tracking-tighter opacity-60 uppercase leading-none block">
              {lang === 'ES' ? `VALOR REAL: $${originalPriceValue} +${currency}` : `REAL VALUE: $${originalPriceValue} +${currency}`}
            </span>
          </div>
          
          {/* Subtexto Informativo */}
          <div className="reveal mb-2" style={{ transitionDelay: '850ms' }}>
            <p className="text-[10px] md:text-xs text-slate-500 font-black tracking-[0.4em] uppercase opacity-80">
              {lang === 'ES' ? 'Precio Exclusivo Socio Nexora' : 'Socio Nexora Exclusive Price'}
            </p>
          </div>
          
          {/* BLOQUE DE PRECIO MONUMENTAL */}
          <div className="reveal w-full flex justify-center items-center" style={{ transitionDelay: '1000ms' }}>
            <div className="flex items-center justify-center">
              <div className="flex items-center overflow-visible mr-4 md:mr-10">
                <span className="text-metallic-gold font-black text-2xl md:text-5xl opacity-80 -translate-y-6 md:-translate-y-12">$</span>
                <span className="text-slate-700 font-light text-3xl md:text-7xl ml-2 md:ml-4 -translate-y-4 md:-translate-y-8 italic">/</span>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-metallic-gold font-black !leading-[0.85] text-[5.5rem] md:text-[11.5rem] tracking-tighter drop-shadow-[0_0_60px_rgba(234,179,8,0.4)]">
                  {priceMain}.00
                </h2>
              </div>
              <div className="flex items-center overflow-visible ml-4 md:ml-10">
                <span className="text-slate-500/30 font-black text-xl md:text-5xl translate-y-4 md:translate-y-8 tracking-tighter uppercase">+{currency}</span>
              </div>
            </div>
          </div>

          {/* BADGE BILINGÜE - 25% MÁS GRANDE */}
          <div className="mt-10 reveal flex flex-col items-center gap-4" style={{ transitionDelay: '1100ms' }}>
             <div className="flex items-center gap-4 px-8 py-3.5 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-sm animate-flash-elite">
                <MessageSquare size={18} className="text-blue-500" />
                <span className="text-[13px] font-black text-white uppercase tracking-[0.25em]">
                  Bilingual Mastery: English Spoken & Written
                </span>
             </div>
             <p className="text-[11px] text-slate-600 font-bold uppercase tracking-widest italic opacity-60">
                {lang === 'ES' ? 'Comunicación global sin fronteras' : 'Global communication without borders'}
             </p>
          </div>

          {/* Badge de Oferta Temporada 2026 */}
          <div className="mt-12 reveal" style={{ transitionDelay: '1200ms' }}>
             <div className="px-8 py-3 bg-blue-600/10 border border-blue-500/30 rounded-2xl backdrop-blur-md flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]"></div>
                <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.4em]">
                  70% OFF SEASON 2026 • LIMITED SPOTS
                </span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};