
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PriceComparison } from './components/PriceComparison';
import { NicheBlueprints } from './components/NicheBlueprints';
import { Presentation } from './components/Presentation';
import { Features } from './components/Features';
import { Rewards } from './components/Rewards';
import { WorkSamples } from './components/WorkSamples';
import { Process } from './components/Process';
import { UrgentService } from './components/UrgentService';
import { PaymentFlow } from './components/PaymentFlow';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWA } from './components/FloatingWA';
import { SecurityGuard } from './components/SecurityGuard';
import { ResponsiveShowcase } from './components/ResponsiveShowcase';
import { CheckoutModal } from './components/CheckoutModal';
import { EliteSnow } from './components/EliteSnow';

const GLOBAL_IMAGES = [
  "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2000", // Metal líquido cromo
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000", // Arquitectura de cristal y titanio
  "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=2000"  // Textura industrial de aluminio
];

const App: React.FC = () => {
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');
  const [currency, setCurrency] = useState<'USD' | 'MXN'>('MXN');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const savedLang = localStorage.getItem('nexora_lang');
    const savedCurr = localStorage.getItem('nexora_curr');
    if (savedLang) setLang(savedLang as 'ES' | 'EN');
    if (savedCurr) setCurrency(savedCurr as 'USD' | 'MXN');

    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % GLOBAL_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
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

  return (
    <SecurityGuard>
      <div className="min-h-screen bg-[#030711] relative selection:bg-[#c5a059] selection:text-[#030711]">
        
        {/* Cinematic Global Background Layer */}
        <div className="fixed inset-0 z-[0] overflow-hidden pointer-events-none">
          {GLOBAL_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
                currentBg === idx ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
          {/* Overlays Metálicos Refinados */}
          <div className="absolute inset-0 bg-[#030711]/85 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#030711] via-transparent to-[#030711]"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-[#c5a059]/10"></div>
        </div>
        
        <EliteSnow />
        
        <Header 
          lang={lang} 
          toggleLang={toggleLang} 
          currency={currency} 
          toggleCurrency={toggleCurrency} 
          onContactClick={openCheckout}
          onOpenAdmin={() => {}} 
        />
        
        <main className="relative z-10">
          <div id="Hero"><Hero lang={lang} currency={currency} onLaunchClick={openCheckout} /></div>
          <div id="WorkSamples"><WorkSamples lang={lang} onReserveClick={openCheckout} /></div>
          <div id="PriceComparison"><PriceComparison lang={lang} currency={currency} /></div>
          <div id="NicheBlueprints"><NicheBlueprints lang={lang} onActionClick={openCheckout} /></div>
          <div id="Presentation"><Presentation lang={lang} currency={currency} onReserveClick={openCheckout} /></div>
          <div id="Features"><Features lang={lang} /></div>
          <div id="Rewards"><Rewards lang={lang} currency={currency} /></div>
          <div id="ResponsiveShowcase"><ResponsiveShowcase lang={lang} /></div>
          <div id="Process"><Process lang={lang} /></div>
          <div id="UrgentService"><UrgentService lang={lang} currency={currency} /></div>
          <div id="PaymentFlow"><PaymentFlow lang={lang} /></div>
          <div id="Testimonials"><Testimonials lang={lang} /></div>
          <div id="FAQ"><FAQ lang={lang} /></div>
        </main>

        <Footer lang={lang} />
        <FloatingWA />

        <CheckoutModal 
          isOpen={isCheckoutOpen} 
          onClose={() => setIsCheckoutOpen(false)} 
          lang={lang} 
          currency={currency}
        />
      </div>
    </SecurityGuard>
  );
};

export default App;
