import Link from "next/link";
import LogoMark from "./LogoMark";
import { Mail, Phone, MapPin } from "lucide-react";

const nav = [
  { label: "Home",       href: "/"           },
  { label: "About Us",   href: "/about"      },
  { label: "Services",   href: "/services"   },
  { label: "Technology", href: "/technology" },
  { label: "Portfolio",  href: "/portfolio"  },
  { label: "Contact",    href: "/contact"    },
];

const services = [
  "Corporate Signage",
  "ACP Cladding",
  "Fleet Graphics",
  "Inshop Displays",
  "Wide-Format Print",
  "LED Signage",
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/reddysdigital",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/reddysdigital/",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/reddysdigital",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-ink border-t border-zinc-200 dark:border-zinc-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <LogoMark className="w-6 h-6" />
              <div>
                <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-ink dark:text-paper leading-none">
                  Reddys <span className="text-vermillion">Digital</span>
                </p>
                <p className="text-[9px] tracking-[0.12em] uppercase text-ink/40 dark:text-paper/35 mt-0.5">Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-[13px] text-ink/65 dark:text-paper/55 leading-relaxed mb-5">
              Complete Signage &amp; POP Display Solutions since 2004.
              Manufactured in Hyderabad, delivered pan-India.
            </p>
            <a
              href="https://wa.me/919703799777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-bold text-white bg-[#25D366] hover:bg-[#1dba59] transition-colors"
            >
              Chat on WhatsApp
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 mt-5">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-ink/50 dark:text-paper/40 hover:border-vermillion hover:text-vermillion dark:hover:border-vermillion dark:hover:text-vermillion transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-vermillion/70 dark:text-vermillion/60 mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {nav.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-[13px] text-ink/65 dark:text-paper/55 hover:text-ink dark:hover:text-paper transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-vermillion/70 dark:text-vermillion/60 mb-4">Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-[13px] text-ink/65 dark:text-paper/55 hover:text-ink dark:hover:text-paper transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-vermillion/70 dark:text-vermillion/60 mb-4">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={12} className="text-vermillion shrink-0 mt-0.5" />
                <span className="text-[13px] text-ink/65 dark:text-paper/55 leading-relaxed">
                  Plot No.10, Phase -1<br />Cherlapalli, Hyderabad<br />Telangana 500051
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={12} className="text-vermillion shrink-0" />
                <a href="tel:+919703799777" className="text-[13px] text-ink/65 dark:text-paper/55 hover:text-vermillion transition-colors">
                  +91 97037 99777 (Sales)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={12} className="text-vermillion shrink-0" />
                <a href="mailto:venkat@reddysdigital.com" className="text-[13px] text-ink/65 dark:text-paper/55 hover:text-vermillion transition-colors">
                  venkat@reddysdigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-ink/45 dark:text-paper/35">
          <p>&copy; {new Date().getFullYear()} Reddys Digital Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-3 flex-wrap">
            {socials.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="hover:text-vermillion transition-colors">{label}</a>
            ))}
            <span>Hyderabad, India.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
