import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, Search, Sun, Moon, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import NavSearch from "./NavSearch";
import { useTheme } from "./ThemeProvider";

const primaryLinks = [
  { label: "Home", path: "/" },
  { label: "What is Fiber", path: "/what-is-fiber" },
  { label: "Types", path: "/types" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Installation", path: "/installation" },
  { label: "Components", path: "/components" },
  { label: "Tools", path: "/tools" },
];

const moreLinks = [
  { label: "OTDR Sim", path: "/otdr-simulator" },
  { label: "Glossary", path: "/glossary" },
  { label: "Uses", path: "/uses" },
  { label: "Cable Guide", path: "/cable-guide" },
  { label: "Quiz", path: "/quiz" },
];

const allLinks = [...primaryLinks, ...moreLinks];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { theme, toggle } = useTheme();

  const isMoreActive = moreLinks.some((l) => l.path === location.pathname);

  // Close "More" dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close "More" on route change
  useEffect(() => {
    setMoreOpen(false);
  }, [location.pathname]);

  const handleCloseMenu = () => {
    setOpen(false);
    setMobileSearchOpen(false);
  };

  const linkClass = (path: string) =>
    `px-2 xl:px-2.5 py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
      location.pathname === path
        ? "text-primary bg-primary/10"
        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-content flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
            <Zap className="w-4 h-4 text-primary" />
          </div>
          <span className="font-bold text-lg text-foreground">
            Fiber<span className="text-primary">Optic</span>Guide
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-0.5">
          {primaryLinks.map((link) => (
            <Link key={link.path} to={link.path} className={linkClass(link.path)}>
              {link.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen((v) => !v)}
              className={`flex items-center gap-1 px-2 xl:px-2.5 py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                isMoreActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              More
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 w-48 rounded-xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-lg py-1.5 z-50"
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                        location.pathname === link.path
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavSearch />
          <button
            onClick={toggle}
            className="ml-1 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-1">
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors active:scale-95"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => { setOpen(!open); setMobileSearchOpen(false); }}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors active:scale-95"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
          >
            <div className="px-4 pb-4">
              {mobileSearchOpen ? (
                <div className="relative">
                  <div className="fixed inset-0 top-16 bg-background/80 backdrop-blur-md z-40" onClick={() => setMobileSearchOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-50 py-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <button
                        onClick={() => setMobileSearchOpen(false)}
                        className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <span className="text-sm font-medium text-foreground">Search Topics</span>
                    </div>
                    <NavSearch autoFocus onNavigate={handleCloseMenu} />
                  </motion.div>
                </div>
              ) : (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 }}
                    onClick={() => setMobileSearchOpen(true)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors my-1 border border-border/50"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search topics...</span>
                  </motion.button>
                  {allLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * (i + 1) }}
                    >
                      <Link
                        to={link.path}
                        onClick={handleCloseMenu}
                        className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          location.pathname === link.path
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
