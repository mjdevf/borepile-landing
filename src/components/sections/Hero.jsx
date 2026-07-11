import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { hero, footer } from "../../data/content";
import Button from "../ui/Button";

// Responsive hero images with WebP optimization
const heroImages = {
  mobile: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=75&fm=webp",
  tablet: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=75&fm=webp",
  desktop: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=75&fm=webp",
  fallback: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80",
};

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-beton-950"
    >
      {/* Background Image with Parallax - Responsive & Optimized */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y: bgY }}
      >
        <picture>
          <source media="(max-width: 640px)" srcSet={heroImages.mobile} type="image/webp" />
          <source media="(max-width: 1024px)" srcSet={heroImages.tablet} type="image/webp" />
          <source media="(min-width: 1025px)" srcSet={heroImages.desktop} type="image/webp" />
          <img
            src={heroImages.fallback}
            alt="Jasa Bore Pile Majujaya - Pekerjaan pengeboran tanah untuk pondasi bangunan berpengalaman 12 tahun"
            className="h-full w-full object-cover"
            width="1600"
            height="900"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-beton-950/30 via-beton-950/10 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-28 sm:px-6"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-emas-500"
          >
            Majujaya Bore Pile
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-beton-200"
          >
            {hero.owner} — {hero.ownerTitle}
          </motion.p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                      {hero.headline.split(" ").map((word, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 40, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.2 + i * 0.09,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="inline-block mr-[0.3em]"
                        >
                          {word}{" "}
                        </motion.span>
                      ))}
                    </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="mt-6 max-w-xl text-base leading-relaxed text-beton-200 sm:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button
              href={`https://wa.me/${footer.wa}`}
              variant="fill"
              className="shadow-lg shadow-emas-600/20"
            >
              {hero.cta}
            </Button>
            <Button
              href="#portfolio"
              variant="outline"
              className="border-white/20 text-white hover:bg-white hover:text-beton-900 focus-visible:ring-2 focus-visible:ring-emas-500 focus-visible:ring-offset-2 focus-visible:ring-offset-beton-950"
            >
              {hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
