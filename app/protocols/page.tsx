import { Metadata } from "next";
import ProtocolsClient from "./ProtocolsClient";

export const metadata: Metadata = {
  title: "Volumetric Calibration Matrix | Peptide Reconstitution Tool",
  description: "Standardize your laboratory calibration with our volumetric reconstitution matrix. Calculate precise mcg/unit concentrations for in-vitro research models with 99 Purity accuracy.",
  keywords: ["peptide reconstitution calculator", "volumetric calibration", "peptide dosage calculator", "laboratory protocols", "research calibration matrix"],
};

export default function ProtocolsPage() {
  return <ProtocolsClient />;
}
