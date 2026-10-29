import { footer } from "../../data/content";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { navLinks } from "../../data/content";

function handleSubmit(e) {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  if (fd.get("_gotcha")) return;
  const text = `Halo Majujaya Bore Pile, saya ${fd.get("name")} (${fd.get("phone")}). Ingin konsultasi ${fd.get("service")}. ${fd.get("details")}`;
  window.location.href = `https://api.whatsapp.com/send/?phone=${footer.wa}&text=${encodeURIComponent(text)}`;
}

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
            <div className="rounded-sm border border-border-muted bg-surface p-6">
              <h3 className="mb-5 text-xl font-bold text-primary">Kontak Langsung</h3>
              <div className="space-y-4 text-sm text-secondary">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container-low text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="mb-0.5 font-mono text-xs text-secondary">Kantor</p>
                    <p className="text-primary">{footer.address}</p>
                  </div>
                </div>
                <div className="h-px bg-border-muted" />
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container-low text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="mb-0.5 font-mono text-xs text-secondary">WhatsApp</p>
                    <p className="font-mono text-primary">+62 815 1481 1120</p>
                  </div>
                </div>
                <div className="h-px bg-border-muted" />
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container-low text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="mb-0.5 font-mono text-xs text-secondary">Email</p>
                    <p className="font-mono text-primary">{footer.email}</p>
                  </div>
                </div>
                <div className="h-px bg-border-muted" />
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container-low text-primary">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="mb-0.5 font-mono text-xs text-secondary">Jam Kerja</p>
                    <p className="text-primary">{footer.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-sm border border-border-muted bg-surface p-6 md:p-8"
            >
              {/* Honeypot — invisible to users, traps bots */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="_hp">Do not fill</label>
                <input id="_hp" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-secondary">
                      Nama / Perusahaan
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Nama atau Perusahaan"
                      className="w-full rounded-sm border border-border-muted bg-surface p-2.5 text-sm text-primary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block font-mono text-xs text-secondary">
                      No. Telepon / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+62..."
                      className="w-full rounded-sm border border-border-muted bg-surface p-2.5 text-sm text-primary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block font-mono text-xs text-secondary">
                    Pilihan Layanan
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full appearance-none rounded-sm border border-border-muted bg-surface p-2.5 text-sm text-primary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent cursor-pointer"
                  >
                    <option>Jasa Bore Pile Mesin</option>
                    <option>Strauss Pile Manual</option>
                    <option>Sondir / Soil Testing</option>
                    <option>Konsultasi Umum</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details" className="mb-1.5 block font-mono text-xs text-secondary">
                    Detail Kebutuhan Proyek
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    required
                    placeholder="Lokasi proyek, estimasi jumlah titik, kondisi tanah..."
                    className="w-full rounded-sm border border-border-muted bg-surface p-2.5 text-sm text-primary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-sm bg-accent text-sm font-semibold text-on-primary transition-colors hover:bg-accent-dark active:scale-[0.98] cursor-pointer"
                >
                  Kirim Permintaan via WhatsApp
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
          <h3 className="mb-4 text-2xl font-bold text-primary" style={{ letterSpacing: "-0.02em" }}>
            {footer.company}
          </h3>
          <p className="mb-6 max-w-sm text-sm text-on-surface-variant">
            {footer.tagline}. Kontraktor pondasi dalam profesional yang menghadirkan solusi pengeboran mekanis dan manual yang andal di seluruh Indonesia.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 font-mono text-xs font-bold text-primary">Navigasi</h3>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-secondary transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>

        {/* Blog & Artikel */}
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 font-mono text-xs font-bold text-primary">Blog & Artikel</h3>
          {footer.blogLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-secondary transition-colors hover:text-accent">
              {link.title}
            </a>
          ))}
        </div>

        {/* Wilayah Layanan */}
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 font-mono text-xs font-bold text-primary">Wilayah Layanan</h3>
          {footer.serviceLinks.map((link) => (
            <a key={`${link.title}-${link.href}`} href={link.href} className="text-sm text-secondary transition-colors hover:text-accent">
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
          <p className="font-mono text-xs text-secondary">{footer.legacyNote}</p>
          <p className="font-mono text-xs text-on-surface-variant max-w-md text-center md:text-right">
            {footer.privacy}
          </p>
        </div>
      </div>
    </footer>
  );
}
