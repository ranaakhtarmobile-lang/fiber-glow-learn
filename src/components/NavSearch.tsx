import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

const searchItems = [
  { label: "What is Fiber Optic", path: "/what-is-fiber", keywords: ["fiber", "optic", "light", "cable", "introduction"] },
  { label: "Types of Fiber", path: "/types", keywords: ["single mode", "multi mode", "plastic", "smf", "mmf"] },
  { label: "How It Works", path: "/how-it-works", keywords: ["reflection", "total internal", "light", "propagation", "physics"] },
  { label: "Components & Tools", path: "/components", keywords: ["connector", "splicer", "otdr", "patch panel", "equipment"] },
  { label: "Installation Guide", path: "/installation", keywords: ["install", "underground", "aerial", "safety", "step"] },
  { label: "Interactive Tools", path: "/tools", keywords: ["calculator", "loss", "attenuation", "numerical aperture"] },
  { label: "Real World Uses", path: "/uses", keywords: ["isp", "data center", "medical", "military", "telecom"] },
];

const NavSearch = ({ autoFocus, onNavigate }: { autoFocus?: boolean; onNavigate?: () => void }) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(!!autoFocus);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const filtered = query.trim()
    ? searchItems.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.keywords.some((k) => k.includes(query.toLowerCase()))
      )
    : searchItems;

  useEffect(() => {
    setSelectedIdx(0);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  const goTo = (path: string) => {
    navigate(path);
    setQuery("");
    setOpen(false);
    inputRef.current?.blur();
    onNavigate?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIdx]) {
      goTo(filtered[selectedIdx].path);
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-muted/30 px-3 py-1.5 focus-within:border-primary/50 focus-within:bg-muted/50 transition-colors duration-200">
        <Search className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search topics..."
          className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-28 lg:w-36"
        />
        {query && (
          <button onClick={() => { setQuery(""); inputRef.current?.focus(); }} className="text-muted-foreground hover:text-foreground">
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {open && filtered.length > 0 && (
        <div className="absolute top-full right-0 mt-2 w-64 rounded-xl border border-border/50 bg-card/95 backdrop-blur-xl shadow-lg shadow-black/20 overflow-hidden z-50">
          <div className="p-1.5">
            {filtered.map((item, i) => (
              <button
                key={item.path}
                onClick={() => goTo(item.path)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-150 ${
                  i === selectedIdx
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavSearch;
