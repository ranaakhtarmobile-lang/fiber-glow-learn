import { useEffect, useRef, useState } from "react";

interface AdSlotProps {
  /** Unique HTML id for the container */
  containerId: string;
  /** Adsterra ad script src URL */
  scriptSrc?: string;
  /** Additional Adsterra data attributes as key-value pairs */
  dataAttrs?: Record<string, string>;
  className?: string;
}

const isPreviewHost = () => {
  if (typeof window === "undefined") return false;
  const { hostname } = window.location;
  return hostname.endsWith("lovableproject.com") || hostname.startsWith("id-preview--");
};

const AdSlot = ({ containerId, scriptSrc, dataAttrs, className = "" }: AdSlotProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const injected = useRef(false);
  const [showFallback, setShowFallback] = useState(() => !scriptSrc || isPreviewHost());

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !scriptSrc || injected.current) {
      if (!scriptSrc) setShowFallback(true);
      return;
    }

    injected.current = true;

    const hasRenderedAd = () => Boolean(container.querySelector("iframe, ins, img, object, embed"));

    const observer = new MutationObserver(() => {
      if (hasRenderedAd()) {
        setShowFallback(false);
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;

    if (dataAttrs) {
      Object.entries(dataAttrs).forEach(([key, value]) => script.setAttribute(key, value));
    }

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
  }, [scriptSrc, dataAttrs]);

  return (
    <div
      ref={containerRef}
      id={containerId}
      className={`relative flex min-h-[90px] w-full items-center justify-center ${className}`}
    >
    </div>
  );
};

export default AdSlot;
