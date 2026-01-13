import React, { useEffect, useState } from 'react';
import { Lock } from 'lucide-react';

export const SecurityGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Nexora Shield: Protocolo de Sensibilización (Sin Bloqueo de Acceso)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's')) ||
        e.key === 'F12'
      ) {
          e.preventDefault();
          triggerShieldAlert();
      }
    };

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

  return (
    <>
      {/* EL ACCESO ES SIEMPRE LIBRE - NO HAY CONDICIONALES DE BLOQUEO AQUÍ */}
      {children}
      
      {/* Toast Informativo */}
      {showToast && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[1000] px-8 py-4 glass rounded-2xl border border-blue-500/50 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
            <Lock size={16} className="text-white" />
          </div>
          <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
            Nexora Shield: Activo
          </span>
        </div>
      )}
    </>
  );
};