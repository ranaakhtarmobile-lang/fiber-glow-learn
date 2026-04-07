import { ExternalLink } from "lucide-react";

const DIRECT_LINKS = [
  "https://www.profitablecpmratenetwork.com/m4rd58pnar?key=30b8a178e32e26af83258a490859cd61",
  "https://www.profitablecpmratenetwork.com/eyh4xzh4s?key=2f400eda7efa96ed17aba45a346b7a42",
];

const variants = [
  "Explore Fiber Solutions →",
  "Discover Network Tools →",
  "Learn More →",
  "Recommended Resources →",
  "Featured Partner →",
];

/**
 * Subtle sponsored text link / button using the Adsterra direct link.
 * Rotates through CTA text variants based on index prop.
 */
const SponsoredLink = ({ variant = 0, className = "" }: { variant?: number; className?: string }) => (
  <a
    href={DIRECT_LINK_URL}
    target="_blank"
    rel="noopener noreferrer sponsored"
    className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/50 bg-muted/20 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200 text-sm text-muted-foreground hover:text-primary ${className}`}
  >
    <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
    <span>{variants[variant % variants.length]}</span>
    <span className="text-[10px] opacity-40 ml-1">Ad</span>
  </a>
);

export default SponsoredLink;
