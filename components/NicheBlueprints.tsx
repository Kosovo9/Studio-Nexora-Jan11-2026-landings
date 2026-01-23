
import React from 'react';
import { 
  Stethoscope, 
  Wrench, 
  Scale, 
  Sparkles, 
  Building2, 
  ShoppingBag,
  ArrowRight
} from 'lucide-react';

interface NicheBlueprintsProps {
  lang: 'ES' | 'EN';
  onActionClick?: () => void;
}

export const NicheBlueprints: React.FC<NicheBlueprintsProps> = ({ lang, onActionClick }) => {
  const niches = [
    {
      icon: <Stethoscope className="text-[#c5a059]" />,
      title: lang === 'ES' ? 'Médicos y Clínicas' : 'Doctors & Clinics',
      problem: lang === 'ES' ? 'Citas por WhatsApp' : 'WhatsApp Bookings',
      solution: lang === 'ES' ? 'Deja que tus pacientes miren tus servicios y trayectoria antes de llamar.' : 'Let patients see your services and track record before calling.'
    },
    {
      icon: <Scale className="text-[#c5a059]" />,
      title: lang === 'ES' ? 'Abogados y Consultores' : 'Lawyers & Consultants',
      problem: lang === 'ES' ? 'Falta de Autoridad' : 'Lack of Authority',
      solution: lang === 'ES' ? 'Tu firma merece una vitrina que grite seriedad. Atrae casos de alto valor.' : 'Your firm deserves a showcase that screams seriousness. Attract high-value cases.'
    },
    {
      icon: <Wrench className="text-[#c5a059]" />,
      title: lang === 'ES' ? 'Talleres y Detallado' : 'Workshops & Detailing',
      problem: lang === 'ES' ? 'Vender Confianza' : 'Selling Trust',
      solution: lang === 'ES' ? 'Muestra tus trabajos terminados. Que tu cliente deje de regatear.' : 'Show your finished work. Let the client stop haggling.'
    },
    {
      icon: <Sparkles className="text-[#c5a059]" />,
      title: lang === 'ES' ? 'Estéticas y Spas' : 'Aesthetics & Spas',
      problem: lang === 'ES' ? 'Imagen Visual' : 'Visual Image',
      solution: lang === 'ES' ? 'Captura la esencia de tu spa. Atrae clientes que buscan lujo.' : 'Capture your spa\'s essence. Attract clients looking for luxury.'
    },
    {
      icon: <Building2 className="text-[#c5a059]" />,
      title: lang === 'ES' ? 'Bienes Raíces Elite' : 'Elite Real Estate',
      problem: lang === 'ES' ? 'Ventas Lentas' : 'Slow Sales',
      solution: lang === 'ES' ? 'Presenta tus propiedades con el estatus que merecen.' : 'Present your properties with the status they deserve.'
    },
    {
      icon: <ShoppingBag className="text-[#c5a059]" />,
      title: lang === 'ES' ? 'Tiendas y Marcas' : 'Shops & Brands',
      problem: lang === 'ES' ? 'Ventas Online' : 'Online Sales',
      solution: lang === 'ES' ? 'Tu catálogo bilingüe listo hoy mismo. Simple, rápido y profesional.' : 'Your bilingual catalog ready today. Simple, fast, and professional.'
    }
  ];

  return (
    <section className="py-20 bg-[#030711] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            {lang === 'ES' ? 'SOLUCIONES PARA TU' : 'SOLUTIONS FOR YOUR'} <br/>
            <span className="text-gold-luxury">{lang === 'ES' ? 'NEGOCIO' : 'BUSINESS'}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {niches.map((n, i) => (
            <div key={i} className="group glass-luxury p-10 rounded-none border-white/5 hover:border-[#c5a059]/40 transition-all duration-500 reveal">
              <div className="w-14 h-14 bg-[#c5a059]/10 flex items-center justify-center mb-8 rounded-xl">
                {React.cloneElement(n.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">{n.title}</h3>
              <p className="text-[#c5a059] text-[9px] font-black uppercase tracking-[0.3em] mb-4 italic">{n.problem}</p>
              <p className="text-slate-400 text-xs leading-relaxed mb-8 font-light italic">"{n.solution}"</p>
              <button onClick={onActionClick} className="flex items-center gap-3 text-[9px] font-black text-slate-500 hover:text-[#c5a059] uppercase tracking-widest transition-colors group/btn">
                {lang === 'ES' ? 'COMIENZA' : 'START'}
                <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
