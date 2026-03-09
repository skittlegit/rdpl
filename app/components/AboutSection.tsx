"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const tiles = [
  { num: "50k",  unit: "sq.ft.",     desc: "Fully integrated campus in Cherlapally, Hyderabad."             },
  { num: "50+",  unit: "people",     desc: "Designers, printers, fabricators and installers in-house."      },
  { num: "200+", unit: "substrates", desc: "Compatible media across HP Latex and Eco-Solvent lines."        },
  { num: "24 h", unit: "turnaround", desc: "Guaranteed quotation response for all B2B enquiries."           },
];

export default function AboutSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-white dark:bg-ink-soft transition-colors">
      <div className="max-w-7xl mx-auto px-6">

        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-[10px] font-bold tracking-[0.22em] uppercase text-vermillion mb-6"
        >
          About
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start mb-10 md:mb-16">
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-ink dark:text-paper leading-[1.05] tracking-[-0.02em]"
          >
            Two decades of<br />
            signage craft<br />
            <span className="italic text-zinc-300 dark:text-zinc-700">from Hyderabad.</span>
          </motion.h2>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="space-y-4 pt-1"
          >
            <p className="text-mid leading-relaxed">
              Founded in 2004, Reddys Digital Pvt. Ltd. is one of India&apos;s most trusted manufacturers
              of corporate signage, fleet graphics, and POP displays. Our 50,000&nbsp;sq.ft. Cherlapally
              campus handles every step — design, printing, fabrication, and installation — under one roof.
            </p>
            <p className="text-mid leading-relaxed">
              We serve BFSI, healthcare, pharma, FMCG, hospitality, and retail sectors with dedicated
              project managers ensuring SLA compliance at every touchpoint — pan-India.
            </p>
          </motion.div>
        </div>

        {/* Stat tiles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {tiles.map(({ num, unit, desc }, i) => (
            <motion.div
              key={num}
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="border border-zinc-100 dark:border-zinc-800 rounded-xl p-7 flex flex-col gap-2 bg-paper dark:bg-ink hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="font-display text-4xl font-bold text-ink dark:text-paper tracking-[-0.02em] leading-none">
                {num}
                <span className="text-base font-sans font-semibold text-vermillion ml-1.5">{unit}</span>
              </div>
              <p className="text-[13px] text-mid leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
