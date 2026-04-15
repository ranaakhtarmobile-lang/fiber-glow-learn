import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Input } from "./ui/input";
import ScrollReveal from "./ScrollReveal";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    // TODO: connect to Lovable Cloud once enabled
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="section-padding-sm fiber-gradient">
      <div className="container-content max-w-2xl text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Stay <span className="text-primary">Updated</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
            Subscribe to get the latest fiber optic tutorials, tool updates, and industry insights.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-primary">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Thank you! You're subscribed.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-card/60 border-border/50"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:brightness-110 active:scale-[0.97] disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {loading ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsletterSection;
