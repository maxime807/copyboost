import React from 'react';
import QxWWK6FCH from './line-menu/QxWWK6FCH';

export const FloatingTableOfContents: React.FC = () => {
  return (
    <aside
      aria-label="Sommaire de navigation"
      className="hidden xl:block fixed left-6 2xl:left-8 top-1/2 -translate-y-1/2 z-50 pointer-events-auto"
      style={{
        // Tokens de couleur : pas de pure black, légere transparence/teinte anthracite douce et lisible
        '--token-106dabe0-51bf-420c-b05d-0071958e647f': 'rgba(24, 24, 27, 0.88)', // Texte actif adouci (pas de noir pur)
        '--token-a952f3d6-d7e9-49a6-a32e-0f414bcc9002': 'rgba(24, 24, 27, 0.75)', // Barre active avec légère transparence
      } as React.CSSProperties}
    >
      {/* Layer 100% transparent : reste discret (Closed) par défaut, ne se déploie qu'au survol de la souris */}
      <QxWWK6FCH
        variant="Closed"
        title1="Accueil"
        link1="#top"
        title2="Services"
        link2="#fonctionnalites"
        title3="Tarifs"
        link3="#tarifs"
        title4="Avis"
        link4="#temoignages"
        title5="Support"
        link5="#support"
        lineColor="rgba(24, 24, 27, 0.22)"
        linkColor="rgba(75, 85, 99, 0.85)"
        linkFontSize={12.5}
        lineRadius="2px"
        allLinksNewTab={false}
      />
    </aside>
  );
};

export default FloatingTableOfContents;
