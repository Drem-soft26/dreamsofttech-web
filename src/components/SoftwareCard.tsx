import Link from "next/link";
import { Icon } from "@/components/icons";
import type { Software } from "@/data/software";

type SoftwareCardProps = {
  software: Software;
};

export function SoftwareCard({ software }: SoftwareCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-lg border border-line bg-surface p-6 transition-all duration-200 hover:border-line-strong hover:shadow-sm">
      {/* Icon */}
      <span
        className="grid h-11 w-11 place-items-center rounded-md bg-primary-soft text-primary"
        aria-hidden="true"
      >
        <Icon name={software.icon} className="h-6 w-6" />
      </span>

      {/* Title */}
      <h3 className="mt-5 text-lg font-semibold leading-6 text-ink">
        <Link
          href={`/software/${software.slug}`}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <span className="after:absolute after:inset-0 after:content-['']">
            {software.name}
          </span>
        </Link>
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-ink-muted">
        {software.tagline}
      </p>

      {/* View Details */}
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        View Details

        <span
          aria-hidden="true"
          className="inline-flex transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <Icon name="arrow-right" className="h-4 w-4" />
        </span>
      </span>
    </article>
  );
}