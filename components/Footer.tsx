import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0">
                <Image
                  src="/99Logo.png"
                  alt="99 Purity Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="font-display text-base font-medium uppercase tracking-[0.2em] text-primary">
                99 Purity <span className="font-light text-secondary">Research</span>
              </span>
            </div>
            <p className="text-secondary text-sm font-light leading-relaxed max-w-sm">
              99 Purity Research sets the gold standard in peptides research and laboratory verification. 
              Purity confirmed through HPLC and Mass Spectrometry for research peptides in USA.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-primary text-[11px] uppercase tracking-widest mb-4">Research</h4>
              <ul className="space-y-2 text-[12px] font-light text-muted">
                <li><Link href="/database" className="hover:text-accent transition-colors">Database</Link></li>
                <li><Link href="/synthesis" className="hover:text-accent transition-colors">Synthesis</Link></li>
                <li><Link href="/protocols" className="hover:text-accent transition-colors">Protocols</Link></li>
                <li><Link href="/glossary" className="hover:text-accent transition-colors">Technical Glossary</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary text-[11px] uppercase tracking-widest mb-4">Corporate</h4>
              <ul className="space-y-2 text-[12px] font-light text-muted">
                <li><Link href="/terms" className="hover:text-accent transition-colors">Terms of Use</Link></li>
                <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                <li><Link href="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link></li>
                <li><a href="https://99puritypeptides.com/blog/" target="_blank" className="hover:text-accent transition-colors">Research Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="col-span-full mt-16 pt-8 border-t border-border/30">
            <p className="text-[10px] text-muted leading-relaxed uppercase tracking-widest text-center max-w-4xl mx-auto">
              <span className="text-accent font-bold">Research Disclaimer:</span> All products listed on this site and within this research database are strictly for in-vitro laboratory research purposes only. They are not intended for human or animal consumption, diagnostic, therapeutic, or any other purposes. 99 Purity Research does not provide medical advice or protocols for human application. Experimental integrity is the responsibility of the lead researcher.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-muted tracking-widest uppercase">
            © 2026 99 Purity Research. Precision Synthesis V4.0.2
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] text-muted hover:text-accent transition-colors uppercase tracking-widest">Privacy</Link>
            <Link href="/terms" className="text-[10px] text-muted hover:text-accent transition-colors uppercase tracking-widest">Terms</Link>
            <Link href="/sitemap" className="text-[10px] text-muted hover:text-accent transition-colors uppercase tracking-widest">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
