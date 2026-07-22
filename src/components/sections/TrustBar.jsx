import FadeInWrap from "../ui/FadeInWrap";
import { Drill, Calendar } from "lucide-react";
import { trustBar } from "../../data/content";

const icons = { Drill, Calendar };

export default function TrustBar() {
  return (
    <section className="border-y border-border-muted bg-surface-container-low px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {trustBar.items.map((item, i) => {
            const Icon = icons[item.icon] || Drill;
            return (
              <FadeInWrap key={item.label} delay={i * 0.15} className="flex flex-col items-center text-center"
              >
                <Icon className="mb-3 h-8 w-8 text-primary" />
                <span className="text-5xl font-bold tracking-tight text-primary">
                  {item.value}{item.suffix}
                </span>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-secondary">
                  {item.label}
                </p>
              </FadeInWrap>
            );
          })}
        </div>
      </div>
    </section>
  );
}
