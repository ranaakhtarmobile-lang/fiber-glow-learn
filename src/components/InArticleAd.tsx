import { useEffect, useRef } from "react";

/**
 * In-article native ad slot.
 * Responsive: 728x90 on desktop, scales to fit on mobile.
 * Uses the Adsterra native banner script.
 */
const InArticleAd = ({ className = "" }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current || !containerRef.current) return;
    injected.current = true;

    const script = document.createElement("script");
    script.src = "https://pl29061419.profitablecpmratenetwork.com/564c505d47d7b7c31c0bf5471f77a5b7/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className={`my-6 sm:my-8 flex justify-center ${className}`}>
      <div
        ref={containerRef}
        id={`container-564c505d47d7b7c31c0bf5471f77a5b7`}
        className="w-full max-w-[728px] min-h-[90px] overflow-hidden"
      />
    </div>
  );
};

export default InArticleAd;
