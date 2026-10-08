import {
  formatTaka,
  resolveDiscount,
  type SoftwarePricing,
} from "@/data/software";

/**
 * Shared pricing display used by the pricing section and software pages.
 * Shows the software price (never a subscription) plus the discount block.
 */

export function PriceBlock({ pricing }: { pricing: SoftwarePricing }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line">
      <div className="bg-ink px-4 py-3.5 text-center">
        <p className="text-2xl font-bold tracking-tight text-white">
          {formatTaka(pricing.price)}
        </p>

        <p className="mt-0.5 text-[11px] font-medium uppercase tracking-widest text-slate-400">
          Software Price · Starting from
        </p>
      </div>
    </div>
  );
}

export function DiscountBox({ pricing }: { pricing: SoftwarePricing }) {
  const discount = resolveDiscount(pricing);

  // No real discount percentage configured — never invent one.
  if (!discount) {
    return (
      <div className="rounded-md border border-line bg-surface-muted px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Discount
        </p>

        <p className="mt-1 text-sm font-semibold text-ink">
          Special Discount Available
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-line bg-surface-muted px-4 py-3">
      {/* Regular Price */}
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs text-ink-muted">Regular Price</span>

        <span className="text-sm text-ink-muted line-through">
          {formatTaka(pricing.price)}
        </span>
      </div>

      {/* Discount */}
      <div className="mt-2 flex items-center justify-between gap-3">
        <span className="text-xs text-ink-muted">Discount</span>

        <span className="rounded bg-primary px-2 py-0.5 text-xs font-bold text-white">
          {discount.percent}% OFF
        </span>
      </div>

      {/* Offer Price */}
      <div className="mt-2 flex items-center justify-between gap-3 border-t border-line pt-2">
        <span className="text-xs font-semibold text-ink">
          Offer Price
        </span>

        <span className="text-base font-bold text-primary">
          {formatTaka(discount.offerPrice)}
        </span>
      </div>
    </div>
  );
}