import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects — John Kyle Apas",
  description: "Selected architectural works by John Kyle Apas.",
};

const projects = [
  {
    id: 1, title: "Casa Ventus", category: "Residential", location: "Busay, Cebu City",
    year: "2023", area: "480 sqm",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
  },
  {
    id: 2, title: "Meridian Tower", category: "Commercial", location: "IT Park, Cebu City",
    year: "2022", area: "12,000 sqm",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85",
  },
  {
    id: 3, title: "Loft & Light Studio", category: "Interior Design", location: "Banilad, Cebu City",
    year: "2023", area: "220 sqm",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85",
  },
  {
    id: 4, title: "Verdant Pavilion", category: "Sustainable", location: "Minglanilla, Cebu",
    year: "2021", area: "650 sqm",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&q=85",
  },
  {
    id: 5, title: "Villa Soleil", category: "Residential", location: "Mactan Island, Cebu",
    year: "2022", area: "350 sqm",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85",
  },
  {
    id: 6, title: "The Arcade Hub", category: "Commercial", location: "Mandaue City, Cebu",
    year: "2020", area: "8,500 sqm",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85",
  },
];

const categories = ["All", "Residential", "Commercial", "Sustainable", "Interior Design"];

export default function ProjectsPage() {
  return (
    <div>
      {/* Page header */}
      <section className="border-b border-line">
        <div className="flex items-stretch border-b border-line">
          <div className="w-12 lg:w-20 shrink-0 border-r border-line flex items-center justify-center py-4">
            <span className="font-body text-[10px] text-mid-grey">W</span>
          </div>
          <div className="flex items-center px-6 lg:px-10 py-4 gap-4 flex-1">
            <span className="font-heading text-xs tracking-[0.25em] uppercase text-mid-grey">
              Portfolio
            </span>
            <span className="flex-1 h-px bg-line" />
            <span className="font-body text-[10px] text-mid-grey tabular-nums">
              {projects.length} Projects
            </span>
          </div>
        </div>

        <div className="flex items-stretch">
          <div className="w-12 lg:w-20 shrink-0 border-r border-line" />
          <div className="flex-1 px-6 lg:px-10 py-10 lg:py-16">
            <h1
              className="font-heading font-semibold text-near-black leading-tight"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              Selected<br />
              <span style={{ color: "var(--olive)" }}>Works</span>
            </h1>
          </div>
          <div className="hidden lg:flex flex-col justify-end border-l border-line px-8 py-10 w-64 xl:w-72">
            <p className="font-body text-sm text-charcoal leading-relaxed">
              A curated selection of residential, commercial, sustainable, and interior
              projects across Cebu and the Philippines.
            </p>
          </div>
        </div>
      </section>

      {/* Filter strip */}
      <div className="border-b border-line flex items-stretch overflow-x-auto">
        <div className="w-12 lg:w-20 shrink-0 border-r border-line hidden sm:flex items-center justify-center">
          <span className="font-body text-[9px] text-mid-grey">↓</span>
        </div>
        {categories.map((cat, i) => (
          <button
            key={cat}
            className={`shrink-0 border-r border-line px-5 py-3.5 font-body text-[10px] tracking-[0.2em] uppercase transition-colors ${
              i === 0 ? "bg-olive text-white" : "text-charcoal hover:bg-off-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-line divide-y md:divide-y-0">
        {projects.map((project, i) => (
          <article
            key={project.id}
            className={`group cursor-pointer border-b border-line ${
              i % 3 !== 2 ? "lg:border-r" : ""
            } ${i % 2 !== 1 ? "md:border-r lg:border-r-0" : ""}`}
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-near-black/0 group-hover:bg-near-black/45 transition-colors duration-300 flex items-end p-6">
                <p className="font-body text-sm text-white/0 group-hover:text-white/80 transition-all duration-300 translate-y-2 group-hover:translate-y-0 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
                </p>
              </div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span
                  className="font-body text-[9px] tracking-[0.25em] uppercase px-2.5 py-1"
                  style={{ background: "var(--olive)", color: "white" }}
                >
                  {project.category}
                </span>
                <span className="font-body text-[10px] text-white/60 tabular-nums">
                  0{i + 1}/{String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="px-6 py-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-heading text-lg font-semibold text-near-black group-hover:text-olive transition-colors leading-tight">
                  {project.title}
                </h2>
                <p className="font-body text-xs text-mid-grey mt-1">
                  {project.location} · {project.year}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-body text-[10px] text-mid-grey tabular-nums">{project.area}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-stretch border-b border-line">
        <div className="flex-1 px-8 lg:px-12 py-10 border-b sm:border-b-0 sm:border-r border-line">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-mid-grey mb-2">
            Next Step
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
            Start a Conversation
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
