import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioImages } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import GradientHeading from "../ui/GradientHeading";

const bgColors = [
  ["%23036", "%231a2a44"],
  ["%232a1a44", "%231a2a44"],
  ["%23362", "%231a2a44"],
  ["%23333", "%23036"],
  ["%231a1a2a", "%23036"],
  ["%232a2a1a", "%231a2a44"],
];
function svgPlaceholder(label, idx) {
  const [c1, c2] = bgColors[idx % bgColors.length];
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='g${idx}' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='${c1}' /%3E%3Cstop offset='100%25' stop-color='${c2}' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g${idx})' width='800' height='600' /%3E%3Crect x='0' y='0' width='800' height='600' fill='rgba(0,0,0,0.15)' /%3E%3Ctext x='400' y='290' text-anchor='middle' fill='%23f5d686' font-size='28' font-weight='bold' font-family='sans-serif'%3E${encodeURIComponent(label)}%3C/text%3E%3Ctext x='400' y='330' text-anchor='middle' fill='%23d4a843' font-size='16' font-family='sans-serif'%3EProyek%20Borepile%3C/text%3E%3C/svg%3E`;
}

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

  return (
    <>
      <AnimatedSection id="portfolio" className="bg-beton-100 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <GradientHeading
            label="Portfolio"
            title="Hasil Pekerjaan Kami"
            desc="Beberapa hasil pekerjaan yang sudah kami selesaikan."
          />

          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 auto-rows-[200px]">
            {portfolioImages.map((img, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelected(i)}
                className="group relative overflow-hidden bg-beton-300 text-left focus-visible:ring-2 focus-visible:ring-emas-500 focus-visible:ring-offset-2"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  onError={(e) => {
                    e.target.src = svgPlaceholder(img.label, i);
                  }}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-sm font-bold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {img.label}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={() => setSelected(null)}
          >
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

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={portfolioImages[selected].src}
                alt={portfolioImages[selected].alt}
                onError={(e) => {
                  e.target.src = svgPlaceholder(portfolioImages[selected].label, selected);
                }}
                className="max-h-[75vh] max-w-full rounded object-contain shadow-2xl"
              />
              <div className="absolute inset-x-0 bottom-0 rounded-b bg-gradient-to-t from-black/60 to-transparent p-4 pt-8">
                <p className="text-sm font-bold text-white">
                  {portfolioImages[selected].label}
                </p>
                <p className="text-xs text-white/60">
                  {selected + 1} / {portfolioImages.length}
                </p>
              </div>
            </motion.div>

            <button
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white/70 hover:text-white focus-visible:ring-2 focus-visible:ring-white"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Selanjutnya"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
