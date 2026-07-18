import { motion } from "motion/react";
import { portfolioImages } from "../../data/content";

const PROJECT_TYPES = ["Commercial", "Residential", "Infrastructure"];
const STATUSES = ["Completed", "In-Progress"];

export default function Portfolio() {
  // Show first 4 images as bento grid
  const projects = portfolioImages.slice(0, 4);

  return (
    <section
      id="portfolio"
      className="bg-surface px-4 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl space-y-12">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3">
            <h2
              className="max-w-2xl text-3xl font-semibold text-primary"
              style={{ letterSpacing: "-0.01em", lineHeight: "1.3" }}
            >
              Portofolio Proyek
            </h2>
            <p className="max-w-2xl text-base text-secondary">
              Proyek pondasi yang telah kami selesaikan di berbagai kondisi geoteknik.
            </p>
          </div>
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            <button className="rounded-full border-2 border-primary-container bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.05em] text-primary-container transition-colors hover:bg-surface-container-low">
              All Projects
            </button>
            <button className="rounded-full border border-border-muted bg-transparent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.05em] text-secondary transition-colors hover:border-secondary">
              Completed
            </button>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid h-auto grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 md:h-[560px]">
          {/* Hero project — spans 2 cols, 2 rows */}
          <div className="group relative overflow-hidden rounded-lg border border-border-muted shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] md:col-span-2 md:row-span-2">
            <img
              src={projects[0]?.src || "/images/portfolio/01.jpg"}
              alt={projects[0]?.alt || "Proyek bore pile"}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e]/90 via-[#191c1e]/40 to-transparent" />
            <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-surface/30 bg-surface/20 px-2.5 py-1 font-mono text-xs text-on-primary backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-success-green" />
              Completed
            </div>
            <div className="absolute bottom-0 left-0 flex w-full flex-col items-start gap-2 p-5 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="mb-1 inline-block rounded border border-surface/30 bg-surface/20 px-1.5 py-0.5 font-mono text-[10px] text-on-primary backdrop-blur-sm">
                  COMMERCIAL HIGH-RISE
                </span>
                <h3 className="text-2xl font-bold text-on-primary">Jakarta Business District</h3>
              </div>
              <div className="flex items-end gap-1.5 font-mono text-xs text-on-primary">
                <span className="rounded border border-on-primary/20 bg-primary/50 px-2 py-1 backdrop-blur-sm">
                  Ø 60cm
                </span>
                <span className="rounded border border-on-primary/20 bg-primary/50 px-2 py-1 backdrop-blur-sm">
                  Depth 24m
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative h-[260px] overflow-hidden rounded-lg border border-border-muted shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] md:h-auto">
            <img
              src={projects[1]?.src || "/images/portfolio/02.jpg"}
              alt={projects[1]?.alt || "Strauss pile manual"}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e]/90 via-[#191c1e]/40 to-transparent" />
            <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-surface/30 bg-surface/20 px-2.5 py-1 font-mono text-xs text-on-primary backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-safety-orange" />
              In-Progress
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <span className="mb-1 inline-block rounded border border-surface/30 bg-surface/20 px-1.5 py-0.5 font-mono text-[10px] text-on-primary backdrop-blur-sm">
                RESIDENTIAL
              </span>
              <h3 className="text-lg font-bold text-on-primary">Suburban Housing Complex</h3>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative h-[260px] overflow-hidden rounded-lg border border-border-muted shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] md:h-auto">
            <img
              src={projects[2]?.src || "/images/portfolio/03.jpg"}
              alt={projects[2]?.alt || "Pengecoran bore pile"}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e]/90 via-[#191c1e]/40 to-transparent" />
            <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-surface/30 bg-surface/20 px-2.5 py-1 font-mono text-xs text-on-primary backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-success-green" />
              Completed
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <span className="mb-1 inline-block rounded border border-surface/30 bg-surface/20 px-1.5 py-0.5 font-mono text-[10px] text-on-primary backdrop-blur-sm">
                INFRASTRUCTURE
              </span>
              <h3 className="text-lg font-bold text-on-primary">Bridge Abutment Support</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
