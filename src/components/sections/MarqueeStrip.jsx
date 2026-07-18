export default function MarqueeStrip() {
  const logos = [
    "KONTRAKTOR NASIONAL", "PROPERTI INDONESIA", "KONSULTAN STRUKTUR",
    "PENGEMBANG PERUMAHAN", "KONTRAKTOR NASIONAL", "PROPERTI INDONESIA",
  ];

  return (
    <section className="border-y border-border-muted bg-surface py-6 overflow-hidden">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {[...logos, ...logos].map((text, i) => (
          <span
            key={i}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary"
          >
            {text}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
