import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import InArticleAd from "@/components/InArticleAd";
import SponsoredLink from "@/components/SponsoredLink";
import { Cable, Zap, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WhatIsFiber = () => (
  <>
    <Helmet>
      <title>What is Fiber Optic? – Complete Explanation | Fiber Optic Guide</title>
      <meta name="description" content="Learn what fiber optic cable is, how light transmits data through glass fibers, and why it outperforms copper cable for modern communications." />
    </Helmet>

    <section className="section-padding pt-28">
      <div className="container-content">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6 mono">
            Fundamentals
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.1]">
            What is <span className="text-primary glow-text">Fiber Optic</span>?
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-12">
            Fiber optic technology uses thin strands of glass or plastic to transmit data as pulses of light.
            It's the backbone of modern telecommunications, delivering unprecedented speed and reliability
            across the globe.
          </p>
        </ScrollReveal>

        {/* How it works */}
        <ScrollReveal delay={0.1}>
          <div className="glass-card p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">How Light Transmits Data</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                A fiber optic cable contains one or more optical fibers — each thinner than a human hair.
                An LED or laser at one end converts electrical signals into light pulses. These pulses
                travel through the fiber core via <strong className="text-foreground">total internal reflection</strong>,
                bouncing off the cladding walls at incredibly high speeds.
              </p>
              <p>
                At the receiving end, a photodetector converts the light back into electrical signals.
                Because light travels at approximately <span className="text-primary mono">200,000 km/s</span> through
                glass fiber, data arrives with minimal delay — making fiber optic the fastest physical
                transmission medium available.
              </p>

              {/* Simplified diagram */}
              <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border/50">
                <div className="flex items-center gap-3 justify-center text-xs mono">
                  <div className="px-3 py-2 rounded bg-primary/10 border border-primary/30 text-primary">LED / Laser</div>
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <div className="px-3 py-2 rounded bg-primary/10 border border-primary/30 text-primary flex-1 text-center">
                    Core (Light Pulses) → Cladding → Buffer
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <div className="px-3 py-2 rounded bg-primary/10 border border-primary/30 text-primary">Photodetector</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Comparison */}
        <ScrollReveal delay={0.15}>
          <h2 className="text-2xl font-bold mb-6">Fiber Optic vs Copper Cable</h2>
          <div className="glass-card overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 bg-muted/20">
                    <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                    <th className="text-left p-4 font-semibold text-primary">Fiber Optic</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground">Copper</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["Bandwidth", "Up to 100+ Gbps", "Up to 10 Gbps"],
                    ["Distance", "Up to 100+ km", "Up to 100 m (Cat6)"],
                    ["EMI Immunity", "Complete", "Susceptible"],
                    ["Weight", "Very lightweight", "Heavy"],
                    ["Security", "Very high", "Moderate"],
                    ["Cost (per meter)", "Higher", "Lower"],
                    ["Installation", "Specialized tools", "Standard tools"],
                  ].map(([feature, fiber, copper]) => (
                    <tr key={feature} className="border-b border-border/30 last:border-0">
                      <td className="p-4 font-medium text-foreground">{feature}</td>
                      <td className="p-4">{fiber}</td>
                      <td className="p-4">{copper}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* In-article ad */}
        <InArticleAd />

        {/* Key highlights */}
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { icon: Zap, title: "Speed of Light", desc: "Data travels at ~200,000 km/s through glass fiber, enabling near-instant global communication." },
            { icon: Cable, title: "Hair-Thin Precision", desc: "Each fiber core is just 9–62.5 micrometers — thinner than a strand of human hair." },
            { icon: Shield, title: "Secure by Design", desc: "Light doesn't radiate outside the fiber, making it extremely difficult to intercept." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={0.1 * i}>
              <div className="glass-card p-6">
                <item.icon className="w-7 h-7 text-primary mb-3" />
                <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Sponsored link */}
        <div className="flex justify-center mt-8">
          <SponsoredLink variant={4} />
        </div>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 text-center">
            <Link
              to="/types"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200"
            >
              Next: Types of Fiber
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default WhatIsFiber;
