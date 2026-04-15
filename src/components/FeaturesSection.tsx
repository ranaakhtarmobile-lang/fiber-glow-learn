import { motion } from "framer-motion";
import { Shield, Zap, Globe, Cpu, Eye, BarChart3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: Zap, title: "Ultra-Fast Speeds", desc: "Fiber optics transmit data at speeds up to 100 Gbps, far exceeding copper alternatives." },
  { icon: Shield, title: "Secure Transmission", desc: "Light-based signals are nearly impossible to tap, ensuring military-grade data security." },
  { icon: Globe, title: "Global Backbone", desc: "Over 99% of international data travels through submarine fiber optic cables." },
  { icon: Cpu, title: "Future-Proof Tech", desc: "Fiber infrastructure supports next-gen 5G, IoT, and cloud computing demands." },
  { icon: Eye, title: "Low Signal Loss", desc: "Minimal attenuation over long distances means cleaner, more reliable connections." },
  { icon: BarChart3, title: "High Bandwidth", desc: "Handles massive data volumes simultaneously — perfect for data centers and ISPs." },
];

const FeaturesSection = () => (
  <section className="section-padding fiber-gradient">
    <div className="container-content">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Why <span className="text-primary">Fiber Optic</span> Matters
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Discover the key advantages that make fiber optic the gold standard in modern communication.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 0.07}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card p-6 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
