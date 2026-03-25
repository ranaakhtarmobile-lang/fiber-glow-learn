import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

const Tools = () => {
  // Fiber Loss Calculator
  const [splices, setSplices] = useState(4);
  const [spliceLoss, setSpliceLoss] = useState(0.1);
  const [connectors, setConnectors] = useState(2);
  const [connectorLoss, setConnectorLoss] = useState(0.5);
  const [cableLength, setCableLength] = useState(10);
  const [attenuation, setAttenuation] = useState(0.35);

  const totalLoss = (splices * spliceLoss) + (connectors * connectorLoss) + (cableLength * attenuation);

  // NA Calculator
  const [n1, setN1] = useState(1.48);
  const [n2, setN2] = useState(1.465);
  const na = Math.sqrt(n1 * n1 - n2 * n2);
  const criticalAngle = Math.asin(n2 / n1) * (180 / Math.PI);

  // Link Budget Calculator
  const [txPower, setTxPower] = useState(5);
  const [rxSensitivity, setRxSensitivity] = useState(-28);
  const [budgetDistance, setBudgetDistance] = useState(20);
  const [budgetAttenuation, setBudgetAttenuation] = useState(0.35);
  const [splitterRatio, setSplitterRatio] = useState("1:32");
  const [budgetConnectors, setBudgetConnectors] = useState(4);
  const [budgetConnLoss, setBudgetConnLoss] = useState(0.5);
  const [budgetSplices, setBudgetSplices] = useState(6);
  const [budgetSpliceLoss, setBudgetSpliceLoss] = useState(0.1);
  const [safetyMargin, setSafetyMargin] = useState(3);

  const splitterLossMap: Record<string, number> = {
    "1:2": 3.5, "1:4": 7.0, "1:8": 10.5, "1:16": 14.0, "1:32": 17.5, "1:64": 21.0,
  };
  const splitterLoss = splitterLossMap[splitterRatio] || 17.5;
  const totalBudget = txPower - rxSensitivity;
  const totalPathLoss =
    (budgetDistance * budgetAttenuation) +
    splitterLoss +
    (budgetConnectors * budgetConnLoss) +
    (budgetSplices * budgetSpliceLoss) +
    safetyMargin;
  const remainingMargin = totalBudget - totalPathLoss;
  const budgetPass = remainingMargin >= 0;

  return (
    <>
      <Helmet>
        <title>Fiber Optic Calculators – Loss, NA, Attenuation | Fiber Optic Guide</title>
        <meta name="description" content="Interactive fiber optic calculators: total link loss, numerical aperture, critical angle, and signal attenuation. Free tools for network engineers." />
      </Helmet>

      <section className="section-padding pt-28">
        <div className="container-content max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6 mono">
              Interactive Tools
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.1]">
              Fiber Optic <span className="text-primary glow-text">Calculators</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Use these interactive tools to calculate fiber link loss, numerical aperture, and more.
            </p>
          </ScrollReveal>

          {/* Fiber Loss Calculator */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-6 md:p-8 mb-8">
              <h2 className="text-xl font-semibold mb-6">Total Link Loss Calculator</h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                <InputField label="Number of Splices" value={splices} onChange={setSplices} unit="" />
                <InputField label="Loss per Splice" value={spliceLoss} onChange={setSpliceLoss} unit="dB" step={0.01} />
                <InputField label="Number of Connectors" value={connectors} onChange={setConnectors} unit="" />
                <InputField label="Loss per Connector" value={connectorLoss} onChange={setConnectorLoss} unit="dB" step={0.01} />
                <InputField label="Cable Length" value={cableLength} onChange={setCableLength} unit="km" step={0.1} />
                <InputField label="Cable Attenuation" value={attenuation} onChange={setAttenuation} unit="dB/km" step={0.01} />
              </div>
              <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="text-sm text-muted-foreground mb-1">Total Estimated Loss</div>
                <div className="text-3xl font-bold text-primary mono">{totalLoss.toFixed(2)} <span className="text-lg">dB</span></div>
                <div className="text-xs text-muted-foreground mt-2 mono">
                  = ({splices} × {spliceLoss}) + ({connectors} × {connectorLoss}) + ({cableLength} × {attenuation})
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* NA Calculator */}
          <ScrollReveal delay={0.15}>
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-6">Numerical Aperture & Critical Angle</h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                <InputField label="Core Refractive Index (n₁)" value={n1} onChange={setN1} unit="" step={0.001} />
                <InputField label="Cladding Refractive Index (n₂)" value={n2} onChange={setN2} unit="" step={0.001} />
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="text-sm text-muted-foreground mb-1">Numerical Aperture</div>
                  <div className="text-3xl font-bold text-primary mono">
                    {isNaN(na) ? "—" : na.toFixed(4)}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 mono">NA = √(n₁² − n₂²)</div>
                </div>
                <div className="p-4 rounded-lg bg-glow-teal/5 border border-glow-teal/20">
                  <div className="text-sm text-muted-foreground mb-1">Critical Angle</div>
                  <div className="text-3xl font-bold text-glow-teal mono">
                    {isNaN(criticalAngle) ? "—" : criticalAngle.toFixed(2)}°
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 mono">θ<sub>c</sub> = sin⁻¹(n₂/n₁)</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

const InputField = ({
  label, value, onChange, unit, step = 1,
}: { label: string; value: number; onChange: (v: number) => void; unit: string; step?: number }) => (
  <div>
    <label className="text-sm text-muted-foreground mb-1.5 block">{label}</label>
    <div className="flex items-center gap-2">
      <input
        type="number"
        value={value}
        step={step}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="w-full bg-muted/30 border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground mono focus:outline-none focus:ring-1 focus:ring-primary/50 transition-shadow"
      />
      {unit && <span className="text-xs text-muted-foreground mono shrink-0">{unit}</span>}
    </div>
  </div>
);

export default Tools;
