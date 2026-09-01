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
    href: "https://github.com/fidataufiq",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },

  {
    name: "LinkedIn",
    href: "www.linkedin.com/in/fida-taufiq-imazuddin-488291222",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },

  {
    name: "Behance",
    href: "https://www.behance.net/fidataufiqhero",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.101 0-5-2.08-5-5.5 0-3.376 1.849-5.5 5-5.5 3.016 0 4.67 2.08 4.67 5.097 0 .428-.046.852-.08 1.153h-7.238c.114 1.583 1.097 2.458 2.511 2.458 1.144 0 1.961-.477 2.274-1.208h2.589zm-4.726-5.833c-1.145 0-2.057.708-2.28 2.05h4.498c-.068-1.285-.98-2.05-2.218-2.05zM9.546 11.239c.866-.54 1.454-1.424 1.454-2.584 0-2.327-1.83-3.655-4.577-3.655h-6.423v14h6.816c3.123 0 4.884-1.579 4.884-3.951 0-1.742-1.026-3.085-2.154-3.81zm-6.546-3.739h3.111c1.23 0 1.935.53 1.935 1.493 0 .991-.735 1.534-1.965 1.534h-3.081v-3.027zm3.435 9.499h-3.435v-3.486h3.435c1.442 0 2.19.63 2.19 1.743 0 1.143-.778 1.743-2.19 1.743z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/[0.01]">
      <Container>
        {/* Closing Section */}
        <div className="pt-20 sm:pt-28">
          <p className="text-label font-medium text-blue-500">LET&apos;S CONNECT</p>

          <div className="mt-5 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-heading max-w-2xl font-semibold text-neutral-100">Have an idea or want to work together?</h2>

              <p className="text-body mt-5 max-w-xl text-neutral-500">I&apos;m always interested in technology, design, and meaningful digital projects. Feel free to connect.</p>
            </div>

            <a
              href="mailto:fidataufiqimazuddin@email.com"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/10"
            >
              Get in touch
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-20 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="text-sm font-semibold tracking-tight text-neutral-100 transition-colors hover:text-blue-400">
              FIDA.
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">A personal portfolio focused on technology, thoughtful design, and continuous learning.</p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-label font-medium text-neutral-600">NAVIGATION</p>

            <div className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="group inline-flex w-fit items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white">
                  <span className="h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-3" />

                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <p className="text-label font-medium text-neutral-600">CONNECT</p>

            <div className="mt-5 flex flex-col gap-3">
              {socials.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="group inline-flex w-fit items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-white">
                  <span className="text-neutral-500 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400">{social.icon}</span>

                  <span>{social.name}</span>

                  <span className="translate-x-0 text-xs text-neutral-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-neutral-300">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 pb-8 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Fida Taufiq Imazuddin. All rights reserved.</p>

          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
}
