import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faq } from "../../data/content";

function AccordionItem({ item, isOpen, onClick, idx }) {
  const contentRef = useRef(null);

  return (
    <div
      className={`overflow-hidden rounded-lg border border-border-muted transition-all ${
        isOpen ? "shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)]" : ""
      }`}
    >
      <button
        onClick={onClick}
        className={`flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold transition-colors ${
          isOpen ? "text-primary" : "text-on-surface"
        }`}
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-4 shrink-0"
        >
          <ChevronDown className="h-4 w-4 text-secondary" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={contentRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="border-t border-border-muted px-5 py-4 text-sm leading-relaxed text-secondary">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="bg-surface px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h2
            className="text-3xl font-semibold text-primary"
            style={{ letterSpacing: "-0.01em", lineHeight: "1.3" }}
          >
            Pertanyaan Umum
          </h2>
          <p className="mt-3 text-base text-secondary">
            Jawaban untuk pertanyaan yang sering diajukan.
          </p>
        </div>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              idx={i}
              isOpen={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
