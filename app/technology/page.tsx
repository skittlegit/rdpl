"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import PageShell from "../components/PageShell";
import Link from "next/link";

const hpFeatures = [
  "Print width up to 126 inches (3.2 metres)",
  "Water-based inks — zero odour, safe from day one",
  "Instant dry, ready to finish same day",
  "Pantone-validated colour accuracy (Delta E 2)",
  "GREENGUARD Gold certified for indoor use",
  "2+ year outdoor durability without lamination",
  "200+ compatible substrates and media types",
  "Ideal for indoor displays, wallcoverings, and textiles",
];

const ecoFeatures = [
  "3–5 year outdoor durability guarantee",
  "High-adhesion vinyl output for all surfaces",
  "Flexible film — wraps contours without cracking",
  "UV-resistant and weatherproof formulation",
  "Low-VOC solvent — reduced environmental impact",
  "Fleet-wrap certified for commercial vehicles",
  "Compatible with both rigid and flexible media",
  "Fast turnaround for high-volume outdoor campaigns",
];

const substrates = [
  {
    cat: "Textiles & Fabric",
    items: ["Polyester fabric", "Canvas", "Backlit textile", "Mesh banners"],
  },
  {
    cat: "Rigid Boards",
    items: ["PVC foam board", "Aluminium composite panel", "Coroplast", "Dibond"],
  },
  {
    cat: "Adhesive Vinyl",
    items: ["Gloss vinyl", "Matte vinyl", "Transparent vinyl", "Reflective vinyl"],
  },
  {
    cat: "Paper & Film",
    items: ["Backlit film", "Matte paper", "Photographic paper", "Wallpaper"],
  },
];

const certs = [
  {
    title: "HP Gold Partner",
    desc: "Authorised reseller and production partner for HP Wide Format solutions. Direct technical support and ink supply.",
  },
  {
    title: "GREENGUARD Gold",
    desc: "HP Latex inks certified for sensitive indoor environments, including schools and hospitals. Safe from installation day.",
  },
  {
    title: "Pantone Validated",
    desc: "Fully colour-managed workflow ensures brand colour accuracy within Delta E 2 across every job and every batch.",
  },
  {
    title: "Documented QC Process",
    desc: "Standardised quality management checklists ensure consistent output on every run — from proof to final delivery.",
  },
];

const fade: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-0.5 h-7 bg-vermillion rounded-full shrink-0" />
      <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-vermillion">{text}</p>
    </div>
  );
}

