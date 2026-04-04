import { useEffect, useRef } from "react";

interface AdSlotProps {
  /** Unique HTML id for the container */
  containerId: string;
  /** Adsterra ad script src URL */
  scriptSrc?: string;
  /** Additional Adsterra data attributes as key-value pairs */
  dataAttrs?: Record<string, string>;
  className?: string;
}

/**
 * Generic Adsterra ad slot component.
 * 
 * Usage:
 * 1. Get your Adsterra ad code (banner / native / popunder).
 * 2. Pass the script `src` URL and any `data-*` attributes.
 * 3. The component injects the script once on mount.
 *
 * Until you add a real Adsterra script, a placeholder is shown
 * so you can see where ads will appear.
 */
const AdSlot = ({ containerId, scriptSrc, dataAttrs, className = "" }: AdSlotProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const injected = useRef(false);

  useEffect(() => {
    if (!scriptSrc || injected.current || !containerRef.current) return;
    injected.current = true;

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    if (dataAttrs) {
      Object.entries(dataAttrs).forEach(([k, v]) => script.setAttribute(k, v));
    }
    containerRef.current.appendChild(script);
  }, [scriptSrc, dataAttrs]);

  return (
    <div
      ref={containerRef}
      id={containerId}
      className={`flex items-center justify-center ${className}`}
    >
      {!scriptSrc && (
        <div className="w-full max-w-[728px] h-[90px] rounded-lg border border-dashed border-border/50 bg-muted/20 flex items-center justify-center text-xs text-muted-foreground">
          Ad Slot — Add your Adsterra script URL
        </div>
      )}
    </div>
  );
};

export default AdSlot;
