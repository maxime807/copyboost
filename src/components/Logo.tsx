import React from 'react';

interface LogoIconProps {
  className?: string;
}

/**
 * Composant vectoriel dédié pour le logo Plume (Feather) CopyBoost.
 * Utilise currentColor pour s'adapter dynamiquement au fond et au thème.
 */
export const LogoIcon: React.FC<LogoIconProps> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg
      viewBox="0 0 670 611"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g transform="translate(-179, 837.4) scale(0.1, -0.1)">
        <path d="M8145 8364 c-814 -173 -1514 -400 -2090 -678 -203 -98 -383 -201 -599 -344 -87 -57 -166 -106 -175 -109 -10 -2 -23 9 -36 34 -30 56 -77 83 -142 83 -48 0 -73 -10 -221 -84 -326 -165 -605 -372 -818 -607 -42 -46 -91 -101 -110 -121 l-34 -37 -42 19 c-51 23 -144 26 -191 6 -96 -40 -370 -313 -613 -611 -574 -703 -861 -1434 -853 -2170 2 -180 0 -218 -16 -265 -20 -60 -82 -203 -140 -320 -168 -340 -275 -617 -275 -710 0 -56 15 -93 52 -126 54 -50 109 -63 202 -47 59 9 110 66 136 150 81 266 312 711 438 845 55 58 82 77 190 132 302 152 551 216 1147 296 392 53 658 131 970 287 284 142 486 282 647 446 123 125 154 182 144 265 -3 32 -19 82 -35 115 l-30 57 60 0 c33 0 76 7 97 16 20 9 98 41 172 71 530 215 973 520 1305 897 136 154 150 178 150 268 l1 67 71 53 c334 248 585 563 763 956 130 288 210 609 210 848 0 124 -18 191 -67 245 -69 76 -149 98 -268 73z m-69 -478 c-9 -87 -56 -271 -101 -392 -111 -297 -279 -551 -521 -785 -155 -149 -242 -209 -386 -264 -135 -52 -260 -114 -296 -148 -62 -58 -65 -125 -8 -175 32 -28 130 -72 161 -72 28 0 25 -20 -7 -51 -189 -183 -529 -419 -802 -556 -345 -173 -714 -277 -1196 -338 -214 -27 -293 -57 -335 -128 -23 -38 -31 -138 -15 -177 17 -41 87 -102 154 -133 50 -24 203 -74 291 -97 22 -5 49 -16 59 -23 16 -12 11 -18 -65 -69 -204 -136 -405 -230 -643 -303 -137 -41 -254 -64 -536 -105 -376 -54 -612 -100 -810 -156 l-25 -8 28 34 c16 18 40 56 54 84 73 143 456 581 877 1002 379 378 589 560 1011 874 299 222 401 294 554 386 148 89 225 150 236 185 9 29 -13 86 -42 109 -39 31 -92 25 -212 -22 -109 -43 -479 -227 -631 -313 -265 -150 -651 -440 -930 -699 -200 -185 -520 -508 -653 -659 -79 -89 -252 -294 -386 -454 -133 -161 -246 -293 -250 -293 -19 0 54 307 115 480 70 202 214 480 375 722 153 231 460 619 578 733 39 37 43 39 64 25 62 -40 114 -60 156 -60 100 0 163 36 236 138 114 158 310 363 460 484 102 82 225 168 240 168 11 0 65 -105 65 -127 0 -20 43 -64 81 -83 45 -24 116 -26 165 -5 19 8 85 65 147 128 229 232 593 466 1037 667 264 119 674 268 995 362 165 48 672 176 699 177 17 1 18 -4 12 -63z" />
      </g>
    </svg>
  );
};

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  inverted?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
  inverted = false,
}) => {
  const sizeConfig = {
    sm: {
      box: 'w-8 h-8 rounded-lg',
      icon: 'w-4 h-4',
      text: 'text-lg',
      sub: 'text-[9px]',
    },
    md: {
      box: 'w-9 h-9 rounded-xl',
      icon: 'w-5 h-5',
      text: 'text-xl',
      sub: 'text-[10px]',
    },
    lg: {
      box: 'w-11 h-11 rounded-2xl',
      icon: 'w-6 h-6',
      text: 'text-2xl',
      sub: 'text-xs',
    },
  }[size];

  const boxBg = inverted
    ? 'bg-white text-zinc-950'
    : 'bg-zinc-950 text-white';

  const textColor = inverted ? 'text-white' : 'text-zinc-950';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon badge */}
      <div
        className={`${sizeConfig.box} ${boxBg} flex items-center justify-center shadow-xs transition-transform group-hover:scale-105`}
      >
        <LogoIcon className={`${sizeConfig.icon} text-white ${inverted ? 'text-zinc-950' : 'text-white'}`} />
      </div>

      {/* Brand text */}
      <div className="flex flex-col">
        <span className={`font-bold tracking-tight ${textColor} ${sizeConfig.text} flex items-center gap-1.5 leading-none`}>
          CopyBoost
          <span className="w-1.5 h-1.5 rounded-full bg-[#d2f831]"></span>
        </span>
        {showSubtitle && (
          <span className="text-[10px] uppercase font-semibold tracking-wider text-zinc-400 mt-1">
            AI Content Engine
          </span>
        )}
      </div>
    </div>
  );
};
