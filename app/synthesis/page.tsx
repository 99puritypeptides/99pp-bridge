import { Metadata } from "next";
import SynthesisClient from "./SynthesisClient";

export const metadata: Metadata = {
  title: "Synthesis Methodology | HPLC & Mass Spec Standards",
  description: "Rigid laboratory standards for peptide synthesis. Discover our HPLC and Mass Spectrometry verification protocols ensuring >99% sequence purity.",
  keywords: ["peptide synthesis", "HPLC purity", "mass spectrometry", "lyophilization", "peptide stability", "analytical integrity"],
};

export default function SynthesisPage() {
  return <SynthesisClient />;
}
