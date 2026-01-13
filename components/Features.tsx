import React from 'react';
import { Smartphone, Layout, Languages, MessageSquare, Wind, Zap, Globe, Cpu, CreditCard } from 'lucide-react';

interface FeaturesProps {
  lang: 'ES' | 'EN';
}

export const Features: React.FC<FeaturesProps> = ({ lang }) => {
  const features = [
    {
      icon: <Cpu className="text-blue-400" />,
      title: lang === 'ES' ? 'Arquitectura de Lujo' : 'Luxury Architecture',
      desc: lang === 'ES' ? 'Diseño exclusivo con capas de profundidad y efectos cinemáticos de alto impacto.' : 'Exclusive design with depth layering and high-impact cinematic effects.'
    },
    {
      icon: <Wind className="text-blue-400" />,
      title: lang === 'ES' ? 'Fluidez Extrema' : 'Extreme Fluidity',
      desc: lang === 'ES' ? 'Navegación suave (Smooth Scroll) que garantiza una retención del usuario superior.' : 'Smooth Scroll navigation that guarantees superior user retention.'
    },
    {
      icon: <Globe className="text-blue-400" />,
      title: lang === 'ES' ? 'Dual Identity' : 'Dual Identity',
      desc: lang === 'ES' ? 'Switch instantáneo ES/EN para proyectar una imagen global y sofisticada.' : 'Instant ES/EN switch to project a global and sophisticated image.'
    },
    {
      icon: <Zap className="text-blue-400" />,
      title: lang === 'ES' ? 'Optimización 4K' : '4K Optimization',
      desc: lang === 'ES' ? 'Perfecta visualización desde smartphones hasta monitores de ultra alta resolución.' : 'Perfect viewing from smartphones to ultra-high-resolution monitors.'
    },
    {
      icon: <MessageSquare className="text-blue-400" />,
      title: lang === 'ES' ? 'Conversión Directa' : 'Direct Conversion',
      desc: lang === 'ES' ? 'Puentes de contacto integrados (WA/Mail) diseñados para cerrar tratos rápido.' : 'Integrated contact bridges (WA/Mail) designed to close deals fast.'
    },
    {
      icon: <CreditCard className="text-blue-400" />,
      title: lang === 'ES' ? 'Cero Riesgo' : 'Zero Risk',
      desc: lang === 'ES' ? 'Sin anticipo inicial. El trabajo habla primero; tú decides si publicamos después.' : 'No upfront payment. The work speaks first; you decide if we publish later.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#0a0f1e] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="text-blue-500 font-mono text-xs mb-4 tracking-[0.5em] uppercase font-bold">Nexora Standards</div>
          {/* TITULAR RECTIFICADO: DOBLE ESPACIO (1.4) Y BALANCEADO */}
          <h2 className="text-3xl md:text-[3.2rem] font-black text-white mb-6 uppercase leading-[1.4] tracking-tighter">
            {lang === 'ES' ? 'TU ADN DIGITAL DE' : 'YOUR DIGITAL DNA OF'} <br/>
            <span className="text-blue-500">ELITE</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {lang === 'ES' 
              ? 'Cada píxel está optimizado para proyectar éxito. No es solo una web, es tu carta de presentación ante el mundo.'
              : 'Each pixel is optimized to project success. It is not just a website, it is your cover letter to the world.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group glass p-10 rounded-3xl hover:border-blue-500/40 transition-all duration-500 relative overflow-hidden reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 text-blue-400">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};