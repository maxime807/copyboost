# 🧩 qxWWK6FCH - Reusable Component
**Origine :** [Preview](https://line-menu.framer.website/)  
**Date d'extraction :** 2026-09-26 14:35:29  
**Framework cible :** React / Next.js (App Router compatible `"use client"`)  

---

## ⚡ Quick Start (Copier-Coller)

### 1. Importer le composant
```tsx
import qxWWK6FCH from "@/components/library/qxwwk6fch/qxWWK6FCH";
// Ou importer directement la démo prête à l'emploi avec les presets visuels :
import qxWWK6FCHDemo from "@/components/library/qxwwk6fch/Demo";
```

### 2. Intégration dans une page (Règle Zéro Monolithe)
```tsx
// src/components/sections/GallerySection.tsx
import qxWWK6FCH from "@/components/library/qxwwk6fch/qxWWK6FCH";

export default function GallerySection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <qxWWK6FCH />
    </section>
  );
}
```

---

## 🛠️ Propriétés & Configuration (Props Schema)

*Propriétés déduites depuis les props d'origine (voir `props.json`).*

---

## 📦 Fichiers Générés
- `qxWWK6FCH.jsx` : Composant React autonome 100% découplé de Framer.
- `Demo.jsx` : Démo prête à être montée avec les images et styles du site d'origine.
- `index.js` : Export barrel pour import simplifié.
- `props.json` : Schéma complet des contrôles et valeurs réelles de la démo.
- `assets/` : Médias et images associés.
