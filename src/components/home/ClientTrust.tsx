import { Icon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/Section";
import { clientTrust, trustStatistic } from "@/data/content";

export function ClientTrust() {
  return (
    <Section tone="muted">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <SectionHeading
          title={clientTrust.title}
          description={clientTrust.description}
          eyebrow={clientTrust.eyebrow}
        />

        <div className="rounded-xl border border-line bg-white p-8 shadow-sm sm:p-10">
          <div className="flex items-center gap-4">
            <span
              className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-primary-soft text-primary"
              aria-hidden="true"
            >
              <Icon name="users" className="h-6 w-6" />
            </span>
            <div>
              <p className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                {trustStatistic.value}
              </p>
              <p className="mt-1 text-base font-semibold text-ink">
                {trustStatistic.label}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-ink-muted sm:text-base sm:leading-7">
            {trustStatistic.description}
          </p>
        </div>
      </div>
    </Section>
  );
}
