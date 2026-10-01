"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-sage bg-white/95 backdrop-blur">
      <div className="wrap flex items-center justify-between py-2">
        <Link href="/" aria-label="MISO Studio home" onClick={() => setOpen(false)}>
          <Image src="/images/miso-studio-logo.webp" alt="MISO Studio" width={446} height={206} priority className="h-12 w-auto" />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-sage-dark">
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-full border border-ink/30 px-4 py-2 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-sage bg-white lg:hidden">
          <ul className="wrap py-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="block py-3 text-lg" onClick={() => setOpen(false)}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
