import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center">
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium tracking-wide text-blue-600">IT · DESIGN · DEVELOPMENT</p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">Building digital experiences with technology and design.</h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-500">I&apos;m Fida Taufiq Imazuddin, an IT enthusiast focused on technology, UI/UX design, and web development.</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects">View Projects</Button>

            <Button href="/about" variant="secondary">
              About Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
