import { Link } from "react-router-dom";
import { Home, BookOpen, Layers, Wrench, HelpCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const quickLinks = [
  { label: "Home", path: "/", icon: Home },
  { label: "What is Fiber", path: "/what-is-fiber", icon: BookOpen },
  { label: "Fiber Types", path: "/types", icon: Layers },
  { label: "Tools & Equipment", path: "/tools", icon: Wrench },
  { label: "Glossary", path: "/glossary", icon: HelpCircle },
];

const NotFound = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Browse our fiber optic guides instead."
        path="/404"
      />
      <div className="flex min-h-[80vh] items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <div className="mb-4 text-7xl font-bold text-primary/30">404</div>
          <h1 className="mb-2 text-2xl font-bold text-foreground">Page Not Found</h1>
          <p className="mb-8 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved. Try one of these:
          </p>
          <div className="grid grid-cols-1 gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
              >
                <link.icon className="h-4 w-4 text-primary" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
