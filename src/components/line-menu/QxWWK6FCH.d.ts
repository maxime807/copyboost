import React from 'react';

export interface LineMenuProps {
  title1?: string;
  link1?: string;
  title2?: string;
  link2?: string;
  title3?: string;
  link3?: string;
  title4?: string;
  link4?: string;
  title5?: string;
  link5?: string;
  lineColor?: string;
  lineRadius?: string;
  linkColor?: string;
  linkFontSize?: number;
  allLinksNewTab?: boolean;
  variant?: 'Desktop' | 'Closed' | '1' | '2' | '3' | '4' | '5' | string;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

declare const QxWWK6FCH: React.FC<LineMenuProps>;
export default QxWWK6FCH;
