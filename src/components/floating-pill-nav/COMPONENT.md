# 🧩 FloatingPillNavigation - Reusable Component
**Origine :** [My Framer Site](https://floating-pill-nav.framer.website/)  
**Date d'extraction :** 2026-09-26 14:35:45  
**Framework cible :** React / Next.js (App Router compatible `"use client"`)  

---

## ⚡ Quick Start (Copier-Coller)

### 1. Importer le composant
```tsx
import FloatingPillNavigation from "@/components/library/floatingpillnavigation/FloatingPillNavigation";
// Ou importer directement la démo prête à l'emploi avec les presets visuels :
import FloatingPillNavigationDemo from "@/components/library/floatingpillnavigation/Demo";
```

### 2. Intégration dans une page (Règle Zéro Monolithe)
```tsx
// src/components/sections/GallerySection.tsx
import FloatingPillNavigation from "@/components/library/floatingpillnavigation/FloatingPillNavigation";

export default function GallerySection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <FloatingPillNavigation />
    </section>
  );
}
```

---

## 🛠️ Propriétés & Configuration (Props Schema)

| Propriété | Type | Titre UI | Détails / Options |
| :--- | :--- | :--- | :--- |
| `activeLink` | `String` | Active Link | `All products` |
| `transition` | `Transition` | Transition | `Object` |
| `linkPadding` | `Any` | Link Padding | `12px 22px 12px 22px` |
| `items` | `Array` | items | `Array (4 items)` |
| `backgroundColor` | `Color` | backgroundColor | `#E8E8ED` |
| `textColor` | `Color` | Inactive Text | `#000000` |
| `activeBackgroundColor` | `Color` | Active BG | `#1D1D1F` |
| `activeTextColor` | `Color` | Active Text | `#FFFFFF` |
| `padding` | `Number` | padding | `6` |
| `gap` | `Number` | gap | `0` |
| `font` | `Font` | font | `Object` |

---

## 📦 Fichiers Générés
- `FloatingPillNavigation.jsx` : Composant React autonome 100% découplé de Framer.
- `Demo.jsx` : Démo prête à être montée avec les images et styles du site d'origine.
- `index.js` : Export barrel pour import simplifié.
- `props.json` : Schéma complet des contrôles et valeurs réelles de la démo.
- `assets/` : Médias et images associés.
