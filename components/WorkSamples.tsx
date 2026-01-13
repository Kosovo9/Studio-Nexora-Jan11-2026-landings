import React from 'react';
import { ExternalLink, Star, Navigation, Laptop, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';
import { REFERENCE_LANDING_LINK, PHONE_NUMBER } from '../constants';

interface WorkSamplesProps {
  lang: 'ES' | 'EN';
  referralCode?: string | null;
  onReserveClick?: () => void;
}

export const WorkSamples: React.FC<WorkSamplesProps> = ({ lang, referralCode, onReserveClick }) => {
  const oscarFeatures = [
    { label: lang === 'ES' ? 'Smooth Scrolling Cinemático' : 'Cinematic Smooth Scrolling', icon: <Navigation size={14}/> },
    { label: lang === 'ES' ? 'Capas de Cristal (Glassmorphism)' : 'Glassmorphism Layering', icon: <ShieldCheck size={14}/> },
    { label: lang === 'ES' ? 'Responsive Grid Inteligente' : 'Smart Responsive Grid', icon: <Laptop size={14}/> },
    { label: lang === 'ES' ? 'Performance Score: 99/100' : 'Performance Score: 99/100', icon: <Zap size={14}/> },
  ];

  const baseMessage = lang === 'ES' 
    ? "Hola Nexora! Vi el caso de Oscar Tapia y me interesa un proyecto igual para mí." 
    : "Hi Nexora! I saw the Oscar Tapia case and I want a similar project for myself.";
  
  const fullMessage = referralCode 
    ? `${baseMessage} REF: ${referralCode}` 
    : baseMessage;
  
  const waLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(fullMessage)}`;

  return (
    <section id="work-samples" className="py-24 bg-[#050a14] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-[0.3em] border border-blue-500/20 mb-10 uppercase">
            {lang === 'ES' ? 'Referencia de Éxito Elite' : 'Elite Success Reference'}
          </div>
          
          {/* TITULAR RECTIFICADO: DOBLE ESPACIO (1.4) Y BALANCEADO */}
          <h2 className="text-4xl md:text-[3.8rem] font-black text-white mb-10 uppercase tracking-tighter leading-[1.4]">
            {lang === 'ES' ? 'CASO DE ESTUDIO:' : 'STUDY CASE:'} <br />
            <span className="text-blue-500">"OSCAR TAPIA"</span>
          </h2>
          
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            {lang === 'ES' 
              ? 'Analizamos el estándar de calidad entregado a nuestro socio Oscar Tapia. Tu proyecto heredará esta misma ingeniería visual y técnica.'
              : 'We analyze the quality standard delivered to our partner Oscar Tapia. Your project will inherit this same visual and technical engineering.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal relative group">
            <div className="absolute -inset-4 bg-blue-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative block aspect-[16/10] rounded-[3rem] overflow-hidden glass border-white/10 group-hover:border-blue-500/30 transition-all duration-700 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Oscar Tapia Project" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent opacity-60"></div>
              
              {/* Botón Flotante sobre Imagen */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <a 
                  href={REFERENCE_LANDING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-black font-black rounded-2xl uppercase tracking-widest text-[10px] flex items-center gap-3 shadow-2xl hover:scale-110 transition-transform"
                >
                   {lang === 'ES' ? 'Explorar Sitio' : 'Explore Site'}
                   <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-amber-500">
                <Star size={20} fill="currentColor" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em]">{lang === 'ES' ? 'Benchmark SOCIO' : 'PARTNER Benchmark'}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter">
                {lang === 'ES' ? 'Este es el nivel que te espera.' : 'This is the level that awaits you.'}
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                {lang === 'ES' 
                  ? 'Una estructura monolítica fluida, diseñada para retener al usuario. Literalmente, una pieza de software de alto valor por una fracción del costo.' 
                  : 'A fluid monolithic structure, designed to retain the user. Literally, a high-value software piece for a fraction of the cost.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {oscarFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-4 glass rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    {f.icon}
                  </div>
                  <span className="text-white text-[9px] font-black uppercase tracking-tight">{f.label}</span>
                </div>
              ))}
            </div>

            {/* BOTONES DE ACCIÓN */}
            <div className="pt-8 border-t border-white/5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href={REFERENCE_LANDING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all uppercase text-[10px] tracking-[0.2em]"
                >
                  <Globe size={16} className="text-blue-500" />
                  {lang === 'ES' ? 'Ver sitio en vivo' : 'View live site'}
                </a>
                <button 
                  onClick={onReserveClick}
                  className="flex items-center justify-center gap-3 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 uppercase text-[10px] tracking-[0.2em]"
                >
                  {lang === 'ES' ? 'Apartar Igual' : 'Reserve Same'}
                  <ArrowRight size={16} />
                </button>
              </div>
              
              <p className="text-center text-[9px] text-slate-600 font-black uppercase tracking-[0.3em] animate-pulse">
                {lang === 'ES' ? 'Disponibilidad inmediata para nuevos socios' : 'Immediate availability for new partners'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};