import { Metadata } from 'next';
import { notFound } from "next/navigation";
import CompoundContent from "@/components/CompoundContent";

const compoundData: Record<string, any> = {
  "ghk-cu": {
    name: "GHK-Cu",
    fullTitle: "Glycyl-L-Histidyl-L-Lysine Copper Complex",
    seoTitle: "GHK-Cu Research Guide | Buy High-Purity GHK-Cu USA",
    seoDescription: "Technical analysis of GHK-Cu for tissue remodeling research. Verified >99% purity HPLC standards for laboratory research peptides in USA. Explore molecular properties and handling protocols.",
    description: "GHK-Cu is a naturally occurring copper complex tripeptide first identified in human plasma. Academic researchers often <strong>buy GHK-Cu for laboratory research</strong> to study its effects on tissue remodeling and gene expression modulation in cellular models. Our <strong>GHK-Cu 99% purity online</strong> standard ensures zero synthesis drift.",
    architecture: "A tripeptide consisting of glycyl-histidyl-lysine coordinated with a copper(II) ion. The complex is stabilized by the multidentate binding of the nitrogen atoms in the histidine imidazole ring.",
    mechanisms: [
      "Upregulation of collagen, elastin, and glycosaminoglycan synthesis.",
      "Modulation of gene expression for over 4,000 human genes in research models.",
      "Activation of tissue remodeling pathways via fibroblast recruitment.",
      "Potent antioxidant and anti-inflammatory signaling in cellular assays."
    ],
    purity: {
      standard: ">99%",
      appearance: "Vivid Blue Lyophilized Powder",
      solubility: "Soluble in Aqueous Buffers",
      identity: "Confirmed via Electrospray Ionization MS"
    },
    cas: "89030-95-5",
    protocols: [
      {
        title: "Copper Stability",
        content: "GHK-Cu is highly stable in aqueous solution when coordinated with copper. Avoid strong chelating agents in the buffer which may compete for copper binding."
      },
      {
        title: "Photo-Sensitivity",
        content: "Store in amber vials or dark environments. Exposure to intense UV light can lead to copper dissociation and peptide oxidation."
      }
    ],
    faqs: [
      {
        question: "What is the primary research application of GHK-Cu?",
        answer: "GHK-Cu is primarily used in tissue remodeling and regenerative medicine research due to its ability to modulate over 4,000 human genes and stimulate collagen synthesis in vitro."
      },
      {
        question: "Where can I find high-purity GHK-Cu supplier in US?",
        answer: "For laboratory-grade GHK-Cu, 99 Purity Research provides certified sequences with >99% purity verified via HPLC and MS for institutional and academic use."
      }
    ],
    weight: "401.91 g/mol"
  },
  "bpc-157": {
    name: "BPC-157",
    fullTitle: "Body Protection Compound 157",
    seoTitle: "BPC-157 Research Guide | Buy BPC-157 for Laboratory Research USA",
    seoDescription: "Technical profile of BPC-157 for laboratory research. Explore chemical properties, 99% purity verification, and reconstitution protocols for test subjects. Verified BPC-157 99% purity online.",
    description: "BPC-157 is a synthetic pentadecapeptide derived from human gastric protein, engineered for high stability and bioactivity in laboratory research models. Biochemists typically <strong>buy BPC-157 for laboratory research</strong> to investigate angiogenic signaling and cellular repair. It is the gold standard for <strong>high-purity BPC-157 supplier US</strong> requirements.",
    architecture: "15-amino acid sequence (Gly-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val). Demonstrates extreme molecular stability across a broad pH spectrum and resistance to enzymatic degradation in gastric-like environments.",
    mechanisms: [
      "Upregulation of Egr-1 (Early Growth Response-1) transcription factor expression.",
      "Acceleration of angiogenic signaling via VEGFR2 pathway activation.",
      "Modulation of collagen synthesis and fibroblast recruitment in test subjects.",
      "Optimization of the nitric oxide (NO) system for vascular homeostasis modeling."
    ],
    purity: {
      standard: ">99%",
      appearance: "White Lyophilized Powder",
      solubility: "High Aqueous Solubility",
      identity: "Verified via ESI-MS and HPLC"
    },
    cas: "137525-51-0",
    pubchem: "9941957",
    protocols: [
      {
        title: "Reconstitution Protocol",
        content: "Use bacteriostatic water (0.9% benzyl alcohol) to inhibit microbial growth. Gently introduce the diluent along the side of the vial to avoid mechanical stress. Swirl gently; do not shake."
      },
      {
        title: "Storage & Stability",
        content: "Store lyophilized powder at -20°C for long-term stability. Once reconstituted, store at 2°C to 8°C and utilize within 14-21 days to prevent degradation."
      }
    ],
    faqs: [
      {
        question: "What is the optimal storage temperature for BPC-157?",
        answer: "For long-term storage, lyophilized BPC-157 should be kept at -20°C. Reconstituted solutions must be refrigerated at 2°C to 8°C."
      },
      {
        question: "Can BPC-157 be used in human subjects?",
        answer: "No. BPC-157 is strictly for in-vitro laboratory research and analytical use only. It is not approved for human consumption."
      },
      {
        question: "How is BPC-157 purity verified?",
        answer: "Every batch of BPC-157 is verified via High-Performance Liquid Chromatography (HPLC) and Mass Spectrometry (MS) to ensure 99% purity and absolute sequence identity for research peptides in USA."
      },
      {
        question: "Where to buy BPC-157 99% purity online?",
        answer: "High-purity BPC-157 can be sourced through technical portals like 99 Purity Research, which provides full HPLC/MS batch documentation for every research sequence."
      }
    ],
    weight: "1419.5 g/mol"
  },
  "tb-500": {
    name: "TB-500",
    fullTitle: "Thymosin Beta-4 Fragment 17-23",
    seoTitle: "TB-500 Research Guide | Buy TB-500 for Research USA",
    seoDescription: "Technical profile of TB-500 (Thymosin Beta-4) for laboratory research. High-purity TB-500 synthesis and reconstitution protocols. 99% purity online standards.",
    description: "TB-500 is a synthetic version of the naturally occurring peptide present in virtually all human and animal cells. Researchers <strong>buy TB-500 for laboratory research</strong> to analyze its role in cellular repair and migration. It is a critical component for labs seeking <strong>research peptides in USA</strong> with validated synthesis markers.",
    architecture: "A 43-amino acid sequence (full Thymosin Beta-4) or shorter fragments focusing on the actin-binding domain.",
    mechanisms: [
      "Promotion of actin sequestration and cellular motility in research models.",
      "Acceleration of angiogenesis in damaged tissues via VEGFR upregulation.",
      "Upregulation of wound healing pathways in cellular assays.",
      "Inhibition of inflammatory cytokine signaling in experimental models."
    ],
    purity: {
      standard: ">99%",
      appearance: "White Lyophilized Powder",
      solubility: "Soluble in Aqueous Buffers",
      identity: "HPLC & Mass Spec Verified"
    },
    cas: "77591-33-4",
    protocols: [
      {
        title: "Reconstitution",
        content: "Reconstitute with bacteriostatic water. The peptide is highly stable once dissolved but should be kept refrigerated."
      }
    ],
    faqs: [
      {
        question: "Where to find high-purity TB-500 supplier US?",
        answer: "99 Purity Research is a leading supplier of technical-grade TB-500, offering sequences with >99% purity and full analytical verification for academic studies."
      }
    ],
    weight: "4963.5 g/mol"
  },
  "mots-c": {
    name: "MOTS-c",
    fullTitle: "Mitochondrial Open Reading Frame of the 12S rRNA Type-c",
    seoTitle: "MOTS-c Research Guide | Buy MOTS-c for Mitochondrial Research USA",
    seoDescription: "Explore MOTS-c mitochondrial research. Technical specifications, metabolic mechanisms, and high-purity synthesis protocols. Verified MOTS-c 99% purity online.",
    description: "MOTS-c is a mitochondrial-derived peptide (MDP) that encodes for a 16-amino acid protein. Academic researchers often <strong>buy MOTS-c for laboratory research</strong> to study its role in metabolic homeostasis and cellular stress response. It is highly sought after by labs requiring <strong>high-purity MOTS-c supplier US</strong> certification.",
    architecture: "16-amino acid sequence (Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg).",
    mechanisms: [
      "Regulation of glucose metabolism and insulin sensitivity in cellular models.",
      "Activation of the AMPK signaling pathway in experimental assays.",
      "Promotion of mitochondrial biogenesis in test subjects.",
      "Modulation of systemic fatty acid oxidation in metabolic research."
    ],
    purity: {
      standard: ">99%",
      appearance: "White Lyophilized Powder",
      solubility: "Soluble in Saline/Water",
      identity: "Confirmed via Sequence Mapping MS"
    },
    cas: "1627580-64-6",
    protocols: [
      {
        title: "Metabolic Stability",
        content: "MOTS-c is sensitive to temperature fluctuations. Maintain strict cold-chain protocols during storage and handling."
      }
    ],
    weight: "1876.2 g/mol"
  },
  "epithalon": {
    name: "Epithalon",
    fullTitle: "Epithalamamin Tetrapeptide",
    seoTitle: "Epithalon Research Guide | Buy Epithalon for Telomerase Research USA",
    description: "Epithalon is a synthetic peptide consisting of four amino acids, researched for its potential interaction with telomerase activity and cellular longevity models. Labs looking to <strong>buy Epithalon for laboratory research</strong> prioritize <strong>99% purity online</strong> verification for precise cellular mapping.",
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
    cas: "307197-13-9",
    faqs: [
      {
        question: "How does Epithalon influence telomerase activity in research?",
        answer: "Epithalon has been shown in human somatic cell models to induce telomerase activity, leading to telomere elongation and potential modulation of cellular aging pathways."
      }
    ],
    weight: "390.35 g/mol"
  },
  "ss-31": {
    name: "SS-31",
    fullTitle: "Elamipretide",
    seoTitle: "SS-31 Research Guide | Buy SS-31 (Elamipretide) for Research USA",
    description: "SS-31 is a first-in-class tetrapeptide that selectively targets the inner mitochondrial membrane to stabilize cardiolipin. Scientists often <strong>buy SS-31 for laboratory research</strong> to restore ATP production efficiency. Our <strong>SS-31 99% purity online</strong> standard ensures zero synthesis drift.",
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
    cas: "736992-21-5",
    faqs: [
      {
        question: "What is the mechanism of SS-31 in mitochondrial research?",
        answer: "SS-31 targets cardiolipin in the inner mitochondrial membrane, optimizing the electron transport chain and reducing reactive oxygen species (ROS) production in cellular assays."
      }
    ],
    weight: "639.8 g/mol"
  },
  "kpv": {
    name: "KPV",
    fullTitle: "Lys-Pro-Val",
    seoTitle: "KPV Research Guide | Buy KPV for Immunomodulatory Research USA",
    description: "KPV is a C-terminal fragment of alpha-Melanocyte Stimulating Hormone (α-MSH) with potent immunomodulatory properties. Researchers frequently <strong>buy KPV for laboratory research</strong> to investigate NF-kappaB signaling and antimicrobial peptide expression. It is a benchmark for <strong>high-purity KPV supplier US</strong> standards.",
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
    cas: "67727-97-3",
    faqs: [
      {
        question: "What makes KPV effective in anti-inflammatory research?",
        answer: "KPV acts by inhibiting pro-inflammatory cytokine production and modulating the innate immune response, specifically targeting NF-kappaB pathways in cellular models."
      }
    ],
    weight: "340.42 g/mol"
  },
  "ll-37": {
    name: "LL-37",
    fullTitle: "Cathelicidin Antimicrobial Peptide",
    seoTitle: "LL-37 Research Guide | Buy LL-37 for Antimicrobial Research USA",
    description: "LL-37 is a 37-amino acid human antimicrobial peptide with diverse roles in innate immunity and wound healing. Institutions often <strong>buy LL-37 for laboratory research</strong> to model pathogen interaction and angiogenic signaling. It is the definitive choice for <strong>high-purity LL-37 supplier US</strong> needs.",
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
    cas: "154948-66-8",
    faqs: [
      {
        question: "How is LL-37 used in innate immunity research?",
        answer: "LL-37 is used to study direct antimicrobial activity and the modulation of inflammatory cell recruitment in response to bacterial pathogens."
      }
    ],
    weight: "4493.3 g/mol"
  },
  "vip": {
    name: "VIP",
    fullTitle: "Vasoactive Intestinal Peptide",
    seoTitle: "VIP Research Guide | Buy VIP for Neuropeptide Research USA",
    description: "VIP is a 28-amino acid neuropeptide that functions as a potent vasodilator and immunomodulator. Researchers <strong>buy VIP for laboratory research</strong> to analyze smooth muscle relaxation and T-cell differentiation. Our <strong>VIP 99% purity online</strong> standard ensures sequence-specific accuracy.",
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
    cas: "40077-57-4",
    faqs: [
      {
        question: "What are the primary research targets for VIP?",
        answer: "VIP research primarily targets the VPAC1 and VPAC2 receptors to study vasodilation, circadian rhythm, and immune-mediated inflammatory responses."
      }
    ],
    weight: "3325.8 g/mol"
  },
  "thymosin-alpha-1": {
    name: "Thymosin Alpha-1",
    fullTitle: "Tα1 Immune Regulator",
    seoTitle: "Thymosin Alpha-1 Research Guide | Buy Tα1 for Immune Research USA",
    description: "Tα1 is a 28-amino acid peptide originally isolated from thymus tissue, critical for T-cell maturation and immune surveillance. Labs frequently <strong>buy Thymosin Alpha-1 for laboratory research</strong> to investigate cytokine modulation and MHC Class I expression. A benchmark for <strong>high-purity Thymosin Alpha-1 supplier US</strong> standards.",
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
    cas: "62304-98-7",
    faqs: [
      {
        question: "How does Thymosin Alpha-1 influence T-cell maturation?",
        answer: "Thymosin Alpha-1 acts as an immune-modulating agent that promotes the differentiation of pluripotent stem cells into mature T-cells and enhances their functional activity."
      }
    ],
    weight: "3108.3 g/mol"
  },
  "vilon": {
    name: "Vilon",
    fullTitle: "Lys-Glu Bioregulator",
    seoTitle: "Bioregulator Research | Buy Vilon, Vesugen & Pinealon USA",
    description: "Bioregulators like Vilon, Vesugen, and Pinealon are short-chain peptides researched for their role in gene expression and cellular regeneration. Researchers <strong>buy bioregulators for laboratory research</strong> to study epigenetic modulation and tissue-specific repair. Verified <strong>bioregulators 99% purity online</strong> for academic use.",
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
    cas: "132174-70-2",
    weight: "259.26 g/mol"
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
    cas: "852899-01-9",
    weight: "376.36 g/mol"
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
    cas: "852899-03-1",
    weight: "374.39 g/mol"
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
    cas: "852899-05-3",
    weight: "377.35 g/mol"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = compoundData[slug] || compoundData["ghk-cu"];
  return {
    title: data.seoTitle || `${data.name} Research Guide | Buy High-Purity ${data.name} USA`,
    description: data.seoDescription || `Technical peptides research on ${data.name} (${data.fullTitle}). Verified 99 purity research standards for laboratory research peptides in USA. Access HPLC/MS verified ${data.name} online.`,
    keywords: [data.name, 'peptides research', 'research peptides', '99 purity research', 'research peptides in USA', 'HPLC verified', data.cas],
    openGraph: {
      title: data.seoTitle || `${data.name} | 99 Purity Research Monograph`,
      description: data.seoDescription || data.description,
      type: 'article',
      url: `https://research.99puritypeptides.com/compounds/${slug}`,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${data.name} Technical Monograph`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/og-image.png'],
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
    description: data.description.replace(/<\/?[^>]+(>|$)/g, ""),
    image: 'https://research.99puritypeptides.com/og-image.png',
    sku: `99PP-${slug.toUpperCase()}`,
    mpn: data.cas || `99PP-${slug.toUpperCase()}`,
    brand: {
      '@type': 'Brand',
      name: '99 Purity Research',
    },
    offers: {
      '@type': 'Offer',
      url: `https://research.99puritypeptides.com/compounds/${slug}`,
      availability: 'https://schema.org/InStock',
      price: '0.00',
      priceCurrency: 'USD',
      priceValidUntil: '2026-12-31',
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0.00',
          currency: 'USD'
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'US'
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 1,
            unitCode: 'DAY'
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 4,
            unitCode: 'DAY'
          }
        }
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnPeriod',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn'
      }
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
        item: 'https://research.99puritypeptides.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Database',
        item: 'https://research.99puritypeptides.com/database',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.name,
        item: `https://research.99puritypeptides.com/compounds/${slug}`,
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
