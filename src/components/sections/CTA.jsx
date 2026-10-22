import { Phone, ArrowRight } from "lucide-react";
import { footer } from "../../data/content";

const MSG = "Halo%20Majujaya%20Bore%20Pile%2C%20saya%20ingin%20konsultasi%20tentang%20pengeboran.";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-16 md:px-10 md:py-24">
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-on-primary" style={{ letterSpacing: "-0.01em" }}>
          Siap Mulai Proyek Anda?
        </h2>
        <p className="mb-10 mx-auto max-w-xl text-base leading-relaxed text-on-primary/80 sm:text-lg">
          Konsultasi teknis dan survei lapangan gratis ke lokasi proyek Anda di seluruh Jabodetabek dan sekitarnya.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`https://api.whatsapp.com/send/?phone=${footer.wa}&text=${MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[50px] items-center justify-center gap-2 rounded-sm bg-accent px-8 text-sm font-semibold text-on-primary transition-colors hover:bg-accent-dark active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" />
            Chat via WhatsApp
          </a>
          <a
            href="#portfolio"
            className="inline-flex h-[50px] items-center justify-center gap-2 rounded-sm border border-border-muted px-8 text-sm font-semibold text-on-primary transition-colors hover:border-accent hover:text-accent"
          >
            Lihat Portofolio
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
