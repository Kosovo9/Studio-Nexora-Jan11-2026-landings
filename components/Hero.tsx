import React from 'react';
import { Zap, Lightbulb, ArrowRight } from 'lucide-react';
import { EliteParticles } from './EliteParticles';

interface HeroProps {
  lang: 'ES' | 'EN';
  currency: 'USD' | 'MXN';
  onLaunchClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, currency, onLaunchClick }) => {
  const priceMain = currency === 'MXN' ? "2,999" : "165";
  const originalPriceValue = currency === 'MXN' ? "9,000.00" : "500.00";
  
  const promoText = lang === 'ES' 
    ? 'LANZAMIENTO: 12/01/2026 • FINALIZA: 19/01/2026'
    : 'LAUNCH: 01/12/2026 • ENDS: 01/19/2026';
  
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-start pt-40 pb-16 px-4 overflow-hidden bg-[#030711]">
      <EliteParticles />
      
      {/* Glow ambiental */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/[0.04] blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-[1100px] mx-auto text-center relative z-10 flex flex-col items-center w-full">
        
        {/* Status Badge 2026 */}
        <div className="flex justify-center mb-8 reveal">
          <div className="inline-flex items-center gap-4 px-6 py-2.5 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-xl">
             <div className="flex items-center gap-2">
               <span className="text-[10px] font-black tracking-[0.2em] text-white uppercase">9 PROYECTOS EN CURSO</span>
               <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6]"></div>
             </div>
             <div className="w-px h-3.5 bg-white/20"></div>
             <div className="flex items-center gap-2">
               <Lightbulb size={13} className="text-amber-500 animate-pulse" />
               <span className="text-[10px] font-bold text-white tracking-widest uppercase italic">TEMPORADA 2026</span>
             </div>
          </div>
        </div>

        {/* Promo Bar */}
        <div className="flex justify-center mb-12 reveal" style={{ transitionDelay: '100ms' }}>
          <div className="px-10 py-3.5 rounded-full border border-blue-500/20 bg-blue-500/5 flex items-center gap-3 animate-flash-elite">
            <Zap size={14} className="text-blue-500 fill-blue-500/20" />
            <span className="text-blue-400 text-[11px] md:text-[13px] font-black uppercase tracking-[0.3em]">
              {promoText}
            </span>
          </div>
        </div>

        {/* TITULAR MONOLITO RECTIFICADO EN INDEX.HTML */}
        <div className="monolith-text mb-12 w-full flex flex-col items-center">
          <div className="text-white reveal" style={{ transitionDelay: '300ms' }}>
            {lang === 'ES' ? 'ESTRENA TU' : 'LAUNCH YOUR'}
          </div>
          <div className="text-metallic-gold reveal" style={{ transitionDelay: '500ms' }}>
            {lang === 'ES' ? 'LANDING ELITE' : 'ELITE LANDING'}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="reveal mb-12" style={{ transitionDelay: '600ms' }}>
           <button 
             onClick={onLaunchClick}
             className="group relative px-11 py-5 bg-blue-600 text-white font-black text-[10px] md:text-[12px] uppercase tracking-[0.35em] rounded-[1.8rem] shadow-2xl shadow-blue-600/30 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 border border-white/20"
           >
             {lang === 'ES' ? 'CONFIGURAR Y LANZAR' : 'CONFIGURE & LAUNCH'}
             <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
             <div className="absolute inset-0 rounded-[1.8rem] border-4 border-white/10 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all"></div>
           </button>
        </div>

        {/* ÁREA DE PRECIOS */}
        <div className="flex flex-col items-center w-full">
          <div className="reveal mb-8 flex justify-center w-full" style={{ transitionDelay: '700ms' }}>
            <span className="luxury-strike text-slate-500 text-lg md:text-2xl font-black italic tracking-tighter opacity-60 uppercase leading-none block">
              {lang === 'ES' ? `VALOR REAL: $${originalPriceValue} +${currency}` : `REAL VALUE: $${originalPriceValue} +${currency}`}
            </span>
          </div>
          
          <div className="reveal mb-2" style={{ transitionDelay: '850ms' }}>
            <p className="text-[10px] md:text-[12px] text-slate-500 font-black tracking-[0.4em] uppercase opacity-80">
              {lang === 'ES' ? 'Precio Exclusivo Socio Nexora' : 'Socio Nexora Exclusive Price'}
            </p>
          </div>
          
          <div className="reveal w-full flex justify-center items-center" style={{ transitionDelay: '1000ms' }}>
            <div className="flex items-center justify-center">
              <div className="flex items-center overflow-visible mr-6 md:mr-10">
                <span className="text-metallic-gold font-black text-2xl md:text-5xl opacity-80 -translate-y-8 md:-translate-y-16">$</span>
                <span className="text-slate-700 font-light text-3xl md:text-6xl ml-1 md:ml-4 -translate-y-6 md:-translate-y-12 italic">/</span>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-metallic-gold font-black !leading-[0.8] text-[5rem] md:text-[9.5rem] tracking-tighter drop-shadow-[0_0_60px_rgba(234,179,8,0.4)]">
                  {priceMain}.00
                </h2>
              </div>
              <div className="flex items-center overflow-visible ml-6 md:md-10">
                <span className="text-slate-500/30 font-black text-xl md:text-5xl translate-y-6 md:translate-y-12 tracking-tighter uppercase">+{currency}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};