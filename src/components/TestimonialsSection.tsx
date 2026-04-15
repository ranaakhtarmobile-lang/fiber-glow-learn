import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Ahmed R.",
    role: "Network Engineer",
    text: "This guide helped me understand OTDR testing and fiber splicing better than any paid course. Absolutely brilliant resource!",
    stars: 5,
  },
  {
    name: "Sarah K.",
    role: "Telecom Student",
    text: "The interactive tools and calculators are a game-changer. I use this site daily for my coursework and exam preparation.",
    stars: 5,
  },
  {
    name: "David M.",
    role: "IT Professional",
    text: "Clean, organized, and covers everything from basics to advanced fiber optic concepts. Highly recommended for anyone in the field.",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container-content">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          What Our <span className="text-primary">Users Say</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Trusted by students, engineers, and professionals worldwide.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
