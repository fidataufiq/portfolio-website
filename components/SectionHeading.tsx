type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium tracking-wide text-blue-600">{eyebrow}</p>

      <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>

      {description && <p className="mt-4 text-lg leading-8 text-neutral-500">{description}</p>}
    </div>
  );
}
