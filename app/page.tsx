import Image from "next/image";
import MobileMenu from "./MobileMenu";
import type { CSSProperties, ReactNode } from "react";
import {
  company, locations, stats, brandsServed, heroPhotos, featuredClients, otherClients, clientGroups, serviceGroups, work, machinery, facilityPhotos, materialPartners,
  values, states, contacts, socials,
} from "./content";

const nav = [
  { label: "Clients", href: "#clients" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

const mobileNav = [...nav.slice(0, 3), { label: "Capabilities", href: "#capabilities" }, nav[3], { label: "Contact", href: "#contact" }];

const wrap = "mx-auto max-w-7xl px-5 md:px-10";
const tel = (p: string) => `tel:${p.replace(/\s/g, "")}`;
const num = (n: number) => String(n).padStart(2, "0");
const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });
const clientNames = clientGroups.flatMap((g) => g.names);

function Label({ children, className = "text-slate" }: { children: ReactNode; className?: string }) {
  return <p className={`text-xs font-medium uppercase tracking-[0.2em] md:text-[11px] ${className}`}>{children}</p>;
}

/** Editorial two-column section: label on the left, content on the right. */
function Section({ id, label, dark, deep, compact, children }: {
  id: string; label: string; dark?: boolean; deep?: boolean; compact?: boolean; children: ReactNode;
}) {
  const tone = dark ? "bg-ink text-paper" : deep ? "bg-paper-deep" : "border-t border-line";
  return (
    <section id={id} className={`${tone} ${compact ? "py-14 md:py-20" : "py-16 md:py-24"}`}>
      <div className={`${wrap} grid gap-10 md:grid-cols-[1fr_3fr] md:gap-16`}>
        <Label className={dark ? "text-paper/50" : "text-slate"}>{label}</Label>
        <div>{children}</div>
      </div>
    </section>
  );
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mb-9 text-3xl font-medium tracking-[-0.025em] md:text-4xl">{children}</h2>;
}

