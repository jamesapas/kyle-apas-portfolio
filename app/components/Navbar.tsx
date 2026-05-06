"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const currentIndex = links.findIndex((l) => l.href === pathname);
  const indexLabel = currentIndex >= 0 ? `0${currentIndex + 1}` : "01";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <nav className="flex items-stretch h-14">

        {/* Logo cell */}
        <Link
          href="/"
          className="flex items-center gap-3 px-6 lg:px-8 border-r border-line group shrink-0"
        >
          <span className="font-heading text-base font-semibold tracking-tight text-near-black group-hover:text-olive transition-colors">
            JKA
          </span>
          <span className="hidden sm:block text-[10px] font-body text-mid-grey tracking-[0.25em] uppercase">
            · Architect
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-stretch flex-1">
          {links.map(({ href, label }, i) => {
            const active = pathname === href;
            return (
              <li key={href} className="border-r border-line">
                <Link
                  href={href}
                  className={`flex items-center h-full px-6 font-body text-[11px] tracking-[0.2em] uppercase transition-colors duration-150 ${
                    active
                      ? "bg-olive text-white"
                      : "text-charcoal hover:bg-off-white"
                  }`}
                >
                  <span className={`text-[9px] mr-2 font-body tabular-nums ${active ? "text-white/60" : "text-mid-grey"}`}>
                    0{i + 1}
                  </span>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right cell: index counter + hire me */}
        <div className="ml-auto flex items-stretch">
          <div className="hidden lg:flex items-center px-5 border-l border-line">
            <span className="font-body text-[10px] text-mid-grey tabular-nums tracking-widest">
              [{indexLabel}/0{links.length}]
            </span>
          </div>
          <Link
            href="/contact"
            className="hidden md:flex items-center px-6 border-l border-line font-body text-[11px] tracking-[0.2em] uppercase text-white bg-near-black hover:bg-olive transition-colors duration-200"
          >
            Hire Me
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col items-center justify-center gap-1.5 w-14 border-l border-line"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-near-black transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-px bg-near-black transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-near-black transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-14 bg-white z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col divide-y divide-line">
          {links.map(({ href, label }, i) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center justify-between px-6 py-6 font-heading text-3xl font-medium transition-colors ${
                    active ? "text-olive" : "text-near-black"
                  }`}
                >
                  <span>{label}</span>
                  <span className="font-body text-xs text-mid-grey tabular-nums">0{i + 1}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="px-6 py-8 border-t border-line">
          <Link
            href="/contact"
            className="block w-full text-center py-4 bg-near-black text-white font-body text-[11px] tracking-[0.25em] uppercase hover:bg-olive transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  );
}
