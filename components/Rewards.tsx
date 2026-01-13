import React, { useState } from 'react';
import { Gift, Users, Copy, Check, Ticket, Award, Sparkles, Link as LinkIcon, ChevronRight, Calculator, DollarSign, Globe2, ShieldCheck } from 'lucide-react';
import { CURRENCY_MXN, CURRENCY_USD } from '../constants';

interface RewardsProps {
  lang: 'ES' | 'EN';
  currency: 'USD' | 'MXN';
}

export const Rewards: React.FC<RewardsProps> = ({ lang, currency }) => {
  const [step, setStep] = useState<'invite' | 'register' | 'dashboard'>('invite');
  const [name, setName] = useState('');
  const [partnerCode, setPartnerCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  
  // Calculadora
  const [salesCount, setSalesCount] = useState(3);

  const promoPrice = currency === 'USD' ? '$165' : '$2,999';

  const marketPrices = [
    { 
      region: lang === 'ES' ? 'Estados Unidos / Global' : 'USA / Global', 
      market: currency === 'USD' ? '$2,500 - $5,000' : '$45,000 - $90,000', 
      promo: promoPrice 
    },
    { 
      region: lang === 'ES' ? 'Canadá / UK' : 'Canada / UK', 
      market: currency === 'USD' ? '$2,000 - $4,500' : '$36,000 - $81,000', 
      promo: promoPrice 
    },
    { 
      region: lang === 'ES' ? 'Europa (EU)' : 'Europe (EU)', 
      market: currency === 'USD' ? '$1,800 - $4,000' : '$32,000 - $72,000', 
      promo: promoPrice 
    },
    { 
      region: lang === 'ES' ? 'México / LATAM' : 'Mexico / LATAM', 
      market: currency === 'USD' ? '$800 - $1,500' : '$14,000 - $27,000', 
      promo: promoPrice 
    },
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const code = `NX-${name.substring(0, 4).toUpperCase()}-${Math.floor(10 + Math.random() * 90)}`;
    setPartnerCode(code);
    setStep('dashboard');
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(partnerCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyLink = () => {
    const refLink = `${window.location.origin}${window.location.pathname}?ref=${partnerCode}`;
    navigator.clipboard.writeText(refLink);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
    <section id="rewards" className="py-24 bg-[#0a0f1e] relative overflow-hidden border-y border-white/5">
      <div className="absolute top-0 right-0 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.3em] border border-blue-500/20 mb-10 uppercase">
            <Award size={14} />
            {lang === 'ES' ? 'Ecosistema de Crecimiento' : 'Growth Ecosystem'}
          </div>
          
          <h2 className="text-3xl md:text-[3.2rem] font-black text-white mb-14 uppercase leading-[1.4] tracking-tighter">
            {lang === 'ES' ? 'SÉ NUESTRO' : 'BE OUR'} <br />
            <span className="text-metallic-gold">{lang === 'ES' ? 'SOCIO ELITE' : 'ELITE PARTNER'}</span>
          </h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            {lang === 'ES' 
              ? 'Ofrecemos ingeniería de $2,500 USD por una fracción del costo. Únete como socio y obtén el 20% de comisión por cada venta.' 
              : 'We offer $2,500 USD engineering for a fraction of the cost. Join as a partner and get 20% commission per sale.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Lado Izquierdo: Comparativa de Precios Global */}
          <div className="lg:col-span-7 space-y-8 reveal">
            
            <div className="glass p-10 rounded-[2.5rem] border border-white/5 bg-[#050a14]/60 overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-amber-500 to-blue-600 opacity-30"></div>
              
              <h3 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-10 flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <Globe2 size={16} />
                </div>
                {lang === 'ES' ? `Comparativa Global (${currency})` : `Global Price Comparison (${currency})` }
              </h3>

              <div className="w-full overflow-x-auto">
                <table className="w-full text-left min-w-[500px]">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="pb-6 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">{lang === 'ES' ? 'Región' : 'Region'}</th>
                      <th className="pb-6 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">{lang === 'ES' ? `Precio Mercado (${currency})` : `Market Price (${currency})`}</th>
                      <th className="pb-6 text-[9px] font-black text-blue-500 uppercase tracking-[0.2em] text-right">{lang === 'ES' ? 'Precio Nexora' : 'Nexora Price'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {marketPrices.map((item, idx) => (
                      <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                        <td className="py-5 text-xs font-bold text-white uppercase tracking-tight">{item.region}</td>
                        <td className="py-5 text-xs font-medium text-slate-400 italic">{item.market}</td>
                        <td className="py-5 text-right">
                          <span className="text-xl font-black text-metallic-gold tracking-tight">{item.promo}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Calculadora de Ganancias */}
            <div className="glass p-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-blue-600/5 to-transparent">
              <div className="flex items-center gap-4 mb-8">
                <Calculator size={20} className="text-blue-500" />
                <h3 className="text-lg font-black text-white uppercase tracking-tighter">{lang === 'ES' ? 'Calculadora de Comisiones' : 'Commission Calculator'}</h3>
              </div>
              
              <div className="space-y-10">
                <div>
                  <div className="flex justify-between mb-4">
                    <label htmlFor="sales-range" className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{lang === 'ES' ? 'Ventas Referidas' : 'Referral Sales'}</label>
                    <span className="text-blue-500 font-black text-xl">{salesCount}</span>
                  </div>
                  <input 
                    id="sales-range"
                    type="range" min="1" max="20" value={salesCount} 
                    onChange={(e) => setSalesCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    aria-label={lang === 'ES' ? 'Cantidad de ventas referidas' : 'Number of referred sales'}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-2">{lang === 'ES' ? 'Tu Comisión (MXN)' : 'Your Commission (MXN)'}</p>
                    <p className="text-2xl font-black text-white">${(salesCount * 600).toLocaleString()}</p>
                  </div>
                  <div className="p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                    <p className="text-[9px] text-blue-500 font-bold uppercase tracking-widest mb-2">{lang === 'ES' ? 'Tu Comisión (USD)' : 'Your Commission (USD)'}</p>
                    <p className="text-2xl font-black text-white">${(salesCount * 33).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Registro y Link */}
          <div className="lg:col-span-5 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="glass rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-amber-500 to-blue-600"></div>
              
              <div className="p-10">
                {step === 'invite' && (
                  <div className="text-center space-y-8 py-6">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-[1.5rem] flex items-center justify-center mx-auto text-blue-500 mb-6 animate-bounce">
                      <Users size={32} />
                    </div>
                    <h3 className="text-xl font-black text-white uppercase">{lang === 'ES' ? 'Únete a la Red Elite' : 'Join the Elite Network'}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-medium">
                      {lang === 'ES' 
                        ? 'Cualquiera puede ser socio. Solo necesitas compartir el valor de Nexora con tu red.' 
                        : 'Anyone can be a partner. You just need to share Nexora\'s value with your network.'}
                    </p>
                    <button 
                      onClick={() => setStep('register')}
                      className="w-full py-5 bg-white text-black font-black rounded-2xl uppercase tracking-widest text-[10px] hover:bg-slate-200 transition-all flex items-center justify-center gap-3"
                    >
                      {lang === 'ES' ? 'Obtener mi Código' : 'Get my Code'}
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}

                {step === 'register' && (
                  <div className="space-y-8 py-4">
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">{lang === 'ES' ? 'Registro de Socio' : 'Partner Registration'}</h3>
                    <form onSubmit={handleRegister} className="space-y-6">
                      <div>
                        <label htmlFor="partner-name" className="block text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-3">{lang === 'ES' ? 'Nombre o Alias Público' : 'Public Name or Alias'}</label>
                        <input 
                          id="partner-name"
                          type="text" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="EJ: NEXORAUSER"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold tracking-widest focus:border-blue-500 focus:outline-none uppercase"
                          required
                        />
                      </div>
                      <button 
                        type="submit"
                        className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl uppercase tracking-widest text-[10px] hover:bg-blue-500 shadow-xl shadow-blue-600/20 transition-all"
                      >
                        {lang === 'ES' ? 'Activar mi Código' : 'Activate my Code'}
                      </button>
                    </form>
                  </div>
                )}

                {step === 'dashboard' && (
                  <div className="space-y-8 py-4">
                    <div className="flex items-center gap-4 p-4 bg-green-500/10 rounded-2xl border border-green-500/20">
                      <Check size={14} className="text-green-500" />
                      <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">{lang === 'ES' ? 'Socio Elite Activo' : 'Elite Partner Active'}</span>
                    </div>

                    <div className="space-y-6">
                      <div className="p-8 bg-white/5 border-2 border-dashed border-blue-500/40 rounded-3xl text-center group">
                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.3em] mb-4">{lang === 'ES' ? 'Tu Código Único' : 'Your Unique Code'}</p>
                        <span className="text-3xl font-black text-white tracking-[0.2em] font-mono block mb-6">{partnerCode}</span>
                        <button 
                          onClick={handleCopyCode}
                          className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-black uppercase tracking-widest text-[9px] transition-all ${copied ? 'bg-green-600 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
                        >
                          {copied ? <Check size={12} /> : <Copy size={12} />}
                          {copied ? (lang === 'ES' ? 'COPIADO' : 'COPIED') : (lang === 'ES' ? 'COPIAR CÓDIGO' : 'COPY CODE')}
                        </button>
                      </div>

                      <button 
                        onClick={handleCopyLink}
                        className={`w-full flex items-center justify-center gap-4 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all ${linkCopied ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-500 shadow-2xl shadow-blue-600/30'}`}
                      >
                        {linkCopied ? <Check size={14} /> : <LinkIcon size={14} />}
                        {linkCopied ? (lang === 'ES' ? 'LINK DE SOCIO COPIADO' : 'PARTNER LINK COPIED') : (lang === 'ES' ? 'COPIAR LINK DE SOCIO' : 'COPY PARTNER LINK')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};