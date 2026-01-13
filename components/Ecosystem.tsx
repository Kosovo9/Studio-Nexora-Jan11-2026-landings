import React from 'react';
import { Linkedin, Mail, MessageCircle, CreditCard, Share2, ShieldCheck } from 'lucide-react';
import { LINKEDIN_LINK, EMAIL_LINK, WHATSAPP_LINK } from '../constants';

interface EcosystemProps {
  lang: 'ES' | 'EN';
}

export const Ecosystem: React.FC<EcosystemProps> = ({ lang }) => {
  const connections = [
    { 
      icon: <Linkedin size={32} />, 
      title: 'LinkedIn Sync', 
      desc: lang === 'ES' ? 'Vinculación directa con tu perfil profesional.' : 'Direct linking to your professional profile.',
      link: LINKEDIN_LINK
    },
    { 
      icon: <MessageCircle size={32} />, 
      title: 'WhatsApp Bridge', 
      desc: lang === 'ES' ? 'Conversión inmediata uno a uno.' : 'Immediate one-on-one conversion.',
      link: WHATSAPP_LINK
    },
    { 
      icon: <Mail size={32} />, 
      title: 'Direct Mail', 
      desc: lang === 'ES' ? 'Canal formal para propuestas de alto valor.' : 'Formal channel for high-value proposals.',
      link: EMAIL_LINK
    },
    { 
      icon: <CreditCard size={32} />, 
      title: 'Global Payments', 
      desc: lang === 'ES' ? 'Integración con Stripe / PayPal / Transfer.' : 'Integration with Stripe / PayPal / Transfer.',
      link: '#'
    }
  ];

  return (
    <section className="py-24 bg-[#050a14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8 reveal">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-blue-500 mb-4">
              <Share2 size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">{lang === 'ES' ? 'Conectividad Total' : 'Total Connectivity'}</span>
            </div>
            {/* TITULAR RECTIFICADO: DOBLE ESPACIO (1.4) Y REDUCCIÓN 30% */}
            <h2 className="text-3xl md:text-[3.2rem] font-black text-white leading-[1.4] uppercase tracking-tighter">
              {lang === 'ES' ? 'PUENTES DE' : 'FUNCTIONAL'} <br />
              <span className="text-blue-500">{lang === 'ES' ? 'CONVERSIÓN' : 'BRIDGES'}</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-sm lg:text-right leading-relaxed font-medium uppercase tracking-widest">
            {lang === 'ES' 
              ? 'Tu landing es el centro de mando de tu presencia digital.' 
              : 'Your landing is the command center of your digital presence.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {connections.map((c, i) => (
            <div key={i} className="group reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="glass p-10 rounded-[3rem] border border-white/5 hover:border-blue-500/40 transition-all duration-700 relative overflow-hidden flex flex-col items-center text-center">
                {/* Glow Background */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-700"></div>
                
                {/* Icon Container */}
                <div className="w-24 h-24 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/50 group-hover:scale-110 transition-all duration-700 mb-8 shadow-2xl relative z-10">
                  {c.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 relative z-10 group-hover:text-blue-400 transition-colors">{c.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed max-w-[180px] relative z-10">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 glass rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 reveal">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">{lang === 'ES' ? 'Seguridad Certificada' : 'Certified Security'}</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest">{lang === 'ES' ? 'Protocolos de encriptación SSL' : 'SSL Encryption Protocols'}</p>
              </div>
           </div>
           <div className="flex gap-2">
             {[1, 2, 3].map(i => (
               <div key={i} className="w-2 h-2 rounded-full bg-blue-500/20"></div>
             ))}
           </div>
           <p className="text-blue-400 font-mono text-[10px] tracking-[0.3em] font-bold">READY TO DEPLOY // 2026</p>
        </div>
      </div>
    </section>
  );
};