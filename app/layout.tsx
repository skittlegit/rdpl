import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const plex = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reddys Digital Pvt. Ltd. | Signage & Large-Format Printing, Hyderabad",
  description:
    "Manufacturer and large-format digital printer of outdoor and indoor signage in Hyderabad: ACP boards, acrylic and LED signs, in-shop branding, displays, fleet graphics and HP Latex printing.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plex.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
