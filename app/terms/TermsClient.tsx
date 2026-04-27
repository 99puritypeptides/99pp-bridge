"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

export default function TermsClient() {
  const sections = [
    {
      title: "1. Research Use Only",
      content: "All sequences and data provided through this portal are intended strictly for in-vitro laboratory research purposes. No products or information provided are intended for human consumption, therapeutic use, or diagnostic applications. Users acknowledge that the compounds are experimental in nature and carry inherent risks associated with laboratory handling."
    },
    {
      title: "2. Academic Integrity",
      content: "Users agree to utilize the sequence database and technical monographs in accordance with established academic and institutional safety protocols. Redistribution of proprietary synthesis methodologies or raw mass spectrometry data without explicit authorization from 99 Purity Research is strictly prohibited."
    },
    {
      title: "3. Verification Disclaimer",
      content: "While 99 Purity Research employs rigorous HPLC and Mass Spectrometry verification for all synthesis batches, experimental results may vary based on laboratory conditions, reconstitution protocols, and analytical equipment calibration. We provide data 'as-is' for research modeling purposes."
    },
    {
      title: "4. Institutional Compliance",
      content: "Access to the Research Portal is contingent upon the user's compliance with local, state, and international regulations regarding the acquisition and handling of research-grade peptides. It is the sole responsibility of the institution to ensure all required permits and safety certifications are active."
    },
    {
      title: "5. Intellectual Property",
      content: "The design of this interface, the proprietary nomenclature used in our monographs, and the structure of our sequence database are the intellectual property of 99 Purity Research. Unauthorized scraping, indexing by automated bots, or commercial exploitation of this data is a violation of these terms."
    }
  ];

  return (
    <main className="pt-32 pb-24">
      <Section className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-medium mb-8 block">Legal Framework</span>
          <h1 className="text-5xl md:text-6xl font-display mb-12">Terms of Use</h1>
          <p className="text-secondary font-light text-lg leading-relaxed mb-16 border-l border-accent/30 pl-8">
            Last Updated: April 2026. These terms govern the access and utilization of the 99 Purity Research Hub and all associated technical monographs.
          </p>

          <div className="space-y-16">
            {sections.map((section, i) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <h2 className="text-xl font-display mb-6 text-white group-hover:text-accent transition-colors">{section.title}</h2>
                <p className="text-secondary font-light leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-8 border border-border/50 bg-surface/30 text-center">
            <p className="text-sm text-muted font-light italic">
              By accessing the database, you signify your agreement to these experimental research terms. For technical inquiries regarding specific synthesis protocols, please contact our laboratory directorate.
            </p>
          </div>
        </motion.div>
      </Section>
    </main>
  );
}
