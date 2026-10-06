import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon, type IconName } from "@/components/icons";

const heroHighlights: { icon: IconName; label: string }[] = [
  { icon: "hospital", label: "Hospital Management" },
  { icon: "pharmacy", label: "Pharmacy Management" },
  { icon: "inventory", label: "Inventory Management" },
  { icon: "pos", label: "Super Shop / POS" },
  { icon: "billing", label: "Billing Software" },
  { icon: "business", label: "Business Management" },
];

const heroBenefits = [
  "Easy to learn, easy to use",
  "Lightweight desktop applications",
  "Installation and setup support",
  "Ongoing customer support",
];

export function Hero() {
  return (
    <section className="border-b border-line bg-surface-muted">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
        {/* Copy */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-primary shadow-sm">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Desktop Business Software
          </p>

          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Reliable Software Solutions for{" "}
            <span className="text-primary">Modern Businesses</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-ink-muted sm:text-lg">
            We provide practical and easy-to-use desktop software solutions
            designed to help businesses manage their daily operations
            efficiently.
          </p>

          <ul className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            {heroBenefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2.5 text-sm font-medium text-ink"
              >
                <span
                  aria-hidden="true"
                  className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary"
                >
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/software">Explore Software</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact Us
            </ButtonLink>
          </div>
        </div>

        {/* Solid UI panel (not a screenshot) */}
        <div className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-line bg-surface-muted px-6 py-3.5">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-primary" />
            <p className="ml-2 text-xs font-semibold uppercase tracking-widest text-ink-muted">
              Business Software Suite
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
            {heroHighlights.map((item) => (
              <li
                key={item.label}
                className="group flex items-center gap-3 bg-white px-6 py-4 transition-colors hover:bg-primary-soft/40"
              >
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary-soft text-primary"
                  aria-hidden="true"
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-ink">{item.label}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-line px-6 py-4">
            <Link
              href="/software"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Browse all software
              <span aria-hidden="true" className="inline-flex transition-transform group-hover:translate-x-0.5">
                <Icon name="arrow-right" className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
