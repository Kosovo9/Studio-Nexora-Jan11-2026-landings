
import React from 'react';
import { MessageSquare, Image, Rocket } from 'lucide-react';

interface ProcessProps {
  lang: 'ES' | 'EN';
}

export const Process: React.FC<ProcessProps> = ({ lang }) => {
  const steps = [
    {
      icon: <MessageSquare size={32} />,
      num: "1",
      title: lang === 'ES' ? 'Platicamos' : 'We Talk',
      desc: lang === 'ES' ? 'Cuéntanos sobre tu negocio por WhatsApp. Sin contratos complicados.' : 'Tell us about your business on WhatsApp. No complicated contracts.'
    },
    {
      icon: <Image size={32} />,
      num: "2",
      title: lang === 'ES' ? 'Diseñamos' : 'We Design',
      desc: lang === 'ES' ? 'Envíanos tus fotos e info. Creamos tu página de lujo en 24h.' : 'Send us your photos and info. We create your luxury page in 24h.'
    },
    {
      icon: <Rocket size={32} />,
      num: "3",
      title: lang === 'ES' ? 'Vende' : 'You Sell',
      desc: lang === 'ES' ? 'Lanzamos tu sitio. Si te encanta, pagas y empiezas a captar clientes.' : 'We launch your site. If you love it, you pay and we start capturing clients.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#030711] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <h2 className="text-3xl md:text-[3.4rem] font-black text-white mb-8 uppercase leading-[1.4] tracking-tighter luxury-serif">
            {lang === 'ES' ? 'TU CAMINO A' : 'THE ROAD TO'} <br/>
            <span className="text-[#c5a059]">{lang === 'ES' ? 'TUS PRIMERAS VENTAS' : 'YOUR FIRST SALES'}</span>
          </h2>
          <div className="w-24 h-1 bg-[#c5a059]/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {steps.map((s, i) => (
            <div key={i} className="group relative text-center reveal">
              <div className="mb-10 relative inline-flex items-center justify-center">
                 <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059]/10 transition-all duration-700">
                   {s.icon}
                 </div>
                 <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#c5a059] text-[#050a14] font-black flex items-center justify-center text-sm shadow-xl">
                   {s.num}
                 </div>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tighter uppercase">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed text-base font-light italic">"{s.desc}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
