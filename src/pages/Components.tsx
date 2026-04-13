import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { Cable, Plug, Cpu, MonitorDot, Layers, Settings, ArrowRight, Eye, Zap, Wrench, Droplets, Ruler, Shield, Radio } from "lucide-react";
import { Link } from "react-router-dom";

const mainComponents = [
  {
    icon: Cable,
    title: "Fiber Optic Cable",
    subtitle: "The transmission medium",
    desc: "Thin strands of ultra-pure glass or plastic that carry light signals over vast distances. Available in single mode (9μm core), multi mode (50/62.5μm), and armored or loose-tube configurations for different environments.",
    specs: [
      { label: "Core Material", value: "Silica glass / PMMA plastic" },
      { label: "Jacket Types", value: "Tight buffer, loose tube, ribbon" },
      { label: "Typical Loss", value: "0.2–0.4 dB/km (SMF)" },
    ],
    color: "text-glow-cyan",
    borderColor: "border-glow-cyan/20 hover:border-glow-cyan/40",
  },
  {
    icon: Plug,
    title: "Fiber Connectors",
    subtitle: "Precision coupling interfaces",
    desc: "Connectors terminate fiber ends and enable quick connections. Different form factors serve different applications — from high-density data centers (LC, MTP/MPO) to legacy telecom (SC, ST). End-face polish type (PC, UPC, APC) determines return loss performance.",
    specs: [
      { label: "Common Types", value: "SC, LC, ST, FC, MTP/MPO" },
      { label: "Polish Types", value: "PC, UPC, APC (angled 8°)" },
      { label: "Insertion Loss", value: "0.1–0.5 dB typical" },
    ],
    color: "text-glow-teal",
    borderColor: "border-glow-teal/20 hover:border-glow-teal/40",
  },
  {
    icon: Cpu,
    title: "Fusion Splicer",
    subtitle: "Permanent fiber joining machine",
    desc: "Precision instrument that permanently joins two fiber ends using an electric arc. Aligns fiber cores with sub-micron accuracy using cameras and motors, then fuses them. Modern splicers achieve splice losses below 0.02 dB in under 10 seconds.",
    specs: [
      { label: "Splice Loss", value: "< 0.02 dB (core alignment)" },
      { label: "Splice Time", value: "6–9 seconds" },
      { label: "Alignment", value: "Core / Cladding / Fixed V-groove" },
    ],
    color: "text-glow-purple",
    borderColor: "border-glow-purple/20 hover:border-glow-purple/40",
  },
  {
    icon: MonitorDot,
    title: "OTDR (Optical Time-Domain Reflectometer)",
    subtitle: "Fiber testing & fault location",
    desc: "The most critical diagnostic tool. Sends light pulses into fiber and analyzes backscattered reflections to create a distance-vs-loss trace. Locates breaks, bad splices, connector issues, and measures total fiber loss — all from one end.",
    specs: [
      { label: "Measures", value: "Loss, length, reflectance, faults" },
      { label: "Dynamic Range", value: "24–50+ dB" },
      { label: "Dead Zone", value: "0.8–3 m (event), 3–15 m (attenuation)" },
    ],
    color: "text-glow-cyan",
    borderColor: "border-glow-cyan/20 hover:border-glow-cyan/40",
  },
  {
    icon: Layers,
    title: "Fiber Patch Panel (ODF)",
    subtitle: "Cable management & distribution",
    desc: "Optical Distribution Frame organizes and protects fiber connections in a rack-mountable enclosure. Houses splice trays, adapters, and pigtails — providing a structured termination point for outside plant to indoor distribution.",
    specs: [
      { label: "Port Density", value: "12, 24, 48, 96, 144 ports" },
      { label: "Form Factor", value: "1U, 2U, 4U rack mount / wall box" },
      { label: "Adapter Types", value: "SC, LC, FC simplex/duplex" },
    ],
    color: "text-glow-teal",
    borderColor: "border-glow-teal/20 hover:border-glow-teal/40",
  },
  {
    icon: Settings,
    title: "Cleaver & Stripping Tools",
    subtitle: "Fiber preparation essentials",
    desc: "Before splicing, fibers must be stripped (removing coating) and cleaved (cut to precise flat end face). A fiber cleaver scores and breaks the glass to produce a mirror-smooth end face — critical for low-loss splices.",
    specs: [
      { label: "Cleave Angle", value: "< 0.5° (precision cleaver)" },
      { label: "Strip Types", value: "Mechanical, thermal, chemical" },
      { label: "Used Before", value: "Fusion splicing, connectorization" },
    ],
    color: "text-glow-purple",
    borderColor: "border-glow-purple/20 hover:border-glow-purple/40",
  },
];

