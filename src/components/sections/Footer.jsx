import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { hero, footer } from "../../data/content";
import Button from "../ui/Button";
import AnimatedSection from "../ui/AnimatedSection";

export default function Footer() {
  return (
    <AnimatedSection
      id="kontak"
      className="relative bg-beton-950 py-16 text-white sm:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emas-600 to-transparent opacity-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* CTA */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Siap Mulai Proyek?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-beton-200">
            Hubungi kami sekarang untuk konsultasi gratis dan survey lokasi.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Button
              href={`https://wa.me/${footer.wa}`}
              variant="fill"
              className="!bg-emerald-600 shadow-lg shadow-emerald-600/20 hover:!bg-emerald-700 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-beton-950"
            >
              Chat WhatsApp
            </Button>
          </motion.div>
        </div>

        {/* Brand area */}
        <div className="mx-auto mb-12 max-w-lg text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emas-600 to-emas-800 text-lg font-black text-white">
            MJ
          </div>
          <p className="text-sm font-bold text-white">{footer.company}</p>
          <p className="mt-1 text-xs text-beton-200">{footer.tagline}</p>
          <p className="mt-1 text-xs italic text-beton-300">
            {hero.owner} — {hero.ownerTitle}
          </p>
        </div>

        {/* Contact grid */}
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Phone, label: footer.phone, sub: "Telepon", link: `tel:${footer.phone.replace(/\s+/g, "")}` },
            { icon: Mail, label: footer.email, sub: "Email", link: `mailto:${footer.email}` },
            { icon: Clock, label: footer.hours, sub: "Jam Kerja" },
            { icon: MapPin, label: footer.address, sub: "Alamat" },
          ].map((item, i) => {
            const Icon = item.icon;
            const Wrapper = item.link ? "a" : "div";
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Wrapper
                  href={item.link}
                  className="flex items-center gap-3 rounded-md border border-beton-800 bg-beton-900/50 p-4 transition-all duration-300 hover:border-emas-600/30 hover:bg-beton-900"
                >
                  <Icon className="h-5 w-5 shrink-0 text-emas-500" />
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-beton-300">
                      {item.sub}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold truncate">{item.label}</p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {/* Blog section */}
        <div className="mx-auto mt-14 max-w-lg text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-beton-300">
            Blog & Artikel
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {footer.blogLinks.map((blog) => (
              <a
                key={blog.href}
                href={blog.href}
                className="text-xs text-beton-200 transition-colors hover:text-emas-500"
              >
                {blog.title}
              </a>
            ))}
          </div>
        </div>

        {/* Service Areas section */}
        <div className="mx-auto mt-10 max-w-lg text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-beton-300">
            Wilayah Layanan
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {footer.serviceLinks.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="text-xs text-beton-200 transition-colors hover:text-emas-500"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-beton-800 pt-8 text-center">
          <p className="text-xs text-beton-400">
            &copy; {new Date().getFullYear()} {footer.company}. All rights reserved.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
