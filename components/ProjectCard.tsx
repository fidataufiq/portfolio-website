import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-[#0b0b0c] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-neutral-600 hover:bg-[#0e0e10] hover:shadow-2xl hover:shadow-black/40">
        {/* Project Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
          <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/55" />

          {/* View Project */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-[11px] font-medium tracking-wider text-white backdrop-blur-md">VIEW PROJECT ↗</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Category & Arrow */}
          <div className="flex items-start justify-between gap-4">
            <p className="text-label font-medium text-blue-500">{project.category}</p>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-sm text-neutral-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-neutral-600 group-hover:bg-white group-hover:text-black">
              ↗
            </span>
          </div>

          {/* Title */}
          <h3 className="text-subheading mt-5 font-semibold text-neutral-100 transition-colors duration-300 group-hover:text-white">{project.title}</h3>

          {/* Description */}
          <p className="text-body mt-4 text-neutral-500">{project.description}</p>

          {/* Project Information */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <p className="text-label text-neutral-600">YEAR</p>

              <p className="mt-2 text-xs font-medium text-neutral-300">{project.year}</p>
            </div>

            <div>
              <p className="text-label text-neutral-600">ROLE</p>

              <p className="mt-2 text-xs font-medium text-neutral-300">{project.role}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-[11px] font-medium text-neutral-500 transition-all duration-300 group-hover:border-neutral-700 group-hover:text-neutral-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
