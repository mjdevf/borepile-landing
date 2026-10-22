import { Phone, ArrowRight } from "lucide-react";
import { hero, footer } from "../../data/content";

const MSG = "Halo%20Majujaya%20Bore%20Pile%2C%20saya%20ingin%20konsultasi%20tentang%20pengeboran.";

export default function Hero() {
  /* "Jasa Bore Pile & Strauss Pile" / "Terpercaya dan Profesional" */
  const [lineOne, lineTwo] = hero.headline.split(/\s(?=Terpercaya)/);

  return (
    <section
      id="hero"
      className="relative flex w-full items-center overflow-hidden bg-primary pt-[72px] md:min-h-[78vh]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <picture>
          <source
            srcSet="/images/portfolio/hero-bg-640.webp 640w, /images/portfolio/hero-bg-960.webp 960w, /images/portfolio/hero-bg.webp 1920w"
            sizes="(max-width: 768px) 60vw, 100vw"
            type="image/webp"
          />
          <img
            src="/images/portfolio/hero-bg-960.webp"
            width="1920"
            height="1440"
            decoding="async"
            alt="Kontraktor bore pile profesional Majujaya sedang melakukan pengeboran pondasi di lokasi proyek"
            fetchPriority="high"
            className="h-full w-full object-cover object-[70%_center] md:object-[center_35%]"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/80 md:bg-gradient-to-r md:from-primary/90 md:via-primary/75 md:to-primary/35" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-5 py-14 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <h1
            className="ani-hero text-4xl leading-[1.06] tracking-tight text-white md:text-6xl"
            style={{ animationDelay: "0.08s" }}
          >
            <span className="block">{lineOne}</span>
            <span
              className="block text-[1.18em] leading-[1.1] text-[#F0A58F]"
              style={{ fontFamily: "var(--font-script)", fontWeight: 700, letterSpacing: 0 }}
            >
              {lineTwo}
            </span>
          </h1>

          <p
            className="ani-hero mt-6 max-w-xl text-base leading-relaxed text-[#E8E7E1] md:text-xl"
            style={{ animationDelay: "0.16s" }}
          >
            {hero.subheadline}
          </p>

          <div
            className="ani-hero mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.24s" }}
          >
            <a
              href={`https://api.whatsapp.com/send/?phone=${footer.wa}&text=${MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-sm bg-accent px-7 text-base font-semibold text-on-primary transition-colors hover:bg-accent-dark active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" />
              {hero.cta}
            </a>
            <a
              href="#portfolio"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-sm border-[1.5px] border-white px-7 text-base font-semibold text-white transition-colors hover:bg-white hover:text-primary"
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
