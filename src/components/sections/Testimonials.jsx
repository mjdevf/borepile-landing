import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import GradientHeading from "../ui/GradientHeading";

const AVATAR_COLORS = [
  "bg-emas-600",
  "bg-blue-600",
  "bg-emerald-600",
  "bg-violet-600",
  "bg-rose-600",
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <AnimatedSection
      className="relative bg-beton-50 py-20 sm:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <GradientHeading
          label="Testimonials"
          title="Kata Pelanggan"
          desc="Apa kata mereka setelah menggunakan jasa kami."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Arrow buttons */}
          <button
            onClick={prev}
            aria-label="Sebelumnya"
            className="absolute left-0 top-1/2 z-10 hidden -translate-x-2 -translate-y-1/2 rounded-full border border-beton-300 bg-white p-2 text-beton-700 shadow-md transition-all hover:bg-emas-600 hover:text-white hover:shadow-lg sm:block"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Berikutnya"
            className="absolute right-0 top-1/2 z-10 hidden translate-x-2 -translate-y-1/2 rounded-full border border-beton-300 bg-white p-2 text-beton-700 shadow-md transition-all hover:bg-emas-600 hover:text-white hover:shadow-lg sm:block"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="overflow-hidden px-0 sm:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative border border-beton-200 bg-white p-5 text-center sm:p-6"
              >
                {/* Avatar + Quote */}
                <div className="mx-auto mb-4 flex flex-col items-center">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white shadow-md ${AVATAR_COLORS[current % AVATAR_COLORS.length]}`}
                  >
                    {testimonials[current].name.charAt(0)}
                  </div>
                </div>
                <p className="text-sm leading-relaxed italic text-beton-800 sm:text-base">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="mt-4">
                  <p className="text-sm font-bold text-tanah-900">
                    {testimonials[current].name}
                  </p>
                  <p className="mt-0.5 text-xs text-beton-200">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-emas-600"
                    : "w-2 bg-beton-300 hover:bg-beton-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
