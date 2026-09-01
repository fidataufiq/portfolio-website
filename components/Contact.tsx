import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const contactLinks = [
  {
    label: "Email",
    value: "fidataufiqimazuddin@email.com",
    href: "mailto:fidataufiqimazuddin@email.com",
  },
  {
    label: "LinkedIn",
    value: "Fida Taufiq Imazuddin",
    href: "www.linkedin.com/in/fida-taufiq-imazuddin-488291222",
  },
  {
    label: "GitHub",
    value: "fidataufiq",
    href: "https://github.com/fidataufiq",
  },
];

export default function Contact() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
            {/* Left Content */}
            <div>
              <p className="text-label font-medium text-blue-500">CONTACT</p>

              <h2 className="text-heading mt-4 max-w-xl font-semibold text-neutral-100">Have an idea, project, or opportunity?</h2>

              <p className="text-body mt-6 max-w-lg text-neutral-500">I&apos;m always open to conversations about technology, creative projects, and opportunities to learn and grow.</p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col">
              {contactLinks.map((item, index) => (
                <Reveal key={item.label} delay={index * 0.08}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between border-t border-neutral-800 py-5 transition-colors hover:border-neutral-600"
                  >
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-600">{item.label}</p>

                      <p className="mt-2 text-sm text-neutral-300 transition-colors group-hover:text-white">{item.value}</p>
                    </div>

                    <span className="text-lg text-neutral-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">↗</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
