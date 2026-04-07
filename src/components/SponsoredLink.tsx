import { ExternalLink } from "lucide-react";

const DIRECT_LINKS = [
  "https://www.profitablecpmratenetwork.com/m4rd58pnar?key=30b8a178e32e26af83258a490859cd61",
  "https://www.profitablecpmratenetwork.com/eyh4xzh4s?key=2f400eda7efa96ed17aba45a346b7a42",
];

const variants = [
  "Explore Fiber Solutions",
  "Discover Network Tools",
  "Recommended Resources",
  "Featured Partner Offer",
  "Open Sponsored Resource",
];

/**
 * Visible sponsored CTA using the Adsterra direct link.
 * Rotates destination URL and CTA text by variant.
 */
const SponsoredLink = ({ variant = 0, className = "" }: { variant?: number; className?: string }) => {
  const linkIndex = variant % DIRECT_LINKS.length;
  const copyIndex = variant % variants.length;

  return (
    <a
      href={DIRECT_LINKS[linkIndex]}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`group inline-flex w-full max-w-[728px] items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-card/40 px-4 py-4 text-left transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 ${className}`}
    >
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          Sponsored link
        </div>
        <div className="mt-1 text-sm font-semibold text-foreground sm:text-base">
          {variants[copyIndex]}
        </div>
        <div className="mt-1 text-xs text-muted-foreground">
          Tap to open this partner offer in a new tab.
        </div>
      </div>

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/50 bg-muted/40 transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
        <ExternalLink className="h-4 w-4 text-primary" />
      </div>
    </a>
  );
};

export default SponsoredLink;
