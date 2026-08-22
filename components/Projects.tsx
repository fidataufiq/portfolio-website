import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="border-t border-neutral-200 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-blue-600">SELECTED WORK</p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight">Projects I&apos;ve worked on.</h2>

          <p className="mt-4 text-lg leading-8 text-neutral-500">A selection of digital products, interfaces, and experiments I&apos;ve designed and developed.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
