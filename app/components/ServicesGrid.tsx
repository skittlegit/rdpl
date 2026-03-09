"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01", title: "Corporate Signage",
    desc: "Name boards, reception panels, directional & wayfinding systems, elevator wraps — complete office and institutional identity.",
    tags: ["ACP", "Acrylic", "Backlit"],
  },
  {
    n: "02", title: "ACP Cladding & Fabrication",
    desc: "Aluminium composite panel cladding, laser-cut metal letters, 3D logos, and modular branding structures for facades.",
    tags: ["Cladding", "3D Letters", "Facade"],
  },
  {
    n: "03", title: "Fleet Graphics",
    desc: "Full-body vinyl wraps, magnetic panels, and specialty overlays for delivery trucks, ambulances, buses, and event vehicles.",
    tags: ["Vinyl Wrap", "Magnetic", "Livery"],
  },
  {
    n: "04", title: "Inshop & POP Displays",
    desc: "Standees, product shelving graphics, fabric tension displays, and retail brand kits for FMCG, pharma, and HORECA.",
    tags: ["Retail", "POP", "HORECA"],
  },
  {
    n: "05", title: "Digital & Wide-Format Printing",
    desc: "HP Latex and Eco-Solvent output at any scale — event backdrops, outdoor hoardings, roll-up banners, and gala prints.",
    tags: ["HP Latex", "Eco-Solvent", "Outdoor"],
  },
  {
    n: "06", title: "LED & Illuminated Signage",
    desc: "Channel letters, edge-lit panels, neon-flex, and solar-powered illuminated boards for 24/7 brand visibility.",
    tags: ["LED", "Neon-Flex", "Solar"],
  },
];

const row: Variants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServicesGrid() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-paper dark:bg-ink transition-colors">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-vermillion mb-5">
              Services
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink dark:text-paper leading-[1.05] tracking-[-0.02em]">
              Everything under<br />
              <span className="italic text-vermillion">one roof.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden md:flex items-center gap-1 text-[12px] font-medium text-mid hover:text-ink dark:hover:text-paper transition-colors mb-1 shrink-0"
          >
            All services <ArrowUpRight size={12} />
          </Link>
        </div>

        <div className="divide-y divide-zinc-200 dark:divide-zinc-800/70">
          {services.map(({ n, title, desc, tags }, i) => (
            <motion.div
              key={n}
              variants={row}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.04 }}
              className="group grid grid-cols-[28px_1fr] md:grid-cols-[52px_1fr_24px] gap-x-3 md:gap-x-8 items-start py-5 md:py-7"
            >
              {/* Job number */}
              <span className="text-[9px] font-bold tracking-widest text-zinc-300 dark:text-zinc-700 mt-1.5 select-none">
                {n}
              </span>

              {/* Content */}
              <div>
                <h3 className="text-[15px] font-semibold text-ink dark:text-paper mb-1.5 group-hover:text-vermillion transition-colors">
                  {title}
                </h3>
                <p className="text-[13px] text-ink/65 dark:text-paper/55 leading-relaxed mb-3 max-w-2xl">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800/80 text-zinc-400 dark:text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <ArrowUpRight
                size={14}
                className="text-zinc-200 dark:text-zinc-700 group-hover:text-vermillion transition-colors hidden md:block mt-0.5"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
