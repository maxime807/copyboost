import React, { useState } from 'react';
import { Check, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';

export const CtaBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="cta-section" className="py-24 bg-remoteBg bg-dot-grid relative border-t border-remoteBorder">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge pilule supérieur fidèle à la capture Remote ("AUTOMATE WITH REMOTE") */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-remoteBorder mb-6 backdrop-blur-sm shadow-xs">
          <span className="w-2.5 h-2.5 rounded-sm bg-limeAccent border border-zinc-700/20"></span>
          <span className="text-xs uppercase tracking-wider font-semibold text-remoteDark">
            BOOSTEZ VOTRE CONTENU AVEC COPYBOOST
          </span>
        </div>

        {/* Titre fort inspiré de la capture Remote ("Start for free today.") */}
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-remoteDark mb-6">
          Commencez gratuitement dès aujourd'hui.
        </h2>

        {/* Coches de réassurance */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 text-sm sm:text-base font-medium text-remoteMuted mb-10">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 stroke-[3] text-remoteDark" />
            <span>14 jours d'essai complet</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 stroke-[3] text-remoteDark" />
            <span>100% sans engagement</span>
          </div>
        </div>

        {/* Formulaire d'inscription instantané ou Bouton Démo sombre fidèle à Remote */}
        <div className="max-w-md mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email pro..."
                className="flex-1 px-5 py-3.5 rounded-2xl sm:rounded-full bg-white border border-remoteBorder focus:outline-none focus:ring-2 focus:ring-remoteDark text-sm sm:text-base transition-all shadow-xs"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl sm:rounded-full bg-remoteDark text-white font-semibold text-sm sm:text-base hover:bg-zinc-800 active:scale-95 transition-all shadow-md group shrink-0"
              >
                <Laptop className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                <span>Tester l'outil</span>
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-4 rounded-2xl bg-remoteDark text-white flex items-center justify-center gap-3"
            >
              <Check className="w-5 h-5 text-limeAccent" />
              <span className="text-sm font-medium">Invitation envoyée à {email} ! Consultez votre boîte de réception.</span>
            </motion.div>
          )}
          <p className="mt-3 text-xs text-remoteSubtle">
            Aucune carte bancaire requise. Accès immédiat au studio de rédaction.
          </p>
        </div>

      </div>
    </section>
  );
};
