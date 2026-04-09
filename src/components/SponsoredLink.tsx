import { ExternalLink, Sparkles } from "lucide-react";

const DIRECT_LINKS = [
  "https://www.profitablecpmratenetwork.com/m4rd58pnar?key=30b8a178e32e26af83258a490859cd61",
  "https://www.profitablecpmratenetwork.com/eyh4xzh4s?key=2f400eda7efa96ed17aba45a346b7a42",
];

const variants = [
  { cta: "Explore Fiber Solutions", desc: "Top-rated tools & resources for fiber optics" },
  { cta: "Discover Network Tools", desc: "Professional networking solutions await" },
  { cta: "Recommended Resources", desc: "Hand-picked partner offers for you" },
  { cta: "Featured Partner Offer", desc: "Exclusive deals from our trusted partners" },
  { cta: "Open Sponsored Resource", desc: "Tap to explore premium fiber resources" },
];

const SponsoredLink = ({ variant = 0, className = "" }: { variant?: number; className?: string }) => {
  const linkIndex = variant % DIRECT_LINKS.length;
  const copyIndex = variant % variants.length;

  return (
    <a
      href={DIRECT_LINKS[linkIndex]}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`group relative mx-auto block w-full max-w-[728px] overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-r from-primary/10 via-card to-primary/10 p-[2px] shadow-lg shadow-primary/10 transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20 ${className}`}
    >
      {/* Inner card */}
      <div className="relative flex w-full items-center justify-between gap-3 rounded-[14px] bg-card px-4 py-4 sm:gap-4 sm:px-6 sm:py-5">
        {/* Glow accent */}
        <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl transition-all duration-500 group-hover:bg-primary/30" />

        {/* Icon */}
        <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary ring-2 ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/25 group-hover:ring-primary/40 sm:h-12 sm:w-12">
          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>

        {/* Text */}
        <div className="relative z-10 min-w-0 flex-1">
          <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary/70 sm:text-[10px]">
            Sponsored
          </div>
          <div className="mt-0.5 truncate text-sm font-bold text-foreground sm:text-base md:text-lg">
            {variants[copyIndex].cta}
          </div>
          <div className="mt-0.5 truncate text-[11px] text-muted-foreground sm:text-xs">
            {variants[copyIndex].desc}
          </div>
        </div>

        {/* CTA button */}
        <div className="relative z-10 flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-3 py-2 text-[11px] font-semibold text-primary-foreground shadow-md shadow-primary/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/40 sm:px-4 sm:py-2.5 sm:text-xs">
          <span className="hidden sm:inline">Visit</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </div>
      </div>
    </a>
  );
};

export default SponsoredLink;
