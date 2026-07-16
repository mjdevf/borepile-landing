import { motion } from "motion/react";
import { Building2, Droplets, Sprout, Ruler } from "lucide-react";
import { services } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import GradientHeading from "../ui/GradientHeading";

const icons = { Building2, Droplets, Sprout, Ruler, Search };

export default function Services() {
  return (
    <AnimatedSection id="layanan" className="relative bg-beton-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <GradientHeading
          label="What We Do"
          title="Layanan Kami"
          desc="Berbagai jenis jasa pengeboran yang kami sediakan untuk kebutuhan Anda."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((svc, i) => {
            const Icon = icons[svc.icon] || Building2;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden border border-beton-200 bg-white p-4 transition-all duration-500 hover:shadow-lg hover:shadow-emas-600/5"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-emas-600 transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex items-start gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-emas-600 text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emas-600/20">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-tanah-900">{svc.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-beton-700">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}