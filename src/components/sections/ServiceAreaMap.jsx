import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

class ErrorBoundary extends React.Component {
  state = { err: false };
  static getDerivedStateFromError() { return { err: true }; }
  render() {
    if (this.state.err)
      return (
        <div className="flex h-[400px] items-center justify-center rounded-md border border-border-muted bg-surface-container-low">
          <div className="text-center">
            <p className="mb-2 text-sm text-secondary">Peta gagal dimuat.</p>
            <button onClick={() => this.setState({ err: false })} className="text-sm text-tertiary underline">Coba lagi</button>
          </div>
        </div>
      );
    return this.props.children;
  }
}

/* ── KOTA data with real lat/lng ── */
const CITIES = [
  { slug: "serang", name: "Serang", lat: -6.12, lng: 106.15 },
  { slug: "cilegon", name: "Cilegon", lat: -6.04, lng: 106.05 },
  { slug: "tangerang", name: "Tangerang", lat: -6.18, lng: 106.63 },
  { slug: "jakarta-barat", name: "Jakarta Barat", lat: -6.17, lng: 106.75 },
  { slug: "jakarta-utara", name: "Jakarta Utara", lat: -6.12, lng: 106.88 },
  { slug: "jakarta-pusat", name: "Jakarta Pusat", lat: -6.18, lng: 106.83, hub: true },
  { slug: "jakarta-timur", name: "Jakarta Timur", lat: -6.23, lng: 106.9 },
  { slug: "jakarta-selatan", name: "Jakarta Selatan", lat: -6.26, lng: 106.82 },
  { slug: "depok", name: "Depok", lat: -6.4, lng: 106.82 },
  { slug: "bekasi", name: "Bekasi", lat: -6.24, lng: 106.99 },
  { slug: "cikarang", name: "Cikarang", lat: -6.3, lng: 107.15 },
  { slug: "karawang", name: "Karawang", lat: -6.3, lng: 107.3 },
  { slug: "purwakarta", name: "Purwakarta", lat: -6.55, lng: 107.45 },
  { slug: "subang", name: "Subang", lat: -6.57, lng: 107.7 },
  { slug: "bogor", name: "Bogor", lat: -6.59, lng: 106.79 },
  { slug: "cianjur", name: "Cianjur", lat: -6.82, lng: 107.13 },
];

const HUB = CITIES.find((c) => c.hub);

export default function ServiceAreaMap() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let mapInstance = null;

    async function init() {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");
      if (cancelled) return;

      const el = mapRef.current;
      if (!el) return;
      if (el._leaflet_id) return; // already initialized (StrictMode double-invoke guard)

      const map = L.default.map(el, {
        center: [-6.35, 106.85],
        zoom: 9.5,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: true,
        dragging: true,
        tap: true,
        touchZoom: true,
      });

      L.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        minZoom: 8,
      }).addTo(map);

      // Custom circle markers
      CITIES.forEach((c) => {
        const isHub = !!c.hub;
        const marker = L.default.circleMarker([c.lat, c.lng], {
          radius: isHub ? 9 : 7,
          fillColor: c.hub ? "#17171A" : "#A8422A",
          color: "#ffffff",
          weight: 2.5,
          opacity: 0.9,
          fillOpacity: 1,
        }).addTo(map);

        marker.bindTooltip(c.name, {
          permanent: false,
          direction: "top",
          offset: L.default.point(0, -10),
          className: "map-city-tooltip",
        });

        marker.on("click", () => {
          navigate(`/location/${c.slug}/`);
        });
      });

      mapInstance = map;
      setReady(true);
      requestAnimationFrame(() => map.invalidateSize());
    }

    init();

    return () => {
      cancelled = true;
      if (mapInstance) mapInstance.remove();
    };
  }, [navigate]);

  return (
    <section className="bg-surface px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <p className="font-mono text-xs text-accent">Peta Wilayah Layanan</p>
          <p className="mt-2 max-w-[520px] text-base text-secondary">
            Ketuk salah satu titik untuk lihat detail layanan bore pile di kota tersebut.
          </p>
        </div>

        {/* Map card */}
        <ErrorBoundary>
          <div className="relative overflow-hidden rounded-sm border border-border-muted">
            {!ready && (
              <div className="h-[400px] w-full animate-pulse bg-surface-container-low" />
            )}
            <div
              ref={mapRef}
              className="w-full"
              style={{ height: "400px", minHeight: "400px" }}
            />

            {/* Attribution overlay */}
            <div className="pointer-events-none absolute bottom-0 right-0 z-[1000] p-1 text-[10px] text-gray-500">
              &copy; OpenStreetMap contributors
            </div>
          </div>
        </ErrorBoundary>

        {/* Footer stats */}
        <div className="mt-4 flex items-center justify-between text-xs text-outline">
          <span>Posisi titik sesuai koordinat asli kota</span>
          <span>{CITIES.length} kota terlayani</span>
        </div>
      </div>
    </section>
  );
}
