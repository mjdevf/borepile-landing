import { services } from "../../data/content";

export default function Services() {
  return (
    <section
      id="layanan"
      className="border-b border-border-muted bg-surface px-4 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-5xl space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <h2
            className="text-2xl font-bold text-primary md:text-3xl"
            style={{ letterSpacing: "-0.01em", lineHeight: "1.3" }}
          >
            Layanan Kami
          </h2>
          <p className="max-w-3xl text-base text-secondary">
            Layanan pondasi inti yang dirancang untuk kondisi tanah menantang dan lingkungan urban yang membutuhkan kapasitas beban tinggi.
          </p>
        </div>

        {/* Services divide-y list */}
        <div className="divide-y divide-border-muted border-t border-b border-border-muted">
          {services.map((svc, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={svc.title}
                className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:gap-6"
              >
                {/* Number index */}
                <div className="font-mono text-base font-bold text-accent sm:w-10 shrink-0">
                  {num}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-primary sm:text-xl">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary sm:text-base">
                    {svc.desc}
                  </p>

                  {/* On-page SEO keywords */}
                  {svc.keywords && (
                    <p className="mt-3 font-mono text-xs text-secondary/80">
                      Kata kunci: {svc.keywords.slice(0, 3).join(", ")}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
