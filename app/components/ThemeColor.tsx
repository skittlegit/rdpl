"use client";
import { useEffect } from "react";

const LIGHT = "#F6F3EE"; // paper
const DARK  = "#0F0E0C"; // ink

/**
 * Replaces any media-queried theme-color metas with a single authoritative
 * one, then keeps it in sync via MutationObserver so it fires the instant
 * next-themes toggles the class on <html> — no React re-render delay.
 */
function apply(isDark: boolean) {
  const color = isDark ? DARK : LIGHT;
  // Remove Next.js-generated media-queried metas to avoid browser picking
  // the wrong one based on OS preference instead of the in-app toggle.
  document.querySelectorAll('meta[name="theme-color"]').forEach((el) => el.remove());
  const meta = document.createElement("meta");
  meta.name = "theme-color";
  meta.content = color;
  document.head.appendChild(meta);
}

export default function ThemeColor() {
  useEffect(() => {
    const html = document.documentElement;
    apply(html.classList.contains("dark"));
    const observer = new MutationObserver(() =>
      apply(html.classList.contains("dark"))
    );
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return null;
}
