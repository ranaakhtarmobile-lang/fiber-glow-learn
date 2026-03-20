import { Check, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const advantages = [
  "Ultra-high bandwidth (up to 100 Gbps+)",
  "Low signal loss over long distances",
  "Immune to electromagnetic interference",
  "Lightweight and compact cables",
  "Highly secure — difficult to tap",
  "Long lifespan (25+ years)",
];

const disadvantages = [
  "Higher initial installation cost",
  "Fragile — susceptible to physical damage",
  "Requires specialized splicing equipment",
  "Difficult to repair in the field",
];

const AdvantagesSection = () => (
  <section className="section-padding fiber-gradient">
    <div className="container-content">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Advantages & <span className="text-primary">Disadvantages</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Understanding the trade-offs helps you make informed decisions for network design.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <ScrollReveal direction="left">
          <div className="glass-card p-6">
            <h3 className="font-semibold text-glow-teal mb-4 flex items-center gap-2">
              <Check className="w-5 h-5" /> Advantages
            </h3>
            <ul className="space-y-3">
              {advantages.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-glow-teal mt-0.5 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="glass-card p-6">
            <h3 className="font-semibold text-destructive mb-4 flex items-center gap-2">
              <X className="w-5 h-5" /> Disadvantages
            </h3>
            <ul className="space-y-3">
              {disadvantages.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
