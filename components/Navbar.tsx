"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="border-b border-neutral-200/70 bg-[#fafafa]/95 backdrop-blur">
      <nav className="mx-auto max-w-5xl px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-tight" onClick={() => setIsOpen(false)}>
            FIDA.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={`text-sm transition ${isActive(item.href) ? "font-medium text-neutral-900" : "text-neutral-500 hover:text-neutral-900"}`}>
                {item.name}
              </Link>
            ))}
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
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm transition ${isActive(item.href) ? "bg-neutral-100 font-medium text-neutral-900" : "text-neutral-600 hover:bg-neutral-100"}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
