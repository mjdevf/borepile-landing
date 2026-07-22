import FadeInWrap from "../ui/FadeInWrap";
import { Building2, Droplets, Ruler, Sprout, Search, Drill } from "lucide-react";
import { services } from "../../data/content";

const icons = { Building2, Droplets, Ruler, Sprout, Search, Drill };

export default function Services() {
  return (
    <section
      id="layanan"
      className="border-y border-border-muted bg-surface-container-low px-4 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <h2
            className="max-w-2xl text-3xl font-semibold text-primary"
            style={{ letterSpacing: "-0.01em", lineHeight: "1.3" }}
          >
            Layanan Kami
          </h2>
          <p className="max-w-2xl text-base text-secondary">
            Layanan pondasi inti yang dirancang untuk kondisi tanah menantang dan lingkungan urban yang membutuhkan kapasitas beban tinggi.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => {
            const Icon = icons[svc.icon] || Drill;
            return (
              <FadeInWrap
                key={svc.title}
                delay={i * 0.08}
                className="group flex h-full flex-col rounded-lg border border-border-muted bg-surface p-6 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] transition-colors hover:border-outline"
              >
                {/* Icon box */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-container text-tertiary-container transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold text-primary">{svc.title}</h3>

                {/* Description */}
                <p className="mb-6 flex-grow text-sm leading-relaxed text-secondary">{svc.desc}</p>

                {/* Tech tags */}
                {svc.keywords && (
                  <div className="mt-auto flex flex-wrap gap-1.5 overflow-hidden">
                    {svc.keywords.slice(0, 2).map((kw) => (
                      <span
                        key={kw}
                        className="truncate rounded border border-border-muted px-2 py-0.5 font-mono text-xs text-secondary"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </FadeInWrap>
            );
          })}
        </div>
      </div>
    </section>
  );
}
