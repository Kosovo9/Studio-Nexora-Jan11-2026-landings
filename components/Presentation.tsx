
import React from 'react';
import { Smartphone, Zap, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface PresentationProps {
  lang: 'ES' | 'EN';
  currency: 'USD' | 'MXN';
  onReserveClick?: () => void;
}

export const Presentation: React.FC<PresentationProps> = ({ lang, onReserveClick }) => {
  return (
    <section id="transformation" className="py-24 bg-[#050a14] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl md:text-6xl font-black text-white luxury-serif mb-6 uppercase tracking-tighter">
            {lang === 'ES' ? 'EL CAMBIO QUE' : 'THE CHANGE'} <br/>
            <span className="text-blue-500">{lang === 'ES' ? 'TU NEGOCIO MERECE' : 'YOUR BUSINESS DESERVES'}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* El Antes */}
          <div className="reveal glass p-10 rounded-[3rem] border-red-500/10 opacity-60">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400">
                <AlertCircle size={24} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">{lang === 'ES' ? 'Situación Actual' : 'Current Situation'}</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-slate-500 text-sm italic">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2"></span>
                {lang === 'ES' ? 'Explicas precios 50 veces al día por WhatsApp.' : 'You explain prices 50 times a day on WhatsApp.'}
              </li>
              <li className="flex items-start gap-4 text-slate-500 text-sm italic">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2"></span>
                {lang === 'ES' ? 'Tus clientes dudan de tu profesionalismo por no tener web.' : 'Clients doubt your professionalism without a website.'}
              </li>
              <li className="flex items-start gap-4 text-slate-500 text-sm italic">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2"></span>
                {lang === 'ES' ? 'Pierdes ventas por falta de un catálogo claro y elegante.' : 'You lose sales for lack of a clear, elegant catalog.'}
              </li>
            </ul>
          </div>

          {/* El Después */}
          <div className="reveal glass p-10 rounded-[3rem] border-blue-500/30 bg-blue-600/[0.02]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">{lang === 'ES' ? 'Identidad Nexora' : 'Nexora Identity'}</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-slate-300 text-sm font-semibold">
                <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                {lang === 'ES' ? 'Tu web vende por ti las 24 horas del día.' : 'Your website sells for you 24 hours a day.'}
              </li>
              <li className="flex items-start gap-4 text-slate-300 text-sm font-semibold">
                <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                {lang === 'ES' ? 'Cobras más caro porque tu marca se ve de lujo.' : 'You charge more because your brand looks luxurious.'}
              </li>
              <li className="flex items-start gap-4 text-slate-300 text-sm font-semibold">
                <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                {lang === 'ES' ? 'Proceso automatizado: El cliente llega ya convencido.' : 'Automated process: The client arrives already convinced.'}
              </li>
            </ul>
          </div>
        </div>

        <div className="reveal text-center">
          <button 
            onClick={onReserveClick}
            className="inline-flex items-center gap-4 px-12 py-6 bg-blue-600 text-white font-black rounded-full uppercase tracking-[0.2em] text-xs hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30"
          >
            {lang === 'ES' ? 'TRANSFORMAR MI NEGOCIO' : 'TRANSFORM MY BUSINESS'}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
