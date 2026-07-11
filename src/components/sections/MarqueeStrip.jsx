import { motion } from "motion/react";

const text = "BOREPILE • SUMUR BOR • IRIGASI • SOIL TEST • PONDASI • KONSTRUKSI • ";

export default function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-beton-950 via-tanah-950 to-beton-950 py-5">
      {/* gold top border */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-emas-600/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-emas-600/30 to-transparent" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="mx-6 text-base font-black uppercase tracking-[0.2em] text-emas-500/80 sm:text-lg"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
