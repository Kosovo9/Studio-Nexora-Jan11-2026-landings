import React from 'react';
import { 
  ShoppingBag, 
  Stethoscope, 
  Building2, 
  Store, 
  ShieldCheck, 
  Briefcase, 
  Utensils, 
  Dumbbell, 
  Wrench, 
  GraduationCap, 
  CheckCircle2,
  ArrowRight,
  Car,
  Compass
} from 'lucide-react';

interface NicheBlueprintsProps {
  lang: 'ES' | 'EN';
  onActionClick?: () => void;
}

export const NicheBlueprints: React.FC<NicheBlueprintsProps> = ({ lang, onActionClick }) => {
  const niches = [
    {
      icon: <ShoppingBag className="text-pink-500" />,
      title: lang === 'ES' ? 'Moda & Boutique' : 'Fashion & Boutique',
      superpower: lang === 'ES' ? 'Catálogo 1-Click' : '1-Click Catalog',
      desc: lang === 'ES' ? 'Tus clientes eligen talla y color, y te mandan el pedido exacto por WhatsApp. Adiós a las 100 preguntas de "precio?".' : 'Customers pick size/color and send the exact order via WhatsApp. No more "price?" questions.',
      benefit: lang === 'ES' ? '+60% Velocidad de Venta' : '+60% Sales Speed'
    },
    {
      icon: <Stethoscope className="text-blue-400" />,
      title: lang === 'ES' ? 'Médicos & Clínicas' : 'Doctors & Clinics',
      superpower: lang === 'ES' ? 'Agenda Inteligente' : 'Smart Booking',
      desc: lang === 'ES' ? 'El paciente agenda su cita 24/7 sin que tú o tu asistente contesten una sola llamada. Todo fluye en automático.' : 'Patients book 24/7 without you or your assistant taking a single call. Everything flows automatically.',
      benefit: lang === 'ES' ? 'Cero Llamadas Perdidas' : 'Zero Missed Calls'
    },
    {
      icon: <Building2 className="text-amber-500" />,
      title: lang === 'ES' ? 'Real Estate Premium' : 'Premium Real Estate',
      superpower: lang === 'ES' ? 'Inmuebles Infinitos' : 'Infinite Inventory',
      desc: lang === 'ES' ? 'Filtros de zona, precio y fotos 4K. El prospecto entra por una casa y termina viendo todo tu catálogo.' : 'Zone/price filters and 4K photos. The prospect enters for one house and ends up seeing your whole catalog.',
      benefit: lang === 'ES' ? 'X3 Exposición de Cartera' : 'X3 Portfolio Exposure'
    },
    {
      icon: <Car className="text-slate-300" />,
      title: lang === 'ES' ? 'Automotriz (Venta/Renta)' : 'Automotive (Sales/Rent)',
      superpower: lang === 'ES' ? 'Showroom Virtual' : 'Virtual Showroom',
      desc: lang === 'ES' ? 'Exhibe tu flota con specs técnicos, videos de motor y botón de "Apartar Test-Drive". Para autos de gama alta y exóticos.' : 'Showcase your fleet with tech specs, engine videos, and "Book Test-Drive" button. For high-end and exotic cars.',
      benefit: lang === 'ES' ? 'Cierre de Leads Calificados' : 'Qualified Lead Closing'
    },
    {
      icon: <Compass className="text-blue-500" />,
      title: lang === 'ES' ? 'Luxury Concierge' : 'Luxury Concierge',
      superpower: lang === 'ES' ? 'Venta High-Ticket' : 'High-Ticket Sales',
      desc: lang === 'ES' ? 'Renta de yates, villas y jets privados. Una interfaz que proyecta la exclusividad que tus clientes VIP demandan.' : 'Yacht, villa, and private jet rentals. An interface that projects the level of exclusivity your VIP clients demand.',
      benefit: lang === 'ES' ? 'Margen de Ganancia Elite' : 'Elite Profit Margin'
    },
    {
      icon: <Store className="text-emerald-500" />,
      title: lang === 'ES' ? 'Tiendas Locales' : 'Local Stores',
      superpower: lang === 'ES' ? 'Mini-Amazon en 24h' : '24h Mini-Amazon',
      desc: lang === 'ES' ? 'Digitaliza tu stock. El cliente busca lo que necesita, llena el carrito y paga al recibir o vía transferencia.' : 'Digitize your stock. Customers search, fill the cart, and pay on delivery or transfer.',
      benefit: lang === 'ES' ? 'Venta 24/7 en Automático' : '24/7 Automated Sales'
    },
    {
      icon: <ShieldCheck className="text-blue-500" />,
      title: lang === 'ES' ? 'Consultores & Abogados' : 'Consultants & Law',
      superpower: lang === 'ES' ? 'Muro de Autoridad' : 'Authority Wall',
      desc: lang === 'ES' ? 'Proyecta confianza elite. Testimonios y casos de éxito que cierran la venta antes de la primera reunión.' : 'Project elite trust. Testimonials and success cases that close the deal before the first meeting.',
      benefit: lang === 'ES' ? 'Cierre de Clientes Pro' : 'Pro Client Closing'
    },
    {
      icon: <Utensils className="text-orange-500" />,
      title: lang === 'ES' ? 'Restaurantes & Menús' : 'Food & Restaurants',
      superpower: lang === 'ES' ? 'Menú Interactivo' : 'Interactive Menu',
      desc: lang === 'ES' ? 'Fotos que enamoran. El cliente ordena desde la mesa o para domicilio con un botón táctil de alta respuesta.' : 'Mouth-watering photos. Customers order from the table or for home with a high-response tactile button.',
      benefit: lang === 'ES' ? 'Ticket Promedio +25%' : 'Average Ticket +25%'
    },
    {
      icon: <Dumbbell className="text-indigo-400" />,
      title: lang === 'ES' ? 'Gimnasios & Coaches' : 'Gyms & Coaches',
      superpower: lang === 'ES' ? 'Hub de Miembros' : 'Member Hub',
      desc: lang === 'ES' ? 'Vende tus membresías en línea y muestra tus rutinas o planes de alimentación en una interfaz de lujo.' : 'Sell memberships online and showcase your routines or meal plans in a luxury interface.',
      benefit: lang === 'ES' ? 'Retención de Clientes' : 'Customer Retention'
    },
    {
      icon: <Wrench className="text-slate-400" />,
      title: lang === 'ES' ? 'Servicios Técnicos' : 'Technical Services',
      superpower: lang === 'ES' ? 'Cotizador Pro' : 'Pro Quoter',
      desc: lang === 'ES' ? 'Talleres, fontanería o limpieza. El cliente describe su problema y recibe un presupuesto base al instante.' : 'Workshops, plumbing, or cleaning. Customers describe their issue and get an instant quote.',
      benefit: lang === 'ES' ? 'Filtro de Clientes Serios' : 'Serious Client Filtering'
    },
    {
      icon: <GraduationCap className="text-purple-400" />,
      title: lang === 'ES' ? 'Educación & Cursos' : 'Education & Courses',
      superpower: lang === 'ES' ? 'Portal de Registro' : 'Registration Portal',
      desc: lang === 'ES' ? 'Vende tus talleres o asesorías. Pasarela de pago integrada y registro automático de alumnos.' : 'Sell your workshops or coaching. Integrated payment gateway and automatic student registration.',
      benefit: lang === 'ES' ? 'Escalabilidad Global' : 'Global Scalability'
    },
    {
      icon: <CheckCircle2 className="text-green-500" />,
      title: lang === 'ES' ? 'Farmacias & Salud' : 'Pharmacy & Health',
      superpower: lang === 'ES' ? 'Buscador de Stock' : 'Stock Searcher',
      desc: lang === 'ES' ? 'El cliente sabe si tienes el medicamento antes de salir de casa. Compras rápidas por chat.' : 'Customers know if you have the medicine before leaving home. Fast chat shopping.',
      benefit: lang === 'ES' ? 'Fidelidad del Barrio' : 'Local Loyalty'
    }
  ];

  return (
    <section className="py-24 bg-[#030711] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.4em] border border-blue-500/20 mb-10 uppercase">
             Business ADN Deep Dive
          </div>
          <h2 className="text-3xl md:text-[3.2rem] font-black text-white mb-6 uppercase leading-[1.3] tracking-tighter">
            {lang === 'ES' ? '¿CÓMO MULTIPLICA' : 'HOW NEXORA'} <br/>
            <span className="text-metallic-gold">{lang === 'ES' ? 'TU NEGOCIO REAL?' : 'MULTIPLIES YOUR BUSINESS?'}</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {lang === 'ES' 
              ? 'No vendemos píxeles. Vendemos soluciones operativas que te ahorran horas de WhatsApp y te ayudan a cobrar más.' 
              : 'We don\'t sell pixels. We sell operational solutions that save you hours of WhatsApp and help you charge more.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {niches.map((n, i) => (
            <div 
              key={i} 
              className="group glass p-8 md:p-12 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all duration-700 reveal flex flex-col md:flex-row gap-8"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600/10 transition-all duration-500 shadow-2xl">
                  {React.cloneElement(n.icon as React.ReactElement, { size: 40 })}
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-black text-white tracking-tight uppercase">{n.title}</h3>
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[9px] font-black text-blue-400 uppercase tracking-widest">
                    {n.superpower}
                  </span>
                </div>
                
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                  {n.desc}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-white/5">
                   <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="text-[10px] font-black text-green-500 uppercase tracking-widest italic">{n.benefit}</span>
                   </div>
                   <button 
                    onClick={onActionClick}
                    className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest flex items-center gap-2 group/btn transition-colors"
                   >
                     {lang === 'ES' ? 'LO QUIERO' : 'I WANT THIS'}
                     <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};