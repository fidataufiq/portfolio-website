import Link from "next/link";
import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="pb-24 pt-40 sm:pb-32 sm:pt-48">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.6fr_0.8fr]">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-blue-500">IT · DESIGN · DEVELOPMENT</p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-[1.2] tracking-tight text-neutral-100 sm:text-5xl">Building digital experiences through technology and thoughtful design</h1>

            <p className="mt-6 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base">
              I&apos;m Fida Taufiq Imazuddin, an IT enthusiast exploring technology, UI/UX design, and modern web development through continuous learning and real projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/10">
                View Projects
              </Link>

              <Link href="/about" className="rounded-full border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-400 transition duration-300 hover:-translate-y-1 hover:border-neutral-500 hover:bg-white/5 hover:text-white">
                More about me
              </Link>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-xs lg:block">
            <div className="aspect-square rounded-full bg-neutral-200" />

            <div className="absolute inset-0 flex items-end justify-center">
              <div className="flex h-full w-full items-end justify-center text-neutral-500">{/* Foto akan kita masukkan pada tahap berikutnya */}</div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 border-t border-neutral-800 pt-5">
          <div>
            <p className="text-lg font-medium text-neutral-200">IT</p>

            <p className="mt-1 text-xs text-neutral-600">Technology</p>
          </div>

          <div>
            <p className="text-lg font-medium text-neutral-200">UI/UX</p>

            <p className="mt-1 text-xs text-neutral-600">Design</p>
          </div>

          <div>
            <p className="text-lg font-medium text-neutral-200">WEB</p>

            <p className="mt-1 text-xs text-neutral-600">Development</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
