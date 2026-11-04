import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "Panduan Pelaksanaan",
    title: "Tahapan Pengerjaan Bore Pile dari Survey sampai Cor",
    desc: "Urutan pekerjaan bore pile dari survey lokasi, penentuan titik, pengeboran, pemasangan tulangan, sampai pengecoran.",
    href: "/blog/tahapan-pengerjaan-bore-pile.html",
  },
  {
    category: "Panduan Survey",
    title: "Persiapan Sebelum Survey Bore Pile: Daftar Cek",
    desc: "Dokumen, akses jalan, kondisi sekitar, dan foto yang perlu disiapkan sebelum tim survey datang ke lokasi.",
    href: "/blog/persiapan-sebelum-survey-bore-pile.html",
  },
  {
    category: "Panduan Biaya",
    title: "Cara Membaca Penawaran Bore Pile: Item yang Harus Jelas",
    desc: "Item yang perlu diperiksa saat membandingkan penawaran bore pile, dari satuan harga sampai termin pembayaran.",
    href: "/blog/cara-membaca-penawaran-bore-pile.html",
  },
];

export default function ArticleGuides() {
  return (
    <section id="artikel" className="border-b border-border-muted bg-surface-container-low px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-3 md:gap-4">
            <span className="font-mono text-xs text-accent">Blog Majujaya</span>
            <h2 className="text-display-sm leading-[1.1] tracking-tight text-primary md:text-display">
              Artikel &amp; Panduan
            </h2>
            <p className="max-w-[56ch] text-base leading-relaxed text-secondary md:text-lg">
              Panduan teknis untuk pemilik proyek, dari persiapan survey sampai membaca penawaran dan mengawal pekerjaan di lapangan.
            </p>
          </div>
          <a
            href="/blog/"
            className="inline-flex min-h-11 items-center gap-2 text-base font-semibold text-primary underline underline-offset-[5px]"
          >
            Lihat semua artikel
            <ArrowRight className="h-[18px] w-[18px]" />
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {articles.map((article) => (
            <article
              key={article.href}
              className="flex flex-col justify-between gap-8 border-t-[3px] border-accent bg-surface p-6 md:p-8"
            >
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs uppercase tracking-wide text-accent">{article.category}</span>
                <h3 className="text-xl font-bold leading-tight text-primary">{article.title}</h3>
                <p className="text-base leading-relaxed text-secondary">{article.desc}</p>
              </div>
              <a
                href={article.href}
                className="inline-flex min-h-11 items-center gap-2 text-base font-semibold text-primary underline underline-offset-[5px]"
              >
                Baca artikel
                <ArrowRight className="h-[18px] w-[18px]" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
