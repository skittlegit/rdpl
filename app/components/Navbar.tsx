"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
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

function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();
  if (!isClient) return <div className={compact ? "w-12 h-6" : "w-14 h-7"} />;
  const isDark = resolvedTheme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle colour scheme"
      className={`relative ${compact ? "w-12 h-6" : "w-14 h-7"} rounded-full flex items-center px-1 cursor-pointer transition-all duration-300 border shrink-0`}
      style={{
        background:  isDark ? "#C84B0C" : "rgba(15,14,12,0.06)",
        borderColor: isDark ? "#a03c09" : "rgba(15,14,12,0.10)",
      }}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
        className={`${compact ? "w-4 h-4" : "w-5 h-5"} rounded-full bg-paper shadow-md flex items-center justify-center`}
        style={{ marginLeft: isDark ? "auto" : "0" }}
      >
        {isDark
          ? <Moon size={compact ? 9 : 11} className="text-vermillion" />
          : <Sun  size={compact ? 9 : 11} className="text-vermillion" />}
      </motion.div>
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
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 backdrop-blur-2xl border-b " +
            (isDark
              ? "bg-ink/90 border-zinc-800 shadow-xl shadow-ink/40"
              : "bg-paper/92 border-zinc-200/80 shadow-sm shadow-zinc-200/60")
          : isTransparent
          ? "py-5 bg-transparent"
          : "py-4 border-b " +
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
            <span className={`font-display italic text-[16px] font-bold transition-colors duration-300 ${isTransparent ? "text-paper" : "text-ink dark:text-paper"}`}>
              Reddys
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-vermillion">
              Digital
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center">
          {links.map(({ label, href }) => {
            const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "relative px-3.5 py-2 text-[13px] font-medium tracking-wide rounded-md transition-colors duration-200",
                  active
                    ? "text-vermillion font-semibold"
                    : isTransparent
                    ? "text-paper/70 hover:text-paper"
                    : isDark
                    ? "text-mid hover:text-paper"
                    : "text-mid hover:text-ink",
                ].join(" ")}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-md bg-vermillion/10 dark:bg-vermillion/15"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right controls */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold bg-vermillion text-white hover:bg-vermillion-dark transition-colors shadow-lg shadow-vermillion/25 group"
          >
            Get a Quote
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile row */}
        <div className="lg:hidden flex items-center gap-2.5">
          <ThemeToggle compact />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`p-2 rounded-lg transition-colors ${
              isTransparent
                ? "text-paper hover:bg-paper/10"
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
            transition={{ duration: 0.22 }}
            className={`lg:hidden overflow-hidden border-t ${
              isDark
                ? "bg-ink/95 backdrop-blur-2xl border-zinc-800"
                : "bg-paper/95 backdrop-blur-2xl border-zinc-200"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col">
              {links.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 px-3 text-[14px] font-medium border-b last:border-b-0 rounded-lg transition-all duration-150 ${
                      isDark ? "border-zinc-800" : "border-zinc-100"
                    } ${
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
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-center py-3 rounded-xl font-bold text-[13px] bg-vermillion text-white hover:bg-vermillion-dark transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
