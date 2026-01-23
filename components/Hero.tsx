
import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Calendar } from 'lucide-react';
import { DOMAIN_START_MXN, DOMAIN_START_USD } from '../constants';

interface HeroProps {
  lang: 'ES' | 'EN';
  currency: 'USD' | 'MXN';
  onLaunchClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, currency, onLaunchClick }) => {
  const price = currency === 'MXN' ? "2,999" : "165";
  
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-10 px-6 overflow-hidden bg-transparent">
      {/* El fondo ahora es gestionado globalmente por App.tsx */}
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        <div className="reveal mb-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#c5a059]/40 bg-black/70 backdrop-blur-2xl">
            <Calendar size={12} className="text-[#c5a059]" />
            <span className="text-[10px] font-black tracking-[0.4em] text-[#c5a059] uppercase">
              {lang === 'ES' ? 'INGENIERÍA DIGITAL 2026' : '2026 DIGITAL ENGINEERING'}
            </span>
          </div>
        </div>

        <h1 className="reveal text-white mb-8 leading-[1.1] tracking-tighter max-w-5xl mx-auto">
          <span className="block text-2xl md:text-5xl font-light italic mb-4 luxury-serif text-slate-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {lang === 'ES' 
              ? 'Multiplica tus ventas con' 
              : 'Multiply your sales with'}
          </span>
          <span className="block text-4xl md:text-8xl font-black uppercase text-gold-luxury leading-none drop-shadow-[0_15px_45px_rgba(0,0,0,0.9)]">
            {lang === 'ES' 
              ? 'ESTATUS Y PODER DIGITAL' 
              : 'DIGITAL STATUS & POWER'}
          </span>
        </h1>

        <p className="reveal text-slate-100 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-semibold drop-shadow-[0_4px_12px_rgba(0,0,0,1)] leading-relaxed">
          {lang === 'ES' 
            ? 'Creamos activos digitales de alto impacto que proyectan autoridad global desde el primer segundo.' 
            : 'We create high-impact digital assets that project global authority from the very first second.'}
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
          <button 
            onClick={onLaunchClick}
            className="btn-gold px-14 py-6 shadow-[0_20px_60px_rgba(197,160,89,0.4)] flex items-center gap-5 text-[11px] tracking-[0.25em]"
          >
            {lang === 'ES' ? 'ADQUIRIR SISTEMA ELITE' : 'GET ELITE SYSTEM'}
            <ArrowRight size={18} />
          </button>
          
          <div className="flex items-center gap-4 text-[10px] font-black text-white uppercase tracking-[0.2em] bg-black/40 border border-white/20 px-8 py-3 backdrop-blur-md rounded-lg shadow-2xl">
            <CheckCircle2 size={18} className="text-[#c5a059]" />
            {lang === 'ES' ? 'ENTREGA GARANTIZADA' : 'GUARANTEED DELIVERY'}
          </div>
        </div>

        <div className="reveal flex flex-col items-center">
           <div className="flex items-baseline gap-4">
             <span className="text-slate-400 line-through text-2xl font-light italic">
               {currency === 'MXN' ? '$9,000' : '$500'}
             </span>
             <span className="text-white text-6xl md:text-8xl font-black luxury-serif drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
               ${price}.00 <span className="text-xl text-[#c5a059] font-black uppercase tracking-widest">{currency}</span>
             </span>
           </div>
           <p className="text-[11px] text-white font-black uppercase tracking-[0.4em] mt-8 italic flex items-center gap-4 bg-black/80 backdrop-blur-xl px-8 py-4 rounded-full border border-[#c5a059]/30 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
             <ShieldCheck size={16} className="text-[#c5a059]" />
             {lang === 'ES' 
               ? `MANTENIMIENTO INCLUIDO • PANEL DE CONTROL • PAGO ÚNICO` 
               : `MAINTENANCE INCLUDED • CONTROL PANEL • ONE-TIME PAYMENT`}
           </p>
        </div>
      </div>
    </section>
  );
};
