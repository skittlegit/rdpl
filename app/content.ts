// All site copy lives here. Edit this file to update the website.
// Source: RDPL company profile (HD edition) and reddysdigital.com.

export const company = {
  name: "Reddys Digital Pvt. Ltd.",
  founder: "Aeleni Venkat Reddy",
  whatsapp: "https://wa.me/919703799777",
};

// Add the office here as another entry once its address is confirmed.
export const locations = [
  {
    label: "Workshop",
    address: ["Plot No. 10, I.D.A Cherlapally, Phase-1", "Kapra Mandal, Medchal-Malkajgiri (Dist.)", "Telangana 500051"],
    mapUrl: "https://maps.google.com/?q=Reddys+Digital+Pvt+Ltd+Cherlapally+Hyderabad",
  },
];

// Grouped by sector; the full list from the company profile.
export const clientGroups: { sector: string; names: string[] }[] = [
  {
    sector: "Tiles, bath & building materials",
    names: ["Kajaria", "Kerovit", "Cera", "Hindware", "Truflo by Hindware", "Johnson", "Simpolo", "Qutone",
      "Welspun Flooring", "Aquel", "Merino", "Greenpanel", "Sentini Flo Pipes", "Nerolac", "British Paints", "Dulux"],
  },
  {
    sector: "Cement",
    names: ["ACC Cement", "JSW Cement", "Ramco Supergrade", "Nagarjuna Cement", "Maha HD Cement", "Priya Cement"],
  },
  {
    sector: "Electricals & appliances",
    names: ["V-Guard", "Havells", "Orient Electric", "Polycab", "KEI", "Finecab", "Anchor by Panasonic", "GreatWhite",
      "Fybros", "LG", "Lloyd", "Greenchef", "Usha", "Elica", "Pigeon", "Preethi", "Kenstar", "Venus", "Falcon"],
  },
  {
    sector: "Food, dairy & beverages",
    names: ["Heritage", "Dodla Dairy", "Hatsun", "Milky Mist", "Mother Dairy", "Godrej Jersey", "Thirumala",
      "Cream Bell", "Three Mango", "Patanjali", "Heineken"],
  },
  {
    sector: "Retail & lifestyle",
    names: ["Smart Superstore", "More", "bigbasket", "Century Mattresses", "Relaxwell Mattresses", "Peps"],
  },
  {
    sector: "Automotive & energy",
    names: ["Ashok Leyland", "Olectra", "Apollo Tyres", "Gulf", "Valvoline", "Veedol", "Supergas"],
  },
  {
    sector: "Banking, healthcare & media",
    names: ["CSB Bank", "Federal Bank", "Dhanlaxmi Bank", "Bharat Financial Inclusion", "Apollo Clinic", "Tata Play"],
  },
];

// Counts rounded down to the nearest 5, e.g. 66 -> "65+".
const roundedPlus = (n: number) => `${Math.floor(n / 5) * 5}+`;
const clientCount = clientGroups.reduce((n, g) => n + g.names.length, 0);
export const brandsServed = roundedPlus(clientCount);

// Named in the hero as a quick proof of trust.
export const featuredClients = ["Heritage", "Polycab", "Havells", "Kajaria", "JSW Cement"];
export const otherClients = roundedPlus(clientCount - featuredClients.length);

export const stats = [
  { value: "20+", label: "Years in signage" },
  { value: "35K", label: "Sq. ft. facility" },
  { value: brandsServed, label: "Brands served" },
  { value: "8", label: "States covered" },
];

export const serviceGroups = [
  {
    group: "Signage",
    items: ["ACP Boards", "Acrylic Letters", "LED Signs", "Glow Signs", "LED Clip-on Frames", "Dealer Boards",
      "Gate Arches", "Interior Signage"],
  },
  {
    group: "Retail & in-store",
    items: ["In-shop Branding", "Shop-in-Shop Displays", "POP Displays", "Wooden Displays", "Internal Display Stands",
      "Internal MDF Stands"],
  },
  {
    group: "Large-format printing",
    items: ["Latex Printing", "UV Printing", "Hoarding Skins", "Floor Graphics", "Stage Backdrops"],
  },
  {
    group: "Promotions & events",
    items: ["Roll-up Standees", "Promo Tables", "Demo Tents"],
  },
  {
    group: "Vehicle branding",
    items: ["Fleet Graphics", "Auto Stickers"],
  },
];

