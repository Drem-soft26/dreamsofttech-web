import type { IconName } from "@/components/icons";

/**
 * Software pricing (one-time software price in BDT — ৳).
 *
 * Edit prices here only; every pricing display reads from this data.
 * Discount values are optional: only set `discountPercent` when a real
 * discount exists. While it is undefined the UI shows
 * "Special Discount Available" instead of inventing a percentage.
 */
export type SoftwarePricing = {
  /** Software price in BDT. */
  price: number;
  /** Real discount percentage (e.g. 20 for 20% OFF). Leave undefined if none. */
  discountPercent?: number;
  /** Optional explicit offer price; overrides the calculated discount price. */
  offerPrice?: number;
};

export type SoftwareFeature = {
  title: string;
  description: string;
};

export type Software = {
  slug: string;
  name: string;
  icon: IconName;
  /** Short description used on cards and meta descriptions. */
  tagline: string;
  /** Overview paragraphs shown on the detail page. */
  overview: string[];
  features: SoftwareFeature[];
  whoItIsFor: string[];
  benefits: string[];
  /** Present when the software has a published price. */
  pricing?: SoftwarePricing;
};

/** Formats an amount as ৳2,500 without relying on locale APIs. */
export function formatTaka(amount: number): string {
  return `৳${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

/** Resolved discount info for display, or null when no real discount is set. */
export function resolveDiscount(
  pricing: SoftwarePricing,
): { percent: number; offerPrice: number } | null {
  const percent = pricing.discountPercent;
  if (percent === undefined || percent <= 0 || percent >= 100) {
    return null;
  }

  const offerPrice =
    pricing.offerPrice ?? Math.round(pricing.price * (1 - percent / 100));

  return { percent, offerPrice };
}


export const softwareList: Software[] = [
  {
    slug: "hospital-management",
    name: "Hospital Management Software",
    icon: "hospital",
    tagline:
      "Manage patient records, appointments, billing and daily hospital operations from one desktop application.",
    overview: [
      "Our Hospital Management Software helps healthcare facilities keep patient information, appointments and billing records organised in one place. It is designed as a lightweight desktop application that runs smoothly on standard office computers.",
      "The application is intended to reduce manual register keeping and make everyday information quick to find. Feature sets can be adjusted to match the requirements of each facility.",
    ],
    features: [
      { title: "Patient Records", description: "Store patient information and find records quickly." },
      { title: "Appointments", description: "Keep track of visits and daily appointments." },
      { title: "Billing", description: "Prepare service bills and maintain payment records." },
      { title: "Search and Records", description: "Locate previous records without digging through files." },
      { title: "Reports", description: "View day-to-day operational reports." },
      { title: "User Management", description: "Control which staff can access which information." },
    ],
    whoItIsFor: [
      "Hospitals and clinics",
      "Diagnostic centres",
      "Healthcare facilities that need structured digital records",
    ],
    benefits: [
      "Less manual register keeping",
      "Faster access to patient and billing information",
      "Clear records for day-to-day operations",
      "Practical to use with minimal training",
    ],
    pricing: { price: 6500 },
  },
  {
    slug: "pharmacy-management",
    name: "Pharmacy Management Software",
    icon: "pharmacy",
    tagline:
      "Handle medicine stock, sales, purchases and expiry tracking in a simple desktop application.",
    overview: [
      "Our Pharmacy Management Software is built for medicine stores that need accurate stock and sales records without complex systems. It keeps medicine information, purchases and daily sales organised on a single computer or local network.",
      "The application focuses on the everyday tasks of a pharmacy: adding stock, selling items, checking balances and reviewing reports.",
    ],
    features: [
      { title: "Medicine Stock", description: "Maintain medicine entries with batch and strength details." },
      { title: "Sales Management", description: "Record counter sales quickly and accurately." },
      { title: "Purchase Management", description: "Track supplier purchases and stock additions." },
      { title: "Expiry Tracking", description: "Keep an eye on medicines nearing their expiry date." },
      { title: "Reports", description: "Review sales, purchase and stock reports." },
      { title: "Search and Records", description: "Find any medicine or past transaction in seconds." },
    ],
    whoItIsFor: [
      "Retail pharmacies",
      "Medicine stores with regular stock movement",
      "Pharmacies that want digital records without internet dependency",
    ],
    benefits: [
      "Accurate stock balance at the counter",
      "Faster billing during busy hours",
      "Fewer manual entry mistakes",
      "Easy reporting for daily review",
    ],
    pricing: { price: 5500 },
  },
  {
    slug: "inventory-management",
    name: "Inventory Management Software",
    icon: "inventory",
    tagline:
      "Track stock, purchases, suppliers and movement of goods with a lightweight desktop application.",
    overview: [
      "Our Inventory Management Software gives businesses a clear view of what is in stock, what has been received and what is running low. It is designed for warehouses, traders and multi-department businesses that handle physical goods.",
      "Records are kept locally on desktop machines, keeping the system fast and easy to maintain.",
    ],
    features: [
      { title: "Data Management", description: "Keep product and stock information in one structured place." },
      { title: "Stock Control", description: "Monitor current quantities and item movement." },
      { title: "Purchase Management", description: "Record incoming goods and supplier information." },
      { title: "Sales Management", description: "Track outgoing goods against stock levels." },
      { title: "Reports", description: "Generate stock, purchase and sales reports." },
      { title: "User Management", description: "Assign access according to staff responsibilities." },
    ],
    whoItIsFor: [
      "Warehouses and distributors",
      "Trading and distribution businesses",
      "Businesses managing multiple product categories",
    ],
    benefits: [
      "Clear stock visibility",
      "Quicker stock checks and fewer discrepancies",
      "Better purchase planning with reports",
      "Lightweight enough for everyday office computers",
    ],
    pricing: { price: 4500 },
  },
  {
    slug: "super-shop-pos",
    name: "Super Shop / POS Software",
    icon: "pos",
    tagline:
      "Run counter billing, stock and daily sales for super shops and retail stores from one desktop application.",
    overview: [
      "Our Super Shop / POS Software supports the everyday work of a retail counter: billing customers, recording sales, updating stock and reviewing the day's totals. It is built to stay fast and practical during busy trading hours.",
      "The application can be used on a single counter or across connected computers inside the shop.",
    ],
    features: [
      { title: "Fast Billing", description: "Create bills at the counter with minimal steps." },
      { title: "Sales Management", description: "Record every sale and review daily totals." },
      { title: "Inventory Management", description: "Keep shelf and store stock updated after sales." },
      { title: "Purchase Management", description: "Record supplier deliveries and stock intake." },
      { title: "Reports", description: "View sales, stock and shift reports." },
      { title: "User Management", description: "Separate access for owners, managers and counter staff." },
    ],
    whoItIsFor: [
      "Super shops and grocery stores",
      "Retail counters with daily customer traffic",
      "Stores that need fast counter billing",
    ],
    benefits: [
      "Quicker checkout at the counter",
      "Stock updated with every sale",
      "Daily figures available at a glance",
      "Practical for staff with basic computer skills",
    ],
    pricing: { price: 3500 },
  },
  {
    slug: "billing-software",
    name: "Billing Software",
    icon: "billing",
    tagline:
      "Create invoices, record payments and track dues with a straightforward desktop billing application.",
    overview: [
      "Our Billing Software helps businesses prepare invoices and keep payment records without depending on internet-based tools. It suits service providers, traders and small businesses that bill customers regularly.",
      "The focus is on simple invoice creation, clear payment history and easy reporting.",
    ],
    features: [
      { title: "Invoicing", description: "Prepare clean invoices for customers and services." },
      { title: "Payment Records", description: "Record paid, due and partial payments." },
      { title: "Data Management", description: "Keep customer and billing information organised." },
      { title: "Search and Records", description: "Find any invoice or customer quickly." },
      { title: "Reports", description: "Review billing totals and outstanding dues." },
      { title: "User Management", description: "Limit billing access to the right people." },
    ],
    whoItIsFor: [
      "Service providers and professionals",
      "Traders and small businesses",
      "Any business that needs regular invoices and payment records",
    ],
    benefits: [
      "Faster invoice preparation",
      "Clear record of payments and dues",
      "Less dependence on paper bills",
      "Simple enough for daily use",
    ],
    pricing: { price: 2500 },
  },
  {
    slug: "business-management",
    name: "Business Management Software",
    icon: "business",
    tagline:
      "Bring sales, purchase, inventory and business records together in one lightweight desktop application.",
    overview: [
      "Our Business Management Software brings the core records of a business — sales, purchase, stock and reporting — into a single desktop application. It is intended for small and growing businesses that need structure without heavy systems.",
      "Modules can be selected based on the business type, keeping the application focused on what is actually needed.",
    ],
    features: [
      { title: "Sales Management", description: "Record and review sales activity." },
      { title: "Purchase Management", description: "Keep supplier purchases organised." },
      { title: "Inventory Management", description: "Maintain stock records alongside sales and purchase." },
      { title: "Billing", description: "Prepare invoices and payment records." },
      { title: "Reports", description: "Review business figures with practical reports." },
      { title: "User Management", description: "Control access for different roles." },
    ],
    whoItIsFor: [
      "Small and growing businesses",
      "Traders and multi-product businesses",
      "Organisations moving from paper-based records to digital records",
    ],
    benefits: [
      "One place for core business records",
      "Better visibility of day-to-day activity",
      "Reduced manual bookkeeping",
      "Modular setup matched to business needs",
    ],
  },
];

export function getSoftwareBySlug(slug: string): Software | undefined {
  return softwareList.find((software) => software.slug === slug);
}




