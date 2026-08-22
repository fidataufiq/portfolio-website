import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200/70">
      <nav className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight"
        >
          FIDA.
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-neutral-500 transition hover:text-neutral-900"
          >
            Home
          </Link>

          <Link
            href="/projects"
            className="text-sm text-neutral-500 transition hover:text-neutral-900"
          >
            Projects
          </Link>

          <Link
            href="/about"
            className="text-sm text-neutral-500 transition hover:text-neutral-900"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}