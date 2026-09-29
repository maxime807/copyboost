import React from 'react';
import { Star } from 'lucide-react';
import { NumberRollup } from './NumberRollup';
import ProofChainPro from './testimonial-chain/ProofChainPro';

const COPYBOOST_STORIES = [
  {
    image: {
      pixelHeight: 1104,
      pixelWidth: 736,
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      alt: "Sarah Lemoine"
    },
    imageUrl: "",
    logo: null,
    logoUrl: "",
    metric: "4x plus de posts LinkedIn",
    name: "Sarah Lemoine",
    role: "Fondatrice @ GrowthSprint (B2B SaaS)",
    quote: "« CopyBoost a transformé notre flux de création : nos posts captent l'attention en 2 secondes sans perdre notre ton authentique. »"
  },
  {
    image: {
      pixelHeight: 1152,
      pixelWidth: 768,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      alt: "Marc-Antoine Vivier"
    },
    imageUrl: "",
    logo: null,
    logoUrl: "",
    metric: "+230% de taux de conversion",
    name: "Marc-Antoine Vivier",
    role: "Directeur Marketing @ LeadFlow",
    quote: "« Les accroches et les CTA générés par CopyBoost ont directement boosté l'engagement sur nos pages d'atterrissage. »"
  },
  {
    image: {
      pixelHeight: 1200,
      pixelWidth: 1200,
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      alt: "Chloé Martinez"
    },
    imageUrl: "",
    logo: null,
    logoUrl: "",
    metric: "15 heures sauvées / semaine",
    name: "Chloé Martinez",
    role: "Ghostwriter & Créatrice de contenu",
    quote: "« Je ne commence plus jamais devant une page blanche. La structure d'articles et la déclinaison multicanale sont imbattables. »"
  },
  {
    image: {
      pixelHeight: 1318,
      pixelWidth: 736,
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      alt: "Julien Besson"
    },
    imageUrl: "",
    logo: null,
    logoUrl: "",
    metric: "+68% d'ouverture newsletter",
    name: "Julien Besson",
    role: "Auteur @ The AI Dispatch (45k abonnés)",
    quote: "« L'optimisation des objets d'emails et des hooks a fait décoller la fidélisation de mon audience dès le premier mois. »"
  }
];

export const SocialProof: React.FC = () => {
  return (
    <section id="temoignages" className="py-24 bg-remoteBg border-t border-remoteBorder overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-12">
        
        {/* Titre & métriques de réassurance */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-limeAccent/20 border border-limeAccent/60 text-xs font-semibold text-remoteDark uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-remoteDark"></span>
            Preuve sociale & Avis vérifiés
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-remoteDark">
            Adopté par plus de 3 500 créateurs indépendants
          </h2>
          <p className="mt-4 text-remoteMuted text-lg">
            Découvrez pourquoi les meilleurs rédacteurs et créateurs de contenu francophones ne jurent que par CopyBoost.
          </p>

          {/* Étoiles de satisfaction */}
          <div className="mt-6 flex items-center justify-center gap-1.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-sm font-bold text-remoteDark">4.9 / 5</span>
            <span className="text-sm text-remoteMuted font-medium">(sur +620 avis créateurs)</span>
          </div>
        </div>

        {/* Module carrousel immersif remplaçant les cartes statiques */}
        <div className="w-full flex justify-center items-center my-6">
          <div className="w-full max-w-[1240px] h-[520px] sm:h-[560px]">
            <ProofChainPro
              stories={COPYBOOST_STORIES}
              panelWidth={760}
              panelHeight={480}
              imageShare={0.42}
              imageOnRight={true}
              sideCount={2}
              sideWidth={180}
              sideHeightRatio={0.62}
              taper={0.72}
              bridgeGap={24}
              frameInset={14}
              cornerRadius={32}
              showLogo={false}
              autoPlay={true}
              interval={4.5}
              pauseOnHover={true}
              glide={1.2}
              allowDrag={true}
              showPager={true}
              showArrows={false}
              backgroundMode="none"
              surfaceColor="#ffffff"
              frameColor="#ffffff"
              panelShadow="0px 20px 50px rgba(0, 0, 0, 0.08)"
              creditStyle="marker"
              creditAccent="#e3ff8f"
              creditLine="rgba(34, 36, 42, 0.1)"
              chipColor="#f2f3f3"
              accentColor="#22242a"
              dotColor="rgba(34, 36, 42, 0.2)"
              metricColor="#22242a"
              quoteColor="#22242a"
              nameColor="#22242a"
              roleColor="#415762"
              metricFont={{
                fontFamily: 'Onest, Inter, sans-serif',
                fontSize: '40px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: '1.1em'
              }}
              quoteFont={{
                fontFamily: 'Onest, Inter, sans-serif',
                fontSize: '24px',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                lineHeight: '1.35em'
              }}
              nameFont={{
                fontFamily: 'Onest, Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '1.3em'
              }}
              roleFont={{
                fontFamily: 'Onest, Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '1.3em'
              }}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
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

export default SocialProof;
