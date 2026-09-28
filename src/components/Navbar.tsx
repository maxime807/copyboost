import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenTrial?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-zinc-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              <span className="text-[#d2f831]">C</span>B
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-zinc-900 flex items-center gap-1.5">
                CopyBoost
                <span className="w-2 h-2 rounded-full bg-[#d2f831]"></span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-zinc-400 -mt-1">
                AI Content Engine
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <a 
              href="#fonctionnalites" 
              className="hover:text-zinc-900 transition-colors"
            >
              Fonctionnalités
            </a>
            <a 
              href="#temoignages" 
              className="hover:text-zinc-900 transition-colors"
            >
              Témoignages
            </a>
            <a 
              href="#support" 
              className="hover:text-zinc-900 transition-colors"
            >
              Support & Contact
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#cta-section"
              onClick={onOpenTrial}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 active:scale-95 transition-all shadow-sm group"
            >
              <span>Essayer gratuitement</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
              aria-label="Menu principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <a
            href="#fonctionnalites"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Fonctionnalités
          </a>
          <a
            href="#temoignages"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Témoignages
          </a>
          <a
            href="#support"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Support & Contact
          </a>
          <div className="pt-2">
            <a
              href="#cta-section"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenTrial) onOpenTrial();
              }}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-medium bg-zinc-900 text-white"
            >
              Essayer gratuitement
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
