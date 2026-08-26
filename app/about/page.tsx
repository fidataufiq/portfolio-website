import Link from "next/link";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const skills = ["Web Development", "UI/UX Design", "Frontend Development", "JavaScript", "TypeScript", "React", "Next.js", "HTML & CSS", "MySQL", "Figma"];

const journey = [
  {
    period: "Early Journey",
    title: "Discovering Technology",
    description: "My interest in technology started with curiosity about computers, how they work, and how software can be created and customized.",
  },
  {
    period: "Learning Phase",
    title: "Exploring Development & Design",
    description: "I began exploring programming, web development, databases, Android development, and interface design through learning and personal projects.",
  },
  {
    period: "Present",
    title: "Building & Growing",
    description: "Currently, I focus on strengthening my practical skills by building projects and exploring modern technologies, design systems, and digital products.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ========================================
          INTRODUCTION
      ======================================== */}
      <section className="border-b border-neutral-900 py-24 sm:py-32">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-label font-medium text-blue-500">ABOUT ME</p>

              <h1 className="text-display mt-4 font-semibold text-neutral-100">Curious about technology. Always learning.</h1>

              <p className="text-body mt-6 max-w-2xl text-neutral-500">I&apos;m Fida Taufiq Imazuddin, an IT enthusiast with a strong interest in technology, digital products, web development, and interface design.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ========================================
          STORY
      ======================================== */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <p className="text-label font-medium text-blue-500">MY STORY</p>

              <h2 className="text-heading mt-4 font-semibold text-neutral-100">A journey driven by curiosity.</h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="text-body space-y-6 text-neutral-500">
              <p>My journey into technology began with curiosity. I was interested in computers, enjoyed exploring how they worked, and gradually became interested in the software and systems behind them.</p>

              <p>Over time, that curiosity led me to explore different areas of IT, including programming, web development, databases, Android development, and UI/UX design.</p>

              <p>
                I enjoy learning through experimentation and practical projects. For me, building something is one of the best ways to understand how technology works and how different skills can come together to create useful digital
                experiences.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ========================================
          SKILLS
      ======================================== */}
      <section className="border-y border-neutral-900 bg-[#080809] py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-label font-medium text-blue-500">SKILLS & FOCUS</p>

              <h2 className="text-heading mt-4 font-semibold text-neutral-100">Areas I enjoy exploring.</h2>

              <p className="text-body mt-6 text-neutral-500">I&apos;m interested in the intersection between technology, design, and practical problem solving.</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <Reveal key={skill} delay={index * 0.05}>
                <div className="rounded-xl border border-neutral-800 bg-[#0b0b0c] p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-600">
                  <p className="text-subheading font-medium text-neutral-200">{skill}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================
          JOURNEY
      ======================================== */}
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-label font-medium text-blue-500">JOURNEY</p>

              <h2 className="text-heading mt-4 font-semibold text-neutral-100">Learning through different stages.</h2>
            </div>
          </Reveal>

          <div className="mt-12">
            {journey.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="grid gap-4 border-t border-neutral-900 py-8 md:grid-cols-[0.4fr_0.6fr_1.5fr]">
                  <p className="text-label font-medium text-blue-500">{item.period}</p>

                  <h3 className="text-subheading font-medium text-neutral-200">{item.title}</h3>

                  <p className="text-body text-neutral-500">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================
          CURRENT FOCUS
      ======================================== */}
      <section className="border-y border-neutral-900 py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-label font-medium text-blue-500">CURRENTLY EXPLORING</p>

              <h2 className="text-heading mt-4 font-semibold text-neutral-100">Building, learning, and exploring what&apos;s next.</h2>

              <p className="text-body mt-6 max-w-2xl text-neutral-500">
                Right now, I&apos;m focused on improving my frontend development skills, building portfolio projects, learning more about modern web technologies, and exploring how good design can improve the way people interact with
                digital products.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ========================================
          CTA
      ======================================== */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-8 border border-neutral-800 bg-[#0b0b0c] p-8 sm:p-12 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="text-label font-medium text-blue-500">LET&apos;S CONNECT</p>

                <h2 className="text-heading mt-4 font-semibold text-neutral-100">Interested in working together or just having a conversation?</h2>

                <p className="text-body mt-6 text-neutral-500">Feel free to explore my projects or connect with me through my social platforms.</p>
              </div>

              <Link href="/projects" className="shrink-0 rounded-full bg-white px-5 py-3 text-[12px] font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/10">
                Explore Projects
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
