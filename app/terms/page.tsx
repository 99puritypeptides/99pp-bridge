import { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Use | Research Compliance & Integrity",
  description: "Experimental research terms for the 99 Purity Research Hub. Outline of institutional compliance, intellectual property, and laboratory verification disclaimers.",
  keywords: ["terms of use", "research compliance", "laboratory terms", "experimental integrity", "institutional research terms"],
};

export default function TermsPage() {
  return <TermsClient />;
}
