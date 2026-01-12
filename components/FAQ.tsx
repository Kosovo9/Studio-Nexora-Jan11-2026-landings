
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  lang: 'ES' | 'EN';
}

export const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const faqs = [
    {
      q: lang === 'ES' ? '¿Qué necesito para empezar?' : 'What do I need to start?',
      a: lang === 'ES' 
        ? 'Solo WhatsApp. Necesitaremos información sobre lo que buscas en tu landing page: teléfono, WhatsApp, correo, ¿Inglés/Español?, colores, sitio web, información personal y/o de empresa y fotos al respecto.' 
        : 'Just WhatsApp. We will need information about what you want on your landing page: phone, WhatsApp, email, English/Spanish?, colors, website, personal and/or company info, and relevant photos.'
    },
    {
      q: lang === 'ES' ? '¿Cómo realizo el pago?' : 'How do I pay?',
      a: lang === 'ES' 
        ? 'Aceptamos transferencia bancaria, Mercado Pago o PayPal. El primer pago se hace solo después de que apruebes el diseño inicial.' 
        : 'We accept bank transfers, Mercado Pago, or PayPal. The first payment is made only after you approve the initial design.'
    },
    {
      q: lang === 'ES' ? '¿Qué pasa si no me gusta el diseño?' : 'What if I don\'t like the design?',
      a: lang === 'ES' ? 'No se publica y no pagas nada. Sin compromisos ni cargos ocultos.' : 'It stays unpublished and you pay nothing. No commitments or hidden fees.'
    },
    {
      q: lang === 'ES' ? '¿Puedo usar mi propio dominio?' : 'Can I use my own domain?',
      a: lang === 'ES' ? '¡Sí! Podemos conectarla a un dominio que ya tengas (.com, .mx, etc.) o darte un subdominio nexorastudio.com gratuito.' : 'Yes! We can connect it to a domain you already own (.com, .mx, etc.) or provide a free nexorastudio.com subdomain.'
    }
  ];

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
          {lang === 'ES' ? 'Preguntas' : 'Common'} <span className="text-blue-500">{lang === 'ES' ? 'Frecuentes' : 'Questions'}</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <FAQItem key={i} question={f.q} answer={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass rounded-2xl overflow-hidden transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-bold text-white">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5">
          {answer}
        </div>
      )}
    </div>
  );
};
