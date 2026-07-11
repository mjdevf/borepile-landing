import React, { useEffect, useRef, useState } from "react";

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
        <div className="h-[400px] flex items-center justify-center bg-beton-50 rounded-md border border-beton-200">
          <div className="text-center">
            <p className="text-beton-500 mb-2">Peta gagal dimuat.</p>
            <button onClick={() => this.setState({ err: false })} className="text-emas-600 underline text-sm">Coba lagi</button>
          </div>
        </div>
      );
    return this.props.children;
  }
}

function MapsSection() {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const [inView, setInView] = useState(true); // ponytail: start true to avoid hydration mismatch
  const [sectionVisible, setSectionVisible] = useState(true);
  const [MapContainer, setMapContainer] = useState(null);

  // IntersectionObserver for section fade
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSectionVisible(true); }, { rootMargin: "100px 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // IntersectionObserver for map lazy-load
  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { rootMargin: "200px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Dynamic import leaflet & react-leaflet (only when inView)
  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    Promise.all([
      import("leaflet"),
      import("react-leaflet"),
      import("leaflet/dist/leaflet.css"),
    ]).then(([leaflet]) => {
      if (cancelled) return;
      delete leaflet.default.Icon.Default.prototype._getIconUrl;
      leaflet.default.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    });
    Promise.all([import("react-leaflet")]).then(([rl]) => {
      if (cancelled) return;
      setMapContainer(() => rl.MapContainer);
      window.__rl = rl;
    });
    return () => { cancelled = true; };
  }, [inView]);

  const mapContent = MapContainer ? (
    (() => {
      const { TileLayer, Marker, Popup } = window.__rl;
      return <div className="h-[400px] w-full rounded-md overflow-hidden border border-beton-200 shadow-sm sm:h-[450px]">
        <MapContainer center={OFFICE_COORDS} zoom={15} scrollWheelZoom={false} tap={true} touchZoom={true} doubleClickZoom={false} boxZoom={false} keyboard={false} className="h-full w-full">
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={19} minZoom={10} tileSize={256} zoomOffset={0} crossOrigin="" />
          <Marker position={OFFICE_COORDS}>
            <Popup closeButton={false} autoClose={false} closeOnClick={false} className="custom-popup">
              <div className="p-2 min-w-[220px] text-center">
                <strong className="text-beton-900 text-base block mb-1">{OFFICE_NAME}</strong>
                <p className="text-sm text-beton-600 mb-1">{OFFICE_ADDRESS}</p>
                <p className="text-sm text-beton-600 mb-2">{OFFICE_AREA}</p>
                <a href={OFFICE_WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1.5 bg-emas-500 text-white text-xs font-semibold rounded hover:bg-emas-600 transition-colors">Hubungi via WhatsApp</a>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>;
    })()
  ) : (
    <div className="h-[400px] w-full rounded-md overflow-hidden border border-beton-200 shadow-sm sm:h-[450px] bg-beton-100 animate-pulse flex items-center justify-center">
      <p className="text-sm text-beton-500 font-medium">Memuat peta...</p>
    </div>
  );

  return (
    <section ref={sectionRef} className={`py-20 sm:py-28 transition-opacity duration-500 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`} id="maps">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-black tracking-tight text-beton-900 sm:text-4xl">Lokasi &amp; Area Layanan</h2>
          <p className="mt-3 max-w-2xl text-beton-600">Kantor &amp; workshop kami berlokasi di Jakarta Selatan, melayani proyek bore pile &amp; strauss pile di Jabodetabek, Karawang, Cikarang, Purwakarta, Serang, Cilegon, dan seluruh Indonesia.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative" ref={mapRef}>
            <ErrorBoundary>{mapContent}</ErrorBoundary>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-beton-100">
              <h3 className="text-xl font-bold text-beton-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-emas-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Lokasi Kantor
              </h3>
              <address className="not-italic text-beton-700 space-y-2">
                <p className="font-medium">{OFFICE_NAME}</p>
                <p>{OFFICE_ADDRESS}</p>
                <p>{OFFICE_AREA}</p>
              </address>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-beton-100">
              <h3 className="text-xl font-bold text-beton-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-emas-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Hubungi Kami
              </h3>
              <div className="space-y-3">
                <a href={`tel:${OFFICE_PHONE.replace(/\s+/g, "")}`} className="flex items-center gap-3 p-3 bg-beton-50 rounded-md hover:bg-beton-100 transition-colors">
                  <svg className="w-6 h-6 text-emas-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span className="text-beton-700 font-medium">{OFFICE_PHONE}</span>
                </a>
                <a href={OFFICE_WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-emas-500 text-white rounded-md hover:bg-emas-600 transition-colors">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382A10.244 10.244 0 0 0 12 3C6.477 3 2 7.477 2 13c0 2.005.646 3.875 1.718 5.471l-1.318 4.475 4.575-1.236A10.236 10.236 0 0 0 17.472 14.382z" /></svg>
                  <span className="font-medium">Chat via WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-beton-100">
              <h3 className="text-xl font-bold text-beton-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-emas-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                Area Layanan Utama
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Jakarta Pusat","Jakarta Utara","Jakarta Barat","Jakarta Selatan","Jakarta Timur","Bogor","Depok","Tangerang","Bekasi","Karawang","Cikarang","Purwakarta","Serang","Cilegon","Subang","Cianjur"].map(a => (
                  <span key={a} className="px-3 py-1.5 bg-beton-50 text-beton-700 text-sm rounded-full border border-beton-200 hover:bg-emas-50 hover:border-emas-300 transition-colors">{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapsSection;
