import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";

export function ContactCta() {
  return (
    <Section className="relative overflow-hidden bg-primary">
      {/* Desktop decorative ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 hidden h-[420px] w-[420px] rounded-full border-[45px] border-white/10 lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 hidden h-[290px] w-[290px] rounded-full border-[2px] border-white/10 lg:block"
      />

      <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        {/* Content */}
        <div className="relative max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/80">
            Get Started
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            Need Software for Your Business?
          </h2>

          <p className="mt-3 text-base leading-7 text-white/80">
            Contact us to learn more about our software or request a demo.
          </p>
        </div>

        {/* CTA */}
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