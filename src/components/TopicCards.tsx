import { useState } from "react";
import { Link } from "react-router-dom";
import { Cable, Layers, Wrench, Activity, Globe, Calculator, BookOpen, HardHat, Search as SearchIcon, HelpCircle, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const topics = [
  { icon: Cable, title: "What is Fiber Optic", desc: "Core concepts of optical fiber communication and how light carries data.", path: "/what-is-fiber", color: "text-glow-cyan", category: "Basics" },
  { icon: Layers, title: "Types of Fiber", desc: "Single mode, multi mode, plastic fiber — compare specifications.", path: "/types", color: "text-glow-teal", category: "Basics" },
  { icon: Activity, title: "Working Principle", desc: "Total internal reflection, light propagation, and signal behavior.", path: "/how-it-works", color: "text-glow-purple", category: "Basics" },
  { icon: Wrench, title: "Components & Tools", desc: "Connectors, splicers, OTDR, patch panels — essential equipment.", path: "/components", color: "text-glow-cyan", category: "Hardware" },
  { icon: HardHat, title: "Installation Guide", desc: "Step-by-step deployment, safety protocols, aerial & underground.", path: "/installation", color: "text-glow-teal", category: "Hardware" },
  { icon: Globe, title: "Real World Uses", desc: "ISP networks, data centers, medical, military applications.", path: "/uses", color: "text-glow-teal", category: "Applications" },
  { icon: Calculator, title: "Calculators", desc: "Fiber loss calculator, attenuation estimator, and more.", path: "/tools", color: "text-glow-purple", category: "Tools" },
  { icon: SearchIcon, title: "OTDR Simulator", desc: "Interactive OTDR trace visualizer for learning diagnostics.", path: "/otdr-simulator", color: "text-glow-cyan", category: "Tools" },
  { icon: BookOpen, title: "Cable Guide", desc: "Cable construction, jackets, color codes, and selection tips.", path: "/cable-guide", color: "text-glow-teal", category: "Hardware" },
  { icon: HelpCircle, title: "Glossary", desc: "50+ technical fiber optic terms explained in simple language.", path: "/glossary", color: "text-glow-purple", category: "Learn" },
  { icon: Sparkles, title: "Quiz", desc: "Test your fiber optic knowledge with randomized questions.", path: "/quiz", color: "text-glow-cyan", category: "Learn" },
];

const categories = ["All", "Basics", "Hardware", "Applications", "Tools", "Learn"];

const TopicCards = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? topics : topics.filter((t) => t.category === active);

  return (
    <section className="section-padding">
      <div className="container-content">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Explore <span className="text-primary">Topics</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-8">
            Navigate through comprehensive modules covering every aspect of fiber optic technology.
          </p>
        </ScrollReveal>

        {/* Filter chips */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 active:scale-95 ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                    : "bg-card/50 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((topic, i) => (
            <ScrollReveal key={topic.title} delay={i * 0.05}>
              <Link
                to={topic.path}
                className="glass-card p-6 block group hover:border-primary/30 transition-all duration-300 active:scale-[0.97] h-full"
              >
                <topic.icon className={`w-8 h-8 ${topic.color} mb-4 group-hover:scale-110 transition-transform duration-200`} />
                <div className="mono text-[10px] uppercase tracking-wider text-primary/70 mb-1">{topic.category}</div>
                <h3 className="font-semibold text-foreground mb-2">{topic.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{topic.desc}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicCards;
