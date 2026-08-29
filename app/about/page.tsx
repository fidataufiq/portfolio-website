import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

import profilePic from "@/public/Create a profile photo with a professional photo studio background can use a gray background that is... (1) (1)-Photoroom.png";

const skills = [
  {
    name: "Web Development",
    category: "Development",
    accent: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]",
    glow: "bg-blue-500/10",
  },
  {
    name: "UI/UX Design",
    category: "Design",
    accent: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]",
    glow: "bg-purple-500/10",
  },
  {
    name: "Frontend Development",
    category: "Development",
    accent: "hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]",
    glow: "bg-indigo-500/10",
  },
  {
    name: "JavaScript",
    category: "Technology",
    accent: "hover:border-yellow-400/50 hover:shadow-[0_0_30px_rgba(250,204,21,0.10)]",
    glow: "bg-yellow-400/10",
  },
  {
    name: "TypeScript",
    category: "Technology",
    accent: "hover:border-blue-600/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.12)]",
    glow: "bg-blue-600/10",
  },
  {
    name: "React",
    category: "Frontend",
    accent: "hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.10)]",
    glow: "bg-cyan-400/10",
  },
  {
    name: "Next.js",
    category: "Frontend",
    accent: "hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]",
    glow: "bg-white/10",
  },
  {
    name: "HTML & CSS",
    category: "Foundation",
    accent: "hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.10)]",
    glow: "bg-orange-500/10",
  },
  {
    name: "MySQL",
    category: "Database",
    accent: "hover:border-teal-400/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.10)]",
    glow: "bg-teal-400/10",
  },
  {
    name: "Figma",
    category: "Design",
    accent: "hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.10)]",
    glow: "bg-pink-500/10",
  },
];

