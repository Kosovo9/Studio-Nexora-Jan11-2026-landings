import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  lang: 'ES' | 'EN';
}

export const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const faqs = [
    {
      q: lang === 'ES' ? '¿Cuánto tarda en estar lista mi Landing Page?' : 'How long does it take for my Landing Page to be ready?',
      a: lang === 'ES'
        ? 'Garantizamos la entrega de tu primera versión funcional en menos de 24 horas hábiles tras recibir tu información.'
        : 'We guarantee the delivery of your first functional version in less than 24 business hours after receiving your information.'
    },
    {
      q: lang === 'ES' ? '¿Tengo que pagar un anticipo?' : 'Do I have to pay an advance?',
      a: lang === 'ES'
        ? 'No. En Studio Nexora confiamos tanto en nuestra calidad que no pedimos anticipo. Pagas solo si te encanta el resultado final.'
        : 'No. At Studio Nexora we trust our quality so much that we do not ask for an advance. You only pay if you love the final result.'
    },
    {
      q: lang === 'ES' ? '¿Qué necesito para empezar?' : 'What do I need to start?',
      a: lang === 'ES'
        ? 'Solo WhatsApp. Necesitaremos información sobre lo que buscas en tu landing page: teléfono, WhatsApp, correo, colores de marca e información básica.'
        : 'Just WhatsApp. We will need information about what you want on your landing page: phone, WhatsApp, email, brand colors, and basic info.'
    },
    {
      q: lang === 'ES' ? '¿Qué medios de pago aceptan?' : 'What payment methods do you accept?',
      a: lang === 'ES'
        ? 'Aceptamos transferencia bancaria (SPEI), Mercado Pago y PayPal. Emitimos factura si lo requieres.'
        : 'We accept bank transfers, Mercado Pago, and PayPal. We can issue an invoice if required.'
    },
    {
      q: lang === 'ES' ? '¿Puedo usar mi propio dominio?' : 'Can I use my own domain?',
      a: lang === 'ES' ? '¡Sí! Podemos conectarla a un dominio que ya tengas (.com, .mx, etc.) o darte un subdominio nexorastudio.com gratuito.' : 'Yes! We can connect it to a domain you already own (.com, .mx, etc.) or provide a free nexorastudio.com subdomain.'
    }
  ];

  return (
    <section id="faq" className="py-32 bg-[#030711]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <div className="text-blue-500 font-black text-[10px] uppercase tracking-[0.5em] mb-8">Support Center</div>
          {/* TITULAR RECTIFICADO: DOBLE ESPACIO (1.4) */}
          <h2 className="text-3xl md:text-[3.4rem] font-black text-white uppercase leading-[1.4] tracking-tighter">
            {lang === 'ES' ? 'PREGUNTAS' : 'COMMON'} <br />
            <span className="text-metallic-gold">{lang === 'ES' ? 'FRECUENTES' : 'QUESTIONS'}</span>
          </h2>
        </div>

        <div className="space-y-6 reveal" style={{ transitionDelay: '200ms' }}>
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
    <div className={`glass rounded-[2rem] overflow-hidden border transition-all duration-500 ${isOpen ? 'border-blue-500/40 bg-blue-600/5' : 'border-white/5'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-black text-white text-sm md:text-lg uppercase tracking-tight leading-tight">{question}</span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-white/5 text-slate-500'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="p-8 pt-0 text-slate-400 text-sm md:text-base leading-relaxed font-medium border-t border-white/5">
          {answer}
        </div>
      </div>
    </div>
  );
};