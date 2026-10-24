import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Section, SectionHeading } from "@/components/Section";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import {
  teamCategories,
  getTeamMember,
  type TeamMember,
} from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the people behind DreamSoftTech — the team building practical desktop software for real business operations.",
  alternates: {
    canonical: "/team",
  },
};

export default function TeamPage() {
  return (
    <>
      <Section>
        <SectionHeading
          title="Meet the People Behind DreamSoftTech"
          eyebrow="MEET OUR TEAM"
          align="center"
          description="Our software is built by a small, focused team of developers, designers and support staff who care about practical solutions for real businesses."
        />

        {/* Responsive team categories */}
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:mt-10 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-12 xl:grid-cols-3">
          {teamCategories.map((category) => {
            const members: TeamMember[] = category.members
              .map((id) => getTeamMember(id))
              .filter(
                (member): member is TeamMember =>
                  member !== undefined,
              );

            if (members.length === 0) {
              return null;
            }

            return (
              <section
                key={category.id}
                aria-labelledby={`team-category-${category.id}`}
                className="flex min-w-0 flex-col"
              >
                {/* Category heading */}
                <div className="mb-5">
                  <h3
                    id={`team-category-${category.id}`}
                    className="text-sm font-semibold uppercase tracking-wider text-ink-muted"
                  >
                    {category.label}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-ink-muted">
                    {category.description}
                  </p>
                </div>

                {/* Responsive member cards */}
                <div className="grid min-w-0 grid-cols-1 gap-5">
                  {members.map((member) => (
                    <TeamMemberCard
                      key={member.id}
                      member={member}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section tone="muted">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="w-full max-w-2xl">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
              Want to know more?
            </h2>

            <p className="mt-3 text-sm leading-6 text-ink-muted sm:text-base sm:leading-7">
              Contact us to discuss your requirements or request a
              demo.
            </p>
          </div>

          <ButtonLink
            href="/contact"
            className="w-full shrink-0 sm:w-auto"
          >
            Contact Us
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}