const journey = [
  {
    number: "01",
    period: "Early Journey",
    title: "Discovering Technology",
    description: "My interest in technology started with curiosity about computers, how they work, and how software can be created and customized.",
  },
  {
    number: "02",
    period: "Learning Phase",
    title: "Exploring Development & Design",
    description: "I began exploring programming, web development, databases, Android development, and interface design through learning and personal projects.",
  },
  {
    number: "03",
    period: "Present",
    title: "Building & Growing",
    description: "Currently, I focus on strengthening my practical skills by building projects and exploring modern technologies, design systems, and digital products.",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Frontend",
    description: "Building responsive interfaces and improving my understanding of modern web development.",
  },
  {
    number: "02",
    title: "UI/UX",
    description: "Exploring how visual design and user experience can work together effectively.",
  },
  {
    number: "03",
    title: "Digital Products",
    description: "Learning how ideas can be transformed into useful and meaningful products.",
  },
  {
    number: "04",
    title: "Continuous Learning",
    description: "Improving through experimentation, projects, mistakes, and consistent practice.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ========================================
          ABOUT HERO
      ======================================== */}
      <section className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* LEFT CONTENT */}
            <div className="max-w-2xl">
              <Reveal>
                <p className="text-label font-medium text-blue-500">ABOUT ME</p>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-display mt-4 font-semibold text-neutral-100">Curious about technology. Always learning.</h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-body mt-6 max-w-xl text-neutral-500">I&apos;m Fida Taufiq Imazuddin, an IT enthusiast with a strong interest in technology, digital products, web development, and interface design.</p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-8">
                  <div>
                    <p className="text-label text-neutral-600">FOCUS</p>
                    <p className="mt-2 text-sm font-medium text-neutral-200">Technology & Design</p>
                  </div>

                  <div>
                    <p className="text-label text-neutral-600">APPROACH</p>
                    <p className="mt-2 text-sm font-medium text-neutral-200">Learn by Building</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT VISUAL */}
            <Reveal delay={0.2}>
              <Parallax offset={35} className="relative mx-auto w-full max-w-md">
                <div className="pointer-events-none absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
                  <Image src={profilePic} alt="Fida Taufiq Imazuddin" priority className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />

                  {/* Visual overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                      <p className="text-xs text-neutral-500">Currently exploring</p>

                      <p className="mt-1 text-sm font-medium text-white">Technology, Design & Digital Products</p>
                    </div>
                  </div>
                </div>
              </Parallax>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ========================================
          MY STORY
      ======================================== */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            {/* Editorial heading */}
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="text-label font-medium text-blue-500">MY STORY</p>

                <h2 className="text-heading mt-4 font-semibold text-neutral-100">A journey driven by curiosity.</h2>

                <div className="mt-8 h-px w-16 bg-blue-500/60" />
              </div>
            </Reveal>

            {/* Story */}
            <Reveal delay={0.1}>
              <div className="max-w-2xl">
                <p className="text-body text-neutral-400">
                  My journey into technology began with curiosity. I was interested in computers, enjoyed exploring how they worked, and gradually became interested in the software and systems behind them.
                </p>

                <p className="text-body mt-6 text-neutral-500">Over time, that curiosity led me to explore different areas of IT, including programming, web development, databases, Android development, and UI/UX design.</p>

                <div className="my-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                  <p className="text-lg leading-relaxed text-neutral-300">“Building something is one of the best ways to understand how technology works.”</p>
                </div>

                <p className="text-body text-neutral-500">
                  I enjoy learning through experimentation and practical projects. For me, creating something from an idea is an opportunity to understand how technology, design, and problem-solving can come together to create useful
                  digital experiences.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ========================================
          SKILLS
      ======================================== */}
      <section className="py-20 sm:py-28">
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
              <Reveal key={skill.name} delay={index * 0.05}>
                <div className={`group relative min-h-36 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] ${skill.accent}`}>
                  <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl opacity-40 transition-opacity duration-300 group-hover:opacity-100 ${skill.glow}`} />

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <p className="text-label text-neutral-600">{skill.category}</p>

                    <p className="text-subheading font-medium text-neutral-100">{skill.name}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================
          JOURNEY TIMELINE
      ======================================== */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-label font-medium text-blue-500">JOURNEY</p>

              <h2 className="text-heading mt-4 font-semibold text-neutral-100">Learning through different stages.</h2>
            </div>
          </Reveal>

          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute bottom-8 left-[11px] top-8 w-px bg-white/10 sm:left-[15px]" />

            <div className="space-y-12">
              {journey.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.1}>
                  <div className="relative grid gap-6 pl-10 sm:pl-14 md:grid-cols-[0.7fr_1fr_1.3fr] md:gap-10">
                    {/* Timeline point */}
                    <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/50 bg-[#050505] sm:h-8 sm:w-8">
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                    </div>

                    <div>
                      <p className="text-label text-neutral-600">{item.number}</p>

                      <p className="mt-2 text-sm text-blue-400">{item.period}</p>
                    </div>

                    <h3 className="text-subheading font-medium text-neutral-100">{item.title}</h3>

                    <p className="text-body text-neutral-500">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================
          CURRENT FOCUS
      ======================================== */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-label font-medium text-blue-500">CURRENT FOCUS</p>

              <h2 className="text-heading mt-4 font-semibold text-neutral-100">Building, learning, and exploring what&apos;s next.</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.08}>
                <div className="group relative min-h-56 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] sm:p-8">
                  <span className="text-5xl font-semibold tracking-tight text-white/5 transition-colors duration-300 group-hover:text-blue-500/10">{area.number}</span>

                  <div className="absolute bottom-7 left-7 right-7 sm:bottom-8 sm:left-8 sm:right-8">
                    <h3 className="text-subheading font-medium text-neutral-100">{area.title}</h3>

                    <p className="text-body mt-3 max-w-md text-neutral-500">{area.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================
          CTA
      ======================================== */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent p-8 backdrop-blur-xl sm:p-14">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

              <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />

                      <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                    </span>
                    LET&apos;S CONNECT
                  </div>

                  <h2 className="text-heading mt-4 font-semibold text-neutral-100">Interested in working together or just having a conversation?</h2>

                  <p className="text-body mt-4 text-neutral-400">Feel free to explore my projects or connect with me through my social platforms.</p>
                </div>

                <Link
                  href="/projects"
                  className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-100 hover:shadow-[0_0_35px_rgba(255,255,255,0.3)] active:translate-y-0"
                >
                  <span>Explore Projects</span>

                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
