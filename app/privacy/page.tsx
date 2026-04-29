import { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | 99 Purity Research Data Security",
  description: "Institutional privacy protocols for 99 Purity Research. Learn how we protect research integrity through 256-bit encryption and secure laboratory logging.",
  keywords: ["99 purity research", "privacy policy", "peptides research", "data security", "research encryption"],
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
