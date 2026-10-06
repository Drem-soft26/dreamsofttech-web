import Link from "next/link";
import { siteConfig } from "@/config/site";
import { softwareList } from "@/data/software";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/software", label: "Software" },
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
    <footer className="border-t-4 border-primary bg-ink text-slate-300">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-lg font-bold tracking-tight text-white">
              {siteConfig.name}
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
                    className="text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
                    className="text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {contact.phone.value}
                  </a>
                ) : (
                  <span>{contact.phone.value}</span>
                )}
              </li>
              <li>
                <a
                  href={contact.email.href}
                  className="text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {contact.email.value}
                </a>
              </li>
              <li className="text-slate-400">{contact.address.value}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-6">
          <p className="text-sm text-slate-400">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
