import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "99 Purity Research | #1 Authority for Research Peptides in USA",
  description: "The authoritative portal for 99 purity peptides research in the USA. Access 100% HPLC & Mass Spectrometry verified sequences, technical monographs, and synthesis protocols for analytical laboratory research.",
  keywords: ["99 purity research", "peptides research", "research peptides", "research peptides in USA", "HPLC verified peptides", "analytical grade sequences", "buy research peptides", "peptide synthesis protocols"],
  alternates: {
    canonical: "https://research.99puritypeptides.com",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
