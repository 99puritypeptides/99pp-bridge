import { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Use | 99 Purity Peptides Research Compliance",
  description: "Experimental research terms for the 99 Purity Research Hub. Outline of institutional compliance, research peptides integrity, and laboratory verification disclaimers.",
  keywords: ["99 purity research", "terms of use", "research peptides", "experimental integrity", "compliance"],
};

export default function TermsPage() {
  return <TermsClient />;
}
