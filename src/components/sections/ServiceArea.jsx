import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { serviceArea, locationPages } from "../../data/content";

// Build slug lookup from locationPages data
const slugMap = {};
locationPages.forEach((loc) => {
  slugMap[loc.city] = loc.slug;
});

export default function ServiceArea() {
  return (
    <section className="relative overflow-hidden border-y border-border-muted bg-primary px-4 py-16 md:px-10 md:py-24">
      {/* Radial glow */}
      <div className="pointer-events-none absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-tertiary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2
            className="text-3xl font-semibold text-on-primary"
            style={{ letterSpacing: "-0.01em", lineHeight: "1.3" }}
          >
            Area Layanan
          </h2>
          <p className="mt-3 text-base text-on-primary-container">
            Klik kota untuk info layanan bore pile & strauss pile di wilayah tersebut.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {serviceArea.map((city, i) => {
            const slug = slugMap[city];
            const Tag = slug ? motion.a : motion.span;

            return (
              <Tag
                key={city}
                {...(slug ? { href: `/location/${slug}` } : {})}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.08 }}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-on-primary/20 bg-on-primary/5 px-4 py-3 text-sm font-medium text-on-primary/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] transition-all hover:border-tertiary/40 hover:bg-primary-container hover:text-on-primary"
              >
                <MapPin className="h-4 w-4 shrink-0 text-accent-gold" />
                {city}
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
