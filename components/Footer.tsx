
import React from 'react';
import { REFERENCE_LANDING_LINK, CURRENCY_MXN, CURRENCY_USD } from '../constants';

interface FooterProps {
  lang: 'ES' | 'EN';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const qrDemo = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(REFERENCE_LANDING_LINK)}&color=ffffff&bgcolor=0f172a`;

  return (
    <footer className="py-24 border-t border-white/5 bg-[#0a0f1e] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-5">
              <div className="w-10 h-10 bg-[#c5a059] flex items-center justify-center shadow-lg">
                 <span className="text-[#0f172a] font-black text-lg">N</span>
              </div>
              <span className="font-semibold text-2xl tracking-tight text-white luxury-serif">
                NEXORA <span className="text-[#c5a059]">REAL ESTATE</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
              {lang === 'ES' 
                ? 'Soluciones tecnológicas avanzadas para la gestión y comercialización de activos inmobiliarios de alto valor. Ingeniería digital aplicada al ROI.' 
                : 'Advanced technological solutions for management and commercialization of high-value real estate assets. Digital engineering applied to ROI.'}
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-16">
            <div className="text-center lg:text-right">
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.4em] mb-6">{lang === 'ES' ? 'DEPARTAMENTOS' : 'DEPARTMENTS'}</h4>
              <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-slate-600">
                <li><a href="#hero" className="hover:text-[#c5a059] transition-colors">{lang === 'ES' ? 'COMERCIALIZACIÓN' : 'SALES'}</a></li>
                <li><a href="#portfolio" className="hover:text-[#c5a059] transition-colors">{lang === 'ES' ? 'PROYECTOS' : 'PROJECTS'}</a></li>
                <li><a href="#faq" className="hover:text-[#c5a059] transition-colors">{lang === 'ES' ? 'CONSULTORÍA' : 'CONSULTING'}</a></li>
              </ul>
            </div>
            
            <div className="p-8 glass-corp rounded-none border border-white/5 text-center group hover:border-[#c5a059]/20 transition-all duration-500 max-w-[200px]">
               <img src={qrDemo} alt="QR Asset Demo" className="w-24 h-24 mx-auto mb-4 opacity-40 group-hover:opacity-100 transition-all" />
               <p className="text-[9px] font-bold text-white uppercase tracking-[0.3em]">Scann Asset Demo</p>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-white/5">
           <div className="text-center space-y-6">
             <p className="text-[9px] text-slate-700 font-bold uppercase tracking-[0.3em] leading-relaxed max-w-4xl mx-auto italic">
               {lang === 'ES' 
                ? `Nota: NEXORA REAL ESTATE es una división de Studio Nexora especializada en consultoría tecnológica inmobiliaria. Todas las transacciones se rigen bajo los parámetros de cumplimiento legal y financiero vigentes.` 
                : `Note: NEXORA REAL ESTATE is a division of Studio Nexora specializing in real estate technological consulting. All transactions are governed by current legal and financial compliance parameters.`}
             </p>
             <p className="text-[10px] text-slate-600 font-medium tracking-[0.2em]">
               &copy; 2026 NEXORA ASSET MANAGEMENT. ELITE PARTNER PROGRAM.
             </p>
           </div>
        </div>
      </div>
    </footer>
  );
};
