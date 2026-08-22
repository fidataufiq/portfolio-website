import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-blue-600">{project.category}</p>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
        </div>

        <span className="text-neutral-300 transition group-hover:text-neutral-900">↗</span>
      </div>

      <p className="mt-4 leading-7 text-neutral-500">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span key={technology} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
