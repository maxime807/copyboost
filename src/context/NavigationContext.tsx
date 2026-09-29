import React, { createContext, useContext, useState, useEffect } from 'react';

export type NavSection = 'top' | 'fonctionnalites' | 'tarifs' | 'temoignages' | 'support';

export interface SectionMeta {
  id: NavSection;
  pillLabel: string;
  lineVariant: string; // "1", "2", "3", "4", "5"
}

export const SECTIONS: SectionMeta[] = [
  { id: 'top', pillLabel: 'Accueil', lineVariant: '1' },
  { id: 'fonctionnalites', pillLabel: 'Services', lineVariant: '2' },
  { id: 'tarifs', pillLabel: 'Tarifs', lineVariant: '3' },
  { id: 'temoignages', pillLabel: 'Avis', lineVariant: '4' },
  { id: 'support', pillLabel: 'Support', lineVariant: '5' },
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
    // Verrouille la détection pendant la durée de la transition de scroll
    manualLockTimeoutRef.current = window.setTimeout(() => {
      manualLockTimeoutRef.current = null;
    }, 1200);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Si un scroll vers une cible est en cours suite à un clic, ne pas perturber
      if (manualLockTimeoutRef.current !== null) {
        return;
      }

      const scrollPosition = window.scrollY + 200; // Offset pour anticipation visuelle naturelle

      // Si on est tout en haut
      if (window.scrollY < 120) {
        setActiveSection('top');
        return;
      }

      // Si on est en bas de page (section support)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('support');
        return;
      }

      // Détecter la section courante
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
    // Déclenchement initial
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
