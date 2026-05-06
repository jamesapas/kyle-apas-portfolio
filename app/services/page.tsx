import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — John Kyle Apas",
  description: "Architecture and design services by John Kyle Apas.",
};

const services = [
  {
    num: "01",
    title: "Residential Architecture",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.1" className="w-12 h-12">
        <path d="M7 49V29L28 12l21 17v20H7z" />
        <rect x="17" y="34" width="22" height="15" />
        <path d="M28 12V5" />
      </svg>
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    offerings: [
      "Custom home design & planning",
      "Villa & estate architecture",
      "Condominium interiors",
      "Renovation & adaptive reuse",
      "3D visualization & walkthroughs",
    ],
  },
  {
    num: "02",
    title: "Commercial Architecture",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.1" className="w-12 h-12">
        <rect x="8" y="10" width="40" height="38" />
        <path d="M8 20h40M8 30h40M8 40h40M19 10v38M28 10v38M37 10v38" />
        <rect x="21" y="42" width="14" height="6" />
      </svg>
    ),
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    offerings: [
      "Office & corporate headquarters",
      "Retail & hospitality design",
      "Mixed-use developments",
      "Institutional buildings",
      "Feasibility & site analysis",
    ],
  },
  {
    num: "03",
    title: "Sustainable Design",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.1" className="w-12 h-12">
        <circle cx="28" cy="28" r="20" />
        <path d="M28 8C20 14 14 20 14 28s6 14 14 20M28 8c8 6 14 12 14 20s-6 14-14 20" />
        <path d="M8 28h40" />
        <path d="M18 14c0 9 5 14 10 14s10-5 10-14" />
      </svg>
    ),
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt nemo enim ipsam voluptatem.",
    offerings: [
      "Passive solar design strategies",
      "BERDE / LEED certification support",
      "Biophilic integration",
      "Rainwater & solar systems",
      "Low-impact material sourcing",
    ],
  },
  {
    num: "04",
    title: "Interior Architecture",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.1" className="w-12 h-12">
        <rect x="6" y="6" width="44" height="44" />
        <path d="M6 22h44M22 6v44" />
        <rect x="30" y="30" width="16" height="16" />
        <path d="M6 38h16M14 22v16" />
      </svg>
    ),
    desc: "Ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur.",
    offerings: [
      "Space planning & layout",
      "Material & finish selection",
      "Furniture & lighting design",
      "Custom joinery & millwork",
      "FF&E procurement",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "Deep conversation about vision, lifestyle, constraints, and aspirations for the space.",
  },
  {
    step: "02",
    title: "Schematic Design",
    desc: "Concepts developed into schematics, 3D models, and material palettes for your review.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Approved designs refined into construction documents, coordinated with all consultants.",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Construction administration and site oversight ensuring every detail is executed precisely.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Page header */}
      <section className="border-b border-line">
        <div className="flex items-stretch border-b border-line">
          <div className="w-12 lg:w-20 shrink-0 border-r border-line flex items-center justify-center py-4">
            <span className="font-body text-[10px] text-mid-grey">S</span>
          </div>
          <div className="flex items-center px-6 lg:px-10 py-4 gap-4 flex-1">
            <span className="font-heading text-xs tracking-[0.25em] uppercase text-mid-grey">
              What I Offer
            </span>
            <span className="flex-1 h-px bg-line" />
          </div>
        </div>

        <div className="flex items-stretch">
          <div className="w-12 lg:w-20 shrink-0 border-r border-line" />
          <div className="flex-1 px-6 lg:px-10 py-10 lg:py-16">
            <h1
              className="font-heading font-semibold text-near-black leading-tight"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              Services
            </h1>
          </div>
          <div className="hidden lg:flex flex-col justify-end border-l border-line px-8 py-10 w-64 xl:w-72">
            <p className="font-body text-sm text-charcoal leading-relaxed">
              End-to-end architecture and design services — from initial concept through
              completed construction.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="border-b border-line divide-y divide-line">
        {services.map(({ num, title, icon, desc, offerings }) => (
          <div key={num} className="flex group">
            <div className="w-12 lg:w-20 shrink-0 border-r border-line flex items-start justify-center pt-8">
              <span className="font-body text-[10px] text-mid-grey tabular-nums">{num}</span>
            </div>
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-line">
              {/* Icon + title */}
              <div className="px-8 py-8 flex flex-col gap-5 group-hover:bg-off-white transition-colors duration-200">
                <div className="text-olive">{icon}</div>
                <h2 className="font-heading text-xl lg:text-2xl font-semibold text-near-black leading-tight">
                  {title}
                </h2>
              </div>
              {/* Description */}
              <div className="px-8 py-8">
                <p className="font-body text-sm text-charcoal leading-[1.9]">{desc}</p>
                <p className="font-body text-sm text-charcoal leading-[1.9] mt-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              {/* Offerings */}
              <div className="px-8 py-8">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-mid-grey mb-5">
                  Scope Includes
                </p>
                <ul className="space-y-3">
                  {offerings.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-sm text-charcoal">
                      <span className="mt-2 w-3 h-px bg-olive shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="border-b border-line">
        <div className="flex items-stretch border-b border-line">
          <div className="w-12 lg:w-20 shrink-0 border-r border-line flex items-center justify-center py-4">
            <span className="font-body text-[10px] text-mid-grey">P</span>
          </div>
          <div className="flex items-center px-6 lg:px-10 py-4 gap-4 flex-1">
            <span className="font-heading text-xs tracking-[0.25em] uppercase text-mid-grey">
              How We Work
            </span>
            <span className="flex-1 h-px bg-line" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-line">
          {process.map(({ step, title, desc }) => (
            <div key={step} className="px-8 py-10">
              <p
                className="font-heading font-semibold leading-none mb-5"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--olive)" }}
              >
                {step}
              </p>
              <h3 className="font-heading text-xl font-semibold text-near-black mb-3">{title}</h3>
              <p className="font-body text-sm text-charcoal leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-stretch">
        <div className="flex-1 px-8 lg:px-12 py-10 border-b sm:border-b-0 sm:border-r border-line">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-mid-grey mb-2">
            Ready to Begin?
          </p>
          <h2 className="font-heading font-semibold text-near-black text-2xl lg:text-3xl">
            Start your project today.
          </h2>
        </div>
        <div className="flex items-center px-8 lg:px-12 py-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-olive text-white font-body text-[11px] tracking-[0.2em] uppercase hover:bg-olive-dark transition-colors"
          >
            Contact John Kyle
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
