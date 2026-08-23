import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="mx-auto min-h-screen max-w-5xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-wide text-blue-600">PROJECTS</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Selected work and experiments.</h1>

        <p className="mt-4 text-lg leading-8 text-neutral-500">A collection of digital products, interfaces, and web projects I&apos;ve designed and developed.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
