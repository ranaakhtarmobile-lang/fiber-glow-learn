import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, Search, Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import NavSearch from "./NavSearch";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "What is Fiber", path: "/what-is-fiber" },
  { label: "Types", path: "/types" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Installation", path: "/installation" },
  { label: "Components", path: "/components" },
  { label: "Tools", path: "/tools" },
  { label: "Uses", path: "/uses" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();

  const handleCloseMenu = () => {
    setOpen(false);
    setMobileSearchOpen(false);
  };

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
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-2 xl:px-2.5 py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <NavSearch />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => { setOpen(!open); setMobileSearchOpen(false); }}
          className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors active:scale-95"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
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
                  {navLinks.map((link, i) => (
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
