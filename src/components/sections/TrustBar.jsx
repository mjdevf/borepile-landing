import { motion } from "motion/react";
import { Drill, Calendar } from "lucide-react";
import { trustBar } from "../../data/content";

const icons = { Drill, Calendar };

export default function TrustBar() {
  return (
    <section className="border-y border-border-muted bg-surface-container-low px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {trustBar.items.map((item, i) => {
            const Icon = icons[item.icon] || Drill;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                <Icon className="mb-3 h-8 w-8 text-primary" />
                <span className="text-5xl font-bold tracking-tight text-primary">
                  {item.value}{item.suffix}
                </span>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-secondary">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
