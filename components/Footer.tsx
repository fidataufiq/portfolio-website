import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-sm font-semibold tracking-tight">
            FIDA.
          </Link>

          <p className="mt-2 text-sm text-neutral-500">Building digital experiences with technology and design.</p>
        </div>

        <p className="text-sm text-neutral-500">© {currentYear} Fida Taufiq Imazuddin. All rights reserved.</p>
      </div>
    </footer>
  );
}
