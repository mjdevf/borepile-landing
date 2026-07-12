import { motion } from "motion/react";
import { Drill, Calendar } from "lucide-react";
import { trustBar } from "../../data/content";

const icons = { Drill, Calendar };

export default function TrustBar() {
  return (
    <section className="relative bg-gradient-to-br from-tanah-950 via-tanah-900 to-beton-900 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-emas-600)_0%,_transparent_60%)] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          {trustBar.items.map((item, i) => {
            const Icon = icons[item.icon] || Drill;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center text-center"
              >
                <Icon className="mb-3 h-8 w-8 text-emas-500" />
                <span className="text-5xl font-black tracking-tight text-white">
                  {item.value}{item.suffix}
                </span>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-beton-200">
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
