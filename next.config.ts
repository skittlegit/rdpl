import type { NextConfig } from "next";

// Old multi-page URLs now point at sections of the single page.
const sections: Record<string, string> = {
  about: "about",
  services: "services",
  technology: "capabilities",
  portfolio: "work",
  contact: "contact",
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(sections).map(([path, id]) => ({
      source: `/${path}`,
      destination: `/#${id}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
