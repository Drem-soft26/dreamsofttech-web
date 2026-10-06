import type { IconName } from "@/components/icons";

/** Editable copy used across the home page sections. */

export type ContentItem = {
  icon: IconName;
  title: string;
  description: string;
};

export const capabilities: ContentItem[] = [
  { icon: "data", title: "Data Management", description: "Keep business records organised and easy to find." },
  { icon: "billing", title: "Billing", description: "Prepare invoices, payments and dues records." },
  { icon: "inventory", title: "Inventory Management", description: "Track stock levels and item movement." },
  { icon: "sales", title: "Sales Management", description: "Record sales activity and review totals." },
  { icon: "purchases", title: "Purchase Management", description: "Manage supplier purchases and incoming goods." },
  { icon: "reports", title: "Reports", description: "Review practical reports for daily decisions." },
  { icon: "search", title: "Search and Records", description: "Find information quickly when it is needed." },
  { icon: "users", title: "User Management", description: "Control access for different roles and staff." },
];

export const whyChooseUs: ContentItem[] = [
  { icon: "easy", title: "Easy to Use", description: "Designed for staff with basic computer skills." },
  { icon: "desktop", title: "Lightweight Desktop Applications", description: "Runs on standard office computers." },
  { icon: "speed", title: "Fast and Practical", description: "Focused on everyday tasks without extra steps." },
  { icon: "target", title: "Business-Focused Solutions", description: "Built around real business requirements." },
  { icon: "install", title: "Installation Support", description: "Assistance with setup and initial configuration." },
  { icon: "support", title: "Customer Support", description: "Help when questions or issues come up." },
  { icon: "data", title: "Reliable Data Management", description: "Structured records that stay easy to maintain." },
  { icon: "tools", title: "Practical Business Tools", description: "No unnecessary features — only what is useful." },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Tell Us Your Requirement",
    description: "Contact us and explain your business requirements.",
  },
  {
    number: "02",
    title: "Explore the Software",
    description: "Learn about the appropriate software and request a demo.",
  },
  {
    number: "03",
    title: "Get the Solution",
    description: "Our team provides the appropriate software solution and necessary support.",
  },
];

export const aboutSummary = [
  "We provide practical software solutions for businesses that need simple and reliable tools to manage their daily operations. Our focus is on lightweight desktop applications designed for real-world business requirements.",
  "We work with businesses that want clear records, faster everyday tasks and software that staff can start using without long training.",
];
