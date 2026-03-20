import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-fiber-bg.jpg";

const FiberHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Animated light beams */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px glow-line animate-fiber-pulse opacity-20" />
        <div className="absolute top-2/4 left-0 w-full h-px glow-line animate-fiber-pulse opacity-15" style={{ animationDelay: "1s" }} />
        <div className="absolute top-3/4 left-0 w-full h-px glow-line animate-fiber-pulse opacity-10" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-content relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-8 mono backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
            Complete Fiber Optic Knowledge Hub
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-foreground">Fiber Optic Guide</span>
          <br />
          <span className="glow-text text-primary">Learn Everything A to Z</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Master fiber optic technology from fundamentals to advanced concepts.
          Built for students, network engineers, and IT professionals seeking
          practical, in-depth knowledge.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/what-is-fiber"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-primary/20"
          >
            <BookOpen className="w-4 h-4" />
            Start Learning
          </Link>
          <Link
            to="/types"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-foreground font-semibold text-sm hover:bg-muted/50 active:scale-[0.97] transition-all duration-200"
          >
            Explore Types
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-16 grid grid-cols-3 max-w-lg mx-auto gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            { value: "10+", label: "Topics" },
            { value: "100%", label: "Free" },
            { value: "A–Z", label: "Coverage" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-primary mono">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FiberHero;
