import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Fida Taufiq Imazuddin, an IT enthusiast exploring technology, web development, and UI/UX design.",
};

export default function About() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <div>
            <p className="text-label font-medium text-blue-500">ABOUT ME</p>

            <h2 className="text-heading mt-4 font-semibold text-neutral-100">A curious mind behind the screen.</h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="text-body space-y-6 text-neutral-500">
            <p>I&apos;m an IT enthusiast with an interest in technology, UI/UX design, and web development. I enjoy exploring how technology can be turned into useful and intuitive digital experiences.</p>

            <p>My journey in technology has taken me through different areas, from computer systems and Android development to interface design and modern web technologies.</p>

            <p>I&apos;m currently focused on strengthening my skills, building real projects, and continuously learning how to create better digital products.</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
