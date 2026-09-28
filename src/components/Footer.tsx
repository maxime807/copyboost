import { LegalModalType } from '../types';

interface FooterProps {
  onOpenLegal: (type: NonNullable<LegalModalType>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Colonnes du Footer inspirées de la capture Remote ("PRODUCT", "COMPANY", "RESOURCES") */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Marque */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white font-bold text-sm">
                <span className="text-[#d2f831]">C</span>B
              </div>
              <span className="font-bold text-lg text-zinc-900 tracking-tight">CopyBoost</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed pr-4">
              La plateforme IA qui démultiplie l'impact éditorial des créateurs, blogueurs et équipes marketing.
            </p>
          </div>

          {/* Colonne PRODUIT */}
          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-4">
              Produit
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600">
              <li>
                <a href="#fonctionnalites" className="hover:text-zinc-950 transition-colors">
                  Générateur d'articles
                </a>
              </li>
              <li>
                <a href="#fonctionnalites" className="hover:text-zinc-950 transition-colors flex items-center gap-1.5">
                  Analyseur SEO
                  <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-md bg-[#d2f831] text-zinc-900">
                    Nouveau
                  </span>
                </a>
              </li>
              <li>
                <a href="#fonctionnalites" className="hover:text-zinc-950 transition-colors">
                  Ton personnalisé
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne ENTREPRISE & CONTACT */}
          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-4">
              Plateforme
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600">
              <li>
                <a href="#support" className="hover:text-zinc-950 transition-colors">
                  Contact & Assistance 24/7
                </a>
              </li>
              <li>
                <a href="#temoignages" className="hover:text-zinc-950 transition-colors">
                  Avis créateurs
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-zinc-950 transition-colors">
                  Démarrer l'essai
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne LÉGAL (modales interactives, aucun lien mort) */}
          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-4">
              Légal & Sécurité
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('mentions')}
                  className="hover:text-zinc-950 transition-colors text-left"
                >
                  Mentions Légales
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('confidentialite')}
                  className="hover:text-zinc-950 transition-colors text-left"
                >
                  Politique de confidentialité
                </button>
              </li>
              <li>
                <span className="text-xs text-emerald-600 font-medium flex items-center gap-1 mt-1">
                  ● Conforme RGPD UE
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Ligne inférieure de Copyright */}
        <div className="pt-8 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} CopyBoost Inc. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span>Conçu avec passion pour les créateurs de contenu</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
