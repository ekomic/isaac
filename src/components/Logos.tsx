"use client";

// Inline SVG components for Nigerian Coat of Arms and APC Logo
// Used when external image sources are unavailable

export function CoatOfArms({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`${className} relative flex items-center justify-center`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/coat-of-arms.svg"
        alt="Nigerian Coat of Arms"
        className="w-full h-full object-contain"
        onError={(e) => {
          // Fallback: render a styled placeholder
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#006837,#004d28);border-radius:50%;border:2px solid #C9A84C;font-size:0.6em;color:#C9A84C;font-weight:bold;text-align:center;padding:4px;">🦅<br/>NG</div>`;
          }
        }}
      />
    </div>
  );
}

export function APCLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`${className} relative flex items-center justify-center`}>
      {/* APC Logo: broom symbol with party colors */}
      <svg viewBox="0 0 100 100" className="w-full h-full" aria-label="APC Logo">
        <circle cx="50" cy="50" r="48" fill="#006837" stroke="#C9A84C" strokeWidth="2"/>
        <text x="50" y="30" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="Arial">ALL PROGRESSIVES</text>
        <text x="50" y="42" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="Arial">CONGRESS</text>
        {/* Broom symbol */}
        <line x1="50" y1="55" x2="50" y2="85" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round"/>
        <line x1="38" y1="68" x2="50" y2="55" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <line x1="41" y1="72" x2="50" y2="60" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <line x1="44" y1="76" x2="50" y2="65" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <line x1="62" y1="68" x2="50" y2="55" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <line x1="59" y1="72" x2="50" y2="60" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <line x1="56" y1="76" x2="50" y2="65" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <text x="50" y="97" textAnchor="middle" fill="#C9A84C" fontSize="7" fontWeight="bold" fontFamily="Arial">APC</text>
      </svg>
    </div>
  );
}

export function NigeriaCoatOfArmsInline({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 100 120" className="w-full h-full" aria-label="Nigerian Coat of Arms">
        {/* Shield */}
        <path d="M20,10 L80,10 L80,70 Q80,100 50,115 Q20,100 20,70 Z" fill="#006837" stroke="#C9A84C" strokeWidth="1.5"/>
        {/* Black Y-shape (Niger-Benue confluence) */}
        <path d="M50,40 L50,80 M50,40 L30,20 M50,40 L70,20" stroke="#000" strokeWidth="8" strokeLinecap="round" fill="none"/>
        {/* White background for Y */}
        <path d="M50,40 L50,80 M50,40 L30,20 M50,40 L70,20" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none"/>
        {/* Eagles */}
        <text x="15" y="8" fontSize="14">🦅</text>
        <text x="68" y="8" fontSize="14">🦅</text>
        {/* Flowers at base */}
        <text x="35" y="118" fontSize="10">🌸</text>
        <text x="52" y="118" fontSize="10">🌸</text>
        {/* Motto ribbon */}
        <rect x="10" y="105" width="80" height="12" rx="3" fill="#C9A84C"/>
        <text x="50" y="114" textAnchor="middle" fill="#000" fontSize="6" fontWeight="bold" fontFamily="Arial">UNITY AND FAITH</text>
      </svg>
    </div>
  );
}
