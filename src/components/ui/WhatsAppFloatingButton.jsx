import { Phone } from "lucide-react";
import { footer } from "../../data/content";

const MSG = "Halo%20Majujaya%20Bore%20Pile%2C%20saya%20ingin%20konsultasi%20tentang%20pengeboran.";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={`https://wa.me/${footer.wa}?text=${MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-on-primary shadow-lg transition-all duration-200 hover:bg-accent-dark hover:scale-105 sm:right-6 sm:bottom-6"
      aria-label="Chat via WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
