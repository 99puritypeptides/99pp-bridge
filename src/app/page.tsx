import Image from "next/image";

export default function Home() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main>
      {/* Header */}
      <header className="app-header">
        <div className="container header-container">
          <div className="logo-group">
            <div className="logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div className="logo-text">
              99PP
              <span className="logo-subtitle">Advanced Research Insights</span>
            </div>
          </div>
          
          <div className="header-actions">
            <div className="status-badge">
              <span className="status-dot"></span>
              Secure Network
            </div>
            <a href="#" className="header-button">
              Client Portal
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container">
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-meta">
              <span className="date">{currentDate}</span>
              <span className="category">Biochemical Protocols</span>
            </div>
            <h1 className="hero-title">
              The Biochemistry of GHK-Cu: <br />
              <span>A Review of Tripeptide-Copper</span> Complexes.
            </h1>
            <p className="hero-abstract">
              This review examines the molecular architecture, stability protocols, and documented mechanisms of the glycyl-l-histidyl-l-lysine copper complex (GHK-Cu) in strictly controlled in-vitro environments. Emphasizing synthesis purity and stability, we explore why verifying molecular identity is paramount to consistent laboratory outcomes.
            </p>
            <div className="hero-action">
              <a href="https://99puritypeptides.com" target="_blank" rel="noopener noreferrer" className="hero-cta-button">
                Source Verified GHK-Cu
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '12px' }}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-glow"></div>
            <div className="hero-image-wrapper">
              <Image 
                src="/lab-shot.png" 
                alt="Macro laboratory shot of blue peptide vial and HPLC chart" 
                fill 
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="content-wrapper">
        <div className="container">
          {/* Section A */}
          <div className="section-block text-container">
            <span className="section-badge">Part A</span>
            <h2 className="section-title">Molecular Architecture & Stability</h2>
            <p className="content-text">
              Glycyl-L-histidyl-L-lysine (GHK) has a uniquely high affinity for copper(II) ions, forming the naturally occurring tripeptide-copper complex GHK-Cu. In the context of laboratory analysis, maintaining the structural integrity of this coordinated complex requires precise handling protocols.
            </p>
            <p className="content-text">
              The complex leverages a multidentate coordination sphere where the nitrogen atoms of the histidine imidazole ring and amino terminal strongly sequester the copper center. This coordination provides a high degree of kinetic stability, yet environmental factors such as moisture, UV exposure, and thermal fluctuations can prompt degradation. Rigid vacuum-sealing and lyophilization are critical precursors for maintaining viability before reconstitution.
            </p>
          </div>

          {/* Section B */}
          <div className="section-block" style={{ marginTop: '80px' }}>
            <div className="text-container">
              <span className="section-badge">Part B</span>
              <h2 className="section-title">Key Mechanisms of Action</h2>
              <p className="content-text">
                Observations in cellular models showcase a diverse portfolio of interaction pathways. The tripeptide complex primarily modulates enzymatic activity and signal transduction cascades through the following observed mechanisms:
              </p>
            </div>

            <div className="cards-grid text-container">
              {/* Card 1 */}
              <div className="mechanism-card glass-panel">
                <div className="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3 className="card-title">Gene Expression</h3>
                <p className="card-text">
                  Documented down-regulations or up-regulations of a vast array of genomic sequences, specifically augmenting DNA repair mechanisms.
                </p>
              </div>

              {/* Card 2 */}
              <div className="mechanism-card glass-panel">
                <div className="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <h3 className="card-title">ECM Integrity</h3>
                <p className="card-text">
                  Stimulates the synthesis and stability of Type I collagen and elastin within human fibroblast cultures, remodeling the Extracellular Matrix.
                </p>
              </div>

              {/* Card 3 */}
              <div className="mechanism-card glass-panel">
                <div className="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <h3 className="card-title">Antioxidant Signaling</h3>
                <p className="card-text">
                  Modulates excessive oxidative stress via interactions with naturally occurring antioxidant enzymes, protecting cellular viability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Purity Section */}
      <section className="data-section container">
        <div className="text-container">
          <span className="section-badge">Quality Control</span>
          <h2 className="section-title">Technical Purity Standards</h2>
          
          <div className="technical-table-wrapper">
            <table className="scientific-table">
              <thead>
                <tr>
                  <th>Quality Metric</th>
                  <th>Research Standard</th>
                  <th>Importance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Purity (HPLC)</td>
                  <td>&gt;99%</td>
                  <td>Minimizes confounding variables and toxic synthetic byproducts in cellular models.</td>
                </tr>
                <tr>
                  <td>Appearance</td>
                  <td>Deep Blue Powder</td>
                  <td>Visual indicator of correct copper complex coordination upon lyophilization.</td>
                </tr>
                <tr>
                  <td>Solubility</td>
                  <td>High (Aqueous)</td>
                  <td>Ensures homogeneous dispersal in standard buffer solutions during reconstitution.</td>
                </tr>
                <tr>
                  <td>Identity</td>
                  <td>Mass Spec Verified</td>
                  <td>Confirms the precise molecular weight profile, eliminating synthesis errors.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="cta-section container">
        <div className="text-container">
          <div className="cta-box">
            <div className="cta-content">
              <h2 className="cta-title">Sourcing and Laboratory Protocols</h2>
              <p className="cta-text">
                For researchers seeking high-stability, vacuum-sealed GHK-Cu with verified HPLC and Mass Spec data, sourcing from a dedicated synthesis laboratory is critical to avoid contamination.
              </p>
              <a href="https://99puritypeptides.com" target="_blank" rel="noopener noreferrer" className="cta-button">
                View Recommended Synthesis Laboratory
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <div className="container">
          <p className="disclaimer">
            Legal Disclaimer: The information presented in this review is for educational and laboratory research purposes only. Compounds discussed herein have not been approved by the FDA for human consumption. Use is strictly limited to in-vitro or laboratory-based research settings.
          </p>
        </div>
      </footer>
    </main>
  );
}
