import React from 'react';

export interface ProofChainStory {
  image?: {
    pixelHeight?: number;
    pixelWidth?: number;
    src?: string;
    srcSet?: string;
    alt?: string;
  };
  imageUrl?: string;
  logo?: {
    pixelHeight?: number;
    pixelWidth?: number;
    src?: string;
    alt?: string;
  } | null;
  logoUrl?: string;
  metric?: string;
  name?: string;
  quote?: string;
  role?: string;
}

export interface ProofChainProProps {
  stories?: ProofChainStory[];
  panelWidth?: number;
  panelHeight?: number;
  imageShare?: number;
  imageOnRight?: boolean;
  sideCount?: number;
  sideWidth?: number;
  sideHeightRatio?: number;
  taper?: number;
  bridgeGap?: number;
  frameInset?: number;
  cornerRadius?: number;
  showLogo?: boolean;
  logoHeight?: number;
  logoAlign?: 'left' | 'center' | 'right';
  logoScrim?: boolean;
  autoPlay?: boolean;
  interval?: number;
  pauseOnHover?: boolean;
  glide?: number;
  allowDrag?: boolean;
  showPager?: boolean;
  showArrows?: boolean;
  backgroundMode?: 'none' | 'gradient' | 'solid';
  tintOne?: string;
  tintTwo?: string;
  tintThree?: string;
  tintAngle?: number;
  solidColor?: string;
  surfaceColor?: string;
  frameColor?: string;
  panelShadow?: string;
  creditStyle?: 'rule' | 'marker' | 'badge';
  creditAccent?: string;
  creditLine?: string;
  chipColor?: string;
  accentColor?: string;
  dotColor?: string;
  metricFont?: Record<string, any>;
  metricColor?: string;
  quoteFont?: Record<string, any>;
  quoteColor?: string;
  nameFont?: Record<string, any>;
  nameColor?: string;
  roleFont?: Record<string, any>;
  roleColor?: string;
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
}

declare const ProofChainPro: React.FC<ProofChainProProps>;
export default ProofChainPro;
