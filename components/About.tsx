import Container from "@/components/Container";

export default function About() {
  return (
    <section className="border-t border-neutral-200 py-24">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
        <div>
          <p className="text-sm font-medium tracking-wide text-blue-600">ABOUT ME</p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight">A curious mind behind the screen.</h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-neutral-500">
          <p>I&apos;m an IT enthusiast with an interest in technology, UI/UX design, and web development. I enjoy exploring how technology can be turned into useful and intuitive digital experiences.</p>

          <p>My journey in technology has taken me through different areas, from computer systems and Android development to interface design and modern web technologies.</p>

          <p>I&apos;m currently focused on strengthening my skills, building real projects, and continuously learning how to create better digital products.</p>
        </div>
      </Container>
    </section>
  );
}
