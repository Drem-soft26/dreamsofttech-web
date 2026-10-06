"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/icons";
import { navLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

function Logo() {
  const initials = siteConfig.name
    .split(" ")
    .map((word) => word.charAt(0))
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  return (
    <Link
      href="/"
      className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label={`${siteConfig.name} — home`}
    >
      <span
        aria-hidden="true"
        className="grid h-9 w-9 place-items-center rounded-md bg-primary text-sm font-bold text-white"
      >
        {initials}
      </span>
      <span className="text-base font-bold leading-tight tracking-tight text-ink">
        {siteConfig.name}
      </span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                      active
                        ? "bg-primary-soft text-primary"
                        : "text-ink-muted hover:bg-surface-muted hover:text-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" className="px-4 py-2.5">
            Contact Us
          </ButtonLink>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-line text-ink transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        id={menuId}
        aria-label="Main"
        className={cn(
          "border-t border-line bg-white lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <ul className="mx-auto w-full max-w-6xl px-5 py-3 sm:px-8">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href} className="border-b border-line last:border-b-0">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={closeMenu}
                  className={cn(
                    "block py-3 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                    active ? "text-primary" : "text-ink hover:text-primary",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-4 pb-2">
            <ButtonLink href="/contact" className="w-full" onClick={closeMenu}>
              Contact Us
            </ButtonLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
