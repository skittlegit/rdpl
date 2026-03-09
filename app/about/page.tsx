"use client";

import { motion, type Variants } from "framer-motion";
import { Target, Clock, Heart, Globe, ArrowUpRight } from "lucide-react";
import PageShell from "../components/PageShell";
import Link from "next/link";

const stats = [
  { value: "2004", label: "Founded" },
  { value: "50K",  label: "Sq.ft. campus" },
  { value: "500+", label: "Corporate clients" },
  { value: "100+", label: "Cities served" },
];

const milestones = [
  { year: "2004", event: "Founded in Cherlapally with a single Eco-Solvent printer and a team of four. Our first client was a local pharmaceutical brand." },
  { year: "2008", event: "Expanded into a dedicated 10,000 sq.ft. manufacturing facility and secured our first BFSI and hospital signage contracts." },
  { year: "2012", event: "Launched the fleet graphics division. Signed our first pan-India vehicle branding contracts spanning 20+ states." },
  { year: "2016", event: "Invested in the HP Latex 3600, marking our entry into premium large-format printing for indoor and outdoor applications." },
  { year: "2020", event: "Crossed 500 corporate clients. Launched a dedicated LED signage fabrication and illuminated display division." },
  { year: "2024", event: "Relocated to a 50,000 sq.ft. integrated campus in Cherlapalli, Hyderabad. Full in-house: design, print, fabricate, and install." },
];

const values = [
  { icon: Target, title: "Precision-First",    desc: "Every job goes through multi-point quality checks before it leaves our facility. Dimensions, colours, and finish are verified against approved artwork." },
  { icon: Clock,  title: "SLA-Committed",      desc: "We plan backwards from your deadline. Production schedules, logistics, and installation dates are locked before printing begins." },
  { icon: Heart,  title: "Dedicated Support",  desc: "Every project has a named project manager — one contact from brief to installation, with regular milestone sign-offs." },
  { icon: Globe,  title: "Responsible Print",  desc: "HP Latex water-based inks, GREENGUARD-certified processes, responsible material sourcing, and recyclable media options." },
];

const credentials = [
  { label: "HP Latex Certified",   sub: "Gold-tier authorised production partner for HP wide-format printing systems." },
  { label: "Fully Integrated",     sub: "Design, printing, fabrication, and installation — all in-house, zero sub-contractors." },
  { label: "Eco-Conscious Process",sub: "Water-based HP Latex inks, low-VOC eco-solvent, and recyclable media options." },
  { label: "Pan-India Reach",      sub: "Installation and logistics network spanning 100+ cities across every major state." },
];

const fade: Variants = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
};

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-0.5 h-7 bg-vermillion rounded-full shrink-0" />
      <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-vermillion">{text}</p>
    </div>
  );
}

function CropMarks() {
  return (
    <>
      {[0,1,2,3].map((i) => (
        <div key={i} className={`absolute pointer-events-none text-zinc-300 dark:text-zinc-700 ${["top-5 left-5","top-5 right-5","bottom-[88px] left-5","bottom-[88px] right-5"][i]}`}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {i===0&&<><line x1="9" y1="0" x2="9" y2="9" stroke="currentColor" strokeWidth="0.7"/><line x1="0" y1="9" x2="9" y2="9" stroke="currentColor" strokeWidth="0.7"/></>}
            {i===1&&<><line x1="9" y1="0" x2="9" y2="9" stroke="currentColor" strokeWidth="0.7"/><line x1="9" y1="9" x2="18" y2="9" stroke="currentColor" strokeWidth="0.7"/></>}
            {i===2&&<><line x1="9" y1="9" x2="9" y2="18" stroke="currentColor" strokeWidth="0.7"/><line x1="0" y1="9" x2="9" y2="9" stroke="currentColor" strokeWidth="0.7"/></>}
            {i===3&&<><line x1="9" y1="9" x2="9" y2="18" stroke="currentColor" strokeWidth="0.7"/><line x1="9" y1="9" x2="18" y2="9" stroke="currentColor" strokeWidth="0.7"/></>}
          </svg>
        </div>
      ))}
    </>
  );
}

