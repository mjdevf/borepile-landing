import { ArrowRight } from "lucide-react";
import { services } from "../../data/content";

const byTitle = (t) => services.find((s) => s.title === t);

const FEATURED = byTitle("Borepile Pondasi");
const REST_ORDER = ["Strauss Pile Manual", "Borepile Mesin", "Soil Investigation", "Sumur Bor Air", "Pengeboran Irigasi"];
const REST = REST_ORDER.map(byTitle).filter(Boolean);

/* Desktop tile styles: second item is the accent tile, others are quiet */
const TILE = [
  "bg-surface-container text-primary",
  "bg-accent text-white",
  "border border-border-muted bg-surface text-primary",
  "border border-border-muted bg-surface text-primary",
  "border border-border-muted bg-surface text-primary",
];
const TILE_COPY = ["text-secondary", "text-accent-soft", "text-secondary", "text-secondary", "text-secondary"];

function Keywords({ svc, className = "" }) {
  if (!svc.keywords) return null;
  return (
    <p className={`font-mono text-xs ${className}`}>
      Kata kunci: {svc.keywords.slice(0, 3).join(", ")}
    </p>
  );
}

export default function Services() {
  return (
    <section id="layanan" className="bg-surface px-5 py-16 md:px-10 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex max-w-2xl flex-col gap-3 md:mb-12 md:gap-4">
          <h2 className="text-display-sm leading-[1.1] tracking-tight text-primary md:text-display">
            Layanan Pengeboran dan Pondasi
          </h2>
          <p className="max-w-[56ch] text-base leading-relaxed text-secondary md:text-lg">
            Dari rumah dua lantai sampai gedung komersial, pilih metode yang sesuai beban bangunan dan akses lokasi.
          </p>
        </div>

        {/* Featured card */}
        <div className="grid gap-4 md:grid-cols-12 md:gap-6">
          <article className="flex flex-col justify-between gap-8 rounded-sm bg-primary p-7 text-on-primary md:col-span-5 md:p-10">
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-extrabold leading-[1.1] tracking-tight md:text-4xl">{FEATURED.title}</h3>
              <p className="text-base leading-relaxed text-on-primary-subtle">{FEATURED.desc}</p>
              <Keywords svc={FEATURED} className="text-on-primary-muted" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-7">
                <div>
                  <div className="font-mono text-xl font-medium">30-100 cm</div>
                  <div className="mt-1 text-xs text-on-primary-muted">Diameter</div>
                </div>
                <div>
                  <div className="font-mono text-xl font-medium">30 m</div>
                  <div className="mt-1 text-xs text-on-primary-muted">Kedalaman maksimal</div>
                </div>
              </div>
              <a
                href="#kalkulator"
                className="inline-flex min-h-11 items-center gap-2 text-base font-semibold text-on-primary underline underline-offset-[5px]"
              >
                Hitung estimasi biaya
                <ArrowRight className="h-[18px] w-[18px]" />
              </a>
            </div>
          </article>

          {/* Desktop tiles */}
          <div className="hidden gap-6 md:col-span-7 md:grid md:grid-cols-2">
            {REST.map((svc, i) => (
              <article
                key={svc.title}
                className={`flex flex-col gap-2.5 rounded-sm p-7 ${TILE[i]} ${i === REST.length - 1 ? "col-span-2" : ""}`}
              >
                <h3 className="text-xl font-bold leading-tight">{svc.title}</h3>
                <p className={`text-base leading-relaxed ${TILE_COPY[i]}`}>{svc.desc}</p>
                <Keywords svc={svc} className={i === 1 ? "text-white/80" : "text-secondary/80"} />
              </article>
            ))}
          </div>
        </div>

        {/* Mobile list */}
        <div className="mt-3 border-t border-primary md:hidden">
          {REST.map((svc) => (
            <div key={svc.title} className="flex flex-col gap-1.5 border-b border-border-muted py-5">
              <h3 className="text-xl font-bold leading-tight">{svc.title}</h3>
              <p className="text-base leading-[1.55] text-secondary">{svc.desc}</p>
              <Keywords svc={svc} className="text-secondary/80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
