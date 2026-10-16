"use client";

import { useRef } from "react";

/** Section menu for phones: a disclosure that closes itself after a link is tapped. */
export default function MobileMenu({ links }: { links: { label: string; href: string }[] }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const close = () => ref.current?.removeAttribute("open");

  return (
    <details ref={ref} className="group relative md:hidden">
      <summary
        aria-label="Menu"
        className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-line [&::-webkit-details-marker]:hidden"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden className="stroke-current">
          <path d="M2 5h14M2 13h14" strokeWidth="1.6" strokeLinecap="round" className="group-open:hidden" />
          <path d="M4 4l10 10M14 4L4 14" strokeWidth="1.6" strokeLinecap="round" className="hidden group-open:block" />
        </svg>
      </summary>
      <nav className="absolute right-0 top-14 w-52 rounded-xl border border-line bg-white p-2 shadow-lg">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}
            className="block rounded-lg px-4 py-3 text-[15px] font-medium hover:bg-paper">
            {l.label}
          </a>
        ))}
      </nav>
    </details>
  );
}
