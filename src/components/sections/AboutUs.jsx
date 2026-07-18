import { motion } from "motion/react";
import { about } from "../../data/content";

export default function AboutUs() {
  return (
    <section
      id="tentang"
      className="border-t border-border-muted bg-surface px-4 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className="mb-4 text-3xl font-semibold text-primary"
          style={{ letterSpacing: "-0.01em", lineHeight: "1.3" }}
        >
          Integritas Struktural & Keselamatan
        </h2>
        <p className="mb-12 text-base leading-relaxed text-secondary">
          {about.desc}
        </p>

        {/* Quality assurances */}
        <div className="flex flex-col justify-center gap-8 md:flex-row md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded bg-secondary-container text-tertiary-container">
              <span className="text-xl">⚙️</span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.05em] text-secondary">Zero Accident Policy</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded bg-secondary-container text-tertiary-container">
              <span className="text-xl">🔧</span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.05em] text-secondary">Alat Berat Terawat</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded bg-secondary-container text-tertiary-container">
              <span className="text-xl">✅</span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.05em] text-secondary">Presisi Eksekusi</span>
          </motion.div>
        </div>

        {/* Owner */}
        <div className="mx-auto mt-12 max-w-md">
          <div className="rounded-lg border border-border-muted bg-surface-container-low p-5">
            <p className="text-sm font-bold text-primary">Subiyanto</p>
            <p className="text-xs text-secondary">Pimpinan Majujaya Bore Pile</p>
            <p className="mt-2 text-sm italic leading-relaxed text-secondary">
              &ldquo;{about.vision}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
