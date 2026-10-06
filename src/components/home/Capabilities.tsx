import { Icon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/Section";
import { capabilities } from "@/data/content";

export function Capabilities() {
  return (
    <Section tone="muted">
      <SectionHeading
        title="Software Designed for Real Business Needs"
        description="Practical capabilities built into our desktop applications. Exact features may vary between applications."
        eyebrow="Capabilities"
      />

      <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item) => (
          <div key={item.title} className="group bg-white p-6 transition-colors hover:bg-primary-soft/30">
            <span
              className="grid h-10 w-10 place-items-center rounded-md bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white"
              aria-hidden="true"
            >
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-ink-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
