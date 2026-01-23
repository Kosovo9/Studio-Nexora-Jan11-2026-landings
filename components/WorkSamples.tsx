
import React from 'react';
import { ExternalLink, Crown, Building2, Stethoscope, Watch, User, ArrowRight, LayoutDashboard, Share2, Lock } from 'lucide-react';
import { EXAMPLES } from '../constants';

interface WorkSamplesProps {
  lang: 'ES' | 'EN';
  onReserveClick?: () => void;
}

export const WorkSamples: React.FC<WorkSamplesProps> = ({ lang, onReserveClick }) => {
  const samples = [
    {
      title: lang === 'ES' ? 'Alta Relojería' : 'High-End Watches',
      category: 'YMASRELOJES',
      url: EXAMPLES.WATCHES,
      icon: <Watch className="text-[#c5a059]" />,
      desc: lang === 'ES' ? 'Catálogo de lujo con enfoque en la "Obra Maestra". Diseño cinemático de alto impacto.' : 'Luxury catalog focusing on the "Masterpiece". High-impact cinematic design.',
      img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: lang === 'ES' ? 'Odontología Boutique' : 'Boutique Dentistry',
      category: 'DR. ENRIQUE ACOSTA',
      url: EXAMPLES.DENTISTS,
      icon: <Stethoscope className="text-[#c5a059]" />,
      desc: lang === 'ES' ? 'Autoridad médica total. Captura la confianza de tus pacientes desde el primer segundo.' : 'Total medical authority. Capture patient trust from the very first second.',
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: lang === 'ES' ? 'Bienes Raíces de Élite' : 'Elite Real Estate',
      category: 'WAEE',
      url: EXAMPLES.REAL_ESTATE,
      icon: <Building2 className="text-[#c5a059]" />,
      desc: lang === 'ES' ? 'Portafolio de propiedades de lujo optimizado para cierres rápidos.' : 'Luxury property portfolio optimized for fast closing.',
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-[#030711] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <div className="inline-flex items-center gap-3 mb-6">
            <Crown size={20} className="text-[#c5a059]" />
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#c5a059]">{lang === 'ES' ? 'TRABAJO EYE-CATCHING' : 'EYE-CATCHING WORK'}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white luxury-serif uppercase tracking-tight mb-8">
            {lang === 'ES' ? 'TU NUEVA LÍNEA' : 'YOUR NEW'} <br/>
            <span className="text-gold-luxury">{lang === 'ES' ? 'MAESTRA' : 'MASTER LINE'}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {samples.map((s, i) => (
            <div key={i} className="group relative aspect-[3/4] overflow-hidden border border-white/5 hover:border-[#c5a059]/40 transition-all duration-700 reveal">
              <img src={s.img} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000 grayscale group-hover:grayscale-0" alt={s.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030711] via-transparent to-transparent"></div>
              
              <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
                 <div className="w-12 h-12 bg-[#030711]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center rounded-xl">
                   {s.icon}
                 </div>
                 <a href={s.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors">
                   <ExternalLink size={18} />
                 </a>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[#c5a059] text-[9px] font-black uppercase tracking-[0.4em] mb-2">{s.category}</p>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">{s.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed italic mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  "{s.desc}"
                </p>
                <a href={s.url} target="_blank" className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-3">
                  {lang === 'ES' ? 'MIRA TU SITIO' : 'VIEW YOUR SITE'}
                  <ArrowRight size={14} className="text-[#c5a059]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Panel Admin "Acosta Style" */}
        <div className="reveal glass-luxury p-12 md:p-20 border-[#c5a059]/10 bg-gradient-to-br from-[#1e293b]/20 to-transparent relative overflow-hidden">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
                   <Lock size={12} className="text-red-500" />
                   <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">{lang === 'ES' ? 'ACCESO RESTRINGIDO' : 'RESTRICTED ACCESS'}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter luxury-serif">
                  {lang === 'ES' ? 'TU PROPIO' : 'YOUR OWN'} <br/>
                  <span className="text-[#c5a059]">{lang === 'ES' ? 'CENTRO DE MANDO' : 'COMMAND CENTER'}</span>
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-10 font-light italic">
                  {lang === 'ES' 
                    ? '¿Qué es el Panel Admin? Es el cerebro de tu web. Una zona segura donde tú mismo puedes cambiar fotos, precios o ver quién te escribió, sin depender de nadie.' 
                    : 'What is the Admin Panel? It is your web\'s brain. A secure zone where you can change photos, prices, or see who wrote to you, without depending on anyone.'}
                </p>
                <div className="space-y-6">
                   <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-[#c5a059]/10 border border-[#c5a059]/20 flex items-center justify-center text-[#c5a059]">
                        <Share2 size={18} />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-widest">
                         {lang === 'ES' ? 'LINKS SOCIALES INCLUIDOS' : 'SOCIAL LINKS INCLUDED'}
                      </span>
                   </div>
                   <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-[#c5a059]/10 border border-[#c5a059]/20 flex items-center justify-center text-[#c5a059]">
                        <LayoutDashboard size={18} />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-widest">
                         {lang === 'ES' ? 'CERO CONOCIMIENTO TÉCNICO' : 'ZERO TECHNICAL KNOWLEDGE'}
                      </span>
                   </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#c5a059]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[#050a14] border border-[#c5a059]/30 p-2 shadow-2xl">
                   <div className="bg-[#030711] p-12 text-center">
                      <div className="luxury-serif text-white text-3xl mb-12">{lang === 'ES' ? 'Tu Acceso Maestro' : 'Your Master Access'}</div>
                      <div className="w-full h-12 bg-white/5 border border-white/10 mb-8 flex items-center px-6">
                         <div className="flex gap-2">
                           {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[#c5a059]/40"></div>)}
                         </div>
                      </div>
                      <div className="w-full h-14 bg-[#c5a059] text-[#030711] font-black flex items-center justify-center uppercase tracking-widest text-[10px]">
                         {lang === 'ES' ? 'ENTRAR AL PANEL' : 'ENTER DASHBOARD'}
                      </div>
                      <div className="mt-8 text-[9px] text-slate-500 font-bold uppercase tracking-[0.4em] opacity-40">NEXORA MASTER KEY OS</div>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
