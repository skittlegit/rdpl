"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { useEffect, type ReactNode } from "react";

/** Keeps <meta name="theme-color"> in sync with the resolved theme so mobile
 *  browser chrome (address bar, status bar) always matches the site. */
function ThemeColorSync() {
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    const color = resolvedTheme === "dark" ? "#0F0E0C" : "#EDE9E3";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = color;
  }, [resolvedTheme]);
  return null;
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      <ThemeColorSync />
      {children}
    </NextThemesProvider>
  );
}
