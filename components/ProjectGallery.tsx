import Image from "next/image";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

type ProjectGalleryProps = {
  images?: string[];
  projectTitle: string;
};

export default function ProjectGallery({
  images,
  projectTitle,
}: ProjectGalleryProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        {/* Gallery Header */}
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-label font-medium text-blue-500">
              PROJECT GALLERY
            </p>

            <h2 className="text-heading mt-4 font-semibold text-neutral-100">
              Screens and visual exploration.
            </h2>

            <p className="text-body mt-5 max-w-xl text-neutral-500">
              A closer look at selected screens and visual details from the{" "}
              {projectTitle} project.
            </p>
          </div>
        </Reveal>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {images.map((image, index) => {
            const isLarge =
              index === 0 ||
              index === images.length - 1;

            return (
              <Reveal
                key={image}
                delay={index * 0.08}
                className={isLarge ? "md:col-span-2" : ""}
              >
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 ${
                    isLarge
                      ? "aspect-[16/9]"
                      : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${projectTitle} screenshot ${index + 1}`}
                    fill
                    sizes={
                      isLarge
                        ? "100vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                  {/* Screenshot Number */}
                  <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] font-medium tracking-wider text-white/70 backdrop-blur-md">
                      SCREEN {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}