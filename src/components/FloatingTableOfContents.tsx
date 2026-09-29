import React from 'react';
import QxWWK6FCH from './line-menu/QxWWK6FCH';

export const FloatingTableOfContents: React.FC = () => {
  return (
    <aside
      aria-label="Sommaire de navigation"
      className="hidden xl:block fixed left-6 2xl:left-8 top-1/2 -translate-y-1/2 z-50 pointer-events-auto"
      style={{
        '--token-106dabe0-51bf-420c-b05d-0071958e647f': 'rgba(24, 24, 27, 0.88)',
        '--token-a952f3d6-d7e9-49a6-a32e-0f414bcc9002': 'rgba(24, 24, 27, 0.75)',
      } as React.CSSProperties}
    >
      <QxWWK6FCH
        variant="Closed"
        title1="Accueil"
        link1="#top"
        title2="Services"
        link2="#fonctionnalites"
        title3="Avis"
        link3="#temoignages"
        title4="Support"
        link4="#support"
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
