import { motion } from "motion/react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Pengerjaan borepile buat proyek perumahan saya tepat waktu dan sesuai spek. Timnya profesional, alat lengkap.",
    name: "H. Gunawan",
    role: "Pengembang Perumahan, Jakarta Selatan",
    verified: true,
  },
  {
    quote: "Kalibrasi alat dan laporan uji tanahnya rapi, memudahkan proses approval konsultan struktur kami.",
    name: "R. Wijayanti",
    role: "Site Engineer, Cikarang",
    verified: true,
  },
  {
    quote: "Koordinasi jadwal fleksibel meski lahan kami sempit dan akses terbatas.",
    name: "B. Setiawan",
    role: "Project Manager, Bekasi",
    verified: true,
  },
  {
    quote: "Hasil pengeboran tembus lapisan keras tanpa perlu pindah titik, hemat biaya dan waktu proyek.",
    name: "A. Pratama",
    role: "Owner, Karawang",
    verified: true,
  },
  {
    quote: "Survey gratis & detail, laporan uji tanah dikirim cepat. Tim teknis responsif saat ada perubahan di lapangan.",
    name: "S. Rahmawati",
    role: "Project Coordinator, Jakarta Selatan",
    verified: true,
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="bg-surface px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className="mb-4 text-3xl font-semibold text-primary"
          style={{ letterSpacing: "-0.01em", lineHeight: "1.3" }}
        >
          Kata Klien Kami
        </h2>
        <p className="mb-10 text-base text-secondary">
          Testimoni dari pengembang & kontraktor yang menggunakan jasa borepile kami.
        </p>

        {/* Carousel */}
        <div className="relative mx-auto max-w-2xl">
          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Sebelumnya"
            className="absolute left-0 top-1/2 z-10 hidden -translate-x-4 -translate-y-1/2 rounded-full border border-border-muted bg-surface p-2 text-secondary shadow-md transition-all hover:bg-primary hover:text-on-primary sm:block"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            aria-label="Berikutnya"
            className="absolute right-0 top-1/2 z-10 hidden translate-x-4 -translate-y-1/2 rounded-full border border-border-muted bg-surface p-2 text-secondary shadow-md transition-all hover:bg-primary hover:text-on-primary sm:block"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Card */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-lg border border-border-muted bg-surface p-8 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)]"
          >
            {/* Verified badge */}
            {t.verified && (
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-border-muted bg-surface-container-low px-3 py-1 font-mono text-[11px] text-secondary">
                <CheckCircle2 className="h-3.5 w-3.5 text-success-green" />
                Laporan Proyek Terverifikasi
              </div>
            )}
            <p className="mb-6 text-lg italic leading-relaxed text-on-surface">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="text-sm font-bold text-primary">{t.name}</p>
              <p className="text-xs text-secondary">{t.role}</p>
            </div>
          </motion.div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                i === active
                  ? "w-7 bg-primary"
                  : "w-2 bg-border-muted hover:bg-secondary"
              }`}
            >
              <span className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
