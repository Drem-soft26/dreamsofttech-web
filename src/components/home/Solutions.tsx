import { Section, SectionHeading } from "@/components/Section";
import { SoftwareCard } from "@/components/SoftwareCard";
import { softwareList } from "@/data/software";

export function Solutions() {
  return (
    <Section id="software-solutions">
      <SectionHeading
        title="Our Software Solutions"
        description="Practical desktop applications designed for different business needs."
        eyebrow="Solutions"
      />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {softwareList.map((software) => (
          <SoftwareCard key={software.slug} software={software} />
        ))}
      </div>
    </Section>
  );
}
