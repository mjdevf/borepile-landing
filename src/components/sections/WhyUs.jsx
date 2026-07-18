import { motion } from "motion/react";
import { about } from "../../data/content";

export default function WhyUs() {
  return (
    <section className="border-y border-border-muted bg-surface-container-low px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className="mb-4 text-3xl font-semibold text-primary"
          style={{ letterSpacing: "-0.01em", lineHeight: "1.3" }}
        >
          Mengapa Memilih Kami
        </h2>
        <p className="mb-12 text-base text-secondary">
          Yang membedakan kami dari kontraktor bore pile lainnya.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-lg border border-border-muted bg-surface p-5 text-center shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] transition-all hover:border-outline"
            >
              <h3 className="mb-2 text-sm font-bold text-primary">{item.title}</h3>
              <p className="text-sm leading-relaxed text-secondary">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
