import Link from "next/link";

import Container from "@/components/Container";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-900">
      <Container>
        <div className="grid gap-12 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="text-sm font-semibold tracking-tight text-neutral-100">
              FIDA.
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">A personal portfolio focused on technology, design, and continuous learning.</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-600">Navigation</p>

            <div className="mt-4 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-neutral-500 transition-colors hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-600">Connect</p>

            <div className="mt-4 flex flex-col gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 transition-colors hover:text-white">
                GitHub
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 transition-colors hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-neutral-900 py-6 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Fida Taufiq Imazuddin. All rights reserved.</p>

          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
}
