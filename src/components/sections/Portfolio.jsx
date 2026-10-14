import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioImages } from "../../data/content";

const FEATURE = [
  {
    src: "/images/portfolio/hero-bg.webp",
    alt: "Auger rig bor mesin dan pekerja berhelm di area pengeboran",
    label: "Pengeboran dengan rig bor mesin",
    pos: "30% 82%",
  },
  {
    src: "/images/subiyanto-borepile.webp",
    alt: "Pekerja di lokasi proyek gedung dengan perancah dan pipa",
    label: "Pekerjaan pondasi di lokasi proyek",
    pos: "40% 70%",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : "";
  }, [selected]);

  const prev = () => setSelected((s) => (s === 0 ? portfolioImages.length - 1 : s - 1));
  const next = () => setSelected((s) => (s === portfolioImages.length - 1 ? 0 : s + 1));

  useEffect(() => {
    if (selected === null) return;
    const handler = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected]);

  const toWebp = (src) => src.replace(/\.(jpg|png)$/, ".webp");
  const toResized = (src, size) => src.replace(/\.(webp|jpg)$/, `-${size}.$1`);

  return (
    <>
      <section id="portfolio" className="bg-surface-container px-5 py-16 md:px-10 md:py-28">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-8 flex max-w-2xl flex-col gap-3 md:mb-12 md:gap-4">
            <h2 className="text-[32px] leading-[1.1] tracking-tight text-primary md:text-[44px]">
              Dokumentasi Proyek
            </h2>
            <p className="max-w-[56ch] text-base leading-relaxed text-secondary md:text-lg">
              Perumahan, gedung bertingkat, sampai pengeboran lapangan. Setiap titik didokumentasikan.
            </p>
          </div>

          {/* Stacked feature photos */}
          <div className="relative mb-10 h-[420px] md:mb-16 md:h-[560px]">
            {FEATURE.map((img, i) => {
              const back = i === 0;
              return (
                <figure
                  key={img.src}
                  className={`group absolute m-0 overflow-hidden rounded-sm ${
                    back
                      ? "left-0 top-0 h-[260px] w-[86%] shadow-[0_18px_40px_rgba(23,23,26,.18)] md:h-[420px] md:w-[64%]"
                      : "right-0 top-[210px] h-[210px] w-[66%] border-[6px] border-surface-container shadow-[0_18px_40px_rgba(23,23,26,.22)] md:top-[220px] md:h-[340px] md:w-[46%]"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: img.pos }}
                  />
                  <figcaption
                    className={`absolute bottom-3 left-3 rounded-[2px] px-2.5 py-1.5 text-xs text-on-primary md:text-sm ${
                      back ? "bg-primary" : "bg-accent"
                    }`}
                  >
                    {img.label}
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* More photos */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
            {portfolioImages.map((img, i) => {
              return (
                <button
                  key={img.src}
                  onClick={() => setSelected(i)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-surface-container-low text-left focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <picture>
                    <source
                      srcSet={`${toResized(toWebp(img.src), 640)} 640w, ${toResized(toWebp(img.src), 320)} 320w`}
                      sizes="(max-width: 768px) 50vw, 20vw"
                      type="image/webp"
                    />
                    <source
                      srcSet={`${toResized(img.src, 640)} 640w, ${toResized(img.src, 320)} 320w`}
                      sizes="(max-width: 768px) 50vw, 20vw"
                      type="image/jpeg"
                    />
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </picture>
                  <span className="absolute bottom-2 left-2 rounded-[2px] bg-primary/85 px-2 py-1 text-xs text-on-primary">
                    {img.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 transition-opacity duration-200 ${
          selected !== null ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSelected(null)}
      >
        {selected !== null && (
          <>
            <button
              className="absolute right-4 top-4 z-10 text-white/70 hover:text-white focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => setSelected(null)}
              aria-label="Tutup"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white/70 hover:text-white focus-visible:ring-2 focus-visible:ring-white"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <div key={selected} onClick={(e) => e.stopPropagation()}>
              <picture>
                <source srcSet={toWebp(portfolioImages[selected].src)} type="image/webp" />
                <img
                  src={portfolioImages[selected].src}
                  alt={portfolioImages[selected].alt}
                  className="max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl"
                />
              </picture>
              <div className="absolute inset-x-0 bottom-0 rounded-b bg-gradient-to-t from-black/60 to-transparent p-4 pt-8">
                <p className="text-sm font-bold text-white">
                  {portfolioImages[selected].label}
                </p>
                <p className="text-xs text-white/60">
                  {selected + 1} / {portfolioImages.length}
                </p>
              </div>
            </div>

            <button
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white/70 hover:text-white focus-visible:ring-2 focus-visible:ring-white"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Selanjutnya"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
          </>
        )}
      </div>
    </>
  );
}
