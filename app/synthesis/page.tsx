import { Metadata } from "next";
import SynthesisClient from "./SynthesisClient";

export const metadata: Metadata = {
  title: "Peptides Research Synthesis | HPLC & Mass Spec Laboratory Standards",
  description: "Discover our rigid laboratory standards for peptides research synthesis. 99 purity research protocols featuring HPLC and Mass Spectrometry verification in USA.",
  keywords: ["peptides research synthesis", "research peptides USA", "99 purity research", "HPLC purity", "mass spectrometry", "peptide stability"],
  alternates: {
    canonical: "https://research.99puritypeptides.com/synthesis",
  },
};

export default function SynthesisPage() {
  return <SynthesisClient />;
}
