import { Metadata } from "next";
import ProtocolsClient from "./ProtocolsClient";

export const metadata: Metadata = {
  title: "Peptides Research Protocols | Volumetric Calibration Matrix",
  description: "Standardize your laboratory protocols for peptides research. Calculate precise concentrations for research peptides in USA with our 99 purity accuracy matrix.",
  keywords: ["peptides research protocols", "research peptides USA", "99 purity research", "peptide reconstitution", "calibration matrix"],
};

export default function ProtocolsPage() {
  return <ProtocolsClient />;
}
