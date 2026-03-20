import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import { Cable, Plug, Cpu, MonitorDot, Layers, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const components = [
  {
    icon: Cable,
    title: "Fiber Optic Cable",
    subtitle: "The transmission medium",
    desc: "The core component — thin strands of ultra-pure glass or plastic that carry light signals over vast distances. Available in single mode (9μm core), multi mode (50/62.5μm), and armored or loose-tube configurations for different environments.",
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
    desc: "Connectors terminate fiber ends and enable quick connections between cables and equipment. Different form factors serve different applications — from high-density data centers (LC, MTP/MPO) to legacy telecom (SC, ST). End-face polish type (PC, UPC, APC) determines return loss performance.",
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
    desc: "A precision instrument that permanently joins two fiber ends using an electric arc. The splicer aligns fiber cores with sub-micron accuracy using cameras and motors, then fuses them together. Modern splicers achieve splice losses below 0.02 dB and complete a splice in under 10 seconds.",
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
    desc: "The most critical diagnostic tool in fiber optics. An OTDR sends light pulses into the fiber and analyzes backscattered reflections to create a distance-vs-loss trace. It locates breaks, bad splices, connector issues, and measures total fiber loss — all from one end of the cable.",
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
    desc: "An Optical Distribution Frame organizes and protects fiber connections in a rack-mountable enclosure. Patch panels house splice trays, adapters, and pigtails — providing a structured termination point where outside plant cables connect to indoor distribution fibers or active equipment.",
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
    desc: "Before splicing, fibers must be stripped (removing the coating) and cleaved (cut to a precise flat end face). A fiber cleaver scores and breaks the glass to produce a mirror-smooth end face — critical for low-loss splices. Strippers remove buffer coating without damaging the delicate glass fiber.",
    specs: [
      { label: "Cleave Angle", value: "< 0.5° (precision cleaver)" },
      { label: "Strip Types", value: "Mechanical, thermal, chemical" },
      { label: "Used Before", value: "Fusion splicing, connectorization" },
    ],
    color: "text-glow-purple",
    borderColor: "border-glow-purple/20 hover:border-glow-purple/40",
  },
];

const Components = () => (
  <>
    <Helmet>
      <title>Fiber Optic Components & Tools – Connectors, Splicers, OTDR | Fiber Optic Guide</title>
      <meta name="description" content="Explore essential fiber optic components and tools: cables, connectors (SC, LC, ST), fusion splicers, OTDR testers, patch panels, and cleavers with detailed specs." />
    </Helmet>

    <section className="section-padding pt-28">
      <div className="container-content">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6 mono">
            Equipment & Hardware
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.1]">
            Components & <span className="text-primary glow-text">Tools</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-14">
            Every fiber optic installation depends on precision equipment. From the cable itself
            to the instruments that test it — here's the essential toolkit.
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {components.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.07}>
              <div className={`glass-card p-6 md:p-8 border transition-all duration-300 ${item.borderColor}`}>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon + title */}
                  <div className="md:w-64 shrink-0">
                    <item.icon className={`w-10 h-10 ${item.color} mb-3`} />
                    <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
                    <p className="text-xs text-muted-foreground mono mt-1">{item.subtitle}</p>
                  </div>

                  {/* Description + specs */}
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
