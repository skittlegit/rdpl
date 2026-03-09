"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const up: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: "Est. 2004", label: "Two decades in craft" },
  { value: "500+",      label: "Corporate clients"    },
  { value: "10k+",      label: "Projects printed"     },
  { value: "50k sqft",  label: "Production campus"    },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-paper dark:bg-ink overflow-hidden">

      {/* Dot grid — light */}
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.09) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Dot grid — dark */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Vermillion radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-12%", right: "-8%",
          width: "700px", height: "700px",
          background: "radial-gradient(circle, rgba(200,75,12,0.055) 0%, transparent 60%)",
        }}
      />

      {/* Crop marks — four corners */}
      <div className="absolute top-6 left-6 pointer-events-none text-zinc-300 dark:text-zinc-700">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <line x1="9" y1="0"  x2="9"  y2="9"  stroke="currentColor" strokeWidth="0.8"/>
          <line x1="0" y1="9"  x2="9"  y2="9"  stroke="currentColor" strokeWidth="0.8"/>
        </svg>
      </div>
      <div className="absolute top-6 right-6 pointer-events-none text-zinc-300 dark:text-zinc-700">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <line x1="9"  y1="0" x2="9"  y2="9"  stroke="currentColor" strokeWidth="0.8"/>
          <line x1="9"  y1="9" x2="18" y2="9"  stroke="currentColor" strokeWidth="0.8"/>
        </svg>
      </div>
      <div className="absolute bottom-6 left-6 pointer-events-none text-zinc-300 dark:text-zinc-700">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <line x1="9" y1="9"  x2="9"  y2="18" stroke="currentColor" strokeWidth="0.8"/>
          <line x1="0" y1="9"  x2="9"  y2="9"  stroke="currentColor" strokeWidth="0.8"/>
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 pointer-events-none text-zinc-300 dark:text-zinc-700">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <line x1="9"  y1="9" x2="9"  y2="18" stroke="currentColor" strokeWidth="0.8"/>
          <line x1="9"  y1="9" x2="18" y2="9"  stroke="currentColor" strokeWidth="0.8"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-32 pb-20 md:pt-40 md:pb-28">
        <motion.div variants={stagger} initial="hidden" animate="show">

          {/* Label */}
          <motion.p
            variants={up}
            className="text-[10px] font-bold uppercase tracking-[0.22em] text-mid mb-8"
          >
            Reddys Digital&nbsp;&nbsp;&nbsp;&nbsp;Hyderabad&nbsp;&nbsp;&nbsp;&nbsp;Est.&nbsp;2004
          </motion.p>

          {/* Headline — Playfair Display */}
          <motion.h1
            variants={up}
            className="font-display text-[clamp(3.2rem,9vw,8rem)] text-ink dark:text-paper leading-[0.96] tracking-[-0.02em] mb-8 max-w-3xl"
          >
            Print precision.<br />
            <span className="text-vermillion italic">Brand permanence.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={up}
            className="text-base md:text-lg text-mid max-w-lg leading-relaxed mb-10"
          >
            ACP boards, fleet graphics, LED signage and POP displays —
            designed, printed, and fabricated in-house at our
            50,000&nbsp;sq.ft. Hyderabad campus.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={up} className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-vermillion text-white hover:bg-vermillion-dark transition-colors shadow-md shadow-vermillion/20 group"
            >
              Request a Quote
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-ink dark:text-paper/80 bg-paper-soft dark:bg-zinc-800/60 hover:bg-zinc-200/80 dark:hover:bg-zinc-700/60 transition-colors border border-zinc-200 dark:border-zinc-700/50"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 md:mt-20 lg:mt-24 pt-8 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-2xl md:text-3xl font-bold text-ink dark:text-paper tracking-[-0.02em] leading-none mb-1.5">
                {value}
              </p>
              <p className="text-[11px] text-mid uppercase tracking-[0.12em]">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
