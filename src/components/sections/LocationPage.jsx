import React from "react";
import { useParams, Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import AnimatedSection from "../ui/AnimatedSection";
import Button from "../ui/Button";
import { locationPages, getLocationDetail } from "../../data/content";
import WhatsAppFloatingButton from "../ui/WhatsAppFloatingButton";
import Navbar from "../layout/Navbar";
import Footer from "./Footer";
import { ChevronDown } from "lucide-react";

class MapErrorBoundary extends React.Component {
  state = { err: false };
  static getDerivedStateFromError() { return { err: true }; }
  render() {
    if (this.state.err)
      return (
        <div className="flex h-96 items-center justify-center rounded-sm border border-border-muted bg-surface-container-low">
          <div className="text-center">
            <p className="mb-2 text-secondary">Peta gagal dimuat.</p>
            <button onClick={() => this.setState({ err: false })} className="text-sm text-accent underline">Coba lagi</button>
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
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-primary">Lokasi Tidak Ditemukan</h1>
          <p className="text-secondary">Halaman layanan ini mungkin belum tersedia.</p>
          <Link to="/" className="mt-6 inline-block text-sm text-accent underline">Kembali ke Beranda</Link>
        </div>
      </div>
    );
  }

  const officeCoords = [-6.2588, 106.8235];
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=6281514811120";

  return (
    <main id="main-content" className="bg-background">
      <Navbar />
      {/* Hero */}
      <AnimatedSection className="bg-surface pt-[72px] pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-secondary" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="transition-colors hover:text-accent">Beranda</Link></li>
              <li className="text-outline">/</li>
              <li className="font-semibold text-primary" aria-current="page">{location.city}</li>
            </ol>
          </nav>

          <h1 className="mb-6 text-4xl font-bold text-primary md:text-5xl">{location.headline}</h1>
          <p className="mb-8 text-lg leading-relaxed text-secondary">{location.intro}</p>

          {/* Expanded SEO content */}
          <div className="mb-12 space-y-4 text-base leading-relaxed text-secondary">
            {getLocationDetail(location).paragraph.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Related locations / internal linking */}
          <div className="mb-12 rounded-sm border border-border-muted bg-surface-container-low p-6">
            <h2 className="mb-4 text-xl font-bold text-primary">Layanan Bore Pile di Kota Lainnya</h2>
            <div className="flex flex-wrap gap-2">
              {getLocationDetail(location).others.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="rounded-full border border-border-muted bg-surface px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  {l.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Services grid */}
          <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {location.services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-border-muted bg-surface-container-low p-5 transition-all hover:border-outline hover:shadow-sm"
              >
                <h3 className="mb-2 font-bold text-primary">{service}</h3>
                <p className="text-sm text-secondary">
                  Layanan bore pile {service.toLowerCase()} profesional untuk {location.city}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Area covered */}
      <AnimatedSection className="bg-surface-container-low py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-primary">
            Area Terlayani di {location.city}
          </h2>
          <div className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {location.areaCovered.map((area, index) => (
              <div
                key={index}
                className="rounded-full border border-border-muted bg-surface px-4 py-2.5 text-center text-sm font-medium text-primary"
              >
                {area}
              </div>
            ))}
          </div>

          {location.soilInfo && (
            <>
              <h2 className="mb-6 text-center text-3xl font-bold text-primary">
                Kondisi Tanah di {location.city}
              </h2>
              <div className="mx-auto mb-12 max-w-3xl rounded-lg border border-border-muted bg-surface p-6 text-sm leading-relaxed text-secondary">
                <p>{location.soilInfo}</p>
                <p className="mt-4">Setiap proyek memerlukan analisis tanah yang akurat. Kami melakukan survey lokasi gratis untuk menentukan spesifikasi bore pile yang tepat -- tidak ada tebak-tebakan, semua berdasarkan data lapangan.</p>
              </div>
            </>
          )}

          {location.faq && location.faq.length > 0 && (
            <>
              <h2 className="mb-6 text-center text-3xl font-bold text-primary">
                Pertanyaan Umum
              </h2>
              <div className="mx-auto mb-12 max-w-3xl space-y-4">
                {location.faq.map((item, index) => (
                  <details
                    key={index}
                    className="group rounded-lg border border-border-muted bg-surface"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-4 text-sm font-semibold text-primary">
                      {item.q}
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="border-t border-border-muted p-4 text-sm text-secondary">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </>
          )}
        </div>
      </AnimatedSection>

      {/* CTA section */}
      <AnimatedSection className="bg-surface-container-low py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-xl border border-border-muted bg-surface p-8 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] md:p-12">
            <h2 className="mb-6 text-center text-3xl font-bold text-primary">
              Konsultasi Gratis untuk {location.city}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-primary">Mengapa Pilih Kami?</h3>
                <ul className="space-y-3 text-secondary">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>Berpengalaman 12+ tahun di Jakarta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>250+ titik pengeboran selesai di Jabodetabek</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>Survey lokasi gratis tanpa biaya</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>Hasil pengeboran sesuai spesifikasi</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-primary">Hubungi Kami</h3>
                <div className="space-y-4">
                  <Button
                    href="tel:+6281514811120"
                    variant="secondary"
                    size="md"
                    className="w-full rounded-lg"
                  >
                    Telepon: +62 815 1481 1120
                  </Button>
                  <Button
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                    className="w-full rounded-lg bg-primary text-on-primary hover:bg-secondary"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382A10.244 10.244 0 0 0 12 3C6.477 3 2 7.477 2 13c0 2.005.646 3.875 1.718 5.471l-1.318 4.475 4.575-1.236A10.236 10.236 0 0 0 17.472 14.382z" />
                    </svg>
                    Chat WhatsApp
                  </Button>
                  <p className="text-center text-xs text-secondary">
                    Harga estimasi, bukan harga pasti. Penawaran resmi diberikan setelah survey lokasi gratis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Map */}
      <AnimatedSection className="bg-surface py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="h-96 overflow-hidden rounded-lg border border-border-muted">
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
                      <strong className="text-primary">Majujaya Bore Pile</strong>
                      <p className="mt-1 text-sm text-secondary">Jl. Sunter Muara No.7, RT.7/RW.5, Sunter Agung, Tanjung Priok, Jakarta Utara</p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block rounded-lg bg-primary px-4 py-2 text-sm font-medium text-on-primary transition-colors hover:bg-on-surface-variant"
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

      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
};

export default LocationPage;
