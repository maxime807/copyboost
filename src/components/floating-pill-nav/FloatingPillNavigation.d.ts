import React from 'react';

export interface FloatingPillItem {
  label: string;
  href?: string;
  target?: '_self' | '_blank';
}

export interface FloatingPillNavigationProps {
  items: FloatingPillItem[];
  activeLink?: string;
  backgroundColor?: string;
  textColor?: string;
  activeBackgroundColor?: string;
  activeTextColor?: string;
  padding?: number;
  gap?: number;
  linkPadding?: string;
  font?: {
    fontFamily?: string;
    fontSize?: string;
    fontStyle?: string;
    fontWeight?: number | string;
    letterSpacing?: string;
    lineHeight?: string;
  };
  transition?: {
    damping?: number;
    delay?: number;
    mass?: number;
    stiffness?: number;
    type?: string;
  };
  height?: string | number;
  width?: string | number;
  id?: string;
  layoutId?: string;
  onNavigate?: (label: string, href?: string) => void;
}

declare const FloatingPillNavigation: React.FC<FloatingPillNavigationProps>;
export default FloatingPillNavigation;
