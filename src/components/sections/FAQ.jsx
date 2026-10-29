import { faq } from "../../data/content";

export default function FAQ() {
  return (
    <section className="border-b border-border-muted bg-surface px-4 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-3">
          <span className="font-mono text-xs text-accent">Tanya Jawab</span>
          <h2 className="text-display-sm leading-[1.1] tracking-tight text-primary md:text-display">
            Pertanyaan Umum (FAQ)
          </h2>
          <p className="max-w-2xl text-base text-secondary">
            Jawaban lengkap seputar biaya, durasi pekerjaan, metode bore pile, dan survei lokasi gratis.
          </p>
        </div>

        {/* 100% open flat divide-y list matching FAQPage Schema */}
        <div className="divide-y divide-border-muted border-t border-b border-border-muted">
          {faq.map((item) => (
            <div key={item.q} className="py-6">
              <h3 className="text-base font-bold text-primary sm:text-lg">
                {item.q}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary sm:text-base">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
