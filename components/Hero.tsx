
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { ORIGINAL_USD, ORIGINAL_MXN, CURRENCY_USD, CURRENCY_MXN } from '../constants';

interface HeroProps {
  lang: 'ES' | 'EN';
  currency: 'USD' | 'MXN';
}

export const Hero: React.FC<HeroProps> = ({ lang, currency }) => {
  const priceValue = currency === 'MXN' ? "2,999.00" : "165.00";
  const originalPriceValue = currency === 'MXN' ? "9,000.00" : "500.00";

  const [activeProjects, setActiveProjects] = useState(9);

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-16 pb-12 px-4 overflow-hidden bg-nexora-deep">
      {/* Luz ambiental azul profunda en el fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[200px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto text-center relative z-10 flex flex-col items-center">

        {/* Badge superior - Estilo exacto imagen 2 */}
        <div className="flex justify-center mb-4 reveal">
          <div className="inline-flex items-center gap-4 px-6 py-1.5 bg-[#0a1428]/90 border border-white/10 rounded-full backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black tracking-[0.2em] text-white uppercase">
                {lang === 'ES' ? `${activeProjects} PROYECTOS EN CURSO` : `${activeProjects} PROJECTS IN PROGRESS`}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
            </div>
            <div className="w-px h-3 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Clock size={12} className="text-blue-500" />
              <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase">
                {lang === 'ES' ? 'ÚLTIMA ENTREGA: HACE 3H' : 'LAST DELIVERY: 3H AGO'}
              </span>
            </div>
          </div>
        </div>

        {/* Promo Bar - Estilo exacto imagen 2 */}
        <div className="flex justify-center mb-8 reveal" style={{ transitionDelay: '50ms' }}>
          <div className="px-8 py-2 rounded-full border border-blue-500/20 bg-blue-600/10 flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
            <span className="text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
              {lang === 'ES' ? 'OFERTA SOCIO NEXORA • 7 DÍAS, POR LANZAMIENTO' : 'NEXORA PARTNER OFFER • 7 DAYS, LAUNCH PROMO'}
            </span>
          </div>
        </div>

        {/* TITULAR GIGANTE MONOLÍTICO - EXACTO A REFERENCIA */}
        <div className="mb-10 reveal" style={{ transitionDelay: '100ms' }}>
          <span className="text-huge text-white">
            {lang === 'ES' ? 'ESTRENA TU' : 'LAUNCH YOUR'}
          </span>
          <span className="text-huge text-metallic-gold">
            {lang === 'ES' ? 'LANDING ELITE' : 'ELITE LANDING'}
          </span>
        </div>

        {/* ÁREA DE PRECIOS - RÉPLICA DE COMPOSICIÓN IMAGEN 2 */}
        <div className="flex flex-col items-center gap-6 reveal" style={{ transitionDelay: '150ms' }}>

          {/* Valor Real con Strike Neón */}
          <div className="luxury-strike">
            <span className="text-slate-500 text-2xl md:text-[3rem] font-black italic tracking-tighter opacity-70 uppercase">
              {lang === 'ES' ? `Valor Real: $${originalPriceValue} ${currency}` : `Real Value: $${originalPriceValue} ${currency}`}
            </span>
          </div>

          <div className="flex flex-col items-center">
            {/* Texto Intermedio */}
            <p className="text-2xl md:text-[2.5rem] text-white font-light tracking-tight mb-4">
              {lang === 'ES' ? 'Llévala hoy con ' : 'Get it today with '}
              <span className="text-blue-500 font-black">70% OFF</span>
              {lang === 'ES' ? ' por solo' : ' for only'}
            </p>

            {/* Precio Final Gigante */}
            <p className="text-huge text-metallic-gold leading-none">
              ${priceValue} {currency}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
