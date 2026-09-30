"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/95 backdrop-blur">
      <div className="wrap flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold tracking-[-0.04em]" onClick={() => setOpen(false)}>
          MISO <span className="font-normal tracking-[0.3em] text-sm">STUDIO</span>
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
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-ink/10 bg-white lg:hidden">
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
