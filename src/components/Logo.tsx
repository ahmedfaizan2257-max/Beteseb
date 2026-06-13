import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Emblem: Intersecting houses, gold roots and leaves */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="BETESEB CARE Brand Mark"
      >
        {/* Background Shield/Circle in Slate-Champagne Hue */}
        <circle cx="50" cy="50" r="48" fill="#10243E" />
        
        {/* Shield Border in Gold */}
        <circle cx="50" cy="50" r="45" stroke="#C9A35E" strokeWidth="2" strokeDasharray="6 3" opacity="0.8" />
        
        {/* House / Roof representing Hearth and Traditional Family */}
        <path
          d="M50 20 L24 44 H76 Z"
          fill="#C9A35E"
          stroke="#C9A35E"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        
        {/* Interlocking Heart / Infinity loop signifying Care, and 'Beteseb' (Family in Amharic) */}
        <path
          d="M34 50 C34 40, 50 40, 50 50 C50 40, 66 40, 66 50 C66 64, 50 78, 50 78 C50 78, 34 64, 34 50 Z"
          stroke="#F7F4EE"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#10243E"
          fillOpacity="0.4"
        />
        
        {/* Growing Olive leaf/sprout signifying health, growth, and community integration */}
        <path
          d="M50 55 C48 60 40 62 42 66 C44 70 50 67 50 67 C50 67 56 70 58 66 C60 62 52 60 50 55 Z"
          fill="#758677"
        />
        
        <circle cx="50" cy="50" r="2" fill="#F7F4EE" />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col text-left">
          <span 
            className="tracking-widest text-[#10243E] font-medium text-lg leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            BETESEB
          </span>
          <span 
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A35E] m-0"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            CARE
          </span>
        </div>
      )}
    </div>
  );
}
