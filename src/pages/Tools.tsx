import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
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

  // dB-to-Linear Converter
  const [dbValue, setDbValue] = useState(0);
  const linearPower = Math.pow(10, dbValue / 10);
  const linearVoltage = Math.pow(10, dbValue / 20);

  // Wavelength-to-Frequency Converter
  const [wavelengthNm, setWavelengthNm] = useState(1550);
  const c = 299792458; // speed of light m/s
  const frequencyTHz = c / (wavelengthNm * 1e-9) / 1e12;
  const frequencyGHz = frequencyTHz * 1000;

  return (
    <>
      <SEOHead
        title="Fiber Optic Calculators – Loss, NA, Attenuation"
        description="Interactive fiber optic calculators: total link loss, numerical aperture, critical angle, and signal attenuation. Free tools for network engineers."
        path="/tools"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Calculators", href: "/tools" }]}
      />

      <section className="section-padding pt-28">
        <div className="container-content max-w-4xl">
          <PageBreadcrumb items={[{ label: "Calculators" }]} />
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

          {/* Link Budget Calculator */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-6 md:p-8 mt-8">
              <h2 className="text-xl font-semibold mb-2">Fiber Link Budget Calculator</h2>
              <p className="text-sm text-muted-foreground mb-6">Determine if your fiber link has sufficient power budget for reliable transmission.</p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                <InputField label="Tx Power (OLT)" value={txPower} onChange={setTxPower} unit="dBm" step={0.5} />
                <InputField label="Rx Sensitivity (ONT)" value={rxSensitivity} onChange={setRxSensitivity} unit="dBm" step={0.5} />
                <InputField label="Cable Distance" value={budgetDistance} onChange={setBudgetDistance} unit="km" step={0.5} />
                <InputField label="Cable Attenuation" value={budgetAttenuation} onChange={setBudgetAttenuation} unit="dB/km" step={0.01} />
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Splitter Ratio</label>
                  <select
                    value={splitterRatio}
                    onChange={(e) => setSplitterRatio(e.target.value)}
                    className="w-full bg-muted/30 border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground mono focus:outline-none focus:ring-1 focus:ring-primary/50 transition-shadow"
                  >
                    {Object.keys(splitterLossMap).map((r) => (
                      <option key={r} value={r}>{r} ({splitterLossMap[r]} dB)</option>
                    ))}
                  </select>
                </div>
                <InputField label="Safety Margin" value={safetyMargin} onChange={setSafetyMargin} unit="dB" step={0.5} />
                <InputField label="Connectors" value={budgetConnectors} onChange={setBudgetConnectors} unit="" />
                <InputField label="Loss per Connector" value={budgetConnLoss} onChange={setBudgetConnLoss} unit="dB" step={0.1} />
                <InputField label="Splices" value={budgetSplices} onChange={setBudgetSplices} unit="" />
                <InputField label="Loss per Splice" value={budgetSpliceLoss} onChange={setBudgetSpliceLoss} unit="dB" step={0.01} />
              </div>

              {/* Results */}
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="text-xs text-muted-foreground mb-1">Available Budget</div>
                  <div className="text-2xl font-bold text-primary mono">{totalBudget.toFixed(1)} <span className="text-sm">dB</span></div>
                  <div className="text-xs text-muted-foreground mt-1 mono">Tx − Rx sensitivity</div>
                </div>
                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <div className="text-xs text-muted-foreground mb-1">Total Path Loss</div>
                  <div className="text-2xl font-bold text-destructive mono">{totalPathLoss.toFixed(2)} <span className="text-sm">dB</span></div>
                  <div className="text-xs text-muted-foreground mt-1 mono">All losses + margin</div>
                </div>
                <div className={`p-4 rounded-lg border ${budgetPass ? 'bg-green-500/5 border-green-500/20' : 'bg-destructive/10 border-destructive/30'}`}>
                  <div className="text-xs text-muted-foreground mb-1">Remaining Margin</div>
                  <div className={`text-2xl font-bold mono ${budgetPass ? 'text-green-500' : 'text-destructive'}`}>
                    {remainingMargin.toFixed(2)} <span className="text-sm">dB</span>
                  </div>
                  <div className={`text-xs font-semibold mt-1 ${budgetPass ? 'text-green-500' : 'text-destructive'}`}>
                    {budgetPass ? '✓ PASS — Link is viable' : '✗ FAIL — Insufficient budget'}
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="mt-4 p-4 rounded-lg bg-muted/20 border border-border/30">
                <div className="text-xs font-medium text-muted-foreground mb-2">Loss Breakdown</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mono">
                  <div><span className="text-muted-foreground">Fiber:</span> <span className="text-foreground">{(budgetDistance * budgetAttenuation).toFixed(2)} dB</span></div>
                  <div><span className="text-muted-foreground">Splitter:</span> <span className="text-foreground">{splitterLoss.toFixed(1)} dB</span></div>
                  <div><span className="text-muted-foreground">Connectors:</span> <span className="text-foreground">{(budgetConnectors * budgetConnLoss).toFixed(1)} dB</span></div>
                  <div><span className="text-muted-foreground">Splices:</span> <span className="text-foreground">{(budgetSplices * budgetSpliceLoss).toFixed(2)} dB</span></div>
                </div>
              </div>
            </div>
          </ScrollReveal>


          {/* GPON vs XGS-PON vs EPON Comparison */}
          <ScrollReveal delay={0.25}>
            <div className="glass-card p-6 md:p-8 mt-8">
              <h2 className="text-xl font-semibold mb-2">GPON vs XGS-PON vs EPON</h2>
              <p className="text-sm text-muted-foreground mb-6">Side-by-side comparison of passive optical network technologies.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-3 px-3 text-muted-foreground font-medium">Feature</th>
                      <th className="text-center py-3 px-3 font-semibold text-primary">GPON</th>
                      <th className="text-center py-3 px-3 font-semibold text-glow-teal">XGS-PON</th>
                      <th className="text-center py-3 px-3 font-semibold text-glow-purple">EPON</th>
                    </tr>
                  </thead>
                  <tbody className="mono text-xs">
                    {ponData.map((row, i) => (
                      <tr key={i} className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                        <td className="py-3 px-3 font-medium text-foreground text-sm">{row.feature}</td>
                        <td className="py-3 px-3 text-center">{row.gpon}</td>
                        <td className="py-3 px-3 text-center">{row.xgspon}</td>
                        <td className="py-3 px-3 text-center">{row.epon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* dB-to-Linear & Wavelength-to-Frequency */}
          <ScrollReveal delay={0.3}>
            <div className="grid sm:grid-cols-2 gap-8 mt-8">
              {/* dB to Linear */}
              <div className="glass-card p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-2">dB → Linear Converter</h2>
                <p className="text-xs text-muted-foreground mb-5">Convert decibels to linear power and voltage ratios.</p>
                <InputField label="Value in dB" value={dbValue} onChange={setDbValue} unit="dB" step={0.1} />
                <div className="mt-5 space-y-3">
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-xs text-muted-foreground mb-0.5">Power Ratio (10^(dB/10))</div>
                    <div className="text-2xl font-bold text-primary mono">
                      {linearPower < 0.001 || linearPower > 1e6 ? linearPower.toExponential(4) : linearPower.toFixed(4)}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-glow-teal/5 border border-glow-teal/20">
                    <div className="text-xs text-muted-foreground mb-0.5">Voltage Ratio (10^(dB/20))</div>
                    <div className="text-2xl font-bold text-glow-teal mono">
                      {linearVoltage < 0.001 || linearVoltage > 1e6 ? linearVoltage.toExponential(4) : linearVoltage.toFixed(4)}
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-muted-foreground mono space-y-1">
                  <div>0 dB = 1× | 3 dB ≈ 2× | 10 dB = 10× | −3 dB ≈ 0.5×</div>
                </div>
              </div>

              {/* Wavelength to Frequency */}
              <div className="glass-card p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-2">λ → Frequency Converter</h2>
                <p className="text-xs text-muted-foreground mb-5">Convert optical wavelength to frequency (f = c / λ).</p>
                <InputField label="Wavelength" value={wavelengthNm} onChange={setWavelengthNm} unit="nm" step={1} />
                <div className="mt-5 space-y-3">
                  <div className="p-3 rounded-lg bg-glow-purple/5 border border-glow-purple/20">
                    <div className="text-xs text-muted-foreground mb-0.5">Frequency (THz)</div>
                    <div className="text-2xl font-bold text-glow-purple mono">
                      {isFinite(frequencyTHz) ? frequencyTHz.toFixed(4) : "—"} <span className="text-sm">THz</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-xs text-muted-foreground mb-0.5">Frequency (GHz)</div>
                    <div className="text-2xl font-bold text-primary mono">
                      {isFinite(frequencyGHz) ? frequencyGHz.toFixed(1) : "—"} <span className="text-sm">GHz</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-muted-foreground mono space-y-1">
                  <div>850 nm → 352.7 THz | 1310 nm → 228.8 THz | 1550 nm → 193.4 THz</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

const ponData = [
  { feature: "Standard", gpon: "ITU-T G.984", xgspon: "ITU-T G.9807.1", epon: "IEEE 802.3ah" },
  { feature: "Downstream Speed", gpon: "2.488 Gbps", xgspon: "9.953 Gbps", epon: "1.25 Gbps" },
  { feature: "Upstream Speed", gpon: "1.244 Gbps", xgspon: "9.953 Gbps", epon: "1.25 Gbps" },
  { feature: "Symmetry", gpon: "Asymmetric", xgspon: "Symmetric", epon: "Symmetric" },
  { feature: "Max Split Ratio", gpon: "1:64 (typ 1:32)", xgspon: "1:64 (typ 1:32)", epon: "1:32 (typ 1:16)" },
  { feature: "Max Distance", gpon: "20 km", xgspon: "20 km", epon: "20 km (10 km typ)" },
  { feature: "Downstream λ", gpon: "1490 nm", xgspon: "1577 nm", epon: "1490 nm" },
  { feature: "Upstream λ", gpon: "1310 nm", xgspon: "1270 nm", epon: "1310 nm" },
  { feature: "Encapsulation", gpon: "GEM frames", xgspon: "GEM frames", epon: "Ethernet frames" },
  { feature: "Bandwidth Alloc", gpon: "T-CONT / DBA", xgspon: "T-CONT / DBA", epon: "MPCP / DBA" },
  { feature: "Primary Market", gpon: "Global FTTH", xgspon: "Next-gen FTTH", epon: "Asia (Japan/China)" },
  { feature: "Coexistence", gpon: "With RF overlay", xgspon: "With GPON on same ODN", epon: "10G-EPON upgrade" },
  { feature: "Use Cases", gpon: "Residential, SMB", xgspon: "Enterprise, 5G backhaul", epon: "MDU, campus networks" },
];

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
