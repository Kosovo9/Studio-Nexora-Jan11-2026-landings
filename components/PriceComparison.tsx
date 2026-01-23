
import React from 'react';
import { Globe2, TrendingDown, ShieldCheck } from 'lucide-react';
import { CURRENCY_MXN, CURRENCY_USD, DOMAIN_START_MXN, DOMAIN_START_USD } from '../constants';

interface PriceComparisonProps {
  lang: 'ES' | 'EN';
  currency: 'USD' | 'MXN';
}

export const PriceComparison: React.FC<PriceComparisonProps> = ({ lang, currency }) => {
  const nexoraPrice = currency === 'USD' ? CURRENCY_USD : CURRENCY_MXN;
  const domPrice = currency === 'MXN' ? DOMAIN_START_MXN : DOMAIN_START_USD;

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
    <section id="pricing" className="py-20 bg-[#030711] relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1300px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
           <div className="max-w-2xl">
              <h2 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse"></div>
                {lang === 'ES' ? 'OPORTUNIDAD EXCLUSIVA' : 'EXCLUSIVE OPPORTUNITY'}
              </h2>
              <p className="text-3xl md:text-[2.5rem] font-black text-white uppercase leading-[1.2] tracking-tighter">
                {lang === 'ES' ? 'VALOR REAL DE TU' : 'REAL VALUE OF YOUR'} <br/>
                <span className="text-[#c5a059]">{lang === 'ES' ? 'IDENTIDAD DIGITAL' : 'DIGITAL IDENTITY'}</span>
              </p>
           </div>
           <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl backdrop-blur-xl">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                {lang === 'ES' ? '90% MÁS ACCESIBLE POR' : '90% MORE ACCESSIBLE FOR'} <br/>
                {lang === 'ES' ? 'TIEMPO LIMITADO' : 'LIMITED TIME'}
              </p>
           </div>
        </div>

        <div className="glass-luxury border-white/5 overflow-hidden shadow-2xl reveal">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.01]">
                  <th className="px-10 py-6 text-[10px] font-black text-[#c5a059] uppercase tracking-[0.3em]">
                    {lang === 'ES' ? 'REGIÓN' : 'REGION'}
                  </th>
                  <th className="px-10 py-6 text-[10px] font-black text-[#c5a059] uppercase tracking-[0.3em]">
                    {lang === 'ES' ? 'MERCADO (USD)' : 'MARKET (USD)'}
                  </th>
                  <th className="px-10 py-6 text-[10px] font-black text-[#c5a059] uppercase tracking-[0.3em] text-right">
                    {lang === 'ES' ? 'PROMO SOCIO' : 'PARTNER PROMO'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {rows.map((row, idx) => (
                  <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="px-10 py-6">
                      <span className="text-base font-black text-white uppercase tracking-tighter group-hover:text-[#c5a059] transition-colors">
                        {row.region}
                      </span>
                    </td>
                    <td className="px-10 py-6">
                      <span className="text-lg font-bold text-white italic tracking-tight">
                        {row.market}
                      </span>
                    </td>
                    <td className="px-10 py-6 text-right">
                      <div className="flex items-center justify-end">
                         <span className="text-[#c5a059] text-xl font-black mr-1">$</span>
                         <span className="text-3xl font-black text-white tracking-tighter">
                           {nexoraPrice}
                         </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-8 bg-[#c5a059]/[0.03] border-t border-white/5 flex items-center justify-center">
             <div className="flex items-center gap-4">
               <ShieldCheck className="text-[#c5a059]" size={20} />
               <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.3em]">
                 {lang === 'ES' 
                   ? `DOMINIO DESDE $${domPrice} • PANEL INCLUIDO • PAGO ÚNICO` 
                   : `DOMAIN FROM $${domPrice} • PANEL INCLUDED • ONE-TIME PAYMENT`}
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
