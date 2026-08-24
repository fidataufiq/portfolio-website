"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="pointer-events-none fixed left-0 top-0 z-50 w-full px-4 pt-5 sm:px-6">
      <nav
        className={`pointer-events-auto mx-auto flex max-w-fit items-center rounded-full border transition-all duration-500 ${
          isScrolled ? "border-neutral-700/80 bg-neutral-950/90 shadow-lg shadow-black/40 backdrop-blur-xl" : "border-neutral-800/70 bg-neutral-900/70 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center px-2 py-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="rounded-full px-3 py-2 text-xs font-medium text-neutral-400 transition hover:text-white">
            FIDA.
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={`rounded-full px-3 py-2 text-xs transition duration-300 ${isActive(item.href) ? "bg-white text-black" : "text-neutral-500 hover:bg-white/10 hover:text-white"}`}>
                {item.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="ml-1 rounded-full px-3 py-2 text-xs text-neutral-400 transition hover:bg-white/10 hover:text-white md:hidden"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="pointer-events-auto mx-auto mt-3 max-w-xs rounded-2xl border border-neutral-800 bg-neutral-950/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm transition ${isActive(item.href) ? "bg-white text-black" : "text-neutral-500 hover:bg-white/10 hover:text-white"}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
