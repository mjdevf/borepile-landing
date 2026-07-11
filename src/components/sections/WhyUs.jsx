import { motion } from "motion/react";
import { Drill, Receipt, Zap, Shield } from "lucide-react";
import { whyUs } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import GradientHeading from "../ui/GradientHeading";

const icons = { Drill, Receipt, Zap, Shield };

export default function WhyUs() {
  return (
    <AnimatedSection id="kenapa-pilih-kami" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <GradientHeading
          label="Why Choose Us"
          title="Kenapa Pilih Kami"
          desc="Yang membedakan kami dari yang lain."
        />

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="pointer-events-none absolute left-[23px] top-0 hidden h-full w-0.5 bg-gradient-to-b from-emas-600/40 via-emas-400/30 to-emas-600/40 sm:block" />

          <div className="relative space-y-10 sm:space-y-12">
            {whyUs.map((item, i) => {
              const Icon = icons[item.icon] || Shield;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative flex flex-col gap-4 sm:flex-row ${isEven ? '' : 'sm:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 hidden shrink-0 sm:block">
                    <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border-2 border-emas-600 bg-white text-sm font-black text-emas-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-emas-600 group-hover:text-white">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 items-start gap-5 rounded-md p-0 transition-all duration-300 sm:p-5 sm:hover:bg-beton-50">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-emas-600 text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emas-600/20 focus-visible:ring-2 focus-visible:ring-emas-500">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-tanah-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-beton-700">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
