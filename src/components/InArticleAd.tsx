import { useEffect, useRef, useId, useState } from "react";

const isPreviewHost = () => {
  if (typeof window === "undefined") return false;
  const { hostname } = window.location;
  return hostname.endsWith("lovableproject.com") || hostname.startsWith("id-preview--");
};

/**
 * In-article native ad slot using Adsterra native banner.
 * Each instance gets a unique container ID.
 * Responsive: scales to fit on mobile.
 */
const InArticleAd = ({ className = "" }: { className?: string }) => {
  const uniqueId = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const injected = useRef(false);
  const [showFallback, setShowFallback] = useState(() => isPreviewHost());

  useEffect(() => {
    const container = containerRef.current;
    if (!container || injected.current) return;

    injected.current = true;

    const hasRenderedAd = () => Boolean(container.querySelector("iframe, ins, img, object, embed"));

    const observer = new MutationObserver(() => {
      if (hasRenderedAd()) {
        setShowFallback(false);
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    const script = document.createElement("script");
    script.src = "https://pl29061419.profitablecpmratenetwork.com/564c505d47d7b7c31c0bf5471f77a5b7/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    container.appendChild(script);

    const timeoutId = window.setTimeout(() => {
      if (!hasRenderedAd()) {
        setShowFallback(true);
      }
    }, 1800);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={`my-6 flex justify-center sm:my-8 ${className}`}>
      <div
        ref={containerRef}
        id={`container-564c505d47d7b7c31c0bf5471f77a5b7-${uniqueId}`}
        className="relative min-h-[90px] w-full max-w-[728px] overflow-hidden"
      >
        {showFallback && (
          <div className="flex min-h-[90px] w-full flex-col items-center justify-center rounded-xl border border-border/50 bg-muted/20 px-4 py-4 text-center">
            <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Sponsored content
            </span>
            <span className="mt-2 text-sm font-medium text-foreground">Native ad preview placeholder</span>
            <span className="mt-1 text-xs text-muted-foreground">
              Published site par yahan native ad load hogi.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InArticleAd;
