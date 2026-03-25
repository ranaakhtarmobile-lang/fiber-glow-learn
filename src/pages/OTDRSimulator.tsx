import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import { useState, useMemo } from "react";

type FiberEvent = {
  id: string;
  type: "connector" | "splice" | "splitter" | "bend" | "break";
  distance: number; // km
  loss: number; // dB
  reflectance?: number; // dB (only for reflective events)
  label: string;
};

const defaultEvents: FiberEvent[] = [
  { id: "1", type: "connector", distance: 0, loss: 0.5, reflectance: -45, label: "Patch Panel A" },
  { id: "2", type: "splice", distance: 2.1, loss: 0.08, label: "Splice #1" },
  { id: "3", type: "splice", distance: 4.3, loss: 0.05, label: "Splice #2" },
  { id: "4", type: "splitter", distance: 6.0, loss: 3.5, label: "1:2 Splitter" },
  { id: "5", type: "bend", distance: 8.5, loss: 0.3, label: "Macrobend" },
  { id: "6", type: "splice", distance: 12.0, loss: 0.1, label: "Splice #3" },
  { id: "7", type: "connector", distance: 15.0, loss: 0.4, reflectance: -40, label: "Patch Panel B" },
];

const eventColors: Record<string, string> = {
  connector: "hsl(var(--primary))",
  splice: "hsl(var(--glow-teal, 180 80% 60%))",
  splitter: "hsl(var(--glow-purple, 270 80% 70%))",
  bend: "#f59e0b",
  break: "#ef4444",
};

const eventLabels: Record<string, string> = {
  connector: "Connector",
  splice: "Splice",
  splitter: "Splitter",
  bend: "Bend",
  break: "Break",
};

