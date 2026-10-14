import { trustBar } from "../../data/content";

export default function TrustBar() {
  return (
    <section aria-label="Angka kerja" className="bg-surface">
      <div className="mx-auto max-w-[1360px] px-5 md:px-10">
        <dl className="m-0 grid grid-cols-2 border-y border-t-primary border-b-border-muted md:grid-cols-4">
          {trustBar.items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col gap-1.5 py-5 md:gap-2.5 md:py-8 ${
                i % 2 === 1 ? "border-l border-border-muted pl-4" : ""
              } ${i > 1 ? "border-t border-border-muted md:border-t-0" : ""} ${
                i > 0 ? "md:border-l md:pl-8" : ""
              } ${i === 2 ? "pl-0 md:pl-8" : ""}`}
            >
              <dt className="text-sm leading-tight text-secondary">{item.label}</dt>
              <dd className="m-0 whitespace-nowrap font-mono text-[22px] font-medium leading-none md:text-[32px]">
                {item.value}
                <span className="ml-1 text-[0.6em] text-accent">{item.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
