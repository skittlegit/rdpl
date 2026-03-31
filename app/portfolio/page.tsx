"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PageShell from "../components/PageShell";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Corporate", "Fleet", "Retail", "LED", "Events", "Healthcare"];

// To add a project image: place file at public/portfolio/your-image.jpg
// and set image: "/portfolio/your-image.jpg" in the project entry below.
const projects = [
  {
    title: "Multi-floor Office Signage",
    client: "BFSI Headquarters, Hyderabad",
    cat: "Corporate",
    accent: "from-zinc-800 to-ink",
    detail: "Wayfinding, reception branding, lift lobbies across 12 floors",
    // image: "/portfolio/bfsi-office.jpg",
  },
  {
    title: "Fleet Wrap Campaign",
    client: "National Logistics Company",
    cat: "Fleet",
    accent: "from-zinc-700 to-zinc-900",
    detail: "250 trucks, full-body wraps over 3-week rollout",
    // image: "/portfolio/fleet-wrap.jpg",
  },
  {
    title: "Retail Store Branding",
    client: "Fashion Retail Chain",
    cat: "Retail",
    accent: "from-ink-soft to-ink",
    detail: "Complete shopfit graphics for 40 stores pan-India",
    // image: "/portfolio/retail-store.jpg",
  },
  {
    title: "LED Facade Lettering",
    client: "IT Campus, Bengaluru",
    cat: "LED",
    accent: "from-vermillion-dark to-ink",
    detail: "Illuminated 3D channel letters, 18-metre wide facade",
    // image: "/portfolio/led-facade.jpg",
  },
  {
    title: "Exhibition Booth Graphics",
    client: "Manufacturing Expo, Mumbai",
    cat: "Events",
    accent: "from-vermillion to-ink",
    detail: "90 sq.m. tension fabric display system",
    // image: "/portfolio/exhibition-booth.jpg",
  },
  {
    title: "Hospital Wayfinding System",
    client: "600-bed Multi-Specialty Hospital",
    cat: "Healthcare",
    accent: "from-zinc-700 to-ink",
    detail: "Complete wayfinding across 8 floors, 4 wings",
    // image: "/portfolio/hospital-wayfinding.jpg",
  },
  {
    title: "Corporate Reception Wall",
    client: "Global IT Services Firm",
    cat: "Corporate",
    accent: "from-ink to-zinc-800",
    detail: "Laser-cut stainless steel logo with backlit wall",
    // image: "/portfolio/reception-wall.jpg",
  },
  {
    title: "Ambulance Fleet Livery",
    client: "Pan-India Healthcare Network",
    cat: "Fleet",
    accent: "from-vermillion-dark to-zinc-900",
    detail: "120 ambulances branded to national safety standards",
    // image: "/portfolio/ambulance-fleet.jpg",
  },
  {
    title: "Pharma POP Display Rollout",
    client: "Leading Pharma Brand",
    cat: "Retail",
    accent: "from-zinc-900 to-ink",
    detail: "5,000 counter displays shipped across 18 states",
    // image: "/portfolio/pharma-pop.jpg",
  },
  {
    title: "Neon-Effect Bar Signage",
    client: "Premium F&B Chain",
    cat: "LED",
    accent: "from-vermillion to-ink-soft",
    detail: "12 outlet set with neon-flex and backlit menu boards",
    // image: "/portfolio/neon-bar.jpg",
  },
  {
    title: "Product Launch Backdrop Wall",
    client: "FMCG Company",
    cat: "Events",
    accent: "from-vermillion to-zinc-900",
    detail: "Stage backdrop and photo-call wall for national launch",
    // image: "/portfolio/product-launch.jpg",
  },
  {
    title: "Clinic Directional System",
    client: "Diagnostic Chain, South India",
    cat: "Healthcare",
    accent: "from-zinc-600 to-zinc-900",
    detail: "85 clinic branches fitted with standardised signage kits",
    // image: "/portfolio/clinic-directional.jpg",
  },
];

type Project = (typeof projects)[number] & { image?: string };

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const typedProjects = projects as Project[];
  const shown = active === "All" ? typedProjects : typedProjects.filter((p) => p.cat === active);

  return (
    <PageShell>

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-paper dark:bg-ink relative overflow-hidden transition-colors">
        <div className="absolute pointer-events-none"
          style={{ top:"-10%", right:"-5%", width:"700px", height:"700px",
            background:"radial-gradient(circle,rgba(200,75,12,0.07) 0%,transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-vermillion mb-6">Portfolio</p>
          <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] text-ink dark:text-paper leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            The work.<br /><span className="italic text-vermillion">Across every sector.</span>
          </h1>
          <p className="text-ink/65 dark:text-paper/60 text-[15px] max-w-xl leading-relaxed">
            A curated selection of projects delivered for India&apos;s leading brands —
            corporate offices, hospital systems, retail chains, national fleet campaigns, and live events.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-10 md:py-16 lg:py-20 bg-paper dark:bg-ink border-t border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Filter bar */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-ink dark:bg-paper text-paper dark:text-ink shadow-sm"
                    : "border border-zinc-200 dark:border-zinc-700 text-mid hover:text-ink dark:hover:text-paper hover:border-zinc-300 dark:hover:border-zinc-600 bg-paper-soft dark:bg-ink-soft"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-ink/55 dark:text-paper/45 mb-8">
            Showing {shown.length} of {typedProjects.length} projects
          </p>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3">
            <AnimatePresence>
              {shown.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ delay: i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Card image / gradient */}
                  <div className="relative h-56">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                    )}
                    <div className="absolute inset-0 bg-ink/25 group-hover:bg-ink/10 transition-colors duration-300" />
                    {/* Category pill */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-[0.16em] bg-paper/10 border border-paper/15 text-paper/70">
                        {project.cat}
                      </span>
                    </div>
                  </div>
                  {/* Info panel below image */}
                  <div className="px-4 py-3.5 bg-paper-soft dark:bg-ink-soft border border-t-0 border-zinc-200 dark:border-zinc-700 rounded-b-2xl">
                    <p className="text-[13px] font-semibold text-ink dark:text-paper leading-tight mb-0.5">
                      {project.title}
                    </p>
                    <p className="text-[11px] text-ink/60 dark:text-paper/50 leading-snug">{project.detail}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {shown.length === 0 && (
            <div className="text-center py-24 text-ink/55 dark:text-paper/45 text-[14px]">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-paper-soft dark:bg-ink-soft border-t border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl text-ink dark:text-paper tracking-[-0.01em]">
              Your project could be next.
            </p>
            <p className="text-[13px] text-ink/65 dark:text-paper/55 mt-1.5">
              Let&apos;s create something remarkable for your brand. Tell us about your brief.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[13px] font-semibold border border-vermillion text-vermillion hover:bg-vermillion hover:text-white transition-colors"
          >
            Start a Project <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
