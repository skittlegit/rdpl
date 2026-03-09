"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Building2, Layers, Truck, ShoppingBag, Printer, Lightbulb } from "lucide-react";
import PageShell from "../components/PageShell";
import Link from "next/link";

const services = [
  { n:"01", icon:Building2, title:"Corporate Signage",
    desc:"Complete end-to-end signage systems for corporate offices, hospitals, educational institutions, and government buildings.",
    includes:["Main entrance & facade name boards","Reception counters & branding walls","Directional & wayfinding systems","Backlit acrylic & LED panels","Lift lobby & staircase wraps","Emergency & compliance signage"] },
  { n:"02", icon:Layers, title:"ACP Cladding & Fabrication",
    desc:"Precision aluminium composite panel fabrication for exterior facades, retail shopfronts, and interior partition branding.",
    includes:["Exterior facade ACP cladding","Laser-cut acrylic letter boards","3D fabricated logos & brand marks","Stainless steel & brass letters","Modular branding frames","Shopfront hoarding & canopy boards"] },
  { n:"03", icon:Truck, title:"Fleet Graphics & Vehicle Branding",
    desc:"High-adhesion wraps engineered to survive years of road use, harsh UV exposure, and Indian weather conditions.",
    includes:["Full-body vehicle wraps","Partial wraps & spot decals","Magnetic panel branding","Ambulance & emergency livery","Bus, truck & van campaigns","Fleet-wide rollout management"] },
  { n:"04", icon:ShoppingBag, title:"Inshop & POP Displays",
    desc:"Retail-ready point-of-purchase materials and inshop branding for FMCG, pharma, HORECA, and lifestyle brands.",
    includes:["Roll-up & retractable standees","Countertop displays & danglers","Shelf-edge strips & shelf talkers","Fabric tension display systems","Trade show & expo booth graphics","Seasonal & promotional changeovers"] },
  { n:"05", icon:Printer, title:"Digital & Wide-Format Printing",
    desc:"HP Latex and Eco-Solvent printing on any media, at any scale, with Pantone-validated colour accuracy and same-day finish.",
    includes:["HP Latex 3600 (up to 126 inches)","Eco-Solvent outdoor printing","Flex & vinyl banners","Backlit translucent film prints","Wallpaper, canvas & fine art prints","Photographic & display boards"] },
  { n:"06", icon:Lightbulb, title:"LED & Illuminated Signage",
    desc:"Custom LED solutions for 24/7 brand visibility indoors and outdoors, from single channel letters to large illuminated facades.",
    includes:["LED channel letters & halo-lit signs","Edge-lit & back-lit acrylic panels","Neon-flex effect signage","Solar-powered outdoor boards","Illuminated pylon & totem signs","Dynamic display integration"] },
];

const process = [
  { step:"01", title:"Brief & Discovery",      desc:"A structured discovery call to understand your brand, space, material preferences, and project deadline." },
  { step:"02", title:"Concept & Design",        desc:"In-house designers produce production-ready artwork with scale drawings, specs, and 3D mockups for review." },
  { step:"03", title:"Approval & Production",   desc:"Manufacturing begins after your sign-off. You receive a production timeline with key milestones." },
  { step:"04", title:"Quality Control",         desc:"Multi-point inspection covering dimensions, colour accuracy, finish quality, and structural integrity." },
  { step:"05", title:"Delivery & Installation", desc:"Pan-India logistics and installation network, followed by a formal project handover report." },
];

const highlights = [
  { value:"6",     label:"Specialist Divisions" },
  { value:"50K",   label:"Sq.ft. Campus" },
  { value:"24 hr", label:"Quote Turnaround" },
];

