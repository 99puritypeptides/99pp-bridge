import { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Research Data Security",
  description: "Institutional privacy protocols for 99 Purity Research. Learn how we protect research integrity through 256-bit encryption and secure laboratory logging.",
  keywords: ["privacy policy", "data security", "research encryption", "institutional privacy", "laboratory data protection"],
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
