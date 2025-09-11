interface IconProps {
  className?: string;
}

// Broadcast Tower with Art Deco stepped design and radio waves
export function BroadcastTowerDeco({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Central tower with stepped Art Deco design */}
      <rect x="10.5" y="4" width="3" height="18" />
      <rect x="9.5" y="8" width="5" height="2" />
      <rect x="8.5" y="12" width="7" height="2" />
      <rect x="7.5" y="16" width="9" height="2" />
      
      {/* Radio waves in geometric Art Deco style */}
      <path d="M6 10c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <path d="M2 14c0-5.5 4.5-10 10-10s10 4.5 10 10" />
      
      {/* Art Deco sunburst at top */}
      <path d="M12 2v2" />
      <path d="M15 3l-1 1" />
      <path d="M9 3l1 1" />
    </svg>
  );
}

// Art Deco skyscraper with stepped facade
export function SkyscraperDeco({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Main building with stepped Art Deco profile */}
      <rect x="6" y="18" width="12" height="4" />
      <rect x="7" y="14" width="10" height="4" />
      <rect x="8" y="10" width="8" height="4" />
      <rect x="9" y="6" width="6" height="4" />
      <rect x="10.5" y="2" width="3" height="4" />
      
      {/* Art Deco window details */}
      <line x1="8.5" y1="16" x2="8.5" y2="17" />
      <line x1="10" y1="16" x2="10" y2="17" />
      <line x1="14" y1="16" x2="14" y2="17" />
      <line x1="15.5" y1="16" x2="15.5" y2="17" />
      
      <line x1="9.5" y1="12" x2="9.5" y2="13" />
      <line x1="11" y1="12" x2="11" y2="13" />
      <line x1="13" y1="12" x2="13" y2="13" />
      <line x1="14.5" y1="12" x2="14.5" y2="13" />
      
      {/* Crown detail */}
      <path d="M10.5 2l1.5-1 1.5 1" />
    </svg>
  );
}

// Art Deco radio waves with geometric pattern
export function RadioWavesDeco({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Central source */}
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      
      {/* Art Deco geometric wave pattern */}
      <path d="M8 8l8 8" />
      <path d="M8 16l8-8" />
      <path d="M4 12h4" />
      <path d="M16 12h4" />
      <path d="M12 4v4" />
      <path d="M12 16v4" />
      
      {/* Stepped wave design */}
      <path d="M6 6l2 2-2 2-2-2z" />
      <path d="M18 6l-2 2 2 2 2-2z" />
      <path d="M6 18l2-2-2-2-2 2z" />
      <path d="M18 18l-2-2 2-2 2 2z" />
    </svg>
  );
}

// Art Deco rooftop antenna with stepped design
export function AntennaDeco({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Main vertical antenna pole with stepped base */}
      <rect x="11.5" y="8" width="1" height="14" />
      <rect x="10" y="20" width="4" height="2" />
      <rect x="9" y="22" width="6" height="1" />
      
      {/* Horizontal antenna elements (Yagi-style) */}
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="7" y1="8" x2="17" y2="8" />
      
      {/* Art Deco radio waves emanating from antenna */}
      <path d="M12 6c-2 0-4 2-4 4" />
      <path d="M16 10c0-2-2-4-4-4" />
      <path d="M12 4c-3 0-6 3-6 6" />
      <path d="M18 10c0-3-3-6-6-6" />
      
      {/* Stepped roof structure */}
      <rect x="6" y="20" width="12" height="1" />
      <rect x="7" y="19" width="10" height="1" />
      <rect x="8" y="18" width="8" height="1" />
      
      {/* Art Deco lightning rod detail */}
      <path d="M12 2l-1 4 2-2 1 4" />
    </svg>
  );
}

// Art Deco film reel with geometric spokes
export function FilmReelDeco({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Outer reel */}
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="6" />
      
      {/* Art Deco spokes in stepped pattern */}
      <path d="M12 3v6" />
      <path d="M12 15v6" />
      <path d="M3 12h6" />
      <path d="M15 12h6" />
      
      {/* Diagonal spokes with Art Deco stepped design */}
      <path d="M5.64 5.64l4.24 4.24" />
      <path d="M14.12 14.12l4.24 4.24" />
      <path d="M18.36 5.64l-4.24 4.24" />
      <path d="M9.88 14.12l-4.24 4.24" />
      
      {/* Center hub */}
      <circle cx="12" cy="12" r="2" />
      
      {/* Film strip detail */}
      <rect x="2" y="10" width="4" height="4" />
      <rect x="18" y="10" width="4" height="4" />
    </svg>
  );
}

// Art Deco stage curtain with geometric draping
export function StageCurtainDeco({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Stage with Art Deco stepped design */}
      <rect x="2" y="18" width="20" height="4" />
      <rect x="3" y="16" width="18" height="2" />
      
      {/* Left curtain with geometric folds */}
      <path d="M4 4v12" />
      <path d="M6 4v12" />
      <path d="M8 4v12" />
      <path d="M4 4c0 2 2 2 2 4s-2 2-2 4 2 2 2 4" />
      <path d="M6 4c0 2 2 2 2 4s-2 2-2 4 2 2 2 4" />
      
      {/* Right curtain with geometric folds */}
      <path d="M20 4v12" />
      <path d="M18 4v12" />
      <path d="M16 4v12" />
      <path d="M20 4c0 2-2 2-2 4s2 2 2 4-2 2-2 4" />
      <path d="M18 4c0 2-2 2-2 4s2 2 2 4-2 2-2 4" />
      
      {/* Art Deco top rail */}
      <rect x="2" y="2" width="20" height="2" />
      <path d="M12 2v2" />
      <path d="M8 2v2" />
      <path d="M16 2v2" />
    </svg>
  );
}

