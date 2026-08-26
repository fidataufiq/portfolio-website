import Link from "next/link";

import Container from "@/components/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center">
      <Container>
        <div className="max-w-xl">
          <p className="text-label font-medium text-blue-500">ERROR 404</p>

          <h1 className="text-display mt-4 font-semibold text-neutral-100">This page doesn&apos;t exist.</h1>

          <p className="text-body mt-6 text-neutral-500">The page you&apos;re looking for may have been moved, renamed, or doesn&apos;t exist.</p>

          <Link href="/" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-[12px] font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-neutral-200">
            Back to home
          </Link>
        </div>
      </Container>
    </main>
  );
}
