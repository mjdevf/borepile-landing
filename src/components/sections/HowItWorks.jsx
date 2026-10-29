import { howItWorks } from "../../data/content";

export default function HowItWorks() {
  return (
    <section className="border-b border-border-muted bg-surface px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-3">
          <span className="font-mono text-xs text-accent">Alur Pengeboran</span>
          <h2 className="text-display-sm leading-[1.1] tracking-tight text-primary md:text-display">
            Cara Kami Bekerja
          </h2>
          <p className="max-w-2xl text-base text-secondary">
            Proses terstruktur dari survey lapangan, kalkulasi teknis, hingga serah terima pondasi.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative border-l-2 border-border-muted ml-3 pl-6 sm:ml-4 sm:pl-8 space-y-10 py-2">
          {howItWorks.map((step) => (
            <div key={step.step} className="relative">
              {/* Circular tick on the axis */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-accent bg-surface" />

              <span className="font-mono text-xs font-semibold text-accent">
                TAHAP {String(step.step).padStart(2, "0")}
              </span>
              <h3 className="mt-1 text-lg font-bold text-primary">
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-secondary sm:text-base">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
