import React, { useState, useEffect } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoTicker } from './components/LogoTicker';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { SocialProof } from './components/SocialProof';
import { ContactSupport } from './components/ContactSupport';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { SuccessPage } from './components/SuccessPage';
import { FloatingTableOfContents } from './components/FloatingTableOfContents';
import { LegalModalType } from './types';
import { STRIPE_CONFIG } from './config/stripe';
import { NavigationProvider } from './context/NavigationContext';

export const App: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Gestion des routes Checkout Stripe
  if (currentPath === '/checkout/pro') {
    window.location.href = STRIPE_CONFIG.prices.pro.paymentLink;
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-zinc-900 font-sans">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-zinc-900 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-semibold text-lg">Redirection vers le paiement sécurisé Pro...</p>
        </div>
      </div>
    );
  }

  if (currentPath === '/checkout/agence') {
    window.location.href = STRIPE_CONFIG.prices.agence.paymentLink;
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-zinc-900 font-sans">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-zinc-900 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-semibold text-lg">Redirection vers le paiement sécurisé Agence...</p>
        </div>
      </div>
    );
  }

  // Route de succès / confirmation
  if (currentPath === '/success' || currentPath.startsWith('/success/')) {
    const planFromPath = currentPath === '/success/agence' ? 'agence' : 'pro';
    return <SuccessPage plan={planFromPath} />;
  }

  const scrollToSupport = () => {
    const el = document.getElementById('support');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTarifs = () => {
    const el = document.getElementById('tarifs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScroll>
      <NavigationProvider>
        <div className="min-h-screen bg-remoteBg text-remoteDark flex flex-col font-sans selection:bg-limeAccent selection:text-remoteDark">
          {/* 1. Header / Navbar */}
          <Navbar onOpenTrial={scrollToTarifs} />

          {/* Sommaire interactif latéral (line-menu) */}
          <FloatingTableOfContents />

          {/* 2. Main Content Sections */}
          <main className="flex-1 w-full">
            <Hero onStartFree={scrollToTarifs} />
            <LogoTicker />
            <Features />
            <Pricing onSelectFree={scrollToSupport} />
            <SocialProof />
            <ContactSupport />
          </main>

          {/* 3. Footer */}
          <Footer onOpenLegal={(type) => setLegalModalType(type)} />

          {/* 4. Modales Légales */}
          <LegalModal 
            type={legalModalType} 
            onClose={() => setLegalModalType(null)} 
          />
        </div>
      </NavigationProvider>
    </SmoothScroll>
  );
};

export default App;
