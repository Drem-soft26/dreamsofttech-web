import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/Section";
import { DiscountBox, PriceBlock } from "@/components/SoftwarePricing";
import {
  softwareList,
  type Software,
  type SoftwarePricing,
} from "@/data/software";

export const metadata: Metadata = {
  title: "Software Pricing",
  description:
    "Explore our software solutions and choose the option that fits your business needs.",
  alternates: { canonical: "/pricing" },
};

type PricedSoftware = Software & { pricing: SoftwarePricing };

const pricedSoftware = softwareList.filter(
  (software): software is PricedSoftware => software.pricing !== undefined,
);

function PricingCard({ software }: { software: PricedSoftware }) {
  const featuredFeatures = software.features.slice(0, 4);

  return (
    <article className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow">
      <div className="flex items-start justify-between gap-3">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary-soft text-primary"
          aria-hidden="true"
        >
          <Icon name={software.icon} className="h-5 w-5" />
        </span>
        <span className="rounded bg-primary px-2.5 py-1 text-xs font-bold tracking-wide text-white">
          Special Offer
        </span>
      </div>

      <h2 className="mt-4 text-lg font-semibold leading-6 text-ink">
        {software.name}
      </h2>
      <p className="mt-2 text-sm leading-6 text-ink-muted">{software.tagline}</p>

      {/* Software price (not a subscription) */}
      <div className="mt-5">
        <PriceBlock pricing={software.pricing} />
      </div>

      <div className="mt-4">
        <DiscountBox pricing={software.pricing} />
      </div>

      <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
        {featuredFeatures.map((feature) => (
          <li
            key={feature.title}
            className="flex items-start gap-2.5 text-sm text-ink"
          >
            <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">
              <Icon name="check" className="h-4 w-4" />
            </span>
            {feature.title}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex-1 pt-1" />

      <ButtonLink href="/contact" className="mt-auto w-full">
        Contact Us
      </ButtonLink>
    </article>
  );
}

export default function PricingPage() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Pricing"
          title="Software Pricing"
          description="Explore our software solutions and choose the option that fits your business needs."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricedSoftware.map((software) => (
            <PricingCard key={software.slug} software={software} />
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-6 text-ink-muted">
          Prices shown are software prices and may vary based on your
          requirements. Contact us for full details, discounts and a software
          demo.
        </p>
      </Section>

      <Section tone="muted">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
              Need help choosing the right software?
            </h2>
            <p className="mt-3 text-base leading-7 text-ink-muted">
              Tell us about your business and we will guide you to the option
              that fits your needs.
            </p>
          </div>
          <ButtonLink href="/contact" className="shrink-0">
            Contact Us
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
