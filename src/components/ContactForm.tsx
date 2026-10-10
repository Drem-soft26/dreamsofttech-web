"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { softwareList } from "@/data/software";

type FormStatus =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent"; message: string }
  | { state: "error"; message: string };

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  organization: string;
  software: string;
  message: string;
  demoRequested: boolean;
};

const initialValues: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  organization: "",
  software: "",
  message: "",
  demoRequested: false,
};

const fieldClassName =
  "w-full rounded-lg border border-line-strong bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-2 focus:outline-offset-1 focus:outline-primary";

function Field({
  id,
  label,
  required = false,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-primary">
            {" *"}
          </span>
        ) : null}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormData>(initialValues);
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  const update = <K extends keyof ContactFormData>(
    key: K,
    value: ContactFormData[K],
  ) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ state: "sending" });

    // Optional JSON endpoint (e.g. a serverless webhook). When it is not
    // configured, the inquiry is delivered through the visitor's email client.
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
    const subject = `Website inquiry${
      values.demoRequested ? " (demo request)" : ""
    } — ${values.name}`;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        setValues(initialValues);
        setStatus({
          state: "sent",
          message: "Thank you. Your inquiry has been sent — we will contact you shortly.",
        });
      } catch {
        setStatus({
          state: "error",
          message:
            "Your inquiry could not be sent right now. Please try again or contact us directly.",
        });
      }
      return;
    }

    const body = [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `Business / Organization: ${values.organization}`,
      `Software interested in: ${values.software || "Not specified"}`,
      `Demo requested: ${values.demoRequested ? "Yes" : "No"}`,
      "",
      values.message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.contact.email.value}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus({
      state: "sent",
      message: "Your email application should now open with the inquiry ready to send.",
    });
  };

  const busy = status.state === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="contact-name" label="Name" required>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClassName}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
          />
        </Field>

        <Field id="contact-phone" label="Phone" required>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={fieldClassName}
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="contact-email" label="Email" required>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClassName}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>

        <Field id="contact-organization" label="Business / Organization">
          <input
            id="contact-organization"
            name="organization"
            type="text"
            autoComplete="organization"
            className={fieldClassName}
            value={values.organization}
            onChange={(event) => update("organization", event.target.value)}
          />
        </Field>
      </div>

      <Field id="contact-software" label="Software Interested In">
        <select
          id="contact-software"
          name="software"
          className={fieldClassName}
          value={values.software}
          onChange={(event) => update("software", event.target.value)}
        >
          <option value="">Select a software (optional)</option>
          {softwareList.map((software) => (
            <option key={software.slug} value={software.name}>
              {software.name}
            </option>
          ))}
          <option value="Custom Business Software">Custom Business Software</option>
        </select>
      </Field>



      <div className="flex items-start gap-3">
        <input
          id="contact-demo"
          name="demoRequested"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 border-line-strong text-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary"
          checked={values.demoRequested}
          onChange={(event) => update("demoRequested", event.target.checked)}
        />
        <label htmlFor="contact-demo" className="text-sm leading-6 text-ink-muted">
          Request a demo — our team will contact you to arrange a walkthrough of
          the software. A demo is not an instant download.
        </label>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={busy}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? "Sending…" : "Send Inquiry"}
        </button>

        <a
          href={siteConfig.contact.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-line-strong bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Request a Demo via Chat
        </a>
      </div>

      {status.state === "sent" ? (
        <p role="status" className="text-sm font-medium text-green-700">
          {status.message}
        </p>
      ) : null}
      {status.state === "error" ? (
        <p role="alert" className="text-sm font-medium text-red-700">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}

