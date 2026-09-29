import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoIcon } from './Logo';
import FloatingPillNavigation from './floating-pill-nav/FloatingPillNavigation';
import { useNavigation } from '../context/NavigationContext';

interface NavbarProps {
  onOpenTrial?: () => void;
}

const NAV_ITEMS = [
  { label: 'Accueil', href: '#top' },
  { label: 'Services', href: '#fonctionnalites' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Avis', href: '#temoignages' },
  { label: 'Support', href: '#support' },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activePillLabel, lockScrollTracking } = useNavigation();

  const handleNavigate = (_label: string, href?: string) => {
    if (href && href.startsWith('#')) {
      const sectionId = href === '#top' ? 'top' : (href.replace('#', '') as any);
      lockScrollTracking(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all">
      {/* Container global centré */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex justify-center">
        
        {/* Barre Pilule Unique Unifiée & Épurée (Desktop) */}
        <div className="hidden md:inline-flex items-center gap-1.5 p-1.5 pl-2 pr-2 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/90 shadow-sm pointer-events-auto">
          {/* 1. Logo & Titre intégrés à gauche */}
          <a
            href="#top"
            onClick={() => lockScrollTracking('top')}
            className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full hover:bg-zinc-100/70 transition-colors group"
          >
            <div className="w-7 h-7 rounded-lg bg-zinc-950 text-white flex items-center justify-center transition-transform group-hover:scale-105">
              <LogoIcon className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-sm tracking-tight text-zinc-950 flex items-center gap-1">
              CopyBoost
              <span className="w-1.5 h-1.5 rounded-full bg-[#d2f831]"></span>
            </span>
          </a>

          {/* Délimiteur vertical discret */}
          <div className="h-4 w-px bg-zinc-200 mx-1" />

          {/* 2. Menu Links flottants animés */}
          <FloatingPillNavigation
            items={NAV_ITEMS}
            activeLink={activePillLabel}
            onNavigate={handleNavigate}
            backgroundColor="transparent"
            textColor="#52525b"
            activeBackgroundColor="#18181b"
            activeTextColor="#ffffff"
            padding={2}
            gap={2}
            linkPadding="6px 16px"
            font={{
              fontSize: '13.5px',
              fontWeight: 500,
              letterSpacing: '-0.2px',
            }}
          />
        </div>

        {/* Mobile top bar (Compact) */}
        <div className="flex md:hidden w-full items-center justify-between pointer-events-auto">
          <a
            href="#top"
            onClick={() => lockScrollTracking('top')}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-xs"
          >
            <div className="w-6 h-6 rounded-md bg-zinc-950 text-white flex items-center justify-center">
              <LogoIcon className="w-3 h-3" />
            </div>
            <span className="font-bold text-xs tracking-tight text-zinc-950 flex items-center gap-1">
              CopyBoost
              <span className="w-1.5 h-1.5 rounded-full bg-[#d2f831]"></span>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-xs text-zinc-700 hover:text-zinc-900 transition-colors"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto mx-4 mt-2 p-4 rounded-2xl border border-zinc-200/90 bg-white/95 backdrop-blur-xl shadow-xl space-y-2">
          <a
            href="#top"
            onClick={() => {
              setMobileMenuOpen(false);
              lockScrollTracking('top');
            }}
            className="block px-3 py-2 rounded-xl text-sm font-medium text-zinc-700 hover:bg-zinc-100"
          >
            Accueil
          </a>
          <a
            href="#fonctionnalites"
            onClick={() => {
              setMobileMenuOpen(false);
              lockScrollTracking('fonctionnalites');
            }}
            className="block px-3 py-2 rounded-xl text-sm font-medium text-zinc-700 hover:bg-zinc-100"
          >
            Services
          </a>
          <a
            href="#tarifs"
            onClick={() => {
              setMobileMenuOpen(false);
              lockScrollTracking('tarifs');
            }}
            className="block px-3 py-2 rounded-xl text-sm font-medium text-zinc-700 hover:bg-zinc-100"
          >
            Tarifs
          </a>
          <a
            href="#temoignages"
            onClick={() => {
              setMobileMenuOpen(false);
              lockScrollTracking('temoignages');
            }}
            className="block px-3 py-2 rounded-xl text-sm font-medium text-zinc-700 hover:bg-zinc-100"
          >
            Avis
          </a>
          <a
            href="#support"
            onClick={() => {
              setMobileMenuOpen(false);
              lockScrollTracking('support');
            }}
            className="block px-3 py-2 rounded-xl text-sm font-medium text-zinc-700 hover:bg-zinc-100"
          >
            Support & Contact
          </a>
        </div>
      )}
    </header>
  );
};