// Art Deco target with stepped rings
export function TargetDeco({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Concentric rings with Art Deco styling */}
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      
      {/* Art Deco cross-hairs with stepped design */}
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      
      {/* Diagonal Art Deco elements */}
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M19.07 4.93l-2.83 2.83" />
      <path d="M7.76 16.24l-2.83 2.83" />
      
      {/* Stepped corner details */}
      <rect x="3" y="3" width="2" height="2" />
      <rect x="19" y="3" width="2" height="2" />
      <rect x="3" y="19" width="2" height="2" />
      <rect x="19" y="19" width="2" height="2" />
    </svg>
  );
}

// Art Deco ribbon microphone with stepped design
export function RibbonMicDeco({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Microphone body with Art Deco stepped design */}
      <rect x="9" y="6" width="6" height="10" rx="3" />
      <rect x="8" y="8" width="8" height="2" />
      <rect x="8" y="12" width="8" height="2" />
      
      {/* Art Deco grille pattern */}
      <line x1="10" y1="9" x2="10" y2="10" />
      <line x1="12" y1="9" x2="12" y2="10" />
      <line x1="14" y1="9" x2="14" y2="10" />
      <line x1="10" y1="13" x2="10" y2="14" />
      <line x1="12" y1="13" x2="12" y2="14" />
      <line x1="14" y1="13" x2="14" y2="14" />
      
      {/* Stand with stepped base */}
      <rect x="11" y="16" width="2" height="4" />
      <rect x="8" y="20" width="8" height="2" />
      <rect x="7" y="22" width="10" height="1" />
      
      {/* Art Deco top details */}
      <path d="M9 6c0-1.5 1.5-3 3-3s3 1.5 3 3" />
      <circle cx="12" cy="4" r="1" />
    </svg>
  );
}

// Art Deco drama masks with geometric styling
export function DramaMasksDeco({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Happy mask (left) with Art Deco geometric features */}
      <path d="M2 12c0-4 2-8 6-8s6 4 6 8-2 8-6 8-6-4-6-8z" />
      <circle cx="6" cy="9" r="1" />
      <circle cx="10" cy="9" r="1" />
      <path d="M5 14c1 2 3 2 4 0" />
      
      {/* Sad mask (right) with Art Deco geometric features */}
      <path d="M10 12c0-4 2-8 6-8s6 4 6 8-2 8-6 8-6-4-6-8z" />
      <circle cx="14" cy="9" r="1" />
      <circle cx="18" cy="9" r="1" />
      <path d="M15 16c1-2 3-2 4 0" />
      
      {/* Art Deco connecting ribbon */}
      <path d="M8 6c2-2 6-2 8 0" />
      
      {/* Art Deco stepped eyebrows */}
      <path d="M5 7l2-1" />
      <path d="M9 6l2 1" />
      <path d="M13 7l2-1" />
      <path d="M17 6l2 1" />
    </svg>
  );
}

// Art Deco shield badge with stepped design
export function ShieldBadgeDeco({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Shield outline with Art Deco stepped design */}
      <path d="M12 2l8 3v7c0 8-8 10-8 10s-8-2-8-10V5l8-3z" />
      <path d="M12 2l6 2.5v6c0 6-6 7.5-6 7.5s-6-1.5-6-7.5v-6L12 2z" />
      
      {/* Art Deco checkmark with stepped design */}
      <path d="M9 12l2 2 4-4" />
      
      {/* Art Deco stepped border details */}
      <path d="M12 4l4 1.5v2" />
      <path d="M12 4l-4 1.5v2" />
      <path d="M8 14v1l4 3 4-3v-1" />
      
      {/* Corner decorative elements */}
      <path d="M8 8l1-1 1 1" />
      <path d="M14 8l1-1 1 1" />
    </svg>
  );
}

// Art Deco console radio with stepped design
export function ConsoleRadioDeco({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Radio body with Art Deco stepped design */}
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <rect x="4" y="10" width="16" height="2" />
      <rect x="4" y="16" width="16" height="2" />
      
      {/* Art Deco speaker grille */}
      <rect x="6" y="13" width="8" height="3" />
      <line x1="7" y1="13" x2="7" y2="16" />
      <line x1="9" y1="13" x2="9" y2="16" />
      <line x1="11" y1="13" x2="11" y2="16" />
      <line x1="13" y1="13" x2="13" y2="16" />
      
      {/* Control knobs with Art Deco styling */}
      <circle cx="16" cy="14" r="1.5" />
      <circle cx="19" cy="14" r="1" />
      <path d="M16 13v2" />
      <path d="M15 14h2" />
      
      {/* Art Deco antenna */}
      <path d="M12 8v-4" />
      <path d="M10 6l4-2" />
      <path d="M14 6l-4-2" />
      
      {/* Stepped base */}
      <rect x="2" y="20" width="20" height="2" />
    </svg>
  );
}