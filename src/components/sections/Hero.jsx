import { Phone, ArrowRight } from "lucide-react";
import { hero, trustBar, footer } from "../../data/content";

const MSG = "Halo%20Majujaya%20Bore%20Pile%2C%20saya%20ingin%20konsultasi%20tentang%20pengeboran.";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-surface-container-low pt-[72px]"
    >
      {/* Background image */}
      <div className="absolute inset-0 h-full w-full">
        <picture>
          <source
            srcSet="/images/portfolio/hero-bg-640.webp 640w, /images/portfolio/hero-bg-320.webp 320w"
            sizes="100vw"
            type="image/webp"
          />
          <source
            srcSet="/images/portfolio/hero-bg-640.jpg 640w, /images/portfolio/hero-bg-320.jpg 320w"
            sizes="100vw"
            type="image/jpeg"
          />
          <img
            src="/images/portfolio/hero-bg.jpg"
            alt="Kontraktor bore pile profesional Majujaya sedang melakukan pengeboran pondasi di lokasi proyek"
            fetchpriority="high"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-br from-surface/85 via-surface/70 to-primary/20 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-12 md:grid-cols-12 md:px-10">
        {/* Text content */}
        <div className="flex flex-col justify-center md:col-span-8 lg:col-span-7">
          {/* Badge */}
          <div className="ani-hero mb-4 inline-flex w-max items-center gap-1.5 rounded-full border border-border-muted bg-surface px-3 py-1 font-mono text-xs text-secondary shadow-sm"
            style={{ animationDelay: "0s" }}
          >
            <span className="h-2 w-2 rounded-full bg-success-green" />
            Kontraktor Pondasi Profesional
          </div>

          {/* Headline */}
          <h1 className="ani-hero mb-6 text-3xl font-bold leading-tight tracking-tight text-primary md:text-6xl md:leading-[1.15]"
            style={{ animationDelay: "0.12s" }}
          >
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="ani-hero mb-12 max-w-2xl text-base leading-relaxed text-on-surface-variant"
            style={{ animationDelay: "0.24s" }}
          >
            {hero.subheadline}
          </p>

          {/* CTA buttons */}
          <div className="ani-hero flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.36s" }}
          >
            <a
              href={`https://wa.me/${footer.wa}?text=${MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-lg bg-primary px-8 text-xs font-semibold uppercase tracking-[0.05em] text-on-primary transition-all hover:scale-[0.98] active:scale-[0.96]"
            >
              <Phone className="h-4 w-4" />
              {hero.cta}
            </a>
            <a
              href="#portfolio"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-lg border border-border-muted bg-surface px-8 text-xs font-semibold uppercase tracking-[0.05em] text-secondary transition-all hover:bg-surface-container-low"
            >
              {hero.ctaSecondary}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Stats strip */}
          <div className="ani-hero mt-12 grid grid-cols-2 gap-4 border-t border-border-muted pt-8 sm:grid-cols-4"
            style={{ animationDelay: "0.5s" }}
          >
            {trustBar.items.map((item) => (
              <div key={item.label}>
                <div className="mb-1 font-mono text-xs uppercase text-secondary">{item.label}</div>
                <div className="text-3xl font-bold text-primary" style={{ letterSpacing: "-0.01em" }}>
                  {item.value}
                  <span className="ml-0.5 text-base text-secondary">{item.suffix}</span>
                </div>
              </div>
            ))}
            <div>
              <div className="mb-1 font-mono text-xs uppercase text-secondary">Diameter</div>
              <div className="text-3xl font-bold text-primary" style={{ letterSpacing: "-0.01em" }}>
                30-80<span className="ml-0.5 text-base text-secondary">cm</span>
              </div>
            </div>
            <div>
              <div className="mb-1 font-mono text-xs uppercase text-secondary">Kedalaman Maks</div>
              <div className="text-3xl font-bold text-primary" style={{ letterSpacing: "-0.01em" }}>
                30<span className="ml-0.5 text-base text-secondary">m</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
