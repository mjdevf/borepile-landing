import React, { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, Phone } from "lucide-react";

const testimonials = [
  {
    quote: "Pengerjaan borepile buat proyek perumahan saya tepat waktu dan sesuai spek. Timnya profesional, alat lengkap.",
    name: "H. Gunawan",
    role: "Pengembang Perumahan",
    company: "Jakarta Selatan",
    project: "150 Titik · Kedalaman 12m",
    verified: true,
  },
  {
    quote: "Kalibrasi alat dan laporan uji tanahnya rapi, memudahkan proses approval konsultan struktur kami.",
    name: "R. Wijayanti",
    role: "Site Engineer",
    company: "Konsultan Struktur, Cikarang",
    project: "Proyek Gudang Industri · Cikarang",
    verified: true,
  },
  {
    quote: "Koordinasi jadwal fleksibel meski lahan kami sempit dan akses terbatas.",
    name: "B. Setiawan",
    role: "Project Manager",
    company: "Kontraktor, Bekasi",
    project: "Ruko 4 Lantai · Bekasi",
    verified: true,
  },
  {
    quote: "Hasil pengeboran tembus lapisan keras tanpa perlu pindah titik, hemat biaya dan waktu proyek.",
    name: "A. Pratama",
    role: "Owner",
    company: "Kontraktor, Karawang",
    project: "Pabrik 2 Lantai · Karawang",
    verified: true,
  },
  {
    quote: "Survey gratis & detail, laporan uji tanah dikirim cepat. Tim teknis responsif saat ada perubahan di lapangan.",
    name: "S. Rahmawati",
    role: "Project Coordinator",
    company: "Pengembang, Jakarta Selatan",
    project: "Hotel 5 Lantai · Jakarta Selatan",
    verified: true,
  },
  {
    quote: "Alat bor mesin kondisi prima, operator berpengalaman. Pengecoran beton lancar tanpa void.",
    name: "D. Kurniawan",
    role: "Kepala Teknik",
    company: "Kontraktor, Tangerang",
    project: "Mall Regional · Tangerang",
    verified: true,
  },
  {
    quote: "Penanganan lahan gambut tricky ditangani profesional. Stabilisasi tanah & casing rapi.",
    name: "A. Wijaya",
    role: "Konsultan Geoteknik",
    company: "Konsultan, Depok",
    project: "Perkantoran 8 Lantai · Depok",
    verified: true,
  },
  {
    quote: "After-sales responsif, komunikasi lancar. Sudah 3 proyek pakai jasa ini, konsisten.",
    name: "H. Basri",
    role: "Direktur",
    company: "Kontraktor, Bekasi",
    project: "Gudang Logistik · Bekasi",
    verified: true,
  },
  {
    quote: "Laporan harian & foto dokumentasi lengkap, memudahkan pelaporan ke owner & bank pembiayaan.",
    name: "D. Sartika",
    role: "Project Control",
    company: "Pengembang, Jakarta Pusat",
    project: "Apartemen 12 Lantai · Jakarta Pusat",
    verified: true,
  },
  {
    quote: "Harga transparan, tidak ada biaya tersembunyi. Termin pembayaran fleksibel sesuai progress.",
    name: "A. Fauzi",
    role: "Finance Manager",
    company: "Pengembang, Bogor",
    project: "Kompleks Ruko · Bogor",
    verified: true,
  },
  {
    quote: "Tim safety sangat disiplin, HSE plan diterapkan ketat. Zero accident di proyek kami 200+ titik.",
    name: "B. Santoso",
    role: "HSE Manager",
    company: "Kontraktor, Cilegon",
    project: "Pabrik Kimia · Cilegon",
    verified: true,
  },
  {
    quote: "Komunikasi lancar lewat grup WhatsApp proyek. Setiap kendala diselesaikan kurang dari 24 jam.",
    name: "Y. Marlina",
    role: "Site Manager",
    company: "Kontraktor, Bekasi",
    project: "Sekolah 3 Lantai · Bekasi",
    verified: true,
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const next = () => { setActive((p) => (p + 1) % testimonials.length); setAnimKey((k) => k + 1); };
  const prev = () => { setActive((p) => (p - 1 + testimonials.length) % testimonials.length); setAnimKey((k) => k + 1); };
  const t = testimonials[active];

  return (
    <section className="bg-[#EDEAE2] py-16 px-5 relative">
      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-2 bg-[#1C1D1B] text-[#C9A15A] px-3 py-1.5 font-mono text-[11px] tracking-[0.2em] uppercase">
          <span className="w-1.5 h-1.5 bg-[#C9A15A]" />
          Laporan Proyek Terverifikasi
        </div>
      </div>

      <h2 className="text-center font-black text-[#1C1D1B] text-4xl leading-tight tracking-tight uppercase" style={{ fontFamily: "'Oswald', 'Arial Narrow', sans-serif" }}>
        Kata Klien Kami
      </h2>
      <p className="text-center text-[#5B5A54] mt-3 text-base max-w-sm mx-auto">
        Testimoni dari pengembang & kontraktor yang menggunakan jasa borepile kami.
      </p>

      <div className="mt-10 max-w-md mx-auto bg-white border border-[#DDD9CE] relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#C9A15A] to-[#7A8A94]" />

        <div className="p-7 pl-8">
          <div className="flex items-center justify-between mb-5">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#5A5A5A] border border-[#DDD9CE] px-2 py-1">
              {t.project}
            </span>
            <span className="flex items-center gap-1 text-[#3F6B4A] text-[11px] font-medium">
              <CheckCircle2 size={13} strokeWidth={2.5} />
              Verified
            </span>
          </div>

          <div
            key={animKey}
            className="testimonial-animate"
            style={{ animation: "testimonialFadeIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards" }}
          >
            <p className="text-[#26251F] text-[17px] leading-relaxed italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="mt-6 pt-5 border-t border-[#EDEAE2] flex items-center gap-3">
              <div className="w-11 h-11 bg-[#1C1D1B] flex items-center justify-center shrink-0">
                <span className="text-[#C9A15A] font-black text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {t.company.split(" ").filter(w => w[0] === w[0].toUpperCase() && w.length > 2).slice(0, 3).map(w => w[0]).join("")}
                </span>
              </div>
              <div>
                <p className="font-bold text-[#1C1D1B] text-sm">{t.name}</p>
                <p className="text-[#5A5A5A] text-xs">{t.role} · {t.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button onClick={prev} aria-label="Sebelumnya"
          className="w-9 h-9 flex items-center justify-center border border-[#C9A15A] text-[#C9A15A] hover:bg-[#1C1D1B] hover:text-white transition-colors">
          <ChevronLeft size={16} />
        </button>
        <span className="font-mono text-xs text-[#5A5A5A] tabular-nums">
          {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </span>
        <button onClick={next} aria-label="Berikutnya"
          className="w-9 h-9 flex items-center justify-center border border-[#C9A15A] text-[#C9A15A] hover:bg-[#1C1D1B] hover:text-white transition-colors">
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/6281514811120"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-600 shadow-lg flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
          aria-label="Chat via WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382A10.244 10.244 0 0 0 12 3C6.477 3 2 7.477 2 13c0 2.005.646 3.875 1.718 5.471l-1.318 4.475 4.575-1.236A10.236 10.236 0 0 0 17.472 14.382z" />
          </svg>
        </a>
        <a
          href="tel:+6281514811120"
          className="w-14 h-14 rounded-full bg-[#3F6B4A] shadow-lg flex items-center justify-center text-white hover:bg-[#345a3d] transition-colors"
          aria-label="Hubungi kami via telepon"
        >
          <Phone size={20} fill="white" />
        </a>
      </div>

      <style>{`
        @keyframes testimonialFadeIn {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}