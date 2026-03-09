import Image from "next/image";

/**
 * LogoMark — printer's registration mark by default.
 *
 * To use a custom company logo:
 *   1. Place your logo image at  public/logo.png  (PNG, SVG, or WebP all work)
 *   2. Change  CUSTOM_LOGO  to  true  below
 */
const CUSTOM_LOGO = false;

export default function LogoMark({ className = "w-7 h-7" }: { className?: string }) {
  if (CUSTOM_LOGO) {
    return (
      <Image
        src="/logo.png"
        alt="Reddys Digital"
        width={36}
        height={36}
        className={className}
        style={{ objectFit: "contain" }}
      />
    );
  }

  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
      {/* Outer circle */}
      <circle cx="18" cy="18" r="15.5" stroke="#C84B0C" strokeWidth="1.5" />
      {/* Horizontal hairline — left of inner circle */}
      <line x1="1"  y1="18" x2="11" y2="18" stroke="#C84B0C" strokeWidth="1" />
      {/* Horizontal hairline — right of inner circle */}
      <line x1="25" y1="18" x2="35" y2="18" stroke="#C84B0C" strokeWidth="1" />
      {/* Vertical hairline — above inner circle */}
      <line x1="18" y1="1"  x2="18" y2="11" stroke="#C84B0C" strokeWidth="1" />
      {/* Vertical hairline — below inner circle */}
      <line x1="18" y1="25" x2="18" y2="35" stroke="#C84B0C" strokeWidth="1" />
      {/* Inner registration circle */}
      <circle cx="18" cy="18" r="5.5" stroke="#C84B0C" strokeWidth="1.5" />
      {/* Centre point */}
      <circle cx="18" cy="18" r="2"   fill="#C84B0C" />
    </svg>
  );
}
