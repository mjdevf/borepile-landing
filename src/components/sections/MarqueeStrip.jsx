import { Shield, Building2, HardHat, CheckCircle, Award, Users } from "lucide-react";

const items = [
  { label: "KONTRAKTOR NASIONAL", icon: Building2 },
  { label: "PROPERTI INDONESIA", icon: Shield },
  { label: "KONSULTAN STRUKTUR", icon: HardHat },
  { label: "PENGEMBANG PERUMAHAN", icon: Users },
  { label: "SERTIFIKASI GEOFISIKA", icon: Award },
  { label: "PROYEK TERJADWAL", icon: CheckCircle },
];

export default function MarqueeStrip() {
  return (
    <section className="overflow-hidden border-y border-border-muted bg-surface-container-low py-4">
      <div className="flex animate-marquee gap-8">
        {[...items, ...items, ...items].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border-muted bg-surface px-4 py-2 shadow-[0_2px_8px_-4px_rgba(15,23,42,0.06)]"
            >
              <Icon className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </section>
  );
}
