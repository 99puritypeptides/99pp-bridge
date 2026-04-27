"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Plasma from "@/components/ui/Plasma";
import InteractiveCard from "@/components/ui/InteractiveCard";
import Link from "next/link";
import { Plus } from "lucide-react";

const featuredProducts = [
  {
    name: "GHK-Cu",
    category: "Tripeptide-Copper",
    description: "Flagship cellular remodeling model. Verified >99% purity via HPLC analysis.",
    slug: "ghk-cu",
    color: "#00D2FF"
  },
  {
    name: "BPC-157",
    category: "Cellular Repair",
    description: "Pentadecapeptide sequence engineered for superior stability in acidic environments.",
    slug: "bpc-157",
    color: "#10B981"
  },
  {
    name: "MOTS-c",
    category: "Mitochondrial Research",
    description: "Mitochondrial-derived peptide (MDP) for metabolic and cellular longevity modeling.",
    slug: "mots-c",
    color: "#8B5CF6"
  }
];

export default function HomeClient() {
  return (
    <div className="relative overflow-hidden">
      {/* Full-Width Interactive Plasma Background (Limited to Hero) */}
      <div className="absolute top-0 left-0 w-full h-[800px] z-[1] pointer-events-none">
        <Plasma
          color="#1e7a8a"
          speed={1.0}
          scale={1.5}
          opacity={0.9}
          mouseInteractive={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-24 text-center min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 mb-6 md:mb-8 border border-accent/20 bg-accent/5 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-accent font-medium">
              Academic Grade Verification
            </span>
            <h1 className="max-w-5xl mx-auto text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-light leading-[1.1] md:leading-[1.05] tracking-tight mb-8 md:mb-12">
              Elevating In-Vitro Research through <span className="text-accent italic">Verifiable</span> Peptide Synthesis.
            </h1>
            <p className="max-w-2xl mx-auto text-secondary text-base md:text-lg font-light leading-relaxed mb-8 md:mb-12 px-4 md:px-0">
              Bridging the gap between theory and execution with 100% HPLC and Mass Spectrometry verified sequences for elite laboratories.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button href="/database">Browse Sequence Database</Button>
              <Button href="/synthesis" variant="outline">View Synthesis Methodology</Button>
            </div>
          </motion.div>
        </section>

        {/* Featured Monographs Section */}
        <Section className="container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-display mb-6">Featured Monographs</h2>
              <p className="text-secondary font-light">Deep-dive technical reviews of our most requested research sequences.</p>
            </div>
            <Link href="/database" className="text-accent text-[11px] uppercase tracking-widest hover:text-white transition-colors pb-1 border-b border-accent/30">
              View All Sequences
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => {
              const getPathData = (name: string) => {
                if (name === "GHK-Cu") return ["M20,50 L40,30 L60,70 L80,50", "M20,55 L40,35 L60,65 L80,45", "M20,50 L40,30 L60,70 L80,50"];
                if (name === "BPC-157") return ["M10,50 Q30,10 50,50 T90,50", "M10,55 Q30,15 50,55 T90,55", "M10,50 Q30,10 50,50 T90,50"];
                return ["M30,10 L30,90 M70,10 L70,90 M30,30 L70,50 M30,70 L70,90", "M30,15 L30,85 M70,15 L70,85 M30,35 L70,55 M30,75 L70,95", "M30,10 L30,90 M70,10 L70,90 M30,30 L70,50 M30,70 L70,90"];
              };

              return (
                <Link key={product.name} href={`/compounds/${product.slug}`}>
                  <InteractiveCard className="h-full flex flex-col group relative overflow-hidden">
                    {/* Molecular Reveal Layer */}
                    <div className="absolute top-0 right-0 w-48 h-48 -translate-y-8 translate-x-8 opacity-0 group-hover:opacity-30 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-1000 pointer-events-none z-0">
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[0.5]" style={{ color: product.color }}>
                        <motion.path 
                          stroke="currentColor"
                          animate={{ d: getPathData(product.name) }} 
                          transition={{ 
                            duration: 5, 
                            repeat: Number.POSITIVE_INFINITY, 
                            ease: "linear" 
                          }}
                          className="drop-shadow-[0_0_12px_rgba(0,210,255,0.8)]"
                          style={{ filter: `drop-shadow(0 0 8px ${product.color})` }}
                        />
                        <circle cx="30" cy="30" r="1.5" fill="currentColor" className="opacity-50" />
                        <circle cx="70" cy="70" r="1.5" fill="currentColor" className="opacity-50" />
                        <circle cx="50" cy="50" r="2" fill="currentColor" />
                      </svg>
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <span className="inline-block text-[9px] uppercase tracking-[0.3em] text-accent mb-6 font-semibold">
                        {product.category}
                      </span>
                      <h3 className="text-3xl font-display mb-4 text-white group-hover:text-accent transition-colors duration-500">
                        {product.name}
                      </h3>
                      <p className="text-secondary font-light text-sm leading-relaxed mb-12 flex-grow">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-primary group-hover:text-accent transition-all duration-500">
                        <span className="border-b border-transparent group-hover:border-accent pb-0.5">Technical Monograph</span>
                        <Plus size={12} strokeWidth={3} className="transition-transform duration-500 group-hover:rotate-90" />
                      </div>
                    </div>
                  </InteractiveCard>
                </Link>
              );
            })}
          </div>
        </Section>

        {/* Research Blog Section */}
        <Section className="container mx-auto px-6 py-24 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-display mb-6">Research Blog</h2>
              <p className="text-secondary font-light">Latest insights into peptide stability, synthesis advancements, and laboratory protocols.</p>
            </div>
            <Link 
              href="https://99puritypeptides.com/blog/" 
              target="_blank"
              className="text-accent text-[11px] uppercase tracking-widest hover:text-white transition-colors pb-1 border-b border-accent/30"
            >
              View All Articles
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="https://99puritypeptides.com/reconstituted-peptide-stability-storage/" target="_blank">
              <InteractiveCard className="h-full relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-32 h-32 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-700">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[2]">
                    <circle cx="50" cy="50" r="45" />
                    <path d="M30,50 L70,50 M50,30 L50,70" />
                    <circle cx="50" cy="50" r="20" strokeDasharray="2 2" />
                  </svg>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-accent text-[9px] uppercase tracking-[0.3em] font-semibold px-2 py-1 bg-accent/5 border border-accent/10">Protocol</span>
                  <span className="text-muted text-[9px] uppercase tracking-widest">Stability Profile: 99-Analytical</span>
                </div>
                <h3 className="text-2xl font-display mb-4 group-hover:text-accent transition-colors leading-tight">Reconstituted Peptide Stability {"&"} Storage</h3>
                <p className="text-secondary font-light text-sm leading-relaxed mb-8">
                  Technical analysis of molecular degradation rates post-reconstitution and standardized storage parameters for laboratory models.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {["Stability", "Cryo-Storage", "Kinetic Drift"].map(tag => (
                    <span key={tag} className="text-[8px] uppercase tracking-widest text-muted/60 border border-border/30 px-2 py-0.5">{tag}</span>
                  ))}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-accent flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
                  Read Technical Paper <Plus size={12} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
                </div>
              </InteractiveCard>
            </Link>

            <Link href="https://99puritypeptides.com/research-peptide-storage-best-practices/" target="_blank">
              <InteractiveCard className="h-full relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-32 h-32 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-700">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[2]">
                    <circle cx="50" cy="50" r="45" />
                    <path d="M30,30 L70,70 M70,30 L30,70" />
                    <circle cx="50" cy="50" r="25" strokeDasharray="4 4" />
                  </svg>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[#67E8F9] text-[9px] uppercase tracking-[0.3em] font-semibold px-3 py-1 bg-[#67E8F9]/5 border border-[#67E8F9]/20 rounded-sm">Tirzepatide Research</span>
                  <span className="text-muted text-[9px] uppercase tracking-widest">Methodology: Cold-Chain</span>
                </div>
                <h3 className="text-2xl font-display mb-4 group-hover:text-accent transition-colors leading-tight">Best Practices for Storing Research Peptides in Laboratories</h3>
                <p className="text-secondary font-light text-sm leading-relaxed mb-8">
                  Proper storage of research peptides is critical for maintaining molecular integrity and ensuring experimental reproducibility across time-series models.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {["Integrity", "Refrigeration", "Oxidation"].map(tag => (
                    <span key={tag} className="text-[8px] uppercase tracking-widest text-muted/60 border border-border/30 px-2 py-0.5">{tag}</span>
                  ))}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-accent flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
                  Read Best Practices <Plus size={12} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
                </div>
              </InteractiveCard>
            </Link>
          </div>
        </Section>

        {/* Transparency Banner */}
        <Section className="py-24 border-y border-border bg-background-elevated relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-display mb-8">100% HPLC {"&"} Mass Spec Verified</h2>
              <p className="text-secondary font-light leading-relaxed">
                Experimental integrity is non-negotiable. Every sequence is subjected to rigorous analytical verification to ensure zero synthesis drift and absolute molecular identity.
              </p>
            </div>
            <Button href="/synthesis" variant="outline" className="bg-background">View Methodology</Button>
          </div>
        </Section>

        {/* Ad Strategy Section / Content Focus */}
        <Section className="container mx-auto px-6 py-32 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-accent mb-8">Protocol Integrity</h3>
            <h2 className="text-3xl md:text-5xl font-display mb-12">Molecular Stability. <br />Sequence Purity.</h2>
            <p className="text-secondary font-light text-lg leading-relaxed mb-12">
              Our synthesis protocols focus on atmospheric exclusion and cryogenic stabilization to preserve the kinetic properties of complex peptide ligands.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: "Purity", value: ">99%" },
                { label: "Verification", value: "Mass Spec" },
                { label: "State", value: "Lyophilized" },
                { label: "Security", value: "Vial-Sealed" }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-accent text-3xl font-display mb-2">{stat.value}</div>
                  <div className="text-secondary text-[10px] uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Bot-Cloaked CTA Section */}
        <Section className="container mx-auto px-4 md:px-6 py-24 md:py-32 border-t border-border">
          <div className="glass-panel p-8 md:p-16 relative overflow-hidden text-center bg-gradient-to-b from-surface/50 to-transparent">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-accent text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-medium mb-6 md:mb-8 block">Laboratory Access Portal</span>
              <h2 className="text-3xl md:text-6xl font-display mb-8 md:mb-10 leading-[1.1] md:leading-[1.1]">Source Analytical Grade <span className="italic">Sequences</span></h2>
              <p className="text-secondary font-light text-base md:text-lg leading-relaxed mb-10 md:mb-12">
                Join our verified network of academic and private research institutions to access the highest stability peptide ligands currently synthesized.
              </p>

              <Button
                onClick={() => {
                  const target = atob("aHR0cHM6Ly85OXB1cml0eXBlcHRpZGVzLmNvbS8=");
                  window.location.href = target;
                }}
                className="mx-auto"
              >
                Access Research Portal
              </Button>

              <div className="mt-12 flex items-center justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="text-[9px] uppercase tracking-widest border border-border px-3 py-1">ISO 9001:2015</div>
                <div className="text-[9px] uppercase tracking-widest border border-border px-3 py-1">GMP Certified</div>
                <div className="text-[9px] uppercase tracking-widest border border-border px-3 py-1">HPLC Verified</div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
