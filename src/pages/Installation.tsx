import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import InArticleAd from "@/components/InArticleAd";
import SponsoredLink from "@/components/SponsoredLink";
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

      {/* In-article ad between sections */}
      <div className="container-content px-4">
        <InArticleAd />
      </div>

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

      {/* Sponsored link */}
      <div className="container-content px-4 flex justify-center py-4">
        <SponsoredLink variant={1} />
      </div>

      {/* FTTH Network: Fiber to ONT to Router to WiFi */}
      <section className="section-padding">
        <div className="container-content">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              FTTH Network <span className="text-primary">Architecture</span>
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              How internet travels from the ISP backbone through fiber optic cables all the way to your WiFi devices — every device explained.
            </p>
          </ScrollReveal>

          {/* Visual Flow Diagram */}
          <ScrollReveal delay={0.05}>
            <div className="glass-card p-6 md:p-8 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Signal Flow: ISP → Your Device</h3>
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-1">
                {[
                  { icon: Server, label: "OLT", sub: "ISP Exchange" },
                  { icon: Cable, label: "Fiber Cable", sub: "Underground/Aerial" },
                  { icon: Network, label: "Splitter", sub: "1:8 / 1:16 / 1:32" },
                  { icon: Cable, label: "Drop Cable", sub: "To Premises" },
                  { icon: Layers, label: "ONT/ONU", sub: "Optical → Electrical" },
                  { icon: Router, label: "WiFi Router", sub: "LAN + WiFi" },
                  { icon: MonitorSmartphone, label: "Devices", sub: "Phone/PC/TV" },
                ].map((item, i, arr) => (
                  <div key={item.label + i} className="flex flex-col md:flex-col items-center gap-1">
                    <div className="flex items-center gap-2 md:flex-col md:gap-1">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="md:text-center">
                        <div className="text-xs font-semibold text-foreground">{item.label}</div>
                        <div className="text-[10px] text-muted-foreground">{item.sub}</div>
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-primary/50 hidden md:block rotate-0 mt-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Detailed Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* OLT */}
            <ScrollReveal delay={0}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Server className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">OLT (Optical Line Terminal)</h3>
                    <span className="text-xs text-muted-foreground mono">ISP Central Office</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  The OLT sits at the ISP's exchange/central office. It converts internet data from the ISP backbone into optical signals and pushes them down the fiber network to subscribers.
                </p>
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-foreground">Key Specifications:</h4>
                  <ul className="space-y-1.5">
                    {[
                      "Supports GPON (2.5 Gbps down / 1.25 Gbps up) or XGS-PON (10 Gbps symmetric)",
                      "Manages up to 128 ONTs per PON port via TDMA scheduling",
                      "Wavelengths: 1490nm downstream, 1310nm upstream, 1550nm for CATV overlay",
                      "Dynamic Bandwidth Allocation (DBA) for fair traffic distribution",
                      "Handles OAM (Operations, Admin, Maintenance) for remote ONT management",
                    ].map((spec) => (
                      <li key={spec} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-secondary shrink-0 mt-0.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Splitter */}
            <ScrollReveal delay={0.08}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <Network className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">PLC Splitter (Passive Optical Splitter)</h3>
                    <span className="text-xs text-muted-foreground mono">Distribution Point</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  A passive device (no power needed) that splits a single fiber into multiple outputs. Installed in street cabinets, manholes, or on poles near subscriber clusters.
                </p>
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-foreground">Technical Details:</h4>
                  <ul className="space-y-1.5">
                    {[
                      "Split ratios: 1:2, 1:4, 1:8, 1:16, 1:32, 1:64 (cascadable)",
                      "Insertion loss: ~3.5 dB per 1:2 split (1:32 ≈ 17 dB total)",
                      "PLC (Planar Lightwave Circuit) type preferred for uniform splitting",
                      "Completely passive — no electricity, no failure points",
                      "Operating wavelength: 1260nm–1650nm (full spectrum)",
                    ].map((spec) => (
                      <li key={spec} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-secondary shrink-0 mt-0.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* ONT */}
            <ScrollReveal delay={0.12}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">ONT / ONU (Optical Network Terminal)</h3>
                    <span className="text-xs text-muted-foreground mono">Customer Premises</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  The ONT is installed at the subscriber's premises. It receives optical signals from the OLT via the splitter and converts them into electrical signals (Ethernet, phone, CATV) that your devices can use.
                </p>
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-foreground">Features & Ports:</h4>
                  <ul className="space-y-1.5">
                    {[
                      "SC/APC fiber input port (green connector) for incoming optical signal",
                      "1–4x Gigabit Ethernet LAN ports (RJ45) for wired connections",
                      "POTS port (RJ11) for analog telephone / VoIP service",
                      "CATV RF port (coax) for cable TV overlay on 1550nm wavelength",
                      "LED indicators: Power, PON, LOS (Loss of Signal), LAN, WiFi",
                      "Rx sensitivity: -28 dBm typical, Tx power: +0.5 to +5 dBm",
                    ].map((spec) => (
                      <li key={spec} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-secondary shrink-0 mt-0.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-xs text-primary font-medium mb-1">💡 ONT vs ONU</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">ONT</strong> = installed indoors at subscriber premises (FTTH). <strong className="text-foreground">ONU</strong> = installed outdoors at a building/cabinet serving multiple users (FTTB/FTTC). Same function, different placement.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* WiFi Router */}
            <ScrollReveal delay={0.16}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">WiFi Router</h3>
                    <span className="text-xs text-muted-foreground mono">Home Network Hub</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Connected to the ONT via Ethernet (Cat5e/Cat6 cable), the WiFi router creates your local network. It handles NAT, DHCP, firewall, and broadcasts wireless signals for all your devices.
                </p>
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-foreground">Connection Details:</h4>
                  <ul className="space-y-1.5">
                    {[
                      "WAN port connects to ONT LAN port via Ethernet cable",
                      "PPPoE or DHCP authentication (configured by ISP)",
                      "WiFi 5 (802.11ac): up to 1.7 Gbps / WiFi 6 (802.11ax): up to 9.6 Gbps",
                      "Dual-band: 2.4 GHz (range) + 5 GHz (speed); WiFi 6E adds 6 GHz",
                      "Some ISPs provide combo ONT+Router (gateway) — single device solution",
                      "For best performance: place router centrally, use mesh for large areas",
                    ].map((spec) => (
                      <li key={spec} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-secondary shrink-0 mt-0.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <p className="text-xs text-accent font-medium mb-1">⚡ Pro Tip</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    For fiber speeds above 500 Mbps, use a <strong className="text-foreground">WiFi 6 router</strong> with Gigabit Ethernet ports. Older routers bottleneck your connection even if the fiber is fast.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Common FTTH Issues */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-6 md:p-8 mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-5">Common FTTH Troubleshooting</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { issue: "Red LOS Light on ONT", cause: "Fiber break, dirty connector, or splitter issue", fix: "Check fiber connector, clean with IPA wipe, call ISP if persists" },
                  { issue: "Slow Speed Despite Fiber", cause: "Old router, WiFi congestion, or ISP throttling", fix: "Test wired speed first. Upgrade router or change WiFi channel" },
                  { issue: "ONT PON Light Blinking", cause: "ONT not registered with OLT or signal too weak", fix: "Power cycle ONT. Check Rx power (-8 to -28 dBm is normal)" },
                  { issue: "WiFi Drops Frequently", cause: "Interference, distance, or router overload", fix: "Switch to 5 GHz band, add mesh node, or reduce connected devices" },
                  { issue: "No Internet, All Lights Normal", cause: "PPPoE credentials wrong or ISP outage", fix: "Re-enter PPPoE username/password in router, or contact ISP" },
                  { issue: "Fiber Connector Damaged", cause: "Bent or scratched SC/APC connector", fix: "Replace patch cord (SC/APC to SC/APC). Never touch ferrule tip" },
                ].map((item) => (
                  <div key={item.issue} className="p-4 rounded-lg bg-muted/20 border border-border/50">
                    <div className="flex items-start gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      <h4 className="text-sm font-semibold text-foreground">{item.issue}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1"><strong className="text-foreground">Cause:</strong> {item.cause}</p>
                    <p className="text-xs text-muted-foreground"><strong className="text-foreground">Fix:</strong> {item.fix}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* In-article ad before safety section */}
      <div className="container-content px-4">
        <InArticleAd />
      </div>

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
