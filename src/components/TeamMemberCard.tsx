"use client";

import { ExternalLink } from "lucide-react";
import type { TeamMember } from "@/data/team";
import { cn } from "@/lib/cn";

/** Generates a reliable, local SVG data-URI avatar so no image link is ever broken. */
function avatarDataUri(initials: string): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
      <rect width="200" height="200" fill="#e2e8f0" rx="100" ry="100"/>
      <text x="100" y="120" font-family="Arial, sans-serif" font-size="48" font-weight="700" fill="#475569" text-anchor="middle">${initials}</text>
    </svg>
  `.trim();
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function initialsFromName(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
}

type TeamMemberCardProps = {
  member: TeamMember;
};

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const initials = initialsFromName(member.name);

  return (
    <article
      className="group flex flex-col h-full rounded-xl border border-line bg-white p-6 shadow-sm transition-all duration-200 hover:border-primary hover:shadow"
    >
      {/* Profile photo container — consistent 1:1 aspect ratio */}

      <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-line bg-surface-muted p-4 aspect-square">

        <img
          src={member.image}
          alt={`${member.name} profile photo`}
          width={120}
          height={120}
          className="object-cover rounded-full border-2 border-white shadow-sm"
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.src = avatarDataUri(initials);
            event.currentTarget.alt = `${member.name} profile photo (fallback)`;
          }}
        />

        {/* Name */}
        <h3 className="mt-1 text-lg font-semibold leading-6 text-ink">
          {member.name}
        </h3>

        {/* Designation */}
        <p className="text-sm font-medium text-primary leading-5">
          {member.designation}
        </p>

        {/* Department */}
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-ink-muted">
          {member.department}
        </p>
      </div>

      {/* Biography */}
      <p className="mt-4 flex-1 text-sm leading-6 text-ink-muted">
        {member.bio}
      </p>

      {/* Social links */}
      {member.social && member.social.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {member.social.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                "border border-line bg-white text-ink hover:bg-surface-muted hover:border-line-strong",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              )}
              aria-label={`Visit ${member.name}'s ${link.label} profile`}
            >
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
