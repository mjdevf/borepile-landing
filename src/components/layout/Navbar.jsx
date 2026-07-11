import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-beton-950/90 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#hero" className="text-lg font-bold tracking-tight text-white">
          BOREPILE
        </a>

        <button
          className="relative z-50 text-white sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.div>
        </button>

        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-xs font-bold uppercase tracking-widest transition-colors duration-300 text-white hover:text-emas-500"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile slide-in */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed inset-y-0 right-0 z-40 w-72 bg-beton-950/95 backdrop-blur-xl sm:hidden"
          >
            <div className="flex flex-col gap-1 px-8 pt-28">
              {navLinks.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.3 }}
                  className="border-b border-beton-800 py-4 text-sm font-bold uppercase tracking-widest transition-colors hover:text-emas-500 text-white"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm sm:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
