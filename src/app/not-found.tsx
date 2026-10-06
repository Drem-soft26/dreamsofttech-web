import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Section>
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-ink-muted">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/software" variant="secondary">
            Browse Software
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
