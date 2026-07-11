import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { serviceArea } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import GradientHeading from "../ui/GradientHeading";

export default function ServiceArea() {
  return (
    <AnimatedSection className="relative bg-gradient-to-br from-beton-900 via-beton-950 to-beton-900 py-20 sm:py-28">
      {/* Wave divider */}
      <div className="section-divider absolute top-0 inset-x-0" />
      {/* Radial glow */}
      <div className="pointer-events-none absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emas-600/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <GradientHeading
          label="Coverage"
          title="Area Layanan"
          desc="Wilayah yang kami layani untuk jasa pengeboran."
          light
        />

        <div className="flex flex-col items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emas-500 text-white">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {serviceArea.map((city, i) => (
              <motion.button
                key={city}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(184, 134, 46, 0.15)",
                  borderColor: "var(--color-emas-600)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 border border-beton-600 bg-beton-900/50 px-4 py-3 text-sm font-semibold text-beton-200 rounded-md text-center transition-all duration-300 hover:border-emas-600/30 hover:bg-beton-900"
              >
                <MapPin className="h-4 w-4 shrink-0 text-emas-500" />
                {city}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
