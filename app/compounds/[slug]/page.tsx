import { Metadata } from 'next';
import { notFound } from "next/navigation";
import CompoundContent from "@/components/CompoundContent";

const compoundData: Record<string, any> = {
  "ghk-cu": {
    name: "GHK-Cu",
    fullTitle: "Glycyl-L-Histidyl-L-Lysine Copper Complex",
    description: "GHK-Cu is a naturally occurring copper complex tripeptide first identified in human plasma. It acts as a signaling molecule for tissue remodeling and gene expression modulation.",
    architecture: "A tripeptide consisting of glycyl-histidyl-lysine coordinated with a copper(II) ion. The complex is stabilized by the multidentate binding of the nitrogen atoms in the histidine imidazole ring.",
    mechanisms: [
      "Upregulation of collagen, elastin, and glycosaminoglycan synthesis.",
      "Modulation of gene expression for over 4,000 human genes.",
      "Activation of tissue remodeling pathways via fibroblast recruitment.",
      "Potent antioxidant and anti-inflammatory signaling."
    ],
    purity: {
      standard: ">99%",
      appearance: "Vivid Blue Lyophilized Powder",
      solubility: "Soluble in Aqueous Buffers",
      identity: "Confirmed via Electrospray Ionization MS"
    },
    cas: "89030-95-5"
  },
  "bpc-157": {
    name: "BPC-157",
    fullTitle: "Body Protection Compound 157",
    description: "A stable pentadecapeptide consisting of 15 amino acids, originally derived from human gastric juice. Engineered for metabolic stability and high bioavailability.",
    architecture: "15-amino acid sequence (Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val). High molecular stability across a broad pH range.",
    mechanisms: [
      "Acceleration of angiogenesis and soft tissue healing.",
      "Upregulation of growth factor expression (e.g., EGR-1, NAB2).",
      "Protective effects on gastric mucosa and intestinal integrity.",
      "Modulation of the nitric oxide (NO) system."
    ],
    purity: {
      standard: ">99%",
      appearance: "White Lyophilized Powder",
      solubility: "High Aqueous Solubility",
      identity: "High-Resolution Mass Spectrometry Verified"
    },
    cas: "137525-51-0"
  },
  "tb-500": {
    name: "TB-500",
    fullTitle: "Thymosin Beta-4 Fragment 17-23",
    description: "TB-500 is a synthetic version of the naturally occurring peptide present in virtually all human and animal cells. It is widely researched for its role in cellular repair and migration.",
    architecture: "A 43-amino acid sequence (full Thymosin Beta-4) or shorter fragments focusing on the actin-binding domain.",
    mechanisms: [
      "Promotion of actin sequestration and cellular motility.",
      "Acceleration of angiogenesis in damaged tissues.",
      "Upregulation of wound healing pathways.",
      "Inhibition of inflammatory cytokine signaling."
    ],
    purity: {
      standard: ">99%",
      appearance: "White Lyophilized Powder",
      solubility: "Soluble in Aqueous Buffers",
      identity: "HPLC & Mass Spec Verified"
    },
    cas: "77591-33-4"
  },
  "mots-c": {
    name: "MOTS-c",
    fullTitle: "Mitochondrial Open Reading Frame of the 12S rRNA Type-c",
    description: "A mitochondrial-derived peptide (MDP) that encodes for a 16-amino acid protein. It is a key regulator of metabolic homeostasis and cellular stress response.",
    architecture: "16-amino acid sequence (Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg).",
    mechanisms: [
      "Regulation of glucose metabolism and insulin sensitivity.",
      "Activation of the AMPK signaling pathway.",
      "Promotion of mitochondrial biogenesis.",
      "Modulation of systemic fatty acid oxidation."
    ],
    purity: {
      standard: ">99%",
      appearance: "White Lyophilized Powder",
      solubility: "Soluble in Saline/Water",
      identity: "Confirmed via Sequence Mapping MS"
    },
    cas: "1627580-64-6"
  },
  "epithalon": {
    name: "Epithalon",
    fullTitle: "Epithalamamin Tetrapeptide",
    description: "A synthetic peptide consisting of four amino acids, researched for its potential interaction with telomerase activity and cellular longevity models.",
    architecture: "Tetrapeptide (Ala-Glu-Asp-Gly). High molecular stability.",
    mechanisms: [
      "Induction of telomerase activity in human somatic cells.",
      "Normalization of pineal gland function and melatonin secretion.",
      "Anti-oxidative stress modulation.",
      "Reduction of spontaneous tumor formation in animal models."
    ],
    purity: {
      standard: ">99.5%",
      appearance: "White Powder",
      solubility: "High Aqueous Solubility",
      identity: "Mass Spec Fingerprinted"
    },
    cas: "307197-13-9"
  },
  "ss-31": {
    name: "SS-31",
    fullTitle: "Elamipretide (Mitochondrial Target Peptide)",
    description: "A first-in-class tetrapeptide that selectively targets the inner mitochondrial membrane to stabilize cardiolipin.",
    architecture: "D-Arg-Dmt-Lys-Phe-NH2. Designed for high mitochondrial penetration.",
    mechanisms: [
      "Stabilization of cardiolipin in the inner mitochondrial membrane.",
      "Restoration of ATP production and respiratory chain efficiency.",
      "Reduction of reactive oxygen species (ROS) at the source.",
      "Prevention of mitochondrial permeability transition pore (mPTP) opening."
    ],
    purity: {
      standard: ">99%",
      appearance: "White Lyophilized Powder",
      solubility: "Soluble in Saline",
      identity: "MS Fingerprint Verified"
    },
    cas: "736992-21-5"
  },
  "kpv": {
    name: "KPV",
    fullTitle: "Lysine-Proline-Valine Tripeptide",
    description: "A C-terminal fragment of alpha-Melanocyte Stimulating Hormone (α-MSH) with potent immunomodulatory properties.",
    architecture: "Tripeptide (Lys-Pro-Val). Highly stable and bioactive at low concentrations.",
    mechanisms: [
      "Inhibition of NF-kappaB signaling pathways.",
      "Reduction of pro-inflammatory cytokine production.",
      "Modulation of antimicrobial peptide expression.",
      "Acceleration of skin and mucosal healing."
    ],
    purity: {
      standard: ">99.5%",
      appearance: "Fine White Powder",
      solubility: "Aqueous Solubility High",
      identity: "HPLC Single Peak Verified"
    },
    cas: "67727-97-3"
  },
  "ll-37": {
    name: "LL-37",
    fullTitle: "Cathelicidin Antimicrobial Peptide",
    description: "A 37-amino acid human antimicrobial peptide with diverse roles in innate immunity and wound healing.",
    architecture: "37-amino acid sequence. Forms an amphipathic alpha-helix in membrane-mimicking environments.",
    mechanisms: [
      "Direct antimicrobial activity against pathogens.",
      "Modulation of inflammatory cell recruitment.",
      "Promotion of angiogenesis and re-epithelialization.",
      "Neutralization of lipopolysaccharide (LPS) endotoxins."
    ],
    purity: {
      standard: ">98%",
      appearance: "White Powder",
      solubility: "Soluble in Distilled Water",
      identity: "Mass Spectrometry Confirmed"
    },
    cas: "154948-66-8"
  },
  "vip": {
    name: "VIP",
    fullTitle: "Vasoactive Intestinal Peptide",
    description: "A 28-amino acid neuropeptide that functions as a potent vasodilator and immunomodulator.",
    architecture: "28-amino acid sequence (His-Ser-Asp-Ala-Val-Phe-Thr-Asp-Asn-Tyr-Thr-Arg-Leu-Arg-Lys-Gln-Met-Ala-Val-Lys-Lys-Tyr-Leu-Asn-Ser-Ile-Leu-Asn).",
    mechanisms: [
      "Induction of vasodilation and smooth muscle relaxation.",
      "Modulation of T-cell differentiation and cytokine profile.",
      "Protective effects on lung and intestinal tissue.",
      "Regulation of circadian rhythm signaling."
    ],
    purity: {
      standard: ">99%",
      appearance: "Lyophilized Solid",
      solubility: "Aqueous Buffers",
      identity: "HPLC/MS Sequence Mapping"
    },
    cas: "40077-57-4"
  },
  "thymosin-alpha-1": {
    name: "Thymosin Alpha-1",
    fullTitle: "Tα1 (Immune Modulating Peptide)",
    description: "A 28-amino acid peptide originally isolated from thymus tissue, critical for T-cell maturation and immune surveillance.",
    architecture: "28-amino acid sequence. Highly acidic profile.",
    mechanisms: [
      "Enhancement of T-cell maturation and function.",
      "Upregulation of MHC Class I expression.",
      "Modulation of cytokine production (IFN-gamma, IL-2).",
      "Activation of dendritic cell maturation."
    ],
    purity: {
      standard: ">99%",
      appearance: "White Powder",
      solubility: "Soluble in Saline",
      identity: "Verified via ESI-MS"
    },
    cas: "62304-98-7"
  },
  "vilon": {
    name: "Vilon",
    fullTitle: "Lys-Glu Bioregulator",
    description: "A short bioregulatory dipeptide focused on immune system normalization and cellular regeneration.",
    architecture: "Dipeptide (Lys-Glu). Extreme molecular stability.",
    mechanisms: [
      "Activation of chromatin in senescent cells.",
      "Stimulation of lymphocyte proliferation.",
      "Induction of cellular repair pathways.",
      "Normalization of immune response markers."
    ],
    purity: {
      standard: ">99.8%",
      appearance: "White Powder",
      solubility: "High Aqueous Solubility",
      identity: "Mass Spec Fingerprint"
    },
    cas: "132174-70-2"
  },
  "vesugen": {
    name: "Vesugen",
    fullTitle: "Lys-Glu-Asp Vascular Bioregulator",
    description: "A tripeptide bioregulator designed for vascular system integrity and endothelial cell support.",
    architecture: "Tripeptide (Lys-Glu-Asp). Targeted molecular weight for high penetration.",
    mechanisms: [
      "Support of endothelial cell function.",
      "Normalization of vascular wall permeability.",
      "Reduction of atherosclerotic markers in models.",
      "Promotion of microcirculation efficiency."
    ],
    purity: {
      standard: ">99.5%",
      appearance: "White Powder",
      solubility: "Soluble in Water",
      identity: "HPLC Verified"
    },
    cas: "852899-01-9"
  },
  "pinealon": {
    name: "Pinealon",
    fullTitle: "Glu-Asp-Arg Neuro Bioregulator",
    description: "A synthetic tripeptide focused on neurological health and circadian rhythm normalization.",
    architecture: "Tripeptide (Glu-Asp-Arg). High bioavailability across the blood-brain barrier.",
    mechanisms: [
      "Protection of neurons from oxidative stress.",
      "Normalization of melatonin production.",
      "Enhancement of cognitive function in aging models.",
      "Reduction of beta-amyloid accumulation markers."
    ],
    purity: {
      standard: ">99.7%",
      appearance: "White Powder",
      solubility: "High Aqueous Solubility",
      identity: "Sequence Mapping Confirmed"
    },
    cas: "852899-03-1"
  },
  "cortagen": {
    name: "Cortagen",
    fullTitle: "Ala-Glu-Asp-Pro Bio-Regulator",
    description: "A bioregulatory tetrapeptide designed for multi-system support and DNA interaction.",
    architecture: "Tetrapeptide (Ala-Glu-Asp-Pro). Highly stable synthetic sequence.",
    mechanisms: [
      "Epigenetic modulation of gene expression.",
      "Normalization of cardiovascular and nervous system markers.",
      "Reduction of inflammatory gene activity.",
      "Acceleration of systemic tissue repair."
    ],
    purity: {
      standard: ">99%",
      appearance: "White Powder",
      solubility: "Soluble in Aqueous Solutions",
      identity: "HPLC & Mass Spec Verified"
    },
    cas: "852899-05-3"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = compoundData[slug] || compoundData["ghk-cu"];
  return {
    title: `${data.name} Research Monograph | HPLC Verified Purity`,
    description: `Technical analysis of ${data.name} (${data.fullTitle}). Sequence architecture, mechanisms of action, and purity standards for laboratory research.`,
    keywords: [data.name, 'peptide research', 'molecular architecture', 'HPLC verified', data.cas],
    openGraph: {
      title: `${data.name} | 99 Purity Research Monograph`,
      description: data.description,
      type: 'article',
      url: `https://99puritypeptides.com/compounds/${slug}`,
    }
  }
}

export default async function CompoundPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = compoundData[slug];
  
  if (!data) return notFound();

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    description: data.description,
    brand: {
      '@type': 'Brand',
      name: '99 Purity Research',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0.00',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '84',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://99puritypeptides.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Database',
        item: 'https://99puritypeptides.com/database',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.name,
        item: `https://99puritypeptides.com/compounds/${slug}`,
      },
    ],
  };

  return (
    <CompoundContent 
      data={data} 
      slug={slug} 
      productSchema={productSchema} 
      breadcrumbSchema={breadcrumbSchema} 
    />
  );
}