const smallTools = [
  {
    icon: Eye,
    title: "Visual Fault Locator (VFL)",
    desc: "Emits visible red laser (650nm) through fiber to visually locate breaks, tight bends, and bad splices. The red light escapes at fault points, making them visible through the jacket. Essential for quick troubleshooting.",
    specs: "Range: 5–30 km • Power: 1–10 mW • Wavelength: 650 nm red laser",
  },
  {
    icon: Zap,
    title: "Optical Power Meter",
    desc: "Measures absolute optical power in dBm or mW at the fiber end. Used with a light source to measure insertion loss across a link. Calibrated for 850, 1310, and 1550 nm wavelengths.",
    specs: "Range: -70 to +10 dBm • Wavelengths: 850/1310/1550 nm • Accuracy: ±0.2 dB",
  },
  {
    icon: Radio,
    title: "Light Source (OLS)",
    desc: "Stable continuous-wave laser or LED used with a power meter to measure link loss. Available in single or dual wavelength versions. Auto-off and modulation features for easy testing.",
    specs: "Wavelengths: 1310/1550 nm (SMF), 850/1300 nm (MMF) • Stability: ±0.05 dB",
  },
  {
    icon: Droplets,
    title: "Fiber Cleaning Kit",
    desc: "Contamination is the #1 cause of fiber failures. Kit includes lint-free wipes, IPA solution, one-click cleaners, and inspection scope. One dust particle (1μm) can cause 1 dB loss.",
    specs: "Includes: One-click cleaner • IPA wipes • Cassette cleaner • Inspection scope",
  },
  {
    icon: Wrench,
    title: "Fiber Identifier",
    desc: "Clamps onto a fiber without breaking it to detect signal presence, direction, and approximate power level. Uses macro-bending to extract a small amount of light for detection.",
    specs: "Detection: 0 dBm to -50 dBm • Non-destructive • Shows traffic direction",
  },
  {
    icon: Ruler,
    title: "Cable Cutter & Kevlar Shears",
    desc: "Specialized scissors designed to cut aramid (Kevlar) yarn inside fiber cables. Regular scissors can't cut Kevlar cleanly. Ratchet cable cutters handle armored and multi-strand cables.",
    specs: "Types: Kevlar shears, ratchet cutter, jacket stripper, mid-span access tool",
  },
];

const wireTypes = [
  {
    name: "Tight Buffer Cable",
    color: "bg-glow-cyan/10 border-glow-cyan/30",
    details: [
      { label: "Structure", value: "900μm buffer directly on fiber" },
      { label: "Use Case", value: "Indoor, patch cords, pigtails" },
      { label: "Bend Radius", value: "25 mm minimum" },
      { label: "Pros", value: "Easy to handle, direct termination" },
    ],
  },
  {
    name: "Loose Tube Cable",
    color: "bg-glow-teal/10 border-glow-teal/30",
    details: [
      { label: "Structure", value: "Fibers float in gel-filled tubes" },
      { label: "Use Case", value: "Outdoor, underground, aerial" },
      { label: "Fiber Count", value: "6–288 fibers per cable" },
      { label: "Pros", value: "Weather resistant, high fiber count" },
    ],
  },
  {
    name: "Ribbon Cable",
    color: "bg-glow-purple/10 border-glow-purple/30",
    details: [
      { label: "Structure", value: "12 fibers bonded in flat ribbon" },
      { label: "Use Case", value: "High-density, data centers" },
      { label: "Fiber Count", value: "Up to 3456 fibers" },
      { label: "Pros", value: "Mass splicing 12 at once" },
    ],
  },
  {
    name: "Armored Cable",
    color: "bg-glow-cyan/10 border-glow-cyan/30",
    details: [
      { label: "Structure", value: "Steel/aluminum armor layer" },
      { label: "Use Case", value: "Direct burial, rodent protection" },
      { label: "Protection", value: "Crush & rodent resistant" },
      { label: "Pros", value: "No conduit needed for burial" },
    ],
  },
  {
    name: "ADSS (All-Dielectric Self-Supporting)",
    color: "bg-glow-teal/10 border-glow-teal/30",
    details: [
      { label: "Structure", value: "No metallic elements, self-supporting" },
      { label: "Use Case", value: "Aerial, near power lines" },
      { label: "Span", value: "Up to 700 m between poles" },
      { label: "Pros", value: "No grounding needed, lightning safe" },
    ],
  },
  {
    name: "Drop Cable / Flat Cable",
    color: "bg-glow-purple/10 border-glow-purple/30",
    details: [
      { label: "Structure", value: "1-4 fibers, FRP strength member" },
      { label: "Use Case", value: "FTTH last mile, indoor wiring" },
      { label: "Size", value: "2×3 mm or 2×5 mm flat" },
      { label: "Pros", value: "Flexible, easy to route in walls" },
    ],
  },
];

