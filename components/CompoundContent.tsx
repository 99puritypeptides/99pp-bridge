"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Database, ShieldCheck, Activity, FileText } from "lucide-react";

export default function CompoundContent({ data, slug, productSchema, breadcrumbSchema }: any) {
  return (
    <div className="pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article className="container mx-auto px-6 max-w-4xl">
        {/* Visual Breadcrumbs */}
        <nav className="mb-8 flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="opacity-30">/</span>
          <Link href="/database" className="hover:text-accent transition-colors">Database</Link>
          <span className="opacity-30">/</span>
          <span className="text-primary">{data.name}</span>
        </nav>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 pb-16 border-b border-border relative"
        >
          {/* Authority Badge */}
          <div className="absolute top-0 right-0 hidden md:flex flex-col items-end gap-2">
            <div className="flex items-center gap-2 px-3 py-1 border border-accent/20 bg-accent/5 rounded-sm">
              <ShieldCheck size={12} className="text-accent" />
              <span className="text-[9px] uppercase tracking-widest text-accent font-bold">Analytical Oversight</span>
            </div>
            <span className="text-[8px] uppercase tracking-widest text-muted">Verified ISO-9001:2015</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-medium">Compound Monograph</span>
            <span className="h-px w-12 bg-border"></span>
            <span className="text-muted text-[10px] uppercase tracking-widest">REF: 99PP-{slug.toUpperCase()}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-light mb-8">{data.name}</h1>
          <p className="text-xl text-secondary font-light leading-relaxed">
            {data.fullTitle}
          </p>
        </motion.header>

        <Section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Database size={20} className="text-accent" />
            <h2 className="text-2xl font-display">Molecular Architecture</h2>
          </div>
          <p className="text-secondary font-light leading-relaxed mb-8">
            {data.architecture}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-surface border border-border rounded-sm">
              <h4 className="text-accent text-[10px] uppercase tracking-widest mb-4">Sequence Purity</h4>
              <p className="text-primary text-sm font-light">
                Stringently verified via High-Performance Liquid Chromatography (HPLC) to ensure zero synthesis drift.
              </p>
            </div>
            <div className="p-6 bg-surface border border-border rounded-sm">
              <h4 className="text-accent text-[10px] uppercase tracking-widest mb-4">Storage State</h4>
              <p className="text-primary text-sm font-light">
                Lyophilized solid state under vacuum enclosure to prevent oxidative degradation.
              </p>
            </div>
          </div>
        </Section>

        <Section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Activity size={20} className="text-accent" />
            <h2 className="text-2xl font-display">Mechanisms of Action</h2>
          </div>
          <ul className="space-y-6">
            {data.mechanisms.map((m: string, i: number) => (
              <li key={i} className="flex items-start gap-4 p-4 border-l border-accent/30 bg-accent/5">
                <span className="text-accent font-display text-sm mt-1">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-secondary font-light text-sm leading-relaxed">{m}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-accent" />
              <h2 className="text-2xl font-display">Technical Purity Standards</h2>
            </div>
            <a 
              href="/99Purity - COA.pdf" 
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 border border-accent/20 bg-accent/5 text-accent text-[10px] uppercase tracking-widest hover:bg-accent/10 transition-colors"
            >
              <FileText size={14} />
              View Batch COA
            </a>
          </div>
          <div className="glass-panel overflow-hidden">
            <table className="clinical-table">
              <thead>
                <tr>
                  <th>Quality Metric</th>
                  <th>Research Standard</th>
                  <th>Methodology</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HPLC Purity</td>
                  <td className="!text-primary">{data.purity.standard}</td>
                  <td>Chromatographic Isolation</td>
                </tr>
                <tr>
                  <td>Appearance</td>
                  <td className="!text-primary">{data.purity.appearance}</td>
                  <td>Visual Verification</td>
                </tr>
                <tr>
                  <td>Solubility</td>
                  <td className="!text-primary">{data.purity.solubility}</td>
                  <td>Assay Calibration</td>
                </tr>
                <tr>
                  <td>Identity</td>
                  <td className="!text-primary">{data.purity.identity}</td>
                  <td>Mass Spectrometry</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section className="mt-32 p-12 bg-surface border border-border relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(90deg, #1A1A1A 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-accent mb-6">Sourcing {"&"} Protocols</h3>
            <h2 className="text-3xl font-display mb-8">Ready for Laboratory Integration?</h2>
            <p className="text-secondary font-light mb-12 max-w-xl mx-auto">
              Secure the highest purity {data.name} sequences for your in-vitro research models. 
              Verified batch data included with every shipment.
            </p>
            <Button 
              onClick={() => {
                const target = atob("aHR0cHM6Ly85OXB1cml0eXBlcHRpZGVzLmNvbS8=");
                window.location.href = target;
              }}
              className="mx-auto"
            >
              Access Laboratory Portal
            </Button>
          </div>
        </Section>
      </article>
    </div>
  );
}
