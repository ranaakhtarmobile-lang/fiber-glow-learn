import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";

const glossaryTerms = [
  { term: "APD", definition: "Avalanche Photodiode — a highly sensitive semiconductor photodetector that uses avalanche multiplication to amplify the signal. Used in long-haul fiber links." },
  { term: "Attenuation", definition: "The reduction of optical signal strength as it travels through fiber, measured in dB/km. Caused by absorption, scattering, and bending losses." },
  { term: "Backscattering", definition: "Light scattered in the reverse direction due to Rayleigh scattering in the fiber core. This is the principle behind OTDR measurements." },
  { term: "Bandwidth", definition: "The data-carrying capacity of a fiber, typically expressed in MHz·km for multimode or as a bit rate (Gbps) for single-mode systems." },
  { term: "BER", definition: "Bit Error Rate — the ratio of erroneously received bits to the total number of transmitted bits. Typical target: 10⁻⁹ to 10⁻¹²." },
  { term: "Buffer", definition: "A protective coating applied over the fiber cladding. Can be tight-buffered (900 µm) for indoor cables or loose-tube for outdoor cables." },
  { term: "Chromatic Dispersion", definition: "Pulse broadening caused by different wavelengths of light traveling at different speeds through the fiber. A limiting factor in long-distance single-mode transmission." },
  { term: "Cladding", definition: "The glass layer surrounding the fiber core with a slightly lower refractive index, creating total internal reflection to confine light within the core. Typically 125 µm diameter." },
  { term: "Cleave", definition: "A controlled break of the fiber end to produce a flat, mirror-like surface perpendicular to the fiber axis. Essential for low-loss splicing." },
  { term: "Connector", definition: "A mechanical device for joining fibers or coupling light into/out of a fiber. Common types: SC, LC, FC, ST, MPO/MTP." },
  { term: "Core", definition: "The central light-carrying region of an optical fiber. Single-mode: ~9 µm diameter; Multimode: 50 µm or 62.5 µm diameter." },
  { term: "Coupler", definition: "A passive device that splits or combines optical signals. Used in PON architectures and fiber sensing systems." },
  { term: "CWDM", definition: "Coarse Wavelength Division Multiplexing — multiplexing technique using 20 nm channel spacing (1270–1610 nm) to carry multiple signals on a single fiber." },
  { term: "Dark Fiber", definition: "Installed but unused optical fiber infrastructure. Often leased by carriers or enterprises for private network deployment." },
  { term: "DBA", definition: "Dynamic Bandwidth Allocation — a method used in PON networks to dynamically assign upstream bandwidth to ONTs based on demand." },
  { term: "dBm", definition: "Decibels relative to one milliwatt. An absolute measure of optical power. 0 dBm = 1 mW." },
  { term: "Dispersion", definition: "The broadening of optical pulses as they travel through fiber, limiting bandwidth and distance. Includes modal, chromatic, and PMD." },
  { term: "DWDM", definition: "Dense Wavelength Division Multiplexing — multiplexing technique using tight channel spacing (0.8 nm / 100 GHz) in the C-band to carry 40–96+ channels per fiber." },
  { term: "EDFA", definition: "Erbium-Doped Fiber Amplifier — an optical amplifier that boosts signals in the C-band (1530–1565 nm) without converting to electrical. Key technology for long-haul networks." },
  { term: "EPON", definition: "Ethernet Passive Optical Network — IEEE 802.3ah standard using Ethernet framing for PON. Widely deployed in Asia." },
  { term: "Ferrule", definition: "The precision cylindrical component in a fiber connector that holds and aligns the fiber end. Typically ceramic (zirconia) with a 2.5 mm or 1.25 mm diameter." },
  { term: "Fusion Splice", definition: "A permanent joint between two fibers made by melting (fusing) the glass ends together with an electric arc. Typical loss: 0.02–0.1 dB." },
  { term: "GPON", definition: "Gigabit Passive Optical Network — ITU-T G.984 standard providing 2.488 Gbps downstream and 1.244 Gbps upstream using GEM encapsulation." },
  { term: "Index of Refraction", definition: "The ratio of the speed of light in vacuum to the speed in a material (n = c/v). Fiber core: ~1.47–1.48; cladding: ~1.46–1.47." },
  { term: "Insertion Loss", definition: "The loss of optical power caused by inserting a component (connector, splice, splitter) into a fiber link. Measured in dB." },
  { term: "LC Connector", definition: "Lucent Connector — a small form factor connector with a 1.25 mm ferrule and push-pull latching. The dominant connector in modern data centers." },
  { term: "Link Budget", definition: "The total allowable optical loss between transmitter and receiver, accounting for fiber attenuation, splices, connectors, splitters, and safety margin." },
  { term: "Macrobend", definition: "A large-radius bend in fiber causing light to escape the core. Minimum bend radius is typically 15–30 mm for standard fiber." },
  { term: "Mechanical Splice", definition: "A fiber joint using a mechanical fixture to align and hold two fiber ends together. Typical loss: 0.1–0.5 dB. Used for quick field repairs." },
  { term: "Microbend", definition: "Small-scale fiber deformations caused by external pressure or poor cabling. Causes localized signal loss by coupling light out of the core." },
  { term: "Modal Dispersion", definition: "Pulse broadening in multimode fiber caused by different light modes (paths) traveling at different speeds. Not present in single-mode fiber." },
  { term: "Multimode Fiber", definition: "Fiber with a large core (50 or 62.5 µm) supporting multiple light modes. Used for short-distance links (<2 km). Types: OM1, OM2, OM3, OM4, OM5." },
  { term: "NA", definition: "Numerical Aperture — a measure of the light-gathering ability of a fiber. NA = √(n₁² − n₂²). Typical values: 0.12–0.50." },
  { term: "OLT", definition: "Optical Line Terminal — the service provider equipment at the central office that manages a PON network. Connects to multiple ONTs via splitters." },
  { term: "ONT", definition: "Optical Network Terminal — the customer-premises device in an FTTH network that converts optical signals to electrical. Also called ONU." },
  { term: "OTDR", definition: "Optical Time-Domain Reflectometer — a test instrument that sends pulses into a fiber and analyzes reflections/backscatter to characterize the link, locating faults, splices, and connectors." },
  { term: "Patch Cord", definition: "A short fiber cable with connectors on both ends, used to connect equipment to patch panels or make cross-connections." },
  { term: "PLC Splitter", definition: "Planar Lightwave Circuit Splitter — a passive device that splits an optical signal into multiple outputs (e.g., 1:8, 1:16, 1:32). Used in PON distribution." },
  { term: "PMD", definition: "Polarization Mode Dispersion — pulse broadening caused by different polarization states traveling at slightly different speeds. Critical in 40G+ systems." },
  { term: "PON", definition: "Passive Optical Network — a fiber access architecture using unpowered splitters to serve multiple customers from a single OLT port." },
  { term: "Return Loss", definition: "The ratio of incident power to reflected power at a connector or splice, measured in dB. Higher values indicate better performance (e.g., >45 dB for APC)." },
  { term: "SC Connector", definition: "Subscriber Connector — a push-pull connector with a 2.5 mm ferrule. Widely used in FTTH (ONT ports) and telecom networks." },
  { term: "Single-mode Fiber", definition: "Fiber with a small core (~9 µm) supporting only one light mode. Used for long-distance, high-bandwidth links. Types: OS1, OS2 (G.652, G.657)." },
  { term: "Splice Closure", definition: "An enclosure that protects fiber splices from environmental damage. Designed for aerial, underground, or buried deployment." },
  { term: "T-CONT", definition: "Transmission Container — a logical entity in GPON that manages upstream bandwidth allocation for an ONT." },
  { term: "Total Internal Reflection", definition: "The complete reflection of light at the core-cladding boundary when the angle of incidence exceeds the critical angle. The fundamental principle of fiber optic waveguiding." },
  { term: "Transceiver", definition: "An optical module combining a transmitter (laser) and receiver (photodetector). Common types: SFP, SFP+, SFP28, QSFP28, QSFP-DD." },
  { term: "WDM", definition: "Wavelength Division Multiplexing — the technique of transmitting multiple wavelengths (channels) simultaneously on a single fiber to increase capacity." },
  { term: "XGS-PON", definition: "10-Gigabit Symmetric PON — ITU-T G.9807.1 standard providing symmetric 9.953 Gbps. Designed to coexist with GPON on the same ODN." },
];

