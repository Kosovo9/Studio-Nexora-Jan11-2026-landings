import React from 'react';
import { Search, Crown, Users, User, Briefcase } from 'lucide-react';

interface PortfolioProps {
  lang: 'ES' | 'EN';
}

export const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const blocks = [
    { 
      title: lang === 'ES' ? 'Individual' : 'Individual', 
      tag: 'Solo 1', 
      category: 'ELITE',
      icon: <User size={16} />,
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
      startBW: true
    },
    { 
      title: lang === 'ES' ? 'Socios' : 'Partner', 
      tag: 'Doble 2', 
      category: 'COLLABORATION',
      icon: <Users size={16} />,
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      startBW: false
    },
    { 
      title: lang === 'ES' ? 'Corporativo' : 'Corporate', 
      tag: 'Multi 3+', 
      category: 'CORPORATE',
      icon: <Briefcase size={16} />,
      img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
      startBW: true
    },
    { 
      title: lang === 'ES' ? 'Marketing' : 'Marketing', 
      tag: lang === 'ES' ? 'Ventas' : 'Sales', 
      category: 'MARKETING',
      icon: <Crown size={16} />,
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      startBW: false
    }
  ];

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="py-32 bg-[#050a14] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            {lang === 'ES' ? 'Portafolio de Estilos' : 'Style Portfolio'}
          </div>
          {/* TITULAR RECTIFICADO: DOBLE ESPACIO (1.4) */}
          <h2 id="portfolio-title" className="text-3xl md:text-[3.4rem] font-black text-white mb-8 uppercase leading-[1.4] tracking-tighter">
            {lang === 'ES' ? 'INSPIRACIÓN' : 'ELITE'} <br/>
            <span className="text-metallic-gold">{lang === 'ES' ? 'ELITE' : 'INSPIRATION'}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            {lang === 'ES' 
              ? 'Modelos diseñados para proyectar autoridad y cerrar tratos. Ingeniería visual que genera confianza inmediata.'
              : 'Models designed to project authority and close deals. Visual engineering that generates immediate trust.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal" style={{ transitionDelay: '200ms' }}>
          {blocks.map((b, i) => (
            <div key={i} className="group relative aspect-[3/4.5] rounded-[3rem] overflow-hidden glass border-white/5 hover:border-blue-500/40 transition-all duration-700 cursor-pointer">
              <img 
                src={b.img} 
                alt={`${b.title}`} 
                loading="lazy"
                className={`w-full h-full object-cover transition-all duration-1000 ease-out hover:scale-110 
                  ${b.startBW 
                    ? 'grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100' 
                    : 'grayscale-0 opacity-100 group-hover:grayscale group-hover:opacity-30'
                  }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute top-8 left-8">
                 <div className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/10">
                   <div className="text-blue-400">{b.icon}</div>
                   <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{b.tag}</span>
                 </div>
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-[11px] font-black text-blue-500 uppercase tracking-[0.4em] mb-3">{b.category}</p>
                <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors leading-tight uppercase tracking-tighter">
                  {b.title}
                </h3>
                <div className="w-8 h-1 bg-blue-600/50 mt-5 rounded-full group-hover:w-full transition-all duration-700"></div>
              </div>

              <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 border border-white/20">
                <Search size={20} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};