export default function TechnologyPage() {
  return (
    <PageShell>

      {/*  Hero  */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-paper dark:bg-ink relative overflow-hidden transition-colors">

        <div
          className="absolute pointer-events-none"
          style={{
            top: "-10%", right: "-5%", width: "700px", height: "700px",
            background: "radial-gradient(circle,rgba(200,75,12,0.07) 0%,transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-vermillion mb-6">Technology</p>
          <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] text-ink dark:text-paper leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            Precision at scale.<br /><span className="italic">Two production lines.</span>
          </h1>
          <p className="text-ink/65 dark:text-paper/60 text-[15px] max-w-xl leading-relaxed">
            HP Latex for premium quality and Eco-Solvent for durable outdoor applications —
            giving us full flexibility to match the right technology to every brief, regardless of scale.
          </p>
        </div>
      </section>

      {/*  HP Latex  */}
      <section className="py-12 md:py-20 lg:py-28 bg-paper dark:bg-ink border-t border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionLabel text="Production Line 01" />
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-[2.6rem] text-ink dark:text-paper leading-[1.05] tracking-[-0.02em] mb-2">
                HP Latex 3600
              </h2>
              <p className="text-[13px] font-medium text-vermillion mb-7">
                Premium Indoor &amp; Outdoor — Water-Based Inks
              </p>
              <div className="space-y-4 text-[14px] leading-[1.8] text-ink/75 dark:text-paper/65 mb-8">
                <p>
                  Our flagship system for premium output. The HP Latex 3600 uses water-based ink technology
                  to produce vibrant, scratch-resistant prints with zero VOC outgassing — making them safe
                  for interior installations from the moment they are installed.
                </p>
                <p>
                  With a 126-inch print width and support for over 200 media types, this machine handles
                  everything from A1 photo prints to 30-metre retail backdrops without compromising
                  colour accuracy or consistency across batches.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {hpFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle2 size={11} className="text-vermillion mt-[3px] shrink-0" />
                    <span className="text-[12px] text-ink/65 dark:text-paper/55 leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Spec card */}
            <div className="relative overflow-hidden border border-zinc-200 dark:border-zinc-700 rounded-2xl p-8 bg-white dark:bg-ink-soft">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-vermillion/60 via-vermillion/20 to-transparent rounded-t-2xl" />
              <div className="font-display text-[6rem] font-bold text-ink/5 dark:text-paper/5 leading-none select-none mb-6">
                HP
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-vermillion/80 mb-4">
                Key Specifications
              </p>
              <div className="space-y-0">
                {[
                  ["Print Width", "126 inches (3.2 m)"],
                  ["Ink System", "HP Latex — water-based"],
                  ["Certification", "GREENGUARD Gold"],
                  ["Drying", "Instant — no curing wait"],
                  ["Colour Accuracy", "Pantone validated, Delta E 2"],
                  ["Outdoor Life", "2+ years unlaminated"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between py-3 border-b border-zinc-100 dark:border-zinc-700/60 last:border-0"
                  >
                    <span className="text-[12px] text-ink/60 dark:text-paper/50">{k}</span>
                    <span className="text-[12px] font-semibold text-ink dark:text-paper">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Eco-Solvent  */}
      <section className="py-12 md:py-20 lg:py-28 bg-white dark:bg-ink-soft border-t border-zinc-200 dark:border-zinc-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionLabel text="Production Line 02" />
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* Spec card */}
            <div className="relative overflow-hidden border border-zinc-200 dark:border-zinc-700 rounded-2xl p-8 bg-paper dark:bg-ink order-2 lg:order-1">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-vermillion/60 via-vermillion/20 to-transparent rounded-t-2xl" />
              <div className="font-display text-[5.5rem] font-bold text-ink/5 dark:text-paper/5 leading-none select-none mb-6">
                ECO
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-vermillion/80 mb-4">
                Key Specifications
              </p>
              <div className="space-y-0">
                {[
                  ["Ink System", "Low-VOC Eco-Solvent"],
                  ["Outdoor Life", "3–5 years guaranteed"],
                  ["Best For", "Fleet wraps & outdoor vinyl"],
                  ["Adhesion", "High-tack, permanent bond"],
                  ["Flexibility", "Wraps contours without cracking"],
                  ["Drying", "Fast — same-day dispatch"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between py-3 border-b border-zinc-200 dark:border-zinc-700/60 last:border-0"
                  >
                    <span className="text-[12px] text-ink/60 dark:text-paper/50">{k}</span>
                    <span className="text-[12px] font-semibold text-ink dark:text-paper">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-[2.6rem] text-ink dark:text-paper leading-[1.05] tracking-[-0.02em] mb-2">
                Eco-Solvent Fleet Line
              </h2>
              <p className="text-[13px] font-medium text-vermillion mb-7">
                Outdoor &amp; Vehicle-Grade Durability
              </p>
              <div className="space-y-4 text-[14px] leading-[1.8] text-ink/75 dark:text-paper/65 mb-8">
                <p>
                  Purpose-built for applications that demand long-term resilience — vehicle wraps, outdoor
                  hoardings, and adhesive vinyl graphics in high-exposure environments. Eco-Solvent inks
                  bond permanently to vinyl, creating a flexible, crack-resistant print finish.
                </p>
                <p>
                  A 3–5 year outdoor durability guarantee is standard on all Eco-Solvent output. Lower VOC
                  emissions than traditional solvent inks make this a more responsible choice for
                  high-volume outdoor campaigns without compromising performance.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {ecoFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle2 size={11} className="text-vermillion mt-[3px] shrink-0" />
                    <span className="text-[12px] text-ink/65 dark:text-paper/55 leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Substrates + Certifications  */}
      <section className="py-12 md:py-20 lg:py-28 bg-paper dark:bg-ink border-t border-zinc-200 dark:border-zinc-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">

            {/* Substrates */}
            <div>
              <SectionLabel text="Compatible Media" />
              <h2 className="font-display text-2xl md:text-3xl text-ink dark:text-paper leading-[1.05] tracking-[-0.02em] mb-8">
                200+ substrates<br /><span className="italic">for every application.</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {substrates.map(({ cat, items }, i) => (
                  <motion.div
                    key={cat}
                    variants={fade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    className="border border-zinc-200 dark:border-zinc-700 rounded-xl p-5 bg-white dark:bg-ink-soft hover:border-vermillion/40 transition-colors"
                  >
                    <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-vermillion mb-3">{cat}</p>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-vermillion/50 shrink-0" />
                          <span className="text-[12px] text-ink/65 dark:text-paper/55">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <SectionLabel text="Quality & Certifications" />
              <h2 className="font-display text-2xl md:text-3xl text-ink dark:text-paper leading-[1.05] tracking-[-0.02em] mb-8">
                Standards you<br /><span className="italic">can verify.</span>
              </h2>
              <div className="space-y-4">
                {certs.map(({ title, desc }, i) => (
                  <motion.div
                    key={title}
                    variants={fade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    className="relative overflow-hidden border border-zinc-200 dark:border-zinc-700 rounded-xl p-5 bg-white dark:bg-ink-soft hover:border-vermillion/40 transition-colors"
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-b from-vermillion/60 via-vermillion/20 to-transparent rounded-l-xl" />
                    <p className="text-[13px] font-semibold text-ink dark:text-paper mb-1.5 pl-1">{title}</p>
                    <p className="text-[12px] text-ink/65 dark:text-paper/55 leading-relaxed pl-1">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/*  CTA  */}
      <section className="py-10 md:py-16 bg-white dark:bg-ink-soft border-t border-zinc-200 dark:border-zinc-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl text-ink dark:text-paper tracking-[-0.01em]">
              Need a print specification?
            </p>
            <p className="text-[13px] text-ink/65 dark:text-paper/55 mt-1.5">
              Our team can advise on the best media, machine, and method for your application.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[13px] font-semibold border border-vermillion text-vermillion hover:bg-vermillion hover:text-white transition-colors"
          >
            Talk to Us <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
