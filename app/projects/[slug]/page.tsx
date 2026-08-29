import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";

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
      {/* ========================================
          PROJECT HERO
      ======================================== */}
      <section className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
        <Container>
          {/* Back Button */}
          <Reveal>
            <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 transition-colors duration-300 hover:text-white">
              <span className="transition-transform duration-300 hover:-translate-x-1">←</span>
              Back to projects
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            {/* Main Hero Content */}
            <div>
              <Reveal delay={0.05}>
                <p className="text-label font-medium text-blue-500">{project.category}</p>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-display mt-4 max-w-3xl font-semibold text-neutral-100">{project.title}</h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-body mt-6 max-w-2xl text-neutral-500">{project.description}</p>
              </Reveal>
            </div>

            {/* Project Metadata */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
                <div>
                  <p className="text-label text-neutral-600">YEAR</p>

                  <p className="mt-3 text-sm font-medium text-neutral-200">{project.year}</p>
                </div>

                <div>
                  <p className="text-label text-neutral-600">ROLE</p>

                  <p className="mt-3 text-sm font-medium text-neutral-200">{project.role}</p>
                </div>

                <div className="col-span-2">
                  <p className="text-label text-neutral-600">TECHNOLOGIES</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-[11px] font-medium text-neutral-400 transition-colors duration-300 hover:border-neutral-700 hover:text-neutral-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ========================================
          PROJECT VISUAL
      ======================================== */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <Reveal delay={0.1}>
            <div className="group relative aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
              <Image src={project.image} alt={`${project.title} project preview`} fill priority sizes="(max-width: 1024px) 100vw, 1200px" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]" />

              {/* Subtle image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ========================================
          PROJECT OVERVIEW
      ======================================== */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Section Label */}
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="text-label font-medium text-blue-500">OVERVIEW</p>

                <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600">A closer look at the idea, purpose, and direction behind this project.</p>
              </div>
            </Reveal>

            {/* Main Content */}
            <Reveal delay={0.1}>
              <div>
                <h2 className="text-heading max-w-2xl font-semibold text-neutral-100">About this project</h2>

                <p className="text-body mt-6 max-w-2xl text-neutral-400">{project.longDescription}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ========================================
    PROJECT GALLERY
======================================== */}
      <ProjectGallery images={project.gallery} projectTitle={project.title} />

      {/* ========================================
          NEXT PROJECT
      ======================================== */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <div className="rounded-2xl border border-neutral-800 bg-white/[0.02] p-8 sm:p-10">
              <p className="text-label font-medium text-blue-500">EXPLORE MORE</p>

              <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-heading font-semibold text-neutral-100">Continue exploring my work.</h2>

                  <p className="text-body mt-4 max-w-xl text-neutral-500">Explore other projects, experiments, and digital experiences from my portfolio.</p>
                </div>

                <Link
                  href="/projects"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-700 px-5 py-3 text-xs font-medium text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-500 hover:bg-white hover:text-black"
                >
                  View all projects
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
