"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { BarChart3, Microscope, ShieldAlert, ThermometerSnowflake, HelpCircle } from "lucide-react";

export default function SynthesisClient() {
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
          <h1 className="text-5xl md:text-7xl font-display font-light mb-8 max-w-4xl mx-auto">Peptides Research <span className="italic">Synthesis</span></h1>
          <p className="text-secondary font-light max-w-2xl mx-auto text-lg leading-relaxed">
            Eliminating the "Theory Gap" in research peptides through <strong>third-party tested</strong> batch verification and <Link href="/database" className="text-accent hover:underline">HPLC verified peptides</Link> to ensure absolute molecular identity for <strong>research peptides in USA</strong>.
          </p>
        </motion.div>
      </section>

      {/* HPLC Chart Mockup */}
      <Section className="container mx-auto px-4 md:px-6 mb-32">
        <div className="glass-panel p-6 md:p-12 bg-surface/30 relative">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 items-start mb-12 md:mb-16">
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Chromatographic Purity Analysis</h2>
              <p className="text-secondary font-light text-xs md:text-sm max-w-xl">
                <strong>High-Performance Liquid Chromatography (HPLC)</strong> is our primary tool for verifying molecular integrity. 
                Our <strong>HPLC verified research peptides</strong> ensure a single, sharp peak, indicating a high-purity sequence with minimal baseline interference.
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
              We don't just rely on in-house synthesis data. Random batches are sent to independent third-party laboratories for <Link href="/database" className="text-accent hover:underline">Peptide Certificate of Analysis (COA)</Link> cross-verification. Access <a href={atob("aHR0cHM6Ly85OXB1cml0eXBlcHRpZGVzLmNvbS8=")} target="_blank" className="text-accent hover:underline">external batch references</a> to ensure <strong>99% purity online</strong> standards are maintained.
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

      <Section className="container mx-auto px-6 py-24 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-medium mb-4">Analytical Standards</span>
            <h2 className="text-4xl md:text-5xl font-display mb-6">Synthesis Methodology FAQs</h2>
            <p className="text-secondary font-light max-w-xl">
              Deep-dive technical insights into chromatographic isolation, mass mapping, and molecular stabilization.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "What is HPLC verification in peptide research?",
                a: "High-Performance Liquid Chromatography (HPLC) is an analytical technique used to separate, identify, and quantify each component in a mixture. In peptide research, it is used to verify the quantitative purity of a synthesized sequence, ensuring zero synthesis drift."
              },
              {
                q: "Why is Mass Spectrometry (MS) used alongside HPLC?",
                a: "While HPLC verifies purity, Mass Spectrometry (MS) confirms molecular identity by measuring the precise mass-to-charge ratio of the ions. This ensures the synthesized sequence matches the target amino acid blueprint with absolute precision."
              },
              {
                q: "What is the significance of TFA removal in research peptides?",
                a: "Trifluoroacetic acid (TFA) is commonly used during synthesis. High-purity research requires TFA removal (often to <1%) to prevent cellular toxicity in in-vitro models and ensure the peptide's biological activity remains uncompromised."
              },
              {
                q: "Acetate vs. HCl salts: Which is better for research?",
                a: "Most research peptides are provided as Acetate salts, as they are generally more biocompatible with cellular assays than HCl salts, which can significantly alter the pH of the research medium."
              },
              {
                q: "What is the benefit of Lyophilization?",
                a: "Lyophilization (freeze-drying) removes moisture from the peptide while it is in a frozen state. This stabilizes the molecular structure, preventing enzymatic degradation and ensuring a long shelf-life for laboratory use. See our <a href='/protocols' class='text-accent hover:underline'>handling protocols</a> for more details."
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is HPLC verification in peptide research?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "High-Performance Liquid Chromatography (HPLC) is an analytical technique used to separate, identify, and quantify each component in a mixture. In peptide research, it is used to verify the quantitative purity of a synthesized sequence."
              }
            },
            {
              "@type": "Question",
              "name": "Why is Mass Spectrometry (MS) used alongside HPLC?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "While HPLC verifies purity, Mass Spectrometry (MS) confirms molecular identity by measuring the precise mass-to-charge ratio of the ions. This ensures the synthesized sequence matches the target amino acid blueprint."
              }
            },
            {
              "@type": "Question",
              "name": "What is the significance of TFA removal in research peptides?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Trifluoroacetic acid (TFA) is used during synthesis. High-purity research requires TFA removal to prevent cellular toxicity in in-vitro models."
              }
            }
          ]
        }) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
              "name": "Synthesis Methodology",
              "item": "https://research.99puritypeptides.com/synthesis"
            }
          ]
        }) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Peptide Research Synthesis & Analytical Verification",
          "description": "Technical methodology for verifying high-purity research peptides using HPLC, Mass Spectrometry, and Lyophilization standards.",
          "author": {
            "@type": "Organization",
            "name": "99 Purity Research"
          },
          "publisher": {
            "@type": "Organization",
            "name": "99 Purity Research",
            "logo": {
              "@type": "ImageObject",
              "url": "https://research.99puritypeptides.com/99Logo.png"
            }
          }
        }) }}
      />

      <Section className="container mx-auto px-6 py-24 text-center border-t border-border">
        <h2 className="text-3xl font-display mb-8">Rigid Standards for Rigid Research.</h2>
        <p className="text-secondary font-light max-w-2xl mx-auto mb-12">
          Don't compromise your laboratory models with unverified sequences. Reference the industry standard in analytical purity.
        </p>
        <Button 
          onClick={() => {
            const target = atob("aHR0cHM6Ly85OXB1cml0eXBlcHRpZGVzLmNvbS8=");
            window.location.href = target;
          }}
          className="mx-auto"
        >
          Explore Research Sequences
        </Button>
      </Section>
    </div>
  );
}