export default function AboutPage() {
  return (
    <PageShell>

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-0 bg-paper dark:bg-ink relative overflow-hidden transition-colors">
        {/* vermillion glow */}
        <div className="absolute pointer-events-none"
          style={{ top:"-10%", right:"-5%", width:"700px", height:"700px",
            background:"radial-gradient(circle,rgba(200,75,12,0.07) 0%,transparent 60%)" }} />
        <CropMarks />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-vermillion mb-6">About Reddys Digital</p>
          <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] text-ink dark:text-paper leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            Two decades of craft,<br /><span className="italic">from Hyderabad.</span>
          </h1>
          <p className="text-ink/65 dark:text-paper/60 text-[15px] max-w-xl leading-relaxed">
            Since 2004, we have grown from a single printer to India&apos;s most integrated signage manufacturer —
            design, printing, fabrication, and installation all under one roof.
          </p>
        </div>
        {/* Stats strip */}
        <div className="relative border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4">
            {stats.map(({ value, label }, i) => {
              const border =
                i === 0 ? "border-r border-b md:border-b-0 border-zinc-200 dark:border-zinc-800" :
                i === 1 ? "border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800" :
                i === 2 ? "border-r border-zinc-200 dark:border-zinc-800" :
                "";
              return (
                <div key={label} className={`py-5 md:py-7 px-3 md:px-6 text-center ${border}`}>
                  <p className="font-display text-[1.8rem] md:text-[2.2rem] font-bold text-ink dark:text-paper leading-none mb-1">{value}</p>
                  <p className="text-[9px] md:text-[11px] font-medium tracking-[0.1em] uppercase text-zinc-400 dark:text-zinc-500">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story + Credentials */}
      <section className="py-12 md:py-20 lg:py-28 bg-paper dark:bg-ink border-t border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <SectionLabel text="Our Story" />
            <h2 className="font-display text-3xl md:text-[2.6rem] text-ink dark:text-paper leading-[1.05] tracking-[-0.02em] mb-7">
              Based in Hyderabad&apos;s<br />industrial core.
            </h2>
            <div className="space-y-5 text-[14px] leading-[1.8] text-ink/75 dark:text-paper/65">
              <p>Reddys Digital Pvt. Ltd. is headquartered in Cherlapalli, Hyderabad — a dedicated industrial zone purpose-built for scale manufacturing. Our 50,000 sq.ft. campus houses design studios, HP Latex printing halls, ACP fabrication workshops, LED assembly bays, and a logistics dispatch area, all under one roof.</p>
              <p>Because everything is in-house, there are no hand-offs to third parties. This means tighter quality control, faster turnaround, and complete accountability from brief to installation. Our team of 50+ professionals manages every stage of every project.</p>
              <p>We are trusted by India&apos;s leading BFSI, healthcare, pharma, FMCG, hospitality, and retail brands — managing national signage rollouts across 100+ cities with dedicated project managers assigned to each account.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credentials.map(({ label, sub }, i) => (
              <motion.div key={label} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="relative overflow-hidden border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 bg-white dark:bg-ink-soft hover:border-vermillion/50 transition-colors">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-vermillion/60 via-vermillion/20 to-transparent rounded-t-2xl" />
                <p className="text-[13px] font-semibold text-ink dark:text-paper mb-2">{label}</p>
                <p className="text-[12px] text-mid leading-relaxed">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-20 lg:py-28 bg-white dark:bg-ink-soft border-t border-zinc-200 dark:border-zinc-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionLabel text="Our Journey" />
          <h2 className="font-display text-3xl md:text-[2.6rem] text-ink dark:text-paper leading-[1.05] tracking-[-0.02em] mb-14">
            Twenty years of milestones.
          </h2>
          <div className="relative max-w-3xl">
            <div className="absolute left-[68px] top-5 bottom-5 w-px bg-zinc-200 dark:bg-zinc-700" />
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <motion.div key={m.year} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  className="grid grid-cols-[84px_1fr] gap-6 items-start">
                  <div className="text-right relative pt-[3px]">
                    <span className="font-display italic text-vermillion text-[15px] font-bold">{m.year}</span>
                    <div className="absolute right-[-30px] top-[5px] w-3 h-3 rounded-full border-2 border-vermillion bg-white dark:bg-ink-soft shadow-sm" />
                  </div>
                  <div className="border border-zinc-200 dark:border-zinc-700 rounded-xl px-5 py-4 bg-paper dark:bg-ink hover:border-vermillion/40 transition-colors">
                    <p className="text-[13px] text-ink/80 dark:text-paper/70 leading-relaxed">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 lg:py-28 bg-paper dark:bg-ink border-t border-zinc-200 dark:border-zinc-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionLabel text="How We Work" />
          <h2 className="font-display text-3xl md:text-[2.6rem] text-ink dark:text-paper leading-[1.05] tracking-[-0.02em] mb-12">
            The principles behind every project.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 bg-white dark:bg-ink-soft hover:border-vermillion/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-vermillion/10 dark:bg-vermillion/15 flex items-center justify-center mb-5">
                  <Icon size={16} className="text-vermillion" />
                </div>
                <h3 className="text-[14px] font-semibold text-ink dark:text-paper mb-2.5">{title}</h3>
                <p className="text-[13px] text-ink/65 dark:text-paper/55 leading-[1.7]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-white dark:bg-ink-soft border-t border-zinc-200 dark:border-zinc-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl text-ink dark:text-paper tracking-[-0.01em]">Ready to build your brand presence?</p>
            <p className="text-[13px] text-mid mt-1.5">Share your brief — we respond within one business day with a detailed quote.</p>
          </div>
          <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[13px] font-semibold border border-vermillion text-vermillion hover:bg-vermillion hover:text-white transition-colors">
            Get in Touch <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
