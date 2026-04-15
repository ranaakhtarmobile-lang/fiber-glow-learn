import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const contacts = [
  { icon: Mail, label: "Email", value: "hello@fiberopticguide.com", href: "mailto:hello@fiberopticguide.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "Worldwide — 100% Online", href: null },
];

const socials = [
  { label: "Twitter / X", href: "https://x.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "GitHub", href: "https://github.com" },
];

const ContactSection = () => (
  <section className="section-padding">
    <div className="container-content">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Have questions or suggestions? We'd love to hear from you.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <ScrollReveal direction="left">
          <div className="glass-card p-6 space-y-6">
            <h3 className="font-semibold text-foreground text-lg">Contact Info</h3>
            {contacts.map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-foreground hover:text-primary transition-colors">{c.value}</a>
                  ) : (
                    <p className="text-sm text-foreground">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="glass-card p-6">
            <h3 className="font-semibold text-foreground text-lg mb-6">Follow Us</h3>
            <div className="grid grid-cols-2 gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border/50 bg-muted/30 px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ContactSection;
