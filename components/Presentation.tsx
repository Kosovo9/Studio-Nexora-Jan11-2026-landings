
import React from 'react';
import { ArrowRight, Globe, ShieldCheck, Clock, CheckCircle2, TrendingUp } from 'lucide-react';

interface PresentationProps {
  lang: 'ES' | 'EN';
  currency: 'USD' | 'MXN';
  onReserveClick?: () => void;
}

export const Presentation: React.FC<PresentationProps> = ({ lang, onReserveClick }) => {
  return (
    <section id="transformation" className="py-20 bg-[#030711] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-[#c5a059]/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-2 leading-none">
            {lang === 'ES' ? 'RECOBRA TU' : 'RECLAIM YOUR'}
          </h2>
          <h3 className="text-3xl md:text-6xl font-black text-[#c5a059] uppercase tracking-tighter mb-8 leading-none">
            {lang === 'ES' ? 'TIEMPO Y ESTATUS' : 'TIME AND STATUS'}
          </h3>
          
          <div className="inline-flex items-center gap-4 py-3 px-6 bg-white/5 border border-white/10 rounded-xl mb-8">
            <TrendingUp size={20} className="text-[#c5a059]" />
            <p className="text-white font-bold text-base md:text-xl uppercase tracking-tighter italic">
              {lang === 'ES' 
                ? '¡Ve 10 pasos adelante que tu competencia!' 
                : 'Stay 10 steps ahead of your competition!'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <div className="reveal glass-luxury p-8 border-white/5 text-center group hover:border-[#c5a059]/40 transition-all duration-500">
            <Globe size={32} className="text-[#c5a059] mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-tighter">{lang === 'ES' ? 'Tu Dominio Elite' : 'Your Elite Domain'}</h3>
            <p className="text-white/80 text-sm leading-relaxed font-medium italic">
              {lang === 'ES' ? 'Tu marca lista para el mercado global desde el primer minuto.' : 'Your brand ready for the global market from minute one.'}
            </p>
          </div>
          
          <div className="reveal glass-luxury p-8 border-[#c5a059]/20 bg-[#c5a059]/5 text-center group hover:border-[#c5a059]/60 transition-all duration-500">
            <ShieldCheck size={32} className="text-[#c5a059] mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-tighter">{lang === 'ES' ? 'Acceso al Panel' : 'Panel Access'}</h3>
            <p className="text-white/80 text-sm leading-relaxed font-medium italic">
              {lang === 'ES' ? 'Controla tus fotos y contenido sin depender de programadores.' : 'Control your photos and content without programmers.'}
            </p>
          </div>

          <div className="reveal glass-luxury p-8 border-white/5 text-center group hover:border-[#c5a059]/40 transition-all duration-500">
            <Clock size={32} className="text-[#c5a059] mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-tighter">{lang === 'ES' ? 'Sin Redundancias' : 'No Redundancies'}</h3>
            <p className="text-white/80 text-sm leading-relaxed font-medium italic">
              {lang === 'ES' ? 'Tú solo recibes mensajes de clientes calificados.' : 'You only receive messages from qualified leads.'}
            </p>
          </div>
        </div>

        <div className="reveal text-center">
          <button 
            onClick={onReserveClick}
            className="btn-gold inline-flex items-center gap-6 px-12 py-6 shadow-2xl text-[11px]"
          >
            {lang === 'ES' ? 'ACTIVA TU PRESENCIA 2026' : 'ACTIVATE YOUR 2026 PRESENCE'}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
