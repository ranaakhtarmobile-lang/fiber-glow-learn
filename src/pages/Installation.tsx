import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import { HardHat, Shovel, Wind, ShieldCheck, CheckCircle, AlertTriangle, ArrowRight, Radio, Server, Cable, Wifi, Router, MonitorSmartphone, Network, Layers } from "lucide-react";

const steps = [
  { step: 1, title: "Site Survey & Planning", desc: "Assess the route, measure distances, identify obstacles, and determine cable type. Plan splice points and equipment locations." },
  { step: 2, title: "Cable Selection", desc: "Choose between single-mode or multi-mode fiber based on distance and bandwidth requirements. Select appropriate jacket ratings (indoor/outdoor)." },
  { step: 3, title: "Route Preparation", desc: "Clear the installation path. For underground: dig trenches or place conduits. For aerial: install poles and messenger wire." },
  { step: 4, title: "Cable Pulling", desc: "Pull fiber cable through conduits or hang on aerial supports. Maintain proper bend radius and tension limits to avoid damage." },
  { step: 5, title: "Splicing & Termination", desc: "Fusion splice fiber ends or terminate with connectors. Clean and inspect each connection using a fiber microscope." },
  { step: 6, title: "Testing & Certification", desc: "Use OTDR and optical power meters to verify loss budgets. Document all test results for compliance and future reference." },
];

const undergroundPros = [
  "Protected from weather and physical damage",
  "Lower long-term maintenance costs",
  "Better aesthetic — no visible cables",
  "Less susceptible to vandalism",
];

const aerialPros = [
  "Lower initial installation cost",
  "Faster deployment time",
  "Easier access for repairs and upgrades",
  "No excavation permits required",
];

const safetyTips = [
  { icon: ShieldCheck, title: "Wear Protective Gear", desc: "Always use safety glasses, Kevlar gloves, and protective clothing when handling fiber." },
  { icon: AlertTriangle, title: "Handle Fiber Scraps Carefully", desc: "Tiny glass shards are nearly invisible. Use sticky tape to collect scraps and dispose in sealed containers." },
  { icon: ShieldCheck, title: "Never Look Into Fiber Ends", desc: "Laser light used in fiber optics can cause permanent eye damage — even invisible IR light." },
  { icon: AlertTriangle, title: "Proper Ventilation for Splicing", desc: "Fusion splicing produces fumes. Ensure adequate ventilation in enclosed work areas." },
  { icon: ShieldCheck, title: "Follow Bend Radius Limits", desc: "Exceeding minimum bend radius can break fibers internally without visible damage." },
  { icon: AlertTriangle, title: "Electrical Safety", desc: "When working near power lines or electrical equipment, follow lockout/tagout procedures." },
];

const Installation = () => (
  <>
    <Helmet>
      <title>Fiber Optic Installation Guide | Step-by-Step Instructions</title>
      <meta name="description" content="Complete fiber optic installation guide covering underground and aerial methods, step-by-step procedures, and essential safety precautions." />
    </Helmet>

    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding fiber-gradient">
        <div className="container-content text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              <HardHat className="w-4 h-4" />
              Installation Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              Fiber Optic <span className="text-primary glow-text">Installation</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive step-by-step guide to installing fiber optic cables — covering underground, aerial methods, and critical safety practices.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Step by Step */}
      <section className="section-padding">
        <div className="container-content">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Step-by-Step <span className="text-primary">Process</span>
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/50 hidden sm:block" />

            <div className="space-y-8">
              {steps.map((s, i) => (
                <ScrollReveal key={s.step} delay={i * 0.08}>
                  <div className={`flex flex-col sm:flex-row gap-4 sm:gap-8 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                    <div className={`flex-1 ${i % 2 === 1 ? "sm:text-right" : ""}`}>
                      <div className="glass-card p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="mono text-primary font-bold text-lg">0{s.step}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                          <h3 className="font-semibold text-foreground">{s.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
                    </div>
                    <div className="flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Underground vs Aerial */}
      <section className="section-padding-sm bg-card/30">
        <div className="container-content">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Underground vs <span className="text-primary">Aerial</span> Installation
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Shovel className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Underground</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Cables are placed in buried conduits or directly buried with protective jackets. Ideal for permanent, high-reliability installations.
                </p>
                <ul className="space-y-2.5">
                  {undergroundPros.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <Wind className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Aerial</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Cables are strung between utility poles using messenger wire or self-supporting designs. Best for rapid deployment.
                </p>
                <ul className="space-y-2.5">
                  {aerialPros.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="section-padding">
        <div className="container-content">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              Safety <span className="text-primary">Precautions</span>
            </h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
              Fiber optic installation requires strict safety measures to prevent injury and equipment damage.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {safetyTips.map((tip, i) => (
              <ScrollReveal key={tip.title} delay={i * 0.06}>
                <div className="glass-card p-5 h-full">
                  <tip.icon className={`w-6 h-6 mb-3 ${tip.icon === AlertTriangle ? "text-destructive" : "text-secondary"}`} />
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{tip.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tip.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  </>
);

export default Installation;
