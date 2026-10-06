import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/Section";
import { SoftwareCard } from "@/components/SoftwareCard";
import { softwareList } from "@/data/software";

export const metadata: Metadata = {
  title: "Software",
  description:
    "Explore our desktop software for hospital management, pharmacy, inventory, super shop POS, billing and general business management.",
  alternates: { canonical: "/software" },
};

export default function SoftwarePage() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          title="Our Software"
          description="Practical desktop applications designed for different business needs. Every application is lightweight, easy to learn and focused on daily business work."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {softwareList.map((software) => (
            <SoftwareCard key={software.slug} software={software} />
          ))}
        </div>
      </Section>

      {/* Custom software */}
      <Section tone="muted">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span
              className="grid h-11 w-11 place-items-center rounded-md bg-primary-soft text-primary"
              aria-hidden="true"
            >
              <Icon name="custom" className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Custom Business Software
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-muted">
              Need something specific? We also develop custom desktop software
              matched to your business process. Tell us what you need and our
              team will guide you through the options.
            </p>
          </div>

          <ButtonLink href="/contact" className="shrink-0">
            Discuss Your Requirement
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
