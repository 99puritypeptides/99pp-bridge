import { Metadata } from "next";
import DatabaseClient from "./DatabaseClient";

export const metadata: Metadata = {
  title: "Sequence Database | Analytical Research Catalog",
  description: "A comprehensive clinical repository of 14+ verified research sequences. Cross-referenced with CAS identifiers and molecular weights for laboratory accuracy.",
  keywords: ["peptide database", "sequence catalog", "CAS identifiers", "molecular weight", "analytical research", "peptide verification"],
};

export default function DatabasePage() {
  return <DatabaseClient />;
}
