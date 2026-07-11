import React, { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, Phone } from "lucide-react";

const testimonials = [
  {
    quote: "Pengerjaan borepile buat proyek perumahan saya tepat waktu dan sesuai spek. Timnya profesional, alat lengkap.",
    name: "Hendra Gunawan",
    role: "Pengembang Perumahan",
    company: "PT Cipta Graha Lestari",
    project: "150 Titik · Kedalaman 12m",
    verified: true,
  },
  {
    quote: "Kalibrasi alat dan laporan uji tanahnya rapi, memudahkan proses approval konsultan struktur kami.",
    name: "Rina Wijayanti",
    role: "Site Engineer",
    company: "Konsultan Struktur Adhikara",
    project: "Proyek Gudang Industri · Cikarang",
    verified: true,
  },
  {
    quote: "Koordinasi jadwal fleksibel meski lahan kami sempit dan akses terbatas.",
    name: "Bambang Setiawan",
    role: "Project Manager",
    company: "PT Mitra Beton Utama",
    project: "Ruko 4 Lantai · Bekasi",
    verified: true,
  },
  {
    quote: "Hasil pengeboran tembus lapisan keras tanpa perlu pindah titik, hemat biaya dan waktu proyek.",
    name: "Andi Pratama",
    role: "Owner",
    company: "CV Bangun Jaya Perkasa",
    project: "Pabrik 2 Lantai · Karawang",
    verified: true,
  },
  {
    quote: "Survey gratis & detail, laporan uji tanah dikirim cepat. Tim teknis responsif saat ada perubahan di lapangan.",
    name: "Siti Rahmawati",
    role: "Project Coordinator",
    company: "PT Cipta Bangun Nusantara",
    project: "Hotel 5 Lantai · Jakarta Selatan",
    verified: true,
  },
  {
    quote: "Alat bor mesin kondisi prima, operator berpengalaman. Pengecoran beton lancar tanpa void.",
    name: "Dedi Kurniawan",
    role: "Kepala Teknik",
    company: "PT Jaya Konstruksi Mandiri",
    project: "Mall Regional · Tangerang",
    verified: true,
  },
  {
    quote: "Penanganan lahan gambut tricky ditangani profesional. Stabilisasi tanah & casing rapi.",
    name: "Ir. Antonius Wijaya",
    role: "Konsultan Geoteknik",
    company: "PT Geo Teknik Indonesia",
    project: "Perkantoran 8 Lantai · Depok",
    verified: true,
  },
  {
    quote: "Garansi pekerjaan jelas, after-sales responsif. Sudah 3 proyek pakai jasa ini, konsisten.",
    name: "Hasan Basri",
    role: "Direktur",
    company: "PT Bangun Sejahtera Abadi",
    project: "Gudang Logistik · Bekasi",
    verified: true,
  },
  {
    quote: "Laporan harian & foto dokumentasi lengkap, memudahkan pelaporan ke owner & bank pembiayaan.",
    name: "Dewi Sartika",
    role: "Project Control",
    company: "PT Properti Nusantara",
    project: "Apartemen 12 Lantai · Jakarta Pusat",
    verified: true,
  },
  {
    quote: "Harga transparan, tidak ada biaya tersembunyi. Termin pembayaran fleksibel sesuai progress.",
    name: "Ahmad Fauzi",
    role: "Finance Manager",
    company: "PT Investama Properti",
    project: "Kompleks Ruko · Bogor",
    verified: true,
  },
  {
    quote: "Tim safety sangat disiplin, HSE plan diterapkan ketat. Zero accident di proyek kami 200+ titik.",
    name: "Ir. Budi Santoso, ST, MT",
    role: "HSE Manager",
    company: "PT Karya Bangsa Gemilang",
    project: "Pabrik Kimia · Cilegon",
    verified: true,
  },
  {
    quote: "Komunikasi lancar lewat grup WhatsApp proyek. Setiap kendala diselesaikan kurang dari 24 jam.",
    name: "Yuni Marlina",
    role: "Site Manager",
    company: "PT Arsitek Muda Indonesia",
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

      <a href="tel:+6281514811120"
              className="fixed bottom-6 right-5 w-14 h-14 rounded-full bg-[#3F6B4A] shadow-lg flex items-center justify-center text-white hover:bg-[#345a3d] transition-colors z-50"
              aria-label="Hubungi kami via telepon">
              <Phone size={20} fill="white" />
      </a>

      <style>{`
        @keyframes testimonialFadeIn {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}