import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({ children, href, variant = "primary" }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition";

  const variants = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-700",
    secondary: "border border-neutral-200 text-neutral-900 hover:bg-neutral-100",
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
