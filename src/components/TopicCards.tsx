import { Link } from "react-router-dom";
import { Cable, Layers, Wrench, Activity, Globe, Calculator } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const topics = [
  { icon: Cable, title: "What is Fiber Optic", desc: "Core concepts of optical fiber communication and how light carries data.", path: "/what-is-fiber", color: "text-glow-cyan" },
  { icon: Layers, title: "Types of Fiber", desc: "Single mode, multi mode, plastic fiber — compare specifications.", path: "/types", color: "text-glow-teal" },
  { icon: Activity, title: "Working Principle", desc: "Total internal reflection, light propagation, and signal behavior.", path: "/how-it-works", color: "text-glow-purple" },
  { icon: Wrench, title: "Components & Tools", desc: "Connectors, splicers, OTDR, patch panels — essential equipment.", path: "/uses", color: "text-glow-cyan" },
  { icon: Globe, title: "Real World Uses", desc: "ISP networks, data centers, medical, military applications.", path: "/uses", color: "text-glow-teal" },
  { icon: Calculator, title: "Calculators", desc: "Fiber loss calculator, attenuation estimator, and more.", path: "/tools", color: "text-glow-purple" },
];

const TopicCards = () => (
  <section className="section-padding">
    <div className="container-content">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Explore <span className="text-primary">Topics</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Navigate through comprehensive modules covering every aspect of fiber optic technology.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {topics.map((topic, i) => (
          <ScrollReveal key={topic.title} delay={i * 0.08}>
            <Link
              to={topic.path}
              className="glass-card p-6 block group hover:border-primary/30 transition-all duration-300 active:scale-[0.97]"
            >
              <topic.icon className={`w-8 h-8 ${topic.color} mb-4 group-hover:scale-110 transition-transform duration-200`} />
              <h3 className="font-semibold text-foreground mb-2">{topic.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{topic.desc}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TopicCards;
