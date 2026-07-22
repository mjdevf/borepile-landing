import { footer } from "../../data/content";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import { navLinks } from "../../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border-muted bg-surface-container-low">
      {/* Contact + CTA section */}
      <section id="kontak" className="border-b border-border-muted bg-surface-container-high px-4 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left — Contact Info */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="space-y-3">
              <h2
                className="text-3xl font-semibold text-primary"
                style={{ letterSpacing: "-0.01em", lineHeight: "1.3" }}
              >
                Hubungi Kami
              </h2>
              <p className="text-base text-secondary">
                Berikan spesifikasi proyek Anda. Tim geoteknik kami akan menganalisis kebutuhan dan mengusulkan strategi pondasi yang optimal.
              </p>
            </div>

            {/* Contact info card */}
            <div className="rounded-lg border border-border-muted bg-surface p-6 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)]">
              <h3 className="mb-5 text-xl font-bold text-primary">Kontak Langsung</h3>
              <div className="space-y-4 text-sm text-secondary">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-[0.05em] text-on-surface-variant">Kantor</p>
                    <p className="text-on-surface">{footer.address}</p>
                  </div>
                </div>
                <div className="h-px bg-border-muted" />
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-[0.05em] text-on-surface-variant">WhatsApp</p>
                    <p className="font-mono text-on-surface">+62 815 1481 1120</p>
                  </div>
                </div>
                <div className="h-px bg-border-muted" />
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-[0.05em] text-on-surface-variant">Email</p>
                    <p className="font-mono text-on-surface">{footer.email}</p>
                  </div>
                </div>
                <div className="h-px bg-border-muted" />
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-[0.05em] text-on-surface-variant">Jam Kerja</p>
                    <p className="text-on-surface">{footer.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="lg:col-span-7">
            <form
              action="https://formspree.io/f/mjljzowz"
              method="POST"
              className="rounded-lg border border-border-muted bg-surface p-6 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] md:p-8"
            >
              {/* Honeypot — invisible to users, traps bots */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="_hp">Do not fill</label>
                <input id="_hp" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.05em] text-secondary">
                      Nama / Perusahaan
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Nama atau Perusahaan"
                      className="w-full rounded border border-outline-variant bg-surface-container-lowest p-2.5 text-sm text-on-surface transition-colors focus:border-tertiary-container focus:outline-none focus:ring-1 focus:ring-tertiary-container"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.05em] text-secondary">
                      No. Telepon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+62..."
                      className="w-full rounded border border-outline-variant bg-surface-container-lowest p-2.5 text-sm text-on-surface transition-colors focus:border-tertiary-container focus:outline-none focus:ring-1 focus:ring-tertiary-container"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.05em] text-secondary">
                    Layanan
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full appearance-none rounded border border-outline-variant bg-surface-container-lowest p-2.5 text-sm text-on-surface transition-colors focus:border-tertiary-container focus:outline-none focus:ring-1 focus:ring-tertiary-container"
                  >
                    <option>Jasa Bore Pile Mesin</option>
                    <option>Strauss Pile Manual</option>
                    <option>Sondir / Soil Testing</option>
                    <option>General Consultation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.05em] text-secondary">
                    Detail Proyek
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    required
                    placeholder="Lokasi, estimasi jumlah titik, kondisi tanah..."
                    className="w-full rounded border border-outline-variant bg-surface-container-lowest p-2.5 text-sm text-on-surface transition-colors focus:border-tertiary-container focus:outline-none focus:ring-1 focus:ring-tertiary-container"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-primary text-xs font-semibold uppercase tracking-[0.05em] text-on-primary transition-all hover:scale-[0.98] active:scale-[0.96]"
                >
                  Kirim Permintaan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer bottom */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-5 md:px-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <h4 className="mb-4 text-2xl font-bold text-primary" style={{ letterSpacing: "-0.02em" }}>
            {footer.company}
          </h4>
          <p className="mb-6 max-w-sm text-sm text-on-surface-variant">
            {footer.tagline}. Kontraktor pondasi dalam profesional yang menghadirkan solusi pengeboran mekanis dan manual yang andal di seluruh Indonesia.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <h5 className="mb-2 text-xs font-semibold uppercase tracking-[0.05em] text-secondary">Navigasi</h5>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-on-surface-variant transition-colors hover:text-tertiary-container">
              {link.label}
            </a>
          ))}
        </div>

        {/* Blog & Artikel */}
        <div className="flex flex-col gap-2">
          <h5 className="mb-2 text-xs font-semibold uppercase tracking-[0.05em] text-secondary">Blog & Artikel</h5>
          {footer.blogLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-on-surface-variant transition-colors hover:text-tertiary-container">
              {link.title}
            </a>
          ))}
        </div>

        {/* Wilayah Layanan */}
        <div className="flex flex-col gap-2">
          <h5 className="mb-2 text-xs font-semibold uppercase tracking-[0.05em] text-secondary">Wilayah Layanan</h5>
          {footer.serviceLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-on-surface-variant transition-colors hover:text-tertiary-container">
              {link.title.trim()}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright & Privacy */}
      <div className="border-t border-border-muted px-4 py-6 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 md:flex-row">
          <p className="font-mono text-xs text-secondary">
            &copy; 2026 {footer.company}. Engineering Integrity &amp; Structural Trust.
          </p>
          <p className="font-mono text-[10px] text-on-surface-variant max-w-md text-center md:text-right">
            {footer.privacy}
          </p>
        </div>
      </div>
    </footer>
  );
}
