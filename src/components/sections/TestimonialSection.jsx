const testimonials = [
  {
    quote: "Pengerjaan borepile buat proyek perumahan saya tepat waktu dan sesuai spek. Timnya profesional, alat lengkap.",
    name: "H. Gunawan",
    role: "Pengembang Perumahan, Jakarta Selatan",
  },
  {
    quote: "Kalibrasi alat dan laporan uji tanahnya rapi, memudahkan proses approval konsultan struktur kami.",
    name: "R. Wijayanti",
    role: "Site Engineer, Cikarang",
  },
  {
    quote: "Koordinasi jadwal fleksibel meski lahan kami sempit dan akses terbatas.",
    name: "B. Setiawan",
    role: "Project Manager, Bekasi",
  },
  {
    quote: "Hasil pengeboran tembus lapisan keras tanpa perlu pindah titik, hemat biaya dan waktu proyek.",
    name: "A. Pratama",
    role: "Owner, Karawang",
  },
  {
    quote: "Survey gratis & detail, laporan uji tanah dikirim cepat. Tim teknis responsif saat ada perubahan di lapangan.",
    name: "S. Rahmawati",
    role: "Project Coordinator, Jakarta Selatan",
  },
];

export default function TestimonialSection() {
  const t = testimonials[0];

  return (
    <section className="border-b border-border-muted bg-surface px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-accent">Testimoni Klien</span>
          <h2
            className="text-2xl font-bold text-primary md:text-3xl"
            style={{ letterSpacing: "-0.01em", lineHeight: "1.3" }}
          >
            Kepercayaan dari Pengembang Proyek
          </h2>
        </div>

        {/* Single Quote Block */}
        <div className="border-l-4 border-accent pl-6 py-3">
          <blockquote className="text-lg font-medium leading-relaxed text-primary sm:text-xl md:text-2xl">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="mt-4">
            <p className="text-sm font-bold text-primary sm:text-base">{t.name}</p>
            <p className="font-mono text-xs text-secondary">{t.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
