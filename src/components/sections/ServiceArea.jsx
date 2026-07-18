import { motion } from "motion/react";
import { MapPin, ChevronRight } from "lucide-react";
import { serviceArea } from "../../data/content";

export default function ServiceArea() {
  return (
    <section className="border-y border-border-muted bg-surface-container-low px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2
            className="text-3xl font-semibold text-primary"
            style={{ letterSpacing: "-0.01em", lineHeight: "1.3" }}
          >
            Wilayah Layanan
          </h2>
          <p className="mt-3 text-base text-secondary">
            Kami melayani Jabodetabek, Karawang, Cikarang, dan sekitarnya.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {serviceArea.map((area) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border-muted bg-surface px-4 py-2.5 text-sm font-medium text-primary shadow-[0_10px_30px_-10px_rgba(15,23,42,0.03)] transition-all hover:border-outline"
            >
              <MapPin className="h-3.5 w-3.5 text-secondary" />
              {area}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
