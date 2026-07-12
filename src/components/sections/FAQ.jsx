import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faq } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import GradientHeading from "../ui/GradientHeading";

function AccordionItem({ item, isOpen, onClick, idx }) {
  const contentRef = useRef(null);

  return (
    <div
      className={`overflow-hidden border rounded-md border-beton-200 transition-all duration-300 ${
        isOpen ? "border-emas-600 bg-emas-600/[0.02]" : "hover:border-beton-300"
      }`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-5 text-left focus-visible:ring-2 focus-visible:ring-emas-500 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        <span className="flex items-start gap-3 pr-4 text-sm font-bold text-tanah-900 sm:text-base">
          <span className="mt-0.5 text-xs font-black text-emas-600">
            {String(idx + 1).padStart(2, "0")}
          </span>
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChevronDown
            className={`h-4 w-4 shrink-0 transition-colors duration-300 ${
              isOpen ? "text-emas-600" : "text-beton-200"
            }`}
          />
        </motion.div>
      </button>
      <div
        className="overflow-hidden transition-[height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ height: isOpen ? contentRef.current?.scrollHeight + 24 + "px" : "0px" }}
      >
        <div ref={contentRef}>
          <p className="px-6 pb-6 text-sm leading-relaxed text-beton-700">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <AnimatedSection className="relative bg-beton-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <GradientHeading
          label="FAQ"
          title="Pertanyaan Umum"
          desc="Pertanyaan yang sering diajukan."
        />

        <div className="flex flex-col gap-3">
          {faq.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <AccordionItem
                item={item}
                idx={i}
                isOpen={openIdx === i}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
