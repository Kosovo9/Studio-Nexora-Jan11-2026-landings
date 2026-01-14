import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PriceComparison } from './components/PriceComparison';
import { NicheBlueprints } from './components/NicheBlueprints';
import { Presentation } from './components/Presentation';
import { Features } from './components/Features';
import { Ecosystem } from './components/Ecosystem';
import { Rewards } from './components/Rewards';
import { Portfolio } from './components/Portfolio';
import { Versatility } from './components/Versatility';
import { Process } from './components/Process';
import { UrgentService } from './components/UrgentService';
import { PaymentFlow } from './components/PaymentFlow';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWA } from './components/FloatingWA';
import { WorkSamples } from './components/WorkSamples';
import { AdminPanel } from './components/AdminPanel';
import { SecurityGuard } from './components/SecurityGuard';
import { ResponsiveShowcase } from './components/ResponsiveShowcase';
import { CheckoutModal } from './components/CheckoutModal';
import { EliteSnow } from './components/EliteSnow';
import { ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');
  const [currency, setCurrency] = useState<'USD' | 'MXN'>('MXN');
  const [showAdmin, setShowAdmin] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [referralCode, setReferralCode] = useState<string | null>(null);

  useEffect(() => {
    // Carga de preferencias
    const savedLang = localStorage.getItem('nexora_lang');
    const savedCurr = localStorage.getItem('nexora_curr');
    if (savedLang) setLang(savedLang as 'ES' | 'EN');
    if (savedCurr) setCurrency(savedCurr as 'USD' | 'MXN');

    // Manejo de referidos
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref) {
      setReferralCode(ref);
      localStorage.setItem('nexora_active_ref', ref);
    } else {
      setReferralCode(localStorage.getItem('nexora_active_ref'));
    }

    // Hotkey de Socio: Shift + A para abrir Admin
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === 'a') {
        setShowAdmin(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'ES' ? 'EN' : 'ES';
    setLang(newLang);
    localStorage.setItem('nexora_lang', newLang);
  };

  const toggleCurrency = () => {
    const newCurr = currency === 'USD' ? 'MXN' : 'USD';
    setCurrency(newCurr);
    localStorage.setItem('nexora_curr', newCurr);
  };

  const openCheckout = () => setIsCheckoutOpen(true);

  if (showAdmin) {
    return <AdminPanel onClose={() => setShowAdmin(false)} lang={lang} />;
  }

  return (
    <SecurityGuard>
      <div className="min-h-screen bg-[#030711] relative">
        <EliteSnow />
        <Header 
          lang={lang} 
          toggleLang={toggleLang} 
          currency={currency} 
          toggleCurrency={toggleCurrency} 
          onOpenAdmin={() => setShowAdmin(true)}
          referralCode={referralCode}
          onContactClick={openCheckout}
        />
        
        <main>
          {referralCode && (
            <div className="fixed top-24 left-0 right-0 z-[90] flex justify-center px-4 pointer-events-none">
               <div className="bg-blue-600/20 backdrop-blur-xl border border-blue-500/30 px-6 py-2 rounded-full shadow-lg flex items-center gap-3">
                  <ShieldCheck size={12} className="text-blue-500" />
                  <span className="text-[9px] font-black text-white uppercase tracking-widest">
                    {lang === 'ES' ? `Socio: ${referralCode}` : `Partner: ${referralCode}`}
                  </span>
               </div>
            </div>
          )}
          
          <Hero lang={lang} currency={currency} onLaunchClick={openCheckout} />
          <PriceComparison lang={lang} currency={currency} />
          <NicheBlueprints lang={lang} onActionClick={openCheckout} />
          <Presentation lang={lang} currency={currency} referralCode={referralCode} onReserveClick={openCheckout} />
          <Features lang={lang} />
          <Ecosystem lang={lang} />
          <Rewards lang={lang} currency={currency} />
          <WorkSamples lang={lang} referralCode={referralCode} onReserveClick={openCheckout} />
          <Versatility lang={lang} referralCode={referralCode} onLaunchClick={openCheckout} />
          <Portfolio lang={lang} />
          <ResponsiveShowcase lang={lang} />
          <Process lang={lang} />
          <UrgentService lang={lang} currency={currency} />
          <PaymentFlow lang={lang} />
          <Testimonials lang={lang} />
          <FAQ lang={lang} />
        </main>

        <Footer lang={lang} />
        
        <FloatingWA referralCode={referralCode} />

        <CheckoutModal 
          isOpen={isCheckoutOpen} 
          onClose={() => setIsCheckoutOpen(false)} 
          lang={lang} 
          currency={currency} 
          referralCode={referralCode}
        />
      </div>
    </SecurityGuard>
  );
};

export default App;