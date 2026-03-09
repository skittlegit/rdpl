"use client";
import { useEffect } from "react";

const LIGHT = "#F6F3EE"; // paper
const DARK  = "#0F0E0C"; // ink

function apply(isDark: boolean) {
  const color = isDark ? DARK : LIGHT;
  const scheme = isDark ? "dark" : "light";
  // Remove Next.js-generated media-queried metas so the browser uses only ours.
  document.querySelectorAll('meta[name="theme-color"]').forEach((el) => el.remove());
  const meta = document.createElement("meta");
  meta.name = "theme-color";
  meta.content = color;
  document.head.appendChild(meta);
  // color-scheme tells Safari/Chrome to paint their own UI chrome accordingly.
  document.documentElement.style.colorScheme = scheme;
}

/**
 * Watches <html class> for next-themes toggles and updates theme-color +
 * color-scheme inside requestAnimationFrame so the browser repaints the
 * status bar in the same frame as the rest of the UI.
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
