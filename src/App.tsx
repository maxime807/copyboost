import React, { useState } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoTicker } from './components/LogoTicker';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { ContactSupport } from './components/ContactSupport';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { FloatingTableOfContents } from './components/FloatingTableOfContents';
import { LegalModalType } from './types';
import { NavigationProvider } from './context/NavigationContext';

export const App: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);

  const scrollToSupport = () => {
    const el = document.getElementById('support');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScroll>
      <NavigationProvider>
        <div className="min-h-screen bg-remoteBg text-remoteDark flex flex-col font-sans selection:bg-limeAccent selection:text-remoteDark">
          {/* 1. Header / Navbar */}
          <Navbar onOpenTrial={scrollToSupport} />

          {/* Sommaire interactif latéral (line-menu) */}
          <FloatingTableOfContents />

          {/* 2. Main Content Sections */}
          <main className="flex-1 w-full">
            <Hero onStartFree={scrollToSupport} />
            <LogoTicker />
            <Features />
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
