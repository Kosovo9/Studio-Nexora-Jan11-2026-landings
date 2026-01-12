
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Presentation } from './components/Presentation';
import { Features } from './components/Features';
import { Ecosystem } from './components/Ecosystem';
import { Rewards } from './components/Rewards';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { UrgentService } from './components/UrgentService';
import { PaymentFlow } from './components/PaymentFlow';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWA } from './components/FloatingWA';
import { WorkSamples } from './components/WorkSamples';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');
  const [currency, setCurrency] = useState<'USD' | 'MXN'>('MXN');

  useEffect(() => {
    const savedLang = localStorage.getItem('nexora_lang');
    const savedCurr = localStorage.getItem('nexora_curr');
    if (savedLang) setLang(savedLang as 'ES' | 'EN');
    if (savedCurr) setCurrency(savedCurr as 'USD' | 'MXN');
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

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Header lang={lang} toggleLang={toggleLang} currency={currency} toggleCurrency={toggleCurrency} />
      <main>
        <Hero lang={lang} currency={currency} />
        <Presentation lang={lang} currency={currency} />
        <Features lang={lang} />
        <Ecosystem lang={lang} />
        <Rewards lang={lang} />
        <WorkSamples lang={lang} />
        <Portfolio lang={lang} />
        <Process lang={lang} />
        <UrgentService lang={lang} currency={currency} />
        <PaymentFlow lang={lang} />
        <Testimonials lang={lang} />
        <FAQ lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingWA />
      <ChatWidget lang={lang} />
    </div>
  );
};

export default App;
