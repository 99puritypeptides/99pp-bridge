"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Calculator, Beaker, Syringe, Info, HelpCircle } from "lucide-react";

export default function ProtocolsClient() {
  const [mg, setMg] = useState<number>(5);
  const [ml, setMl] = useState<number>(2);
  const [targetMcg, setTargetMcg] = useState<number>(250);

  const totalMcg = mg * 1000;
  const unitsPerMl = 100; // Standard insulin syringe units
  const mcgPerUnit = totalMcg / (ml * unitsPerMl);
  const unitsNeeded = targetMcg / mcgPerUnit;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you calculate peptide concentration for research?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Peptide concentration is calculated by dividing the total milligrams (mg) of the lyophilized powder by the volume of diluent (ml) added. For example, 5mg in 2ml results in a concentration of 2.5mg/ml or 25mcg per unit in a standard 100-unit volumetric tool."
        }
      },
      {
        "@type": "Question",
        "name": "How to store lyophilized peptides to prevent degradation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To prevent peptide degradation, lyophilized peptides should be stored in a freezer at -20°C. For long-term preservation, cryogenic storage is recommended to maintain molecular integrity."
        }
      },
      {
        "@type": "Question",
        "name": "What is the role of bacteriostatic water for research prep?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bacteriostatic water (0.9% benzyl alcohol) is the standard diluent for research prep, providing antimicrobial properties that extend the stability of the peptide solution post-reconstitution."
        }
      },
      {
        "@type": "Question",
        "name": "Why is swirling preferred over shaking during reconstitution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Peptides are fragile molecular chains. Shaking can create mechanical stress (denaturation) that fragments the sequence. Gentle swirling protects the structural integrity of the compound."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Peptide Reconstitution Protocol",
    "description": "Standardized volumetric calibration for reconstituting lyophilized research peptides for in-vitro analysis.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Acquire Diluent",
        "text": "Obtain Bacteriostatic Water (0.9% benzyl alcohol) as the primary diluent for research prep."
      },
      {
        "@type": "HowToStep",
        "name": "Calculate Volume",
        "text": "Use the reconstitution calculator to determine the required volume of diluent based on the total mg of lyophilized powder."
      },
      {
        "@type": "HowToStep",
        "name": "Inject Diluent",
        "text": "Inject the calculated volume of diluent into the peptide vial slowly, allowing the water to run down the side of the glass."
      },
      {
        "@type": "HowToStep",
        "name": "Swirl to Dissolve",
        "text": "Gently swirl the vial until the lyophilized powder is completely dissolved. Do not shake."
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://research.99puritypeptides.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Research Protocols",
                "item": "https://research.99puritypeptides.com/protocols"
      }
    ]
  };

  return (
    <div className="pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="container mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 border border-accent/20 bg-accent/5 mb-8">
            <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold">Strictly for In-Vitro Research Use Only</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-light mb-8 max-w-4xl mx-auto">Peptides Research <span className="italic">Protocols</span></h1>
          <p className="text-secondary font-light max-w-2xl mx-auto text-lg leading-relaxed">
            Our <Link href="/database" className="text-accent hover:underline">peptide reconstitution calculator</Link> provides a standardized volumetric matrix for research peptides in USA.
          </p>
        </motion.div>
      </section>

      <Section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Inputs */}
          <div className="glass-panel p-8 md:p-12 bg-surface/30">
            <div className="flex items-center gap-3 mb-10">
              <Calculator className="text-accent" size={20} />
              <h2 className="text-2xl font-display">Reconstitution Calculator</h2>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-muted mb-4">Peptide Quantity (mg)</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" min="1" max="100" step="1" 
                    value={mg} onChange={(e) => setMg(Number(e.target.value))}
                    className="flex-grow accent-accent"
                  />
                  <input 
                    type="number" value={mg} onChange={(e) => setMg(Number(e.target.value))}
                    className="w-20 bg-background border border-border px-3 py-2 text-sm font-light text-primary focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-muted mb-4">Diluent Volume (ml)</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" min="0.5" max="10" step="0.5" 
                    value={ml} onChange={(e) => setMl(Number(e.target.value))}
                    className="flex-grow accent-accent"
                  />
                  <input 
                    type="number" value={ml} onChange={(e) => setMl(Number(e.target.value))}
                    className="w-20 bg-background border border-border px-3 py-2 text-sm font-light text-primary focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-muted mb-4">Target Research Concentration (mcg)</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" min="50" max="2000" step="50" 
                    value={targetMcg} onChange={(e) => setTargetMcg(Number(e.target.value))}
                    className="flex-grow accent-accent"
                  />
                  <input 
                    type="number" value={targetMcg} onChange={(e) => setTargetMcg(Number(e.target.value))}
                    className="w-20 bg-background border border-border px-3 py-2 text-sm font-light text-primary focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-8">
            <div className="glass-panel p-8 md:p-12 border-accent/20 bg-accent/5">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-accent mb-10 flex items-center gap-2">
                <Beaker size={14} /> Analytical Outputs
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="text-4xl font-display text-primary mb-2">
                    {mcgPerUnit.toFixed(1)} <span className="text-lg text-secondary">mcg</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-muted">Per Unit (1/100th ml)</div>
                </div>
                
                <div className="p-6 bg-accent/10 border border-accent/20 rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Syringe className="text-accent" size={18} />
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Volumetric Unit Calibration</span>
                  </div>
                  <div className="text-4xl font-display text-accent mb-2">
                    {unitsNeeded.toFixed(1)} <span className="text-lg">Units</span>
                  </div>
                  <p className="text-[9px] leading-relaxed text-secondary uppercase tracking-widest">
                    Standardized volumetric draw for in-vitro analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 border border-dashed border-border">
              <div className="flex items-start gap-4">
                <Info size={20} className="text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-primary mb-2 font-medium">Experimental Note</h4>
                  <p className="text-[11px] text-secondary font-light leading-relaxed">
                    This matrix is for laboratory calibration purposes only. 99 Purity Research does not provide medical advice or administration protocols for human or animal application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="container mx-auto px-6 py-24 border-t border-border/30 mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-medium mb-4">Laboratory Protocols</span>
            <h2 className="text-4xl md:text-5xl font-display mb-6">Reconstitution {"&"} Handling FAQs</h2>
            <p className="text-secondary font-light max-w-xl">
              Technical guidance on volumetric calibration, diluent selection, and <Link href="/synthesis" className="text-accent hover:underline">sequence stabilization</Link>.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "How do you calculate peptide concentration for research?",
                a: "Peptide concentration is calculated by dividing the total milligrams (mg) of the lyophilized powder by the volume of diluent (ml) added. Our reconstitution calculator automates this for laboratory standardization."
              },
              {
                q: "How to store lyophilized peptides to prevent degradation?",
                a: "To prevent peptide degradation, lyophilized peptides should be stored in a freezer at -20°C. For long-term preservation, cryogenic storage is recommended to maintain molecular integrity."
              },
              {
                q: "What is the role of bacteriostatic water for research prep?",
                a: "Bacteriostatic water (0.9% benzyl alcohol) is the standard diluent for research prep, providing antimicrobial properties that extend the stability of the peptide solution post-reconstitution."
              },
              {
                q: "Why is swirling preferred over shaking during reconstitution?",
                a: "Peptides are fragile molecular chains. Shaking can create mechanical stress (denaturation) that fragments the sequence. Gentle swirling protects the structural integrity of the compound."
              }
            ].map((faq, i) => (
              <div key={i} className="glass-panel p-8 bg-surface/30 border border-border/50 hover:border-accent/30 transition-all duration-500 group">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center text-accent font-mono text-sm group-hover:bg-accent group-hover:text-black transition-all duration-500">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-xl font-display mb-4 text-primary group-hover:text-accent transition-colors">
                      {faq.q}
                    </h3>
                    <p className="text-secondary font-light text-sm leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="container mx-auto px-6 py-24 border-t border-border/30 mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display mb-8">Integrated Research Workflow</h2>
          <p className="text-secondary font-light mb-12 max-w-2xl mx-auto">
            Our <Link href="/protocols" className="text-accent hover:underline">reconstitution calculator</Link> is designed to minimize human error and <strong>prevent peptide degradation</strong> through precise volumetric calibration, 
            ensuring that your <Link href="/synthesis" className="text-accent hover:underline">experimental concentrations</Link> remain consistent across all research models.
          </p>
          <Button href="/database" variant="outline">View Sequence Database</Button>
        </div>
      </Section>
    </div>
  );
}
