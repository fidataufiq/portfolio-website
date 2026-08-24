import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  return (
    <section className="border-t border-neutral-200 py-24">
      <Container>
        <SectionHeading eyebrow="SELECTED WORK" title="Projects I've worked on." description="A selection of digital products, interfaces, and experiments I've designed and developed." />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
