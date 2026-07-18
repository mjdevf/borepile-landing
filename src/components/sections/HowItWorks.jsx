import { motion } from "motion/react";
import { howItWorks } from "../../data/content";

export default function HowItWorks() {
  return (
    <section className="border-y border-border-muted bg-surface-container-low px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2
            className="text-3xl font-semibold text-primary"
            style={{ letterSpacing: "-0.01em", lineHeight: "1.3" }}
          >
            Cara Kami Bekerja
          </h2>
          <p className="mt-3 text-base text-secondary">
            Proses sederhana dari konsultasi hingga serah terima.
          </p>
        </div>

        <div className="space-y-8">
          {howItWorks.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-5"
            >
              {/* Step number */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary-container font-mono text-sm font-bold text-tertiary-container">
                {step.step}
              </div>
              <div className="border-b border-border-muted pb-8 flex-1">
                <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-secondary">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
