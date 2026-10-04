import { about } from "../../data/content";

export default function AboutUs() {
  return (
    <section
      id="tentang"
      className="border-b border-border-muted bg-surface px-4 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2
            className="text-2xl font-bold text-primary md:text-3xl"
            style={{ letterSpacing: "-0.01em", lineHeight: "1.3" }}
          >
            Tentang Kami & Keunggulan Layanan
          </h2>
          <p className="text-base leading-relaxed text-secondary sm:text-lg">
            {about.desc}
          </p>
        </div>

        {/* Highlights list with accent dot */}
        <div className="border-t border-border-muted pt-8">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-accent">
            Standar & Keunggulan Kerja
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {about.highlights.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <div>
                  <h4 className="text-sm font-bold text-primary">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-secondary">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Owner quote / vision */}
        <div className="border-l-2 border-accent pl-4 py-2">
          <p className="text-sm font-bold text-primary">Subiyanto</p>
          <p className="text-xs text-secondary">Pimpinan Majujaya Bore Pile</p>
          <p className="mt-2 text-sm italic leading-relaxed text-secondary">
            &ldquo;{about.vision}&rdquo;
          </p>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-secondary">{about.legacyNote}</p>
      </div>
    </section>
  );
}
