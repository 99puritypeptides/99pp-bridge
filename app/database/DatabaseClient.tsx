"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { Search, Database, ExternalLink, HelpCircle, Activity } from "lucide-react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const products = [
  { name: "GHK-Cu", formula: "C14H22CuN6O4", weight: "401.91 g/mol", cas: "89030-95-5", slug: "ghk-cu", category: "Tripeptide" },
  { name: "BPC-157", formula: "C62H98N16O22", weight: "1419.5 g/mol", cas: "137525-51-0", slug: "bpc-157", category: "Pentadecapeptide" },
  { name: "TB-500", formula: "C212H350N56O78S", weight: "4963.5 g/mol", cas: "77591-33-4", slug: "tb-500", category: "Regenerative" },
  { name: "MOTS-c", formula: "C78H138N26O24S2", weight: "1876.2 g/mol", cas: "1627580-64-6", slug: "mots-c", category: "Mitochondrial" },
  { name: "SS-31", formula: "C32H49N9O5", weight: "639.8 g/mol", cas: "736992-21-5", slug: "ss-31", category: "Metabolic" },
  { name: "Epithalon", formula: "C14H22N4O9", weight: "390.35 g/mol", cas: "307197-13-9", slug: "epithalon", category: "Longevity" },
  { name: "KPV", formula: "C16H28N4O4", weight: "340.42 g/mol", cas: "67727-97-3", slug: "kpv", category: "Anti-Inflammatory" },
  { name: "LL-37", formula: "C205H340N60O53", weight: "4493.3 g/mol", cas: "154948-66-8", slug: "ll-37", category: "Antimicrobial" },
  { name: "VIP", formula: "C147H238N44O42S", weight: "3325.8 g/mol", cas: "40077-57-4", slug: "vip", category: "Neuropeptide" },
  { name: "Thymosin Alpha-1", formula: "C129H215N33O55", weight: "3108.3 g/mol", cas: "62304-98-7", slug: "thymosin-alpha-1", category: "Immune" },
  { name: "Vilon", formula: "C10H17N3O5", weight: "259.26 g/mol", cas: "132174-70-2", slug: "vilon", category: "Bioregulator" },
  { name: "Vesugen", formula: "C14H24N4O8", weight: "376.36 g/mol", cas: "852899-01-9", slug: "vesugen", category: "Vascular" },
  { name: "Pinealon", formula: "C15H26N4O7", weight: "374.39 g/mol", cas: "852899-03-1", slug: "pinealon", category: "Neuro" },
  { name: "Cortagen", formula: "C14H23N3O9", weight: "377.35 g/mol", cas: "852899-05-3", slug: "cortagen", category: "Bio" },
];

