import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioImages } from "../../data/content";

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
      <section id="portfolio" className="bg-surface px-4 py-16 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-7xl space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <h2
              className="max-w-2xl text-3xl font-semibold text-primary"
              style={{ letterSpacing: "-0.01em", lineHeight: "1.3" }}
            >
              Portofolio Proyek
            </h2>
            <p className="text-base text-secondary">
              Hasil pekerjaan bore pile & strauss pile yang telah kami selesaikan.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {portfolioImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border-muted bg-surface-container-low text-left shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] transition-transform duration-200 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2"
              >
                <picture>
                  <source
                    srcSet={`${toResized(toWebp(img.src), 640)} 640w, ${toResized(toWebp(img.src), 320)} 320w`}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    type="image/webp"
                  />
                  <source
                    srcSet={`${toResized(img.src, 640)} 640w, ${toResized(img.src, 320)} 320w`}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    type="image/jpeg"
                  />
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e]/80 via-[#191c1e]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-3 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-xs font-semibold text-on-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {img.label}
                  </p>
                </div>
              </button>
            ))}
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
