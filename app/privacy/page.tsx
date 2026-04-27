"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Data Collection & Research Integrity",
      content: "We collect minimal institutional data necessary to facilitate access to technical monographs and synthesis data. This includes institutional email addresses, IP addresses for security logging, and navigational patterns to optimize the search experience within the sequence database."
    },
    {
      title: "Encrypted Communication",
      content: "All interactions with the Research Hub are conducted over 256-bit SSL encryption. We utilize advanced firewall protocols to protect the integrity of our proprietary monographs and to prevent unauthorized access to laboratory verification records."
    },
    {
      title: "Third-Party Disclosure",
      content: "99 Purity Research does not sell, trade, or otherwise transfer your institutional data to external parties. Data may be shared only with authorized analytical laboratories strictly for the purpose of verifying batch specific mass spectrometry results."
    },
    {
      title: "Laboratory Cookies",
      content: "We use essential cookies to maintain your session state and to persist your research preferences (such as unit measurements in the reconstitution calculators). No tracking cookies are used for advertising or external marketing purposes."
    },
    {
      title: "Security Protocols",
      content: "Our servers are located in highly secure facilities with redundant data protection. We employ periodic security audits to ensure that the bridge between our laboratory data and this user portal remains uncompromised."
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
          <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-medium mb-8 block">Information Security</span>
          <h1 className="text-5xl md:text-6xl font-display mb-12">Privacy Policy</h1>
          <p className="text-secondary font-light text-lg leading-relaxed mb-16 border-l border-accent/30 pl-8">
            Last Updated: April 2026. This policy outlines our commitment to protecting the data and research activities of our institutional partners.
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
              Your research privacy is paramount. For detailed inquiries regarding our data encryption standards or to request a data audit for your institution, please contact our Information Security Directorate.
            </p>
          </div>
        </motion.div>
      </Section>
    </main>
  );
}
