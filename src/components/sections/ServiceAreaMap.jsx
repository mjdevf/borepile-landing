import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";

/* ── PROVINSI paths (sama persis dari aslinya) ── */
const PROVINCES = [
  {
    name: "PROBANTEN",
    d: "M279.793,201.14L272.778,202.521L271.808,221.897L279.186,224.773L293.162,257.033L291.089,268.008L249.837,268.139L233.415,261.202L225.59,266.897L217.34,256.216L208.945,267.687L215.04,282.376L202.236,290.674L201.475,309.603L208.724,322.908L208.244,350.533L228.359,367.852L209.906,380.9L207.791,392.318L198.736,402.164L200.084,420.638L195.913,424.434L167.479,418.875L160.895,408.765L138.708,401.597L125.818,394.521L117.794,384.624L100.162,379.797L81.825,380.086L47.997,388.499L25.757,385.184L6.1,387.56L-8.028,392.986L-25.4,391.668L-50.85,379.532L-68.316,376.651L-76.13,386.973L-82.783,381.85L-88.592,363.362L-77.598,366.817L-50.357,340.671L-45.819,349.386L-47.35,361.091L-27.594,382.919L-17.274,365.664L-18.2,358.777L3.978,339.327L11.199,323.316L8.744,317.512L16.82,299.29L32.864,310.461L47.004,306.245L57.179,294.522L60.343,284.74L58.479,270.334L60.285,241.127L74.467,197.332L97.249,178.953L108.38,151.534L121.279,150.733L130.844,161.799L127.327,175.537L143.521,186.259L157.559,182.799L163.208,169.481L174.685,166.852L198.149,177.019L200.247,183.636L218.799,191.887L234.053,181.929L242.766,187.737L258.521,182.474L270.804,182.938Z",
  },
  {
    name: "DKI JAKARTA",
    d: "M279.793,201.14L284.818,205.082L313.175,207.85L318.143,203.289L341.289,200.963L341.443,224.635L334.754,241.737L325.824,244.024L329.109,257.564L326.813,269.402L293.162,257.033L279.186,224.773L271.808,221.897L272.778,202.521Z",
  },
  {
    name: "JAWA BARAT",
    d: "M200.084,420.638L198.736,402.164L207.791,392.318L209.906,380.9L228.359,367.852L208.244,350.533L208.724,322.908L201.475,309.603L202.236,290.674L215.04,282.376L208.945,267.687L217.34,256.216L225.59,266.897L233.415,261.202L249.837,268.139L291.089,268.008L293.162,257.033L326.813,269.402L329.109,257.564L325.824,244.024L334.754,241.737L341.443,224.635L341.289,200.963L352.66,198.397L350.094,177.678L357.433,157.127L373.403,162.395L382.217,173.587L395.113,175.452L422.274,168.277L443.111,182.987L462.048,213.887L478.377,221.879L500.3,225.638L508.541,238.65L525.249,236.347L549.646,222.951L567.015,237.769L578.602,240.395L618.46,261.415Z",
  },
];

/* ── KOTA data ── */
const CITIES = [
  { slug: "serang", name: "Serang", x: 139.8, y: 207.3 },
  { slug: "cilegon", name: "Cilegon", x: 105.8, y: 179.6 },
  { slug: "tangerang", name: "Tangerang", x: 257.9, y: 222.9 },
  { slug: "jakarta-barat", name: "Jakarta Barat", x: 290, y: 212.3 },
  { slug: "jakarta-utara", name: "Jakarta Utara", x: 314.7, y: 212.1 },
  { slug: "jakarta-pusat", name: "Jakarta Pusat", x: 306, y: 223.4, hub: true },
  { slug: "jakarta-timur", name: "Jakarta Timur", x: 323.7, y: 234.4 },
  { slug: "jakarta-selatan", name: "Jakarta Selatan", x: 301.7, y: 243.4 },
  { slug: "depok", name: "Depok", x: 297.6, y: 278.2 },
  { slug: "bekasi", name: "Bekasi", x: 348.1, y: 237.7 },
  { slug: "cikarang", name: "Cikarang", x: 385.4, y: 243.5 },
  { slug: "karawang", name: "Karawang", x: 430.8, y: 258.5 },
  { slug: "purwakarta", name: "Purwakarta", x: 456.7, y: 316 },
  { slug: "subang", name: "Subang", x: 534.2, y: 319.9 },
  { slug: "bogor", name: "Bogor", x: 300.5, y: 326.2 },
  { slug: "cianjur", name: "Cianjur", x: 383, y: 380.2 },
];

const HUB = CITIES.find((c) => c.hub);
const VB_W = 640;
const VB_H = 460;
const ZOOM_K = 2.4;
const TRANSITION_MS = 480;

