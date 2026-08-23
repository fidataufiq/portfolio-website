"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200/70 bg-[#fafafa]/95 backdrop-blur">
      <nav className="mx-auto max-w-5xl px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-tight" onClick={() => setIsOpen(false)}>
            FIDA.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm text-neutral-500 transition hover:text-neutral-900">
              Home
            </Link>

            <Link href="/projects" className="text-sm text-neutral-500 transition hover:text-neutral-900">
              Projects
            </Link>

            <Link href="/about" className="text-sm text-neutral-500 transition hover:text-neutral-900">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button type="button" aria-label="Toggle navigation menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className="rounded-lg p-2 text-neutral-600 transition hover:bg-neutral-100 md:hidden">
            <span className="text-xl">{isOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-neutral-200 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              <Link href="/" onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3 text-sm text-neutral-600 transition hover:bg-neutral-100">
                Home
              </Link>

              <Link href="/projects" onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3 text-sm text-neutral-600 transition hover:bg-neutral-100">
                Projects
              </Link>

              <Link href="/about" onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3 text-sm text-neutral-600 transition hover:bg-neutral-100">
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
