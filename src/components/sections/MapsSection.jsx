import React, { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { footer, serviceArea, locationPages } from "../../data/content";

const OFFICE_COORDS = [-6.2588, 106.8235];
const OFFICE_NAME = "Jasa Bore Pile Majujaya";
const OFFICE_ADDRESS = "JL. OPHIR DALAM 2 RT.06/01 NO.61";
const OFFICE_AREA = "Gunung, Kebayoran Baru, Jakarta Selatan 12310";
const OFFICE_PHONE = "+62 815 1481 1120";
const OFFICE_WHATSAPP = "https://wa.me/6281514811120";

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

function MapsSection() {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [MapContainer, setMapContainer] = useState(null);
  const [LeafletComponents, setLeafletComponents] = useState(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSectionVisible(true); }, { rootMargin: "100px 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { rootMargin: "200px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    Promise.all([
      import("leaflet"),
      import("react-leaflet"),
      import("leaflet/dist/leaflet.css"),
    ]).then(([leaflet, reactLeaflet]) => {
      if (cancelled) return;
      delete leaflet.default.Icon.Default.prototype._getIconUrl;
      leaflet.default.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
      setMapContainer(() => reactLeaflet.MapContainer);
      setLeafletComponents(() => reactLeaflet);
    });
    return () => { cancelled = true; };
  }, [inView]);

  const mapContent = MapContainer && LeafletComponents ? (
    (() => {
      const { TileLayer, Marker, Popup } = LeafletComponents;
      return <div className="h-[400px] w-full overflow-hidden rounded-md border border-border-muted shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] sm:h-[450px]">
        <MapContainer center={OFFICE_COORDS} zoom={15} scrollWheelZoom={false} tap={true} touchZoom={true} doubleClickZoom={false} boxZoom={false} keyboard={false} className="h-full w-full">
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={19} minZoom={10} tileSize={256} zoomOffset={0} crossOrigin="" />
          <Marker position={OFFICE_COORDS}>
            <Popup closeButton={false} autoClose={false} closeOnClick={false} className="custom-popup">
              <div className="min-w-[220px] p-2 text-center">
                <strong className="mb-1 block text-base text-primary">{OFFICE_NAME}</strong>
                <p className="mb-1 text-sm text-secondary">{OFFICE_ADDRESS}</p>
                <p className="mb-2 text-sm text-secondary">{OFFICE_AREA}</p>
                <a href={OFFICE_WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-on-primary transition-colors hover:bg-on-surface-variant">Hubungi via WhatsApp</a>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>;
    })()
  ) : (
    <div className="flex h-[400px] w-full animate-pulse items-center justify-center overflow-hidden rounded-md border border-border-muted bg-surface-container-low shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] sm:h-[450px]">
      <p className="text-sm font-medium text-secondary">Memuat peta...</p>
    </div>
  );

  return (
    <section ref={sectionRef} id="maps" className={`border-t border-border-muted bg-surface transition-opacity duration-500 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-10 md:py-24">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-primary" style={{ letterSpacing: "-0.01em", lineHeight: "1.3" }}>Lokasi &amp; Area Layanan</h2>
          <p className="mt-3 max-w-2xl text-base text-secondary">Kantor &amp; workshop kami berlokasi di Jakarta Selatan, melayani proyek bore pile &amp; strauss pile di Jabodetabek, Karawang, Cikarang, Purwakarta, Serang, Cilegon, dan seluruh Indonesia.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative" ref={mapRef}>
            <ErrorBoundary>{mapContent}</ErrorBoundary>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border border-border-muted bg-surface-container-low p-6 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)]">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-primary">
                <MapPin className="h-5 w-5 text-tertiary" />
                Lokasi Kantor
              </h3>
              <address className="space-y-2 not-italic text-secondary">
                <p className="font-medium text-on-surface">{OFFICE_NAME}</p>
                <p>{OFFICE_ADDRESS}</p>
                <p>{OFFICE_AREA}</p>
              </address>
            </div>
            <div className="rounded-lg border border-border-muted bg-surface-container-low p-6 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)]">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-primary">
                <Mail className="h-5 w-5 text-tertiary" />
                Hubungi Kami
              </h3>
              <div className="space-y-3">
                <a href={`tel:${OFFICE_PHONE.replace(/\s+/g, "")}`} className="flex items-center gap-3 rounded-md bg-surface p-3 transition-colors hover:bg-surface-container-high">
                  <Phone className="h-5 w-5 shrink-0 text-tertiary" />
                  <span className="font-mono text-sm font-medium text-on-surface">{OFFICE_PHONE}</span>
                </a>
                <a href={OFFICE_WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-md bg-primary p-3 text-on-primary transition-colors hover:bg-on-surface-variant">
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382A10.244 10.244 0 0 0 12 3C6.477 3 2 7.477 2 13c0 2.005.646 3.875 1.718 5.471l-1.318 4.475 4.575-1.236A10.236 10.236 0 0 0 17.472 14.382z" /></svg>
                  <span className="text-sm font-semibold uppercase tracking-[0.05em]">Chat via WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-border-muted bg-surface-container-low p-6 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)]">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-primary">
                <MapPin className="h-5 w-5 text-tertiary" />
                Area Layanan Utama
              </h3>
              <div className="flex flex-wrap gap-2">
                {serviceArea.map((a) => {
                  const loc = locationPages.find((p) => p.city === a);
                  const cls = "rounded-full border border-border-muted bg-surface px-3 py-1.5 text-sm text-secondary transition-colors hover:border-outline hover:text-on-surface";
                  return loc ? (
                    <a key={a} href={`/location/${loc.slug}/`} className={cls}>{a}</a>
                  ) : (
                    <span key={a} className={cls}>{a}</span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapsSection;
