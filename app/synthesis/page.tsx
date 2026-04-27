"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { BarChart3, Microscope, ShieldAlert, ThermometerSnowflake } from "lucide-react";

export default function Synthesis() {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-medium mb-8 block">Analytical Verification</span>
          <h1 className="text-5xl md:text-7xl font-display font-light mb-8 max-w-4xl mx-auto">Synthesis {"&"} <span className="italic">Analytical</span> Integrity</h1>
          <p className="text-secondary font-light max-w-2xl mx-auto text-lg leading-relaxed">
            Eliminating the "Theory Gap" in research through rigid batch-testing and mass spectrometry fingerprinting.
          </p>
        </motion.div>
      </section>

      {/* HPLC Chart Mockup */}
      {/* HPLC Chart Mockup */}
      <Section className="container mx-auto px-4 md:px-6 mb-32">
        <div className="glass-panel p-6 md:p-12 bg-surface/30 relative">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 items-start mb-12 md:mb-16">
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Chromatographic Purity Analysis</h2>
              <p className="text-secondary font-light text-xs md:text-sm max-w-xl">
                High-Performance Liquid Chromatography (HPLC) is our primary tool for verifying molecular integrity. 
                A single, sharp peak indicates a high-purity sequence with minimal baseline interference.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-left md:text-right">
                <div className="text-accent text-xl md:text-2xl font-display">99.82%</div>
                <div className="text-muted text-[9px] uppercase tracking-widest">Relative Purity</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[200px] md:h-[300px] w-full border-l border-b border-border/50 flex items-end">
            {/* Legend / Tooltips */}
            <div className="absolute top-0 right-0 p-4 hidden md:block">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-accent"></div>
                <span className="text-[10px] text-primary uppercase tracking-widest">Main Compound</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border border-border border-dashed"></div>
                <span className="text-[10px] text-muted uppercase tracking-widest">Baseline Noise</span>
              </div>
            </div>

            <svg viewBox="0 0 1000 300" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              {/* Annotation */}
              <g className="opacity-0 md:opacity-100 transition-opacity duration-1000">
                <text x="450" y="30" fill="#00D2FF" fontSize="12" className="font-display uppercase tracking-widest text-[10px]">Pure Sequence Peak</text>
                <line x1="450" y1="40" x2="450" y2="45" stroke="#00D2FF" strokeWidth="1" />
              </g>
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M 0 280 L 100 275 L 200 278 L 300 270 L 400 275 L 450 50 L 500 275 L 600 278 L 700 272 L 800 276 L 900 280 L 1000 280"
                fill="none"
                stroke="#00D2FF"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              <path d="M 0 280 L 100 279 L 200 280 L 300 278 L 400 280" fill="none" stroke="#27272A" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
            <div className="absolute left-0 bottom-0 -translate-x-full pr-2 md:pr-4 text-[8px] md:text-[10px] text-muted rotate-[-90deg] origin-right whitespace-nowrap">
              Absorbance (mAU)
            </div>
            <div className="absolute left-0 bottom-0 translate-y-full pt-4 w-full text-center text-[8px] md:text-[10px] text-muted tracking-widest uppercase">
              Retention Time (Minutes)
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center border-t border-border pt-12">
            <div>
              <h4 className="text-primary text-[10px] md:text-xs uppercase tracking-widest mb-2 font-medium">Main Peak</h4>
              <p className="text-secondary text-[10px] md:text-[11px] font-light">Retention @ 8.42 min</p>
            </div>
            <div className="border-y md:border-y-0 md:border-x border-border/30 py-6 md:py-0">
              <h4 className="text-primary text-[10px] md:text-xs uppercase tracking-widest mb-2 font-medium">Drift Check</h4>
              <p className="text-secondary text-[10px] md:text-[11px] font-light">Zero Baseline Noise</p>
            </div>
            <div>
              <h4 className="text-primary text-[10px] md:text-xs uppercase tracking-widest mb-2 font-medium">Impurity Total</h4>
              <p className="text-secondary text-[10px] md:text-[11px] font-light">&lt;0.18% Identified</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust Pillars */}
      <div className="bg-background-elevated py-32 border-y border-border">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24">
          <Section>
            <div className="h-12 w-12 bg-accent/10 border border-accent/20 rounded-sm flex items-center justify-center mb-8">
              <ThermometerSnowflake className="text-accent" size={24} />
            </div>
            <h3 className="text-3xl font-display mb-6">Cryogenic Lyophilization</h3>
            <p className="text-secondary font-light leading-relaxed mb-8">
              Our peptides are subjected to rigid freeze-drying protocols under deep vacuum. This process removes all moisture, effectively "locking" the molecular structure and preventing enzymatic or thermal degradation during transport.
            </p>
            <ul className="space-y-4">
              <li className="clinical-list-item">Solid-state stabilization</li>
              <li className="clinical-list-item">Moisture content &lt;2%</li>
            </ul>
          </Section>

          <Section delay={0.1}>
            <div className="h-12 w-12 bg-accent/10 border border-accent/20 rounded-sm flex items-center justify-center mb-8">
              <ShieldAlert className="text-accent" size={24} />
            </div>
            <h3 className="text-3xl font-display mb-6">Vacuum Sealing</h3>
            <p className="text-secondary font-light leading-relaxed mb-8">
              Every vial is sealed in an oxygen-free, nitrogen-purged environment. This eliminates atmospheric oxidation—the single greatest cause of peptide chain fragmentation in laboratory research.
            </p>
            <ul className="space-y-4">
              <li className="clinical-list-item">Inert atmosphere preservation</li>
              <li className="clinical-list-item">UV-resistant pharmaceutical glass</li>
            </ul>
          </Section>

          <Section delay={0.2}>
            <div className="h-12 w-12 bg-accent/10 border border-accent/20 rounded-sm flex items-center justify-center mb-8">
              <Microscope className="text-accent" size={24} />
            </div>
            <h3 className="text-3xl font-display mb-6">Third-Party Verification</h3>
            <p className="text-secondary font-light leading-relaxed mb-8">
              We don't just rely on in-house synthesis data. Random batches are sent to independent third-party laboratories for COA (Certificate of Analysis) cross-verification.
            </p>
            <Button 
              onClick={() => {
                const target = atob("aHR0cHM6Ly85OXB1cml0eXBlcHRpZGVzLmNvbS8=");
                window.location.href = target;
              }}
              variant="outline"
            >
              Request Lab COA
            </Button>
          </Section>

          <Section delay={0.3}>
            <div className="h-12 w-12 bg-accent/10 border border-accent/20 rounded-sm flex items-center justify-center mb-8">
              <BarChart3 className="text-accent" size={24} />
            </div>
            <h3 className="text-3xl font-display mb-6">Mass Spec Mapping</h3>
            <p className="text-secondary font-light leading-relaxed mb-8">
              Our Mass Spectrometry identification maps the precise molecular weight of every peptide sequence, confirming that the synthesis matches the intended amino acid profile with zero drift.
            </p>
            <ul className="space-y-4">
              <li className="clinical-list-item">Molecular weight fingerprinting</li>
              <li className="clinical-list-item">Isobaric purity confirmation</li>
            </ul>
          </Section>
        </div>
      </div>

      <Section className="container mx-auto px-6 py-24 text-center border-t border-border">
        <h2 className="text-3xl font-display mb-8">Rigid Standards for Rigid Research.</h2>
        <p className="text-secondary font-light max-w-2xl mx-auto mb-12">
          Don't compromise your laboratory models with unverified sequences. Source from the industry standard in analytical purity.
        </p>
        <Button 
          onClick={() => {
            const target = atob("aHR0cHM6Ly85OXB1cml0eXBlcHRpZGVzLmNvbS8=");
            window.location.href = target;
          }}
          className="mx-auto"
        >
          View Verified Catalog
        </Button>
      </Section>
    </div>
  );
}