/** Inline list separated by faint dots. */
function DotList({ items, dot = "text-ink/25" }: { items: string[]; dot?: string }) {
  return (
    <p>
      {items.map((item, i) => (
        <span key={item}>
          {/* The dot is glued to its name so a line never starts with one. */}
          <span className="whitespace-nowrap">
            {item}
            {i < items.length - 1 && <>{" "}<span className={dot} aria-hidden>·</span></>}
          </span>{" "}
        </span>
      ))}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-white pt-[env(safe-area-inset-top)] text-ink shadow-[0_1px_12px_rgba(22,25,30,0.06)]">
        <div className={`${wrap} flex h-16 items-center justify-between gap-6`}>
          <a href="#" className="flex h-11 items-center gap-3">
            <Image src="/logo-mark.png" alt="" width={21} height={28} className="h-7 w-auto" />
            <span className="text-[15px] font-semibold tracking-tight">Reddys Digital</span>
          </a>
          <nav className="flex items-center gap-3 text-sm md:gap-8">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hidden font-medium text-ink/75 transition-colors hover:text-orange-ink md:block">
                {n.label}
              </a>
            ))}
            <a href="#contact"
              className="inline-flex h-11 items-center rounded-full bg-ink px-5 font-medium text-paper transition-colors hover:bg-orange-ink md:h-10">
              Get a quote
            </a>
            <MobileMenu links={mobileNav} />
          </nav>
        </div>
      </header>

      <main className="bg-paper">
        {/* Hero */}
        <section>
          <div className={`${wrap} grid gap-14 pb-12 pt-12 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-16 md:pb-16 md:pt-16`}>
            <div>
              <Label className="rise text-slate">Hyderabad · 20+ years</Label>
              <h1 className="rise mt-6 text-[clamp(2.5rem,4.6vw,4.4rem)] font-medium leading-[1.05] tracking-[-0.03em]"
                style={delay(0.08)}>
                Signage, print and fabrication,{" "}
                <span className="text-orange-ink">made under one roof.</span>
              </h1>
              <p className="rise mt-7 max-w-lg text-[17px] leading-relaxed text-ink/65" style={delay(0.14)}>
                ACP facades, illuminated letters, in-store displays and fleet graphics, designed,
                printed, fabricated and installed by our own team across eight states.
              </p>
              <div className="rise mt-9 flex flex-wrap items-center gap-x-8 gap-y-4" style={delay(0.2)}>
                <a href="#contact"
                  className="rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-orange-ink">
                  Request a quote
                </a>
                <a href="#work" className="inline-flex h-11 items-center text-sm font-medium underline decoration-line underline-offset-[6px] hover:decoration-ink">
                  See our work
                </a>
              </div>
              <p className="rise mt-12 border-t border-line pt-6 text-sm leading-relaxed text-ink/55" style={delay(0.26)}>
                Trusted by <span className="font-medium text-ink">{featuredClients.join(", ")}</span>{" "}
                and {otherClients} other brands.
              </p>
            </div>

            {/* Mosaic of real installations, second column offset for rhythm */}
            <div className="rise grid grid-cols-2 gap-3" style={delay(0.12)}>
              {[heroPhotos.slice(0, 3), heroPhotos.slice(3)].map((col, c) => (
                <div key={c} className={`space-y-3 ${c === 1 ? "pt-10 md:pt-16" : ""}`}>
                  {col.map((p, i) => (
                    <figure key={p.src}
                      className={`relative aspect-16/10 overflow-hidden rounded-md bg-line ${i === 2 ? "hidden sm:block" : ""}`}>
                      <Image src={p.src} alt={p.alt} fill preload={i === 0} className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw" />
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className={wrap}>
            <dl className="grid grid-cols-2 border-t border-line md:grid-cols-4">
              {stats.map((s, i) => (
                <div key={s.label}
                  className={`py-6 md:py-7 ${i % 2 ? "border-l border-line pl-6" : ""} ${i > 0 ? "md:border-l md:border-line md:pl-8" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""}`}>
                  <dt className="text-4xl font-medium leading-none tracking-[-0.03em] md:text-5xl">{s.value}</dt>
                  <dd className="mt-3 text-[13px] text-ink/55">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Clients: compact slate band, every name in one wrapped list */}
        <section id="clients" className="bg-slate py-12 text-paper md:py-16">
          <div className={`${wrap} grid gap-8 md:grid-cols-[1fr_3fr] md:gap-16`}>
            <div>
              <Label className="mb-4 text-paper/60">01 — Clients</Label>
              <h2 className="text-2xl font-medium leading-snug tracking-[-0.02em] md:text-[1.75rem]">
                Trusted by {brandsServed} brands across {clientGroups.length} industries
              </h2>
            </div>
            <div className="text-base leading-[1.9] text-paper/90 md:pt-1 md:text-[17px]">
              <DotList items={clientNames} dot="text-orange" />
            </div>
          </div>
        </section>

        <Section id="services" label="02 — Services">
          <H2>What we make</H2>
          <ol>
            {serviceGroups.map((g, i) => (
              <li key={g.group}
                className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line py-7 last:border-b md:grid-cols-[3rem_15rem_1fr] md:items-baseline">
                <span className="text-xs tabular-nums text-slate">{num(i + 1)}</span>
                <h3 className="text-xl font-medium leading-tight tracking-[-0.015em] md:text-2xl">{g.group}</h3>
                <div className="col-start-2 mt-2 text-[15px] leading-relaxed text-ink/65 md:col-start-3 md:mt-0">
                  <DotList items={g.items} />
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="work" label="03 — Our work" dark>
          <H2>Recent installations</H2>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
            {work.map((p) => (
              <figure key={p.src} className="group relative aspect-16/10 overflow-hidden rounded-md bg-paper/5">
                <Image src={p.src} alt={`${p.client}: ${p.category}`} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 25vw" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/90 to-transparent px-3 pb-2.5 pt-10 leading-tight">
                  <span className="block text-[13px] font-medium text-paper">{p.client}</span>
                  <span className="block text-xs text-paper/75">{p.category}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <Section id="capabilities" label="04 — Capabilities" deep compact>
          <H2>A 35,000 sq. ft. production facility</H2>
          <p className="-mt-4 mb-8 max-w-2xl text-[17px] leading-relaxed text-ink/65">
            Our Cherlapally workshop brings digital printing and fabrication under one roof. Every display,
            stall and sign below was built there.
          </p>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
            {facilityPhotos.map((p) => (
              <figure key={p.src} className="relative aspect-16/10 overflow-hidden bg-line">
                <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 20vw" />
              </figure>
            ))}
          </div>
          <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-2 md:gap-16">
            {[
              { heading: "Machines & equipment", items: machinery },
              { heading: "Materials we work with", items: materialPartners },
            ].map(({ heading, items }) => (
              <div key={heading}>
                <h3 className="mb-3 text-sm text-ink/55">{heading}</h3>
                <div className="text-[15px] leading-[1.9] md:text-base"><DotList items={items} /></div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="about" label="05 — About">
          <p className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.025em]">
            A complete signage solution,{" "}
            <span className="text-orange-ink">from concept design to after-sales service.</span>
          </p>
          <div className="mt-12 grid gap-8 text-[17px] leading-relaxed text-ink/65 md:grid-cols-2">
            <p>
              {company.name} was started by {company.founder} as a sign manufacturing company. It has
              since grown into an integrated corporate identity and signage solutions company, and one of
              the leading signage manufacturers in Telangana and Andhra Pradesh.
            </p>
            <p>
              Our skilled signage team handles every stage, from initial concept design through
              manufacturing, installation and after-sales servicing, with reliable quality and
              on-time delivery at a competitive price.
            </p>
          </div>
          <div className="mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
            {[
              { heading: "Our values", items: values },
              { heading: "Where we work", items: states },
            ].map(({ heading, items }) => (
              <div key={heading}>
                <h3 className="mb-3 text-sm text-ink/55">{heading}</h3>
                <div className="text-lg leading-relaxed"><DotList items={items} /></div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" label="06 — Contact" deep>
          <H2>Get in touch</H2>
          <div className="space-y-10">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div className="flex flex-wrap gap-x-16 gap-y-8">
                {locations.map((loc) => (
                  <div key={loc.label}>
                    <p className="mb-2 text-sm text-ink/55">{loc.label}</p>
                    <address className="not-italic leading-relaxed">
                      {loc.address.map((l) => <div key={l}>{l}</div>)}
                    </address>
                    <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
                      className="mt-1 inline-flex h-11 items-center text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-ink">
                      Open in Google Maps
                    </a>
                  </div>
                ))}
              </div>
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer"
                className="inline-block rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-orange-ink">
                Message on WhatsApp
              </a>
            </div>
            <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
              {contacts.map((c, i) => (
                <div key={c.dept} className={`bg-paper p-6 ${i === 0 ? "md:col-span-3" : ""}`}>
                  <h3 className="font-semibold">{c.dept}</h3>
                  {c.person && <p className="text-sm text-ink/55">{c.person}</p>}
                  <ul className={`mt-2 text-[15px] ${i === 0 ? "grid grid-cols-2 gap-x-4 md:grid-cols-4 md:gap-x-6" : ""}`}>
                    {c.phones.map((p) => (
                      <li key={p}><a href={tel(p)} className="flex h-11 items-center whitespace-nowrap hover:text-orange-ink md:h-8">{p}</a></li>
                    ))}
                  </ul>
                  {c.email && (
                    <a href={`mailto:${c.email}`} className="flex min-h-11 items-center break-all text-[15px] text-ink/55 hover:text-orange-ink md:min-h-8">
                      {c.email}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>

      {/* Padding fills the phone's home-bar area. */}
      <footer className="bg-ink pb-[env(safe-area-inset-bottom)] text-paper/50">
        <div className={`${wrap} flex flex-col gap-3 py-8 text-[13px] sm:flex-row sm:justify-between`}>
          <p>© {new Date().getFullYear()} {company.name}</p>
          <ul className="-my-3 flex gap-6">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center hover:text-paper">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
