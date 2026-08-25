import Link from "next/link";
import Container from "@/components/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-900 py-12">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-subheading font-semibold text-neutral-100">TAQ.</p>

            <p className="text-body mt-2 text-neutral-500">Building digital experiences with technology and design.</p>
          </div>

          <p className="text-[11px] text-neutral-600">© 2026 Fida Taufiq Imazuddin. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
