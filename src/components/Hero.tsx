import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroMockup } from './HeroMockup';

interface HeroProps {
  onStartFree?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartFree }) => {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 md:pt-24 md:pb-28 bg-remoteBg bg-dot-grid">
      {/* Halo subtil */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-limeAccent/25 to-limeSoft blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge Pilule conforme au template Framer Remote */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-remoteBorder mb-8 backdrop-blur-sm shadow-xs"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-limeAccent border border-zinc-700/20"></span>
          <span className="text-xs uppercase tracking-wider font-semibold text-remoteDark">
            RÉDIGEZ 10X PLUS VITE AVEC COPYBOOST
          </span>
        </motion.div>

        {/* Titre Principal avec effet de surlignage vert lime comme sur Remote */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-remoteDark leading-[1.12] mb-7 font-sans"
        >
          Moins de brouillons, <br className="hidden sm:inline" />
          plus d'
          <span className="relative inline-block px-1">
            <span className="relative z-10">articles percutants</span>
            {/* Forme de coup de feutre / lasso surligneur lime animé façon Design Spell */}
            <svg
              className="absolute -bottom-2 -left-3 -right-3 w-[calc(100%+24px)] h-6 md:h-8 text-limeAccent -z-0 pointer-events-none overflow-visible"
              viewBox="0 0 280 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M4 22C60 6 220 4 274 18C278 19 250 28 170 30C100 32 10 28 4 22Z"
                fill="currentColor"
                initial={{ opacity: 0, scaleX: 0, originX: 0 }}
                animate={{ opacity: 0.9, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-remoteMuted mb-10 leading-relaxed font-normal"
        >
          L’intelligence artificielle conçue sur-mesure pour les créateurs, fondateurs et copywriters exigeants. Générez des articles de blog structurés, captivants et optimisés pour le référencement en quelques minutes.
        </motion.p>

        {/* CTA et éléments de réassurance */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-5"
        >
          <a
            href="#cta-section"
            onClick={onStartFree}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-remoteDark text-white font-semibold text-base hover:bg-zinc-800 active:scale-95 transition-all shadow-md hover:shadow-lg group"
          >
            <span>Démarrer l'essai gratuit</span>
            <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Réassurances avec coches */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-sm text-remoteMuted font-medium pt-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-remoteDark border border-remoteBorder shadow-xs">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Essai 14 jours offert</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-remoteDark border border-remoteBorder shadow-xs">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Sans carte bancaire</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-remoteDark border border-remoteBorder shadow-xs">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Export WordPress & Markdown</span>
            </div>
          </div>
        </motion.div>

        {/* Véritable aperçu applicatif interactif du studio CopyBoost */}
        <HeroMockup />

      </div>
    </section>
  );
};
