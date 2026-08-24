import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-md">
      <article>
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
          <Image src={project.image} alt={`${project.title} project preview`} fill className="object-cover transition duration-500 group-hover:scale-105" />
        </div>

        <div className="p-6">
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
        </div>
      </article>
    </Link>
  );
}
