import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon, type IconName } from "@/components/icons";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig, type ContactChannel } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions about our software? Get in touch with us to learn more or request a demo.",
  alternates: { canonical: "/contact" },
};

const { contact } = siteConfig;

const channels: { key: keyof typeof contact; icon: IconName; channel: ContactChannel }[] = [
  { key: "phone", icon: "phone", channel: contact.phone },
  { key: "email", icon: "email", channel: contact.email },
  { key: "address", icon: "address", channel: contact.address },
  { key: "whatsapp", icon: "chat", channel: contact.whatsapp },
  { key: "messenger", icon: "chat", channel: contact.messenger },
];

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        title="Contact Us"
        description="Have questions about our software? Get in touch with us to learn more or request a demo."
      />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
        {/* Contact details */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-ink">Reach Us Directly</h2>

          <ul className="mt-6 space-y-4">
            {channels.map(({ key, icon, channel }) => (
              <li
                key={key}
                className="flex items-start gap-4 rounded-xl border border-line bg-white p-4 transition-colors hover:border-slate-300"
              >
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary-soft text-primary"
                  aria-hidden="true"
                >
                  <Icon name={icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{channel.label}</p>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        channel.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="mt-1 block break-words text-sm text-ink-muted transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="mt-1 break-words text-sm text-ink-muted">
                      {channel.value}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-lg border border-line bg-surface-muted p-5">
            <p className="text-sm font-semibold text-ink">Requesting a demo</p>
            <p className="mt-2 text-sm leading-6 text-ink-muted">
              A demo is arranged by our team after we understand your
              requirements — it is not an instant download. Send an inquiry or
              chat with us and we will arrange a walkthrough of the software.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <div className="rounded-xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-ink">Send an Inquiry</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Fill in the form and our team will get back to you.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
