"use client";

import { useMemo, useState } from "react";

import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

type Filter = "All" | "Design" | "Web" | "Application";

const filters: Filter[] = ["All", "Design", "Web", "Application"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [activeYear, setActiveYear] = useState<string>("All");

  // Mendapatkan daftar tahun unik dari data projects secara aman (Type-safe)
  const availableYears = useMemo(() => {
    const years = projects.map((project) => (project.year ? String(project.year) : null)).filter((year): year is string => year !== null);

    const uniqueYears = Array.from(new Set(years)).sort((a, b) => Number(b) - Number(a));
    return ["All", ...uniqueYears];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const category = project.category.toLowerCase();
      const projectYear = String(project.year);

      // Check Category Filter
      let matchesCategory = true;
      if (activeFilter === "Design") {
        matchesCategory = category.includes("design") || category.includes("ui/ux") || project.technologies.some((technology) => technology.toLowerCase().includes("figma") || technology.toLowerCase().includes("ui/ux"));
      } else if (activeFilter === "Web") {
        matchesCategory =
          category.includes("web") || project.technologies.some((technology) => technology.toLowerCase().includes("next.js") || technology.toLowerCase().includes("javascript") || technology.toLowerCase().includes("codeigniter"));
      } else if (activeFilter === "Application") {
        matchesCategory = category.includes("application");
      }

      // Check Year Filter
      let matchesYear = true;
      if (activeYear !== "All") {
        matchesYear = projectYear === activeYear;
      }

      return matchesCategory && matchesYear;
    });
  }, [activeFilter, activeYear]);

  // Styling tombol terpusat dan stabil (border selalu ada di kedua kondisi)
  const getFilterBtnClass = (isActive: boolean) =>
    `rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
      isActive ? "border-white bg-white text-black shadow-lg shadow-white/10" : "border-neutral-800 bg-white/[0.02] text-neutral-500 hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-white/[0.05] hover:text-neutral-200"
    }`;

  return (
    <main>
      {/* ========================================
          PAGE HERO
      ======================================== */}
      <section className="relative overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            {/* Main Content */}
            <Reveal>
              <div className="max-w-3xl">
                <p className="text-label font-medium text-blue-500">ALL PROJECTS</p>

                <h1 className="text-display mt-4 font-semibold text-neutral-100">Things I&apos;ve built and explored.</h1>

                <p className="text-body mt-6 max-w-xl text-neutral-500">A collection of projects, experiments, and digital experiences where I explore technology, design, and development.</p>
              </div>
            </Reveal>

            {/* Side Information */}
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
                <p className="text-label text-neutral-600">PORTFOLIO OVERVIEW</p>

                <div className="mt-6 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-4xl font-semibold tracking-tight text-neutral-100">{projects.length.toString().padStart(2, "0")}</p>

                    <p className="mt-2 text-sm text-neutral-500">Selected projects</p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-medium text-neutral-300">2025 — Present</p>

                    <p className="mt-2 text-xs text-neutral-600">Technology & Design</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ========================================
          FILTER & PROJECT LIST
      ======================================== */}
      <section className="pb-24 pt-8 sm:pb-32">
        <Container>
          {/* Filter Area */}
          <Reveal>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-label text-neutral-600">EXPLORE PROJECTS</p>

                  <p className="mt-2 text-sm text-neutral-400">
                    Showing <span className="font-medium text-neutral-100">{filteredProjects.length}</span> {filteredProjects.length === 1 ? "project" : "projects"}
                  </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={getFilterBtnClass(activeFilter === filter)}>
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Year Filters */}
              {availableYears.length > 1 && (
                <div className="flex flex-col gap-3 border-t border-neutral-800/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[11px] font-medium tracking-widest text-neutral-600 uppercase">FILTER BY YEAR</p>

                  <div className="flex flex-wrap gap-2">
                    {availableYears.map((year) => (
                      <button key={year} type="button" onClick={() => setActiveYear(year)} className={getFilterBtnClass(activeYear === year)}>
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          {/* Projects Grid */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="mt-10 rounded-2xl border border-dashed border-neutral-800 bg-white/[0.02] px-6 py-16 text-center">
              <p className="text-subheading font-medium text-neutral-200">No projects found.</p>

              <p className="text-body mt-3 text-neutral-500">More projects will be added in the future.</p>

              <button
                type="button"
                onClick={() => {
                  setActiveFilter("All");
                  setActiveYear("All");
                }}
                className="mt-6 rounded-full border border-neutral-700 px-4 py-2 text-xs font-medium text-neutral-400 transition hover:border-neutral-500 hover:text-white"
              >
                View all projects
              </button>
            </div>
          )}

          {/* Bottom Note */}
          <Reveal delay={0.2}>
            <div className="mt-16 max-w-2xl">
              <p className="text-body text-neutral-600">This collection continues to grow as I explore new ideas, technologies, and digital experiences.</p>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
