import { trustBar } from "../../data/content";

export default function TrustBar() {
  return (
    <section className="border-y border-border-muted bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="grid grid-cols-2 divide-y divide-border-muted sm:grid-cols-4 sm:divide-y-0 sm:divide-x sm:divide-border-muted">
          {trustBar.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center px-4 py-8 text-center"
            >
              <div
                className="text-3xl font-bold text-primary lg:text-4xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                {item.value}
                <span className="ml-0.5 text-xl font-medium text-accent lg:text-2xl">
                  {item.suffix}
                </span>
              </div>
              <div className="mt-2 font-mono text-xs text-secondary">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
