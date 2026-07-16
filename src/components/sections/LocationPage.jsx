import React from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import AnimatedSection from "../ui/AnimatedSection";
import { locationPages } from "../../data/content";
import WhatsAppFloatingButton from "../ui/WhatsAppFloatingButton";
import Navbar from "../layout/Navbar";

class MapErrorBoundary extends React.Component {
  state = { err: false };
  static getDerivedStateFromError() { return { err: true }; }
  render() {
    if (this.state.err)
      return (
        <div className="h-96 flex items-center justify-center bg-beton-50 rounded-md border border-beton-200">
          <div className="text-center">
            <p className="text-beton-500 mb-2">Peta gagal dimuat.</p>
            <button onClick={() => this.setState({ err: false })} className="text-emas-600 underline text-sm">Coba lagi</button>
          </div>
        </div>
      );
    return this.props.children;
  }
}

// Leaflet icon fix
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const LocationPage = () => {
  const { slug } = useParams();
  const location = locationPages.find((loc) => loc.slug === slug);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-beton-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-beton-900 mb-4">Lokasi Tidak Ditemukan</h1>
          <p className="text-beton-700">Halaman layanan ini mungkin belum tersedia.</p>
        </div>
      </div>
    );
  }

  const officeCoords = [-6.2588, 106.8235];
  const whatsappUrl = "https://wa.me/6281514811120";

  return (
    <main className="bg-beton-50">
      <Navbar />
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="mb-6 text-sm text-beton-600" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-[#5A5A5A]">
              <li>
                <a href="/" className="hover:text-emas-600 transition-colors">
                  Beranda
                </a>
              </li>
              <li className="text-[#B0B0B0]">/</li>
              <li>
                <a href="/#layanan" className="hover:text-emas-600 transition-colors">
                  Layanan
                </a>
              </li>
              <li className="text-[#B0B0B0]">/</li>
              <li className="text-beton-900 font-semibold" aria-current="page">
                {location.city}
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-beton-900 mb-6">
            {location.headline}
          </h1>

          <p className="text-lg text-beton-700 mb-8 leading-relaxed">
            {location.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {location.services.map((service, index) => (
              <div
                key={index}
                className="bg-beton-50 p-6 rounded-md border border-beton-200 hover:border-emas-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-beton-900 mb-2">{service}</h3>
                <p className="text-sm text-beton-700">
                  Layanan bore pile {service.toLowerCase()} profesional untuk {location.city}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-beton-900 mb-8 text-center">
            Area Terlayani di {location.city}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {location.areaCovered.map((area, index) => (
              <div
                key={index}
                className="bg-emas-50 text-beton-800 px-4 py-3 rounded-full text-center font-medium border border-emas-200"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 bg-beton-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-beton-900 mb-6 text-center">
              Konsultasi Gratis untuk {location.city}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-beton-900 mb-4">Mengapa Pilih Kami?</h3>
                <ul className="space-y-3 text-beton-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emas-500 rounded-full mt-2" />
                    <span>Berpengalaman 12+ tahun di Jakarta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emas-500 rounded-full mt-2" />
                    <span>250+ proyek selesai di seluruh Jabodetabek</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emas-500 rounded-full mt-2" />
                    <span>Survey lokasi gratis tanpa biaya</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emas-500 rounded-full mt-2" />
                    <span>Garansi hasil pengeboran</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-beton-900 mb-4">Hubungi Kami</h3>
                <div className="space-y-4">
                  <a
                                      href="tel:+6281514811120"
                                      className="block w-full bg-beton-100 hover:bg-beton-200 text-beton-900 font-semibold py-3 px-6 rounded-md transition-colors text-center"
                                      >
                                      Telepon: +62 815 1481 1120
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-emas-500 hover:bg-emas-600 text-white font-semibold py-3 px-6 rounded-md transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382A10.244 10.244 0 0 0 12 3C6.477 3 2 7.477 2 13c0 2.005.646 3.875 1.718 5.471l-1.318 4.475 4.575-1.236A10.236 10.236 0 0 0 17.472 14.382z" />
                      <path d="M17.472 14.382A10.244 10.244 0 0 0 12 3C6.477 3 2 7.477 2 13c0 2.005.646 3.875 1.718 5.471l-1.318 4.475 4.575-1.236A10.236 10.236 0 0 0 17.472 14.382z" />
                      <path d="M15.5 8.5L9 15l-2-1 7.5-7.5L18 10.5l-2.5-1z" />
                    </svg>
                    Chat WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-96 rounded-md overflow-hidden border border-beton-200">
            <MapErrorBoundary>
            <MapContainer
              center={officeCoords}
              zoom={15}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={officeCoords}>
                <Popup>
                  <div className="p-3">
                    <strong className="text-beton-900">Majujaya Bore Pile</strong>
                    <p className="text-sm text-beton-700 mt-1">Jl. Ophir Dalam 2 RT.06/01 NO.61, Gunung, Kebayoran Baru, Jakarta Selatan</p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-2 bg-emas-500 text-white text-sm font-medium rounded hover:bg-emas-600 transition-colors"
                    >
                      Hubungi via WhatsApp
                    </a>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
            </MapErrorBoundary>
          </div>
        </div>
      </AnimatedSection>

      <WhatsAppFloatingButton />
    </main>
  );
};

export default LocationPage;