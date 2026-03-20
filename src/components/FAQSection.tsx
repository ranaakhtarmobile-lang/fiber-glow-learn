import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  { q: "What is fiber optic cable made of?", a: "Fiber optic cables consist of thin strands of glass (silica) or plastic that transmit data as pulses of light. Each fiber is thinner than a human hair, typically 125 micrometers in diameter, with a core of 9μm (single mode) or 50–62.5μm (multi mode)." },
  { q: "How fast is fiber optic internet?", a: "Fiber optic connections can deliver speeds from 100 Mbps to over 100 Gbps. Residential fiber typically offers 1–10 Gbps, while enterprise and backbone networks achieve much higher throughputs using wavelength-division multiplexing (WDM)." },
  { q: "What's the difference between single mode and multi mode fiber?", a: "Single mode fiber has a smaller core (9μm) and carries one light mode, allowing transmission over very long distances (up to 100+ km). Multi mode fiber has a larger core (50–62.5μm) and carries multiple light modes, suitable for shorter distances (up to 2 km) like within data centers." },
  { q: "Is fiber optic better than copper cable?", a: "Fiber optic offers significantly higher bandwidth, lower latency, longer transmission distances, and immunity to electromagnetic interference compared to copper. However, copper is less expensive for short runs and easier to terminate in the field." },
  { q: "How are fiber optic cables installed?", a: "Fiber cables can be installed underground (in conduits or direct-buried), aerially (on utility poles), or inside buildings (in cable trays). Installation requires specialized tools including fiber cleavers, fusion splicers, and OTDR testers for quality assurance." },
];

const FAQSection = () => (
  <section className="section-padding">
    <div className="container-content max-w-3xl">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Quick answers to common questions about fiber optic technology.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card px-5 border-border/50"
            >
              <AccordionTrigger className="text-sm font-medium text-foreground hover:text-primary transition-colors py-4 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQSection;
