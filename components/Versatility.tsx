import React from 'react';
import { Briefcase, HeartPulse, Building2, Palette, UserCheck, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface VersatilityProps {
  lang: 'ES' | 'EN';
  referralCode?: string | null;
}

export const Versatility: React.FC<VersatilityProps> = ({ lang, referralCode }) => {
  const niches = [
    {
      icon: <UserCheck className="text-blue-500" />,
      title: lang === 'ES' ? 'Servicios Profesionales' : 'Professional Services',
      desc: lang === 'ES' ? 'Abogados, Contadores y Consultores que buscan autoridad inmediata.' : 'Lawyers, Accountants, and Consultants seeking immediate authority.',
      examples: lang === 'ES' ? 'Firmas Legales, Coaching, Finanzas' : 'Law Firms, Coaching, Finance'
    },
    {
      icon: <HeartPulse className="text-rose-500" />,
      title: lang === 'ES' ? 'Salud y Bienestar' : 'Health & Wellness',
      desc: lang === 'ES' ? 'Médicos, Clínicas y Spas de lujo con sistemas de contacto rápido.' : 'Doctors, Clinics, and Luxury Spas with fast contact systems.',
      examples: lang === 'ES' ? 'Cirujanos, Dentistas, Wellness' : 'Surgeons, Dentists, Wellness'
    },
    {
      icon: <Building2 className="text-amber-500" />,
      title: lang === 'ES' ? 'Real Estate Elite' : 'Elite Real Estate',
      desc: lang === 'ES' ? 'Exhibición de propiedades y captación de leads de alto valor.' : 'Property showcase and high-value lead generation.',
      examples: lang === 'ES' ? 'Brokers, Desarrollos, Rentas' : 'Brokers, Developments, Rentals'
    },
    {
      icon: <Palette className="text-purple-500" />,
      title: lang === 'ES' ? 'Creativos y Portafolios' : 'Creatives & Portfolios',
      desc: lang === 'ES' ? 'Fotógrafos, Artistas y Arquitectos con diseño estético superior.' : 'Photographers, Artists, and Architects with superior aesthetic design.',
      examples: lang === 'ES' ? 'Studios, Galerías, Freelancers' : 'Studios, Galleries, Freelancers'
    },
    {
      icon: <ShoppingBag className="text-emerald-500" />,
      title: lang === 'ES' ? 'E-commerce & Ventas' : 'E-commerce & Sales',
      desc: lang === 'ES' ? 'Landings de producto diseñadas para convertir clics en dinero.' : 'Product landings designed to convert clicks into revenue.',
      examples: lang === 'ES' ? 'Lanzamientos, Dropshipping, Cursos' : 'Launches, Dropshipping, Courses'
    },
    {
      icon: <Briefcase className="text-blue-400" />,
      title: lang === 'ES' ? 'Marca Personal' : 'Personal Branding',
      desc: lang === 'ES' ? 'Speakers, Autores y Líderes de opinión proyectando éxito global.' : 'Speakers, Authors, and Thought Leaders projecting global success.',
      examples: lang === 'ES' ? 'Influencers, Mentores, Conferencias' : 'Influencers, Mentors, Conferences'
    }
  ];

  const waLink = referralCode 
    ? `${WHATSAPP_LINK}&text=${encodeURIComponent(`Hola Nexora! Me interesa una landing para mi negocio. REF: ${referralCode}`)}`
    : WHATSAPP_LINK;

  return (
    <section id="versatility" className="py-24 bg-[#030711] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-[1.4]">
            {lang === 'ES' ? 'CUALQUIER GIRO,' : 'ANY BUSINESS,'} <br/>
            <span className="text-metallic-gold">{lang === 'ES' ? 'INGENIERÍA SIN LÍMITES' : 'LIMITLESS ENGINEERING'}</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            {lang === 'ES' 
              ? 'No importa tu profesión. Si buscas cerrar más ventas, proyectar lujo o digitalizar tu servicio, tenemos la estructura perfecta para ti.'
              : 'Your profession doesn\'t matter. If you want to close more sales, project luxury, or digitize your service, we have the perfect structure for you.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {niches.map((n, i) => (
            <div key={i} className="group glass p-8 rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {n.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{n.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{n.desc}</p>
              <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                <CheckCircle2 size={12} className="text-blue-500" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{n.examples}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 reveal">
          <div className="glass p-10 rounded-[2.5rem] border-2 border-blue-500/20 bg-blue-600/5 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            
            {/* TITULAR RECTIFICADO: DOBLE ESPACIO (1.4) Y BALANCEADO AL 30% */}
            <h3 className="text-xl md:text-[2.2rem] font-black text-white mb-10 uppercase tracking-tight leading-[1.4]">
              {lang === 'ES' ? '¿Listo para dominar tu mercado?' : 'Ready to dominate your market?'}
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-14 py-7 bg-blue-600 text-white font-black rounded-[1.8rem] uppercase tracking-[0.3em] text-[11px] shadow-[0_30px_60px_rgba(37,99,235,0.3)] hover:bg-blue-500 transition-all active:scale-95 flex items-center justify-center gap-4 border border-white/20"
              >
                {lang === 'ES' ? 'SOLICITAR MI LANDING ELITE' : 'REQUEST MY ELITE LANDING'}
                <ArrowRight size={18} />
              </a>
            </div>
            
            <p className="mt-10 text-[9px] text-slate-600 font-bold uppercase tracking-[0.5em]">
              {lang === 'ES' ? 'Entrega garantizada en 24 horas • Sin anticipo inicial' : 'Guaranteed 24-hour delivery • No upfront payment'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};