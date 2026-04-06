import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import SponsoredLink from "@/components/SponsoredLink";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => (
  <>
    <Helmet>
      <title>How Fiber Optics Work – Total Internal Reflection Explained | Fiber Optic Guide</title>
      <meta name="description" content="Understand the working principle of fiber optics: total internal reflection, light propagation through core and cladding, and signal transmission mechanics." />
    </Helmet>

    <section className="section-padding pt-28">
      <div className="container-content max-w-4xl">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6 mono">
            Working Principle
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.1]">
            How Fiber <span className="text-primary glow-text">Optics</span> Work
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            The fundamental physics behind fiber optic communication relies on a simple yet powerful
            phenomenon: total internal reflection.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass-card p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Total Internal Reflection (TIR)</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              When light travels from a denser medium (the fiber core, with a higher refractive index)
              to a less dense medium (the cladding, with a lower refractive index) at an angle greater
              than the <strong className="text-foreground">critical angle</strong>, it reflects
              completely back into the core instead of passing through.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              This means light pulses bounce along the fiber core in a zigzag path, traveling vast
              distances with minimal loss. The critical angle depends on the refractive indices of
              the core and cladding materials.
            </p>

            {/* Visual diagram */}
            <div className="p-6 rounded-lg bg-muted/20 border border-border/50">
              <div className="relative h-32 flex items-center justify-center">
                <div className="absolute inset-x-0 top-4 bottom-4 rounded border border-muted-foreground/20 flex items-center justify-center">
                  <span className="absolute -top-3 left-4 text-xs mono bg-background px-2 text-muted-foreground">Cladding (n₂ = 1.465)</span>
                  <div className="w-full h-1/2 rounded bg-primary/10 border border-primary/20 flex items-center justify-center relative">
                    <span className="absolute -top-3 left-4 text-xs mono bg-muted/20 px-2 text-primary">Core (n₁ = 1.480)</span>
                    {/* Light path visualization */}
                    <svg className="w-full h-full" viewBox="0 0 400 40" fill="none">
                      <path d="M0 35 L50 5 L100 35 L150 5 L200 35 L250 5 L300 35 L350 5 L400 35" stroke="hsl(187, 100%, 50%)" strokeWidth="2" opacity="0.8" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">Light bounces through the core via total internal reflection</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="glass-card p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Signal Transmission Steps</h2>
            <ol className="space-y-4">
              {[
                { step: "1", title: "Electrical to Optical", desc: "A transmitter (LED or laser diode) converts electrical data signals into light pulses." },
                { step: "2", title: "Light Propagation", desc: "Light enters the fiber core and propagates via total internal reflection, bouncing along the core-cladding boundary." },
                { step: "3", title: "Amplification", desc: "For long distances, optical amplifiers (like EDFA) boost the signal without converting back to electrical." },
                { step: "4", title: "Optical to Electrical", desc: "A photodetector at the receiving end converts light pulses back into electrical signals for processing." },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm mono shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass-card p-8 mb-12">
            <h2 className="text-xl font-semibold mb-4">Key Formulas</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Critical Angle</h3>
                <div className="p-3 rounded bg-muted/30 border border-border/50 mono text-sm text-primary">
                  θ<sub>c</sub> = sin⁻¹(n₂ / n₁)
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Numerical Aperture</h3>
                <div className="p-3 rounded bg-muted/30 border border-border/50 mono text-sm text-primary">
                  NA = √(n₁² − n₂²)
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center">
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200"
            >
              Try the Calculators
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default HowItWorks;
