"use client";
import React from "react";
import ProofChainPro from "./ProofChainPro";

/**
 * Showcase props extracted directly from original Framer gallery demo.
 */
export const SHOWCASE_PROPS = {
  "accentColor": "rgb(0, 0, 0)",
  "allowDrag": true,
  "autoPlay": true,
  "backgroundMode": "none",
  "bridgeGap": 14,
  "chipColor": "rgb(241, 242, 245)",
  "cornerRadius": 38,
  "creditAccent": "rgb(0, 0, 0)",
  "creditLine": "rgba(19, 25, 42, 0.13)",
  "creditStyle": "marker",
  "dotColor": "rgba(23, 29, 46, 0.18)",
  "frameColor": "rgb(255, 255, 255)",
  "frameInset": 14,
  "glide": 1.04,
  "height": "100%",
  "id": "L0I11eenT",
  "imageOnRight": true,
  "imageShare": 0.4,
  "interval": 2.5,
  "layoutId": "L0I11eenT",
  "logoAlign": "center",
  "logoHeight": 36,
  "logoScrim": true,
  "metricColor": "rgb(18, 23, 42)",
  "metricFont": {
    "fontFamily": "\"Geist\", \"Geist Placeholder\", sans-serif",
    "fontSize": "48px",
    "fontStyle": "normal",
    "fontWeight": 400,
    "letterSpacing": "-0.025em",
    "lineHeight": "1.08em"
  },
  "nameColor": "rgb(27, 34, 51)",
  "nameFont": {
    "fontFamily": "\"Inter\", \"Inter Placeholder\", sans-serif",
    "fontSize": "16px",
    "fontStyle": "normal",
    "fontWeight": 400,
    "letterSpacing": "0em",
    "lineHeight": "1.3em"
  },
  "panelHeight": 520,
  "panelShadow": "0px 26px 70px 0px rgba(28, 32, 60, 0.16)",
  "panelWidth": 720,
  "pauseOnHover": false,
  "quoteColor": "rgb(20, 30, 60)",
  "quoteFont": {
    "fontFamily": "\"Geist\", \"Geist Placeholder\", sans-serif",
    "fontSize": "32px",
    "fontStyle": "normal",
    "fontWeight": 400,
    "letterSpacing": "-0.01em",
    "lineHeight": "1.24em"
  },
  "roleColor": "rgb(91, 98, 116)",
  "roleFont": {
    "fontFamily": "\"Inter\", \"Inter Placeholder\", sans-serif",
    "fontSize": "15px",
    "fontStyle": "normal",
    "fontWeight": 400,
    "letterSpacing": "0em",
    "lineHeight": "1.3em"
  },
  "showArrows": false,
  "showLogo": true,
  "showPager": true,
  "sideCount": 2,
  "sideHeightRatio": 0.68,
  "sideWidth": 130,
  "solidColor": "rgb(237, 239, 247)",
  "stories": [
    {
      "image": {
        "pixelHeight": 1104,
        "pixelWidth": 736,
        "src": "https://framerusercontent.com/images/BBVl3oMbbyatgoiMtZi1LSV6Is.jpg?width=736&height=1104",
        "srcSet": "https://framerusercontent.com/images/BBVl3oMbbyatgoiMtZi1LSV6Is.jpg?scale-down-to=1024&width=736&height=1104 682w,https://framerusercontent.com/images/BBVl3oMbbyatgoiMtZi1LSV6Is.jpg?width=736&height=1104 736w",
        "alt": ""
      },
      "imageUrl": "",
      "logo": {
        "pixelHeight": 91,
        "pixelWidth": 400,
        "src": "https://framerusercontent.com/images/q6FDS6StJeaEKsDfn13KreosyXs.png?width=400&height=91",
        "alt": ""
      },
      "logoUrl": "",
      "metric": "62% faster replies",
      "name": "Amara Vale",
      "quote": "“Our team stopped chasing calendars and started closing the day on time.”",
      "role": "Head of Client Operations at Northlake Group"
    },
    {
      "image": {
        "pixelHeight": 1152,
        "pixelWidth": 768,
        "src": "https://framerusercontent.com/images/mtvDwboQXRRM8ncBWEWiRcuNn0w.jpg?width=768&height=1152",
        "srcSet": "https://framerusercontent.com/images/mtvDwboQXRRM8ncBWEWiRcuNn0w.jpg?scale-down-to=1024&width=768&height=1152 682w,https://framerusercontent.com/images/mtvDwboQXRRM8ncBWEWiRcuNn0w.jpg?width=768&height=1152 768w",
        "alt": ""
      },
      "imageUrl": "",
      "logo": {
        "pixelHeight": 90,
        "pixelWidth": 400,
        "src": "https://framerusercontent.com/images/pKleiU1dLwqbXfqB5rMlOVqD0.png?width=400&height=90",
        "alt": ""
      },
      "logoUrl": "",
      "metric": "40 hours back a month",
      "name": "Jonah Reyes",
      "quote": "“Every handover now lives in one place, so nothing waits on a reminder.”",
      "role": "Director of Support at Brightloom"
    },
    {
      "image": {
        "pixelHeight": 1200,
        "pixelWidth": 1200,
        "src": "https://framerusercontent.com/images/MEJPWMpghAcy5jB8ZwPgurI3cs.png?width=1200&height=1200",
        "srcSet": "https://framerusercontent.com/images/MEJPWMpghAcy5jB8ZwPgurI3cs.png?scale-down-to=512&width=1200&height=1200 512w,https://framerusercontent.com/images/MEJPWMpghAcy5jB8ZwPgurI3cs.png?scale-down-to=1024&width=1200&height=1200 1024w,https://framerusercontent.com/images/MEJPWMpghAcy5jB8ZwPgurI3cs.png?width=1200&height=1200 1200w",
        "alt": ""
      },
      "imageUrl": "",
      "logo": {
        "pixelHeight": 124,
        "pixelWidth": 400,
        "src": "https://framerusercontent.com/images/OQo1r0F6acn3Ljs6085nEvBU0.png?width=400&height=124",
        "alt": ""
      },
      "logoUrl": "",
      "metric": "3× more demos booked",
      "name": "Priyoz Menon",
      "quote": "“People pick a slot in seconds, and the team shows up prepared every time.”",
      "role": "Revenue Lead at Vermeer Labs"
    },
    {
      "image": {
        "pixelHeight": 736,
        "pixelWidth": 736,
        "src": "https://framerusercontent.com/images/jO4rmyPI1VoCgQqsCTKsSXjPssM.jpg?width=736&height=736",
        "srcSet": "https://framerusercontent.com/images/jO4rmyPI1VoCgQqsCTKsSXjPssM.jpg?scale-down-to=512&width=736&height=736 512w,https://framerusercontent.com/images/jO4rmyPI1VoCgQqsCTKsSXjPssM.jpg?width=736&height=736 736w",
        "alt": ""
      },
      "imageUrl": "",
      "logo": {
        "pixelHeight": 103,
        "pixelWidth": 400,
        "src": "https://framerusercontent.com/images/jMS0sAxF1Otou0N77rVNpX4hGJs.png?width=400&height=103",
        "alt": ""
      },
      "logoUrl": "",
      "metric": "98% on-time delivery",
      "name": "Elena Duarte",
      "quote": "“Planning used to be guesswork. Now the whole week settles itself by Monday.”",
      "role": "Operations Manager at Harbor & Finch"
    },
    {
      "image": {
        "pixelHeight": 1318,
        "pixelWidth": 736,
        "src": "https://framerusercontent.com/images/rp6JdmGOx9edEoZC08GtvHnfpWc.jpg?width=736&height=1318",
        "srcSet": "https://framerusercontent.com/images/rp6JdmGOx9edEoZC08GtvHnfpWc.jpg?scale-down-to=1024&width=736&height=1318 571w,https://framerusercontent.com/images/rp6JdmGOx9edEoZC08GtvHnfpWc.jpg?width=736&height=1318 736w",
        "alt": ""
      },
      "imageUrl": "",
      "logo": {
        "pixelHeight": 69,
        "pixelWidth": 400,
        "src": "https://framerusercontent.com/images/FFyyyQha1zPXNaYIn4j7j3OSWbA.png?width=400&height=69",
        "alt": ""
      },
      "logoUrl": "",
      "metric": "Half the admin work",
      "name": "Tobias Wren",
      "quote": "“We replaced four spreadsheets with one flow the whole studio actually uses.”",
      "role": "Studio Director at Studio Cadence"
    }
  ],
  "style": {
    "height": "100%",
    "width": "100%"
  },
  "surfaceColor": "rgb(255, 255, 255)",
  "taper": 0.66,
  "tintAngle": 152,
  "tintOne": "rgb(113, 131, 228)",
  "tintThree": "rgb(248, 234, 220)",
  "tintTwo": "rgb(198, 182, 234)",
  "width": "100%"
};

export default function ProofChainProDemo() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <ProofChainPro {...SHOWCASE_PROPS} />
    </div>
  );
}
