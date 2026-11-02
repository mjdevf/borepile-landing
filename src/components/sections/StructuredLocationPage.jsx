import React from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import AnimatedSection from "../ui/AnimatedSection";
import Button from "../ui/Button";
import Navbar from "../layout/Navbar";
import Footer from "./Footer";
import WhatsAppFloatingButton from "../ui/WhatsAppFloatingButton";

class MapErrorBoundary extends React.Component {
  state = { err: false };
  static getDerivedStateFromError() {
    return { err: true };
  }
  render() {
    if (this.state.err) {
      return (
        <div className="flex h-96 items-center justify-center rounded-sm border border-border-muted bg-surface-container-low">
          <div className="text-center">
            <p className="mb-2 text-secondary">Peta gagal dimuat.</p>
            <button
              onClick={() => this.setState({ err: false })}
              className="text-sm text-accent underline"
            >
              Coba lagi
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const RichText = ({ parts }) => {
  if (typeof parts === "string") return parts;
  return parts.map((part, index) => {
    if (typeof part === "string") {
      return <React.Fragment key={index}>{part}</React.Fragment>;
    }
    const className = "font-semibold text-accent underline";
    return part.href.startsWith("/location/") ? (
      <Link key={index} to={part.href} className={className}>
        {part.text}
      </Link>
    ) : (
      <a key={index} href={part.href} className={className}>
        {part.text}
      </a>
    );
  });
};

const StructuredLocationPage = ({ location, content }) => {
  const officeCoords = [-6.2588, 106.8235];
  const whatsappUrl = content.cta.url;

  return (
    <main id="main-content" className="bg-background">
      <Navbar />
      <AnimatedSection className="bg-surface pt-[72px] pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <nav className="mb-6 text-sm text-secondary" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="transition-colors hover:text-accent">
                  Beranda
                </Link>
              </li>
              <li className="text-outline">/</li>
              <li className="font-semibold text-primary" aria-current="page">
                Jasa Bore Pile {location.city}
              </li>
            </ol>
          </nav>

          <h1 className="mb-6 text-4xl font-bold text-primary md:text-5xl">{content.h1}</h1>
          <div className="mb-10 space-y-4 text-lg leading-relaxed text-secondary">
            {content.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {content.area && (
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-primary">{content.area.heading}</h2>
              <p className="leading-relaxed text-secondary">{content.area.text}</p>
            </section>
          )}

          {content.districts && (
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-primary">{content.districts.heading}</h2>
              <p className="mb-4 leading-relaxed text-secondary">
                {content.districts.listText}
              </p>
              <p className="leading-relaxed text-secondary">
                <RichText parts={content.districts.closing} />
              </p>
            </section>
          )}

          {content.method && (
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-primary">{content.method.heading}</h2>
              <div className="space-y-4 leading-relaxed text-secondary">
                {content.method.paragraphs.map((paragraph, index) => (
                  <p key={index}>
                    <RichText parts={paragraph} />
                  </p>
                ))}
              </div>
            </section>
          )}

          {content.survey && (
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-primary">{content.survey.heading}</h2>
              <ul className="mb-4 list-disc space-y-2 pl-6 leading-relaxed text-secondary">
                {content.survey.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="leading-relaxed text-secondary">
                <RichText parts={content.survey.closing} />
              </p>
            </section>
          )}

          {content.price && (
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-primary">{content.price.heading}</h2>
              <p className="leading-relaxed text-secondary">{content.price.text}</p>
            </section>
          )}

          {content.projects && (
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-primary">
                Proyek kami di {location.city}
              </h2>
              <ul className="list-disc space-y-2 pl-6 leading-relaxed text-secondary">
                {content.projects.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {content.faq && content.faq.length > 0 && (
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-primary">{content.faqHeading}</h2>
              <div className="space-y-4">
                {content.faq.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-border-muted bg-surface-container-low p-5"
                  >
                    <h3 className="mb-2 font-bold text-primary">{item.q}</h3>
                    <p className="leading-relaxed text-secondary">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <p className="mb-10 leading-relaxed text-secondary">
            Lihat halaman{" "}
            <a href="/borepile-terdekat/" className="font-semibold text-accent underline">
              jasa borepile terdekat
            </a>{" "}
            untuk wilayah lain di Jabodetabek.
          </p>

          <div className="rounded-xl border border-border-muted bg-primary p-8 text-center text-on-primary md:p-12">
            <p className="mx-auto mb-6 max-w-2xl text-xl font-bold text-on-primary md:text-2xl">
              {content.cta.text}
            </p>
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              className="rounded-lg bg-accent text-on-primary hover:bg-accent/90"
            >
              {content.cta.button}
            </Button>
          </div>
        </div>
      </AnimatedSection>

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
                      <p className="mt-1 text-sm text-secondary">
                        Jl. Sunter Muara No.7, RT.7/RW.5, Sunter Agung, Tanjung Priok, Jakarta
                        Utara
                      </p>
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

export default StructuredLocationPage;
