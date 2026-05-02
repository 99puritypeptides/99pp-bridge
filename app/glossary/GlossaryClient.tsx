"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Book, Search, Info } from "lucide-react";
import { useState } from "react";

const glossaryTerms = [
  {
    term: "HPLC (High-Performance Liquid Chromatography)",
    definition: "An analytical technique used to separate, identify, and quantify each component in a mixture. In peptide research, it is the gold standard for verifying sequence purity (>99%).",
    category: "Analytical"
  },
  {
    term: "Mass Spectrometry (MS)",
    definition: "An analytical tool used to measure the mass-to-charge ratio of ions. It confirms the absolute molecular identity and weight of a synthetic peptide sequence.",
    category: "Analytical"
  },
  {
    term: "Lyophilization",
    definition: "A dehydration process (freeze-drying) used to preserve peptides in a stable, solid state. It involves freezing the material and then reducing the surrounding pressure to allow the frozen water to sublime directly from the solid phase to the gas phase.",
    category: "Synthesis"
  },
  {
    term: "Sequence Identity",
    definition: "The exact arrangement of amino acids in a peptide chain. Verified through MS/MS fragmentation to ensure the synthetic product matches the target research sequence.",
    category: "Molecular"
  },
  {
    term: "Molar Mass",
    definition: "The mass of a given substance divided by the amount of substance. For peptides, precise molar mass (g/mol) is critical for calculating volumetric concentrations during reconstitution.",
    category: "Molecular"
  },
  {
    term: "Bacteriostatic Water",
    definition: "Sterile water containing 0.9% benzyl alcohol as a preservative. Used in laboratory settings to reconstitute lyophilized peptides for multi-use experimental vials.",
    category: "Reconstitution"
  },
  {
    term: "Peptide Bioregulator",
    definition: "Short-chain peptides (typically 2-4 amino acids) that act as epigenetic modulators to normalize gene expression and cellular function in specific tissues.",
    category: "Molecular"
  },
  {
    term: "Amino Acid (AA)",
    definition: "Organic compounds that combine to form proteins and peptides. The sequence of AAs determines the specific biological activity of the resulting peptide.",
    category: "Molecular"
  },
  {
    term: "Acetate Content",
    definition: "The percentage of acetic acid remaining in a peptide after purification. Most research peptides are provided as acetate salts to maintain stability and solubility.",
    category: "Synthesis"
  },
  {
    term: "Net Peptide Content",
    definition: "The actual weight of the peptide sequence in a vial, excluding moisture, salts (like acetate), and counter-ions. Critical for precise experimental dosing.",
    category: "Analytical"
  }
];

export default function GlossaryClient() {
  const [search, setSearch] = useState("");

  const filteredTerms = glossaryTerms.filter(t => 
    t.term.toLowerCase().includes(search.toLowerCase()) || 
    t.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <Section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Book size={20} className="text-accent" />
              <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-medium">Research Terminology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-light mb-8">Technical Glossary</h1>
            <p className="text-xl text-secondary font-light leading-relaxed mb-12 max-w-2xl">
              A comprehensive repository of analytical, synthetic, and molecular terminology used in high-purity peptide research.
            </p>

            {/* Search Bar */}
            <div className="relative mb-16">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted" size={18} />
              <input
                type="text"
                placeholder="Search research terminology..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-surface border border-border/50 p-6 pl-16 rounded-sm focus:outline-none focus:border-accent/50 transition-colors text-primary font-light"
              />
            </div>
          </motion.div>

          <div className="space-y-12">
            {filteredTerms.map((item, i) => (
              <motion.div
                key={item.term}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-border/30 pb-12 group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-full md:w-1/3">
                    <span className="text-[9px] uppercase tracking-widest text-accent mb-2 block">{item.category}</span>
                    <h3 className="text-2xl font-display text-primary group-hover:text-accent transition-colors">{item.term}</h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-secondary font-light leading-relaxed text-sm md:text-base">
                      {item.definition}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-20 border border-dashed border-border rounded-sm">
              <p className="text-muted italic">No matching terminology found in the research database.</p>
            </div>
          )}
        </div>
      </Section>

      <Section className="mt-32">
        <div className="max-w-4xl mx-auto p-12 bg-surface border border-border rounded-sm relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="p-4 bg-accent/10 rounded-full">
              <Info className="text-accent" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-display mb-2">Require further technical clarification?</h3>
              <p className="text-secondary font-light text-sm leading-relaxed">
                Our synthesis methodology and <Link href="/protocols" className="text-accent hover:underline">calibration protocols</Link> provide deeper insights into the rigorous standards applied to every sequence.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
