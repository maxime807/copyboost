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
import { LegalModalType } from './types';

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
      <div className="min-h-screen bg-remoteBg text-remoteDark flex flex-col font-sans selection:bg-limeAccent selection:text-remoteDark">
        {/* 1. Header / Navbar */}
        <Navbar onOpenTrial={scrollToSupport} />

        {/* 2. Main Content Sections (5 sections au total) */}
        <main className="flex-1">
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
    </SmoothScroll>
  );
};

export default App;
