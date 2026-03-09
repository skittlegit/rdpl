"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
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

function useIsClient() {
  return useSyncExternalStore(() => () => {}, () => true, () => false);
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();
  if (!isClient) return <div className="w-8 h-8" />;
  const isDark = resolvedTheme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle colour scheme"
      className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-colors text-mid hover:text-vermillion hover:bg-vermillion/10 dark:hover:bg-vermillion/15"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const isClient    = useIsClient();
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark        = isClient && resolvedTheme === "dark";
  const isHome        = pathname === "/";
  const isTransparent = isHome && !scrolled;

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-2.5 backdrop-blur-2xl border-b " +
            (isDark
              ? "bg-ink/90 border-zinc-800 shadow-lg shadow-ink/30"
              : "bg-paper/90 border-zinc-200/80 shadow-sm")
          : isTransparent
          ? "py-4 bg-transparent"
          : "py-3 border-b " +
            (isDark
              ? "bg-ink border-zinc-800"
              : "bg-paper border-zinc-200"),
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <LogoMark className="w-[22px] h-[22px]" />
          <div className="leading-none flex items-baseline gap-1">
            <span className={`font-display italic text-[16px] font-bold transition-colors duration-300 ${isTransparent ? (isDark ? "text-paper" : "text-ink") : "text-ink dark:text-paper"}`}>
              Reddys
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-vermillion">
              Digital
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(({ label, href }) => {
            const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "relative px-3 py-1.5 text-[13px] font-medium tracking-wide transition-colors duration-200",
                  active
                    ? "text-vermillion"
                    : isTransparent
                    ? isDark
                      ? "text-paper/70 hover:text-paper"
                      : "text-mid hover:text-ink"
                    : isDark
                    ? "text-mid hover:text-paper"
                    : "text-mid hover:text-ink",
                ].join(" ")}
              >
                {label}
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-vermillion rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right controls */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12px] font-semibold border border-vermillion text-vermillion hover:bg-vermillion hover:text-white transition-all duration-200 group"
          >
            Get a Quote
            <ArrowUpRight size={12} className="group-hover:-translate-y-px group-hover:translate-x-px transition-transform" />
          </Link>
        </div>

        {/* Mobile row */}
        <div className="lg:hidden flex items-center gap-1.5">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`p-2 rounded-lg transition-colors ${
              isTransparent
                ? isDark
                  ? "text-paper hover:bg-paper/10"
                  : "text-mid hover:text-ink hover:bg-zinc-100"
                : isDark
                ? "text-mid hover:text-paper hover:bg-zinc-800"
                : "text-mid hover:text-ink hover:bg-zinc-100"
            }`}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`lg:hidden overflow-hidden border-t ${
              isDark
                ? "bg-ink/95 backdrop-blur-2xl border-zinc-800"
                : "bg-paper/95 backdrop-blur-2xl border-zinc-200"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-col gap-0.5">
              {links.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-2.5 px-3 text-[14px] font-medium rounded-lg transition-colors duration-150 ${
                      active
                        ? "text-vermillion bg-vermillion/8"
                        : isDark
                        ? "text-mid hover:text-paper hover:bg-zinc-800/60"
                        : "text-mid hover:text-ink hover:bg-zinc-100/70"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
              <div className="pt-2 mt-1 border-t border-zinc-200 dark:border-zinc-800">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center py-2.5 rounded-lg text-[13px] font-semibold border border-vermillion text-vermillion hover:bg-vermillion hover:text-white transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
