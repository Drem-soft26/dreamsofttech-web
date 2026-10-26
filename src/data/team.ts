/**
 * Team member data for the "Our Team" section.
 *
 * All names, bios and social links below are clearly identifiable placeholders.
 * Replace them with real team details before publishing. Never invent real
 * employee names, credentials or biographies.
 */

export type SocialLink = {
  /** Display label for the platform (e.g. "LinkedIn", "GitHub", "Website"). */
  label: string;
  /** Destination URL. Open in a new tab. */
  href: string;
};

export type TeamMember = {
  /** Stable, unique identifier used as a React key. */
  id: string;
  /** Full name — editable placeholder until real details are available. */
  name: string;
  /** Job title / designation. */
  designation: string;
  /** Department or team the member belongs to. */
  department: string;
  /** Short biography (2-3 sentences). */
  bio: string;
  /** Local or remote profile photo URL. Use a reliable local asset or data URI. */
  image: string;
  /** Optional note about the image source (e.g. "Temporary demo avatar"). */
  imageNote?: string;
  /** Optional professional social links. */
  social?: SocialLink[];
};

/** Team categories, used to group members on the page. */
export type TeamCategory = {
  id: string;
  label: string;
  description: string;
  /** Member IDs belonging to this category, in display order. */
  members: string[];
};

export const teamMembers: Record<string, TeamMember> = {
  ceo: {
    id: "ceo",
    name: "Masum Khan",
    designation: "Chief Development Lead",
    department: "Development Lead",
    bio:
      "Leads company strategy, vision and day-to-day operations at DreamSoftTech. Oversees product direction, client partnerships and long-term growth.",
    image: "/images/avatars/ceo.jpg",
    /** Temporary demo avatar — replace with a real photo before publishing. */
    imageNote: "Demo avatar for CEO placeholder",
  },
  companyManager: {
    id: "companyManager",
    name: "Md. Mofazzal Hossen",
    designation: "Company Manager (Tangila Branch)",
    department: "Operations",
    bio:
      "Manages internal operations, team coordination and delivery timelines. Ensures projects run smoothly and clients receive timely support.",
    image: "/images/avatars/company-manager.jpg",
    /** Temporary demo avatar — replace with a real photo before publishing. */
  },
  marketingLead: {
    id: "marketingLead",
    name: "Name: Md. Shahalam Khan",
    designation: "Marketing Lead",
    department: "Marketing Team",
    bio:
      "Drives brand awareness, outreach and client communication. Handles digital presence, campaigns and marketing collateral.",
    image: "/images/avatars/marketing-lead.svg",
    /** Temporary demo avatar — replace with a real photo before publishing. */
    social: [
      // { label: "LinkedIn", href: "https://linkedin.com/in/" },
      // { label: "Website", href: "https://example.com" },
    ],
  },
  devLead: {
    id: "devLead",
    name: "[Development Lead Name]",
    designation: "Development Lead",
    department: "Development Team",
    bio:
      "Leads the software development team, oversees application architecture and ensures code quality across all desktop products.",
    image: "/images/avatars/dev-lead.svg",
    /** Temporary demo avatar — replace with a real photo before publishing. */
    social: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "Website", href: "https://example.com" },
    ],
  },
  // developer: {
  //   id: "developer",
  //   name: "[Developer Name]",
  //   designation: "Software Developer",
  //   department: "Development Team",
  //   bio:
  //     "Builds and maintains desktop applications for hospitals, pharmacies, inventory and billing. Focuses on clean, maintainable code.",
  //   image: "/images/avatars/developer.svg",
  //   /** Temporary demo avatar — replace with a real photo before publishing. */
  // },


  supportLead: {
    id: "supportLead",
    name: "Md.Sohag",
    designation: "Client Support Lead",
    department: "Other Team Members",
    bio:
      "Leads client support and installation assistance. Helps customers get started and resolves software-related questions promptly.",
    image: "/images/avatars/support-lead2SHOHAG.jpg",
    /** Temporary demo avatar — replace with a real photo before publishing. */
  },
supportManager: {
    id: "supportManager",
    name: "Md. Robel",
    designation: "Client Support Lead",
    department: "Other Team Members",
    bio:
      "Leads client support and installation assistance. Helps customers get started and resolves software-related questions promptly.",
    image: "/images/avatars/Md.Robel.png",
    /** Temporary demo avatar — replace with a real photo before publishing. */
  },

  
};

export const teamCategories: TeamCategory[] = [
  {
    id: "ceo",
    label: "CEO",
    description: "Company leadership and executive direction.",
    members: ["ceo"],
  },
  {
    id: "companyManager",
    label: "Company Manager",
    description: "Operations and delivery coordination.",
    members: ["companyManager"],
  },
  {
    id: "marketingTeam",
    label: "Marketing Team",
    description: "Brand, outreach and client communication.",
    members: ["marketingLead"],
  },
  // {
  //   id: "developmentTeam",
  //   label: "Development Team",
  //   description: "Software engineering and product development.",
  //   members: ["devLead", "developer"],
  // },
  {
    id: "otherTeam",
    label: "Other Team Members",
    description: "Support, administration and client services.",
    members: ["supportLead"],
  },
    {
    id: "supportManager",
    label: "Other Team Members",
    description: "Support, administration and client services.",
    members: ["supportManager"],
  },
];

/** Ordered list of member IDs for easy iteration. */
export const orderedMemberIds: string[] = teamCategories.flatMap(
  (category) => category.members,
);

/** Resolve a member by id, or return undefined. */
export function getTeamMember(id: string): TeamMember | undefined {
  return teamMembers[id];
}
