import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSupport: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const supportEmail = "support@copyboost.ai";

  const handleCopy = () => {
    navigator.clipboard.writeText(supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="support" className="py-24 bg-white bg-dot-grid relative overflow-hidden border-t border-remoteBorder">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Label pilule en sur-titre à la place de l'icône de messagerie */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-remoteBorder mb-8 backdrop-blur-sm shadow-xs"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-limeAccent border border-zinc-700/20"></span>
          <span className="text-xs uppercase tracking-wider font-semibold text-remoteDark">
            BOOSTEZ VOTRE CONTENU AVEC COPYBOOST
          </span>
        </motion.div>

        {/* Titre direct reprenant la tournure de la capture Remote */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-remoteDark mb-8">
          Comment l'équipe CopyBoost <br />
          peut vous aider aujourd'hui ?
        </h2>

        {/* Groupe d'avatars superposés + disponibilité 24/7 */}
        <div className="inline-flex items-center gap-4 bg-white border border-remoteBorder rounded-full py-2 px-5 mb-8 backdrop-blur-sm shadow-xs">
          <div className="flex -space-x-2 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
              alt="Support Clara"
              className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
              alt="Support Lucas"
              className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
              alt="Support Élodie"
              className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
              alt="Support Maxime"
              className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
            />
          </div>

          <div className="text-left text-xs sm:text-sm">
            <div className="font-bold text-remoteDark flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Disponible 7j/7
            </div>
            <div className="text-remoteMuted">Réponse sous 1 à 2 heures</div>
          </div>
        </div>

        {/* Bouton d'email direct cliquable */}
        <div>
          <div className="inline-flex items-center gap-2">
            <a
              href={`mailto:${supportEmail}?subject=Demande%20d'information%20CopyBoost`}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-white border border-remoteBorder text-remoteDark font-semibold text-sm sm:text-base hover:border-remoteDark hover:shadow-md transition-all group"
            >
              <Mail className="w-4 h-4 text-remoteMuted group-hover:text-remoteDark transition-colors" />
              <span>{supportEmail}</span>
            </a>

            <button
              onClick={handleCopy}
              className="p-3 rounded-2xl bg-white border border-remoteBorder text-remoteMuted hover:text-remoteDark hover:border-remoteDark transition-all shadow-xs"
              title="Copier l'adresse email"
              aria-label="Copier l'adresse email"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          {copied && (
            <p className="mt-2 text-xs text-emerald-600 font-medium">Adresse email copiée dans le presse-papier !</p>
          )}
        </div>

      </div>
    </section>
  );
};
