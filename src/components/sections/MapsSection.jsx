import { useEffect, useRef, useState } from "react";

const OFFICE_COORDS = [-6.2588, 106.8235];
const OFFICE_NAME = "Jasa Bore Pile Majujaya";
const OFFICE_ADDRESS = "JL. OPHIR DALAM 2 RT.06/01 NO.61";
const OFFICE_AREA = "Gunung, Kebayoran Baru, Jakarta Selatan 12310";
const OFFICE_PHONE = "+62 815 1481 1120";
const OFFICE_WHATSAPP = "https://wa.me/6281514811120";

function LazyMap({ coords }) {
  const [MapContainer, setMapContainer] = useState(null);

  useEffect(() => {
    // Only load leaflet when this component mounts
    const load = async () => {
      const [leaflet] = await Promise.all([
        import("leaflet"),
        import("react-leaflet"),
        import("leaflet/dist/leaflet.css"),
      ]);
      const { MapContainer, TileLayer, Marker, Popup, useMap } = await import("react-leaflet");
      
      // Set default icon
      delete leaflet.default.Icon.Default.prototype._getIconUrl;
      leaflet.default.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      setMapContainer(() => MapContainer);
    };
    load();
  }, []);

  if (!MapContainer) {
    return (
      <div className="h-[400px] w-full rounded-md overflow-hidden border border-beton-200 shadow-sm sm:h-[450px] bg-beton-100 animate-pulse flex items-center justify-center">
        <div className="text-center text-beton-500">
          <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <p className="text-sm font-medium">Memuat peta...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[400px] w-full rounded-md overflow-hidden border border-beton-200 shadow-sm sm:h-[450px]">
      <MapContainer
        center={coords}
        zoom={15}
        scrollWheelZoom={false}
        tap={true}
        touchZoom={true}
        doubleClickZoom={false}
        boxZoom={false}
        keyboard={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
          minZoom={10}
          tileSize={256}
          zoomOffset={0}
          crossOrigin=""
        />
        <Marker position={coords}>
          <Popup
            closeButton={false}
            autoClose={false}
            closeOnClick={false}
            className="custom-popup"
          >
            <div className="p-2 min-w-[220px] text-center">
              <strong className="text-beton-900 text-base block mb-1">{OFFICE_NAME}</strong>
              <p className="text-sm text-beton-600 mb-1">{OFFICE_ADDRESS}</p>
              <p className="text-sm text-beton-600 mb-2">{OFFICE_AREA}</p>
              <a
                href={OFFICE_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-1.5 bg-emas-500 text-white text-xs font-semibold rounded hover:bg-emas-600 transition-colors"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default function MapsSection() {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSectionVisible(true); },
      { rootMargin: "100px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 sm:py-28 transition-opacity duration-500 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}
      id="maps"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-black tracking-tight text-beton-900 sm:text-4xl">
            Lokasi &amp; Area Layanan
          </h2>
          <p className="mt-3 max-w-2xl text-beton-600">
            Kantor &amp; workshop kami berlokasi di Jakarta Selatan, melayani proyek bore pile &amp; strauss pile di Jabodetabek, Karawang, Cikarang, Purwakarta, Serang, Cilegon, dan seluruh Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative" ref={mapRef}>
            {inView ? <LazyMap coords={OFFICE_COORDS} /> : (
              <div className="h-[400px] w-full rounded-md overflow-hidden border border-beton-200 shadow-sm sm:h-[450px] bg-beton-100 animate-pulse flex items-center justify-center">
                <div className="text-center text-beton-500">
                  <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-sm font-medium">Memuat peta...</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-beton-100">
              <h3 className="text-xl font-bold text-beton-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-emas-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
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
                <svg className="w-5 h-5 text-emas-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Hubungi Kami
              </h3>
              <div className="space-y-3">
                <a
                  href={`tel:${OFFICE_PHONE.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 p-3 bg-beton-50 rounded-md hover:bg-beton-100 transition-colors"
                >
                  <svg className="w-6 h-6 text-emas-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-beton-700 font-medium">{OFFICE_PHONE}</span>
                </a>
                <a
                  href={OFFICE_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-emas-500 text-white rounded-md hover:bg-emas-600 transition-colors"
                >
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382A10.244 10.244 0 0 0 12 3C6.477 3 2 7.477 2 13c0 2.005.646 3.875 1.718 5.471l-1.318 4.475 4.575-1.236A10.236 10.236 0 0 0 17.472 14.382z" />
                  </svg>
                  <span className="font-medium">Chat via WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-beton-100">
              <h3 className="text-xl font-bold text-beton-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-emas-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Area Layanan Utama
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Jakarta Pusat",
                  "Jakarta Utara",
                  "Jakarta Barat",
                  "Jakarta Selatan",
                  "Jakarta Timur",
                  "Bogor",
                  "Depok",
                  "Tangerang",
                  "Bekasi",
                  "Karawang",
                  "Cikarang",
                  "Purwakarta",
                  "Serang",
                  "Cilegon",
                  "Subang",
                  "Cianjur",
                ].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 bg-beton-50 text-beton-700 text-sm rounded-full border border-beton-200 hover:bg-emas-50 hover:border-emas-300 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
