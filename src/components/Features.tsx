import React from 'react';
import { PenTool, Target, Search, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  return (
    <section id="fonctionnalites" className="py-24 bg-white border-t border-remoteBorder w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-12">
        
        {/* En-tête de section inspiré de la capture Remote */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-remoteMuted uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-limeAccent"></span>
            Technologie & Précision éditoriale
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-remoteDark leading-tight">
            CopyBoost est la référence IA <br />
            pour les créateurs de contenu exigeants.
          </h2>
        </div>

        {/* Grille de cartes modulaires fidèles à Remote */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Carte 1 : Maîtrise du ton et style créateur */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group flex flex-col"
          >
            <div className="relative h-[480px] sm:h-[580px] rounded-3xl bg-[#fbe5e6] overflow-hidden p-6 sm:p-8 flex flex-col justify-between border border-pink-200/50 shadow-xs">
              
              <img
                src="/images/sarah-creator.jpg"
                alt="Sarah K. - Créatrice et Tech Blogger"
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-95"
              />
              
              <div className="relative z-10 self-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-remoteDark shadow-xs backdrop-blur-sm">
                  <PenTool className="w-3.5 h-3.5 text-remoteDark" />
                  Ton personnalisé
                </span>
              </div>

              {/* Signature manuscrite animée signature de Remote avec Design Spell */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 w-full bg-white/95 backdrop-blur-md rounded-2xl py-3 px-6 shadow-md border border-white/60 text-center"
              >
                <span className="font-handwriting text-3xl sm:text-4xl text-remoteDark tracking-wider block selection:bg-transparent">
                  Sarah K. - Tech Blogger
                </span>
              </motion.div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-bold text-remoteDark tracking-tight">
                Gardez le contrôle absolu sur votre style
              </h3>
              <p className="mt-2 text-remoteMuted leading-relaxed">
                Entraînez CopyBoost sur vos anciens articles en un clic. L'IA reproduit fidèlement votre voix, votre rythme et votre ton sans jamais sonner comme un robot.
              </p>
            </div>
          </motion.div>

          {/* Carte 2 : Analyse SEO & Performance */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group flex flex-col"
          >
            <div className="relative h-[480px] sm:h-[580px] rounded-3xl bg-remoteSurface overflow-hidden p-6 sm:p-8 flex flex-col justify-between border border-remoteBorder shadow-xs">
              
              <img
                src="/images/workspace-laptop.jpg"
                alt="Rédaction d'article au clavier sur CopyBoost"
                className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
              />

              <div className="relative z-10 self-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-remoteDark shadow-xs backdrop-blur-sm">
                  <Search className="w-3.5 h-3.5 text-remoteDark" />
                  SEO & Indexation
                </span>
              </div>

              {/* Badges superposés façon Remote avec lévitation vivante (Design Spell) */}
              <div className="relative z-10 space-y-2.5">
                <motion.div 
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-md flex items-center justify-between border border-white/60 transition-transform"
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" 
                      alt="Emma" 
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-remoteDark"
                    />
                    <span className="font-semibold text-sm text-remoteDark">Article SEO 2 500 mots</span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-remoteDark text-white shadow-xs">
                    Généré en 45s
                  </span>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-md flex items-center justify-between border border-white/60 transition-transform"
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" 
                      alt="Jonathan" 
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-emerald-500"
                    />
                    <span className="font-semibold text-sm text-remoteDark">Score de lisibilité Yoast</span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 shadow-xs">
                    A+ Optimisé
                  </span>
                </motion.div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-bold text-remoteDark tracking-tight">
                Une architecture conçue pour se positionner n°1
              </h3>
              <p className="mt-2 text-remoteMuted leading-relaxed">
                Titres H1/H2/H3 magnétiques, recherche d'intentions de recherche, mots-clés sémantiques et métadonnées générés automatiquement pour capturer le trafic Google.
              </p>
            </div>
          </motion.div>

        </div>

        {/* 3 piliers éditoriaux épurés directement sur le fond */}
        <div className="mt-20 pt-16 border-t border-remoteBorder">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Pilier 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-remoteSurface flex items-center justify-center text-remoteDark border border-remoteBorder">
                <Sparkles className="w-5 h-5 text-remoteDark" />
              </div>
              <h4 className="text-xl font-bold text-remoteDark tracking-tight">
                Angles & Hooks viraux
              </h4>
              <p className="text-sm text-remoteMuted leading-relaxed">
                Fini le syndrome de la page blanche. Générez des variantes d'accroches percutantes conçues pour retenir vos lecteurs dès les premières secondes.
              </p>
            </div>

            {/* Pilier 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-remoteSurface flex items-center justify-center text-remoteDark border border-remoteBorder">
                <Target className="w-5 h-5 text-remoteDark" />
              </div>
              <h4 className="text-xl font-bold text-remoteDark tracking-tight">
                Fact-checking & Sources
              </h4>
              <p className="text-sm text-remoteMuted leading-relaxed">
                Chaque affirmation et chiffre clé est vérifié et relié à des sources récentes pour garantir une autorité et une crédibilité totale.
              </p>
            </div>

            {/* Pilier 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-remoteSurface flex items-center justify-center text-remoteDark border border-remoteBorder">
                <CheckCircle2 className="w-5 h-5 text-remoteDark" />
              </div>
              <h4 className="text-xl font-bold text-remoteDark tracking-tight">
                Export en un clic
              </h4>
              <p className="text-sm text-remoteMuted leading-relaxed">
                Exportez directement vos brouillons au format Markdown ou synchronisez-les en un clic vers Notion, Substack, Ghost ou WordPress.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
