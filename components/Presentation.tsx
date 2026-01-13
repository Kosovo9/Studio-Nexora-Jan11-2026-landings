import React from 'react';
import { Smartphone, Zap, Globe, Camera, PenTool, LayoutTemplate, ArrowRight } from 'lucide-react';
import { ORIGINAL_MXN, CURRENCY_MXN, ORIGINAL_USD, CURRENCY_USD } from '../constants';

interface PresentationProps {
  lang: 'ES' | 'EN';
  currency: 'USD' | 'MXN';
  referralCode?: string | null;
  onReserveClick?: () => void;
}

export const Presentation: React.FC<PresentationProps> = ({ lang, currency, onReserveClick }) => {
  const original = currency === 'USD' ? `$${ORIGINAL_USD}` : `$${ORIGINAL_MXN}`;
  const promo = currency === 'USD' ? `$${CURRENCY_USD}` : `$${CURRENCY_MXN}`;

  const includes = [
    { icon: <LayoutTemplate size={22} />, text: lang === 'ES' ? '7  Módulos  de  Conversión  Elite' : '7  Elite  Conversion  Modules' },
    { icon: <Globe size={22} />, text: lang === 'ES' ? 'Tecnología  Dual  Identity  (ES/EN)' : 'Dual  Identity  Tech  (ES/EN)' },
    { icon: <Smartphone size={22} />, text: lang === 'ES' ? 'Arquitectura  Adaptive  Ultra' : 'Adaptive  Ultra  Architecture' },
    { icon: <Zap size={22} />, text: lang === 'ES' ? 'Core  Nexora  Flash  Load' : 'Nexora  Flash  Load  Core' },
    { icon: <Camera size={22} />, text: lang === 'ES' ? 'Dinámica  Visual  Cromática' : 'Chromatic  Visual  Dynamics' },
    { icon: <PenTool size={22} />, text: lang === 'ES' ? 'Copywriting  de  Alto  Valor' : 'High-Value  Copywriting' },
  ];

  return (
    <section id="presentation" className="py-24 bg-[#050a14] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10 reveal">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-[0.3em] border border-blue-500/20 uppercase">
              {lang === 'ES' ? 'Anatomía  de  tu  Éxito' : 'Anatomy  of  your  Success'}
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-[2.5]">
              {lang === 'ES' ? `Ingeniería  de  ${original}` : `${original}  Engineering`} <br />
              <span className="text-blue-500">
                {lang === 'ES' ? `por  solo  ${promo}.00` : `for  only  ${promo}.00`}
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {includes.map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-6.5 glass rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 min-h-[90px]">
                  <div className="text-blue-400 shrink-0">{item.icon}</div>
                  <span className="text-white text-[12px] font-black uppercase tracking-widest leading-tight">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-blue-600/5 rounded-3xl border border-blue-500/20 flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-1">
                <p className="text-blue-500 font-black text-2xl">70%  OFF</p>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">{lang === 'ES' ? 'Cupos  Limitados' : 'Limited  Spots'}</p>
              </div>
              <button 
                onClick={onReserveClick}
                className="px-10 py-5 bg-white text-black font-black rounded-xl text-xs uppercase tracking-widest btn-tactile flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-xl"
              >
                {lang === 'ES' ? 'Apartar  Proyecto' : 'Reserve  Project'}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative reveal" style={{ transitionDelay: '200ms' }}>
             <div className="grid grid-cols-12 grid-rows-12 gap-4 h-[550px] w-full">
                <div className="col-span-8 row-span-8 rounded-3xl overflow-hidden border border-white/10 group">
                   <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                </div>
                <div className="col-span-4 row-span-5 col-start-9 row-start-1 rounded-3xl overflow-hidden border border-white/10">
                   <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-4 row-span-7 col-start-9 row-start-6 rounded-3xl overflow-hidden border border-white/10">
                   <img src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="col-span-8 row-span-4 col-start-1 row-start-9 rounded-3xl overflow-hidden border border-white/10">
                   <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
                </div>
             </div>
             <div className="absolute -bottom-4 -right-4 glass px-8 py-5 rounded-2xl border border-blue-500/50 z-20 shadow-2xl">
                <p className="text-white font-black text-xl leading-none">NEXORA  ELITE</p>
                <p className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">PARTNER  CERTIFIED</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}