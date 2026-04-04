import { Link } from "react-router-dom";
import { Zap, Mail, Github } from "lucide-react";
import AdSlot from "./AdSlot";

const Footer = () => (
  <>
    <div className="container-content px-4 py-6">
      <AdSlot
        containerId="container-564c505d47d7b7c31c0bf5471f77a5b7"
        scriptSrc="https://pl29061419.profitablecpmratenetwork.com/564c505d47d7b7c31c0bf5471f77a5b7/invoke.js"
        dataAttrs={{ "async": "async", "data-cfasync": "false" }}
      />
    </div>
  <footer className="border-t border-border/50 bg-card/30">
    <div className="container-content px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <span className="font-bold text-lg">
              Fiber<span className="text-primary">Optic</span>Guide
            </span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            Your complete knowledge hub for fiber optic technology. From basics to advanced concepts, learn everything A to Z about optical fiber communication.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3 text-foreground">Learn</h4>
          <div className="flex flex-col gap-2">
            <Link to="/what-is-fiber" className="text-sm text-muted-foreground hover:text-primary transition-colors">What is Fiber Optic</Link>
            <Link to="/types" className="text-sm text-muted-foreground hover:text-primary transition-colors">Types of Fiber</Link>
            <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">Working Principle</Link>
            <Link to="/tools" className="text-sm text-muted-foreground hover:text-primary transition-colors">Calculators</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3 text-foreground">Connect</h4>
          <div className="flex flex-col gap-2">
            <a href="mailto:hello@fiberopticguide.com" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" /> Contact Us
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© 2026 FiberOpticGuide. All rights reserved.</p>
        <p className="text-xs text-muted-foreground">Built for students, engineers, and professionals.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
