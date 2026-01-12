
import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  lang: 'ES' | 'EN';
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const testimonials = [
    {
      name: 'Oscar Tapia',
      role: lang === 'ES' ? 'Consultor de Negocios' : 'Business Consultant',
      text: lang === 'ES' 
        ? 'La velocidad de entrega fue increíble. En menos de 24 horas ya tenía mi landing lista para recibir clientes. El diseño superó mis expectativas.'
        : 'The delivery speed was incredible. In less than 24 hours my landing was ready for clients. The design exceeded my expectations.',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
      startBW: true
    },
    {
      name: 'Elena Rodríguez',
      role: lang === 'ES' ? 'Directora de Arte' : 'Art Director',
      text: lang === 'ES'
        ? 'Buscaba algo que no pareciera una plantilla barata. Studio Nexora logró capturar la esencia de mi marca con un estilo sofisticado y fluido.'
        : 'I was looking for something that didn\'t look like a cheap template. Studio Nexora captured my brand essence with a sophisticated style.',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      startBW: false
    },
    {
      name: 'Marcus Chen',
      role: lang === 'ES' ? 'Tech Founder' : 'Tech Founder',
      text: lang === 'ES'
        ? 'El soporte dual language y la optimización móvil son impecables. Definitivamente el mejor socio para proyectos digitales rápidos.'
        : 'The dual language support and mobile optimization are flawless. Definitely the best partner for fast digital projects.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      startBW: true
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#050a14] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-[0.3em] border border-blue-500/20 mb-4 uppercase">
            {lang === 'ES' ? 'Voz de nuestros Socios' : 'Voice of our Partners'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {lang === 'ES' ? 'Resultados que' : 'Results that'} <span className="text-metallic-gold">Hablan</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group glass p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all duration-700 reveal"
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="flex gap-1 text-amber-500 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              
              <div className="relative mb-8">
                <Quote size={40} className="text-blue-500/10 absolute -top-4 -left-4" />
                <p className="text-slate-400 text-sm leading-relaxed italic relative z-10">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/10">
                  <img 
                    src={t.img} 
                    alt={t.name} 
                    className={`w-full h-full object-cover transition-all duration-1000 ${t.startBW ? 'grayscale group-hover:grayscale-0' : 'grayscale-0 group-hover:grayscale'}`}
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">{t.name}</h4>
                  <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
