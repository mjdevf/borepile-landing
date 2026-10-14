import { useEffect, useRef, useState } from "react";

/* Render children only once the placeholder is near the viewport.
   Keeps heavy, lazy chunks (map, calculator) off the initial load. */
export default function LazyOnView({ children, minHeight = 400, rootMargin = "800px 0px", id, label }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  /* Anchor links (#kalkulator, #maps) must still land on the section */
  useEffect(() => {
    if (show || !id) return;
    const onHash = () => {
      if (window.location.hash === `#${id}`) setShow(true);
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [show, id]);

  if (show) return children;
  return <div ref={ref} id={id} style={{ minHeight }} aria-label={label} />;
}
