"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const printers = [
  {
    name: "HP Latex 3600",
    category: "Indoor & Outdoor — Water-Based Inks",
    badge: "Water-Based",
    badgeClass: "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400",
    accentClass: "text-blue-600 dark:text-blue-400",
    borderClass: "border-zinc-100 dark:border-zinc-800 hover:border-blue-100 dark:hover:border-blue-900/60",
    features: [
      "126-inch print width",
      "Instant-dry, no outgassing",
      "Pantone-validated colour",
      "GREENGUARD Gold certified",
      "200+ compatible substrates",
      "Photo-realistic output",
    ],
    note: "Ideal for indoor displays, wallpaper, textiles, and backlit films.",
  },
  {
    name: "Eco-Solvent Fleet Line",
    category: "Outdoor & Vehicle — Low-VOC Inks",
    badge: "Low-VOC",
    badgeClass: "bg-vermillion/8 text-vermillion",
    accentClass: "text-vermillion",
    borderClass: "border-zinc-100 dark:border-zinc-800 hover:border-vermillion/20 dark:hover:border-vermillion/20",
    features: [
      "3–5 year outdoor durability",
      "High-adhesion vinyl output",
      "Flexible — wraps without cracking",
      "UV and weather resistant",
      "Fleet-wrap certified",
      "Ideal for hoardings and flex",
    ],
    note: "Ideal for vehicle wraps, outdoor hoardings, and adhesive vinyl.",
  },
];

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function TechnologySection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-white dark:bg-ink-soft transition-colors">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-vermillion mb-5">
              Technology
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink dark:text-paper leading-[1.05] tracking-[-0.02em]">
              Two print lines.<br />
              <span className="italic text-zinc-300 dark:text-zinc-700">Every application.</span>
            </h2>
          </div>
          <Link
            href="/technology"
            className="hidden md:flex items-center gap-1 text-[12px] font-medium text-mid hover:text-ink dark:hover:text-paper transition-colors mb-1 shrink-0"
          >
            Learn more
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {printers.map(({ name, category, badge, badgeClass, accentClass, borderClass, features, note }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`rounded-2xl border p-8 bg-paper dark:bg-ink transition-colors ${borderClass}`}
            >
              <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider mb-5 ${badgeClass}`}>
                {badge}
              </span>
              <h3 className={`font-display text-2xl font-bold tracking-[-0.01em] mb-0.5 ${accentClass}`}>
                {name}
              </h3>
              <p className="text-[12px] font-medium text-mid mb-8">{category}</p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle2 size={11} className={`${accentClass} mt-[2px] shrink-0`} />
                    <span className="text-[12px] text-mid leading-snug">{f}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-mid leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-4">
                {note}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
