"use client";

import { useState } from "react";

const projectTypes = [
  "Residential — Custom Home",
  "Residential — Renovation",
  "Commercial — Office / Retail",
  "Commercial — Hospitality",
  "Sustainable Design",
  "Interior Architecture",
  "Other / Not Sure Yet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", projectType: "", message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      {/* Page header */}
      <section className="border-b border-line">
        <div className="flex items-stretch border-b border-line">
          <div className="w-12 lg:w-20 shrink-0 border-r border-line flex items-center justify-center py-4">
            <span className="font-body text-[10px] text-mid-grey">C</span>
          </div>
          <div className="flex items-center px-6 lg:px-10 py-4 gap-4 flex-1">
            <span className="font-heading text-xs tracking-[0.25em] uppercase text-mid-grey">
              Reach Out
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
              Contact
            </h1>
          </div>
        </div>
      </section>

      {/* Two-column: info + form */}
      <div className="grid grid-cols-1 lg:grid-cols-5 border-b border-line">

        {/* Info column */}
        <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-line">
          {/* Studio info */}
          <div className="border-b border-line px-8 py-8">
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-mid-grey mb-4">Studio</p>
            <p className="font-heading text-lg font-semibold text-near-black mb-1">Apas Architects Studio</p>
            <div className="font-body text-sm text-charcoal leading-relaxed space-y-0.5">
              <p>Unit 12, The Link Residences</p>
              <p>IT Park, Lahug</p>
              <p>Cebu City, 6000</p>
              <p>Philippines</p>
            </div>
          </div>

          {/* Contact */}
          <div className="border-b border-line px-8 py-8">
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-mid-grey mb-4">Contact</p>
            <div className="space-y-3">
              <a
                href="mailto:johnkyle@apasarchitects.ph"
                className="flex items-center gap-3 font-body text-sm text-charcoal hover:text-olive transition-colors"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-olive shrink-0">
                  <rect x="1" y="3" width="14" height="10" rx="1" />
                  <path d="M1 3l7 6 7-6" />
                </svg>
                johnkyle@apasarchitects.ph
              </a>
              <a
                href="tel:+639170000000"
                className="flex items-center gap-3 font-body text-sm text-charcoal hover:text-olive transition-colors"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-olive shrink-0">
                  <path d="M2 2h4l1.5 4-2 1.5A10 10 0 009 11.5L10.5 9.5 14 11v4a1 1 0 01-1 1C6 16 0 10 0 3a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                +63 917 000 0000
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="border-b border-line px-8 py-8">
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-mid-grey mb-4">Office Hours</p>
            <div className="space-y-2 font-body text-sm text-charcoal">
              <div className="flex justify-between gap-4">
                <span>Monday – Friday</span>
                <span className="text-near-black tabular-nums">09:00 – 18:00</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-near-black tabular-nums">10:00 – 14:00</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sunday</span>
                <span>By appointment</span>
              </div>
            </div>
          </div>

          {/* Coordinates */}
          <div className="px-8 py-6">
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-mid-grey mb-2">Coordinates</p>
            <p className="font-body text-sm text-charcoal tabular-nums">10.3157° N, 123.8854° E</p>
            <p className="font-body text-[10px] text-mid-grey mt-1">Cebu City, Philippines</p>
          </div>
        </div>

        {/* Form column */}
        <div className="lg:col-span-3 px-8 lg:px-12 py-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
              <div
                className="w-14 h-14 border border-line flex items-center justify-center mb-6 text-olive"
                style={{ borderColor: "var(--olive)" }}
              >
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 10l4 4 8-8" />
                </svg>
              </div>
              <h2 className="font-heading font-semibold text-near-black text-2xl mb-3">Message Received</h2>
              <p className="font-body text-sm text-charcoal leading-relaxed max-w-sm">
                Thank you for reaching out. John Kyle will reply within 1–2 business days.
              </p>
            </div>
          ) : (
            <>
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-mid-grey mb-8">
                Send a Message
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
                    { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com", required: true },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block font-body text-[9px] tracking-[0.25em] uppercase text-mid-grey mb-2">
                        {field.label} {field.required && "*"}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full border-b border-line bg-transparent py-3 font-body text-sm text-near-black placeholder:text-mid-grey focus:outline-none focus:border-near-black transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block font-body text-[9px] tracking-[0.25em] uppercase text-mid-grey mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+63 9XX XXX XXXX"
                    className="w-full border-b border-line bg-transparent py-3 font-body text-sm text-near-black placeholder:text-mid-grey focus:outline-none focus:border-near-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-body text-[9px] tracking-[0.25em] uppercase text-mid-grey mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-line bg-transparent py-3 font-body text-sm text-near-black focus:outline-none focus:border-near-black transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a project type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-body text-[9px] tracking-[0.25em] uppercase text-mid-grey mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your project, timeline, and budget range…"
                    className="w-full border-b border-line bg-transparent py-3 font-body text-sm text-near-black placeholder:text-mid-grey focus:outline-none focus:border-near-black transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-olive text-white font-body text-[11px] tracking-[0.25em] uppercase hover:bg-olive-dark transition-colors"
                  >
                    Send Message
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                      <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
