"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Link from "next/link";

const mainPages = [
  { name: "Home", path: "/" },
  { name: "Sequence Database", path: "/database" },
  { name: "Synthesis Methodology", path: "/synthesis" },
  { name: "Volumetric Calibration Protocols", path: "/protocols" },
  { name: "Technical Glossary", path: "/glossary" },
  { name: "Terms of Use", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Research Blog", path: "https://99puritypeptides.com/blog/" },
];

const compounds = [
  { name: "GHK-Cu", slug: "ghk-cu" },
  { name: "BPC-157", slug: "bpc-157" },
  { name: "TB-500", slug: "tb-500" },
  { name: "MOTS-c", slug: "mots-c" },
  { name: "SS-31", slug: "ss-31" },
  { name: "Epithalon", slug: "epithalon" },
  { name: "KPV", slug: "kpv" },
  { name: "LL-37", slug: "ll-37" },
  { name: "VIP", slug: "vip" },
  { name: "Thymosin Alpha-1", slug: "thymosin-alpha-1" },
  { name: "Vilon", slug: "vilon" },
  { name: "Vesugen", slug: "vesugen" },
  { name: "Pinealon", slug: "pinealon" },
  { name: "Cortagen", slug: "cortagen" },
];

export default function SitemapClient() {
  return (
    <div className="pt-32 pb-24">
      <Section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-display font-light mb-8">Physical Sitemap</h1>
          <p className="text-secondary font-light max-w-2xl">
            A comprehensive index of all technical resources and sequence monographs within the 99 Purity Research repository.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-accent text-[11px] uppercase tracking-[0.4em] mb-8 border-b border-border pb-4">Core Infrastructure</h2>
            <ul className="space-y-4">
              {mainPages.map((page) => (
                <li key={page.path}>
                  <Link 
                    href={page.path} 
                    className="text-primary hover:text-accent transition-colors font-light text-lg flex items-center gap-3 group"
                  >
                    {page.name}
                    <span className="h-px w-0 group-hover:w-8 bg-accent transition-all duration-500"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-accent text-[11px] uppercase tracking-[0.4em] mb-8 border-b border-border pb-4">Technical Monographs</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {compounds.map((compound) => (
                <li key={compound.slug} className="list-none">
                  <Link 
                    href={`/compounds/${compound.slug}`} 
                    className="text-secondary hover:text-primary transition-colors font-light text-sm"
                  >
                    {compound.name}
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 p-8 border border-border/30 bg-surface/30">
          <p className="text-[10px] uppercase tracking-widest text-muted text-center">
            Last Indexed: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} | Repository Version: 4.0.2
          </p>
        </div>
      </Section>
    </div>
  );
}
