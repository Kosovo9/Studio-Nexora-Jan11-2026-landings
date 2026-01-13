import React from 'react';
import { Monitor, Tablet, Smartphone, Laptop, CheckCircle2, Zap, Layout } from 'lucide-react';

interface ResponsiveShowcaseProps {
  lang: 'ES' | 'EN';
}

export const ResponsiveShowcase: React.FC<ResponsiveShowcaseProps> = ({ lang }) => {
  const devices = [
    { icon: <Monitor size={40} />, label: 'PC / WINDOWS', delay: '0ms' },
    { icon: <Laptop size={36} />, label: 'MACBOOK / OS', delay: '150ms' },
    { icon: <Tablet size={30} />, label: 'IPAD / TABLET', delay: '300ms' },
    { icon: <Smartphone size={26} />, label: 'IPHONE / ANDROID', delay: '450ms' },
  ];

  return (
    <section className="py-32 bg-[#030711] relative overflow-hidden border-y border-white/5">
      {/* Luces de fondo dinámicas */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Titular Superior de Alto Impacto */}
          <div className="reveal mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-600/10 border border-blue-500/30 rounded-full mb-8 animate-flash-elite">
               <Zap size={14} className="text-blue-500 fill-blue-500" />
               <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">
                 {lang === 'ES' ? 'Omni-Channel Sales Ready' : 'Omni-Channel Sales Ready'}
               </span>
            </div>
            
            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-8">
              {lang === 'ES' ? 'VENDE EN CUALQUIER' : 'SELL ON EVERY'} <br/>
              <span className="text-metallic-gold">{lang === 'ES' ? 'DIMENSIÓN DIGITAL' : 'DIGITAL DIMENSION'}</span>
            </h2>
            
            <p className="text-slate-400 text-sm md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
              {lang === 'ES' 
                ? 'Tu negocio no tiene fronteras. Hemos perfeccionado el renderizado para que tu landing sea una máquina de ventas, ya sea que tu cliente use una Laptop, Tablet o Smartphone.' 
                : 'Your business has no borders. We have perfected the rendering so your landing is a sales machine, whether your client uses a Laptop, Tablet, or Smartphone.'}
            </p>
          </div>

          {/* Iconos de Dispositivos con Resalte Premium */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-5xl reveal" style={{ transitionDelay: '300ms' }}>
            {devices.map((d, i) => (
              <div 
                key={i} 
                className="group flex flex-col items-center gap-6 p-8 glass rounded-[2.5rem] border border-white/10 hover:border-blue-500/50 hover:bg-blue-600/5 transition-all duration-700 shadow-2xl"
              >
                <div className="relative">
                  {/* Efecto de pulso circular detrás del icono */}
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="w-24 h-24 rounded-3xl bg-[#0a0f1e] border border-white/5 flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:text-blue-400 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                    {d.icon}
                  </div>
                </div>
                
                <div className="text-center">
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-blue-500 transition-colors">
                    {d.label}
                  </span>
                  <div className="w-4 h-0.5 bg-blue-600/30 mx-auto mt-3 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer del Componente con Badges de Calidad */}
          <div className="flex flex-wrap justify-center gap-6 mt-24 reveal" style={{ transitionDelay: '600ms' }}>
             <div className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl group hover:border-blue-500/30 transition-all">
                <Layout size={16} className="text-blue-500" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">
                  {lang === 'ES' ? 'Adaptabilidad 100% Automática' : '100% Auto-Adaptive Rendering'}
                </span>
             </div>
             <div className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl group hover:border-blue-500/30 transition-all">
                <CheckCircle2 size={16} className="text-blue-500" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">
                  {lang === 'ES' ? 'Optimización Multi-Browser' : 'Multi-Browser Engine Optimized'}
                </span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};