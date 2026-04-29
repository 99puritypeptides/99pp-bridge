import { Metadata } from "next";
import SitemapClient from "./SitemapClient";

export const metadata: Metadata = {
  title: "Peptides Research Directory | 99 Purity Research Sitemap",
  description: "A comprehensive index of technical peptides research resources, laboratory protocols, and sequence monographs within the 99 Purity Research repository.",
  keywords: ["peptides research directory", "research peptides sitemap", "99 purity research", "peptide monographs", "synthesis index"],
};

export default function SitemapPage() {
  return <SitemapClient />;
}
