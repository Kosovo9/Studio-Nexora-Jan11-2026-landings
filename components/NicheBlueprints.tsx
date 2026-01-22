
import React from 'react';
import { 
  ShoppingBag, 
  Stethoscope, 
  Car, 
  Compass, 
  Camera, 
  Briefcase,
  Wrench,
  Dumbbell,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

interface NicheBlueprintsProps {
  lang: 'ES' | 'EN';
  onActionClick?: () => void;
}

export const NicheBlueprints: React.FC<NicheBlueprintsProps> = ({ lang, onActionClick }) => {
  const niches = [
    {
      icon: <Stethoscope className="text-blue-400" />,
      title: lang === 'ES' ? 'Clínicas & Médicos Pro' : 'Clinics & Doctors Pro',
      benefit: lang === 'ES' ? 'Agenda Automatizada' : 'Automated Booking',
      desc: lang === 'ES' ? 'Deja de contestar llamadas. Tus pacientes agendan su cita y conocen tus servicios en una interfaz que proyecta confianza quirúrgica.' : 'Stop answering calls. Your patients book their appointments and learn about your services in an interface that projects surgical confidence.'
    },
    {
      icon: <Compass className="text-amber-500" />,
      title: lang === 'ES' ? 'Estéticas & Spas de Lujo' : 'Luxury Spas & Aesthetics',
      benefit: lang === 'ES' ? 'Venta de Experiencia' : 'Experience Sales',
      desc: lang === 'ES' ? 'El lujo entra por los ojos. Mostramos tus tratamientos con visuales 4K que justifican tus precios premium.' : 'Luxury starts with visuals. We show your treatments with 4K visuals that justify your premium prices.'
    },
    {
      icon: <Car className="text-slate-300" />,
      title: lang === 'ES' ? 'Talleres & Exóticos' : 'Workshops & Exotic Cars',
      benefit: lang === 'ES' ? 'Showroom de Confianza' : 'Trust Showroom',
      desc: lang === 'ES' ? 'Demuestra tu profesionalismo. Galería de trabajos, servicios y cotizador rápido para que el cliente no dude en dejarte su auto.' : 'Showcase your professionalism. Gallery of work, services, and fast quoter so clients don\'t hesitate to leave their car with you.'
    },
    {
      icon: <Briefcase className="text-indigo-400" />,
      title: lang === 'ES' ? 'Ejecutivos & Consultores' : 'Executives & Consultants',
      benefit: lang === 'ES' ? 'Autoridad Digital' : 'Digital Authority',
      desc: lang === 'ES' ? 'Tu LinkedIn no es suficiente. Una landing personal de alto impacto que te posiciona como el líder indiscutible en tu nicho.' : 'Your LinkedIn is not enough. A high-impact personal landing that positions you as the undisputed leader in your niche.'
    },
    {
      icon: <ShoppingBag className="text-pink-500" />,
      title: lang === 'ES' ? 'Boutiques & Retail' : 'Boutiques & Retail',
      benefit: lang === 'ES' ? 'Catálogo Inteligente' : 'Smart Catalog',
      desc: lang === 'ES' ? 'Convierte tu inventario en una vitrina digital. El cliente elige, te contacta y tú solo envías el paquete.' : 'Turn your inventory into a digital window. The client picks, contacts you, and you just ship the package.'
    },
    {
      icon: <GraduationCap className="text-purple-400" />,
      title: lang === 'ES' ? 'Cursos & Academias' : 'Courses & Academies',
      benefit: lang === 'ES' ? 'Escalabilidad Total' : 'Total Scalability',
      desc: lang === 'ES' ? 'Digitaliza tu conocimiento. Presenta tus módulos y atrae alumnos de todo el mundo con un diseño que vende autoridad.' : 'Digitize your knowledge. Present your modules and attract students worldwide with a design that sells authority.'
    }
  ];

  return (
    <section className="py-24 bg-[#030711] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl md:text-5xl font-black text-white luxury-serif uppercase tracking-tighter mb-6">
            {lang === 'ES' ? 'SOLUCIONES POR' : 'SOLUTIONS BY'} <br/>
            <span className="text-metallic-gold">{lang === 'ES' ? 'NICHE DE ÉLITE' : 'ELITE NICHE'}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            {lang === 'ES' ? 'Hemos diseñado la estructura perfecta para los problemas específicos de tu industria.' : 'We have designed the perfect structure for the specific problems of your industry.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {niches.map((n, i) => (
            <div key={i} className="group glass p-10 rounded-[3rem] border-white/5 hover:border-blue-500/30 transition-all duration-700 reveal">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600/10 transition-all duration-500">
                {React.cloneElement(n.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">{n.title}</h3>
              <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-4 italic">{n.benefit}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
                {n.desc}
              </p>
              <button 
                onClick={onActionClick}
                className="flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-colors group/btn"
              >
                {lang === 'ES' ? 'CONSULTAR SOLUCIÓN' : 'CONSULT SOLUTION'}
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
