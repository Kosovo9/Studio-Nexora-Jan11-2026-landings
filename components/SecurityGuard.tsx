
import React, { useEffect, useState } from 'react';
import { ShieldAlert, ShieldCheck, Lock } from 'lucide-react';

export const SecurityGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isClone, setIsClone] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // 1. Anti-Clon: Domain Lock
    const authorizedDomains = [
      'localhost', 
      '127.0.0.1',
      'nexorastudio.com', 
      'studio-nexora.com', 
      'www.studio-nexora.com',
      'socionexora.netlify.app',
      'webcontainer.io', 
      'stackblitz.io',
      'stackblitz.com',
      'netlify.app',
      'vercel.app'
    ];
    
    const currentDomain = window.location.hostname.toLowerCase();
    
    // Verificación de seguridad de dominio
    const isAuthorized = currentDomain === "" || authorizedDomains.some(d => currentDomain.includes(d));
    
    if (!isAuthorized) {
      setIsClone(true);
      console.error("NEXORA SHIELD: UNAUTHORIZED DOMAIN DETECTED ->", currentDomain);
    }

    // 2. Anti-Copy: Disable Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'i' || e.key === 'j')) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        triggerShieldAlert();
      }
    };

    // 3. Anti-Right Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      triggerShieldAlert();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const triggerShieldAlert = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (isClone) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#030711] flex items-center justify-center p-8 text-center">
        <div className="max-w-md space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-red-600/20 rounded-3xl flex items-center justify-center mx-auto border border-red-600/50 shadow-[0_0_50px_rgba(220,38,38,0.2)]">
            <ShieldAlert size={48} className="text-red-500" />
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tighter text-white leading-none">Versión no oficial detectada</h1>
          <p className="text-slate-400 leading-relaxed font-medium">
            Este sitio es un clon no autorizado de <strong>Studio Nexora</strong>. Por tu seguridad, accede siempre desde el dominio oficial.
          </p>
          <div className="pt-4">
            <a href="https://www.studio-nexora.com" className="inline-block px-10 py-5 bg-blue-600 text-white font-black rounded-2xl uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-blue-600/30 hover:bg-blue-500 transition-all active:scale-95">
              Ir al sitio oficial
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {children}
      {showToast && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[1000] px-8 py-4 glass rounded-2xl border border-blue-500/50 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
            <Lock size={16} className="text-white" />
          </div>
          <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
            Nexora Shield: Contenido Protegido
          </span>
        </div>
      )}
    </>
  );
};
