import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/Section";
import { DiscountBox, PriceBlock } from "@/components/SoftwarePricing";
import { getSoftwareBySlug, softwareList, type Software } from "@/data/software";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return softwareList.map((software) => ({ slug: software.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const software = getSoftwareBySlug(slug);

  if (!software) {
    return { title: "Software not found" };
  }

  const canonical = `/software/${software.slug}`;

  return {
    title: software.name,
    description: software.tagline,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: software.name,
      description: software.tagline,
      url: canonical,
    },
  };
}

function PageHeader({ software }: { software: Software }) {
  return (
    <section className="border-b border-line bg-surface-muted">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/software"
                className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Software
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-ink" aria-current="page">
              {software.name}
            </li>
          </ol>
        </nav>

        <div className="mt-8 flex items-start gap-5">
          <span
            className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-white text-primary"
            aria-hidden="true"
          >
            <Icon name={software.icon} className="h-7 w-7" />
          </span>
          <div>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl">
              {software.name}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg">
              {software.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function SoftwareDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const software = getSoftwareBySlug(slug);

  if (!software) {
    notFound();
  }

  return (
    <>
      <PageHeader software={software} />

      {/* Overview */}
      <Section>
        <SectionHeading title="Overview" />
        <div className="mt-6 max-w-3xl space-y-4">
          {software.overview.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* Key features */}
      <Section tone="muted">
        <SectionHeading title="Key Features" />
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {software.features.map((feature) => (
            <div key={feature.title} className="bg-white p-6">
              <span
                className="grid h-9 w-9 place-items-center rounded-md bg-primary-soft text-primary"
                aria-hidden="true"
              >
                <Icon name="check" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Who it is for + benefits */}
      <Section tone="muted">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title="Who It Is For" />
            <ul className="mt-6 space-y-4">
              {software.whoItIsFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-line bg-white p-4"
                >
                  <span
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-primary-soft text-primary"
                    aria-hidden="true"
                  >
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-6 text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading title="Benefits" />
            <ul className="mt-6 space-y-4">
              {software.benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-line bg-white p-4"
                >
                  <span
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-primary-soft text-primary"
                    aria-hidden="true"
                  >
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-6 text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Pricing + contact CTA */}
      <Section className="bg-primary">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
              Interested in this software?
            </h2>
            <p className="mt-3 text-base leading-7 text-blue-100">
              Contact us to learn more or request a demo.
            </p>
          </div>

          {software.pricing ? (
            <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <PriceBlock pricing={software.pricing} />
              <div className="mt-4">
                <DiscountBox pricing={software.pricing} />
              </div>
              <ButtonLink href="/contact" className="mt-5 w-full">
                Contact Us
              </ButtonLink>
            </div>
          ) : (
            <div className="flex lg:justify-end">
              <ButtonLink href="/contact" variant="onDark">
                Contact Us
              </ButtonLink>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}

