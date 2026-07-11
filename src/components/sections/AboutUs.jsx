import { motion } from "motion/react";
import { about, hero } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import GradientHeading from "../ui/GradientHeading";

export default function AboutUs() {
  return (
    <AnimatedSection
      id="tentang"
      className="relative bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <GradientHeading
          label="About Us"
          title={about.title}
          desc="Mengenal lebih dekat siapa kami."
        />

        {/* Owner / Pimpinan */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <img
            src="/images/subiyanto-borepile.jpg"
            alt="Subiyanto - Pimpinan Majujaya Bore Pile"
            className="mx-auto mb-4 h-28 w-28 rounded-full border-4 border-emas-200 object-cover shadow-lg"
            loading="lazy"
          />
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-emas-700">
            {hero.owner}
          </p>
          <p className="text-xs text-beton-700">
            {hero.ownerTitle}
          </p>
        </div>

        {/* Visi */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mt-2 text-sm leading-relaxed text-beton-800 sm:text-lg">
            {about.desc}
          </p>
          <div className="mx-auto mt-6 max-w-2xl rounded-md border border-emas-200 bg-emas-50/50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-emas-600">
              Visi Kami
            </p>
            <p className="mt-2 text-sm italic leading-relaxed text-beton-800">
              &ldquo;{about.vision}&rdquo;
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-xs font-medium uppercase tracking-[0.1em] text-beton-700">
            {hero.coverage}
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-md border border-beton-200 bg-beton-50 p-6 text-center transition-all duration-300 hover:border-emas-600/30 hover:shadow-lg hover:shadow-emas-600/5"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-tanah-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-beton-700">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
