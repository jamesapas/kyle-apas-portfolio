import Image from "next/image";
import Link from "next/link";

const heroImages = [
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", alt: "Casa Ventus" },
  { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80", alt: "Meridian Tower" },
  { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80", alt: "Loft & Light" },
  { src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&q=80", alt: "Verdant Pavilion" },
  { src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80", alt: "Villa Soleil" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80", alt: "The Arcade Hub" },
];

function Row({
  num,
  children,
  className = "",
  noBorder = false,
}: {
  num: string;
  children: React.ReactNode;
  className?: string;
  noBorder?: boolean;
}) {
  return (
    <div className={`flex border-b border-line ${noBorder ? "border-b-0" : ""} ${className}`}>
      <div className="w-12 lg:w-20 shrink-0 border-r border-line flex items-center justify-center">
        <span className="font-body text-[10px] text-mid-grey tabular-nums tracking-widest rotate-0">
          {num}
        </span>
      </div>
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO: numbered rows ── */}
      <section className="border-b border-line" style={{ minHeight: "calc(100svh - 56px)" }}>

        {/* Row 01 — Name */}
        <Row num="01" className="flex-1">
          <div className="flex-1 flex flex-col lg:flex-row">
            {/* Name block */}
            <div className="flex-1 flex items-end px-6 lg:px-10 py-8 lg:py-12">
              <h1
                className="font-heading font-semibold text-near-black leading-[0.9] tracking-tight uppercase"
                style={{ fontSize: "clamp(3.5rem, 10.5vw, 9.5rem)" }}
              >
                JOHN
                <br />
                KYLE{" "}
                <span style={{ color: "var(--olive)" }}>APAS</span>
              </h1>
            </div>

            {/* Side metadata block */}
            <div className="lg:w-64 xl:w-80 border-t lg:border-t-0 lg:border-l border-line flex flex-col justify-between px-6 py-6">
              <div className="space-y-4">
                <div>
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-mid-grey mb-1">
                    Studio
                  </p>
                  <p className="font-body text-sm text-charcoal leading-relaxed">
                    Architecture Studio<br />Cebu, Philippines
                  </p>
                </div>
                <div>
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-mid-grey mb-1">
                    Established
                  </p>
                  <p className="font-body text-sm text-charcoal">2010</p>
                </div>
                <div>
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-mid-grey mb-1">
                    License
                  </p>
                  <p className="font-body text-sm text-charcoal">UAP Accredited</p>
                </div>
              </div>
              <div className="pt-4 border-t border-line">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-mid-grey">
                  14°35′N 121°00′E
                </p>
              </div>
            </div>
          </div>
        </Row>

        {/* Row 02 — Tagline + CTA */}
        <Row num="02">
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between px-6 lg:px-10 py-4 gap-4">
            <p className="font-body text-sm text-charcoal max-w-md leading-relaxed">
              Designing spaces that inspire, endure, and connect people to their
              environment — across Cebu and beyond.
            </p>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/projects"
                className="flex items-center gap-2 px-5 py-2.5 bg-olive text-white font-body text-[11px] tracking-[0.2em] uppercase hover:bg-olive-dark transition-colors"
              >
                View Work
                <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="flex items-center px-5 py-2.5 border border-line font-body text-[11px] tracking-[0.2em] uppercase text-charcoal hover:border-near-black hover:text-near-black transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </Row>

        {/* Row 03 — Scrolling images */}
        <Row num="03">
          <div className="flex-1 overflow-hidden group py-3">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
              {[...heroImages, ...heroImages].map((img, i) => (
                <div
                  key={i}
                  className="relative shrink-0"
                  style={{ width: "360px", height: "220px", paddingRight: "6px" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                </div>
              ))}
            </div>
          </div>
        </Row>

        {/* Row 04 — Stats */}
        <Row num="04" noBorder>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 divide-x divide-line">
            {[
              { n: "80+", label: "Projects Completed" },
              { n: "15", label: "Years of Practice" },
              { n: "4", label: "Design Specialties" },
              { n: "12+", label: "Design Awards" },
            ].map(({ n, label }) => (
              <div key={label} className="flex flex-col justify-center px-6 py-5">
                <p
                  className="font-heading font-semibold text-near-black leading-none"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                >
                  {n}
                </p>
                <p className="font-body text-[10px] text-mid-grey uppercase tracking-[0.2em] mt-1.5">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Row>
      </section>

      {/* ── ABOUT ── */}
      <section className="border-b border-line">
        {/* Section header */}
        <div className="flex items-stretch border-b border-line">
          <div className="w-12 lg:w-20 shrink-0 border-r border-line flex items-center justify-center py-4">
            <span className="font-body text-[10px] text-mid-grey tabular-nums">A</span>
          </div>
          <div className="flex items-center px-6 lg:px-10 py-4 gap-4 flex-1">
            <span className="font-heading text-xs tracking-[0.25em] uppercase text-mid-grey">
              About
            </span>
            <span className="flex-1 h-px bg-line" />
            <span className="font-body text-[10px] text-mid-grey tabular-nums">02 / 05</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative border-b lg:border-b-0 lg:border-r border-line overflow-hidden" style={{ minHeight: "460px" }}>
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=85"
              alt="John Kyle Apas"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Olive overlay strip */}
            <div
              className="absolute bottom-0 left-0 right-0 flex items-center px-6 py-4"
              style={{ background: "var(--olive)" }}
            >
              <p className="font-body text-[10px] text-white/70 tracking-[0.25em] uppercase">
                John Kyle Apas · Architect · UAP
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="px-8 lg:px-12 py-12 flex flex-col justify-center">
            <h2
              className="font-heading font-semibold text-near-black leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}
            >
              Crafting Spaces,<br />
              <span style={{ color: "var(--olive)" }}>Shaping Lives</span>
            </h2>

            <div className="w-8 h-0.5 bg-olive mb-8" />

            <div className="space-y-4 font-body text-sm text-charcoal leading-[1.9] mb-10">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-line border border-line">
              {[
                { label: "PRC Lic. No.", value: "00000" },
                { label: "Member Since", value: "2010" },
                { label: "Specialties", value: "4 Disciplines" },
                { label: "Location", value: "Cebu, PH" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white px-4 py-4">
                  <p className="font-body text-[9px] tracking-[0.25em] uppercase text-mid-grey mb-1">
                    {label}
                  </p>
                  <p className="font-body text-sm font-medium text-near-black">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="border-b border-line bg-near-black py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-8 h-0.5 bg-olive mx-auto mb-8" />
          <blockquote
            className="font-heading font-medium text-white leading-snug"
            style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}
          >
            &ldquo;Architecture is the learned game, correct and magnificent,
            of forms assembled in the light.&rdquo;
          </blockquote>
          <p
            className="font-body text-[10px] tracking-[0.4em] uppercase mt-8"
            style={{ color: "var(--olive-light)" }}
          >
            — Le Corbusier
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="border-b border-line">
        {/* Section header */}
        <div className="flex items-stretch border-b border-line">
          <div className="w-12 lg:w-20 shrink-0 border-r border-line flex items-center justify-center py-4">
            <span className="font-body text-[10px] text-mid-grey tabular-nums">S</span>
          </div>
          <div className="flex items-center px-6 lg:px-10 py-4 gap-4 flex-1">
            <span className="font-heading text-xs tracking-[0.25em] uppercase text-mid-grey">
              Services
            </span>
            <span className="flex-1 h-px bg-line" />
            <Link
              href="/services"
              className="font-body text-[10px] tracking-[0.2em] uppercase text-olive hover:text-olive-dark transition-colors flex items-center gap-1.5"
            >
              All Services →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-line border-b border-line">
          {[
            {
              num: "01",
              title: "Residential",
              icon: (
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-9 h-9">
                  <path d="M5 35V20L20 8l15 12v15H5z" />
                  <rect x="13" y="24" width="14" height="11" />
                  <path d="M20 8V4" />
                </svg>
              ),
              desc: "Bespoke homes and private residences designed around how you live.",
            },
            {
              num: "02",
              title: "Commercial",
              icon: (
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-9 h-9">
                  <rect x="6" y="8" width="28" height="27" />
                  <path d="M6 14h28M6 20h28M6 26h28M13 8v27M20 8v27M27 8v27" />
                </svg>
              ),
              desc: "Dynamic workspaces and mixed-use developments for vibrant communities.",
            },
            {
              num: "03",
              title: "Sustainable",
              icon: (
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-9 h-9">
                  <circle cx="20" cy="20" r="14" />
                  <path d="M20 6C14 10 10 14 10 20s4 10 10 14M20 6c6 4 10 8 10 14s-4 10-10 14" />
                  <path d="M6 20h28" />
                  <path d="M14 10c0 7 3 10 6 10s6-3 6-10" />
                </svg>
              ),
              desc: "Passive-first, eco-conscious design integrating BERDE and LEED standards.",
            },
            {
              num: "04",
              title: "Interior Design",
              icon: (
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-9 h-9">
                  <rect x="4" y="4" width="32" height="32" />
                  <path d="M4 16h32M16 4v32" />
                  <rect x="22" y="22" width="10" height="10" />
                </svg>
              ),
              desc: "Space planning and material curation that transforms interiors into experiences.",
            },
          ].map(({ num, title, icon, desc }) => (
            <div key={num} className="group p-8 hover:bg-off-white transition-colors duration-200">
              <div className="flex items-start justify-between mb-6">
                <div className="text-olive transition-transform duration-200 group-hover:-translate-y-0.5">
                  {icon}
                </div>
                <span className="font-body text-[10px] text-mid-grey tabular-nums">{num}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-near-black mb-2">{title}</h3>
              <p className="font-body text-sm text-charcoal leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="border-b border-line">
        {/* Section header */}
        <div className="flex items-stretch border-b border-line">
          <div className="w-12 lg:w-20 shrink-0 border-r border-line flex items-center justify-center py-4">
            <span className="font-body text-[10px] text-mid-grey tabular-nums">W</span>
          </div>
          <div className="flex items-center px-6 lg:px-10 py-4 gap-4 flex-1">
            <span className="font-heading text-xs tracking-[0.25em] uppercase text-mid-grey">
              Selected Works
            </span>
            <span className="flex-1 h-px bg-line" />
            <Link
              href="/projects"
              className="font-body text-[10px] tracking-[0.2em] uppercase text-olive hover:text-olive-dark transition-colors flex items-center gap-1.5"
            >
              All Projects →
            </Link>
          </div>
        </div>

        {/* 3-column project grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line">
          {[
            {
              src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
              title: "Casa Ventus",
              cat: "Residential",
              loc: "Busay, Cebu · 2023",
            },
            {
              src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85",
              title: "Loft & Light Studio",
              cat: "Interior Design",
              loc: "Banilad, Cebu · 2023",
            },
            {
              src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&q=85",
              title: "Verdant Pavilion",
              cat: "Sustainable",
              loc: "Minglanilla · 2021",
            },
          ].map(({ src, title, cat, loc }) => (
            <div key={title} className="group relative overflow-hidden cursor-pointer">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-near-black/0 group-hover:bg-near-black/40 transition-colors duration-300" />
              </div>
              <div className="px-6 py-5 border-t border-line flex items-start justify-between">
                <div>
                  <h3 className="font-heading text-base font-semibold text-near-black group-hover:text-olive transition-colors">
                    {title}
                  </h3>
                  <p className="font-body text-[11px] text-mid-grey mt-0.5">{loc}</p>
                </div>
                <span
                  className="font-body text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 shrink-0 mt-0.5"
                  style={{ background: "var(--off-white)", color: "var(--olive)" }}
                >
                  {cat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="flex flex-col sm:flex-row items-stretch">
        <div className="flex-1 px-8 lg:px-12 py-10 flex flex-col justify-center border-b sm:border-b-0 sm:border-r border-line">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-mid-grey mb-2">
            Start a Project
          </p>
          <h2 className="font-heading font-semibold text-near-black text-2xl lg:text-3xl">
            Have a project in mind?
          </h2>
        </div>
        <div className="flex items-center px-8 lg:px-12 py-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-olive text-white font-body text-[11px] tracking-[0.2em] uppercase hover:bg-olive-dark transition-colors"
          >
            Get in Touch
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
