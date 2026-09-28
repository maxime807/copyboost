# 🧩 ProofChainPro - Reusable Component
**Origine :** [Testimonial Chain](https://testimonialchain.framer.website/)  
**Date d'extraction :** 2026-09-26 14:35:21  
**Framework cible :** React / Next.js (App Router compatible `"use client"`)  

---

## ⚡ Quick Start (Copier-Coller)

### 1. Importer le composant
```tsx
import ProofChainPro from "@/components/library/proofchainpro/ProofChainPro";
// Ou importer directement la démo prête à l'emploi avec les presets visuels :
import ProofChainProDemo from "@/components/library/proofchainpro/Demo";
```

### 2. Intégration dans une page (Règle Zéro Monolithe)
```tsx
// src/components/sections/GallerySection.tsx
import ProofChainPro from "@/components/library/proofchainpro/ProofChainPro";

export default function GallerySection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <ProofChainPro />
    </section>
  );
}
```

---

## 🛠️ Propriétés & Configuration (Props Schema)

| Propriété | Type | Titre UI | Détails / Options |
| :--- | :--- | :--- | :--- |
| `stories` | `Array` | Stories | `Object` |
| `panelWidth` | `Number` | Panel W | `780` |
| `panelHeight` | `Number` | Panel H | `520` |
| `imageShare` | `Number` | Photo size | `0.48` |
| `imageOnRight` | `Boolean` | Photo | `True` |
| `sideCount` | `Number` | Side cards | `2` |
| `sideWidth` | `Number` | Side W | `112` |
| `sideHeightRatio` | `Number` | Side H | `0.68` |
| `taper` | `Number` | Taper | `0.66` |
| `bridgeGap` | `Number` | Gap | `16` |
| `frameInset` | `Number` | Frame | `14` |
| `cornerRadius` | `Number` | Radius | `38` |
| `showLogo` | `Boolean` | Logo | `True` |
| `logoHeight` | `Number` | Logo size | `44` |
| `logoAlign` | `Enum` | Logo at | `left` |
| `logoScrim` | `Boolean` | Scrim | `True` |
| `autoPlay` | `Boolean` | Autoplay | `True` |
| `interval` | `Number` | Every | `5` |
| `pauseOnHover` | `Boolean` | Pause hover | `True` |
| `glide` | `Number` | Glide | `0.72` |
| `allowDrag` | `Boolean` | Drag | `True` |
| `showPager` | `Boolean` | Progress | `True` |
| `showArrows` | `Boolean` | Arrows | `False` |
| `backgroundMode` | `Enum` | Backdrop | `gradient` |
| `tintOne` | `Color` | Tint 1 | `#7183E4` |
| `tintTwo` | `Color` | Tint 2 | `#C6B6EA` |
| `tintThree` | `Color` | Tint 3 | `#F8EADC` |
| `tintAngle` | `Number` | Angle | `152` |
| `solidColor` | `Color` | Backdrop | `#EDEFF7` |
| `surfaceColor` | `Color` | Panel | `#FFFFFF` |
| `frameColor` | `Color` | Frames | `#FFFFFF` |
| `panelShadow` | `Any` | Shadow | `0px 26px 70px 0px rgba(28,32,60,0.16)` |
| `creditStyle` | `Enum` | Credit | `rule` |
| `creditAccent` | `Color` | Credit mark | `#4B72F0` |
| `creditLine` | `Color` | Credit rule | `rgba(19,25,42,0.13)` |
| `chipColor` | `Color` | Chips | `#F1F2F5` |
| `accentColor` | `Color` | Accent | `#4B72F0` |
| `dotColor` | `Color` | Dots | `rgba(23,29,46,0.18)` |
| `metricFont` | `Font` | Headline | `Object` |
| `metricColor` | `Color` | Headline | `#12172A` |
| `quoteFont` | `Font` | Quote | `Object` |
| `quoteColor` | `Color` | Quote | `#141E3C` |
| `nameFont` | `Font` | Name | `Object` |
| `nameColor` | `Color` | Name | `#1B2233` |
| `roleFont` | `Font` | Role | `Object` |
| `roleColor` | `Color` | Role | `#5B6274` |

---

## 📦 Fichiers Générés
- `ProofChainPro.jsx` : Composant React autonome 100% découplé de Framer.
- `Demo.jsx` : Démo prête à être montée avec les images et styles du site d'origine.
- `index.js` : Export barrel pour import simplifié.
- `props.json` : Schéma complet des contrôles et valeurs réelles de la démo.
- `assets/` : Médias et images associés.
