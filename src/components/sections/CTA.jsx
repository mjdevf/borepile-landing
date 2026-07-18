import { Phone, ArrowRight } from "lucide-react";
import { footer } from "../../data/content";

const MSG = "Halo%20Majujaya%20Bore%20Pile%2C%20saya%20ingin%20konsultasi%20tentang%20pengeboran.";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-20 md:px-10 md:py-28">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-semibold text-on-primary" style={{ letterSpacing: "-0.01em" }}>
          Siap Mulai Proyek?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-on-primary/80">
          Konsultasi gratis dengan tim geoteknik kami. Dapatkan penawaran harga kompetitif untuk proyek bore pile & strauss pile Anda.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`https://wa.me/${footer.wa}?text=${MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[52px] items-center justify-center gap-2 rounded-lg bg-on-primary px-8 text-xs font-semibold uppercase tracking-[0.05em] text-primary transition-all hover:bg-on-primary/90 active:scale-[0.97]"
          >
            <Phone className="h-4 w-4" />
            Chat Via WhatsApp
          </a>
          <a
            href="#portfolio"
            className="inline-flex h-[52px] items-center justify-center gap-2 rounded-lg border border-on-primary/30 px-8 text-xs font-semibold uppercase tracking-[0.05em] text-on-primary transition-all hover:bg-white/10"
          >
            Lihat Portfolio
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
