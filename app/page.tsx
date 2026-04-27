import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "99 Purity Research | Analytical Grade Peptide Synthesis Hub",
  description: "The industry standard for in-vitro research sequences. 100% HPLC & Mass Spectrometry verified peptide synthesis for academic and private laboratories.",
  keywords: ["peptide research", "HPLC verified peptides", "analytical grade sequences", "biotech research portal", "peptide synthesis verification", "mass spectrometry analysis"],
};

export default function HomePage() {
  return <HomeClient />;
}
