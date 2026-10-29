import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone } from "lucide-react";
import Button from "../ui/Button";
import { navLinks, footer } from "../../data/content";

const MSG = "Halo%20Majujaya%20Bore%20Pile%2C%20saya%20ingin%20konsultasi%20tentang%20pengeboran.";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Close on Escape key */
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [open, handleKeyDown]);

  const showScrolled = scrolled || open;
  const menuLinks = navLinks.filter((l) => l.label !== "Kontak");

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b ${
        showScrolled
          ? "bg-surface border-border-muted shadow-sm"
          : "bg-surface border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1360px] items-center justify-between px-4 md:px-10">
        <a href="/" className="whitespace-nowrap text-lg font-extrabold tracking-wide text-primary">
          MAJUJAYA <span className="font-medium text-secondary">BORE PILE</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {menuLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-secondary transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}

          {/* Dedicated WA CTA Button */}
          <Button
            href={`https://api.whatsapp.com/send/?phone=${footer.wa}&text=${MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
            className="text-xs"
          >
            <Phone className="h-3.5 w-3.5" />
            Hubungi WA
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative z-50 flex h-12 w-12 items-center justify-center text-primary md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu-panel"
        >
          <div className={`transition-transform duration-200 ${open ? "rotate-90" : ""}`}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </div>
        </button>
      </div>

      {/* Mobile slide-in panel */}
      <div
        id="mobile-menu-panel"
        role="dialog"
        aria-modal={open}
        aria-label="Navigasi menu"
        className={`fixed inset-0 top-0 z-40 bg-surface transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1 px-8 pt-28">
          {menuLinks.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              style={{ animationDelay: `${0.08 + i * 0.05}s` }}
              className={`border-b border-border-muted py-4 text-sm font-medium text-primary transition-all duration-300 hover:text-accent ${
                open ? "ani-nav-link" : "opacity-0"
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <Button
            href={`https://api.whatsapp.com/send/?phone=${footer.wa}&text=${MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
            className="mt-6 w-full"
            onClick={() => setOpen(false)}
          >
            <Phone className="h-4 w-4" />
            Hubungi via WhatsApp
          </Button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 top-[72px] z-30 bg-black/40 transition-opacity duration-200 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
    </nav>
  );
}
