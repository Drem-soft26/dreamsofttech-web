import Link from "next/link";
import { siteConfig } from "@/config/site";
import { softwareList } from "@/data/software";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/software", label: "Software" },
  { href: "/pricing", label: "Pricing" },
  { href: "/client-support", label: "Client Support" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const featuredSoftware = softwareList.slice(0, 4).map((software) => ({
  href: `/software/${software.slug}`,
  label: software.name.replace(" Software", ""),
}));

const contact = siteConfig.contact;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-primary bg-ink text-ink-muted">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-lg font-bold tracking-tight text-white">
              {siteConfig.name}
            </p>

            <p className="mt-4 text-sm leading-6 text-ink-muted">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h2>

            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-muted transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Software */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Software
            </h2>

            <ul className="mt-4 space-y-3 text-sm">
              {featuredSoftware.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-muted transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h2>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                {contact.phone.href ? (
                  <a
                    href={contact.phone.href}
                    className="text-ink-muted transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {contact.phone.value}
                  </a>
                ) : (
                  <span className="text-ink-muted">
                    {contact.phone.value}
                  </span>
                )}
              </li>

              <li>
                <a
                  href={contact.email.href}
                  className="text-ink-muted transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {contact.email.value}
                </a>
              </li>

              <li className="text-ink-muted">
                {contact.address.value}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-700 pt-6">
          <p className="text-sm text-ink-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}