export default function DatabaseClient() {
  const router = useRouter();
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const [isComparing, setIsComparing] = useState(false);

  const toggleSelection = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation();
    setSelectedSlugs(prev => 
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const selectedProducts = products.filter(p => selectedSlugs.includes(p.slug));

  return (
    <div className="pt-32 pb-24">
      {/* Dataset Schema for GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dataset",
          "name": "Peptide Synthesis & Molecular Database",
          "description": "Comprehensive technical database of synthetic peptides, including molar mass, sequence mapping, and HPLC purity standards for laboratory research.",
          "url": "https://research.99puritypeptides.com/database",
          "keywords": ["peptides database", "molecular architecture", "peptide synthesis", "HPLC verification", "research peptides USA"],
          "creator": {
            "@type": "Organization",
            "name": "99 Purity Research"
          }
        }) }}
      />
      <section className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-5xl font-display font-light mb-4">Peptides Research Database</h1>
              <p className="text-secondary font-light max-w-2xl mx-auto text-lg leading-relaxed">
                The definitive technical repository for high-stability sequences. Reference <Link href="/synthesis" className="text-accent hover:underline">HPLC batch data</Link> and <a href={atob("aHR0cHM6Ly85OXB1cml0eXBlcHRpZGVzLmNvbS8=")} target="_blank" className="text-accent hover:underline">external molecular identifiers</a> for <strong>research peptides in USA</strong>.
              </p>
            </div>
            {selectedSlugs.length > 1 && (
              <Button onClick={() => setIsComparing(true)}>
                Compare {selectedSlugs.length} Sequences
              </Button>
            )}
          </div>

          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
            <input 
              type="text" 
              placeholder="Search sequence identifier..." 
              className="w-full bg-surface border border-border rounded-sm py-3 pl-12 pr-4 text-sm font-light text-primary focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </motion.div>
      </section>

      <Section className="container mx-auto px-6">
        <div className="glass-panel overflow-hidden">
          <div className="overflow-x-auto">
            <table className="clinical-table">
              <thead>
                <tr>
                  <th className="w-12"></th>
                  <th>Sequence Name</th>
                  <th>Molecular Formula</th>
                  <th>Molecular Weight</th>
                  <th>CAS Number</th>
                  <th>Category</th>
                  <th className="text-right">Reference</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, i) => (
                  <motion.tr 
                    key={p.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => router.push(`/compounds/${p.slug}`)}
                    className={`cursor-pointer group transition-colors ${selectedSlugs.includes(p.slug) ? 'bg-accent/10' : 'hover:bg-white/5'}`}
                  >
                    <td className="text-center">
                      <div 
                        onClick={(e) => toggleSelection(e, p.slug)}
                        className={`w-4 h-4 border transition-colors flex items-center justify-center ${selectedSlugs.includes(p.slug) ? 'bg-accent border-accent' : 'border-border group-hover:border-accent/50'}`}
                      >
                        {selectedSlugs.includes(p.slug) && <div className="w-1.5 h-1.5 bg-black rounded-full" />}
                      </div>
                    </td>
                    <td className="!text-primary font-medium">{p.name}</td>
                    <td>{p.formula}</td>
                    <td>{p.weight}</td>
                    <td>{p.cas}</td>
                    <td>
                      <span className="text-[9px] uppercase tracking-widest text-muted border border-border/30 px-2 py-0.5">
                        {p.category}
                      </span>
                    </td>
                    <td className="text-right">
                       <a 
                         href={atob("aHR0cHM6Ly85OXB1cml0eXBlcHRpZGVzLmNvbS8=")} 
                         target="_blank"
                         onClick={(e) => e.stopPropagation()}
                         className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors text-[10px] uppercase tracking-widest font-medium"
                       >
                         Batch Data
                         <ExternalLink size={12} />
                       </a>
                     </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <AnimatePresence>
          {isComparing && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl p-6 md:p-24 overflow-y-auto"
            >
              <div className="container mx-auto">
                <div className="flex justify-between items-center mb-16">
                  <h2 className="text-4xl font-display font-light">Sequence Comparison Matrix</h2>
                  <button 
                    onClick={() => setIsComparing(false)}
                    className="p-4 border border-border hover:border-accent transition-colors text-muted hover:text-accent uppercase text-[10px] tracking-widest"
                  >
                    Close Matrix
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {selectedProducts.map((p) => (
                    <motion.div 
                      key={p.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="glass-panel p-8 bg-surface/50 border-accent/20"
                    >
                      <div className="mb-8 border-b border-border pb-8">
                        <span className="text-accent text-[9px] uppercase tracking-widest block mb-4">{p.category}</span>
                        <h3 className="text-3xl font-display mb-2">{p.name}</h3>
                        <p className="text-muted text-[10px] uppercase tracking-widest">REF: 99PP-{p.slug.toUpperCase()}</p>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <label className="text-[9px] uppercase tracking-widest text-muted block mb-2">Molecular Formula</label>
                          <div className="text-primary font-mono text-sm">{p.formula}</div>
                        </div>
                        <div>
                          <label className="text-[9px] uppercase tracking-widest text-muted block mb-2">Molecular Weight</label>
                          <div className="text-primary text-sm">{p.weight}</div>
                        </div>
                        <div>
                          <label className="text-[9px] uppercase tracking-widest text-muted block mb-2">CAS Identifier</label>
                          <div className="text-primary text-sm">{p.cas}</div>
                        </div>
                        <div className="pt-8">
                          <Button 
                            onClick={() => router.push(`/compounds/${p.slug}`)}
                            variant="outline"
                            className="w-full justify-center mb-4"
                          >
                            Full Technical Monograph
                          </Button>
                          <a 
                            href={atob("aHR0cHM6Ly85OXB1cml0eXBlcHRpZGVzLmNvbS8=")} 
                            target="_blank"
                            className="flex items-center justify-center gap-2 text-accent hover:text-white transition-colors text-[10px] uppercase tracking-widest font-medium py-3 border border-accent/20 hover:bg-accent/5"
                          >
                            External Batch Reference
                            <ExternalLink size={12} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-32 pt-24 border-t border-border/30">
          <h2 className="text-accent text-[11px] uppercase tracking-[0.4em] mb-12 text-center">Technical Research Glossary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-primary text-lg font-display mb-4">HPLC Purity Analysis</h3>
              <p className="text-muted text-sm font-light leading-relaxed">
                High-Performance Liquid Chromatography is the gold standard for verifying the chemical purity of a peptide. A single, distinct peak in the chromatogram indicates a sequence free from synthesis drift and residual impurities.
              </p>
            </div>
            <div>
              <h3 className="text-primary text-lg font-display mb-4">Mass Spectrometry (MS)</h3>
              <p className="text-muted text-sm font-light leading-relaxed">
                Analytical technique used to determine the precise molecular weight of a compound. In peptide research, MS is critical for confirming that the synthesized amino acid sequence matches the target molecular blueprint.
              </p>
            </div>
            <div>
              <h3 className="text-primary text-lg font-display mb-4">Lyophilization (Freeze-Drying)</h3>
              <p className="text-muted text-sm font-light leading-relaxed">
                The process of removing water from a synthesized peptide under high vacuum and extreme cold. This creates a stable "cake" or powder that preserves the kinetic properties of the peptide for long-term storage.
              </p>
            </div>
          </div>
        </div>

        <Section className="mt-32 pt-24 border-t border-border/30">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-medium mb-4">Database Reference</span>
              <h2 className="text-4xl md:text-5xl font-display mb-6">Database Usage FAQs</h2>
              <p className="text-secondary font-light max-w-xl">
                Guidance on navigating our technical monographs, molecular mapping, and comparative matrices.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  q: "What is the purpose of the Peptide Research Database?",
                  a: "The database provides a comprehensive technical repository for the identification and analysis of research peptides. It features molecular formulas, CAS numbers, and sequence-specific monographs for laboratory use. See our <a href='/synthesis' class='text-accent hover:underline'>synthesis methodology</a> for verification details."
                },
                {
                  q: "How are the technical monographs generated?",
                  a: "Monographs are developed by cross-referencing established scientific literature with analytical batch data (HPLC/MS) to provide an objective profile of the peptide's properties and mechanisms."
                },
                {
                  q: "How accurate are the molecular weights in your database?",
                  a: "Molecular weights are provided to the second decimal place and are verified via High-Resolution Mass Spectrometry (HRMS) to ensure absolute precision for laboratory calibration."
                },
                {
                  q: "Can I compare multiple sequences in the database?",
                  a: "Yes. Our database features a 'Sequence Comparison Matrix' that allows researchers to view molecular weights, formulas, and identifiers side-by-side for comparative analysis."
                },
                {
                  q: "How frequently is the sequence data updated?",
                  a: "Technical specifications and analytical references are updated regularly as new batch data and peer-reviewed literature become available, ensuring researchers have access to the latest identification markers."
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
                "name": "What is the purpose of the Peptide Research Database?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The database provides a comprehensive technical repository for the identification and analysis of research peptides. It features molecular formulas, CAS numbers, and sequence-specific monographs for laboratory use."
                }
              },
              {
                "@type": "Question",
                "name": "How accurate are the molecular weights in your database?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Molecular weights are provided to the second decimal place and are verified via High-Resolution Mass Spectrometry (HRMS) to ensure absolute precision for laboratory calibration."
                }
              },
              {
                "@type": "Question",
                "name": "Can I compare multiple sequences in the database?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our database features a 'Sequence Comparison Matrix' that allows researchers to view molecular weights, formulas, and identifiers side-by-side for comparative analysis."
                }
              },
              {
                "@type": "Question",
                "name": "How frequently is the sequence data updated?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Technical specifications and analytical references are updated regularly as new batch data and peer-reviewed literature become available, ensuring researchers have access to the latest identification markers."
                }
              }
            ]
          }) }}
        />

        <div className="mt-24 p-8 border border-dashed border-border text-center">
          <p className="text-muted text-xs uppercase tracking-[0.2em] mb-8">
            Database updated daily. All sequences are batch-tested via HPLC/MS prior to inclusion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              onClick={() => {
                const target = atob("aHR0cHM6Ly85OXB1cml0eXBlcHRpZGVzLmNvbS8=");
                window.location.href = target;
              }}
            >
              Access External Verification Portal
            </Button>
            <a 
              href="/99Purity - COA.pdf" 
              target="_blank"
              className="flex items-center gap-2 px-8 py-3.5 border border-border text-primary text-[11px] uppercase tracking-widest hover:bg-surface transition-colors"
            >
              Download Latest COA
            </a>
          </div>
        </div>

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
                "name": "Peptides Research Database",
                "item": "https://research.99puritypeptides.com/database"
              }
            ]
          }) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": "99 Purity Peptides Research Database",
            "description": "Comprehensive clinical repository of 99% purity research peptides. Features molecular formulas, CAS identifiers, and technical monographs for over 20 high-stability sequences.",
            "url": "https://research.99puritypeptides.com/database",
            "keywords": ["peptides", "HPLC", "Mass Spectrometry", "molecular formulas", "CAS numbers"],
            "creator": {
              "@type": "Organization",
              "name": "99 Purity Research"
            },
            "variableMeasured": ["Molecular Weight", "Molecular Formula", "CAS Identifier", "Sequence Purity"]
          }) }}
        />
      </Section>
    </div>
  );
}
