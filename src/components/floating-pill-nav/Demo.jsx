"use client";
import React from "react";
import FloatingPillNavigation from "./FloatingPillNavigation";

/**
 * Showcase props extracted directly from original Framer gallery demo.
 */
export const SHOWCASE_PROPS = {
  "activeBackgroundColor": "rgb(29, 29, 31)",
  "activeLink": "All products",
  "activeTextColor": "rgb(255, 255, 255)",
  "backgroundColor": "rgb(232, 232, 237)",
  "font": {
    "fontFamily": "\"Inter\", \"Inter Placeholder\", sans-serif",
    "fontSize": "17px",
    "fontStyle": "normal",
    "fontWeight": 400,
    "letterSpacing": "-0.37px",
    "lineHeight": "20px"
  },
  "gap": 0,
  "height": "100%",
  "id": "gZnh4NZyT",
  "items": [
    {
      "href": "",
      "label": "All products",
      "target": "_self"
    },
    {
      "href": "",
      "label": "Laptops",
      "target": "_self"
    },
    {
      "href": "",
      "label": "Desktops",
      "target": "_self"
    },
    {
      "href": "",
      "label": "Displays",
      "target": "_self"
    }
  ],
  "layoutId": "gZnh4NZyT",
  "linkPadding": "12px 22px 12px 22px",
  "padding": 6,
  "textColor": "rgb(0, 0, 0)",
  "transition": {
    "damping": 60,
    "delay": 0,
    "mass": 1,
    "stiffness": 800,
    "type": "spring"
  },
  "width": "100%"
};

export default function FloatingPillNavigationDemo() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <FloatingPillNavigation {...SHOWCASE_PROPS} />
    </div>
  );
}