// Hero mosaic: two staggered columns of three. Photos are in public/hero/.
export const heroPhotos = [
  { src: "/hero/heritage-plant.webp", alt: "Heritage Foods plant facade branding" },
  { src: "/hero/heritage-sign.webp", alt: "Illuminated I love Heritage sign" },
  { src: "/hero/aquel-display.webp", alt: "Aquel bathware display unit" },
  { src: "/hero/priya-cement.webp", alt: "Priya Cement mixer truck branding" },
  { src: "/hero/polycab-office.webp", alt: "Polycab office reception branding" },
  { src: "/hero/olectra-bus.webp", alt: "Olectra electric bus livery" },
];

// Photos are in public/work/. Add, remove or reorder entries to change the portfolio grid.
export const work = [
  { src: "/work/heritage-gate.webp", client: "Heritage Foods", category: "ACP gate canopy" },
  { src: "/work/milkymist-store.webp", client: "Milky Mist", category: "Glow sign" },
  { src: "/work/simpolo-letters.webp", client: "Simpolo", category: "Steel letters" },
  { src: "/work/heritage-hoarding.webp", client: "Heritage", category: "Hoarding" },
  { src: "/work/polycab-centre.webp", client: "Polycab", category: "Experience centre" },
  { src: "/work/havells-display.webp", client: "Havells", category: "Display unit" },
  { src: "/work/truflo-display.webp", client: "Truflo by Hindware", category: "Shop-in-shop" },
  { src: "/work/heritage-wall.webp", client: "Heritage", category: "Wall graphics" },
  { src: "/work/aquel-stand.webp", client: "Aquel", category: "Showroom display" },
  { src: "/work/jersey-cart.webp", client: "Godrej Jersey", category: "Event cart" },
  { src: "/work/dodla-truck.webp", client: "Dodla Dairy", category: "Fleet graphics" },
  { src: "/work/priya-vehicle.webp", client: "Priya Cement", category: "Vehicle branding" },
];

export const machinery = [
  "HP Latex 3600 (up to 3.2 m)",
  "Epson SureColor S40670 eco-solvent",
  "UV flatbed printer",
  "UV roll-to-roll printer",
  "CNC cutting",
  "Laser cutting",
  "Plotter cutting",
  "Aluminium channel bending",
];

// Displays fabricated in the Cherlapally workshop. Photos are in public/facility/.
export const facilityPhotos = [
  { src: "/facility/vguard-stall.webp", alt: "V-Guard exhibition stall built in our workshop" },
  { src: "/facility/havells-wall.webp", alt: "Havells illuminated display wall built in our workshop" },
  { src: "/facility/anchor-wall.webp", alt: "Anchor by Panasonic switch display wall built in our workshop" },
  { src: "/facility/gm-fans.webp", alt: "GM fans backlit display built in our workshop" },
];

export const materialPartners = ["3M (Authorised Converter)", "Avery Dennison", "LG Hausys", "Starflex", "HP"];

export const values = ["Expertise", "Initiative", "Balance", "Teamwork", "Passion", "Respect"];

export const states = ["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu", "Kerala", "Maharashtra",
  "Chhattisgarh", "Odisha"];

export const contacts = [
  {
    dept: "Sales & Marketing",
    phones: ["+91 80080 02265", "+91 97037 99777", "+91 80080 25284", "+91 91000 67301", "+91 80080 32513",
      "+91 91000 67304", "+91 99491 99800", "+91 99490 99800", "+91 91006 99913", "+91 80080 25753"],
  },
  {
    dept: "Managing Director",
    person: "A. Venkat Reddy",
    phones: ["+91 97015 77799"],
    email: "venkat@reddysdigital.com",
  },
  { dept: "Accounts", phones: ["+91 80086 77822", "+91 91000 67305"], email: "accts@reddysdigital.com" },
  { dept: "Production", phones: ["+91 91006 99914"], email: "production@reddysdigital.com" },
];

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/reddysdigital" },
  { label: "Facebook", href: "https://www.facebook.com/reddysdigital/" },
  { label: "Instagram", href: "https://www.instagram.com/reddysdigital" },
];
