import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

import { LegalModalType } from '../types';

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-zinc-200 max-h-[85vh] overflow-y-auto"
        role="dialog"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'mentions' ? (
          <div className="space-y-4 text-zinc-700 text-sm">
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">Mentions Légales</h3>
            <p><strong>Éditeur du service :</strong> CopyBoost SAS au capital de 10 000 €</p>
            <p><strong>Siège social :</strong> 10 rue de la Paix, 75002 Paris, France</p>
            <p><strong>Directeur de la publication :</strong> Équipe fondatrice CopyBoost</p>
            <p><strong>Hébergement :</strong> Serveurs européens sécurisés conformes RGPD et ISO 27001.</p>
            <p><strong>Contact :</strong> support@copyboost.ai</p>
          </div>
        ) : (
          <div className="space-y-4 text-zinc-700 text-sm">
            <div className="flex items-center gap-2 text-zinc-900">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <h3 className="text-2xl font-bold">Politique de Confidentialité & RGPD</h3>
            </div>
            <p>Chez CopyBoost, la sécurité de vos écrits et de vos données privées est absolue.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Propriété intellectuelle :</strong> 100% de vos contenus générés vous appartiennent exclusivement.</li>
              <li><strong>Non-entraînement :</strong> Vos articles et brouillons ne sont jamais utilisés pour entraîner des modèles publics tiers.</li>
              <li><strong>Conformité RGPD :</strong> Données chiffrées au repos (AES-256) et en transit (TLS 1.3).</li>
              <li><strong>Droit d'accès et de suppression :</strong> Vous pouvez exporter ou supprimer l'ensemble de vos données sur simple demande par email à support@copyboost.ai.</li>
            </ul>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-zinc-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
