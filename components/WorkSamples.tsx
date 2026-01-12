
import React from 'react';
import { ExternalLink, Check, Star, Navigation, Laptop, ShieldCheck, Zap } from 'lucide-react';
import { REFERENCE_LANDING_LINK, WHATSAPP_LINK } from '../constants';

interface WorkSamplesProps {
  lang: 'ES' | 'EN';
}

export const WorkSamples: React.FC<WorkSamplesProps> = ({ lang }) => {
  const oscarFeatures = [
    { label: lang === 'ES' ? 'Smooth Scrolling Cinemático' : 'Cinematic Smooth Scrolling', icon: <Navigation size={14}/> },
    { label: lang === 'ES' ? 'Capas de Cristal (Glassmorphism)' : 'Glassmorphism Layering', icon: <ShieldCheck size={14}/> },
    { label: lang === 'ES' ? 'Responsive Grid Inteligente' : 'Smart Responsive Grid', icon: <Laptop size={14}/> },
    { label: lang === 'ES' ? 'Performance Score: 99/100' : 'Performance Score: 99/100', icon: <Zap size={14}/> },
  ];

  return (
    <section id="work-samples" className="py-24 bg-[#050a14] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold tracking-[0.3em] border border-amber-500/20 mb-4 uppercase">
            {lang === 'ES' ? 'Referencia de Éxito' : 'Success Reference'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {lang === 'ES' ? 'Caso de Estudio:' : 'Study Case:'} <span className="text-blue-500">"OSCAR TAPIA"</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {lang === 'ES' 
              ? 'Analizamos el estándar de calidad entregado a nuestro socio Oscar Tapia. Tu proyecto heredará esta misma ingeniería visual y técnica.'
              : 'We analyze the quality standard delivered to our partner Oscar Tapia. Your project will inherit this same visual and technical engineering.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal relative group">
            <div className="absolute -inset-4 bg-blue-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <a 
              href={REFERENCE_LANDING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[16/10] rounded-3xl overflow-hidden glass border-blue-500/20 hover:border-blue-500/60 transition-all duration-700 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Oscar Tapia Project" 
                className="w-full h-full object-cover grayscale-0 opacity-100 group-hover:grayscale group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="px-6 py-3 bg-white text-[#050a14] font-black rounded-xl uppercase tracking-widest text-xs flex items-center gap-2 shadow-2xl">
                   {lang === 'ES' ? 'Ver sitio en vivo' : 'View live site'}
                   <ExternalLink size={14} />
                </div>
              </div>
            </a>
          </div>

          <div className="lg:col-span-5 space-y-8 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-500">
                <Star size={20} fill="currentColor" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em]">{lang === 'ES' ? 'Benchmark Elite' : 'Elite Benchmark'}</span>
              </div>
              <h3 className="text-3xl font-bold text-white leading-tight">
                {lang === 'ES' ? 'Este es el nivel que te espera.' : 'This is the level that awaits you.'}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {lang === 'ES' 
                  ? 'El proyecto de "OSCAR TAPIA" consta de una estructura monolítica fluida, diseñada para retener al usuario. Literalmente, una pieza de software de $9,000 MXN en promoción.' 
                  : 'Oscar Tapia\'s project consists of a fluid monolithic structure, designed to retain the user. Literally, a $500 USD software piece on promo.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {oscarFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-3 glass rounded-xl border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    {f.icon}
                  </div>
                  <span className="text-white text-[10px] font-bold uppercase tracking-tight">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <a 
                href={WHATSAPP_LINK}
                className="group relative block w-full py-5 bg-blue-600 text-white font-black text-center rounded-2xl hover:bg-blue-500 transition-all transform active:scale-95 shadow-[0_20px_40px_rgba(37,99,235,0.2)] uppercase text-xs tracking-[0.2em]"
              >
                {lang === 'ES' ? 'Apartar Proyecto Igual' : 'Reserve Same Project'}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/20 scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all"></div>
              </a>
              <p className="text-center text-[10px] text-slate-500 mt-4 font-bold uppercase tracking-widest">
                {lang === 'ES' ? 'Últimos lugares de lanzamiento' : 'Last launch spots available'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
