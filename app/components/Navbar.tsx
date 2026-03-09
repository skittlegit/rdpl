"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Technology", href: "/technology" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

function useIsClient() {
  return useSyncExternalStore(
    (cb) => {
      window.addEventListener("focus", cb);
      return () => window.removeEventListener("focus", cb);
    },
    () => true,
    () => false
  );
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
      className={`relative ${compact ? "w-12 h-6" : "w-14 h-7"} rounded-full flex items-center px-1 cursor-pointer transition-all duration-300 border`}
      style={{
        background: isDark ? "#E87731" : "rgba(0,0,0,0.06)",
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
          : <Sun size={compact ? 9 : 11} className="text-yellow-500" />}
      </motion.div>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const isClient = useIsClient();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = isClient && resolvedTheme === "dark";
  const isHome = pathname === "/";
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
            (isDark ? "bg-gray-950 border-b border-white/[0.06]" : "bg-white border-b border-gray-100"),
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight select-none shrink-0 group">
          <span
            className={`font-black text-xl tracking-tight transition-colors duration-300 ${
              isTransparent ? "text-white" : isDark ? "text-white" : "text-gray-900"
            }`}
          >
            REDDYS<span className="text-brand-orange">DIGITAL</span>
          </span>
          <span
            className={`text-[9px] font-semibold tracking-[0.28em] uppercase transition-colors duration-300 ${
              isTransparent ? "text-white/40" : isDark ? "text-gray-600" : "text-gray-400"
            }`}
          >
            Pvt. Ltd.
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={[
                  "relative px-3.5 py-2 text-sm font-medium tracking-wide rounded-md transition-colors duration-200",
                  isActive
                    ? "text-brand-orange"
                    : isTransparent
                    ? "text-white/70 hover:text-white"
                    : isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900",
                ].join(" ")}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-md bg-brand-orange/10 dark:bg-brand-orange/15"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg transition-all duration-200 group"
            style={{ boxShadow: "0 4px 20px rgba(232,119,49,0.30)" }}
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
                ? "text-gray-300 hover:bg-white/8"
                : "text-gray-700 hover:bg-gray-100"
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
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 px-3 font-medium border-b last:border-b-0 transition-all duration-150 rounded-lg ${
                      isDark ? "border-white/5" : "border-gray-100"
                    } ${
                      isActive
                        ? "text-brand-orange bg-brand-orange/8"
                        : isDark
                        ? "text-gray-300 hover:text-white hover:bg-white/5"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-center py-3 rounded-xl font-bold text-sm bg-brand-orange text-white hover:bg-brand-orange-dark transition-all"
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

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function useIsClient() {
  return useSyncExternalStore(
    (cb) => { window.addEventListener("focus", cb); return () => window.removeEventListener("focus", cb); },
    () => true,
    () => false
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();
  if (!isClient) return <div className="w-14 h-7" />;
  const isDark = resolvedTheme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle colour scheme"
      className="relative w-14 h-7 rounded-full border transition-all duration-300 flex items-center px-1 cursor-pointer"
      style={{
        background: isDark ? "#E87731" : "rgba(0,0,0,0.08)",
        borderColor: isDark ? "#E87731" : "rgba(0,0,0,0.15)",
      }}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center"
        style={{ marginLeft: isDark ? "auto" : "0" }}
      >
        {isDark ? (
          <Moon size={11} className="text-brand-orange" />
        ) : (
          <Sun size={11} className="text-yellow-500" />
        )}
      </motion.div>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const isClient = useIsClient();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = isClient && resolvedTheme === "dark";

  const navBg = scrolled
    ? isDark
      ? "bg-[#0f1117]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30"
      : "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-lg"
    : "bg-transparent";

  const linkColor = scrolled
    ? isDark
      ? "text-slate-300 hover:text-brand-orange"
      : "text-[#5A6065] hover:text-brand-orange"
    : "text-white/85 hover:text-white";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex flex-col leading-tight select-none">
          <span
            className={`font-black text-xl tracking-tight transition-colors duration-300 ${
              scrolled ? (isDark ? "text-white" : "text-[#333333]") : "text-white"
            }`}
          >
            REDDYS<span className="text-brand-orange">DIGITAL</span>
          </span>
          <span
            className={`text-[9px] font-semibold tracking-[0.25em] uppercase transition-colors duration-300 ${
              scrolled ? (isDark ? "text-slate-500" : "text-[#6A747C]") : "text-white/50"
            }`}
          >
            Pvt. Ltd.
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${linkColor}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Controls */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-bold bg-brand-orange text-white hover:bg-brand-orange-dark shadow-md transition-all duration-200 group"
          >
            Get a Quote
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* Mobile row */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            className={`p-1 rounded-md transition-colors ${
              scrolled
                ? isDark ? "text-white hover:bg-white/10" : "text-[#333] hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`lg:hidden overflow-hidden border-t ${
              isDark
                ? "bg-[#0f1117]/95 backdrop-blur-xl border-white/5"
                : "bg-white/95 backdrop-blur-xl border-gray-100"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-2 font-medium border-b transition-all duration-200 last:border-b-0 hover:text-brand-orange hover:pl-4 ${
                    isDark ? "text-slate-300 border-white/5" : "text-[#5A6065] border-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 text-center py-3 px-5 rounded-md font-bold text-sm bg-brand-orange text-white hover:bg-brand-orange-dark transition-all duration-200"
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
