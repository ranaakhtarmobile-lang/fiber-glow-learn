import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import InArticleAd from "@/components/InArticleAd";
import SponsoredLink from "@/components/SponsoredLink";
import { Cable, MapPin, Ruler, Target, CheckCircle, AlertTriangle, RotateCcw } from "lucide-react";

interface CableType {
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  maxDistance: string;
  fiberCount: string;
  environments: string[];
  applications: string[];
  distances: string[];
  image: string;
}

const cableTypes: CableType[] = [
  {
    name: "Loose Tube Cable",
    description: "Individual fibers housed in gel-filled buffer tubes for moisture protection. Industry standard for outdoor deployments.",
    pros: ["Excellent moisture protection", "Wide temperature range (-40°C to +70°C)", "Easy mid-span access", "Available in high fiber counts"],
    cons: ["Larger diameter", "Requires careful gel cleanup during splicing", "Not ideal for tight indoor routing"],
    maxDistance: "Up to 80+ km",
    fiberCount: "6 to 864 fibers",
    environments: ["outdoor", "underground", "aerial"],
    applications: ["backbone", "campus", "longhaul"],
    distances: ["medium", "long"],
    image: "🔵",
  },
  {
    name: "Tight Buffer Cable",
    description: "Each fiber has a 900μm buffer coating directly applied. Designed for indoor use with easy connectorization.",
    pros: ["Easy to terminate", "No gel to clean", "Flexible for tight spaces", "Cost-effective for short runs"],
    cons: ["Limited temperature range", "Poor moisture resistance", "Not suitable for long outdoor runs"],
    maxDistance: "Up to 2 km",
    fiberCount: "1 to 144 fibers",
    environments: ["indoor"],
    applications: ["datacenter", "building", "patch"],
    distances: ["short"],
    image: "🟢",
  },
  {
    name: "Ribbon Cable",
    description: "Fibers arranged in flat ribbons for mass fusion splicing. Maximum density for high-count applications.",
    pros: ["Highest fiber density", "Mass fusion splicing (12 at once)", "Fastest installation for high counts", "Smaller cable diameter per fiber"],
    cons: ["Requires ribbon splicer", "Less flexible", "More expensive tooling", "Difficult mid-span access"],
    maxDistance: "Up to 40+ km",
    fiberCount: "12 to 6,912 fibers",
    environments: ["underground", "indoor"],
    applications: ["datacenter", "backbone", "ftth"],
    distances: ["medium", "long"],
    image: "🟡",
  },
  {
    name: "Armored Cable",
    description: "Steel or aluminum armor layer for crush and rodent protection. Essential for direct burial and harsh environments.",
    pros: ["Rodent resistant", "Crush resistant", "Direct burial rated", "Long service life"],
    cons: ["Heavier weight", "Larger bend radius", "More expensive", "Requires armor removal tools"],
    maxDistance: "Up to 60+ km",
    fiberCount: "2 to 432 fibers",
    environments: ["underground", "outdoor", "industrial"],
    applications: ["backbone", "campus", "longhaul"],
    distances: ["medium", "long"],
    image: "🔴",
  },
  {
    name: "Drop Cable (Flat/Round)",
    description: "Last-mile cable connecting distribution point to subscriber premises. Available in flat (indoor) and round (outdoor) variants.",
    pros: ["Low cost per meter", "Easy to install", "Self-supporting options available", "Small profile"],
    cons: ["Low fiber count", "Limited to short distances", "Less robust"],
    maxDistance: "Up to 500 m",
    fiberCount: "1 to 4 fibers",
    environments: ["indoor", "outdoor", "aerial"],
    applications: ["ftth", "patch"],
    distances: ["short"],
    image: "🟣",
  },
  {
    name: "ADSS (All-Dielectric Self-Supporting)",
    description: "Non-metallic aerial cable with built-in strength members. No grounding required, safe near power lines.",
    pros: ["No grounding needed", "Safe near high voltage", "Lightweight", "Long span capability (up to 700m)"],
    cons: ["Susceptible to aeolian vibration", "Limited in ice/wind loading", "Requires specialized hardware"],
    maxDistance: "Up to 60+ km",
    fiberCount: "6 to 288 fibers",
    environments: ["aerial"],
    applications: ["backbone", "campus", "longhaul"],
    distances: ["medium", "long"],
    image: "🟠",
  },
  {
    name: "Micro Cable",
    description: "Ultra-small diameter cable designed for microduct blown installation. Maximizes existing duct space.",
    pros: ["Very small diameter (2-6mm)", "Blown installation", "Maximizes duct usage", "Future-proof upgrade path"],
    cons: ["Requires microduct infrastructure", "Lower fiber counts", "Specialized blowing equipment needed"],
    maxDistance: "Up to 6 km per blow",
    fiberCount: "2 to 144 fibers",
    environments: ["underground"],
    applications: ["ftth", "campus"],
    distances: ["short", "medium"],
    image: "⚪",
  },
];

