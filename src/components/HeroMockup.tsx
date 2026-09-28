import React from 'react';
import { motion } from 'framer-motion';

export const HeroMockup: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35 }}
      className="mt-14 max-w-4xl mx-auto rounded-3xl bg-white border border-remoteBorder shadow-2xl shadow-zinc-900/5 p-4 sm:p-6 text-left"
    >
      {/* Barre de navigation fictive du SaaS */}
      <div className="flex items-center justify-between border-b border-remoteBorder pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300"></span>
          </div>
          <div className="h-4 w-28 bg-remoteSurface rounded-full ml-2"></div>
        </div>

        {/* Pilules & Badges de statut dans les tons Remote */}
        <div className="flex items-center gap-2">
          <div className="h-7 px-3 bg-remoteSurface rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-remoteMuted"></span>
            <div className="h-2 w-14 bg-zinc-300 rounded-full"></div>
          </div>
          <div className="h-7 px-3.5 bg-limeAccent rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-remoteDark"></span>
            <span className="text-[11px] font-bold text-remoteDark tracking-tight">Score SEO 98%</span>
          </div>
        </div>
      </div>

      {/* Grille de l'interface SaaS simulée */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Colonne latérale gauche (Sidebar stylisée) */}
        <div className="hidden md:flex md:col-span-4 flex-col gap-3 p-3.5 bg-remoteBg rounded-2xl border border-remoteBorder/80">
          <div className="flex items-center justify-between mb-1">
            <div className="h-2.5 w-16 bg-zinc-300 rounded-full"></div>
            <div className="h-4 w-4 bg-zinc-200 rounded-md"></div>
          </div>

          {/* Items de menu simulés */}
          <div className="p-2.5 rounded-xl bg-white border border-remoteBorder shadow-2xs flex items-center justify-between">
            <div className="space-y-1.5">
              <div className="h-2.5 w-24 bg-remoteDark rounded-full"></div>
              <div className="h-2 w-16 bg-zinc-300 rounded-full"></div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-limeAccent text-remoteDark">Actif</span>
          </div>

          <div className="p-2.5 rounded-xl hover:bg-white/60 transition-colors flex items-center justify-between">
            <div className="space-y-1.5">
              <div className="h-2.5 w-20 bg-zinc-400 rounded-full"></div>
              <div className="h-2 w-12 bg-zinc-200 rounded-full"></div>
            </div>
            <div className="h-2 w-6 bg-zinc-300 rounded-full"></div>
          </div>

          <div className="p-2.5 rounded-xl hover:bg-white/60 transition-colors flex items-center justify-between">
            <div className="space-y-1.5">
              <div className="h-2.5 w-24 bg-zinc-400 rounded-full"></div>
              <div className="h-2 w-14 bg-zinc-200 rounded-full"></div>
            </div>
            <div className="h-2 w-6 bg-zinc-300 rounded-full"></div>
          </div>

          {/* Widget métrique en bas de sidebar */}
          <div className="mt-auto p-3 bg-white rounded-xl border border-remoteBorder space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-remoteDark">
              <span>Articles créés</span>
              <span className="text-emerald-700">12/15</span>
            </div>
            <div className="w-full h-1.5 bg-remoteSurface rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-limeAccent rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Espace central de rédaction / canvas principal */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-4">
          
          {/* Bloc d'en-tête du document */}
          <div className="p-4 rounded-2xl bg-remoteSurface/50 border border-remoteBorder space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-remoteMuted border border-remoteBorder">
                H1
              </span>
              <div className="h-4 w-3/4 bg-remoteDark rounded-full"></div>
            </div>
            <div className="space-y-2 pt-1">
              <div className="h-2.5 w-full bg-zinc-300/80 rounded-full"></div>
              <div className="h-2.5 w-11/12 bg-zinc-300/80 rounded-full"></div>
              <div className="h-2.5 w-4/5 bg-zinc-300/80 rounded-full"></div>
            </div>
          </div>

          {/* Cartes modulaires de suggestions IA (blocs démonstratifs) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* Carte Suggestion 1 */}
            <div className="p-3.5 rounded-2xl bg-white border border-remoteBorder shadow-2xs space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-limeAccent"></span>
                  <span className="text-[11px] font-bold text-remoteDark">Accroche virale</span>
                </div>
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  +34% clics
                </span>
              </div>
              <div className="h-2 w-full bg-remoteSurface rounded-full"></div>
              <div className="h-2 w-3/4 bg-remoteSurface rounded-full"></div>
            </div>

            {/* Carte Suggestion 2 */}
            <div className="p-3.5 rounded-2xl bg-white border border-remoteBorder shadow-2xs space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-remoteDark"></span>
                  <span className="text-[11px] font-bold text-remoteDark">Mots-clés sémantiques</span>
                </div>
                <span className="text-[10px] font-semibold text-remoteMuted bg-remoteSurface px-2 py-0.5 rounded-full">
                  Optimisé
                </span>
              </div>
              <div className="flex gap-1.5 flex-wrap pt-0.5">
                <span className="h-5 px-2 bg-remoteBg border border-remoteBorder rounded-md text-[10px] font-mono text-zinc-600 flex items-center">#copywriting</span>
                <span className="h-5 px-2 bg-remoteBg border border-remoteBorder rounded-md text-[10px] font-mono text-zinc-600 flex items-center">#blogging</span>
                <span className="h-5 px-2 bg-remoteBg border border-remoteBorder rounded-md text-[10px] font-mono text-zinc-600 flex items-center">#seo</span>
              </div>
            </div>

          </div>

          {/* Section bas de page / CTA interne d'export */}
          <div className="p-3 bg-remoteBg rounded-2xl border border-remoteBorder/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-semibold text-zinc-700">Prêt pour publication WordPress & Substack</span>
            </div>
            <div className="h-6 px-3 bg-remoteDark text-white text-[11px] font-semibold rounded-lg flex items-center">
              Exporter
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
};
