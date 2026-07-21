import { lazy, Suspense } from "react";

const ServiceAreaMap = lazy(() => import("./ServiceAreaMap"));

export default function LazyServiceAreaMap() {
  return (
    <Suspense
      fallback={
        <div
          className="h-96 w-full animate-pulse bg-surface-container-low"
          aria-label="Memuat peta wilayah layanan"
        />
      }
    >
      <ServiceAreaMap />
    </Suspense>
  );
}
