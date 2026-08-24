import Link from "next/link";
import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-[0.2em] text-blue-600">IT · DESIGN · DEVELOPMENT</p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">Building digital experiences with technology and thoughtful design.</h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500 sm:text-xl">
            I&apos;m Fida Taufiq Imazuddin, an IT enthusiast exploring technology, UI/UX design, and modern web development through continuous learning and real projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/projects" className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700">
              View projects
            </Link>

            <Link href="/about" className="rounded-full border border-neutral-200 px-5 py-3 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50">
              More about me
            </Link>
          </div>

          <div className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-neutral-200 pt-8">
            <div>
              <p className="text-2xl font-semibold tracking-tight">IT</p>

              <p className="mt-1 text-sm text-neutral-500">Technology</p>
            </div>

            <div>
              <p className="text-2xl font-semibold tracking-tight">UI/UX</p>

              <p className="mt-1 text-sm text-neutral-500">Design</p>
            </div>

            <div>
              <p className="text-2xl font-semibold tracking-tight">WEB</p>

              <p className="mt-1 text-sm text-neutral-500">Development</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
