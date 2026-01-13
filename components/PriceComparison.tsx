import React from 'react';
import { Globe2, TrendingDown, ShieldCheck } from 'lucide-react';
import { CURRENCY_MXN, CURRENCY_USD } from '../constants';

interface PriceComparisonProps {
  lang: 'ES' | 'EN';
  currency: 'USD' | 'MXN';
}

export const PriceComparison: React.FC<PriceComparisonProps> = ({ lang, currency }) => {
  const nexoraPrice = currency === 'USD' ? CURRENCY_USD : CURRENCY_MXN;
  const nexoraLabel = currency === 'USD' ? '+USD' : '+MXN';

  const rows = [
    { 
      region: lang === 'ES' ? 'ESTADOS UNIDOS' : 'UNITED STATES', 
      market: '$2,500 – $5,000' 
    },
    { 
      region: lang === 'ES' ? 'CANADÁ' : 'CANADA', 
      market: '$2,000 – $4,500' 
    },
    { 
      region: lang === 'ES' ? 'EUROPA (EU)' : 'EUROPE (EU)', 
      market: '$1,800 – $4,000' 
    },
    { 
      region: lang === 'ES' ? 'MÉXICO (AGENCIA)' : 'MEXICO (AGENCY)', 
      market: '$800 – $1,500' 
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#030711] relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
           <div className="max-w-xl">
              <h2 className="text-white font-black text-xs uppercase tracking-[0.5em] mb-4 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                {lang === 'ES' ? 'ANÁLISIS DE MERCADO 2026' : '2026 MARKET ANALYSIS'}
              </h2>
              <p className="text-3xl md:text-5xl font-black text-white uppercase leading-none tracking-tighter">
                {lang === 'ES' ? 'VALOR REAL DE TU' : 'REAL VALUE OF YOUR'} <br/>
                <span className="text-blue-500">{lang === 'ES' ? 'INGENIERÍA' : 'ENGINEERING'}</span>
              </p>
           </div>
           <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-xl">
              <TrendingDown className="text-green-500" />
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                {lang === 'ES' ? '90% MÁS ACCESIBLE QUE' : '90% MORE ACCESSIBLE THAN'} <br/>
                {lang === 'ES' ? 'AGENCIAS TRADICIONALES' : 'TRADITIONAL AGENCIES'}
              </p>
           </div>
        </div>

        <div className="glass rounded-[2.5rem] border border-white/5 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative reveal">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.01]">
                <th className="px-10 py-10 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                  {lang === 'ES' ? 'REGIÓN' : 'REGION'}
                </th>
                <th className="px-10 py-10 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                  {lang === 'ES' ? 'PRECIO MERCADO (USD)' : 'MARKET PRICE (USD)'}
                </th>
                <th className="px-10 py-10 text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] text-right">
                  {lang === 'ES' ? 'PRECIO NEXORA (PROMO)' : 'NEXORA PRICE (PROMO)'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((row, idx) => (
                <tr key={idx} className="group hover:bg-white/[0.02] transition-all duration-500">
                  <td className="px-10 py-9">
                    <div className="flex items-center gap-4">
                      <Globe2 size={16} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                      <span className="text-base md:text-xl font-black text-white uppercase tracking-tighter group-hover:translate-x-2 transition-transform">
                        {row.region}
                      </span>
                    </div>
                  </td>
                  <td className="px-10 py-9">
                    <span className="text-base md:text-lg font-bold text-slate-500 italic tracking-tight opacity-80">
                      {row.market}
                    </span>
                  </td>
                  <td className="px-10 py-9 text-right">
                    <div className="inline-flex flex-col items-end">
                      <div className="flex items-center">
                         <span className="text-metallic-gold text-lg md:text-2xl font-black mr-2">$</span>
                         <span className="text-3xl md:text-6xl font-black text-metallic-gold tracking-tighter drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                           {nexoraPrice}
                         </span>
                      </div>
                      <span className="text-[10px] font-black text-slate-600 tracking-[0.4em] uppercase mt-1">
                        {nexoraLabel}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-10 bg-blue-600/[0.03] border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="flex items-center gap-4">
               <ShieldCheck className="text-blue-500" size={24} />
               <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                 {lang === 'ES' ? 'ESTÁNDARES DE CALIDAD MUNDIAL ASEGURADOS' : 'WORLD QUALITY STANDARDS SECURED'}
               </p>
             </div>
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-[#030711] bg-slate-800 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover grayscale" />
                 </div>
               ))}
               <div className="w-10 h-10 rounded-full border-2 border-[#030711] bg-blue-600 flex items-center justify-center text-[10px] font-black text-white">
                 +12
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};