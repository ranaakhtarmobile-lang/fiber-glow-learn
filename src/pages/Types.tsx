import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import InArticleAd from "@/components/InArticleAd";
import SponsoredLink from "@/components/SponsoredLink";

const fiberTypes = [
  {
    name: "Single Mode Fiber (SMF)",
    core: "9 μm",
    distance: "Up to 100+ km",
    bandwidth: "Very High",
    use: "Long-haul telecom, undersea cables, ISP backbone",
    desc: "Uses a single light ray (mode) through a very narrow core. Ideal for long-distance, high-bandwidth applications. Requires laser light sources.",
    color: "border-glow-cyan/30 bg-glow-cyan/5",
  },
  {
    name: "Multi Mode Fiber (MMF)",
    core: "50 or 62.5 μm",
    distance: "Up to 2 km",
    bandwidth: "High",
    use: "Data centers, LANs, campus networks",
    desc: "Allows multiple light modes to propagate simultaneously through a larger core. More affordable for short distances. Uses LED or VCSEL light sources.",
    color: "border-glow-teal/30 bg-glow-teal/5",
  },
  {
    name: "Plastic Optical Fiber (POF)",
    core: "1 mm",
    distance: "Up to 100 m",
    bandwidth: "Moderate",
    use: "Automotive, home networking, industrial sensors",
    desc: "Made from polymethyl methacrylate (PMMA) instead of glass. Very flexible and easy to install. Lower performance but extremely cost-effective for short runs.",
    color: "border-glow-purple/30 bg-glow-purple/5",
  },
];

const Types = () => (
  <>
    <SEOHead
      title="Types of Fiber Optic Cable – Single Mode, Multi Mode, Plastic"
      description="Compare single mode, multi mode, and plastic optical fiber. Learn core sizes, distance capabilities, bandwidth, and real-world applications."
      path="/types"
    />

    <section className="section-padding pt-28">
      <div className="container-content">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6 mono">
            Classification
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.1]">
            Types of <span className="text-primary glow-text">Fiber Optic</span> Cable
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-12">
            Fiber optic cables are classified by core size and light propagation method.
            Each type serves different distance and bandwidth requirements.
          </p>
        </ScrollReveal>

        <div className="space-y-6 mb-12">
          {fiberTypes.map((fiber, i) => (
            <ScrollReveal key={fiber.name} delay={i * 0.1}>
              <div className={`glass-card p-6 md:p-8 border ${fiber.color}`}>
                <h2 className="text-xl font-semibold text-foreground mb-3">{fiber.name}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{fiber.desc}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Core Size", value: fiber.core },
                    { label: "Max Distance", value: fiber.distance },
                    { label: "Bandwidth", value: fiber.bandwidth },
                    { label: "Common Use", value: fiber.use },
                  ].map((spec) => (
                    <div key={spec.label}>
                      <div className="text-xs text-muted-foreground mb-1">{spec.label}</div>
                      <div className="text-sm font-medium text-foreground mono">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <InArticleAd />
        <div className="flex justify-center mb-8">
          <SponsoredLink variant={0} />
        </div>

        {/* Comparison table */}
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-6">Quick Comparison</h2>
          <div className="glass-card overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 bg-muted/20">
                    <th className="text-left p-4 font-semibold text-foreground">Property</th>
                    <th className="text-left p-4 font-semibold text-glow-cyan">Single Mode</th>
                    <th className="text-left p-4 font-semibold text-glow-teal">Multi Mode</th>
                    <th className="text-left p-4 font-semibold text-glow-purple">Plastic</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["Core Diameter", "9 μm", "50/62.5 μm", "1 mm"],
                    ["Light Source", "Laser", "LED / VCSEL", "LED"],
                    ["Wavelength", "1310/1550 nm", "850/1300 nm", "650 nm"],
                    ["Attenuation", "0.2–0.4 dB/km", "2.5–3.5 dB/km", "150 dB/km"],
                    ["Cost", "Higher", "Moderate", "Low"],
                    ["Best For", "Long haul", "Short–medium", "Very short"],
                  ].map(([prop, sm, mm, pof]) => (
                    <tr key={prop} className="border-b border-border/30 last:border-0">
                      <td className="p-4 font-medium text-foreground">{prop}</td>
                      <td className="p-4">{sm}</td>
                      <td className="p-4">{mm}</td>
                      <td className="p-4">{pof}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200"
            >
              Next: How It Works
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Types;
