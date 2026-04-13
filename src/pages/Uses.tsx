import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import SponsoredLink from "@/components/SponsoredLink";
import { Globe, Server, HeartPulse, Shield, Radio, Factory } from "lucide-react";

const useCases = [
  { icon: Globe, title: "Internet & ISP Networks", desc: "Fiber optic forms the backbone of global internet infrastructure. ISPs use FTTH (Fiber to the Home) and FTTP to deliver gigabit-speed internet to residential and commercial customers.", color: "text-glow-cyan" },
  { icon: Server, title: "Data Centers", desc: "High-density fiber connections link servers, switches, and storage arrays within and between data centers. Multi-mode fiber handles intra-building runs while single-mode connects campuses.", color: "text-glow-teal" },
  { icon: HeartPulse, title: "Medical Applications", desc: "Fiber optics enable minimally invasive procedures through endoscopes and laparoscopes. Optical fibers transmit light and images inside the human body for diagnosis and surgery.", color: "text-glow-purple" },
  { icon: Shield, title: "Military & Defense", desc: "Secure, EMI-immune fiber optic links are critical in military communications, aircraft, naval vessels, and tactical field networks where signal integrity is paramount.", color: "text-glow-cyan" },
  { icon: Radio, title: "Telecommunications", desc: "Undersea fiber optic cables connect continents, carrying over 95% of international data traffic. DWDM technology multiplexes hundreds of wavelengths on a single fiber pair.", color: "text-glow-teal" },
  { icon: Factory, title: "Industrial & Sensors", desc: "Fiber optic sensors monitor temperature, pressure, strain, and vibration in harsh environments — oil rigs, power plants, bridges, and manufacturing facilities.", color: "text-glow-purple" },
];

const Uses = () => (
  <>
    <SEOHead title="Real World Uses of Fiber Optics – Applications" description="Discover how fiber optic technology is used in internet, data centers, healthcare, military, telecommunications, and industrial applications." path="/uses" breadcrumbs={[{ name: "Home", href: "/" }, { name: "Applications", href: "/uses" }]} />

    <section className="section-padding pt-28">
      <div className="container-content">
        <PageBreadcrumb items={[{ label: "Applications" }]} />
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6 mono">
            Applications
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.1]">
            Real World <span className="text-primary glow-text">Applications</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-12">
            Fiber optic technology powers critical infrastructure across virtually every industry,
            from the internet you use daily to life-saving medical procedures.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5">
          {useCases.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="glass-card p-6 h-full">
                <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                <h2 className="text-lg font-semibold text-foreground mb-2">{item.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Sponsored link */}
        <div className="flex justify-center mt-10">
          <SponsoredLink variant={2} />
        </div>
      </div>
    </section>
  </>
);

export default Uses;
