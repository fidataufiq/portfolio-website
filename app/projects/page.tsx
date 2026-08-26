import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="border-b border-neutral-900 py-24 sm:py-32">
        <Container>
          <Reveal>
            <p className="text-label font-medium text-blue-500">ALL PROJECTS</p>

            <h1 className="text-display mt-4 max-w-3xl font-semibold text-neutral-100">Things I&apos;ve built and explored.</h1>

            <p className="text-body mt-6 max-w-xl text-neutral-500">A collection of projects, experiments, and digital experiences where I explore technology, design, and development.</p>
          </Reveal>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
