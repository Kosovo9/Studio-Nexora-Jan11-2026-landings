
import React from 'react';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { LINKEDIN_LINK, EMAIL_LINK, WHATSAPP_LINK, REFERENCE_LANDING_LINK } from '../constants';

interface FooterProps {
  lang: 'ES' | 'EN';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const qrDemo = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(REFERENCE_LANDING_LINK)}&color=ffffff&bgcolor=050a14`;

  return (
    <footer className="py-20 border-t border-white/5 bg-[#050a14] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                 <span className="text-white font-black text-sm">N</span>
              </div>
              <span className="font-poppins font-bold text-xl tracking-tighter text-white">
                <span className="text-blue-500">STUDIO</span>&nbsp;&nbsp;NEXORA
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {lang === 'ES' 
                ? 'Artesanos digitales enfocados en la excelencia visual y la conversión. Tu éxito es nuestra métrica más importante.' 
                : 'Digital artisans focused on visual excellence and conversion. Your success is our most important metric.'}
            </p>
            {/* Social Links updated to match user screenshot style */}
            <div className="flex gap-5">
              <SocialLink href={LINKEDIN_LINK} icon={<Linkedin size={24} />} label="LinkedIn" />
              <SocialLink href={EMAIL_LINK} icon={<Mail size={24} />} label="Email" />
              <SocialLink href={WHATSAPP_LINK} icon={<MessageCircle size={24} />} label="WhatsApp" />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-lg">{lang === 'ES' ? 'Secciones' : 'Sections'}</h4>
            <ul className="space-y-2 text-sm">
              <li><FooterLink href="#hero" text={lang === 'ES' ? 'Inicio' : 'Home'} /></li>
              <li><FooterLink href="#presentation" text={lang === 'ES' ? 'Presentación' : 'Showcase'} /></li>
              <li><FooterLink href="#portfolio" text={lang === 'ES' ? 'Portafolio' : 'Portfolio'} /></li>
              <li><FooterLink href="#faq" text={lang === 'ES' ? 'Preguntas' : 'FAQ'} /></li>
            </ul>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex justify-center lg:justify-start">
              {/* Bloque QR aumentado un 35% */}
              <div className="p-6 glass rounded-[2.5rem] border border-white/5 text-center group hover:border-white/20 transition-all duration-500 max-w-[216px]">
                 <img src={qrDemo} alt="QR Demo" className="w-28 h-28 mx-auto rounded-xl mb-3 opacity-50 group-hover:opacity-100 transition-all" />
                 <p className="text-[12px] font-black text-white uppercase tracking-widest">Demo Site</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-[10px] text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} STUDIO NEXORA. DIGITAL PRECISION HUB.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-16 h-16 rounded-[1.2rem] bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40 transition-all duration-500 group shadow-lg" 
    aria-label={label}
  >
    <div className="group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
  </a>
);

const FooterLink = ({ href, text }: { href: string, text: string }) => (
  <a href={href} className="text-slate-500 hover:text-blue-400 transition-colors block py-1">{text}</a>
);
