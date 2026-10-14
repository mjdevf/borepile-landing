import { about } from "../../data/content";

export default function AboutUs() {
  return (
    <section id="tentang" className="bg-surface px-5 py-16 md:px-10 md:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-12 md:gap-x-6 md:gap-y-0">
        {/* Intro + vision */}
        <div className="flex flex-col gap-8 md:col-span-5">
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] leading-[1.1] tracking-tight text-primary md:text-[44px]">
              {about.title}
            </h2>
            <p className="max-w-[44ch] text-base leading-[1.65] text-secondary md:text-lg">
              {about.desc}
            </p>
          </div>

          <figure className="m-0 flex flex-col gap-3.5 border-l-[3px] border-accent pl-5 md:pl-7">
            <blockquote className="quote-serif m-0 text-xl leading-[1.45] text-primary md:text-2xl md:leading-[1.4]">
              &ldquo;{about.vision}&rdquo;
            </blockquote>
            <figcaption className="text-base">
              <span className="font-bold text-primary">Subiyanto</span>
              <span className="text-secondary">, Pimpinan Majujaya Bore Pile</span>
            </figcaption>
          </figure>

          <p className="text-xs leading-relaxed text-secondary">{about.legacyNote}</p>
        </div>

        {/* Numbered highlights */}
        <div className="border-t border-primary md:col-span-6 md:col-start-7 md:self-start">
          {about.highlights.map((item, i) => (
            <div key={item.title} className="flex gap-4 border-b border-border-muted py-5 md:gap-6 md:py-6">
              <span className="w-7 shrink-0 font-mono text-[13px] leading-6 text-accent md:w-9">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[17px] font-bold leading-snug text-primary md:text-lg">{item.title}</h3>
                <p className="mt-1 text-[15px] leading-[1.55] text-secondary md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
