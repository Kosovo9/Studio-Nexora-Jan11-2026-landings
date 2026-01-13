
import React from 'react';
import { Timer, MessageSquare, AlertCircle, Zap } from 'lucide-react';
import { WHATSAPP_LINK, URGENT_EXTRA_MXN, URGENT_EXTRA_USD } from '../constants';

interface UrgentServiceProps {
  lang: 'ES' | 'EN';
  currency: 'USD' | 'MXN';
}

export const UrgentService: React.FC<UrgentServiceProps> = ({ lang, currency }) => {
  const extraPrice = currency === 'USD' ? URGENT_EXTRA_USD : URGENT_EXTRA_MXN;

  return (
    <section id="urgent" className="py-24 bg-[#050a14] relative overflow-hidden">
      {/* Background glow for urgency */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-amber-500/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass rounded-[2rem] border-2 border-amber-500/20 overflow-hidden reveal shadow-[0_0_50px_rgba(245,158,11,0.1)]">
          <div className="flex flex-col lg:flex-row">
            {/* Left side: Visual Alert RESTAURADO */}
            <div className="lg:w-1/3 bg-[#080c18] p-12 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-amber-500/10">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-amber-500/30 rounded-3xl blur-2xl animate-pulse"></div>
                <div className="relative w-24 h-24 bg-amber-500 rounded-[2rem] flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.5)]">
                  <Zap size={48} className="text-[#080c18] fill-current" />
                </div>
              </div>
              <h3 className="text-amber-500 font-black text-xl md:text-2xl uppercase tracking-[0.1em] mb-2 leading-none">
                NEXORA EXPRESS
              </h3>
              <p className="text-white font-black text-4xl md:text-5xl tracking-tighter">
                1 HORA
              </p>
            </div>

            {/* Right side: Details */}
            <div className="lg:w-2/3 p-8 md:p-12 bg-[#050a14]/40">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2 uppercase tracking-tight">
                    {lang === 'ES' ? '¿Lo necesitas para YA?' : 'Need it RIGHT NOW?'}
                  </h2>
                  <p className="text-slate-400 font-medium">
                    {lang === 'ES' 
                      ? 'Activamos nuestro equipo prioritario para entregarte la landing completa en tiempo récord.' 
                      : 'We activate our priority team to deliver your complete landing in record time.'}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mb-1">{lang === 'ES' ? 'Inversión Priority' : 'Priority Investment'}</p>
                  <p className="text-2xl font-black text-amber-500">+{extraPrice}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="flex items-start gap-5">
                  <div className="mt-1 p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <Timer size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xs uppercase tracking-widest mb-1.5">{lang === 'ES' ? 'Prioridad Absoluta' : 'Absolute Priority'}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{lang === 'ES' ? 'Tu proyecto pasa al frente de toda la fila de producción de forma inmediata.' : 'Your project moves to the very front of our production line immediately.'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="mt-1 p-2.5 bg-green-500/10 rounded-xl border border-green-500/20">
                    <MessageSquare size={20} className="text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xs uppercase tracking-widest mb-1.5">{lang === 'ES' ? 'Soporte en Tiempo Real' : 'Real-Time Support'}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{lang === 'ES' ? 'Comunicación abierta y directa para ajustes e iteraciones instantáneas.' : 'Open and direct communication for instant adjustments and iterations.'}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 p-6 bg-amber-500/5 rounded-3xl border border-amber-500/10">
                <div className="flex-1 flex items-center gap-4">
                  <AlertCircle className="text-amber-500 shrink-0" size={24} />
                  <p className="text-[11px] text-slate-300 italic leading-relaxed font-medium">
                    {lang === 'ES' 
                      ? 'Requisito: Disponibilidad total en WhatsApp durante la hora de creación para cambios y aprobación final.' 
                      : 'Requirement: Full WhatsApp availability during the creation hour for changes and final approval.'}
                  </p>
                </div>
                <a 
                  href={`${WHATSAPP_LINK}&text=${encodeURIComponent("¡ME URGE! Me interesa el servicio Express de 1 hora.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap px-10 py-4 bg-amber-500 hover:bg-amber-400 text-[#050a14] font-black rounded-2xl transition-all shadow-xl shadow-amber-500/20 active:scale-95 uppercase text-[11px] tracking-[0.2em]"
                >
                  {lang === 'ES' ? 'Solicitar Express' : 'Request Express'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
