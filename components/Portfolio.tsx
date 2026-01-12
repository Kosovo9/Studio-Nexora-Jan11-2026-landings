
import React from 'react';
import { Search, Crown, Users, User, Briefcase, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface PortfolioProps {
  lang: 'ES' | 'EN';
}

export const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const blocks = [
    { 
      title: lang === 'ES' ? 'Portfolio Individual' : 'Individual Portfolio', 
      tag: 'Solo 1', 
      category: 'ELITE',
      icon: <User size={16} />,
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
      startBW: true
    },
    { 
      title: lang === 'ES' ? 'Estructura Socios' : 'Partner Structure', 
      tag: 'Doble 2', 
      category: 'COLLABORATION',
      icon: <Users size={16} />,
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      startBW: false
    },
    { 
      title: lang === 'ES' ? 'Empresa / Familia' : 'Company / Family', 
      tag: 'Multi 3+', 
      category: 'CORPORATE',
      icon: <Briefcase size={16} />,
      img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
      startBW: true
    },
    { 
      title: lang === 'ES' ? 'Landing de Venta' : 'Sales Landing', 
      tag: 'Conversión', 
      category: 'MARKETING',
      icon: <Crown size={16} />,
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', // Imagen enfocada en dashboard/ventas
      startBW: false,
      isSpecial: true,
      badgeText: lang === 'ES' ? 'CONVERSIÓN' : 'CONVERSION'
    }
  ];

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="py-24 bg-[#050a14] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            {lang === 'ES' ? 'Portafolio de Estilos' : 'Style Portfolio'}
          </div>
          <h2 id="portfolio-title" className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {lang === 'ES' ? 'Inspiración' : 'Inspiration'} <span className="text-metallic-gold">Elite</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {lang === 'ES' 
              ? 'Modelos diseñados para proyectar autoridad y cerrar tratos. Ingeniería visual que genera confianza inmediata.'
              : 'Models designed to project authority and close deals. Visual engineering that generates immediate trust.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blocks.map((b, i) => (
            <div key={i} className="group relative aspect-[3/4.2] rounded-[2.5rem] overflow-hidden glass border-white/5 hover:border-blue-500/40 transition-all duration-700 cursor-pointer reveal" style={{ transitionDelay: `${i * 150}ms` }}>
              <img 
                src={b.img} 
                alt={`${b.title}`} 
                loading="lazy"
                className={`w-full h-full object-cover transition-all duration-1000 ease-out hover:scale-110 
                  ${b.startBW 
                    ? 'grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-70' 
                    : 'grayscale-0 opacity-70 group-hover:grayscale group-hover:opacity-30'
                  }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/10 to-transparent opacity-90"></div>
              
              {/* Specialized Badge at Top (as per request) */}
              {b.isSpecial ? (
                <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/20">
                  <Crown size={18} className="text-blue-500" />
                  <span className="text-[10px] font-black text-blue-400/80 uppercase tracking-widest">{b.badgeText}</span>
                </div>
              ) : (
                <div className="absolute top-6 left-6">
                   <div className="flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                     <span className="text-blue-400">{b.icon}</span>
                     <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{b.tag}</span>
                   </div>
                </div>
              )}

              {/* Floating WhatsApp on Special Card */}
              {b.isSpecial && (
                <div className="absolute bottom-24 right-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)]">
                    <MessageCircle size={28} fill="currentColor" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[11px] font-black text-blue-500 uppercase tracking-[0.2em] mb-2">{b.category}</p>
                <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors leading-tight">
                  {b.title}
                </h3>
                <div className="w-8 h-1 bg-blue-600/50 mt-4 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>

              <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 border border-white/10">
                <Search size={18} className="text-white" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center reveal">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              {lang === 'ES' ? 'Adaptable a cualquier jerarquía:' : 'Adaptable to any hierarchy:'}
            </p>
            <div className="flex flex-wrap justify-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               <span className="text-lg font-black tracking-tighter">EXEC-PRO</span>
               <span className="text-lg font-black tracking-tighter text-blue-500">STRATEGIC</span>
               <span className="text-lg font-black tracking-tighter">GLOBAL HUB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