const Glossary = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return glossaryTerms;
    const q = search.toLowerCase();
    return glossaryTerms.filter(
      (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
    );
  }, [search]);

  const grouped = useMemo(() => {
    const map: Record<string, typeof glossaryTerms> = {};
    filtered.forEach((t) => {
      const letter = t.term[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(t);
    });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <>
      <Helmet>
        <title>Fiber Optic Glossary – 50+ Terms & Definitions | Fiber Optic Guide</title>
        <meta name="description" content="Comprehensive fiber optic glossary with 50+ searchable terms covering GPON, OTDR, splicing, connectors, WDM, and more." />
      </Helmet>

      <section className="section-padding pt-28">
        <div className="container-content max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6 mono">
              Reference
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.1]">
              Fiber Optic <span className="text-primary glow-text">Glossary</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Quick reference for {glossaryTerms.length} essential fiber optic terms and definitions.
            </p>
          </ScrollReveal>

          {/* Search */}
          <ScrollReveal delay={0.1}>
            <div className="relative mb-10">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search terms or definitions..."
                className="w-full bg-muted/30 border border-border/50 rounded-xl pl-12 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
              />
              {search && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground mono">
                  {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                </span>
              )}
            </div>
          </ScrollReveal>

          {/* Letter quick-nav */}
          {!search && (
            <ScrollReveal delay={0.15}>
              <div className="flex flex-wrap gap-1.5 mb-8">
                {grouped.map(([letter]) => (
                  <a
                    key={letter}
                    href={`#letter-${letter}`}
                    className="w-8 h-8 rounded-lg bg-muted/30 border border-border/30 flex items-center justify-center text-xs font-semibold text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-colors mono"
                  >
                    {letter}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* Terms */}
          {grouped.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg mb-2">No terms found</p>
              <p className="text-sm">Try a different search query</p>
            </div>
          ) : (
            grouped.map(([letter, terms]) => (
              <div key={letter} id={`letter-${letter}`} className="mb-8">
                <div className="sticky top-16 z-10 bg-background/90 backdrop-blur-sm py-2 mb-3 border-b border-border/30">
                  <span className="text-2xl font-bold text-primary mono">{letter}</span>
                </div>
                <div className="space-y-3">
                  {terms.map((t) => (
                    <div
                      key={t.term}
                      className="glass-card p-4 hover:border-primary/30 transition-colors group"
                    >
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mono mb-1.5">
                        {t.term}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Glossary;
