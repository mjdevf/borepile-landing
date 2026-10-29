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
  return (
    <section className="border-t border-border-muted bg-surface px-5 py-16 md:px-10 md:py-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-7 md:gap-12">
        <div className="flex items-end justify-between gap-8">
          <h2 className="max-w-xl text-display-sm leading-[1.1] tracking-tight text-primary md:text-display">
            Kepercayaan dari Pengembang Proyek
          </h2>
          <p className="hidden text-base text-secondary md:block">Geser untuk melihat testimoni lainnya</p>
        </div>

        <div
          className="slider -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pb-4 md:mx-0 md:gap-6 md:px-0"
          role="region"
          aria-label="Testimoni klien"
          tabIndex={0}
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="m-0 flex min-h-[260px] shrink-0 basis-[84%] snap-start flex-col justify-between gap-7 border-t-[3px] border-accent bg-surface-container p-6 md:min-h-[300px] md:basis-[calc((100%-3rem)/3)] md:p-8"
            >
              <blockquote className="quote-serif m-0 text-xl font-medium leading-[1.4] text-primary md:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <div className="text-base font-bold text-primary md:text-lg">{t.name}</div>
                <div className="mt-0.5 text-sm text-secondary md:text-base">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="text-sm text-secondary md:hidden">Geser untuk melihat testimoni lainnya</p>
      </div>
    </section>
  );
}
