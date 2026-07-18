import { motion } from "motion/react";
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
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/portfolio/01.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm md:bg-surface/60" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-12 md:grid-cols-12 md:px-10">
        {/* Text content */}
        <div className="flex flex-col justify-center md:col-span-8 lg:col-span-7">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex w-max items-center gap-1.5 rounded-full border border-border-muted bg-surface px-3 py-1 font-mono text-xs text-secondary shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-success-green" />
            Kontraktor Pondasi Profesional
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-3xl font-bold leading-tight tracking-tight text-primary md:text-6xl md:leading-[1.15]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 max-w-2xl text-base leading-relaxed text-on-surface-variant"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row"
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
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 gap-4 border-t border-border-muted pt-8 sm:grid-cols-4"
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
          </motion.div>
        </div>

        {/* Right image (desktop only) */}
        <div className="hidden items-center justify-end md:col-span-4 md:flex lg:col-span-5">
          <div className="h-[500px] w-full overflow-hidden rounded-xl border border-border-muted shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] lg:h-[600px]">
            <img
              src="/images/portfolio/02.jpg"
              alt="Jasa Bore Pile Majujaya - Pekerjaan pengeboran tanah untuk pondasi bangunan berpengalaman 12 tahun"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
