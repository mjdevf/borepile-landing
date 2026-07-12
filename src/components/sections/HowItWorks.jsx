import { motion } from "motion/react";
import { howItWorks } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import GradientHeading from "../ui/GradientHeading";

export default function HowItWorks() {
  return (
    <AnimatedSection
      id="cara-kerja"
      className="relative bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <GradientHeading
          label="How It Works"
          title="Cara Kerja"
          desc="Proses mudah dari konsultasi sampai selesai."
        />

        <div className="relative">
          {/* Desktop: horizontal timeline line */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-0.5 bg-gradient-to-r from-emas-600/20 via-emas-600 to-emas-600/20 lg:block" />

          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col items-center text-center lg:items-center"
              >
                {/* Step circle */}
                <div className="relative z-10 mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-emas-600 bg-white text-xl font-black text-emas-600 shadow-lg shadow-emas-600/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-emas-600 group-hover:text-white group-hover:shadow-emas-600/30">
                  {step.step}
                  {/* Connecting dot on mobile */}
                  <div className="absolute -bottom-6 left-1/2 h-4 w-[1px] -translate-x-1/2 bg-emas-600/30 lg:hidden" />
                </div>
                <h3 className="text-lg font-bold text-tanah-900">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-beton-700">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
