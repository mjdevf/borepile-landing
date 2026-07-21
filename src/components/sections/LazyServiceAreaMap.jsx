import { useEffect, useRef, useState } from "react";

export default function LazyServiceAreaMap() {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setLoaded(true);
      },
      { rootMargin: "200px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {loaded ? (
        <DynamicServiceAreaMap />
      ) : (
        <div className="h-96 w-full animate-pulse bg-surface-container-low" aria-label="Memuat peta wilayah layanan" />
      )}
    </div>
  );
}

function DynamicServiceAreaMap() {
  const [Comp, setComp] = useState(null);

  useEffect(() => {
    let cancelled = false;
    import("./ServiceAreaMap").then((mod) => {
      if (!cancelled) setComp(() => mod.default);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return Comp ? <Comp /> : (
    <div className="h-96 w-full animate-pulse bg-surface-container-low" aria-label="Memuat peta wilayah layanan" />
  );
}
