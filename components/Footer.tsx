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

const socials = [
  {
    name: "GitHub",
    href: "https://github.com",
    hoverColor: "group-hover:text-white",
    icon: (
      <svg className="h-4 w-4 fill-current transition-colors" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    hoverColor: "group-hover:text-blue-400",
    icon: (
      <svg className="h-4 w-4 fill-current transition-colors" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Behance",
    href: "https://behance.net",
    hoverColor: "group-hover:text-blue-500",
    icon: (
      <svg className="h-4 w-4 fill-current transition-colors" viewBox="0 0 24 24">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.101 0-5-2.08-5-5.5 0-3.376 1.849-5.5 5-5.5 3.016 0 4.67 2.08 4.67 5.097 0 .428-.046.852-.08 1.153h-7.238c.114 1.583 1.097 2.458 2.511 2.458 1.144 0 1.961-.477 2.274-1.208h2.589zm-4.726-5.833c-1.145 0-2.057.708-2.28 2.05h4.498c-.068-1.285-.98-2.05-2.218-2.05zM9.546 11.239c.866-.54 1.454-1.424 1.454-2.584 0-2.327-1.83-3.655-4.577-3.655h-6.423v14h6.816c3.123 0 4.884-1.579 4.884-3.951 0-1.742-1.026-3.085-2.154-3.81zm-6.546-3.739h3.111c1.23 0 1.935.53 1.935 1.493 0 .991-.735 1.534-1.965 1.534h-3.081v-3.027zm3.435 9.499h-3.435v-3.486h3.435c1.442 0 2.19.63 2.19 1.743 0 1.143-.778 1.743-2.19 1.743z" />
      </svg>
    ),
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com",
    hoverColor: "group-hover:text-pink-400",
    icon: (
      <svg className="h-4 w-4 fill-current transition-colors" viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.684 6.772c1.202 1.432 1.966 3.253 2.079 5.244-.452-.098-2.313-.464-4.636-.217-.184-.453-.38-.909-.594-1.364 2.186-1.121 2.924-3.238 3.151-3.663zm-4.072-2.582c-.221.411-.912 2.378-3.011 3.444-1.107-2.051-2.336-3.877-2.548-4.188 2.181-.132 4.195.82 5.559 2.144zm-7.61-1.309c.214.316 1.439 2.133 2.555 4.175-1.996.611-4.223.778-6.024.779.624-2.162 1.992-3.977 3.469-4.954zm-4.733 6.941c1.994-.002 4.482-.186 6.711-.86.208.435.405.874.587 1.312-3.01.991-5.719 3.593-6.273 4.156-1.077-1.334-1.74-3.029-1.74-4.877 0-.441.042-.871.115-1.288zm3.018 7.027c.485-.502 2.973-2.91 5.864-3.843.766 1.948 1.341 3.999 1.516 4.757-2.227 1.258-4.884 1.41-7.38.337l0-.001zm9.328 1.217c-.183-.798-.755-2.825-1.503-4.75 2.146-.264 3.903.076 4.341.171-.424 1.895-1.488 3.541-2.838 4.579z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: "https://discord.com",
    hoverColor: "group-hover:text-indigo-400",
    icon: (
      <svg className="h-4 w-4 fill-current transition-colors" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-white/[0.01]">
      <Container>
        {/* Main Footer Layout (12-Column Grid) */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-12 md:gap-8">
          {/* Brand & Bio (Span 5) */}
          <div className="md:col-span-5">
            <Link href="/" className="text-sm font-semibold tracking-tight text-neutral-100 transition-colors hover:text-blue-400">
              FIDA.
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">A personal portfolio focused on technology, design, and continuous learning.</p>
          </div>

          {/* Navigation (Span 3) */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">Navigation</p>

            <div className="mt-4 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-neutral-400 transition-colors hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect (Span 4 - 2 Column Sub-Grid) */}
          <div className="md:col-span-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">Connect</p>

            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {socials.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-white">
                  <span className={`text-neutral-500 ${social.hoverColor}`}>{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Fida Taufiq Imazuddin. All rights reserved.</p>

          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
}
