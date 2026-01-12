
import React from 'react';
import { ShieldCheck, Eye, UploadCloud, Check } from 'lucide-react';

interface PaymentFlowProps {
  lang: 'ES' | 'EN';
}

export const PaymentFlow: React.FC<PaymentFlowProps> = ({ lang }) => {
  return (
    <section id="guarantee" className="py-24 bg-blue-600/5 border-y border-blue-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white mb-6">
              {lang === 'ES' ? 'Anticipo 50% sin riesgo' : 'Risk-free 50% Deposit'}
            </h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              {lang === 'ES' 
                ? 'Nuestra política es simple: el trabajo habla por nosotros. Primero desarrollamos tu propuesta completa y solo cuando estás convencido iniciamos el proceso de publicación oficial.'
                : 'Our policy is simple: the work speaks for itself. We first develop your full proposal, and only when you are convinced do we begin the official publishing process.'}
            </p>
            <ul className="space-y-4">
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
              <StepItem 
                icon={<ShieldCheck size={20} className="text-blue-400" />}
                text={lang === 'ES' ? 'Si no te convence, no pagas nada y no se publica.' : 'If you are not convinced, you pay nothing and it stays offline.'} 
              />
            </ul>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="glass p-8 rounded-3xl border-luxury relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <ShieldCheck size={40} className="text-blue-500/20" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{lang === 'ES' ? 'Compromiso Nexora' : 'Nexora Commitment'}</h3>
              <p className="text-sm text-slate-400 mb-6">
                {lang === 'ES' 
                  ? 'Si al final no es para ti, simplemente no se publica y listo. Sin letras chiquitas, sin compromisos forzados.'
                  : 'If it is not for you in the end, it simply stays offline. No fine print, no forced commitments.'}
              </p>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{lang === 'ES' ? 'Protección' : 'Protection'}</span>
                <span className="text-blue-400 font-bold">100% Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <li className="flex items-start gap-3">
    <div className="mt-1 w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/10">
      {icon}
    </div>
    <span className="text-slate-300 font-medium">{text}</span>
  </li>
);
