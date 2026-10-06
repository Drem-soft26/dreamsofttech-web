import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionTone = "default" | "muted";

type SectionProps = {
  id?: string;
  tone?: SectionTone;
  children: ReactNode;
  className?: string;
  /** Hide the default vertical padding (for sections with custom layout). */
  compact?: boolean;
};

export function Section({
  id,
  tone = "default",
  children,
  className,
  compact = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        compact ? "py-12 sm:py-14" : "py-16 sm:py-20 lg:py-24",
        tone === "muted" && "border-y border-line bg-surface-muted",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Rendered as <h2> by default; pass "h1"/"h3" when the level differs. */
  as?: "h1" | "h2" | "h3";
  /** Small uppercase label shown above the title. */
  eyebrow?: string;
  /** Use light text colours when the heading sits on a dark background. */
  onDark?: boolean;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "left",
  as: Heading = "h2",
  eyebrow,
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em]",
            onDark ? "text-blue-300" : "text-primary",
            align === "center" && "justify-center",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "inline-block h-0.5 w-7",
              onDark ? "bg-blue-300" : "bg-primary",
            )}
          />
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl",
          onDark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-7 sm:text-lg",
            onDark ? "text-slate-300" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
