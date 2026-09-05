import { Phone, ArrowRight } from "lucide-react";
import { hero, footer } from "../../data/content";

const MSG = "Halo%20Majujaya%20Bore%20Pile%2C%20saya%20ingin%20konsultasi%20tentang%20pengeboran.";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-surface-container-low pt-[72px]"
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
        <div className="absolute inset-0 bg-gradient-to-br from-surface/85 via-surface/70 to-accent/15 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-16 md:grid-cols-12 md:px-10 md:py-24">
        {/* Text content */}
        <div className="flex flex-col justify-center md:col-span-10 lg:col-span-8">
          {/* Headline */}
          <h1
            className="ani-hero mb-6 text-3xl font-bold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl md:leading-[1.15]"
            style={{ animationDelay: "0.08s" }}
          >
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p
            className="ani-hero mb-10 max-w-2xl text-base leading-relaxed text-secondary md:text-lg"
            style={{ animationDelay: "0.16s" }}
          >
            {hero.subheadline}
          </p>

          {/* CTA buttons */}
          <div
            className="ani-hero flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.24s" }}
          >
            <a
              href={`https://wa.me/${footer.wa}?text=${MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded-sm bg-accent px-8 text-sm font-semibold text-on-primary transition-colors hover:bg-accent-dark active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" />
              {hero.cta}
            </a>
            <a
              href="#portfolio"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded-sm border border-border-muted bg-surface px-8 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
            >
              {hero.ctaSecondary}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
