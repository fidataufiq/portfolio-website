import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

// Import foto secara langsung
import profilePic from "@/public/Create a profile photo with a professional photo studio background can use a gray background that is... (1) (1)-Photoroom.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 sm:pb-32 sm:pt-48">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.6fr_0.8fr]">
          <div>
            <Reveal>
              <p className="text-label font-medium text-blue-500">IT · DESIGN · DEVELOPMENT</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-display mt-4 max-w-3xl font-semibold uppercase text-neutral-100">Building digital experiences through technology and thoughtful design</h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-body mt-6 max-w-xl text-neutral-500">I&apos;m Fida Taufiq Imazuddin, an IT enthusiast exploring technology, UI/UX design, and modern web development through continuous learning and real projects.</p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/projects" className="rounded-full bg-white px-5 py-3 text-[12px] font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/10">
                  View Projects
                </Link>

                <Link
                  href="/about"
                  className="rounded-full border border-neutral-700 px-5 py-3 text-[12px] font-medium text-neutral-400 transition duration-300 hover:-translate-y-1 hover:border-neutral-500 hover:bg-white/5 hover:text-white"
                >
                  More about me
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Profile Picture Section */}
          <Parallax offset={60} className="relative mx-auto hidden w-full max-w-xs lg:block">
            {/* Soft Ambient White Glow */}
            <div className="pointer-events-none absolute -inset-4 rounded-full bg-white/5 blur-3xl opacity-60" />

            {/* Circle Image Frame (Semi-transparent Dark Gray Glass) */}
            <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-neutral-800/40 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-white/25 hover:bg-neutral-800/60">
              <Image src={profilePic} alt="Fida Taufiq Imazuddin" priority className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          </Parallax>
        </div>

        <div className="mt-12 grid grid-cols-3 border-t border-neutral-800 pt-4">
          <div>
            <p className="text-[18px] font-medium text-neutral-200">IT</p>
            <p className="mt-1 text-[11px] text-neutral-600">Technology</p>
          </div>

          <div>
            <p className="text-[18px] font-medium text-neutral-200">UI/UX</p>
            <p className="mt-1 text-[11px] text-neutral-600">Design</p>
          </div>

          <div>
            <p className="text-[18px] font-medium text-neutral-200">WEB</p>
            <p className="mt-1 text-[11px] text-neutral-600">Development</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
