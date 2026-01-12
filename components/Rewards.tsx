
import React, { useState } from 'react';
import { Gift, Users, Copy, Check, Ticket, Award, Sparkles } from 'lucide-react';

interface RewardsProps {
  lang: 'ES' | 'EN';
}

export const Rewards: React.FC<RewardsProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const [partnerCode] = useState(() => `NX-${Math.random().toString(36).substring(2, 6).toUpperCase()}-15`);

  const handleCopy = () => {
    navigator.clipboard.writeText(partnerCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="rewards" className="py-24 bg-[#0a0f1e] relative overflow-hidden border-y border-white/5">
      <div className="absolute top-0 right-0 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[11px] font-black tracking-[0.3em] border border-blue-500/20 mb-6 uppercase">
            <Award size={14} />
            {lang === 'ES' ? 'Nexora Loyalty Hub' : 'Nexora Loyalty Hub'}
          </div>
          <h2 className="text-huge text-white mb-6 uppercase">
            {lang === 'ES' ? 'CRECE CON' : 'GROW WITH'} <br />
            <span className="text-metallic-gold">{lang === 'ES' ? 'NOSOTROS' : 'US'}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base font-medium leading-relaxed">
            {lang === 'ES' 
              ? 'Premiamos tu confianza. Obtén beneficios exclusivos en tu segundo proyecto o al recomendar nuestro ecosistema.' 
              : 'We reward your trust. Get exclusive benefits on your second project or by recommending our ecosystem.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Socio Recurrente */}
          <div className="group glass p-12 rounded-[3rem] border border-white/5 hover:border-blue-500/40 transition-all duration-700 reveal">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-20 h-20 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <Gift size={36} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">{lang === 'ES' ? 'Socio Recurrente' : 'Repeat Partner'}</h3>
                <p className="text-blue-500 font-bold text-sm tracking-widest">{lang === 'ES' ? 'BENEFICIO DIRECTO' : 'DIRECT BENEFIT'}</p>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {lang === 'ES' 
                ? 'Estrena un segundo proyecto con nosotros y obtén automáticamente un 15% de descuento sobre el precio promocional.' 
                : 'Launch a second project with us and automatically get a 15% discount on the promotional price.'}
            </p>
            <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
              <Sparkles className="text-amber-500" />
              <span className="text-white font-bold text-lg">15% OFF <span className="text-slate-500 font-medium text-sm ml-2">{lang === 'ES' ? 'En tu 2da Landing' : 'On your 2nd Landing'}</span></span>
            </div>
          </div>

          {/* Card 2: Embajador Nexora */}
          <div className="group glass p-12 rounded-[3rem] border border-white/5 hover:border-amber-500/40 transition-all duration-700 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center gap-6 mb-10">
              <div className="w-20 h-20 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                <Users size={36} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">{lang === 'ES' ? 'Embajador Elite' : 'Elite Ambassador'}</h3>
                <p className="text-amber-500 font-bold text-sm tracking-widest">{lang === 'ES' ? 'PROGRAMA REFERIDOS' : 'REFERRAL PROGRAM'}</p>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {lang === 'ES' 
                ? 'Recomiéndanos. Si tu referido cierra su proyecto, tú ganas un 15% de descuento canjeable en cualquiera de tus futuras landings.' 
                : 'Recommend us. If your referral closes their project, you earn a 15% discount redeemable on any of your future landings.'}
            </p>
            <div className="flex items-center gap-4 p-6 bg-amber-500/10 rounded-2xl border border-amber-500/20">
              <Award className="text-amber-500" />
              <span className="text-white font-bold text-lg">15% CREDIT <span className="text-slate-500 font-medium text-sm ml-2">{lang === 'ES' ? 'Por cada venta cerrada' : 'Per closed sale'}</span></span>
            </div>
          </div>
        </div>

        {/* Micro-feature: Personalized Voucher */}
        <div className="max-w-4xl mx-auto reveal" style={{ transitionDelay: '400ms' }}>
           <div className="p-1 glass rounded-[3rem] border border-white/5 bg-gradient-to-br from-white/10 to-transparent">
              <div className="p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left bg-[#050a14] rounded-[2.9rem]">
                 <div className="space-y-4 max-w-md">
                    <h4 className="text-3xl font-black text-white uppercase tracking-tighter">
                      {lang === 'ES' ? 'TU CÓDIGO DE SOCIO' : 'YOUR PARTNER CODE'}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {lang === 'ES' 
                        ? 'Comparte este código único. Al ser ingresado en una cotización exitosa, activamos tu recompensa.' 
                        : 'Share this unique code. When entered in a successful quote, we activate your reward.'}
                    </p>
                 </div>
                 
                 <div className="relative group">
                    <div className="absolute -inset-4 bg-blue-600/20 blur-2xl group-hover:bg-blue-600/40 transition-all duration-700 rounded-full"></div>
                    <div className="relative flex flex-col items-center gap-6">
                       <div className="flex items-center gap-4 px-10 py-8 bg-white/5 border-2 border-dashed border-blue-500/40 rounded-3xl group-hover:border-blue-500 transition-all duration-500">
                          <Ticket className="text-blue-500 shrink-0" size={32} />
                          <span className="text-4xl font-black text-white tracking-[0.2em] font-mono">{partnerCode}</span>
                       </div>
                       
                       <button 
                         onClick={handleCopy}
                         className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 ${copied ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-500 hover:scale-105'}`}
                       >
                         {copied ? <Check size={18} /> : <Copy size={18} />}
                         {copied ? (lang === 'ES' ? 'COPIADO' : 'COPIED') : (lang === 'ES' ? 'COPIAR CÓDIGO' : 'COPY CODE')}
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
