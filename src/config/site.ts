/**
 * Central, editable site configuration.
 *
 * Replace the placeholder values below with the company's real details
 * before going live. Nothing else in the codebase hard-codes this data.
 */

export type ContactChannel = {
  label: string;
  value: string;
  /** Editable link (tel:, https:, mailto:, ...). Leave undefined for plain text. */
  href?: string;
};

export const siteConfig = {
  name: "Dream Software Technology",
  shortName: "dreamsofttech",
  tagline: "Lightweight desktop software for real business operations.",
  description:
    "We provide practical and easy-to-use desktop software solutions for hospitals, pharmacies, inventory, retail POS, billing and general business management.",
  /** Production URL used for Open Graph / canonical metadata. */
  url: "https://example.com",
  contact: {
    phone: { label: "Phone", value: "+880 1896036830", href: "tel:+8801896036830" },
    email: { label: "Email", value: "dreamsoftechbd.com", href: "mailto:dreamsoftechbd.com" },
    address: { label: "Office Address", value: "Tangail Medical College & Hospital Road, Sobalia Tangail -1900 Bangladesh" },
    whatsapp: {
      label: "WhatsApp",
      value: "01896036830",
      href: "https://wa.me/",
    },
    messenger: {
      label: "Messenger",
      value: "[Messenger handle]",
      href: "https://m.me/",
    },
  } satisfies Record<string, ContactChannel>,
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/software", label: "Software" },
  { href: "/pricing", label: "Pricing" },
  { href: "/client-support", label: "Client Support" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;
