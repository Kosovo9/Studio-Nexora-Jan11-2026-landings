import React, { useState } from 'react';
import { X, Check, ArrowRight, Zap, Globe, Layout, Smartphone, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER, CURRENCY_MXN, CURRENCY_USD } from '../constants';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ES' | 'EN';
  currency: 'USD' | 'MXN';
  referralCode?: string | null;
}

interface ConfigOptionProps {
  active: boolean;
  onClick: () => void;
  title: string;
  desc: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, lang, currency, referralCode }) => {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState({
    identity: 'Individual',
    urgency: 'Standard',
    hosting: 'Nexora'
  });

  if (!isOpen) return null;

  const price = currency === 'MXN' ? CURRENCY_MXN : CURRENCY_USD;
  const extraUrgent = currency === 'MXN' ? '+500' : '+$30';

  const handleLaunch = () => {
    const base = lang === 'ES' 
      ? `¡Hola Nexora! Quiero mi Landing Elite configurada así:
• Identidad: ${config.identity}
• Urgencia: ${config.urgency}
• Hosting: ${config.hosting}` 
      : `Hi Nexora! I want my Elite Landing configured as follows:
• Identity: ${config.identity}
• Urgency: ${config.urgency}
• Hosting: ${config.hosting}`;
    
    const refText = referralCode ? `\nREF: ${referralCode}` : "";
    const fullMsg = encodeURIComponent(base + refText);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${fullMsg}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#030711]/90 backdrop-blur-2xl transition-opacity animate-in fade-in" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-[#0a0f1e] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <Zap size={18} className="text-blue-500 fill-blue-500" />
              <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Configurador Elite OS</span>
           </div>
           <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
             <X size={24} />
           </button>
        </div>

        <div className="p-8 md:p-12">
          {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{lang === 'ES' ? '1. Identidad Digital' : '1. Digital Identity'}</h3>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">{lang === 'ES' ? '¿Cuál es el enfoque de tu landing?' : 'What is the focus of your landing?'}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ConfigOption 
                  active={config.identity === 'Individual'} 
                  onClick={() => setConfig({...config, identity: 'Individual'})}
                  title={lang === 'ES' ? 'Personal' : 'Individual'}
                  desc={lang === 'ES' ? 'Expertos y Consultores' : 'Experts & Consultants'}
                  icon={<Smartphone size={18}/>}
                />
                <ConfigOption 
                  active={config.identity === 'Business'} 
                  onClick={() => setConfig({...config, identity: 'Business'})}
                  title={lang === 'ES' ? 'Negocio' : 'Business'}
                  desc={lang === 'ES' ? 'Agencias y Empresas' : 'Agencies & Firms'}
                  icon={<Layout size={18}/>}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{lang === 'ES' ? '2. Prioridad de Entrega' : '2. Delivery Priority'}</h3>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">{lang === 'ES' ? '¿Cuándo quieres estar en vivo?' : 'When do you want to be live?'}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ConfigOption 
                  active={config.urgency === 'Standard'} 
                  onClick={() => setConfig({...config, urgency: 'Standard'})}
                  title={lang === 'ES' ? 'Estándar' : 'Standard'}
                  desc={lang === 'ES' ? 'Entrega en 24h' : '24h Delivery'}
                  icon={<Globe size={18}/>}
                />
                <ConfigOption 
                  active={config.urgency === 'Express'} 
                  onClick={() => setConfig({...config, urgency: 'Express'})}
                  title={lang === 'ES' ? 'Express 1h' : 'Express 1h'}
                  desc={`${lang === 'ES' ? 'Prioridad Absoluta' : 'Absolute Priority'} (${extraUrgent})`}
                  icon={<Zap size={18}/>}
                  highlight
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 text-center">
              <div className="w-20 h-20 bg-blue-600/20 rounded-3xl flex items-center justify-center mx-auto text-blue-500 mb-6 shadow-xl">
                 <ShieldCheck size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{lang === 'ES' ? 'Configuración Lista' : 'Config Ready'}</h3>
                <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                  {lang === 'ES' 
                    ? 'Tu propuesta Elite ha sido generada. Al presionar el botón, iniciaremos el protocolo de diseño en WhatsApp.' 
                    : 'Your Elite proposal has been generated. By pressing the button, we will start the design protocol on WhatsApp.'}
                </p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl inline-block">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em] mb-1">{lang === 'ES' ? 'Total Estimado' : 'Estimated Total'}</p>
                <p className="text-3xl font-black text-metallic-gold">${price}.00 <span className="text-xs text-slate-500">+{currency}</span></p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-8 bg-[#030711] border-t border-white/5 flex items-center justify-between">
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${step === i ? 'bg-blue-600 w-6' : 'bg-white/10'}`} />
            ))}
          </div>
          
          <div className="flex gap-4">
            {step > 1 && (
              <button 
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:text-white"
              >
                {lang === 'ES' ? 'Atrás' : 'Back'}
              </button>
            )}
            <button 
              onClick={step === 3 ? handleLaunch : () => setStep(step + 1)}
              className="px-10 py-4 bg-blue-600 text-white font-black rounded-xl uppercase tracking-widest text-[10px] flex items-center gap-3 shadow-xl shadow-blue-600/30 hover:bg-blue-500 active:scale-95 transition-all"
            >
              {step === 3 ? (lang === 'ES' ? 'Lanzar Proyecto' : 'Launch Project') : (lang === 'ES' ? 'Siguiente' : 'Next')}
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConfigOption: React.FC<ConfigOptionProps> = ({ active, onClick, title, desc, icon, highlight }) => (
  <button 
    onClick={onClick}
    className={`p-6 text-left rounded-2xl border transition-all duration-300 group ${
      active 
        ? 'bg-blue-600/10 border-blue-500 shadow-lg shadow-blue-500/10' 
        : 'bg-white/5 border-white/10 hover:border-white/20'
    } ${highlight && !active ? 'border-amber-500/30' : ''}`}
  >
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${active ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-500 group-hover:text-slate-300'}`}>
      {icon}
    </div>
    <div className="flex items-center justify-between mb-1">
      <h4 className={`text-sm font-black uppercase tracking-widest ${active ? 'text-white' : 'text-slate-400'}`}>{title}</h4>
      {active && <Check size={14} className="text-blue-500" />}
    </div>
    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-tight">{desc}</p>
  </button>
);