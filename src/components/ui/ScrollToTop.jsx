import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handle = () => {
      if (window.lenis) {
        setShow(window.lenis.scroll > 600);
      } else {
        setShow(window.scrollY > 600);
      }
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      {show && (
        <button
          onClick={() => {
            if (window.lenis) {
              window.lenis.scrollTo(0, { duration: 1.2 });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="fixed bottom-20 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg transition-all duration-200 hover:bg-on-surface-variant hover:scale-110 sm:bottom-24 sm:right-6"
          aria-label="Scroll ke atas"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
