import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PriceComparison } from './components/PriceComparison';
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
import { ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');
  const [currency, setCurrency] = useState<'USD' | 'MXN'>('MXN');
  const [showAdmin, setShowAdmin] = useState(false);
  const [referralCode, setReferralCode] = useState<string | null>(null);

  const PARTNER_PROGRAM_ACTIVE = true;

  useEffect(() => {
    const savedLang = localStorage.getItem('nexora_lang');
    const savedCurr = localStorage.getItem('nexora_curr');
    if (savedLang) setLang(savedLang as 'ES' | 'EN');
    if (savedCurr) setCurrency(savedCurr as 'USD' | 'MXN');

    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref) {
      setReferralCode(ref);
      localStorage.setItem('nexora_active_ref', ref);
    } else {
      setReferralCode(localStorage.getItem('nexora_active_ref'));
    }
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

  if (showAdmin) {
    return <AdminPanel onClose={() => setShowAdmin(false)} lang={lang} />;
  }

  return (
    <SecurityGuard>
      <div className="min-h-screen selection:bg-blue-500/30">
        <Header 
          lang={lang} 
          toggleLang={toggleLang} 
          currency={currency} 
          toggleCurrency={toggleCurrency} 
          onOpenAdmin={() => setShowAdmin(true)}
          referralCode={PARTNER_PROGRAM_ACTIVE ? referralCode : null}
        />
        <main>
          {PARTNER_PROGRAM_ACTIVE && referralCode && (
            <div className="fixed top-24 left-0 right-0 z-[90] flex justify-center px-4 pointer-events-none">
               <div className="bg-blue-600/20 backdrop-blur-xl border border-blue-500/30 px-6 py-2 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.2)] animate-in slide-in-from-top-4 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]"></div>
                  <ShieldCheck size={12} className="text-blue-500" />
                  <span className="text-[9px] font-black text-white uppercase tracking-[0.25em]">
                    {lang === 'ES' ? `Socio Activo: ${referralCode}` : `Active Partner: ${referralCode}`}
                  </span>
               </div>
            </div>
          )}
          <Hero lang={lang} currency={currency} />
          <PriceComparison lang={lang} currency={currency} />
          <Presentation lang={lang} currency={currency} referralCode={referralCode} />
          <Features lang={lang} />
          <Ecosystem lang={lang} />
          
          {PARTNER_PROGRAM_ACTIVE && <Rewards lang={lang} currency={currency} />}
          
          <WorkSamples lang={lang} referralCode={referralCode} />
          <Versatility lang={lang} referralCode={referralCode} />
          <Portfolio lang={lang} />
          
          <ResponsiveShowcase lang={lang} />
          
          <Process lang={lang} />
          <UrgentService lang={lang} currency={currency} />
          <PaymentFlow lang={lang} />
          <Testimonials lang={lang} />
          <FAQ lang={lang} />
        </main>
        <footer id="footer">
          <Footer lang={lang} />
        </footer>
        <FloatingWA referralCode={referralCode} />
      </div>
    </SecurityGuard>
  );
};

export default App;