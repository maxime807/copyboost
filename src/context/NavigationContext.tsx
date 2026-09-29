import React, { createContext, useContext, useState, useEffect } from 'react';

export type NavSection = 'top' | 'fonctionnalites' | 'temoignages' | 'support';

export interface SectionMeta {
  id: NavSection;
  pillLabel: string;
  lineVariant: string;
}

export const SECTIONS: SectionMeta[] = [
  { id: 'top', pillLabel: 'Accueil', lineVariant: '1' },
  { id: 'fonctionnalites', pillLabel: 'Services', lineVariant: '2' },
  { id: 'temoignages', pillLabel: 'Avis', lineVariant: '3' },
  { id: 'support', pillLabel: 'Support', lineVariant: '4' },
];

interface NavigationContextType {
  activeSection: NavSection;
  activePillLabel: string;
  activeLineVariant: string;
  setActiveSection: (section: NavSection) => void;
  lockScrollTracking: (targetSection: NavSection) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<NavSection>('top');
  const manualLockTimeoutRef = React.useRef<number | null>(null);

  const lockScrollTracking = React.useCallback((targetSection: NavSection) => {
    setActiveSection(targetSection);
    if (manualLockTimeoutRef.current) {
      clearTimeout(manualLockTimeoutRef.current);
    }
    manualLockTimeoutRef.current = window.setTimeout(() => {
      manualLockTimeoutRef.current = null;
    }, 1200);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (manualLockTimeoutRef.current !== null) {
        return;
      }

      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 120) {
        setActiveSection('top');
        return;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('support');
        return;
      }

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = SECTIONS[i];
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section.id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (manualLockTimeoutRef.current) {
        clearTimeout(manualLockTimeoutRef.current);
      }
    };
  }, []);

  const currentMeta = SECTIONS.find((s) => s.id === activeSection) || SECTIONS[0];

  return (
    <NavigationContext.Provider
      value={{
        activeSection,
        activePillLabel: currentMeta.pillLabel,
        activeLineVariant: currentMeta.lineVariant,
        setActiveSection,
        lockScrollTracking,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
