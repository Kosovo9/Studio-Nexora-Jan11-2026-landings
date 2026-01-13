import React from 'react';
import { ShieldCheck, Eye, UploadCloud, Check } from 'lucide-react';

interface PaymentFlowProps {
  lang: 'ES' | 'EN';
}

export const PaymentFlow: React.FC<PaymentFlowProps> = ({ lang }) => {
  return (
    <section id="guarantee" className="py-32 bg-blue-600/5 border-y border-blue-500/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.3em] mb-8 uppercase">
               Zero Risk Policy
            </div>
            {/* TITULAR RECTIFICADO: DOBLE ESPACIO (1.4) */}
            <h2 className="text-3xl md:text-[3.2rem] font-black text-white mb-8 uppercase leading-[1.4] tracking-tighter">
              {lang === 'ES' ? 'ANTICIPO 50%' : '50% DEPOSIT'} <br/>
              <span className="text-blue-500">{lang === 'ES' ? 'SIN RIESGO' : 'WITHOUT RISK'}</span>
            </h2>
            <p className="text-slate-400 mb-10 text-sm md:text-base leading-relaxed font-medium">
              {lang === 'ES' 
                ? 'Nuestra política es simple: el trabajo habla por nosotros. Primero desarrollamos tu propuesta completa y solo cuando estás convencido iniciamos el proceso de publicación oficial.'
                : 'Our policy is simple: the work speaks for itself. We first develop your full proposal, and only when you are convinced do we begin the official publishing process.'}
            </p>
            <ul className="space-y-5">
              <StepItem 
                icon={<Eye size={20} className="text-blue-400" />}
                text={lang === 'ES' ? 'Ves tu landing terminada en modo prueba.' : 'See your finished landing in test mode.'} 
              />
              <StepItem 
                icon={<UploadCloud size={20} className="text-blue-400" />}
                text={lang === 'ES' ? 'Si te gusta, pagas 50% de anticipo y la publicamos.' : 'If you like it, pay a 50% deposit and we publish it.'} 
              />
              <StepItem 
                icon={<Check size={20} className="text-blue-400" />}
                text={lang === 'ES' ? 'Pagas el 50% restante al cierre de los últimos ajustes.' : 'Pay the remaining 50% after final adjustments.'} 
              />
            </ul>
          </div>

          <div className="flex-1 w-full max-w-xl reveal" style={{ transitionDelay: '200ms' }}>
            <div className="glass p-10 md:p-14 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8">
                <ShieldCheck size={60} className="text-blue-500/10" />
              </div>
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">{lang === 'ES' ? 'Compromiso Nexora' : 'Nexora Commitment'}</h3>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed font-medium">
                {lang === 'ES' 
                  ? 'Si al final no es para ti, simplemente no se publica y listo. Sin letras chiquitas, sin compromisos forzados. Tú tienes el control total del despliegue.'
                  : 'If it is not for you in the end, it simply stays offline. No fine print, no forced commitments. You have total control over the deployment.'}
              </p>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{lang === 'ES' ? 'PROTECCIÓN' : 'PROTECTION'}</span>
                <span className="text-blue-400 font-black tracking-widest text-xs">100% ELITE GUARANTEED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <li className="flex items-start gap-4 group">
    <div className="mt-1 w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-blue-500/10 border border-white/5 group-hover:border-blue-500/30 transition-all">
      {icon}
    </div>
    <span className="text-white text-sm md:text-base font-bold uppercase tracking-tight leading-tight pt-2">{text}</span>
  </li>
);