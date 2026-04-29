import { Metadata } from "next";
import DatabaseClient from "./DatabaseClient";

export const metadata: Metadata = {
  title: "Peptides Research Database | 99 Purity Research Sequence Catalog",
  description: "Access our clinical repository of research peptides in USA. Over 14+ verified sequences cross-referenced with CAS identifiers and HPLC verification data.",
  keywords: ["peptides research", "research peptides", "99 purity research", "peptide database", "sequence catalog", "CAS identifiers", "USA"],
};

export default function DatabasePage() {
  return <DatabaseClient />;
}
