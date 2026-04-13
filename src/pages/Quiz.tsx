import { useState, useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import ScrollReveal from "@/components/ScrollReveal";
import { BrainCircuit, CheckCircle, XCircle, RotateCcw, Trophy, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: string;
}

const quizQuestions: Question[] = [
  { question: "What does OTDR stand for?", options: ["Optical Time-Domain Reflectometer", "Optical Transmission Data Receiver", "Open Trunk Distribution Router", "Optical Throughput Detection Relay"], correct: 0, explanation: "OTDR stands for Optical Time-Domain Reflectometer — it sends light pulses to characterize fiber links.", category: "Tools" },
  { question: "What is the typical wavelength used in single-mode fiber for long-haul?", options: ["850 nm", "1310 nm", "1550 nm", "650 nm"], correct: 2, explanation: "1550 nm has the lowest attenuation (~0.2 dB/km) making it ideal for long-haul single-mode transmission.", category: "Fundamentals" },
  { question: "What type of connector has a 2.5mm ferrule and uses a push-pull mechanism?", options: ["SC", "LC", "ST", "MTP/MPO"], correct: 0, explanation: "SC (Subscriber Connector) has a 2.5mm ferrule with a push-pull latching mechanism.", category: "Components" },
  { question: "In GPON, what is the maximum downstream speed?", options: ["1.25 Gbps", "2.488 Gbps", "10 Gbps", "100 Gbps"], correct: 1, explanation: "GPON provides 2.488 Gbps downstream and 1.244 Gbps upstream per ITU-T G.984.", category: "Standards" },
  { question: "What causes macrobending loss in fiber?", options: ["Dirt on connectors", "Bending fiber below minimum bend radius", "Chromatic dispersion", "Fresnel reflection"], correct: 1, explanation: "Macrobending occurs when fiber is bent below its minimum bend radius, causing light to escape the core.", category: "Fundamentals" },
  { question: "Which fiber type supports multiple light paths simultaneously?", options: ["Single-mode (OS2)", "Multi-mode (OM3)", "Polarization-maintaining", "Hollow-core"], correct: 1, explanation: "Multi-mode fiber has a larger core (50/62.5μm) that supports multiple modes (light paths) propagating simultaneously.", category: "Fundamentals" },
  { question: "What is the typical splice loss for a fusion splice?", options: ["0.5 dB", "0.1 dB or less", "1.0 dB", "0.3 dB"], correct: 1, explanation: "A good fusion splice typically achieves ≤0.1 dB loss, much better than mechanical splices (~0.5 dB).", category: "Installation" },
  { question: "What does the 'G' in GPON stand for?", options: ["Gigabit", "General", "Global", "Graded"], correct: 0, explanation: "GPON = Gigabit Passive Optical Network, defined by ITU-T G.984 standard.", category: "Standards" },
  { question: "An OTDR trace shows a large spike followed by no signal. What event is this?", options: ["Connector", "Splice", "Fiber break", "Splitter"], correct: 2, explanation: "A large reflective spike followed by noise floor indicates a fiber break — light reflects off the broken end.", category: "Tools" },
  { question: "What is the core diameter of standard single-mode fiber (G.652)?", options: ["50 μm", "62.5 μm", "9 μm", "125 μm"], correct: 2, explanation: "Single-mode fiber (G.652) has a 9μm core. 125μm is the cladding diameter.", category: "Fundamentals" },
  { question: "Which splitter ratio is most common in FTTH GPON deployments?", options: ["1:2", "1:8", "1:32", "1:128"], correct: 2, explanation: "1:32 split ratio is the most common in GPON FTTH, allowing one OLT port to serve 32 subscribers.", category: "Standards" },
  { question: "What is the primary advantage of XGS-PON over GPON?", options: ["Lower cost", "Symmetric 10 Gbps speeds", "Longer reach", "More split ratios"], correct: 1, explanation: "XGS-PON provides symmetric 10 Gbps (up and down), a 4x improvement over GPON's asymmetric speeds.", category: "Standards" },
  { question: "What color is a single-mode fiber patch cord typically?", options: ["Orange", "Aqua", "Yellow", "Grey"], correct: 2, explanation: "Yellow jacket = single-mode. Orange = OM1/OM2, Aqua = OM3/OM4, Magenta = OM5.", category: "Components" },
  { question: "What is the purpose of a Visual Fault Locator (VFL)?", options: ["Measure fiber length", "Locate breaks and macrobends with visible red light", "Test network speed", "Calibrate OTDR"], correct: 1, explanation: "A VFL emits visible red laser light (typically 650nm) to locate breaks, macrobends, and bad connectors.", category: "Tools" },
  { question: "What does APC stand for in fiber connectors?", options: ["Automatic Power Control", "Angled Physical Contact", "Adaptive Protocol Converter", "Asymmetric Passive Coupler"], correct: 1, explanation: "APC = Angled Physical Contact. The ferrule end-face is polished at 8° to reduce back-reflection to < -65 dB.", category: "Components" },
  { question: "Which cable type is best for direct burial installations?", options: ["Tight buffer", "Drop cable", "Armored cable", "ADSS"], correct: 2, explanation: "Armored cable has a steel/aluminum layer providing crush and rodent resistance, making it ideal for direct burial.", category: "Installation" },
  { question: "What is the speed of light in fiber optic cable (approximately)?", options: ["300,000 km/s", "200,000 km/s", "150,000 km/s", "100,000 km/s"], correct: 1, explanation: "Light travels at ~200,000 km/s in fiber (⅔ of vacuum speed) due to the refractive index of glass (~1.5).", category: "Fundamentals" },
  { question: "What is the maximum split ratio supported by GPON?", options: ["1:16", "1:32", "1:64", "1:128"], correct: 2, explanation: "GPON supports up to 1:64 split ratio, though 1:32 is most commonly deployed for practical power budget reasons.", category: "Standards" },
  { question: "What does FTTH stand for?", options: ["Fiber To The Hub", "Fiber To The Home", "Fast Transmission Through Hardware", "Fiber Trunk Terminal Hub"], correct: 1, explanation: "FTTH = Fiber To The Home — delivering fiber connectivity directly to the subscriber's residence.", category: "Fundamentals" },
  { question: "What happens when you connect an APC connector to a UPC port?", options: ["Works perfectly", "Slight signal loss", "High back-reflection and potential damage", "Auto-adapts"], correct: 2, explanation: "Mixing APC (angled) with UPC (flat) causes an air gap, resulting in high insertion loss, back-reflection, and possible ferrule damage. Never mix them!", category: "Components" },
];

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [history, setHistory] = useState<boolean[]>([]);

  const shuffledQuestions = useMemo(() => {
    return [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 15);
  }, []);

  const q = shuffledQuestions[currentQ];
  const progress = ((currentQ + (answered ? 1 : 0)) / shuffledQuestions.length) * 100;

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const isCorrect = idx === q.correct;
    if (isCorrect) setScore((s) => s + 1);
    setHistory((h) => [...h, isCorrect]);
  };

  const handleNext = () => {
    if (currentQ + 1 >= shuffledQuestions.length) {
      setFinished(true);
    } else {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setHistory([]);
  };

  const percentage = Math.round((score / shuffledQuestions.length) * 100);
  const grade = percentage >= 90 ? "A+" : percentage >= 80 ? "A" : percentage >= 70 ? "B" : percentage >= 60 ? "C" : percentage >= 50 ? "D" : "F";

  return (
    <>
      <SEOHead title="Fiber Optic Quiz – Test Your Knowledge" description="Test your fiber optic knowledge with our interactive quiz covering GPON, OTDR, connectors, installation, and more." path="/quiz" breadcrumbs={[{ name: "Home", href: "/" }, { name: "Quiz", href: "/quiz" }]} />
      <div className="pt-24 pb-16">
        <div className="container-content px-4 max-w-2xl mx-auto">
          <PageBreadcrumb items={[{ label: "Knowledge Quiz" }]} />
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <BrainCircuit className="w-4 h-4" />
                Knowledge Quiz
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Fiber Optic <span className="text-primary">Quiz</span>
              </h1>
              <p className="text-muted-foreground">15 random questions from our question bank. How well do you know fiber?</p>
            </div>
          </ScrollReveal>


          {!finished ? (
            <AnimatePresence mode="wait">
              <motion.div key={currentQ} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }}>
                <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                  <span>Question {currentQ + 1} of {shuffledQuestions.length}</span>
                  <Badge variant="outline" className="text-xs">{q.category}</Badge>
                </div>
                <Progress value={progress} className="mb-6 h-2" />

                <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-6">
                  <CardContent className="pt-6">
                    <p className="text-lg font-semibold text-foreground mb-6">{q.question}</p>
                    <div className="space-y-3">
                      {q.options.map((opt, idx) => {
                        let cls = "border-border/50 hover:border-primary/40 hover:bg-primary/5 cursor-pointer";
                        if (answered) {
                          if (idx === q.correct) cls = "border-green-500/50 bg-green-500/10";
                          else if (idx === selected) cls = "border-red-500/50 bg-red-500/10";
                          else cls = "border-border/30 opacity-50";
                        } else if (idx === selected) {
                          cls = "border-primary bg-primary/10";
                        }
                        return (
                          <button
                            key={idx}
                            onClick={() => handleSelect(idx)}
                            disabled={answered}
                            className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-3 ${cls}`}
                          >
                            <span className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center text-sm font-bold text-muted-foreground shrink-0">
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="text-sm text-foreground">{opt}</span>
                            {answered && idx === q.correct && <CheckCircle className="w-5 h-5 text-green-500 ml-auto shrink-0" />}
                            {answered && idx === selected && idx !== q.correct && <XCircle className="w-5 h-5 text-red-500 ml-auto shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                    {answered && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 p-4 rounded-xl bg-muted/30 border border-border/50">
                        <p className="text-sm text-muted-foreground"><strong className="text-foreground">Explanation:</strong> {q.explanation}</p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>

                {answered && (
                  <div className="flex justify-end">
                    <Button onClick={handleNext} className="gap-2">
                      {currentQ + 1 >= shuffledQuestions.length ? "See Results" : "Next Question"} <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          ) : (
            <ScrollReveal>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardContent className="pt-8 pb-8">
                  <Trophy className={`w-16 h-16 mx-auto mb-4 ${percentage >= 70 ? "text-yellow-500" : "text-muted-foreground"}`} />
                  <h2 className="text-3xl font-bold text-foreground mb-2">Quiz Complete!</h2>
                  <div className="text-6xl font-black text-primary mb-2">{grade}</div>
                  <p className="text-xl text-muted-foreground mb-6">{score} / {shuffledQuestions.length} correct ({percentage}%)</p>

                  <div className="flex justify-center gap-1 mb-6 flex-wrap">
                    {history.map((correct, i) => (
                      <div key={i} className={`w-6 h-6 rounded text-xs font-bold flex items-center justify-center ${correct ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"}`}>
                        {i + 1}
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    {percentage >= 90 ? "Outstanding! You're a fiber optic expert! 🏆" :
                     percentage >= 70 ? "Great job! You have solid fiber knowledge. 👏" :
                     percentage >= 50 ? "Good effort! Review the topics you missed. 📚" :
                     "Keep studying! Check our guides to learn more. 💪"}
                  </p>

                  <Button onClick={handleReset} className="gap-2">
                    <RotateCcw className="w-4 h-4" /> Try Again
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          )}

        </div>
      </div>
    </>
  );
};

export default Quiz;
