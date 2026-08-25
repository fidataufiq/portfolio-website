type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-label font-medium text-blue-500">{eyebrow}</p>

      <h2 className="text-heading mt-3 font-semibold text-neutral-100">{title}</h2>

      {description && <p className="text-body mt-4 text-neutral-500">{description}</p>}
    </div>
  );
}
