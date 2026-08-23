import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <Link href="/projects" className="text-sm text-neutral-500 transition hover:text-neutral-900">
          ← Back to projects
        </Link>

        <div className="mt-16 max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-blue-600">{project.category}</p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">{project.title}</h1>

          <p className="mt-6 text-xl leading-9 text-neutral-500">{project.description}</p>
        </div>

        <div className="mt-16 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>

            <p className="mt-6 text-lg leading-8 text-neutral-500">{project.longDescription}</p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm text-neutral-500">Role</p>

              <p className="mt-2 font-medium">{project.role}</p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">Year</p>

              <p className="mt-2 font-medium">{project.year}</p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">Technologies</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