export default function ServiceAreaMap() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const [zoomedIn, setZoomedIn] = useState(false);
  const pendingRef = useRef(null);

  const selectCity = (slug) => {
    if (zoomedIn) {
      if (slug === selected) return;
      // zoom out first, then zoom into the new target
      pendingRef.current = slug;
      setZoomedIn(false);
    } else {
      setSelected(slug);
      // next tick so the transform transitions from overview -> zoomed
      requestAnimationFrame(() => setZoomedIn(true));
    }
  };

  useEffect(() => {
    if (zoomedIn) return;
    if (!pendingRef.current) return;
    const t = setTimeout(() => {
      const next = pendingRef.current;
      pendingRef.current = null;
      setSelected(next);
      requestAnimationFrame(() => setZoomedIn(true));
    }, TRANSITION_MS);
    return () => clearTimeout(t);
  }, [zoomedIn]);

  // Navigate after zoom-in animation completes
  useEffect(() => {
    if (!zoomedIn || !selected) return;
    const t = setTimeout(() => {
      navigate(`/location/${selected}`);
    }, TRANSITION_MS);
    return () => clearTimeout(t);
  }, [zoomedIn, selected, navigate]);

  const handleClick = (slug) => {
    selectCity(slug);
  };

  const target = CITIES.find((c) => c.slug === selected) || null;
  const cx = VB_W / 2;
  const cy = VB_H / 2;
  const k = zoomedIn && target ? ZOOM_K : 1;
  const tx = zoomedIn && target ? cx - k * target.x : 0;
  const ty = zoomedIn && target ? cy - k * target.y : 0;

  return (
    <section className="bg-surface px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[760px]">
        {/* Header */}
        <div className="mb-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-outline">
            Wilayah Layanan
          </p>
          <h2 className="mt-1 text-[clamp(24px,4vw,34px)] font-bold leading-tight tracking-tight text-primary">
            16 titik layanan di Jabodetabek &amp; sekitarnya
          </h2>
          <p className="mt-2 max-w-[520px] text-base text-secondary">
            Ketuk salah satu titik untuk lihat detail layanan bore pile di kota tersebut.
          </p>
        </div>

        {/* Map card */}
        <div className="relative overflow-hidden rounded-xl border border-border-muted bg-surface shadow-[0_1px_2px_rgba(15,30,61,0.04),0_12px_32px_-16px_rgba(15,30,61,0.12)]">
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="block h-auto w-full"
            role="img"
            aria-label="Peta wilayah layanan Jabodetabek dan sekitarnya"
          >
            <rect width={VB_W} height={VB_H} fill="var(--color-surface-container-low)" />

            <g
              style={{
                transform: `translate(${tx}px, ${ty}px) scale(${k})`,
                transformOrigin: "0 0",
                transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              }}
            >
              {/* Province boundaries */}
              {PROVINCES.map((p) => (
                <path
                  key={p.name}
                  d={p.d}
                  fill="var(--color-surface-dim)"
                  stroke="var(--color-border-muted)"
                  strokeWidth={1.25 / k}
                  strokeLinejoin="round"
                />
              ))}

              {/* Connection lines hub → kota */}
              {CITIES.filter((c) => !c.hub).map((c) => {
                const isSel = selected === c.slug;
                return (
                  <line
                    key={`line-${c.slug}`}
                    x1={HUB.x}
                    y1={HUB.y}
                    x2={c.x}
                    y2={c.y}
                    stroke={isSel ? "var(--color-accent-gold)" : "var(--color-outline-variant)"}
                    strokeWidth={(isSel ? 1.75 : 1) / k}
                    strokeDasharray={isSel ? "0" : `${3 / k} ${4 / k}`}
                  />
                );
              })}

              {/* Hub outer ring */}
              <circle
                cx={HUB.x}
                cy={HUB.y}
                r={20 / k}
                fill="none"
                stroke="var(--color-primary)"
                strokeOpacity={0.14}
                strokeWidth={1 / k}
              />

              {/* City dots */}
              {CITIES.map((c) => {
                const isHub = !!c.hub;
                const isSel = selected === c.slug;
                const isHover = hovered === c.slug;
                const r = (isHub ? 7.5 : isSel || isHover ? 6.5 : 5) / k;
                return (
                  <g
                    key={c.slug}
                    transform={`translate(${c.x}, ${c.y})`}
                    onMouseEnter={() => setHovered(c.slug)}
                    onMouseLeave={() => setHovered((cur) => (cur === c.slug ? null : cur))}
                    onFocus={() => setHovered(c.slug)}
                    onClick={() => handleClick(c.slug)}
                    role="link"
                    tabIndex={0}
                    aria-label={`Lihat halaman lokasi ${c.name}`}
                    className="cursor-pointer outline-none"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleClick(c.slug);
                      }
                    }}
                  >
                    {(isSel || isHover) && (
                      <circle r={r + 6 / k} fill="var(--color-primary)" fillOpacity={0.07} />
                    )}
                    <circle
                      r={r}
                      fill={isHub ? "var(--color-primary)" : isSel ? "var(--color-accent-gold)" : "var(--color-primary)"}
                      stroke="var(--color-surface)"
                      strokeWidth={1.5 / k}
                    />
                    {isHub && <circle r={2.5 / k} fill="var(--color-surface)" />}
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Tooltip on hover (overview mode only) */}
          {!zoomedIn && hovered && !selected && (
            <div
              className="pointer-events-none absolute whitespace-nowrap rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-on-primary shadow-lg"
              style={{
                left: `${(CITIES.find((c) => c.slug === hovered).x / VB_W) * 100}%`,
                top: `${(CITIES.find((c) => c.slug === hovered).y / VB_H) * 100}%`,
                transform: "translate(-50%, calc(-100% - 14px))",
              }}
            >
              {CITIES.find((c) => c.slug === hovered).name}
            </div>
          )}
        </div>

        {/* Footer stats */}
        <div className="mt-4 flex items-center justify-between text-xs text-outline">
          <span>Posisi titik sesuai koordinat asli kota</span>
          <span>{CITIES.length} kota terlayani</span>
        </div>
      </div>
    </section>
  );
}
