import { useEffect, useRef, useState } from "react";

const isPreviewHost = () => {
  if (typeof window === "undefined") return false;
  const { hostname } = window.location;
  return hostname.endsWith("lovableproject.com") || hostname.startsWith("id-preview--");
};

/**
 * 728x90 Adsterra banner ad.
 * Responsive: shows full size on desktop, scales down on mobile.
 */
const BannerAd = ({ className = "" }: { className?: string }) => {
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

    const optScript = document.createElement("script");
    optScript.innerHTML = `
      window.atOptions = {
        'key' : 'e738e889feb8f17ff3a77d2061f645e0',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    container.appendChild(optScript);

    const invokeScript = document.createElement("script");
    invokeScript.src = "https://www.highperformanceformat.com/e738e889feb8f17ff3a77d2061f645e0/invoke.js";
    invokeScript.async = true;
    container.appendChild(invokeScript);

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
    <div
      ref={containerRef}
      className={`relative flex min-h-[90px] w-full max-w-[728px] items-center justify-center overflow-hidden ${className}`}
      style={{ margin: "0 auto" }}
    >
    </div>
  );
};

export default BannerAd;
