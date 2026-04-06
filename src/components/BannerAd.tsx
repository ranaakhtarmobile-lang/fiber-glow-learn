import { useEffect, useRef } from "react";

/**
 * 728x90 Adsterra banner ad.
 * Responsive: shows full size on desktop, scales down on mobile.
 */
const BannerAd = ({ className = "" }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current || !containerRef.current) return;
    injected.current = true;

    // Options script
    const optScript = document.createElement("script");
    optScript.innerHTML = `
      atOptions = {
        'key' : 'e738e889feb8f17ff3a77d2061f645e0',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    containerRef.current.appendChild(optScript);

    // Invoke script
    const invokeScript = document.createElement("script");
    invokeScript.src = "https://www.highperformanceformat.com/e738e889feb8f17ff3a77d2061f645e0/invoke.js";
    invokeScript.async = true;
    containerRef.current.appendChild(invokeScript);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center overflow-hidden ${className}`}
      style={{ maxWidth: "728px", margin: "0 auto" }}
    />
  );
};

export default BannerAd;
