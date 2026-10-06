import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "onDark";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /** Open in a new tab (external links only). */
  external?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
};

const baseClassName =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variantClassName: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white shadow-sm hover:bg-primary-dark",
  secondary:
    "border border-line-strong bg-white text-ink hover:border-slate-400 hover:bg-surface-muted",
  onDark: "bg-white text-ink shadow-sm hover:bg-slate-100",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  onClick,
  "aria-label": ariaLabel,
}: ButtonLinkProps) {
  const classes = cn(baseClassName, variantClassName[variant], className);

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </Link>
  );
}
