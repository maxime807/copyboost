import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Home, ShieldCheck } from 'lucide-react';
import { STRIPE_CONFIG } from '../config/stripe';
import { Logo } from './Logo';

interface SuccessPageProps {
  plan?: 'pro' | 'agence';
}

export const SuccessPage: React.FC<SuccessPageProps> = ({ plan: propPlan }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const planParam = urlParams.get('plan') || propPlan || 'pro';
  const isAgence = planParam === 'agence';
  const planInfo = isAgence ? STRIPE_CONFIG.prices.agence : STRIPE_CONFIG.prices.pro;

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-zinc-900 flex flex-col justify-between selection:bg-limeAccent selection:text-zinc-950 font-sans">
      {/* Header bar */}
      <header className="border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="group">
            <Logo size="sm" />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-900 px-3 py-1.5 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            <Home className="w-4 h-4" />
            Retour à l'accueil
          </a>
        </div>
      </header>

      {/* Main Confirmation Content */}
      <main className="max-w-2xl mx-auto px-4 py-16 flex-1 flex flex-col items-center justify-center text-center">
        {/* Animated Badge Icon */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full bg-limeAccent/20 flex items-center justify-center text-limeAccent border-4 border-white shadow-xl">
            <CheckCircle2 className="w-12 h-12 text-zinc-900" />
          </div>
          <div className="absolute -top-1 -right-1 bg-limeAccent p-1.5 rounded-full text-zinc-900 shadow-md">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* Title & subtitle */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
          <ShieldCheck className="w-3.5 h-3.5" />
          Paiement validé avec succès
        </span>
        
        <h1 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-tight mb-4">
          Bienvenue dans CopyBoost {planInfo.name} !
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 max-w-lg mb-8">
          Votre abonnement au forfait <strong className="text-zinc-900">{planInfo.name} ({planInfo.price} €/mois)</strong> est maintenant actif. Votre espace créatif est prêt.
        </p>

        {/* Plan card summary */}
        <div className="w-full bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 text-left shadow-sm mb-8">
          <div className="flex items-center justify-between pb-6 border-b border-zinc-100 mb-6">
            <div>
              <p className="text-xs uppercase font-bold text-zinc-400">Formule souscrite</p>
              <h2 className="text-xl font-bold text-zinc-900 mt-0.5">CopyBoost {planInfo.name}</h2>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-zinc-950">{planInfo.price} €</p>
              <p className="text-xs text-zinc-500">Facturé tous les mois</p>
            </div>
          </div>

          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
            Fonctionnalités immédiatement débloquées :
          </p>
          <ul className="space-y-2.5 text-sm text-zinc-700">
            {isAgence ? (
              <>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-limeAccent" />
                  Accès multi-équipes et jusqu'à 10 espaces de travail clients
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-limeAccent" />
                  Génération illimitée avec tous les modèles premium
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-limeAccent" />
                  Clés API & webhooks haute cadence
                </li>
              </>
            ) : (
              <>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-limeAccent" />
                  Génération illimitée de copywriting haute conversion
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-limeAccent" />
                  Accès à l'ensemble des 30+ structures persuasives
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-limeAccent" />
                  Export instantané vers vos outils préférés
                </li>
              </>
            )}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-zinc-900 text-white font-semibold text-sm hover:bg-zinc-800 transition-all shadow-md group"
          >
            <span>Accéder à mon tableau de bord</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-zinc-100 text-zinc-800 font-semibold text-sm hover:bg-zinc-200 transition-all"
          >
            Retourner au site
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-zinc-100 text-center text-xs text-zinc-400">
        CopyBoost © 2026. Facturation et abonnements sécurisés via Stripe.
      </footer>
    </div>
  );
};
