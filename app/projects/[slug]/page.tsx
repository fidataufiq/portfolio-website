import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <Container>
          <Link href="/projects" className="text-[12px] text-neutral-500 transition hover:text-white">
            ← Back to projects
          </Link>

          <div className="mt-12 max-w-3xl">
            <p className="text-label font-medium text-blue-500">{project.category}</p>

            <h1 className="text-display mt-4 font-semibold text-neutral-100">{project.title}</h1>

            <p className="text-body mt-6 max-w-2xl text-neutral-500">{project.description}</p>
          </div>
        </Container>
      </section>

      {/* Project Image */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
            <Image src={project.image} alt={`${project.title} project preview`} fill priority className="object-cover" />
          </div>
        </Container>
      </section>

      {/* Project Information */}
      <section className="border-t border-neutral-900 py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="text-label font-medium text-blue-500">OVERVIEW</p>

              <h2 className="text-heading mt-4 font-semibold text-neutral-100">About this project</h2>

              <p className="text-body mt-6 max-w-2xl text-neutral-500">{project.description}</p>
            </div>

            <div>
              <p className="text-label font-medium text-blue-500">TECHNOLOGIES</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-[11px] text-neutral-400">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
