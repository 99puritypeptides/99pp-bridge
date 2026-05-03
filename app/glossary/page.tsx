import GlossaryClient from "./GlossaryClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peptide Research Glossary | Technical Terminology & Definitions",
  description: "Comprehensive glossary of technical terms used in peptide synthesis, molecular biology, and laboratory research. Definitions for HPLC, Mass Spectrometry, Lyophilization, and more.",
  keywords: ["peptide glossary", "HPLC definition", "mass spectrometry research", "lyophilization explained", "peptide terminology"],
  alternates: {
    canonical: "https://research.99puritypeptides.com/glossary",
  },
};

export default function GlossaryPage() {
  return <GlossaryClient />;
}
