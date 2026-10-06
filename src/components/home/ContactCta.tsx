import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";

export function ContactCta() {
  return (
    <Section className="overflow-hidden bg-primary">
      <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        {/* decorative rings (solid borders, no gradients) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-16 hidden h-64 w-64 rounded-full border-[28px] border-white/10 md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 left-1/3 hidden h-56 w-56 rounded-full border-[22px] border-white/10 lg:block"
        />
        <div className="relative max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
            Get Started
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            Need Software for Your Business?
          </h2>
          <p className="mt-3 text-base leading-7 text-blue-100">
            Contact us to learn more about our software or request a demo.
          </p>
        </div>

        <ButtonLink
          href="/contact"
          variant="onDark"
          className="relative shrink-0 rounded-lg px-7 py-3.5 text-base"
        >
          Contact Us
        </ButtonLink>
      </div>
    </Section>
  );
}
