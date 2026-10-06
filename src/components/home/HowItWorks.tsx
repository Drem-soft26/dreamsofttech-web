import { Section, SectionHeading } from "@/components/Section";
import { processSteps } from "@/data/content";

export function HowItWorks() {
  return (
    <Section tone="muted">
      <SectionHeading
        title="How It Works"
        description="A simple process from your requirement to a working solution."
        eyebrow="Process"
      />

      <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {processSteps.map((step) => (
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
  );
}
