import {
  ArrowRight,
  Building2,
  ChartColumn,
  Check,
  ClipboardList,
  Database,
  Download,
  Gauge,
  Headphones,
  Hospital,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Monitor,
  Package,
  PackagePlus,
  Phone,
  Pill,
  Receipt,
  Search,
  Settings2,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
  Wrench,
  X,
} from "lucide-react";

/**
 * Icon names used across the app, mapped to `lucide-react` components.
 * lucide-react is the supported icon package for the Next.js App Router.
 */
export type IconName =
  // software categories
  | "hospital"
  | "pharmacy"
  | "inventory"
  | "pos"
  | "billing"
  | "business"
  | "custom"
  // feature icons
  | "data"
  | "sales"
  | "purchases"
  | "reports"
  | "search"
  | "users"
  | "easy"
  | "desktop"
  | "speed"
  | "target"
  | "install"
  | "support"
  | "tools"
  // ui icons
  | "check"
  | "arrow-right"
  | "menu"
  | "close"
  | "phone"
  | "email"
  | "address"
  | "chat";

const icons = {
  hospital: Hospital,
  pharmacy: Pill,
  inventory: Package,
  pos: ShoppingCart,
  billing: Receipt,
  business: Building2,
  custom: Settings2,
  data: Database,
  sales: TrendingUp,
  purchases: PackagePlus,
  reports: ChartColumn,
  search: Search,
  users: Users,
  easy: ClipboardList,
  desktop: Monitor,
  speed: Gauge,
  target: Target,
  install: Download,
  support: Headphones,
  tools: Wrench,
  check: Check,
  "arrow-right": ArrowRight,
  menu: Menu,
  close: X,
  phone: Phone,
  email: Mail,
  address: MapPin,
  chat: MessageSquare,
} satisfies Record<IconName, typeof Check>;

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className = "h-6 w-6", strokeWidth = 1.5 }: IconProps) {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      className={className}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      focusable="false"
    />
  );
}
