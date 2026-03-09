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
        background:  isDark ? "#E87731" : "rgba(0,0,0,0.06)",
        borderColor: isDark ? "#cf631d" : "rgba(0,0,0,0.10)",
      }}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
        className={`${compact ? "w-4 h-4" : "w-5 h-5"} rounded-full bg-white shadow-md flex items-center justify-center`}
        style={{ marginLeft: isDark ? "auto" : "0" }}
      >
        {isDark
          ? <Moon size={compact ? 9 : 11} style={{ color: "#E87731" }} />
          : <Sun  size={compact ? 9 : 11} className="text-yellow-500" />}
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
          ? "py-3 backdrop-blur-2xl border-b shadow-xl " +
            (isDark
              ? "bg-gray-950/90 border-white/[0.06] shadow-black/50"
              : "bg-white/92 border-gray-200/80 shadow-gray-100")
          : isTransparent
          ? "py-5 bg-transparent"
          : "py-4 " +
            (isDark
              ? "bg-gray-950 border-b border-white/[0.06]"
              : "bg-white border-b border-gray-100"),
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
                    ? "text-white/70 hover:text-white"
                    : isDark
                    ? "text-zinc-400 hover:text-white"
                    : "text-zinc-500 hover:text-zinc-900",
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold bg-vermillion text-white hover:opacity-90 shadow-lg transition-all duration-200 group"
            style={{ boxShadow: "0 4px 20px rgba(200,75,12,0.28)" }}
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
                ? "text-white hover:bg-white/10"
                : isDark
                ? "text-zinc-300 hover:bg-white/8"
                : "text-zinc-700 hover:bg-zinc-100"
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
                ? "bg-gray-950/95 backdrop-blur-2xl border-white/[0.06]"
                : "bg-white/95 backdrop-blur-2xl border-gray-100"
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
                    className={`py-3 px-3 font-medium border-b last:border-b-0 rounded-lg transition-all duration-150 ${
                      isDark ? "border-white/5" : "border-gray-100"
                    } ${
                      active
                        ? "text-vermillion bg-vermillion/8"
                        : isDark
                        ? "text-zinc-300 hover:text-white hover:bg-white/5"
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-center py-3 rounded-xl font-bold text-[13px] bg-vermillion text-white hover:opacity-90 transition-all"
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
