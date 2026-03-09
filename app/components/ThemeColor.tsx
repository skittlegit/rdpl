"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";

const COLORS = { light: "#F6F3EE", dark: "#0F0E0C" } as const;

/**
 * Keeps <meta name="theme-color"> in sync with the active theme so the
 * mobile browser status bar matches the app background (paper / ink).
 */
export default function ThemeColor() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;
    const color = COLORS[resolvedTheme as keyof typeof COLORS] ?? COLORS.light;
    document.querySelectorAll('meta[name="theme-color"]').forEach((el) => {
      el.setAttribute("content", color);
    });
  }, [resolvedTheme]);

  return null;
}
