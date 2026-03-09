import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppWidget from "./WhatsAppWidget";
import type { ReactNode } from "react";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-paper dark:bg-ink transition-colors duration-300">
        {children}
      </div>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
