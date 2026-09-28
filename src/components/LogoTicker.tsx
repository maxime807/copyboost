import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "Substackers FR",
  "Ghost Creators",
  "Notion Writers",
  "IndieHackers",
  "Medium Elite",
  "LinkedIn Top Voices",
  "TechCrunch FR",
  "Les Échos Start"
];

export const LogoTicker: React.FC = () => {
  return (
    <div className="py-10 bg-white border-y border-remoteBorder overflow-hidden relative">
      {/* Masque dégradé sur les bords pour fondu Framer */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex">
        <motion.div
          className="flex gap-16 shrink-0 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 22,
            repeat: Infinity,
          }}
        >
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-zinc-400 font-semibold text-sm sm:text-base tracking-tight hover:text-remoteDark transition-colors shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-limeAccent"></span>
              <span>{brand}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
