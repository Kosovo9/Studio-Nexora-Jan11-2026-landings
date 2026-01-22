
import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { EliteParticles } from './EliteParticles';

interface HeroProps {
  lang: 'ES' | 'EN';
  currency: 'USD' | 'MXN';
  onLaunchClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, currency, onLaunchClick }) => {
  const price = currency === 'MXN' ? "2,999" : "165";
  
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden bg-[#030711]">
      <EliteParticles />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/[0.02] blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        <div className="reveal mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <Sparkles size={14} className="text-amber-500" />
            <span className="text-[10px] font-semibold tracking-[0.3em] text-slate-300 uppercase">
              {lang === 'ES' ? 'Boutique de Diseño Digital de Élite' : 'Elite Digital Design Boutique'}
            </span>
          </div>
        </div>

        <h1 className="reveal text-white mb-6 leading-[1.1] tracking-tighter">
          <span className="block text-4xl md:text-6xl font-light italic mb-2 luxury-serif">
            {lang === 'ES' ? 'Tu negocio es grande,' : 'Your business is big,'}
          </span>
          <span className="block text-5xl md:text-8xl font-black uppercase text-metallic-gold">
            {lang === 'ES' ? 'HAZ QUE SE NOTE.' : 'MAKE IT SHOW.'}
          </span>
        </h1>

        <p className="reveal text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          {lang === 'ES' 
            ? 'Deja de perder clientes por respuestas tardías en WhatsApp. Creamos tu identidad digital de lujo en 24h para que proyectes autoridad y cierres ventas en automático.' 
            : 'Stop losing clients to late WhatsApp replies. We create your luxury digital identity in 24h so you project authority and close sales automatically.'}
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center gap-6 mb-16">
          <button 
            onClick={onLaunchClick}
            className="btn-luxury group px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
          >
            {lang === 'ES' ? 'QUIERO MI DISEÑO DE ÉLITE' : 'GET MY ELITE DESIGN'}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <ShieldCheck size={16} className="text-blue-500" />
            {lang === 'ES' ? 'Sin anticipo. Primero lo ves, luego pagas.' : 'No upfront. See it first, then pay.'}
          </div>
        </div>

        <div className="reveal flex flex-col items-center">
           <div className="flex items-baseline gap-2">
             <span className="text-slate-500 line-through text-xl md:text-2xl font-light italic">
               {currency === 'MXN' ? '$9,000' : '$500'}
             </span>
             <span className="text-white text-4xl md:text-7xl font-black tracking-tighter luxury-serif">
               ${price}.00 <span className="text-sm md:text-lg text-blue-500 font-black tracking-widest uppercase">+{currency}</span>
             </span>
           </div>
           <p className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.4em] mt-4 italic">
             {lang === 'ES' ? 'OFERTA LIMITADA PARA NUEVOS SOCIOS' : 'LIMITED OFFER FOR NEW PARTNERS'}
           </p>
        </div>

      </div>
    </section>
  );
};
