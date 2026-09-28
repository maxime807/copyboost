import React from 'react';
import { Star, Quote } from 'lucide-react';
import { NumberRollup } from './NumberRollup';

const testimonials = [
  {
    author: "Alexandre Dupuis",
    role: "Fondateur @ ScaleMedia (80k abonnés)",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    quote: "CopyBoost a divisé mon temps d'écriture par 4. Ce n'est pas un énième prompt ChatGPT générique : le contenu a du fond, du rythme et résonne immédiatement avec ma communauté.",
    metric: "+145% de trafic organique",
  },
  {
    author: "Camille Renard",
    role: "Rédactrice & Ghostwriter B2B",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    quote: "La possibilité d'adapter la voix de l'IA aux différents briefs de mes clients est une prouesse technique. Mes clients n'ont jamais vu la différence avec mes écrits originaux.",
    metric: "12 articles rédigés / semaine",
  },
  {
    author: "Thomas Mercier",
    role: "Créateur de newsletter & Tech Blogger",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80",
    quote: "Le module de structure H2/H3 et les accroches virales sont exceptionnels. Je publie deux fois plus régulièrement et mon taux de lecture a explosé.",
    metric: "4.8 min de temps moyen par article",
  }
];

export const SocialProof: React.FC = () => {
  return (
    <section id="temoignages" className="py-24 bg-zinc-50/60 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre & métriques de réassurance */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#d2f831]"></span>
            Preuve sociale & Avis vérifiés
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Adopté par plus de 3 500 créateurs indépendants
          </h2>
          <p className="mt-4 text-zinc-600 text-lg">
            Découvrez pourquoi les meilleurs rédacteurs et créateurs de blogs francophones ne jurent que par CopyBoost.
          </p>

          {/* Étoiles de satisfaction */}
          <div className="mt-6 flex items-center justify-center gap-1.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-sm font-bold text-zinc-900">4.9 / 5</span>
            <span className="text-sm text-zinc-500 font-medium">(sur +620 avis créateurs)</span>
          </div>
        </div>

        {/* Grille des témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <div>
                <Quote className="w-8 h-8 text-[#d2f831] mb-4 opacity-80" />
                <p className="text-zinc-700 leading-relaxed text-base italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-zinc-100"
                  />
                  <div>
                    <div className="font-bold text-sm text-zinc-900">{item.author}</div>
                    <div className="text-xs text-zinc-500">{item.role}</div>
                  </div>
                </div>
              </div>

              {/* Badge résultat */}
              <div className="mt-4 inline-block self-start">
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#d2f831]/30 text-zinc-900">
                  {item.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Métriques d'impact et de confiance épurées directement sur le fond */}
        <div className="mt-16 pt-12 border-t border-remoteBorder grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
          <div className="space-y-1">
            <div className="text-4xl sm:text-6xl font-extrabold text-remoteDark tracking-tight">
              <NumberRollup value={4.2} decimals={1} suffix="x" />
            </div>
            <div className="text-xs sm:text-sm text-remoteMuted font-medium">Vitesse de publication</div>
          </div>

          <div className="space-y-1">
            <div className="text-4xl sm:text-6xl font-extrabold text-remoteDark tracking-tight">
              <NumberRollup value={185} prefix="+" suffix="k" />
            </div>
            <div className="text-xs sm:text-sm text-remoteMuted font-medium">Articles rédigés & indexés</div>
          </div>

          <div className="space-y-1">
            <div className="text-4xl sm:text-6xl font-extrabold text-remoteDark tracking-tight">
              <NumberRollup value={99.4} decimals={1} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm text-remoteMuted font-medium">Satisfaction éditoriale</div>
          </div>

          <div className="space-y-1">
            <div className="text-4xl sm:text-6xl font-extrabold text-remoteDark tracking-tight">
              <NumberRollup value={28} prefix="< " suffix="s" />
            </div>
            <div className="text-xs sm:text-sm text-remoteMuted font-medium">Génération d'un plan complet</div>
          </div>
        </div>

      </div>
    </section>
  );
};
