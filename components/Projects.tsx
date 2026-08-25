import Link from "next/link";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";

export default function Projects() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="SELECTED WORK" title="Craft & Code" description="Exploring the intersection of design and technology through practical web applications." />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/projects"
              className="rounded-full border border-neutral-700 px-5 py-3 text-[12px] font-medium text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-500 hover:bg-white/5 hover:text-white"
            >
              View more
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