const fade: Variants = {
  hidden:  { opacity:0, y:14 },
  visible: (i:number) => ({ opacity:1, y:0, transition:{ delay:i*0.07, duration:0.5, ease:[0.22,1,0.36,1] } }),
};

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-0.5 h-7 bg-vermillion rounded-full shrink-0" />
      <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-vermillion">{text}</p>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <PageShell>

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-0 bg-paper dark:bg-ink relative overflow-hidden transition-colors">
        <div className="absolute inset-0 pointer-events-none dark:hidden"
          style={{ backgroundImage:"radial-gradient(circle,rgba(15,14,12,0.06) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
        <div className="absolute inset-0 pointer-events-none hidden dark:block"
          style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.055) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
        <div className="absolute pointer-events-none"
          style={{ top:"-10%", right:"-5%", width:"700px", height:"700px",
            background:"radial-gradient(circle,rgba(200,75,12,0.07) 0%,transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-vermillion mb-6">Services</p>
          <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] text-ink dark:text-paper leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            Everything in-house.<br /><span className="italic">Six specialisms.</span>
          </h1>
          <p className="text-ink/65 dark:text-paper/60 text-[15px] max-w-xl leading-relaxed">
            Six specialist divisions working in concert inside a single 50,000 sq.ft. campus —
            quality and speed that no outsourced supply chain can match.
          </p>
        </div>
        {/* Highlights strip */}
        <div className="relative border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-3">
            {highlights.map(({ value, label }, i) => (
              <div key={label} className={`py-5 md:py-7 px-2 md:px-6 text-center ${i < highlights.length - 1 ? "border-r border-zinc-200 dark:border-zinc-800" : ""}`}>
                <p className="font-display text-[1.4rem] md:text-[2.2rem] font-bold text-ink dark:text-paper leading-none mb-1">{value}</p>
                <p className="text-[9px] md:text-[11px] font-medium tracking-[0.1em] uppercase text-zinc-400 dark:text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 lg:py-28 bg-paper dark:bg-ink border-t border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionLabel text="What We Do" />
          <h2 className="font-display text-3xl md:text-[2.6rem] text-ink dark:text-paper leading-[1.05] tracking-[-0.02em] mb-8 md:mb-12">
            Every type of signage,<br /><span className="italic">manufactured here.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map(({ n, icon:Icon, title, desc, includes }, i) => (
              <motion.div key={n} variants={fade} initial="hidden" whileInView="visible" viewport={{ once:true }} custom={i}
                className="group border border-zinc-200 dark:border-zinc-700 rounded-2xl p-7 bg-white dark:bg-ink-soft hover:border-vermillion/40 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-vermillion/10 dark:bg-vermillion/15 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-vermillion" />
                  </div>
                  <span className="font-display italic text-[2rem] font-bold text-vermillion/15 dark:text-vermillion/20 leading-none select-none">{n}</span>
                </div>
                <h3 className="font-display text-[1.25rem] font-bold text-ink dark:text-paper tracking-[-0.01em] mb-2.5 group-hover:text-vermillion transition-colors">{title}</h3>
                <p className="text-[13px] text-ink/70 dark:text-paper/60 leading-relaxed mb-5">{desc}</p>
                <div className="h-px bg-zinc-100 dark:bg-zinc-700/60 mb-5" />
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                  {includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2">
                      <CheckCircle2 size={11} className="text-vermillion mt-[3px] shrink-0" />
                      <span className="text-[12px] text-mid leading-snug">{inc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-20 lg:py-28 bg-white dark:bg-ink-soft border-t border-zinc-200 dark:border-zinc-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionLabel text="How a Project Runs" />
          <h2 className="font-display text-3xl md:text-[2.6rem] text-ink dark:text-paper leading-[1.05] tracking-[-0.02em] mb-8 md:mb-12">
            From brief to installation.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map(({ step, title, desc }, i) => (
              <motion.div key={step} variants={fade} initial="hidden" whileInView="visible" viewport={{ once:true }} custom={i}
                className="relative border border-zinc-200 dark:border-zinc-700 rounded-2xl p-5 bg-paper dark:bg-ink hover:border-vermillion/40 transition-colors">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-vermillion/50 via-vermillion/20 to-transparent rounded-t-2xl" />
                <p className="font-display italic text-[2.4rem] text-vermillion/20 dark:text-vermillion/15 mb-3 leading-none select-none">{step}</p>
                <h3 className="text-[13px] font-semibold text-ink dark:text-paper mb-2">{title}</h3>
                <p className="text-[12px] text-ink/60 dark:text-paper/50 leading-[1.65]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-paper dark:bg-ink border-t border-zinc-200 dark:border-zinc-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl text-ink dark:text-paper tracking-[-0.01em]">Start your project today.</p>
            <p className="text-[13px] text-mid mt-1.5">Tell us what you need — we send a detailed quote within 24 hours.</p>
          </div>
          <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[13px] font-semibold border border-vermillion text-vermillion hover:bg-vermillion hover:text-white transition-colors">
            Request a Quote <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
