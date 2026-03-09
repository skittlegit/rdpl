import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import ThemeColor from "./components/ThemeColor";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/** Sets <meta name="theme-color"> based on OS preference before JS loads. */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F3EE" },
    { media: "(prefers-color-scheme: dark)",  color: "#0F0E0C" },
  ],
};

export const metadata: Metadata = {
  title: "Reddys Digital Pvt. Ltd. | India's Premier Signage & Branding Manufacturer",
  description:
    "Complete Signage & POP Display Solutions — ACP Signages, Acrylic Letters, Fleet Graphics, LED Signages, and Inshop Branding. Serving Corporates, Healthcare, and Retail across India from our Hyderabad facility.",
  keywords:
    "signage manufacturer, ACP signage, LED signage, fleet graphics, acrylic letters, inshop branding, Hyderabad, India, Reddys Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <ThemeColor />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