const questions = [
  {
    id: "environment",
    icon: MapPin,
    title: "Installation Environment",
    description: "Where will the cable be installed?",
    options: [
      { value: "indoor", label: "Indoor (buildings, data centers)" },
      { value: "outdoor", label: "Outdoor (exposed to weather)" },
      { value: "underground", label: "Underground (ducts, direct burial)" },
      { value: "aerial", label: "Aerial (pole-to-pole)" },
      { value: "industrial", label: "Industrial (harsh conditions)" },
    ],
  },
  {
    id: "distance",
    icon: Ruler,
    title: "Cable Run Distance",
    description: "How far does the cable need to reach?",
    options: [
      { value: "short", label: "Short (< 2 km)" },
      { value: "medium", label: "Medium (2 - 40 km)" },
      { value: "long", label: "Long (40+ km)" },
    ],
  },
  {
    id: "application",
    icon: Target,
    title: "Primary Application",
    description: "What is the main use case?",
    options: [
      { value: "ftth", label: "FTTH / Last Mile" },
      { value: "datacenter", label: "Data Center Interconnect" },
      { value: "backbone", label: "Backbone / Trunk" },
      { value: "campus", label: "Campus Network" },
      { value: "building", label: "In-Building Cabling" },
      { value: "patch", label: "Patch Cords / Jumpers" },
      { value: "longhaul", label: "Long Haul / Metro" },
    ],
  },
];

const CableGuide = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const recommendations = useMemo(() => {
    const keys = Object.keys(answers);
    if (keys.length === 0) return [];

    return cableTypes
      .map((cable) => {
        let score = 0;
        if (answers.environment && cable.environments.includes(answers.environment)) score += 3;
        if (answers.distance && cable.distances.includes(answers.distance)) score += 2;
        if (answers.application && cable.applications.includes(answers.application)) score += 2;
        return { ...cable, score };
      })
      .filter((c) => c.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [answers]);

  const answeredCount = Object.keys(answers).length;

  return (
    <>
      <Helmet>
        <title>Fiber Cable Selection Guide | FiberOpticGuide</title>
        <meta name="description" content="Interactive guide to choose the right fiber optic cable type based on your installation environment, distance, and application requirements." />
      </Helmet>
      <div className="pt-24 pb-16">
        <div className="container-content px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Cable className="w-4 h-4" />
                Cable Selection Guide
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Find Your Perfect <span className="text-primary">Fiber Cable</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Answer a few questions about your project and we'll recommend the best cable type for your needs.
              </p>
            </div>
          </ScrollReveal>

          {/* Sponsored link */}
          <div className="flex justify-center my-6">
            <SponsoredLink variant={0} />
          </div>

          {/* Questions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {questions.map((q, i) => (
              <ScrollReveal key={q.id} delay={i * 0.1}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <q.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{q.title}</CardTitle>
                        <p className="text-xs text-muted-foreground">{q.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={answers[q.id] || ""}
                      onValueChange={(v) => setAnswers((prev) => ({ ...prev, [q.id]: v }))}
                      className="space-y-2"
                    >
                      {q.options.map((opt) => (
                        <div key={opt.value} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                          <RadioGroupItem value={opt.value} id={`${q.id}-${opt.value}`} />
                          <Label htmlFor={`${q.id}-${opt.value}`} className="text-sm cursor-pointer flex-1">{opt.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {answeredCount > 0 && (
            <div className="flex justify-center mb-8">
              <Button variant="outline" size="sm" onClick={() => setAnswers({})}>
                <RotateCcw className="w-4 h-4 mr-2" /> Reset Selections
              </Button>
            </div>
          )}

          {/* Results */}
          {answeredCount > 0 && (
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                {recommendations.length > 0 ? `${recommendations.length} Cable${recommendations.length > 1 ? "s" : ""} Recommended` : "No exact matches — try adjusting your criteria"}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {recommendations.map((cable, i) => (
                  <Card key={cable.name} className={`bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden ${i === 0 ? "ring-2 ring-primary/40" : ""}`}>
                    {i === 0 && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">Best Match</Badge>
                      </div>
                    )}
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{cable.image}</span>
                        <div>
                          <CardTitle className="text-lg">{cable.name}</CardTitle>
                          <p className="text-xs text-muted-foreground mt-0.5">{cable.fiberCount} · {cable.maxDistance}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{cable.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-xs font-semibold text-foreground mb-1 flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" /> Pros</p>
                          <ul className="space-y-0.5">
                            {cable.pros.map((p) => <li key={p} className="text-xs text-muted-foreground">• {p}</li>)}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground mb-1 flex items-center gap-1"><AlertTriangle className="w-3 h-3 text-yellow-500" /> Cons</p>
                          <ul className="space-y-0.5">
                            {cable.cons.map((c) => <li key={c} className="text-xs text-muted-foreground">• {c}</li>)}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* In-article ad */}
          <InArticleAd />
        </div>
      </div>
    </>
  );
};

export default CableGuide;
