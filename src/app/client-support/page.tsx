import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/Section";
import { newClientSupport, supportProcess } from "@/data/content";

export const metadata: Metadata = {
  title: "Client Support",
  description:
    "We provide guidance and support to help our clients get started with and use our software solutions effectively.",
  alternates: { canonical: "/client-support" },
};

export default function ClientSupportPage() {
  return (
    <>
      {/* Hero + support services */}
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Support"
          title="Client Support"
          description="We provide guidance and support to help our clients get started with and use our software solutions effectively."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newClientSupport.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow"
            >
              <span
                className="grid h-10 w-10 place-items-center rounded-md bg-primary-soft text-primary"
                aria-hidden="true"
              >
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-base font-semibold text-ink">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-ink-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* New client support */}
      <Section tone="muted">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <SectionHeading
              title="Client Support"
              description="New clients can contact us for software information, installation guidance and initial assistance."
            />
          </div>
          <ButtonLink href="/contact" className="shrink-0">
            Contact Us
          </ButtonLink>
        </div>
      </Section>

      {/* Support process */}
      <Section>
        <SectionHeading
          title="How Support Works"
          description="A simple process to get the help you need."
          eyebrow="Process"
        />

        <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {supportProcess.map((step) => (
            <li
              key={step.number}
              className="rounded-xl border border-line bg-white p-6 shadow-sm"
            >
              <span
                aria-hidden="true"
                className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-bold text-white"
              >
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Contact CTA */}
      <Section className="bg-primary">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
              Need Help With Our Software?
            </h2>
            <p className="mt-3 text-base leading-7 text-blue-100">
              Contact us and our team will assist you with your software-related
              requirements.
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
