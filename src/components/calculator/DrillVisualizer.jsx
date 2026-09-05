import React from 'react';

export default function DrillVisualizer({
  pileType,
  diameter,
  depth,
  soilType,
  includeMaterial,
}) {
  const minDepth = pileType === 'bored-pile-machine' ? 10 : 3;
  const maxDepth = pileType === 'bored-pile-machine' ? 30 : 8;
  const relativeDepthPercent = ((depth - minDepth) / (maxDepth - minDepth || 1)) * 100;
  const shaftHeight = 130 + (relativeDepthPercent * 1.1);

  const minDia = pileType === 'bored-pile-machine' ? 30 : 20;
  const maxDia = pileType === 'bored-pile-machine' ? 60 : 30;
  const relativeDiaPercent = ((diameter - minDia) / (maxDia - minDia || 1)) * 100;
  const shaftWidth = 30 + (relativeDiaPercent * 0.3);

  const soilStyles = {
    soft: { bg: 'fill-amber-950/20', stroke: 'stroke-amber-800/30', label: 'Lumpur / Lempung Lunak' },
    medium: { bg: 'fill-amber-900/30', stroke: 'stroke-amber-700/40', label: 'Tanah Liat Sedang / Berpasir' },
    hard: { bg: 'fill-slate-800/40', stroke: 'stroke-slate-700/60', label: 'Tanah Keras / Berbatu' },
  };
  const soil = soilStyles[soilType] || soilStyles.soft;

  return (
    <div className="w-full border border-border-muted bg-surface-container-lowest rounded-sm p-5 relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
      <div className="w-full flex justify-between items-center mb-4 z-10">
        <span className="font-mono text-xs text-accent">Visualisasi Struktur Tiang</span>
        <span className="text-[10px] font-mono text-secondary bg-surface-container-low px-2 py-1 rounded-sm border border-border-muted">Skala Adaptif</span>
      </div>
      <svg viewBox="0 0 320 400" className="w-full max-w-[280px] h-auto drop-shadow-lg overflow-visible" aria-label="Drill visual diagram">
        <defs>
          <pattern id="soilPattern" width="20" height="20" patternUnits="userSpaceOnUse">
            {soilType === 'soft' && (
              <path d="M 0 10 C 5 5, 15 15, 20 10" fill="none" stroke="#D97706" strokeWidth="0.5" strokeOpacity="0.15" />
            )}
            {soilType === 'medium' && (
              <>
                <circle cx="5" cy="5" r="1" fill="#92400E" fillOpacity="0.2" />
                <circle cx="15" cy="15" r="1.5" fill="#B45309" fillOpacity="0.2" />
                <path d="M 0 15 Q 10 5, 20 15" fill="none" stroke="#92400E" strokeWidth="0.5" strokeOpacity="0.2" />
              </>
            )}
            {soilType === 'hard' && (
              <>
                <path d="M 2,2 L 8,10 L 15,3" fill="none" stroke="#64748B" strokeWidth="0.5" strokeOpacity="0.3" />
                <path d="M 12,18 L 18,12" fill="none" stroke="#64748B" strokeWidth="0.5" strokeOpacity="0.3" />
                <rect x="12" y="4" width="4" height="2" fill="#64748B" fillOpacity="0.2" />
              </>
            )}
          </pattern>
          <linearGradient id="concreteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94A3B8" /><stop offset="30%" stopColor="#CBD5E1" />
            <stop offset="70%" stopColor="#94A3B8" /><stop offset="100%" stopColor="#64748B" />
          </linearGradient>
          <linearGradient id="steelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" /><stop offset="50%" stopColor="#FBBF24" /><stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
        <rect x="40" y="140" width="240" height="240" className={soil.bg} rx="8" />
        <rect x="40" y="140" width="240" height="240" fill="url(#soilPattern)" rx="8" />
        <line x1="30" y1="140" x2="290" y2="140" className={`${soil.stroke} stroke-2`} />
        {/* Rig visuals */}
        {pileType === 'bored-pile-machine' ? (
          <g transform="translate(160, 40)">
            <rect x="-40" y="80" width="80" height="15" fill="#334155" rx="3" />
            <circle cx="-30" cy="95" r="5" fill="#1E293B" /><circle cx="-15" cy="95" r="5" fill="#1E293B" />
            <circle cx="15" cy="95" r="5" fill="#1E293B" /><circle cx="30" cy="95" r="5" fill="#1E293B" />
            <rect x="-35" y="92" width="70" height="4" fill="#0F172A" />
            <line x1="0" y1="80" x2="0" y2="10" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
            <line x1="0" y1="75" x2="-8" y2="55" stroke="#F59E0B" strokeWidth="2" />
            <line x1="-8" y1="55" x2="0" y2="35" stroke="#F59E0B" strokeWidth="2" />
            <line x1="0" y1="35" x2="8" y2="15" stroke="#F59E0B" strokeWidth="2" />
            <line x1="0" y1="80" x2="-10" y2="80" stroke="#1E293B" strokeWidth="3" />
            <line x1="-20" y1="80" x2="0" y2="45" stroke="#64748B" strokeWidth="3" />
            <line x1="0" y1="15" x2="0" y2="110" stroke="#E2E8F0" strokeWidth="2.5" />
            <rect x="-4" y="105" width="8" height="6" fill="#475569" />
            <circle cx="0" cy="10" r="3" fill="#1E293B" />
            <path d="M 0 10 L -25 85" stroke="#94A3B8" strokeWidth="1" />
          </g>
        ) : (
          <g transform="translate(160, 50)">
            <line x1="0" y1="10" x2="-35" y2="90" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <line x1="0" y1="10" x2="35" y2="90" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <line x1="0" y1="10" x2="0" y2="90" stroke="#64748B" strokeWidth="1.5" strokeDasharray="3,3" />
            <circle cx="0" cy="15" r="4" fill="#334155" />
            <line x1="0" y1="15" x2="0" y2="105" stroke="#CBD5E1" strokeWidth="2.5" />
            <line x1="-25" y1="65" x2="25" y2="65" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
            <circle cx="-25" cy="65" r="3.5" fill="#EF4444" />
            <circle cx="25" cy="65" r="3.5" fill="#EF4444" />
          </g>
        )}
        {/* Shaft */}
        <g>
          <rect x={160 - shaftWidth / 2} y="140" width={shaftWidth} height={shaftHeight} fill="#0F172A" />
          {includeMaterial ? (
            <rect x={160 - shaftWidth / 2 + 1} y="140" width={shaftWidth - 2} height={shaftHeight} fill="url(#concreteGrad)" opacity="0.9" />
          ) : (
            <g opacity="0.3">
              <line x1={160 - shaftWidth / 2} y1="180" x2={160 + shaftWidth / 2} y2="180" stroke="#475569" strokeWidth="1" strokeDasharray="2,2" />
              <line x1={160 - shaftWidth / 2} y1="230" x2={160 + shaftWidth / 2} y2="230" stroke="#475569" strokeWidth="1" strokeDasharray="2,2" />
              <line x1={160 - shaftWidth / 2} y1="280" x2={160 + shaftWidth / 2} y2="280" stroke="#475569" strokeWidth="1" strokeDasharray="2,2" />
            </g>
          )}
          <g opacity={includeMaterial ? 0.95 : 0.45}>
            <line x1={160 - shaftWidth / 2 + 4} y1="142" x2={160 - shaftWidth / 2 + 4} y2={140 + shaftHeight - 4} stroke="url(#steelGrad)" strokeWidth="2" />
            <line x1={160} y1="142" x2={160} y2={140 + shaftHeight - 4} stroke="url(#steelGrad)" strokeWidth="1.5" />
            <line x1={160 + shaftWidth / 2 - 4} y1="142" x2={160 + shaftWidth / 2 - 4} y2={140 + shaftHeight - 4} stroke="url(#steelGrad)" strokeWidth="2" />
            {Array.from({ length: Math.floor(shaftHeight / 15) }).map((_, i) => {
              const y = 148 + i * 15;
              if (y < 140 + shaftHeight - 10) {
                return <path key={i} d={`M ${160 - shaftWidth / 2 + 3} ${y} Q 160 ${y - 3}, ${160 + shaftWidth / 2 - 3} ${y}`} fill="none" stroke="url(#steelGrad)" strokeWidth="1.2" />;
              }
              return null;
            })}
          </g>
          <line x1={160 - shaftWidth / 2} y1="140" x2={160 - shaftWidth / 2} y2={140 + shaftHeight} stroke="#94A3B8" strokeWidth="1.5" strokeDasharray={includeMaterial ? 'none' : '3,3'} />
          <line x1={160 + shaftWidth / 2} y1="140" x2={160 + shaftWidth / 2} y2={140 + shaftHeight} stroke="#94A3B8" strokeWidth="1.5" strokeDasharray={includeMaterial ? 'none' : '3,3'} />
          <path d={`M ${160 - shaftWidth / 2} ${140 + shaftHeight} Q 160 ${140 + shaftHeight + 6}, ${160 + shaftWidth / 2} ${140 + shaftHeight}`} fill="none" stroke="#94A3B8" strokeWidth="1.5" />
        </g>
        {/* Diameter label */}
        <g>
          <line x1={160 - shaftWidth / 2} y1="123" x2={160 - shaftWidth / 2} y2="137" stroke="#94A3B8" strokeWidth="1" />
          <line x1={160 + shaftWidth / 2} y1="123" x2={160 + shaftWidth / 2} y2="137" stroke="#94A3B8" strokeWidth="1" />
          <line x1={160 - shaftWidth / 2 + 3} y1="126" x2={160 + shaftWidth / 2 - 3} y2="126" stroke="#F59E0B" strokeWidth="1" />
          <path d={`M ${160 - shaftWidth / 2} 126 L ${160 - shaftWidth / 2 + 4} 123 L ${160 - shaftWidth / 2 + 4} 129 Z`} fill="#F59E0B" />
          <path d={`M ${160 + shaftWidth / 2} 126 L ${160 + shaftWidth / 2 - 4} 123 L ${160 + shaftWidth / 2 - 4} 129 Z`} fill="#F59E0B" />
          <text x="160" y="118" textAnchor="middle" className="fill-amber-400 font-mono font-extrabold text-[10px]">{'Ø'} {diameter} cm</text>
        </g>
        {/* Depth label */}
        <g>
          <line x1="32" y1="140" x2="48" y2="140" stroke="#94A3B8" strokeWidth="1" />
          <line x1="32" y1={140 + shaftHeight} x2="48" y2={140 + shaftHeight} stroke="#94A3B8" strokeWidth="1" />
          <line x1="36" y1="143" x2="36" y2={140 + shaftHeight - 3} stroke="#F59E0B" strokeWidth="1" />
          <path d="M 36 140 L 33 144 L 39 144 Z" fill="#F59E0B" />
          <path d={`M 36 ${140 + shaftHeight} L 33 ${140 + shaftHeight - 4} L 39 ${140 + shaftHeight - 4} Z`} fill="#F59E0B" />
          <text x="24" y={140 + shaftHeight / 2} textAnchor="middle" transform={`rotate(-90, 24, ${140 + shaftHeight / 2})`} className="fill-amber-400 font-mono font-extrabold text-[10px]">{depth} Meter</text>
        </g>
        {/* Soil annotation */}
        <g transform={`translate(210, ${150 + shaftHeight / 2})`}>
          <rect x="-5" y="-12" width="80" height="20" fill="#0F1729" rx="3" stroke="#475569" strokeWidth="0.5" opacity="0.8" />
          <text x="35" y="1" textAnchor="middle" className="fill-slate-300 font-sans font-semibold text-[8px]">{soil.label}</text>
        </g>
      </svg>
      <div className="w-full text-center mt-3 pt-3 border-t border-border-muted z-10">
        <p className="text-[11px] text-secondary font-medium">
          {includeMaterial ? (
            <span>Status: <strong className="text-emerald-400 font-semibold">Cor Beton ReadyMix K-300</strong> & <strong className="text-emerald-400 font-semibold">Besi Spiral Terinstalasi</strong></span>
          ) : (
            <span>Status: <strong className="text-amber-500 font-semibold">Hanya Pengeboran</strong> (Besi & Beton disiapkan pemilik)</span>
          )}
        </p>
      </div>
    </div>
  );
}
