import React from 'react';
import { Check, Sparkles, Zap, Building2 } from 'lucide-react';
import { STRIPE_CONFIG } from '../config/stripe';

interface PricingProps {
  onSelectFree?: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectFree }) => {
  return (
    <section id="tarifs" className="py-24 bg-white relative overflow-hidden w-full">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-limeAccent/15 blur-[120px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold mb-4 tracking-wide uppercase">
            <Zap className="w-3.5 h-3.5 text-zinc-900 fill-zinc-900" />
            Tarifs transparents
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Des formules conçues pour propulser votre croissance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Commencez sans frais ou débloquez toute la puissance de l'IA CopyBoost avec nos abonnements mensuels flexibles et sans engagement.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {/* 1. Plan Gratuit */}
          <div className="flex flex-col bg-zinc-50/80 rounded-3xl p-8 border border-zinc-200/80 hover:border-zinc-300 transition-all shadow-sm">
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-500 bg-zinc-200/70 px-3 py-1 rounded-full">
                Gratuit
              </span>
              <h3 className="text-2xl font-bold text-zinc-900 mt-4">Découverte</h3>
              <p className="text-sm text-zinc-600 mt-2 min-h-[40px]">
                {STRIPE_CONFIG.prices.free.description}
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-zinc-950">0 €</span>
                <span className="text-sm text-zinc-500 font-medium">/ mois</span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">Aucune carte bancaire requise</p>
            </div>

            <ul className="space-y-3.5 mb-8 flex-1 text-sm text-zinc-700">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Jusqu'à <strong>5 000 mots</strong> générés / mois</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>3 templates de copywriting essentiels</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Optimisation SEO basique</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Support communautaire standard</span>
              </li>
            </ul>

            <a
              href="#support"
              onClick={onSelectFree}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-semibold bg-white border border-zinc-300 text-zinc-900 hover:bg-zinc-100 hover:border-zinc-400 active:scale-98 transition-all shadow-sm text-center group"
            >
              <span>Démarrer avec Gratuit</span>
              <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>

          {/* 2. Plan Pro (Mis en avant / Recommandé) */}
          <div className="relative flex flex-col bg-zinc-950 text-white rounded-3xl p-8 border-2 border-limeAccent shadow-2xl shadow-limeAccent/10 md:-translate-y-3">
            {/* Badge Recommandé */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-limeAccent text-zinc-950 text-xs font-bold uppercase tracking-wider shadow-md">
                <Sparkles className="w-3.5 h-3.5 fill-zinc-950" />
                Recommandé
              </span>
            </div>

            <div className="mb-6 mt-1">
              <span className="text-xs uppercase font-bold tracking-wider text-limeAccent bg-limeAccent/15 px-3 py-1 rounded-full">
                Forfait Pro
              </span>
              <h3 className="text-2xl font-bold text-white mt-4">Pro</h3>
              <p className="text-sm text-zinc-300 mt-2 min-h-[40px]">
                {STRIPE_CONFIG.prices.pro.description}
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-white">19 €</span>
                <span className="text-sm text-zinc-400 font-medium">/ mois</span>
              </div>
              <p className="text-xs text-limeAccent/80 mt-1">Sans engagement • Annulation en 1 clic</p>
            </div>

            <ul className="space-y-3.5 mb-8 flex-1 text-sm text-zinc-200">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-limeAccent shrink-0" />
                <span><strong>Génération illimitée</strong> de textes</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-limeAccent shrink-0" />
                <span>Tous les <strong>30+ frameworks marketing</strong></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-limeAccent shrink-0" />
                <span>Adaptation automatique au ton de votre marque</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-limeAccent shrink-0" />
                <span>Export multi-formats (WordPress, Notion, HTML)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-limeAccent shrink-0" />
                <span>Support prioritaire sous 2h</span>
              </li>
            </ul>

            <a
              href="/checkout/pro"
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-sm font-bold bg-limeAccent text-zinc-950 hover:bg-[#c3e82d] active:scale-98 transition-all shadow-lg text-center group"
            >
              <span>Passer à Pro</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>

          {/* 3. Plan Agence */}
          <div className="flex flex-col bg-zinc-50/80 rounded-3xl p-8 border border-zinc-200/80 hover:border-zinc-300 transition-all shadow-sm">
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-500 bg-zinc-200/70 px-3 py-1 rounded-full">
                Grandes équipes
              </span>
              <div className="flex items-center gap-2 mt-4">
                <h3 className="text-2xl font-bold text-zinc-900">Agence</h3>
                <Building2 className="w-5 h-5 text-zinc-500" />
              </div>
              <p className="text-sm text-zinc-600 mt-2 min-h-[40px]">
                {STRIPE_CONFIG.prices.agence.description}
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-zinc-950">49 €</span>
                <span className="text-sm text-zinc-500 font-medium">/ mois</span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">Facturation centralisée • Multi-utilisateurs</p>
            </div>

            <ul className="space-y-3.5 mb-8 flex-1 text-sm text-zinc-700">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tout ce qui est inclus dans le plan <strong>Pro</strong></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Jusqu'à <strong>10 espaces de travail</strong> clients</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Collaboration d'équipe & gestion des rôles</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Accès API & webhooks d'automatisation</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Account Manager dédié & onboarding personnalisé</span>
              </li>
            </ul>

            <a
              href="/checkout/agence"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-800 active:scale-98 transition-all shadow-sm text-center group"
            >
              <span>Passer à Agence</span>
              <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
