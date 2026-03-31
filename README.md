# Reddys Digital — Corporate Website

Official website for **Reddys Digital Pvt. Ltd.**, a Hyderabad-based large-format printing, signage, and branding company founded in 2004 by **A. Venkat Reddy**.

## About Reddys Digital

Reddys Digital is a fully integrated visual communications company operating from a 50,000 sq.ft. campus in Cherlapalli, Hyderabad. With over two decades in the industry and 500+ corporate clients across 100+ cities, we handle everything in-house — design, printing, fabrication, and installation, with zero sub-contractors.

**Core services:**
- Corporate Signage (name boards, reception panels, wayfinding systems)
- ACP Cladding & Fabrication (facade panels, 3D letters, laser-cut metal)
- Fleet Graphics (vinyl wraps, magnetic panels, livery for trucks & buses)
- Inshop & POP Displays (standees, retail kits, fabric tension displays)
- Digital & Wide-Format Printing (HP Latex, Eco-Solvent, large-format)
- LED Signage & Illuminated Displays

**Credentials:**
- HP Latex Gold-tier certified production partner
- GREENGUARD-aligned, water-based ink processes
- Pan-India installation and logistics network

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, about snapshot, services grid, technology |
| `/about` | Company story, founder, milestones, values, credentials |
| `/services` | Full service catalogue |
| `/technology` | Equipment and print technology details |
| `/portfolio` | Project showcase |
| `/contact` | Contact form and office details |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Project Structure

```
app/
  page.tsx              # Home page
  layout.tsx            # Root layout with Navbar & Footer
  about/page.tsx        # About page
  services/page.tsx     # Services page
  technology/page.tsx   # Technology page
  portfolio/page.tsx    # Portfolio page
  contact/page.tsx      # Contact page
  components/           # Shared UI components
public/                 # Static assets
```