import { BookOpen, Users, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { icon: BookOpen, value: "10+", label: "In-Depth Topics" },
  { icon: Users, value: "5K+", label: "Monthly Learners" },
  { icon: Award, value: "100%", label: "Free Forever" },
];

const AboutSection = () => (
  <section className="section-padding fiber-gradient">
    <div className="container-content">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">FiberOpticGuide</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We created FiberOpticGuide to make fiber optic education accessible to everyone — from curious students to seasoned network engineers. Our mission is to simplify complex optical technology and provide hands-on tools for real-world learning.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every topic, calculator, and interactive tool on this platform is carefully crafted to help you build a solid understanding of fiber optic systems. Whether you're studying for a certification or deploying fiber in the field, we've got you covered.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass-card p-5 text-center">
                <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="mono text-2xl font-bold text-primary mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
