export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium tracking-wide text-blue-600">IT · DESIGN · DEVELOPMENT</p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">Building digital experiences with technology and design.</h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-500">I&apos;m Fida Taufiq Imazuddin, an IT enthusiast focused on technology, UI/UX design, and web development.</p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700">View Projects</button>

            <button className="rounded-lg border border-neutral-200 px-5 py-3 text-sm font-medium transition hover:bg-neutral-100">About Me</button>
          </div>
        </div>
      </section>
    </main>
  );
}
