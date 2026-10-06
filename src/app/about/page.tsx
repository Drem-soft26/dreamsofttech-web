import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/Section";
import { aboutSummary } from "@/data/content";
import { softwareList } from "@/data/software";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our company and the practical desktop software we build for businesses.",
  alternates: { canonical: "/about" },
};

const approach = [
  "We start from the actual requirements of the business, not from a fixed package.",
  "We keep the software lightweight so it runs on standard office computers.",
  "We provide installation support and guidance so staff can start working quickly.",
  "We stay available for questions and support after delivery.",
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          title="About Our Company"
          description="Practical software solutions for businesses that need simple and reliable tools."
        />

        <div className="mt-8 max-w-3xl space-y-4">
          {aboutSummary.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title="What We Do" />
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {softwareList.map((software) => (
                <li
                  key={software.slug}
                  className="flex items-center gap-3 rounded-lg border border-line bg-white p-4 text-sm font-medium text-ink"
                >
                  <span className="text-primary" aria-hidden="true">
                    <Icon name={software.icon} className="h-5 w-5" />
                  </span>
                  {software.name}
                </li>
              ))}
              <li className="flex items-center gap-3 rounded-lg border border-line bg-white p-4 text-sm font-medium text-ink">
                <span className="text-primary" aria-hidden="true">
                  <Icon name="custom" className="h-5 w-5" />
                </span>
                Custom Business Software
              </li>
            </ul>
          </div>

          <div>
            <SectionHeading title="How We Work" />
            <ul className="mt-6 space-y-4">
              {approach.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-primary-soft text-primary"
                    aria-hidden="true"
                  >
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-6 text-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-primary">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
              Want to know more?
            </h2>
            <p className="mt-3 text-base leading-7 text-blue-100">
              Contact us to discuss your requirements or request a demo.
            </p>
          </div>
          <ButtonLink href="/contact" variant="onDark" className="shrink-0">
            Contact Us
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
