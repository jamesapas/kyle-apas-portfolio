import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-near-black text-white border-t border-line">
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">

        {/* Brand cell */}
        <div className="border-b md:border-b-0 md:border-r border-white/10 px-8 lg:px-10 py-10">
          <p className="font-heading font-semibold text-3xl text-white leading-none mb-3">JKA</p>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "var(--olive-light)" }}>
            John Kyle Apas · Architect
          </p>
          <p className="font-body text-sm leading-relaxed" style={{ color: "#888884" }}>
            Crafting spaces that endure, inspire, and connect people to their environment.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              {
                label: "LinkedIn",
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
              {
                label: "Instagram",
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                ),
              },
            ].map(({ label, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-olive hover:text-olive transition-colors"
                style={{ color: "#888884" }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="border-b md:border-b-0 md:border-r border-white/10 px-8 lg:px-10 py-10">
          <p className="font-body text-[9px] tracking-[0.3em] uppercase mb-5" style={{ color: "var(--mid-grey)" }}>
            Navigation
          </p>
          <ul className="space-y-3">
            {navLinks.map(({ href, label }, i) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-3 font-body text-sm transition-colors hover:text-olive"
                  style={{ color: "#888884" }}
                >
                  <span className="font-body text-[9px] tabular-nums" style={{ color: "var(--olive)" }}>
                    0{i + 1}
                  </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="px-8 lg:px-10 py-10">
          <p className="font-body text-[9px] tracking-[0.3em] uppercase mb-5" style={{ color: "var(--mid-grey)" }}>
            Get in Touch
          </p>
          <div className="space-y-2 font-body text-sm mb-6" style={{ color: "#888884" }}>
            <p>johnkyle@apasarchitects.ph</p>
            <p>+63 917 000 0000</p>
            <p className="leading-snug">IT Park, Lahug<br />Cebu City, 6000, Philippines</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.25em] uppercase px-5 py-2.5 border border-white/20 hover:border-olive hover:text-olive transition-colors"
            style={{ color: "#888884" }}
          >
            Start a Project →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-8 lg:px-10 py-4">
        <p className="font-body text-[10px] tabular-nums" style={{ color: "#555550" }}>
          © 2025 John Kyle Apas. All rights reserved.
        </p>
        <p className="font-body text-[10px]" style={{ color: "#555550" }}>
          UAP Accredited · PRC Lic. No. 00000
        </p>
      </div>
    </footer>
  );
}
