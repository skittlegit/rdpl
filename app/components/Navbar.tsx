"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import LogoMark from "./LogoMark";

const links = [
  { label: "Home",       href: "/"           },
  { label: "About",      href: "/about"      },
  { label: "Services",   href: "/services"   },
  { label: "Technology", href: "/technology" },
  { label: "Portfolio",  href: "/portfolio"  },
  { label: "Contact",    href: "/contact"    },
];

export default function Navbar() {
  const pathname   = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => { setIsClient(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-paper/92 dark:bg-ink/92 backdrop-blur-2xl border-b border-zinc-900/8 dark:border-paper/8 transition-all duration-300 ${
        scrolled ? "shadow-[0_1px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_24px_rgba(0,0,0,0.4)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark className="w-[22px] h-[22px]" />
          <div className="leading-none flex items-baseline gap-1">
            <span className="font-display italic text-[16px] font-bold text-ink dark:text-paper">Reddys</span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-vermillion">Digital</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          {links.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-3.5 py-2 text-[13px] transition-colors ${
                  active
                    ? "text-vermillion font-semibold"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-ink dark:hover:text-paper font-medium"
                }`}
              >
                {label}
                {active && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-vermillion" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {isClient && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-ink dark:hover:text-paper hover:bg-ink/5 dark:hover:bg-paper/8 transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={13} strokeWidth={2} /> : <Moon size={13} strokeWidth={2} />}
            </button>
          )}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-[7px] rounded-lg text-[12px] font-semibold tracking-wide border border-vermillion text-vermillion hover:bg-vermillion hover:text-white transition-all duration-200"
          >
            Get a Quote
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:bg-ink/5 dark:hover:bg-paper/8 transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={15} strokeWidth={2} /> : <Menu size={15} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-zinc-900/8 dark:border-paper/8 bg-paper/96 dark:bg-ink/96 backdrop-blur-2xl"
          >
            <nav className="px-6 py-4 flex flex-col gap-0.5">
              {links.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-[14px] transition-colors ${
                      active
                        ? "text-vermillion font-semibold bg-vermillion/5"
                        : "text-mid dark:text-zinc-400 hover:text-ink dark:hover:text-paper font-medium"
                    }`}
                  >
                    {label}
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-vermillion shrink-0" />}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 px-4 py-2.5 rounded-lg text-[13px] font-semibold border border-vermillion text-vermillion hover:bg-vermillion hover:text-white transition-colors text-center"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
