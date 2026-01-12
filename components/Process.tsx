
import React from 'react';
import { MessageSquare, FolderPlus, Rocket } from 'lucide-react';

interface ProcessProps {
  lang: 'ES' | 'EN';
}

export const Process: React.FC<ProcessProps> = ({ lang }) => {
  const steps = [
    {
      icon: <MessageSquare size={24} />,
      num: "01",
      title: lang === 'ES' ? 'Sincronía Inicial' : 'Initial Sync',
      desc: lang === 'ES' ? 'Reservas tu lugar de Socio vía WhatsApp. Definimos visión y objetivos.' : 'Reserve your Partner spot via WhatsApp. We define vision and goals.'
    },
    {
      icon: <FolderPlus size={24} />,
      num: "02",
      title: lang === 'ES' ? 'Entrega de Assets' : 'Asset Delivery',
      desc: lang === 'ES' ? 'Envías logos, fotos e info básica. Nosotros orquestamos la narrativa.' : 'Send logos, photos, and basic info. We orchestrate the narrative.'
    },
    {
      icon: <Rocket size={24} />,
      num: "03",
      title: lang === 'ES' ? 'Despliegue Élite' : 'Elite Deployment',
      desc: lang === 'ES' ? 'Estrenas en 24h. Si el resultado te enamora, procedemos al pago y entrega final.' : 'Launch in 24h. If the result captivates you, we proceed to payment and final delivery.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#050a14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {lang === 'ES' ? 'Ingeniería en' : 'Engineering in'} <span className="text-blue-500">3 Fases</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Conectores Visuales (Solo Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          
          {steps.map((s, i) => (
            <div key={i} className="group relative text-center reveal" style={{ transitionDelay: `${i * 200}ms` }}>
              <div className="mb-8 relative inline-flex items-center justify-center">
                 <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:border-blue-500 group-hover:bg-blue-600/10 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-6">
                   {s.icon}
                 </div>
                 <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-blue-600 text-white font-mono font-black flex items-center justify-center text-sm shadow-xl">
                   {s.num}
                 </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
