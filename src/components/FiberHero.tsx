import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Zap } from "lucide-react";
import heroBg from "@/assets/hero-fiber-bg.jpg";

const letterContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03, delayChildren: 0.2 },
  },
};

const letterChild = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => (
  <motion.span className={className} variants={letterContainer} initial="hidden" animate="visible" aria-label={text}>
    {text.split("").map((char, i) => (
      <motion.span key={i} variants={letterChild} className="inline-block" style={{ whiteSpace: char === " " ? "pre" : undefined }}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.span>
);

const FiberHero = () => {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Animated light beams */}
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-line animate-fiber-pulse absolute left-0 top-1/4 h-px w-full opacity-20" />
        <div className="glow-line animate-fiber-pulse absolute left-0 top-2/4 h-px w-full opacity-15" style={{ animationDelay: "1s" }} />
        <div className="glow-line animate-fiber-pulse absolute left-0 top-3/4 h-px w-full opacity-10" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-content relative z-10 px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mono mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm sm:mb-8">
            <Zap className="h-3 w-3 animate-pulse" />
            Complete Fiber Optic Knowledge Hub
          </div>
        </motion.div>

        {/* Heading with letter-by-letter animation */}
        <h1 className="mb-4 text-3xl font-bold leading-[1.08] sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
          <AnimatedText text="Fiber Optic Guide" className="text-foreground" />
          <br />
          <motion.span
            className="glow-text mt-1 inline-block text-primary sm:mt-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Learn Everything A to Z
          </motion.span>
        </h1>

        {/* Description */}
        <motion.p
          className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mb-10 sm:max-w-2xl sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Master fiber optic technology from fundamentals to advanced concepts.
          Built for students, network engineers, and IT professionals.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/what-is-fiber"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:brightness-110 active:scale-[0.97] sm:w-auto"
          >
            <BookOpen className="h-4 w-4" />
            Start Learning
          </Link>
          <Link
            to="/types"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-200 hover:bg-muted/50 active:scale-[0.97] sm:w-auto"
          >
            Explore Types
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mx-auto mt-12 grid max-w-sm grid-cols-3 gap-4 sm:mt-16 sm:max-w-lg sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            { value: "10+", label: "Topics" },
            { value: "100%", label: "Free" },
            { value: "A–Z", label: "Coverage" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mono text-xl font-bold text-primary sm:text-2xl">{stat.value}</div>
              <div className="mt-1 text-[10px] text-muted-foreground sm:text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FiberHero;
