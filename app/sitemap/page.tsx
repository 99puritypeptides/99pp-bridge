import { Metadata } from "next";
import SitemapClient from "./SitemapClient";

export const metadata: Metadata = {
  title: "Research Directory | Peptide Monograph Sitemap",
  description: "A comprehensive index of all technical resources, laboratory protocols, and sequence monographs within the 99 Purity Research repository.",
  keywords: ["peptide directory", "research sitemap", "laboratory resources", "peptide monographs", "synthesis index"],
};

export default function SitemapPage() {
  return <SitemapClient />;
}
