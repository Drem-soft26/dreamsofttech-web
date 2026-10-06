import Link from "next/link";
import { Icon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/Section";
import { aboutSummary } from "@/data/content";

export function AboutPreview() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-10 overflow-hidden rounded-xl border border-line bg-white shadow-sm lg:grid-cols-5 lg:gap-0">
        <div className="bg-ink p-8 sm:p-10 lg:col-span-2">
          <SectionHeading
            title="About Our Company"
            eyebrow="Who We Are"
            onDark
          />
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Learn more about us
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-4 p-8 sm:p-10 lg:col-span-3">
          {aboutSummary.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
