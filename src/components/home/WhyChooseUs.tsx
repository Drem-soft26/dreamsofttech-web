import { Icon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/Section";
import { whyChooseUs } from "@/data/content";

export function WhyChooseUs() {
  return (
    <Section>
      <SectionHeading
        title="Why Choose Our Software?"
        description="Built around the way small and medium businesses actually work."
        eyebrow="Why Us"
      />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((item) => (
          <div
            key={item.title}
            className="group rounded-lg border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
          >
            <span
              className="grid h-10 w-10 place-items-center rounded-md bg-primary-soft text-primary"
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
