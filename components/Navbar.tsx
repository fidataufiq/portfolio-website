"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
      setIsScrolled(window.scrollY > 20);
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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-0"}`}>
      <nav className={`mx-auto max-w-5xl px-6 transition-all duration-300 ${isScrolled ? "rounded-2xl border border-neutral-800/80 bg-[#0b0b0c]/90 shadow-xl shadow-black/20 backdrop-blur-xl" : ""}`}>
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-14" : "h-20"}`}>
          {/* Logo */}
          <Link href="/" className="text-[12px] font-semibold tracking-tight text-neutral-100" onClick={() => setIsOpen(false)}>
            FIDA.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={`relative text-[12px] transition-colors duration-300 ${isActive(item.href) ? "font-medium text-white" : "text-neutral-500 hover:text-neutral-200"}`}>
                {item.name}

                {isActive(item.href) && <span className="absolute -bottom-2 left-0 h-px w-full bg-blue-500" />}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-white md:hidden"
          >
            <span className="text-xl">{isOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-neutral-800 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-3 text-[12px] transition-colors ${isActive(item.href) ? "bg-neutral-900 font-medium text-white" : "text-neutral-500 hover:bg-neutral-900 hover:text-white"}`}
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