const OTDRSimulator = () => {
  const [events, setEvents] = useState<FiberEvent[]>(defaultEvents);
  const [fiberAttenuation, setFiberAttenuation] = useState(0.35);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [newType, setNewType] = useState<FiberEvent["type"]>("splice");
  const [newDistance, setNewDistance] = useState(10);
  const [newLoss, setNewLoss] = useState(0.1);
  const [newLabel, setNewLabel] = useState("");

  const totalDistance = useMemo(() => {
    return Math.max(...events.map((e) => e.distance), 1);
  }, [events]);

  // Build trace points
  const traceData = useMemo(() => {
    const sorted = [...events].sort((a, b) => a.distance - b.distance);
    const points: { x: number; y: number; event?: FiberEvent }[] = [];
    let currentPower = 0; // start at 0 dB (relative)

    // Starting point
    points.push({ x: 0, y: currentPower });

    sorted.forEach((ev) => {
      // Fiber loss up to this event
      const prevX = points[points.length - 1].x;
      const fiberLoss = (ev.distance - prevX) * fiberAttenuation;
      currentPower -= fiberLoss;

      // Point just before event
      points.push({ x: ev.distance, y: currentPower });

      // Event loss (vertical drop)
      currentPower -= ev.loss;
      points.push({ x: ev.distance, y: currentPower, event: ev });
    });

    // Extend trace beyond last event
    const endDist = totalDistance * 1.15;
    const lastX = points[points.length - 1].x;
    const remainingLoss = (endDist - lastX) * fiberAttenuation;
    currentPower -= remainingLoss;
    points.push({ x: endDist, y: currentPower });

    return points;
  }, [events, fiberAttenuation, totalDistance]);

  const minPower = Math.min(...traceData.map((p) => p.y)) - 2;
  const maxDist = traceData[traceData.length - 1]?.x || 20;

  // SVG dimensions
  const svgW = 800;
  const svgH = 350;
  const pad = { top: 30, right: 40, bottom: 50, left: 60 };
  const plotW = svgW - pad.left - pad.right;
  const plotH = svgH - pad.top - pad.bottom;

  const scaleX = (d: number) => pad.left + (d / maxDist) * plotW;
  const scaleY = (p: number) => pad.top + ((0 - p) / (0 - minPower)) * plotH;

  const pathD = traceData.map((p, i) => `${i === 0 ? "M" : "L"} ${scaleX(p.x).toFixed(1)} ${scaleY(p.y).toFixed(1)}`).join(" ");

  const addEvent = () => {
    const ev: FiberEvent = {
      id: Date.now().toString(),
      type: newType,
      distance: newDistance,
      loss: newLoss,
      label: newLabel || `${eventLabels[newType]} @ ${newDistance} km`,
      reflectance: newType === "connector" ? -40 : undefined,
    };
    setEvents((prev) => [...prev, ev].sort((a, b) => a.distance - b.distance));
    setNewLabel("");
  };

  const removeEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
    if (selectedEvent === id) setSelectedEvent(null);
  };

  const totalEventLoss = events.reduce((s, e) => s + e.loss, 0);
  const totalFiberLoss = totalDistance * fiberAttenuation;

  return (
    <>
      <Helmet>
        <title>OTDR Trace Simulator – Interactive Fiber Event Viewer | Fiber Optic Guide</title>
        <meta name="description" content="Interactive OTDR trace simulator. Visualize fiber events — connectors, splices, splitters, bends — and analyze signal loss along a fiber link." />
      </Helmet>

      <section className="section-padding pt-28">
        <div className="container-content max-w-5xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6 mono">
              Simulator
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.1]">
              OTDR Trace <span className="text-primary glow-text">Simulator</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Visualize how an OTDR trace reveals events along a fiber link. Add, remove, and inspect events interactively.
            </p>
          </ScrollReveal>

          {/* Trace Chart */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-4 md:p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">OTDR Trace</h2>
                <div className="flex items-center gap-4 text-xs mono text-muted-foreground">
                  <span>Fiber: {fiberAttenuation} dB/km</span>
                  <span>Events: {events.length}</span>
                </div>
              </div>

              <div className="w-full overflow-x-auto">
                <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full min-w-[600px]" style={{ aspectRatio: `${svgW}/${svgH}` }}>
                  {/* Grid */}
                  {Array.from({ length: 6 }, (_, i) => {
                    const yVal = (minPower / 5) * i;
                    const y = scaleY(yVal);
                    return (
                      <g key={`gy-${i}`}>
                        <line x1={pad.left} y1={y} x2={svgW - pad.right} y2={y} stroke="currentColor" strokeOpacity={0.08} />
                        <text x={pad.left - 8} y={y + 4} textAnchor="end" className="fill-muted-foreground" fontSize={10}>
                          {yVal.toFixed(1)}
                        </text>
                      </g>
                    );
                  })}
                  {Array.from({ length: 6 }, (_, i) => {
                    const xVal = (maxDist / 5) * i;
                    const x = scaleX(xVal);
                    return (
                      <g key={`gx-${i}`}>
                        <line x1={x} y1={pad.top} x2={x} y2={svgH - pad.bottom} stroke="currentColor" strokeOpacity={0.08} />
                        <text x={x} y={svgH - pad.bottom + 18} textAnchor="middle" className="fill-muted-foreground" fontSize={10}>
                          {xVal.toFixed(1)}
                        </text>
                      </g>
                    );
                  })}

                  {/* Axis labels */}
                  <text x={svgW / 2} y={svgH - 5} textAnchor="middle" className="fill-muted-foreground" fontSize={11}>
                    Distance (km)
                  </text>
                  <text x={15} y={svgH / 2} textAnchor="middle" className="fill-muted-foreground" fontSize={11} transform={`rotate(-90, 15, ${svgH / 2})`}>
                    Power (dB)
                  </text>

                  {/* Trace line */}
                  <path d={pathD} fill="none" stroke="hsl(var(--primary))" strokeWidth={2.5} strokeLinejoin="round" />

                  {/* Glow effect */}
                  <path d={pathD} fill="none" stroke="hsl(var(--primary))" strokeWidth={6} strokeLinejoin="round" opacity={0.15} />

                  {/* Event markers */}
                  {traceData
                    .filter((p) => p.event)
                    .map((p) => {
                      const ev = p.event!;
                      const isSelected = selectedEvent === ev.id;
                      const color = eventColors[ev.type];
                      return (
                        <g
                          key={ev.id}
                          onClick={() => setSelectedEvent(isSelected ? null : ev.id)}
                          className="cursor-pointer"
                        >
                          {/* Vertical event line */}
                          <line
                            x1={scaleX(ev.distance)}
                            y1={scaleY(p.y + ev.loss)}
                            x2={scaleX(ev.distance)}
                            y2={scaleY(p.y)}
                            stroke={color}
                            strokeWidth={2}
                            strokeDasharray={ev.type === "bend" ? "4,3" : "none"}
                          />
                          {/* Marker dot */}
                          <circle
                            cx={scaleX(ev.distance)}
                            cy={scaleY(p.y)}
                            r={isSelected ? 7 : 5}
                            fill={color}
                            stroke="hsl(var(--background))"
                            strokeWidth={2}
                            opacity={isSelected ? 1 : 0.85}
                          />
                          {/* Reflectance spike for connectors */}
                          {ev.reflectance && (
                            <line
                              x1={scaleX(ev.distance)}
                              y1={scaleY(p.y + ev.loss)}
                              x2={scaleX(ev.distance)}
                              y2={scaleY(p.y + ev.loss) - 20}
                              stroke={color}
                              strokeWidth={2}
                              opacity={0.6}
                            />
                          )}
                          {/* Label */}
                          {isSelected && (
                            <g>
                              <rect
                                x={scaleX(ev.distance) - 55}
                                y={scaleY(p.y) - 38}
                                width={110}
                                height={26}
                                rx={4}
                                fill="hsl(var(--background))"
                                stroke={color}
                                strokeWidth={1}
                                opacity={0.95}
                              />
                              <text
                                x={scaleX(ev.distance)}
                                y={scaleY(p.y) - 21}
                                textAnchor="middle"
                                fontSize={9}
                                className="fill-foreground"
                                fontWeight={600}
                              >
                                {ev.label} ({ev.loss} dB)
                              </text>
                            </g>
                          )}
                        </g>
                      );
                    })}
                </svg>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-border/30">
                {Object.entries(eventLabels).map(([type, label]) => (
                  <div key={type} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: eventColors[type] }} />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Controls */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Add Event */}
            <ScrollReveal delay={0.15}>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Add Event</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Event Type</label>
                    <select
                      value={newType}
                      onChange={(e) => setNewType(e.target.value as FiberEvent["type"])}
                      className="w-full bg-muted/30 border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground mono focus:outline-none focus:ring-1 focus:ring-primary/50"
                    >
                      {Object.entries(eventLabels).map(([k, v]) => (
                        <option key={k} value={k}>{v}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Distance (km)</label>
                      <input
                        type="number"
                        value={newDistance}
                        step={0.1}
                        onChange={(e) => setNewDistance(parseFloat(e.target.value) || 0)}
                        className="w-full bg-muted/30 border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground mono focus:outline-none focus:ring-1 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Loss (dB)</label>
                      <input
                        type="number"
                        value={newLoss}
                        step={0.01}
                        onChange={(e) => setNewLoss(parseFloat(e.target.value) || 0)}
                        className="w-full bg-muted/30 border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground mono focus:outline-none focus:ring-1 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Label (optional)</label>
                    <input
                      type="text"
                      value={newLabel}
                      onChange={(e) => setNewLabel(e.target.value)}
                      placeholder="e.g. Splice #4"
                      className="w-full bg-muted/30 border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground mono focus:outline-none focus:ring-1 focus:ring-primary/50"
                    />
                  </div>
                  <button
                    onClick={addEvent}
                    className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Add Event
                  </button>
                </div>

                {/* Fiber attenuation control */}
                <div className="mt-6 pt-4 border-t border-border/30">
                  <label className="text-sm text-muted-foreground mb-1.5 block">Fiber Attenuation (dB/km)</label>
                  <input
                    type="number"
                    value={fiberAttenuation}
                    step={0.01}
                    onChange={(e) => setFiberAttenuation(parseFloat(e.target.value) || 0.2)}
                    className="w-full bg-muted/30 border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground mono focus:outline-none focus:ring-1 focus:ring-primary/50"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Event List & Summary */}
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Event Table</h3>
                <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
                  {[...events].sort((a, b) => a.distance - b.distance).map((ev) => (
                    <div
                      key={ev.id}
                      onClick={() => setSelectedEvent(selectedEvent === ev.id ? null : ev.id)}
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-colors cursor-pointer text-sm ${
                        selectedEvent === ev.id
                          ? "border-primary/40 bg-primary/5"
                          : "border-border/30 hover:border-border/50 bg-muted/10"
                      }`}
                    >
                      <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: eventColors[ev.type] }} />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-foreground truncate">{ev.label}</div>
                        <div className="text-xs text-muted-foreground mono">
                          {ev.distance} km · {ev.loss} dB · {eventLabels[ev.type]}
                        </div>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); removeEvent(ev.id); }}
                        className="text-muted-foreground hover:text-destructive transition-colors text-xs shrink-0"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-4 pt-4 border-t border-border/30 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Fiber Loss</span>
                    <span className="mono text-foreground">{totalFiberLoss.toFixed(2)} dB</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Event Loss</span>
                    <span className="mono text-foreground">{totalEventLoss.toFixed(2)} dB</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold pt-2 border-t border-border/20">
                    <span className="text-foreground">Total Link Loss</span>
                    <span className="mono text-primary">{(totalFiberLoss + totalEventLoss).toFixed(2)} dB</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default OTDRSimulator;
