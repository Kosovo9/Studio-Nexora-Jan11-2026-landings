
import React from 'react';
import { Zap, Timer, MessageSquare, AlertCircle } from 'lucide-react';
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
        <div className="glass rounded-[2rem] border-2 border-amber-500/20 overflow-hidden reveal">
          <div className="flex flex-col lg:flex-row">
            {/* Left side: Visual Alert */}
            <div className="lg:w-1/3 bg-amber-500/10 p-12 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-amber-500/10">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                  <Zap size={40} className="text-[#050a14]" fill="currentColor" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-amber-500 uppercase tracking-tighter mb-2">Nexora Express</h3>
              <p className="text-white font-bold text-4xl">1 HORA</p>
            </div>

            {/* Right side: Details */}
            <div className="lg:w-2/3 p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {lang === 'ES' ? '¿Lo necesitas para YA?' : 'Need it RIGHT NOW?'}
                  </h2>
                  <p className="text-slate-400">
                    {lang === 'ES' 
                      ? 'Activamos nuestro equipo prioritario para entregarte la landing completa en tiempo récord.' 
                      : 'We activate our priority team to deliver your complete landing in record time.'}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">{lang === 'ES' ? 'Costo Adicional' : 'Extra Cost'}</p>
                  <p className="text-2xl font-bold text-amber-500">+{extraPrice}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-blue-500/10 rounded-lg">
                    <Timer size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{lang === 'ES' ? 'Prioridad Absoluta' : 'Absolute Priority'}</h4>
                    <p className="text-xs text-slate-500">{lang === 'ES' ? 'Tu proyecto pasa al frente de toda la fila de producción.' : 'Your project moves to the front of our production line.'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-green-500/10 rounded-lg">
                    <MessageSquare size={18} className="text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{lang === 'ES' ? 'Soporte en Vivo' : 'Live Support'}</h4>
                    <p className="text-xs text-slate-500">{lang === 'ES' ? 'Comunicación directa para ajustes en tiempo real.' : 'Direct communication for real-time adjustments.'}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10">
                <div className="flex-1 flex items-center gap-3">
                  <AlertCircle className="text-amber-500 shrink-0" size={20} />
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    {lang === 'ES' 
                      ? 'Requisito: Disponibilidad total en WhatsApp durante la hora de creación para cambios instantá.' 
                      : 'Requirement: Full WhatsApp availability during the creation hour for instant changes.'}
                  </p>
                </div>
                <a 
                  href={`${WHATSAPP_LINK}&text=${encodeURIComponent("¡ME URGE! Me interesa el servicio Express de 1 hora.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap px-8 py-3 bg-amber-500 hover:bg-amber-400 text-[#050a14] font-black rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 uppercase text-xs tracking-widest"
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
