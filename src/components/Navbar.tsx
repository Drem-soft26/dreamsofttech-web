"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/icons";
import { navLinks } from "@/config/site";
import { cn } from "@/lib/cn";

function isActiveLink(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Wordmark() {
  return (
    <Link
      href="/"
      className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      aria-label="DreamSoft Tech — home"
    >
      <span className="text-lg font-bold leading-none tracking-tight text-ink">
        DreamSoft<span className="text-primary"> Tech</span>
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
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-[76px] w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Wordmark />

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isActiveLink(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative py-2 text-[14px] font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
                      active
                        ? "text-primary after:absolute after:inset-x-0 after:-bottom-[21px] after:h-0.5 after:bg-primary after:content-['']"
                        : "text-ink-muted hover:text-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden shrink-0 lg:block">
          <ButtonLink href="/contact" className="rounded px-5 py-2.5 text-[14px]">
            Contact Us
          </ButtonLink>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded border border-line text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
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
        <ul className="mx-auto w-full max-w-6xl px-5 py-2 sm:px-8">
          {navLinks.map((link) => {
            const active = isActiveLink(pathname, link.href);
            return (
              <li key={link.href} className="border-b border-line last:border-b-0">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={closeMenu}
                  className={cn(
                    "block py-3 text-[15px] font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                    active ? "text-primary" : "text-ink hover:text-primary",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-4 pb-3">
            <ButtonLink href="/contact" className="w-full rounded" onClick={closeMenu}>
              Contact Us
            </ButtonLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
