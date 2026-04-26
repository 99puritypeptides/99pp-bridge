import Image from "next/image";

export default function Home() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main suppressHydrationWarning>
      {/* Header */}
      <header className="app-header" suppressHydrationWarning>
        <div className="container header-container" suppressHydrationWarning>
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
      <section className="container" suppressHydrationWarning>
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-meta">
              <span className="date" suppressHydrationWarning>{currentDate}</span>
              <span className="category">Biochemical Protocols</span>
            </div>
            <h1 className="hero-title">
              The Biochemistry of GHK-Cu: <br />
              <span>A Review of Tripeptide-Copper</span> Complexes.
            </h1>
            <p className="hero-abstract">
              The true bottleneck in peptide research isn't just theory—it's degradation. This review actively deconstructs the glycyl-l-histidyl-l-lysine copper complex (GHK-Cu), exploring why elite laboratories are pivoting away from standard aqueous formats toward stringently lyophilized, mass spec verified solid states to guarantee experimental integrity.
            </p>
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
      <section className="content-wrapper" suppressHydrationWarning>
        <div className="container" suppressHydrationWarning>
          {/* Section A */}
          <div className="section-block text-container">
            <span className="section-badge">Part A</span>
            <h2 className="section-title">Molecular Architecture & Stability</h2>
            <p className="content-text">
              At its core, glycyl-L-histidyl-L-lysine (GHK) possesses a uniquely voracious affinity for copper(II) ions. When coordinated, it forms GHK-Cu—a tripeptide complex that acts as a precision "kinetic shield" within cellular models. However, its stability is notoriously deceptive.
            </p>
            <p className="content-text">
              The complex leverages a multidentate sphere where the nitrogen atoms of the histidine imidazole ring aggressively lock onto the copper center. While this provides exceptional baseline stability, even minor atmospheric exposures—like ambient moisture or rapid thermal shifts—can brutally fracture the coordination sphere. That is exactly why cutting-edge protocols now mandate rigid vacuum-sealing and deep lyophilization prior to any reconstitution.
            </p>
          </div>

          {/* Section B */}
          <div className="section-block" style={{ marginTop: '80px' }}>
            <div className="text-container">
              <span className="section-badge">Part B</span>
              <h2 className="section-title">Key Mechanisms of Action</h2>
              <p className="content-text">
                GHK-Cu does not act merely as a passive nutrient. In controlled in-vitro models, it operates as a master orchestration molecule, actively capable of up-regulating and down-regulating over 4,000 distinct human genes. Here are the three most critical pathways currently dominating research parameters:
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
                  Demonstrates sweeping control over the genome, actively suppressing inflammatory cascades while explicitly amplifying complex DNA repair networks.
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
                  Triggers aggressive structural remodeling by commanding human fibroblast cultures to hyper-synthesize elite-grade Type I collagen and elastin networks.
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
                  Bypasses traditional antioxidant limitations by directly modulating cellular enzyme production, systematically extinguishing rogue oxidative stress signals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* NEW SECTION: Uses & Importance */}
      <section className="container" style={{ marginTop: '100px', marginBottom: '100px' }} suppressHydrationWarning>
        <div className="section-block text-container" suppressHydrationWarning>
          <span className="section-badge">Part C</span>
          <h2 className="section-title">Critical Uses & Applications</h2>
          <p className="content-text">
            Researchers widely employ GHK-Cu to model complex biochemical interactions. The tripeptide complex is utilized in several high-impact clinical focus areas ranging from tissue regeneration to neurological cellular longevity studies.
          </p>
          <div className="uses-grid">
            <div className="use-item">
              <span className="use-number">01</span>
              <div>
                <h4>Cellular Regeneration Modeling</h4>
                <p>Tracking the rapid acceleration of tissue closure and immune response mapping.</p>
              </div>
            </div>
            <div className="use-item">
              <span className="use-number">02</span>
              <div>
                <h4>Oxidative Stress Modeling</h4>
                <p>Studying defensive adaptations in neural tissues exposed to age-related oxidative stress.</p>
              </div>
            </div>
            <div className="use-item">
              <span className="use-number">03</span>
              <div>
                <h4>Fibroblast Activation</h4>
                <p>Analyzing structural skin remodeling, explicitly tracking collagen I, III, and elastin upregulation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Reviews */}
      <section className="reviews-section" suppressHydrationWarning>
        <div className="container" suppressHydrationWarning>
          <div className="text-container" suppressHydrationWarning>
            <span className="section-badge">Documented Protocol Feedback</span>
            <h2 className="section-title">Peer Observations</h2>
          </div>
          <div className="reviews-grid">
            <div className="review-card glass-panel">
              <div className="review-header">
                <div className="reviewer-info">
                  <h4>Dr. Elena Rostova</h4>
                  <span>Geneva, Switzerland</span>
                </div>
              </div>
              <p>“The consistency of the lyophilized solid state drastically improved our ECM assay baselines. Zero heavy-metal drift detected across six separate batches.”</p>
            </div>
            <div className="review-card glass-panel">
              <div className="review-header">
                <div className="reviewer-info">
                  <h4>Dr. Marcus Chen</h4>
                  <span>Singapore</span>
                </div>
              </div>
              <p>“Exceptional purity. The kinetic stability under strict thermal fluctuations surpassed our control groups easily. Highly recommended for neurological modeling.”</p>
            </div>
            <div className="review-card glass-panel">
              <div className="review-header">
                <div className="reviewer-info">
                  <h4>Dr. Sarah Sterling</h4>
                  <span>London, UK</span>
                </div>
              </div>
              <p>“Our fibroblast cultures responded perfectly. Absolute visual clarity upon reconstitution, completely eliminating the confounding variables we previously struggled with.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Purity Section */}
      <section className="data-section container" suppressHydrationWarning>
        <div className="text-container" suppressHydrationWarning>
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
                  <td>Eliminates catastrophic protocol failures caused by heavy-metal synthesis byproducts.</td>
                </tr>
                <tr>
                  <td>Appearance</td>
                  <td>Vivid Blue Powder</td>
                  <td>The ultimate visual proof of a flawless, fully coordinated copper-peptide bond.</td>
                </tr>
                <tr>
                  <td>Solubility</td>
                  <td>High (Aqueous)</td>
                  <td>Prevents clumping and ensures perfectly homogeneous dispersal across standard buffer solutions.</td>
                </tr>
                <tr>
                  <td>Identity</td>
                  <td>Mass Spec Verified</td>
                  <td>Irrefutably confirms the molecular weight fingerprint, guaranteeing zero synthesis drift.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="cta-section container" suppressHydrationWarning>
        <div className="text-container" suppressHydrationWarning>
          <div className="cta-box" suppressHydrationWarning>
            <div className="cta-content" suppressHydrationWarning>
              <h2 className="cta-title">Sourcing and Laboratory Protocols</h2>
              <p className="cta-text">
                Inferior synthesis inevitably leads to rapid oxidation and failed outcomes. For researchers demanding absolute stability, vacuum-sealed enclosures, and fully verified HPLC analytical data, sourcing from a dedicated, top-tier synthesis laboratory is non-negotiable.
              </p>
              <a href="https://99puritypeptides.com" target="_blank" rel="noopener noreferrer" className="cta-button">
                View Recommended Synthesis Laboratory
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer" suppressHydrationWarning>
        <div className="container" suppressHydrationWarning>
          <p className="disclaimer">
            Legal Disclaimer: The information presented in this review is for educational and laboratory research purposes only. Compounds discussed herein have not been approved by the FDA for human consumption. Use is strictly limited to in-vitro or laboratory-based research settings.
          </p>
        </div>
      </footer>
    </main>
  );
}
