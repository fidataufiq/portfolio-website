import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#0b0b0c] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-neutral-600 hover:shadow-2xl hover:shadow-black/40">
        {/* Project Image */}
        <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral-800 bg-neutral-900">
          <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-label font-medium text-blue-500">{project.category}</p>

              <h3 className="text-subheading mt-4 font-semibold text-neutral-100 transition-colors duration-300 group-hover:text-white">{project.title}</h3>
            </div>

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-sm text-neutral-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-neutral-600 group-hover:text-white">
              ↗
            </span>
          </div>

          <p className="text-body mt-4 text-neutral-500">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-[11px] font-medium text-neutral-500 transition-colors duration-300 group-hover:border-neutral-700">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