const connectorDetails = [
  { name: "SC (Subscriber)", color: "text-glow-cyan", details: "Square push-pull design. 2.5mm ferrule. Most common in telecom. UPC (blue) or APC (green) versions." },
  { name: "LC (Lucent)", color: "text-glow-teal", details: "Small form factor, 1.25mm ferrule. Half the size of SC. Dominates data centers. Duplex clip available." },
  { name: "ST (Straight Tip)", color: "text-glow-purple", details: "Bayonet twist-lock. 2.5mm ferrule. Legacy LAN/campus networks. Being replaced by LC in new installs." },
  { name: "FC (Ferrule)", color: "text-glow-cyan", details: "Screw-on threaded body. 2.5mm ferrule. High vibration environments. Common in test equipment." },
  { name: "MTP/MPO", color: "text-glow-teal", details: "Multi-fiber push-on. 12 or 24 fibers in one connector. Used in 40G/100G/400G links. Requires polarity planning." },
  { name: "E2000", color: "text-glow-purple", details: "Spring-loaded dust cap, auto-shutter. Used in FTTH and high-reliability networks. Built-in laser safety." },
];

const Components = () => (
  <>
    <SEOHead title="Fiber Optic Components & Tools – Connectors, Splicers, OTDR" description="Complete guide to fiber optic components: cables, connectors, splicers, OTDR, VFL, power meters, cleaning kits with detailed specs." path="/components" breadcrumbs={[{ name: "Home", href: "/" }, { name: "Components", href: "/components" }]} />

    <section className="section-padding pt-28">
      <div className="container-content">
        <PageBreadcrumb items={[{ label: "Components & Tools" }]} />
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6 mono">
            Equipment & Hardware
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.1]">
            Components & <span className="text-primary glow-text">Tools</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-14">
            Every fiber optic installation depends on precision equipment — from cables and connectors
            to the smallest cleaning tool. Here's the complete A-to-Z toolkit.
          </p>
        </ScrollReveal>

        {/* Main Components */}
        <div className="space-y-6 mb-20">
          {mainComponents.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.07}>
              <div className={`glass-card p-6 md:p-8 border transition-all duration-300 ${item.borderColor}`}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-64 shrink-0">
                    <item.icon className={`w-10 h-10 ${item.color} mb-3`} />
                    <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
                    <p className="text-xs text-muted-foreground mono mt-1">{item.subtitle}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {item.specs.map((spec) => (
                        <div key={spec.label} className="p-3 rounded-lg bg-muted/20 border border-border/30">
                          <div className="text-xs text-muted-foreground mb-1">{spec.label}</div>
                          <div className="text-sm font-medium text-foreground mono leading-snug">{spec.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>


        {/* Small Tools Section */}
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            Essential <span className="text-primary">Small Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mb-10">
            These hand-held tools are used daily by fiber technicians — each one critical for quality installations and fast troubleshooting.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {smallTools.map((tool, i) => (
            <ScrollReveal key={tool.title} delay={i * 0.06}>
              <div className="glass-card p-5 h-full flex flex-col">
                <tool.icon className="w-7 h-7 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{tool.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{tool.desc}</p>
                <div className="p-2.5 rounded-lg bg-muted/20 border border-border/30">
                  <p className="text-xs text-muted-foreground mono leading-relaxed">{tool.specs}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>


        {/* Wire / Cable Types Section */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-4xl font-bold">
              Cable & <span className="text-primary">Wire Types</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl mb-10">
            Fiber cables come in many designs — each optimized for specific environments. Understanding cable structure is essential for proper selection.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {wireTypes.map((wire, i) => (
            <ScrollReveal key={wire.name} delay={i * 0.06}>
              <div className={`glass-card p-5 h-full border ${wire.color}`}>
                <h3 className="font-semibold text-foreground mb-4">{wire.name}</h3>
                <div className="space-y-2.5">
                  {wire.details.map((d) => (
                    <div key={d.label}>
                      <div className="text-xs text-muted-foreground">{d.label}</div>
                      <div className="text-sm text-foreground mono">{d.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        

        {/* Connector Details Section */}
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            Connector <span className="text-primary">Reference</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mb-10">
            Quick reference for every common fiber optic connector type — know when to use which.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {connectorDetails.map((conn, i) => (
            <ScrollReveal key={conn.name} delay={i * 0.05}>
              <div className="glass-card p-5 h-full">
                <h3 className={`font-bold text-sm ${conn.color} mb-2 mono`}>{conn.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{conn.details}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.1}>
          <div className="mt-14 text-center">
            <p className="text-muted-foreground text-sm mb-5">Ready to put this knowledge into practice?</p>
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

export default Components;
