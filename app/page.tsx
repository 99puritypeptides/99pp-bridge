import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "99 Purity Research | Peptides Research & Analytical Synthesis Hub",
  description: "The industry standard for 99 purity research and in-vitro sequences. Specialized in high-purity research peptides in USA with HPLC & Mass Spectrometry verification.",
  keywords: ["99 purity research", "peptides research", "research peptides", "research peptides in USA", "HPLC verified peptides", "analytical grade sequences"],
};

export default function HomePage() {
  return <HomeClient />;
}
