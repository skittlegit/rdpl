"use client";
import { useEffect } from "react";

const LIGHT = "#F6F3EE"; // paper
const DARK  = "#0F0E0C"; // ink

function apply(isDark: boolean) {
  const color  = isDark ? DARK  : LIGHT;
  const scheme = isDark ? "dark" : "light";
  document.querySelectorAll('meta[name="theme-color"]').forEach((el) => el.remove());
  const meta = document.createElement("meta");
  meta.name    = "theme-color";
  meta.content = color;
  document.head.appendChild(meta);
  document.documentElement.style.colorScheme = scheme;
}

/**
 * Keeps <meta name="theme-color"> and color-scheme in sync with next-themes
 * by watching <html class> via MutationObserver, wrapped in rAF so the
 * status bar repaints in the same frame as the rest of the UI.
 */
export default function ThemeColor() {
  useEffect(() => {
    const html = document.documentElement;
    requestAnimationFrame(() => apply(html.classList.contains("dark")));
    const observer = new MutationObserver(() =>
      requestAnimationFrame(() => apply(html.classList.contains("dark")))
    );
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return null;
}
